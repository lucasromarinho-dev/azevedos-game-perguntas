import { readFileSync, writeFileSync } from 'node:fs';
import { api } from './wiki.mjs';
const filmes = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const p = JSON.parse(readFileSync('prio.json', 'utf8')).filter((o) => o.pr === 4 && !o.achou && /^[A-ZÁÉÍÓÚ]/.test(o.r) && o.r.split(' ').length <= 3 && !/^(Um|Uma|Num|Numa|Na|No|Para|Por|Os|As|O|A|Ele|Ela|Que|Com|Pelo|Pela|Só|Da|Do|De|Em)\b/.test(o.r));
const res = {};
for (const o of p) {
  const f = filmes[o.grupo];
  const termo = o.fmt === 'nao-e' ? o.alts.filter((a) => a !== o.r)[0] : o.r;
  const j = await api('pt.wikipedia.org', { action: 'query', list: 'search', srsearch: `"${termo}" ${f[1].replace(/[:\-–]/g, ' ')}`, srlimit: '3', srprop: '' });
  res[o.id] = { termo, pt: j.query?.searchinfo?.totalhits ?? 0, ptTit: (j.query?.search || []).map((x) => x.title) };
}
writeFileSync('busca2.json', JSON.stringify(res, null, 1));
console.log(Object.keys(res).length);
