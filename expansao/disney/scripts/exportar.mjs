#!/usr/bin/env node
// Gera expansao/disney/perguntas-disney.json no formato que o jogo lê: só os 5 campos, minificado numa linha,
// UTF-8 sem BOM e sem quebra de linha no final. A ordem é a dos lotes (001 a 010) e, dentro do lote, a da fonte,
// então fica estável enquanto os lotes não mudarem. Zero IA.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = join(dirname(fileURLToPath(import.meta.url)), '..');
const saida = [];
for (const f of readdirSync(join(AQUI, 'lotes')).filter((x) => /^disney-\d{3}\.json$/.test(x)).sort()) {
  for (const p of JSON.parse(readFileSync(join(AQUI, 'lotes', f), 'utf8'))) {
    if (p.status === 'descartada') continue;
    saida.push({ categoria: p.categoria, dificuldade: p.dificuldade, pergunta: p.pergunta, resposta: p.resposta, alternativas: p.alternativas });
  }
}
writeFileSync(join(AQUI, 'perguntas-disney.json'), JSON.stringify(saida), { encoding: 'utf8' });
console.log(`${saida.length} perguntas gravadas em perguntas-disney.json`);
