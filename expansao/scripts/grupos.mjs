#!/usr/bin/env node
// Piloto de formatos novos (lotes 106+): confere o campo `grupo` / `grupo_com`.
// Referências: "banco:N" = posição no perguntas.json da MAIN (lido com `git show origin/main:perguntas.json`)
// e "lote-NNN:id" = outra pergunta dos lotes do piloto.
// Para cada pergunta do piloto mostra as relacionadas que ainda não estão em grupo_com:
//   R = outra com a mesma resposta, ou cujo enunciado cita esta resposta
//   E = outra cuja resposta aparece no enunciado desta
// Formatos nao-e, numero e qual-primeiro só olham E (a resposta deles é uma opção de lista ou um número, não um fato que se entregue).
// No fim: referências que caíram em dois grupos diferentes (conflito: cada pergunta só pode ter um `grupo`).
// Uso: node expansao/scripts/grupos.mjs [lote-106.json ...] [--todos] (--todos mostra também as que já estão cobertas)
import { readFileSync, readdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';
import { RAIZ_REPO, PASTA_LOTES } from './lib.mjs';

const args = process.argv.slice(2);
const todosFlag = args.includes('--todos');
const norm = (s) => ' ' + String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
const main = JSON.parse(execSync('git show origin/main:perguntas.json', { cwd: RAIZ_REPO, maxBuffer: 1 << 28 }).toString());
const arqsPiloto = readdirSync(PASTA_LOTES).filter((f) => /^lote-\d+\.json$/.test(f) && Number(f.slice(5, 8)) >= 106).sort();
const alvo = args.filter((a) => /^lote-\d+\.json$/.test(a));
const piloto = arqsPiloto.flatMap((f) => JSON.parse(readFileSync(join(PASTA_LOTES, f), 'utf8'))
  .filter((p) => p.status !== 'descartada').map((p) => ({ ...p, _ref: 'lote-' + f.slice(5, 8) + ':' + p.id, _arq: f })));
const todas = [...main.map((p, i) => ({ ...p, _ref: 'banco:' + i })), ...piloto].map((p) => ({ p, q: norm(p.pergunta), r: norm(p.resposta) }));
const cit = new Map();
const citacoes = (rn) => { if (!cit.has(rn)) cit.set(rn, todas.filter((t) => t.q.includes(rn)).length); return cit.get(rn); };
const LIM = 12;
// ruídos já decididos em fontes/lote-NNN-grupos.txt (linhas "X ref" e "X id ref")
const X = new Set(), XI = new Set();
for (const f of arqsPiloto) {
  const d = join(RAIZ_REPO, 'expansao', 'fontes', f.replace('.json', '-grupos.txt'));
  try { for (const l of readFileSync(d, 'utf8').split(/\r?\n/)) { const c = l.trim().split(/\s+/); if (c[0] !== 'X') continue; if (c.length === 2) X.add(c[1]); else XI.add(c[1] + ' ' + c[2]); } } catch {}
}
const SO_RESP = new Set(['nao-e', 'numero', 'qual-primeiro']);

let pend = 0;
for (const p of piloto) {
  if (alvo.length && !alvo.includes(p._arq)) continue;
  const rn = norm(p.resposta), qn = norm(p.pergunta);
  const outras = todas.filter((t) => t.p._ref !== p._ref);
  const comum = citacoes(rn) > LIM;
  const R = rn.trim().length >= 3 && !SO_RESP.has(p.formato) ? outras.filter((t) => (!comum && t.r === rn) || (!comum && t.q.includes(rn))) : [];
  const E = outras.filter((t) => t.r.trim().length >= 5 && t.r !== rn && qn.includes(t.r) && citacoes(t.r) <= LIM);
  const gc = new Set(p.grupo_com || []);
  // perguntas do mesmo grupo no piloto também contam como cobertas
  const mesmoGrupo = new Set(piloto.filter((x) => p.grupo && x.grupo === p.grupo).map((x) => x._ref));
  const fora = (t) => !gc.has(t.p._ref) && !mesmoGrupo.has(t.p._ref) && !X.has(t.p._ref) && !XI.has(p.id + ' ' + t.p._ref);
  const faltaR = R.filter(fora);
  const faltaE = E.filter(fora);
  if (!faltaR.length && !faltaE.length && !todosFlag) continue;
  pend++;
  console.log(`## ${p._ref} [${p.formato || '-'}${p.grupo ? ' G=' + p.grupo : ''}] ${p.pergunta} => ${p.resposta}`);
  for (const t of faltaR.slice(0, 8)) console.log(`   R ${t.p._ref} ${t.p.pergunta.slice(0, 95)} => ${t.p.resposta}`);
  if (faltaR.length > 8) console.log(`   R ... +${faltaR.length - 8}`);
  for (const t of faltaE.slice(0, 8)) console.log(`   E ${t.p._ref} ${t.p.pergunta.slice(0, 95)} => ${t.p.resposta}`);
}
// conflitos: uma referência em dois grupos
const dono = new Map();
for (const p of piloto) {
  if (!p.grupo) continue;
  for (const r of [p._ref, ...(p.grupo_com || [])]) {
    if (!dono.has(r)) dono.set(r, new Set());
    dono.get(r).add(p.grupo);
  }
}
const conf = [...dono].filter(([, g]) => g.size > 1);
console.log(`\n${pend} perguntas com relacionadas fora do grupo; ${conf.length} referências em mais de um grupo`);
for (const [r, g] of conf) console.log(`   CONFLITO ${r}: ${[...g].join(', ')}`);
const grupos = new Map();
for (const p of piloto) if (p.grupo) grupos.set(p.grupo, (grupos.get(p.grupo) || 0) + 1);
console.log(`${grupos.size} grupos, ${piloto.filter((p) => p.grupo).length} perguntas do piloto com grupo`);
