#!/usr/bin/env node
// Alternativas erradas que são a resposta de outra pergunta (lição da rodada 7: espelho de alternativas).
// Para cada errada de cada pergunta dos lotes pedidos, procura no banco publicado e em todos os lotes (não descartadas)
// perguntas cuja resposta é igual à errada (texto normalizado). Mostra:
//   LOTE  : a errada é resposta de outra pergunta do mesmo lote (sempre trocar)
//   RARA  : a errada é resposta de 1 a 4 perguntas na mesma categoria (quase sempre espelho de molde; trocar)
//   (respostas muito comuns, como países e estados, com 5 ou mais ocorrências, só aparecem com --tudo)
// Uso: node expansao/scripts/alternativas.mjs lote-086.json [lote-087.json ...] [--status gerada] [--tudo]
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { RAIZ_REPO, PASTA_LOTES } from './lib.mjs';

const args = process.argv.slice(2);
const alvo = args.filter((a) => /^lote-\d+\.json$/.test(a));
const iSt = args.indexOf('--status');
const status = iSt >= 0 ? args[iSt + 1] : null;
const tudo = args.includes('--tudo');
const norm = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const banco = JSON.parse(readFileSync(join(RAIZ_REPO, 'perguntas.json'), 'utf8')).map((p, i) => ({ ...p, _ref: 'banco:' + i, _lote: null }));
const arqs = readdirSync(PASTA_LOTES).filter((f) => /^lote-\d+\.json$/.test(f)).sort();
const lotes = arqs.flatMap((f) => JSON.parse(readFileSync(join(PASTA_LOTES, f), 'utf8'))
  .filter((p) => p.status !== 'descartada')
  .map((p) => ({ ...p, _ref: f.slice(5, 8) + ':' + p.id, _lote: f })));
// O banco publicado e os lotes 001-075 repetem as mesmas perguntas; tira as repetidas pelo enunciado.
const vistos = new Set();
const todas = [];
for (const p of [...lotes, ...banco]) { const k = norm(p.pergunta); if (vistos.has(k)) continue; vistos.add(k); todas.push(p); }
const porResp = new Map();
for (const p of todas) { const r = norm(p.resposta); if (!porResp.has(r)) porResp.set(r, []); porResp.get(r).push(p); }

let n = 0;
for (const f of alvo) {
  const lote = JSON.parse(readFileSync(join(PASTA_LOTES, f), 'utf8')).filter((p) => p.status !== 'descartada' && (!status || p.status === status));
  for (const p of lote) {
    const linhas = [];
    for (const a of p.alternativas) {
      if (a === p.resposta) continue;
      const outras = (porResp.get(norm(a)) || []).filter((o) => o.id !== p.id || o._lote !== f);
      if (!outras.length) continue;
      const mesmoLote = outras.filter((o) => o._lote === f);
      const mesmaCat = outras.filter((o) => o.categoria === p.categoria);
      let tipo = null;
      if (mesmoLote.length) tipo = 'LOTE';
      else if (mesmaCat.length && outras.length <= 4) tipo = 'RARA';
      else if (tudo) tipo = 'comum';
      if (!tipo) continue;
      const ex = (mesmoLote[0] || mesmaCat[0] || outras[0]);
      linhas.push(`   ${tipo.padEnd(5)} "${a}" (${outras.length}x) ex. ${ex._ref}: ${ex.pergunta.slice(0, 80)}`);
    }
    if (linhas.length) { n++; console.log(`${f.slice(5, 8)}:${p.id} [${p.categoria}] ${p.pergunta.slice(0, 90)} => ${p.resposta}`); console.log(linhas.join('\n')); }
  }
}
console.log(`\n${n} perguntas com errada que é resposta de outra`);
