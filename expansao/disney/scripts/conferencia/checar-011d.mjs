// Conferente-disney-v2, quarta rodada do lote disney-011: cena de "Waiting on a Miracle", mala de Merlin, príncipe Achmed, Gill na dublagem.
process.env.LOGC = process.env.LOGC || 'fontes/chamadas-wikipedia-conferente-011.log';
const { api } = await import('./wiki.mjs');
const P = [
  ['en', 'Waiting on a Miracle', ['ceremony', 'Antonio', 'alone', 'outside']],
  ['en', "List of Disney's Aladdin characters", ['===Prince Achmed===']],
  ['en', 'The Sword in the Stone (1963 film)', ['Merlin', 'bag']],
  ['pt', 'Finding Nemo', ['|Gill||']],
];
for (const [h, t, termos] of P) {
  const j = await api(`${h}.wikipedia.org`, { action: 'query', prop: 'revisions', rvprop: 'content', rvslots: 'main', titles: t }, `${t} (conferente-011d)`);
  const p = j.query.pages[0]; const txt = p.revisions ? p.revisions[0].slots.main.content : '';
  console.log(`\n### ${h}:${p.title} (${txt.length})`);
  for (const term of termos) { let i = -1, n = 0; while ((i = txt.indexOf(term, i + 1)) >= 0 && n < 4) { console.log(`  [${term}] ...${txt.slice(Math.max(0, i - 150), i + 900).replace(/\s+/g, ' ')}...`); n++; if (term !== 'Merlin') break; } }
}
