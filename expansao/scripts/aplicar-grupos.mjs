#!/usr/bin/env node
// Piloto de formatos novos: preenche `grupo` e `grupo_com` das fichas de um lote a partir das relacionadas
// (mesma lógica do grupos.mjs) e das decisões gravadas em expansao/fontes/lote-NNN-grupos.txt:
//   G <id> <grupo>        dá o grupo a uma ficha que não tem G= na fonte
//   X <ref>               ignora esta referência no lote inteiro (ruído: "Pele" órgão x "Pelé", "Páris" x "Paris")
//   X <id> <ref>          ignora a referência só para esta ficha
//   + <id> <ref>          acrescenta uma referência que o cruzamento automático não pega (ex.: espelho com outra grafia)
//   S <id>                só as referências declaradas (GC= e +): para palavras comuns como "Gado", "Elite", "Milão"
// Só fichas com grupo recebem grupo_com. Formatos nao-e, numero e qual-primeiro só puxam E (como no grupos.mjs). Resposta comum (citada em mais de 12 enunciados, ex.: Paris) só puxa
// as que citam ou são citadas pelo enunciado (E) e as declaradas na fonte; resposta igual não basta.
// Uso: node expansao/scripts/aplicar-grupos.mjs lote-106.json
import { readFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';
import { RAIZ_REPO, RAIZ_EXP, PASTA_LOTES, lerJson, gravarJson } from './lib.mjs';
import { readdirSync } from 'node:fs';

const nome = process.argv[2];
const n = nome.slice(5, 8);
const arq = join(PASTA_LOTES, nome);
const lote = lerJson(arq);
const dec = join(RAIZ_EXP, 'fontes', `lote-${n}-grupos.txt`);
const G = new Map(), X = new Set(), XI = new Set(), MAIS = [], SO = new Set();
if (existsSync(dec)) for (const l of readFileSync(dec, 'utf8').split(/\r?\n/)) {
  const c = l.trim().split(/\s+/);
  if (!c[0] || c[0].startsWith('#')) continue;
  if (c[0] === 'G') G.set(c[1], c[2]);
  else if (c[0] === 'X' && c.length === 2) X.add(c[1]);
  else if (c[0] === 'X') XI.add(c[1] + ' ' + c[2]);
  else if (c[0] === '+') MAIS.push([c[1], c[2]]);
  else if (c[0] === 'S') SO.add(c[1]);
}
const norm = (s) => ' ' + String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
const main = JSON.parse(execSync('git show origin/main:perguntas.json', { cwd: RAIZ_REPO, maxBuffer: 1 << 28 }).toString());
const outrosPiloto = readdirSync(PASTA_LOTES).filter((f) => /^lote-\d+\.json$/.test(f) && Number(f.slice(5, 8)) >= 106 && f !== nome)
  .flatMap((f) => lerJson(join(PASTA_LOTES, f)).filter((p) => p.status !== 'descartada').map((p) => ({ ...p, _ref: 'lote-' + f.slice(5, 8) + ':' + p.id })));
const doLote = lote.filter((p) => p.status !== 'descartada').map((p) => ({ ...p, _ref: `lote-${n}:` + p.id }));
const todas = [...main.map((p, i) => ({ ...p, _ref: 'banco:' + i })), ...outrosPiloto, ...doLote].map((p) => ({ p, q: norm(p.pergunta), r: norm(p.resposta) }));
const cit = new Map();
const citacoes = (rn) => { if (!cit.has(rn)) cit.set(rn, todas.filter((t) => t.q.includes(rn)).length); return cit.get(rn); };
let mud = 0;
for (const p of lote) {
  if (p.status === 'descartada') continue;
  if (G.has(p.id)) p.grupo = G.get(p.id);
  if (!p.grupo) continue;
  const ref = `lote-${n}:` + p.id;
  const rn = norm(p.resposta), qn = norm(p.pergunta);
  const comum = citacoes(rn) > 12;
  const outras = todas.filter((t) => t.p._ref !== ref);
  const SO_RESP = ['nao-e', 'numero', 'qual-primeiro'].includes(p.formato);
  const R = rn.trim().length >= 3 && !SO_RESP ? outras.filter((t) => (!comum && t.r === rn) || (!comum && t.q.includes(rn))) : [];
  const E = outras.filter((t) => t.r.trim().length >= 5 && t.r !== rn && qn.includes(t.r) && citacoes(t.r) <= 12);
  const set = new Set(p.grupo_com || []);
  for (const t of SO.has(p.id) ? [] : [...R, ...E]) {
    const r = t.p._ref;
    if (X.has(r) || XI.has(p.id + ' ' + r)) continue;
    if (r.startsWith(`lote-${n}:`) && t.p.grupo === p.grupo) continue; // mesmo grupo no lote: já anda junto
    set.add(r);
  }
  for (const [id, r] of MAIS) if (id === p.id) set.add(r);
  const novo = [...set];
  if (JSON.stringify(novo) !== JSON.stringify(p.grupo_com || [])) mud++;
  p.grupo_com = novo;
}
gravarJson(arq, lote);
console.log(`${nome}: ${mud} fichas com grupo_com atualizado; ${lote.filter((p) => p.grupo).length} com grupo`);
