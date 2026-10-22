#!/usr/bin/env node
// Equilibra a posição da resposta certa (A/B/C/D) entre as perguntas válidas de um lote,
// trocando a certa de lugar com uma errada só onde precisa (mexe no mínimo possível).
// Uso: node expansao/scripts/balancear.mjs lote-001.json
import { join } from 'node:path';
import { lerJson, gravarJson, PASTA_LOTES } from './lib.mjs';
const caminho = join(PASTA_LOTES, process.argv[2]);
const lote = lerJson(caminho);
const validas = lote.filter((p) => p.status !== 'descartada');
const pos = (p) => p.alternativas.indexOf(p.resposta);
const cont = [0, 0, 0, 0];
validas.forEach((p) => cont[pos(p)]++);
const alvo = cont.map((_, i) => Math.floor(validas.length / 4) + (i < validas.length % 4 ? 1 : 0));
let trocas = 0;
for (const p of validas) {
  const de = pos(p);
  if (cont[de] <= alvo[de]) continue;
  const para = cont.findIndex((c, i) => c < alvo[i]);
  if (para < 0) break;
  [p.alternativas[de], p.alternativas[para]] = [p.alternativas[para], p.alternativas[de]];
  cont[de]--; cont[para]++; trocas++;
}
gravarJson(caminho, lote);
console.log(`${process.argv[2]}: ${trocas} troca(s). Posição da certa A/B/C/D = ${cont.join(' / ')}`);
