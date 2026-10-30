import { readFileSync, writeFileSync } from 'node:fs';
import { api } from './wiki.mjs';
const filmes = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const prio = JSON.parse(readFileSync('prio.json', 'utf8')).filter((o) => o.pr <= 3);
const res = {};
for (const o of prio) {
  const f = filmes[o.grupo] || [o.grupo, o.grupo];
  const aspas = o.q.match(/"([^"]+)"/)?.[1];
  let termo = o.r;
  if (o.cat === 'Músicas' && aspas && !/^Complete/.test(o.q)) termo = aspas;
  if (o.fmt === 'nao-e') termo = o.alts.filter((a) => a !== o.r)[0];
  if (o.fmt === 'qual-primeiro' || /^\d/.test(termo)) termo = null;
  const ptFilme = f[1].replace(/[:\-–]/g, ' ');
  let r = { termo };
  if (termo) {
    const j = await api('pt.wikipedia.org', { action: 'query', list: 'search', srsearch: `"${termo}" ${ptFilme}`, srlimit: '3', srprop: '' });
    r.pt = j.query?.searchinfo?.totalhits ?? 0; r.ptTit = (j.query?.search || []).map((x) => x.title);
    if (!r.pt) {
      const k = await api('en.wikipedia.org', { action: 'query', list: 'search', srsearch: `"${termo}" ${f[0].replace(/\(.*\)/, '')}`, srlimit: '3', srprop: '' });
      r.en = k.query?.searchinfo?.totalhits ?? 0; r.enTit = (k.query?.search || []).map((x) => x.title);
    }
  }
  res[o.id] = r;
}
writeFileSync('busca1.json', JSON.stringify(res, null, 1));
console.log(Object.keys(res).length);
