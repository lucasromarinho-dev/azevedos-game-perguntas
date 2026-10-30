#!/usr/bin/env node
// Reescreve enunciados direto no lote (a fonte guarda o original, para o montar-lote.mjs não duplicar).
// Uso: node expansao/scripts/reescrever.mjs lote-086.json edicoes.txt
//   edicoes.txt: uma linha por edição, "id|novo enunciado" (linhas com # são ignoradas)
// Grava em `correcao` que o enunciado foi reescrito na geração (para não citar a resposta de outra pergunta).
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { lerJson, gravarJson, PASTA_LOTES } from './lib.mjs';
const [arq, edicoes] = process.argv.slice(2);
const caminho = join(PASTA_LOTES, arq);
const lote = lerJson(caminho);
let n = 0;
for (const linha of readFileSync(edicoes, 'utf8').split(/\r?\n/)) {
  if (!linha.trim() || linha.startsWith('#')) continue;
  const [id, texto] = linha.split('|').map((s) => s.trim());
  const p = lote.find((q) => q.id === id);
  if (!p) { console.log('id não achado:', id); continue; }
  if (/\b(atual|atualmente|hoje)\b/i.test(texto)) { console.log(`${id}: palavra que envelhece`); continue; }
  const nota = `enunciado reescrito na geração (antes: "${p.pergunta}")`;
  p.pergunta = texto;
  p.correcao = p.correcao ? `${p.correcao}; ${nota}` : nota;
  n++;
}
gravarJson(caminho, lote);
console.log(`${arq}: ${n} enunciado(s) reescrito(s)`);
