#!/usr/bin/env node
// FATOS JÁ USADOS (zero IA): para cada nome de uma lista, mostra quantas perguntas (banco + novas válidas) o citam
// e até 4 delas, em uma linha. Serve para escrever um ÂNGULO NOVO sobre um nome que já aparece no banco
// (ex.: "Capivara" só aparecia em "Serra da Capivara"; "maior roedor do mundo" estava livre).
// Uso: node expansao/scripts/fatos.mjs arquivo.txt   (nomes separados por vírgula ou um por linha; "#" = comentário)
import { readFileSync } from 'node:fs';
import { lerBancoAtual, listarLotes, lerJson, limpar } from './lib.mjs';

const todas = [...lerBancoAtual(), ...listarLotes().flatMap((f) => lerJson(f)).filter((p) => p.status !== 'descartada')].map((p) => ({
  t: ' ' + limpar(p.pergunta + ' ' + p.resposta) + ' ',
  s: p.pergunta.replace(/^(Qual|Quem|Como|Em qual|O que)\s+/, '') + ' => ' + p.resposta,
}));
const termos = readFileSync(process.argv[2], 'utf8').split(/\r?\n/).filter((l) => !l.trim().startsWith('#')).join(',')
  .split(',').map((x) => x.trim()).filter(Boolean);
for (const t of termos) {
  const k = ' ' + limpar(t) + ' ';
  const h = todas.filter((p) => p.t.includes(k));
  console.log(`## ${t} (${h.length}): ${h.slice(0, 4).map((p) => p.s.slice(0, 90)).join(' | ')}`);
}
