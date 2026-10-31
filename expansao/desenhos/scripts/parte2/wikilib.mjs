import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const CACHE = join(dirname(fileURLToPath(import.meta.url)), 'wiki');
mkdirSync(CACHE, { recursive: true });
const UA = { 'User-Agent': 'QuizChecker/2.0 (verificacao educacional de perguntas de quiz)' };
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
const arq = (host, t) => join(CACHE, (host + '__' + t).replace(/[^\p{L}\p{N}._-]+/gu, '_').slice(0, 150) + '.json');
// host: "pt.wikipedia.org/w" | "en.wikipedia.org/w" | "turmadamonica.fandom.com/pt-br"
export async function pagina(host, titulo) {
  const a = arq(host, titulo);
  if (existsSync(a)) return JSON.parse(readFileSync(a, 'utf8'));
  const url = `https://${host}/api.php?` + new URLSearchParams({ action: 'query', prop: 'revisions', rvprop: 'content', rvslots: 'main', format: 'json', formatversion: '2', redirects: '1', titles: titulo });
  for (let t = 0; t < 8; t++) {
    const r = await fetch(url, { headers: UA });
    const tx = await r.text();
    if (r.status === 429 || tx.startsWith('You are making')) { await espera(15000 * (t + 1)); continue; }
    const j = JSON.parse(tx); const p = j.query.pages[0];
    const out = p.missing || !p.revisions ? { titulo: p.title, missing: true, texto: '' } : { titulo: p.title, texto: p.revisions[0].slots.main.content };
    writeFileSync(a, JSON.stringify(out));
    await espera(1500);
    return out;
  }
  throw new Error('rate limit ' + host + ' ' + titulo);
}
export async function busca(host, q) {
  const url = `https://${host}/api.php?` + new URLSearchParams({ action: 'query', list: 'search', srsearch: q, format: 'json', formatversion: '2', srlimit: '5' });
  for (let t = 0; t < 8; t++) {
    const r = await fetch(url, { headers: UA }); const tx = await r.text();
    if (r.status === 429 || tx.startsWith('You are making')) { await espera(15000 * (t + 1)); continue; }
    await espera(1500);
    return JSON.parse(tx).query.search.map((s) => s.title);
  }
}
export const limparWiki = (c) => c.replace(/<ref[^>]*\/>/g, '').replace(/<ref[^>]*>[\s\S]*?<\/ref>/g, '').replace(/\[\[(?:[^\]|]*\|)?([^\]]*)\]\]/g, '$1');
