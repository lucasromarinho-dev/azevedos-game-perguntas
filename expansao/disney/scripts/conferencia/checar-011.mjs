// Conferente-disney-v2: checagem web do lote disney-011. Baixa o texto bruto de cada verbete da Wikipédia (pt/en,
// User-Agent genérico, uma página por chamada, log em disney/fontes/chamadas-wikipedia-conferente-011.log) e mostra,
// para cada pergunta, os trechos do verbete onde aparecem os termos que confirmam a resposta.
// Uso (na pasta expansao/disney): node scripts/conferencia/checar-011.mjs > saida.txt
import { writeFileSync } from 'node:fs';
process.env.LOGC = process.env.LOGC || 'fontes/chamadas-wikipedia-conferente-011.log';
const { api } = await import('./wiki.mjs');

// id -> [host, verbete, termos...]
export const C = {
  '33ff153bf2': ['en', 'Ratatouille (film)', 'Django'],
  'a628db1741': ['en', 'WALL-E', 'M-O'],
  'f9fd70f54a': ['en', 'Inside Out (2015 film)', 'hockey'],
  'ea9f3665a9': ['en', 'Turning Red', 'Ming'],
  '275435baf2': ['en', 'Toy Story', 'Hannah'],
  'f0d7ce5b38': ['en', 'Finding Nemo', 'Darla'],
  '8afba8790f': ['en', 'The Incredibles', 'Mirage'],
  '6853c4d56b': ['en', 'Finding Dory', 'Jenny', 'Charlie'],
  'b899eecc57': ['en', 'Ratatouille (film)', 'son', 'letter'],
  'c13e783dc5': ['en', 'Monsters, Inc.', 'Fungus'],
  '42c9327efc': ['en', 'The Jungle Book (1967 film)', 'vulture', "That's What Friends"],
  'd0cab272db': ['en', 'The Little Mermaid (1989 film)', 'concert', 'Daughters of Triton', 'sisters'],
  '6078d50960': ['en', 'The Princess and the Frog', 'Evangeline'],
  '7edb30e6d6': ['en', 'Alice in Wonderland (1951 film)', 'Walrus', 'oyster'],
  '4a30322cb6': ['en', 'Aladdin (1992 Disney film)', 'One Jump Ahead', 'bread'],
  'c37a913817': ['en', 'Encanto (film)', 'Waiting on a Miracle', 'Antonio'],
  '3c68e52b42': ['pt', 'Pinóquio (filme de 1940)', 'Gideão', 'Ator'],
  '3186577e5c': ['en', 'The Sword in the Stone (1963 film)', 'Higitus', 'shrink', 'luggage', 'bag'],
  '624cb4b247': ['en', 'Dumbo', 'Baby Mine', 'locked', 'confined'],
  'beb3a9f900': ['en', 'The Princess and the Frog', 'Eudora'],
  '01c9475404': ['en', 'Aladdin (1992 Disney film)', 'Achmed'],
  '44e81f368a': ['en', 'Brave (2012 film)', 'Hamish', 'Hubert', 'Harris', 'triplet'],
  '7874cb6c59': ['en', 'The Princess and the Frog', 'James'],
  '1f13e6451e': ['en', 'The Little Mermaid (1989 film)', 'dinglehopper', 'fork', 'Scuttle'],
  '7d943536e3': ['pt', 'Peter Pan (filme de 1953)', 'Miguel', 'urso'],
  '6e49b256a8': ['en', 'The Aristocats', 'Toulouse', 'paint'],
  'a5a545f6a9': ['pt', 'Pinóquio (filme de 1940)', 'Espoleta'],
  'a3eab26e3b': ['pt', 'A Dama e o Vagabundo', 'Sarah', 'Sara'],
  '86351c8aa2': ['en', 'Peter Pan (1953 film)', 'Jolly Roger'],
  '634d3c2a76': ['pt', 'The Rescuers', 'Brutus', 'Nero'],
  '46565960b3': ['en', 'Lilo & Stitch', 'ohana'],
  '99428657e3': ['en', 'The Aristocats', 'Napoleon', 'Lafayette'],
  'fd235e53c1': ['en', 'Lilo & Stitch', 'surf'],
  'd8a92fd27b': ['en', 'Big Hero 6 (film)', 'bot fight', 'robot fight', 'bot-fight'],
  'c7c9c92229': ['en', 'Wreck-It Ralph', 'medal'],
  'eb70bbc127': ['en', 'Moana (2016 film)', 'Kakamora', 'coconut'],
  'f48ac22580': ['en', 'Zootopia', 'parking'],
  '7281348c8a': ['en', 'Bolt (2008 film)', 'superpower', 'real'],
  '82deb01a0b': ['en', 'Winnie the Pooh (2011 film)', 'tail'],
  '72f2792f66': ['en', 'Zootopia', 'carrot'],
  '25995b73ec': ['en', 'Finding Nemo', 'jellyfish'],
  '26675b9668': ['en', 'Big Hero 6 (film)', 'Cass', 'café', 'cafe'],
  'fa02f1443e': ['en', 'Zootopia', 'Jumbo', 'pop'],
  'bc6bb9008e': ['en', 'Zootopia', 'Gideon'],
  '6712b73e7d': ['en', 'Dumbo', 'crow', 'tree'],
  '581239c897': ['en', 'Tarzan (1999 film)', 'Kerchak'],
  '1be3292f8c': ['pt', 'Finding Nemo', 'Pérola', 'Pearl', 'polvo'],
  '93bdeb9bdd': ['pt', '101 Dálmatas', 'Tibbs'],
  '642a6f4f1b': ['pt', 'The Aristocats', 'Abigail', 'Amelia', 'Amélia'],
  '061ac3c2ab': ['en', 'Lilo & Stitch', 'Scrump'],
};

const cache = {};
async function texto(host, titulo) {
  const k = host + '|' + titulo;
  if (!(k in cache)) {
    const j = await api(`${host}.wikipedia.org`, { action: 'query', prop: 'revisions', rvprop: 'content', rvslots: 'main', titles: titulo }, `${titulo} (conferente-011)`);
    const p = j.query.pages[0];
    cache[k] = { titulo: p.title, txt: p.revisions ? p.revisions[0].slots.main.content : '' };
  }
  return cache[k];
}
const res = {};
for (const [id, [host, titulo, ...termos]] of Object.entries(C)) {
  const { titulo: real, txt } = await texto(host, titulo);
  const achados = [];
  for (const t of termos) {
    const re = new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    let m, n = 0;
    while ((m = re.exec(txt)) && n < 3) { achados.push(`[${t}] ...${txt.slice(Math.max(0, m.index - 160), m.index + 160).replace(/\s+/g, ' ')}...`); n++; }
  }
  res[id] = { host, verbete: real, tamanho: txt.length, achados };
  console.log(`\n### ${id} ${host}:${real} (${txt.length})`);
  for (const a of achados) console.log('  ' + a);
}
writeFileSync(process.env.SAIDA || 'checagem-011.json', JSON.stringify(res, null, 1));
