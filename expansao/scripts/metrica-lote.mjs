#!/usr/bin/env node
// Registra em metricas.json a linha de um lote (método respostas primeiro): perguntas escritas, válidas,
// descartes do detector, caracteres escritos (fontes do lote) e tokens aproximados (caracteres / 3,5).
// As listas de candidatas são contadas à parte, por arquivo (ver "candidatas" em metricas.json).
// Uso: node expansao/scripts/metrica-lote.mjs 6 "r1-a.txt,r1-b.txt"
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { lerJson, gravarJson, RAIZ_EXP, PASTA_LOTES } from './lib.mjs';

const n = String(process.argv[2]).padStart(3, '0');
const usadas = (process.argv[3] || '').split(',').filter(Boolean);
const fontes = readdirSync(join(RAIZ_EXP, 'fontes')).filter((f) => f.startsWith(`lote-${n}`));
let chars = 0, linhas = 0;
for (const f of fontes) {
  const ls = readFileSync(join(RAIZ_EXP, 'fontes', f), 'utf8').split(/\r?\n/).filter((l) => l.trim() && !l.startsWith('#'));
  linhas += ls.length;
  chars += ls.join('\n').length;
}
const lote = lerJson(join(PASTA_LOTES, `lote-${n}.json`));
const validas = lote.filter((p) => p.status !== 'descartada').length;
const desc = lote.length - validas;
const m = lerJson(join(RAIZ_EXP, 'metricas.json'));
m.lotes = (m.lotes || []).filter((l) => l.lote !== n);
m.lotes.push({
  lote: n, metodo: 'respostas_primeiro', escritas: lote.length, validas, descartadas: desc,
  taxa_descarte: +(desc / lote.length).toFixed(2), caracteres: chars, tokens_aprox: Math.round(chars / 3.5),
  rodadas_de_reposicao: fontes.length - 1, candidatas_usadas: usadas,
});
m.lotes.sort((a, b) => a.lote.localeCompare(b.lote));
// candidatas: totais por arquivo
m.candidatas = m.candidatas || {};
for (const f of readdirSync(join(RAIZ_EXP, 'candidatas'))) {
  if (!f.startsWith('r')) continue;
  const ls = readFileSync(join(RAIZ_EXP, 'candidatas', f), 'utf8').split(/\r?\n/).filter((l) => l.trim() && !l.startsWith('#') && !l.startsWith('@'));
  m.candidatas[f] = { linhas: ls.length, caracteres: ls.join('\n').length, tokens_aprox: Math.round(ls.join('\n').length / 3.5) };
}
gravarJson(join(RAIZ_EXP, 'metricas.json'), m);
console.log(m.lotes.find((l) => l.lote === n));
