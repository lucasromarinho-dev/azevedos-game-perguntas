#!/usr/bin/env node
// Quantas perguntas válidas faltam num lote para bater a composição alvo (cota do plano dividida pelos lotes da rodada).
// Uso: node expansao/scripts/faltam.mjs lote-016.json
import { join } from 'node:path';
import { lerJson, PASTA_LOTES, RAIZ_EXP, CATEGORIAS, DIFICULDADES } from './lib.mjs';
const arq = process.argv[2];
const n = parseInt(arq.match(/\d+/)[0], 10);
// Lotes 001-005: piloto (plano.json, 5 lotes). 006-015: rodada 1 (plano-r1.json, 10 lotes). 016-025: rodada 2 (plano-r2.json, 10 lotes). 026-035: rodada 3 (plano-r3.json). 036-045: rodada 4 (plano-r4.json). 046-055: rodada 5 (plano-r5.json). 056-065: rodada 6 (plano-r6.json).
const [plano, NL, k] = n >= 56 ? ['plano-r6.json', 10, n - 55] : n >= 46 ? ['plano-r5.json', 10, n - 45] : n >= 36 ? ['plano-r4.json', 10, n - 35] : n >= 26 ? ['plano-r3.json', 10, n - 25] : n >= 16 ? ['plano-r2.json', 10, n - 15] : n >= 6 ? ['plano-r1.json', 10, n - 5] : ['plano.json', 5, n];
const metas = lerJson(join(RAIZ_EXP, plano)).metas;
const lote = lerJson(join(PASTA_LOTES, arq)).filter((p) => p.status !== 'descartada');
// Cota do lote k: parte inteira de meta*k/NL menos a de meta*(k-1)/NL (distribui o resto entre os lotes)
let total = 0;
for (const c of CATEGORIAS) {
  const linha = [];
  for (const d of DIFICULDADES) {
    const m = metas[c][d];
    const cota = Math.round((m * k) / NL) - Math.round((m * (k - 1)) / NL);
    const tem = lote.filter((p) => p.categoria === c && p.dificuldade === d).length;
    total += Math.max(0, cota - tem);
    linha.push(`${d} ${tem}/${cota}${cota - tem > 0 ? ` (faltam ${cota - tem})` : ''}`);
  }
  console.log(c.padEnd(15), linha.join('  '));
}
console.log(`Válidas: ${lote.length} | faltam: ${total}`);
