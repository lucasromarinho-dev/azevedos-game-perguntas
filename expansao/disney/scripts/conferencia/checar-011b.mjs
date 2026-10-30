// Conferente-disney-v2, segunda rodada do lote disney-011: verbetes extras (personagens, trilhas, elenco em pt)
// e buscas de frase exata para o que a primeira rodada não achou. Mesmo log e User-Agent genérico de wiki.mjs.
process.env.LOGC = process.env.LOGC || 'fontes/chamadas-wikipedia-conferente-011.log';
const { api } = await import('./wiki.mjs');
const P = [
  ['en', 'Turning Red', ['Ming Lee', "Mei's mother", 'mother']],
  ['en', 'List of Disney\'s The Little Mermaid characters', ['concert', 'dinglehopper', 'Daughters of Triton', 'fork']],
  ['en', 'One Jump Ahead', ['bread', 'guards', 'chase']],
  ['en', 'Encanto (soundtrack)', ['Waiting on a Miracle', 'ceremony', 'Antonio']],
  ['en', 'The Sword in the Stone (1963 film)', ['pack', 'suitcase', 'carpet bag', 'shrinks', 'luggage']],
  ['en', 'Peter Pan (1953 film)', ['teddy', 'Michael']],
  ['en', 'Captain Hook', ['Jolly Roger']],
  ['en', 'One Hundred and One Dalmatians', ['Tibbs']],
  ['en', 'Lilo Pelekai', ['Scrump', 'doll']],
  ['en', 'Nick Wilde', ['Jumbo', 'pawpsicle', 'popsicle']],
  ['pt', 'The Aristocats', ['Napoleão', 'Lafayette']],
  ['pt', 'Monstros S.A.', ['Fungus']],
  ['pt', 'Valente (2012)', ['Hamish', 'Harris', 'Hubert']],
  ['pt', 'Os Incríveis', ['Mirage', 'Miragem']],
  ['pt', 'Ratatouille (filme)', ['Django']],
  ['pt', 'Lilo & Stitch', ['Scrump', 'ohana', 'Ohana']],
  ['pt', 'Aladdin (filme de 1992)', ['Achmed', 'Ahmed']],
  ['pt', 'Toy Story', ['Hannah']],
  ['pt', 'Finding Nemo', ['|Pearl', 'Darla', 'Guelra']],
  ['pt', 'Red: Crescer é uma Fera', ['Ming']],
  ['pt', 'Encanto (filme)', ['Milagre', 'Antonio']],
];
const S = [
  ['pt', '"Sargento Tibbs"'], ['en', '"Sergeant Tibbs" cat'], ['en', '"Jumbo-pop"'], ['en', '"Scrump" Lilo doll'],
  ['pt', '"Jolly Roger" Gancho'], ['en', '"Daughters of Triton"'], ['en', '"dinglehopper"'], ['pt', '"Esperando um Milagre"'],
  ['en', '"Higitus Figitus" Merlin packs'],
];
for (const [h, t, termos] of P) {
  const j = await api(`${h}.wikipedia.org`, { action: 'query', prop: 'revisions', rvprop: 'content', rvslots: 'main', titles: t }, `${t} (conferente-011b)`);
  const p = j.query.pages[0]; const txt = p.revisions ? p.revisions[0].slots.main.content : '';
  console.log(`\n### ${h}:${p.title} (${txt.length})`);
  for (const term of termos) { const i = txt.indexOf(term); if (i >= 0) console.log(`  [${term}] ...${txt.slice(Math.max(0, i - 150), i + 200).replace(/\s+/g, ' ')}...`); else console.log(`  [${term}] -`); }
}
for (const [h, q] of S) {
  const j = await api(`${h}.wikipedia.org`, { action: 'query', list: 'search', srsearch: q, srlimit: '4', srprop: 'snippet' });
  console.log(`\n### busca ${h} ${q}: ${j.query.searchinfo.totalhits}`);
  for (const r of j.query.search) console.log(`  ${r.title}: ${r.snippet.replace(/<[^>]+>/g, '')}`);
}
