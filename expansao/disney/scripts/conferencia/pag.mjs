import { writeFileSync } from 'node:fs';
import { api } from './wiki.mjs';
const [host, ...tit] = process.argv.slice(2);
const j = await api(host, { action: 'query', prop: 'revisions', rvprop: 'content', rvslots: 'main', titles: tit.join('|') });
for (const p of j.query.pages) { const t = p.revisions ? p.revisions[0].slots.main.content : ''; writeFileSync('pag/' + p.title.replace(/[^\w]+/g, '_') + '.txt', t); console.log(p.title, t.length); }
