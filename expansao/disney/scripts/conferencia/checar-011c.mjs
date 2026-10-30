// Conferente-disney-v2, terceira rodada do lote disney-011 (o que faltou nas duas primeiras).
process.env.LOGC = process.env.LOGC || 'fontes/chamadas-wikipedia-conferente-011.log';
const { api } = await import('./wiki.mjs');
const P = [
  ['en', 'Aladdin (Disney character)', ['One Jump Ahead', 'bread', 'guards']],
  ['en', 'Mirabel Madrigal', ['Waiting on a Miracle', 'ceremony']],
  ['en', 'Merlin (Disney)', ['Higitus', 'pack', 'shrink', 'bag']],
  ['en', 'List of Disney\'s Aladdin characters', ['Achmed', 'Rajah']],
  ['pt', 'Brave (filme)', ['Hamish', 'Harris', 'Hubert']],
  ['pt', 'Finding Nemo', ['Elenco de dublagem', 'Dublagem', 'Gill||', 'Gill |']],
  ['en', 'The Walrus and the Carpenter', ['Disney', 'oyster']],
];
const S = [
  ['en', '"One Jump Ahead" guards bread Aladdin'],
  ['en', '"Waiting on a Miracle" Antonio ceremony'],
  ['en', 'Merlin "Higitus Figitus" packs shrinking'],
  ['en', 'Achmed Rajah pants'],
];
for (const [h, t, termos] of P) {
  const j = await api(`${h}.wikipedia.org`, { action: 'query', prop: 'revisions', rvprop: 'content', rvslots: 'main', titles: t }, `${t} (conferente-011c)`);
  const p = j.query.pages[0]; const txt = p.revisions ? p.revisions[0].slots.main.content : '';
  console.log(`\n### ${h}:${p.title} (${txt.length})`);
  for (const term of termos) { const i = txt.indexOf(term); if (i >= 0) console.log(`  [${term}] ...${txt.slice(Math.max(0, i - 200), i + 300).replace(/\s+/g, ' ')}...`); else console.log(`  [${term}] -`); }
}
for (const [h, q] of S) {
  const j = await api(`${h}.wikipedia.org`, { action: 'query', list: 'search', srsearch: q, srlimit: '4', srprop: 'snippet' });
  console.log(`\n### busca ${h} ${q}: ${j.query.searchinfo.totalhits}`);
  for (const r of j.query.search) console.log(`  ${r.title}: ${r.snippet.replace(/<[^>]+>/g, '')}`);
}
