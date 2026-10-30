#!/usr/bin/env node
// Checador simples de resposta: acha perguntas do banco publicado e dos lotes (não descartadas) cuja resposta
// é igual, ou cujo enunciado cita a resposta (texto normalizado, sem acento). Pega duplicadas e espelhos que
// o detector deixa passar por grafia.
//
// Uso 1 (sonda, como no gerador da rodada 6): linhas "NIVEL|Categoria|Resposta - fato" no stdin
//   node expansao/scripts/candidatas.mjs arq.txt --livres | node expansao/scripts/checa-resposta.mjs
// Uso 2 (conferência): confere as perguntas de um ou mais lotes contra todo o resto
//   node expansao/scripts/checa-resposta.mjs --lote lote-056.json [lote-057.json ...] [--status gerada]
//   Mostra, para cada pergunta com acerto: (R) outra com a mesma resposta ou cuja pergunta cita esta resposta;
//   (E) outra cuja resposta aparece no enunciado desta.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { RAIZ_REPO, PASTA_LOTES } from './lib.mjs';

const norm = (s) => ' ' + String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
const banco = JSON.parse(readFileSync(join(RAIZ_REPO, 'perguntas.json'), 'utf8')).map((p, i) => ({ ...p, _ref: 'banco:' + i }));
const arqs = readdirSync(PASTA_LOTES).filter((f) => /^lote-\d+\.json$/.test(f)).sort();
const lotes = arqs.flatMap((f) => JSON.parse(readFileSync(join(PASTA_LOTES, f), 'utf8'))
  .filter((p) => p.status !== 'descartada')
  .map((p) => ({ ...p, _ref: f.slice(5, 8) + ':' + p.id })));
const todas = [...banco, ...lotes].map((p) => ({ p, q: norm(p.pergunta), r: norm(p.resposta) }));
// Quantos enunciados citam um texto: respostas muito citadas (Japão, Português) viram ruído e são resumidas.
const citCache = new Map();
const citacoes = (rn) => { if (!citCache.has(rn)) citCache.set(rn, todas.filter((t) => t.q.includes(rn)).length); return citCache.get(rn); };
const LIM_CIT = 12;

const args = process.argv.slice(2);
const iLote = args.indexOf('--lote');
if (iLote >= 0) {
  const iSt = args.indexOf('--status');
  const st = iSt >= 0 ? args[iSt + 1] : null;
  const alvo = args.slice(iLote + 1).filter((a, k, arr) => !a.startsWith('--') && arr[k - 1] !== '--status');
  for (const f of alvo) {
    const nome = f.replace(/^.*[\\/]/, '');
    const qs = JSON.parse(readFileSync(join(PASTA_LOTES, nome), 'utf8')).filter((p) => p.status !== 'descartada' && (!st || p.status === st));
    for (const p of qs) {
      const rn = norm(p.resposta), qn = norm(p.pergunta);
      const outras = todas.filter((t) => !t.p._ref.endsWith(':' + p.id));
      const comum = citacoes(rn) > LIM_CIT;
      const R = rn.trim().length >= 3 ? outras.filter((t) => t.r === rn || (!comum && t.q.includes(rn))) : [];
      const E = outras.filter((t) => t.r.trim().length >= 5 && t.r !== rn && citacoes(t.r) <= LIM_CIT && qn.includes(t.r));
      if (!R.length && !E.length) continue;
      console.log(`## ${nome.slice(5, 8)}:${p.id} [${p.categoria}/${p.dificuldade}] ${p.pergunta} => ${p.resposta}` + (comum ? ` (resposta citada em ${citacoes(rn)} enunciados)` : ''));
      for (const t of R.slice(0, 4)) console.log(`   R ${t.p._ref} ${t.p.pergunta.slice(0, 90)} => ${t.p.resposta}`);
      if (R.length > 4) console.log(`   R ... +${R.length - 4}`);
      for (const t of E.slice(0, 4)) console.log(`   E ${t.p._ref} ${t.p.pergunta.slice(0, 90)} => ${t.p.resposta}`);
    }
  }
} else {
  const linhas = readFileSync(0, 'utf8').split(/\r?\n/).filter(Boolean);
  for (const l of linhas) {
    const [, , resto] = l.split('|');
    if (!resto) continue;
    const resp = resto.split(' - ')[0];
    const rn = norm(resp);
    if (rn.trim().length < 3) { console.log('?? ', l); continue; }
    const hits = todas.filter((t) => t.r === rn || t.q.includes(rn) || (rn.length > 6 && t.r.includes(rn)));
    if (hits.length) console.log(`!! ${resp} (${hits.length}): ` + hits.slice(0, 2).map((h) => h.p.pergunta.slice(0, 70) + ' => ' + h.p.resposta).join(' || '));
    else console.log('ok ' + resp);
  }
}
