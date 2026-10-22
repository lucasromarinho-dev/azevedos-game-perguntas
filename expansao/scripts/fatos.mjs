#!/usr/bin/env node
// FATOS JÁ USADOS (zero IA): para cada nome de uma lista, mostra quantas perguntas (banco + novas válidas) o citam
// e até 4 delas, em uma linha. Serve para escrever um ÂNGULO NOVO sobre um nome que já aparece no banco
// (ex.: "Capivara" só aparecia em "Serra da Capivara"; "maior roedor do mundo" estava livre).
// Uso: node expansao/scripts/fatos.mjs arquivo.txt [--curto] [--registrar]   (nomes separados por vírgula ou um por linha; "#" = comentário)
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { lerBancoAtual, listarLotes, lerJson, gravarJson, limpar, RAIZ_EXP } from './lib.mjs';
// --registrar: grava o custo em metricas.json > listas (tipo "fatos"; conta os caracteres da SAÍDA, que é o que o gerador lê)

const todas = [...lerBancoAtual(), ...listarLotes().flatMap((f) => lerJson(f)).filter((p) => p.status !== 'descartada')].map((p) => ({
  t: ' ' + limpar(p.pergunta + ' ' + p.resposta) + ' ',
  s: p.pergunta.replace(/^(Qual|Quem|Como|Em qual|O que)\s+/, '') + ' => ' + p.resposta,
}));
const termos = readFileSync(process.argv[2], 'utf8').split(/\r?\n/).filter((l) => !l.trim().startsWith('#')).join(',')
  .split(',').map((x) => x.trim()).filter(Boolean);
let saida = '', livres = 0;
for (const t of termos) {
  const k = ' ' + limpar(t) + ' ';
  const h = todas.filter((p) => p.t.includes(k));
  if (!h.length) livres++;
  if (process.argv.includes('--curto') && h.length > 1) continue; // --curto: só os nomes com 0 ou 1 pergunta (o que interessa)
  saida += `## ${t} (${h.length}): ${h.slice(0, 2).map((p) => p.s.slice(0, 70)).join(' | ')}
`;
}
process.stdout.write(saida);
if (process.argv.includes('--registrar')) {
  const camM = join(RAIZ_EXP, 'metricas.json');
  const met = lerJson(camM);
  met.listas = met.listas || {};
  const chars = saida.length + termos.join(', ').length;
  met.listas[process.argv[2].replace(/^.*candidatas[\/\\]/, '')] = { tipo: 'fatos', linhas: termos.length, existem: termos.length - livres, risco: 0,
    livres, caracteres: chars, tokens_aprox: Math.round(chars / 3.5) };
  gravarJson(camM, met);
}
