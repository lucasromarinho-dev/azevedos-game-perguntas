#!/usr/bin/env node
// Troca linhas de uma fonte: node trocar-linhas.mjs fontes/disney-NNN.txt trocas.json
// trocas.json = [["trecho único da linha antiga", "linha nova inteira" | null para apagar], ...]
import { readFileSync, writeFileSync } from 'node:fs';
const [arq, trocasArq] = process.argv.slice(2);
let linhas = readFileSync(arq, 'utf8').split('\n');
for (const [trecho, nova] of JSON.parse(readFileSync(trocasArq, 'utf8'))) {
  const idx = linhas.map((l, i) => (l.includes(trecho) ? i : -1)).filter((i) => i >= 0);
  if (idx.length !== 1) { console.log(`ERRO (${idx.length} linhas): ${trecho}`); continue; }
  if (nova === null) linhas.splice(idx[0], 1); else linhas[idx[0]] = nova;
}
writeFileSync(arq, linhas.join('\n'));
