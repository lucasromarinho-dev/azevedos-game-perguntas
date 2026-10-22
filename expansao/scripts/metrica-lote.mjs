#!/usr/bin/env node
// Registra em metricas.json a linha de um lote. Rodada 2 separa LISTAS (candidatas curtas) e PERGUNTAS (fontes):
//   listas    : linhas checadas, quantas já existiam (descarte das listas), tokens
//   perguntas : escritas, válidas, descartadas pelo detector (descarte), tokens
//   tokens_por_valida: listas, perguntas e total
// Caracteres contados nos arquivos; tokens aproximados = caracteres / 3,5 (português). Não inclui raciocínio interno nem
// chamadas de ferramenta, que não ficam em arquivo.
// Uso: node expansao/scripts/metrica-lote.mjs 16 "r2-016.txt,r2-016b.txt"
//   (as listas precisam ter sido registradas com candidatas.mjs --registrar, que grava metricas.json > listas)
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { lerJson, gravarJson, RAIZ_EXP, PASTA_LOTES } from './lib.mjs';

const n = String(process.argv[2]).padStart(3, '0');
const usadas = (process.argv[3] || '').split(',').filter(Boolean);
const fontes = readdirSync(join(RAIZ_EXP, 'fontes')).filter((f) => f.startsWith(`lote-${n}`));
let chars = 0;
for (const f of fontes) {
  const ls = readFileSync(join(RAIZ_EXP, 'fontes', f), 'utf8').split(/\r?\n/).filter((l) => l.trim() && !l.startsWith('#'));
  chars += ls.join('\n').length;
}
const lote = lerJson(join(PASTA_LOTES, `lote-${n}.json`));
const validas = lote.filter((p) => p.status !== 'descartada').length;
const desc = lote.length - validas;
const m = lerJson(join(RAIZ_EXP, 'metricas.json'));
const L = { arquivos: usadas, linhas: 0, existem: 0, risco: 0, tokens_aprox: 0, nomes_sondados: 0, nomes_ausentes: 0 };
for (const u of usadas) {
  const x = m.listas?.[u];
  if (!x) { console.error(`lista ${u} não registrada (rode candidatas.mjs --registrar)`); process.exit(1); }
  L.tokens_aprox += x.tokens_aprox;
  // sonda de nomes (ausentes.mjs) conta no custo, mas não como candidata
  if (x.tipo === 'sonda de nomes') { L.nomes_sondados += x.linhas; L.nomes_ausentes += x.livres; continue; }
  L.linhas += x.linhas; L.existem += x.existem; L.risco += x.risco;
}
L.descarte = +(L.existem / (L.linhas || 1)).toFixed(2);
L.candidatas_por_valida = +(L.linhas / (validas || 1)).toFixed(2);
const tokP = Math.round(chars / 3.5);
m.lotes = (m.lotes || []).filter((l) => l.lote !== n);
m.lotes.push({
  lote: n, metodo: 'respostas_primeiro_v3', escritas: lote.length, validas, descartadas: desc,
  taxa_descarte: +(desc / lote.length).toFixed(2), caracteres: chars, tokens_aprox: tokP,
  rodadas_de_reposicao: fontes.length - 1, candidatas_usadas: usadas,
  listas: L,
  perguntas: { escritas: lote.length, validas, descartadas_detector: desc, descarte: +(desc / lote.length).toFixed(2), tokens_aprox: tokP },
  tokens_por_valida: { listas: Math.round(L.tokens_aprox / (validas || 1)), perguntas: Math.round(tokP / (validas || 1)),
    total: Math.round((L.tokens_aprox + tokP) / (validas || 1)) },
});
m.lotes.sort((a, b) => a.lote.localeCompare(b.lote));
gravarJson(join(RAIZ_EXP, 'metricas.json'), m);
console.log(JSON.stringify(m.lotes.find((l) => l.lote === n)));
