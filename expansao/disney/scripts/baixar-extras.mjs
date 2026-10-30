#!/usr/bin/env node
// Baixa verbetes extras (trilhas sonoras, personagens) e grava como PASTA/slug+nome.txt,
// que o verificar.mjs junta ao texto do filme. Uma chamada por verbete. Zero IA.
// Uso: node baixar-extras.mjs PASTA lista.json   (lista = [["slug", "pt"|"en", "Título do verbete"], ...])
import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';
const [pasta, listaArq] = process.argv.slice(2);
const UA = { 'User-Agent': 'QuizVerificador/1.0 (pesquisa educacional de quiz)' };
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
for (const [slug, lingua, titulo] of JSON.parse(readFileSync(listaArq, 'utf8'))) {
  const url = `https://${lingua}.wikipedia.org/w/api.php?` + new URLSearchParams({ action: 'query', prop: 'revisions', rvprop: 'content', rvslots: 'main', titles: titulo, redirects: '1', format: 'json', formatversion: '2' });
  let j;
  for (let t = 0; t < 5; t++) {
    const r = await fetch(url, { headers: UA });
    if (r.status === 429) { await espera(15000 * (t + 1)); continue; }
    j = await r.json();
    break;
  }
  appendFileSync(join(pasta, 'chamadas.log'), `${new Date().toISOString()} ${lingua}.wikipedia.org ${titulo}\n`);
  const p = j?.query?.pages?.[0];
  const txt = p && !p.missing && p.revisions ? p.revisions[0].slots.main.content : '';
  const nome = `${slug}+${lingua}-${titulo.replace(/[^\p{L}\p{N}]+/gu, '_')}.txt`;
  if (txt) writeFileSync(join(pasta, nome), txt);
  console.log(`${txt ? 'ok ' : 'NAO'} ${slug} ${lingua}: ${titulo} -> ${p?.title || '?'} (${txt.length})`);
  await espera(1500);
}
