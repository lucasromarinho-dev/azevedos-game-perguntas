#!/usr/bin/env node
// Troca alternativas erradas direto no lote (a fonte guarda o original, para o montar-lote.mjs não duplicar).
// Uso: node expansao/scripts/trocar.mjs lote-086.json trocas.txt
//   trocas.txt: uma linha por troca, "id|errada antiga|errada nova" (linhas com # são ignoradas)
// Grava em `correcao` da ficha o que foi trocado e por quê (errada que era resposta de outra pergunta).
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { lerJson, gravarJson, PASTA_LOTES } from './lib.mjs';
const [arq, trocas] = process.argv.slice(2);
const caminho = join(PASTA_LOTES, arq);
const lote = lerJson(caminho);
let n = 0;
for (const linha of readFileSync(trocas, 'utf8').split(/\r?\n/)) {
  if (!linha.trim() || linha.startsWith('#')) continue;
  const [id, velha, nova] = linha.split('|').map((s) => s.trim());
  const p = lote.find((q) => q.id === id);
  if (!p) { console.log('id não achado:', id); continue; }
  const i = p.alternativas.indexOf(velha);
  if (i < 0 || velha === p.resposta) { console.log(`${id}: "${velha}" não é errada desta pergunta`); continue; }
  if (p.alternativas.includes(nova)) { console.log(`${id}: "${nova}" já está nas alternativas`); continue; }
  p.alternativas[i] = nova;
  const nota = `errada "${velha}" trocada por "${nova}" na geração (era resposta de outra pergunta)`;
  p.correcao = p.correcao ? `${p.correcao}; ${nota}` : nota;
  n++;
}
gravarJson(caminho, lote);
console.log(`${arq}: ${n} troca(s)`);
