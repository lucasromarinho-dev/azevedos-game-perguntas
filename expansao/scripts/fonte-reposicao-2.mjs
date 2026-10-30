#!/usr/bin/env node
// Grava em cada pergunta dos lotes 115-119 o campo verificado_web com a fonte curta, tirada da linha "#W" da fonte:
//   "#W pt|Título|termos"     -> "pt.wikipedia: Título resolvido" (o título final vem do cache do checar-reposicao-2.mjs)
//   "#W web|consulta|fonte"   -> a fonte escrita na linha (ex.: "web: Lance e Rolling Stone Brasil")
// Rode depois de checar-reposicao-2.mjs (que baixa as páginas) e de montar-lote.mjs.
// Uso: node expansao/scripts/fonte-reposicao-2.mjs 115 116 117 118 119
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { PASTA_LOTES, gravarJson } from './lib.mjs';

const CACHE = join(process.env.TEMP || '/tmp', 'wiki-cache-reposicao-2');
const chave = (lang, t) => join(CACHE, createHash('sha1').update(lang + '|' + t).digest('hex') + '.json');
for (const n of process.argv.slice(2)) {
  const fonte = readFileSync(`expansao/fontes/lote-${n}.txt`, 'utf8').split(/\r?\n/);
  const porPergunta = {};
  let w = null;
  for (const l of fonte) {
    if (l.startsWith('#W ')) { w = l.slice(3).trim(); continue; }
    if (!l.startsWith('N|')) continue;
    const p = l.split('|')[3];
    if (w) {
      const c = w.split('|');
      if (c[0] === 'web') porPergunta[p] = c[2] || null;
      else {
        const k = chave(c[0], c[1]);
        const t = existsSync(k) ? JSON.parse(readFileSync(k, 'utf8')).titulo : c[1];
        porPergunta[p] = `${c[0]}.wikipedia: ${t}`;
      }
    }
    w = null;
  }
  const arq = join(PASTA_LOTES, `lote-${n}.json`);
  const lote = JSON.parse(readFileSync(arq, 'utf8'));
  let sem = 0;
  for (const q of lote) {
    const f = porPergunta[q.pergunta];
    if (f) q.verificado_web = f; else { sem++; console.log('sem fonte:', q.pergunta); }
  }
  writeFileSync(arq, JSON.stringify(lote, null, 1) + '\n');
  console.log(`lote-${n}: ${lote.length - sem} com fonte, ${sem} sem`);
}
