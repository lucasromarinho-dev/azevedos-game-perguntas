#!/usr/bin/env node
// Quantas perguntas válidas faltam num lote para bater a composição alvo (cota do plano dividida por 5 lotes).
// Uso: node expansao/scripts/faltam.mjs lote-001.json
import { join } from 'node:path';
import { lerJson, PASTA_LOTES, RAIZ_EXP, CATEGORIAS, DIFICULDADES } from './lib.mjs';
const arq = process.argv[2];
const n = parseInt(arq.match(/\d+/)[0], 10);
// Lotes 001-005: piloto (plano.json, 5 lotes). Lotes 006-015: rodada 1 da meta 3x (plano-r1.json, 10 lotes).
const r1 = n >= 6;
const metas = lerJson(join(RAIZ_EXP, r1 ? 'plano-r1.json' : 'plano.json')).metas;
const NL = r1 ? 10 : 5;
const k = r1 ? n - 5 : n;
const lote = lerJson(join(PASTA_LOTES, arq)).filter((p) => p.status !== 'descartada');
// Cota do lote n: parte inteira de meta*n/5 menos a de meta*(n-1)/5 (distribui o resto entre os lotes)
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
