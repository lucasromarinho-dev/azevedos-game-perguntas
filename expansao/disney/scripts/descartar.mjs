#!/usr/bin/env node
// Marca perguntas como descartadas na fonte (a linha ganha o prefixo "X|motivo|"). Zero IA.
// Uso: node descartar.mjs lista.json   (lista = [["id", "motivo"], ...])
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const AQUI = join(dirname(fileURLToPath(import.meta.url)), '..', 'fontes');
const lista = new Map(JSON.parse(readFileSync(process.argv[2], 'utf8')));
let feitos = 0;
for (const f of readdirSync(AQUI).filter((x) => /^disney-\d{3}\.txt$/.test(x))) {
  const linhas = readFileSync(join(AQUI, f), 'utf8').split('\n');
  let mudou = false;
  for (let i = 0; i < linhas.length; i++) {
    const l = linhas[i];
    if (!l.trim() || l.startsWith('#') || l.startsWith('X|')) continue;
    const id = createHash('sha1').update(l.split('|')[4].trim()).digest('hex').slice(0, 10);
    if (lista.has(id)) { linhas[i] = `X|${lista.get(id)}|${l}`; lista.delete(id); mudou = true; feitos++; }
  }
  if (mudou) writeFileSync(join(AQUI, f), linhas.join('\n'));
}
console.log(`descartadas ${feitos}; não achadas: ${[...lista.keys()].join(', ') || 'nenhuma'}`);
