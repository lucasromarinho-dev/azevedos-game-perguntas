#!/usr/bin/env node
// Busca de frase exata na Wikipédia (pt ou en) para conferir títulos e detalhes. Zero IA. User-Agent genérico.
// Uso: node buscar-wiki.mjs PASTA_LOG pt|en "frase 1" "frase 2" ...   (uma chamada à API por frase)
import { appendFileSync } from 'node:fs';
import { join } from 'node:path';
const [pasta, lingua, ...frases] = process.argv.slice(2);
const UA = { 'User-Agent': 'QuizVerificador/1.0 (pesquisa educacional de quiz)' };
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
for (const f of frases) {
  const url = `https://${lingua}.wikipedia.org/w/api.php?` + new URLSearchParams({ action: 'query', list: 'search', srsearch: `"${f}"`, srlimit: '4', format: 'json', formatversion: '2' });
  let j;
  for (let t = 0; t < 5; t++) {
    const r = await fetch(url, { headers: UA });
    if (r.status === 429) { await espera(15000 * (t + 1)); continue; }
    j = await r.json();
    break;
  }
  appendFileSync(join(pasta, 'chamadas.log'), `${new Date().toISOString()} ${lingua}.wikipedia.org busca "${f}"\n`);
  const hits = j?.query?.search || [];
  console.log(`\n### "${f}" (${j?.query?.searchinfo?.totalhits ?? '?'} resultados)`);
  for (const h of hits) console.log(`  - ${h.title}: ${h.snippet.replace(/<[^>]+>/g, '').slice(0, 160)}`);
  await espera(1500);
}
