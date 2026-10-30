#!/usr/bin/env node
// Baixa o texto (wikitexto) dos verbetes de cada filme na Wikipédia em inglês e em português,
// para a checagem automática das perguntas Disney. Zero IA. User-Agent genérico.
// Uso: node baixar-wiki.mjs PASTA_SAIDA [slug ...]
import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = dirname(fileURLToPath(import.meta.url));
const filmes = JSON.parse(readFileSync(join(AQUI, '..', 'filmes.json'), 'utf8'));
const SAIDA = process.argv[2];
const so = process.argv.slice(3);
const UA = { 'User-Agent': 'QuizVerificador/1.0 (pesquisa educacional de quiz)' };
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
const LOG = join(SAIDA, 'chamadas.log');

async function api(host, params) {
  const url = `https://${host}/w/api.php?` + new URLSearchParams({ format: 'json', formatversion: '2', redirects: '1', ...params });
  for (let t = 0; t < 6; t++) {
    const r = await fetch(url, { headers: UA });
    if (r.status === 429) { await espera(20000 * (t + 1)); continue; }
    const j = await r.json();
    appendFileSync(LOG, `${new Date().toISOString()} ${host} ${params.titles}\n`);
    return j;
  }
  throw new Error('429 persistente ' + url);
}

const texto = (p) => (p && !p.missing && p.revisions ? p.revisions[0].slots.main.content : '');

for (const [slug, [en]] of Object.entries(filmes)) {
  if (so.length && !so.includes(slug)) continue;
  const arqEn = join(SAIDA, `${slug}.en.txt`);
  if (existsSync(arqEn) && existsSync(join(SAIDA, `${slug}.pt.txt`))) continue;
  const base = en.replace(/ \(.*\)$/, '');
  const titulos = [en, `${base} (soundtrack)`, `${base} (${en.match(/\((\d{4})/)?.[1] || ''} soundtrack)`.replace(' ( soundtrack)', ' (original soundtrack)')];
  const j = await api('en.wikipedia.org', { action: 'query', prop: 'revisions|langlinks', rvprop: 'content', rvslots: 'main', lllang: 'pt', titles: titulos.join('|') });
  const pages = j.query.pages;
  const principal = pages.find((p) => p.title === (j.query.redirects?.find((r) => r.from === en)?.to || j.query.normalized?.find((n) => n.from === en)?.to || en)) || pages[0];
  const extra = pages.filter((p) => p !== principal).map(texto).join('\n\n');
  writeFileSync(arqEn, texto(principal) + '\n\n' + extra);
  const pt = principal.langlinks?.[0]?.title;
  let txtPt = '';
  if (pt) {
    await espera(2500);
    const k = await api('pt.wikipedia.org', { action: 'query', prop: 'revisions', rvprop: 'content', rvslots: 'main', titles: pt });
    txtPt = texto(k.query.pages[0]);
  }
  writeFileSync(join(SAIDA, `${slug}.pt.txt`), txtPt);
  console.log(slug, principal.title, texto(principal).length, '| pt:', pt, txtPt.length, '| extra', extra.length);
  await espera(2500);
}
