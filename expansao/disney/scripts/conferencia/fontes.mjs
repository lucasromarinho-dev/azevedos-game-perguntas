// Monta fontes.json: id -> fonte curta da checagem do conferente.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const filmes = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const prio = JSON.parse(readFileSync('prio.json', 'utf8'));
const b1 = JSON.parse(readFileSync('busca1.json', 'utf8'));
const b2 = existsSync('busca2.json') ? JSON.parse(readFileSync('busca2.json', 'utf8')) : {};
const enT = (g) => (filmes[g] || [g])[0];
const ptT = (g) => (filmes[g] || [g, g])[1];
const MANUAL = {
  '5db2846326': 'WebSearch: raça de Nana (Disney = são-bernardo; livro = terra-nova)',
  '6c7dac43db': 'WebSearch: ordem das meias-irmãs não confirmada',
  '31e71c53d4': 'wiki pt (busca): Kacau Gomes ("Não Vou Desistir de Nenhum")',
  'b55b517790': 'wiki pt (busca): Kacau Gomes ("Não Vou Desistir de Nenhum")',
  '050f0b4f84': 'wiki pt: Frozen (trilha sonora) ("Rena É Melhor do Que Gente")',
  '10c3903648': 'wiki pt: Hércules (trilha sonora) ("Minha Chance")',
  '16ebcac23d': 'wiki pt: A Pequena Sereia (trilha sonora) ("Les Poissons")',
  '623ec50d3d': 'wiki pt: Moana (trilha sonora) ("Pra Ir Além")',
  '18483867c2': 'wiki pt: Tarzan (trilha sonora)',
  'dcba042ce1': 'wiki pt: Tarzan (trilha sonora)',
  '0e78f485c5': 'wiki pt: Tarzan (trilha sonora)',
  '8ac2342652': 'wiki pt: Tarzan (trilha sonora)',
  'fa1decf19e': 'wiki pt: Tarzan (trilha sonora) ("Estragando o Acampamento") + wiki en',
  'c4ecd8501f': 'wiki pt: Zootopia ("uivantes")',
  '6f8b0e43b2': 'wiki pt: A Pequena Sereia (filme de 1989) (Pedro e Juca)',
  '1a40ba8bd0': 'wiki pt: Hércules + A Pequena Sereia (Pedro e Juca)',
  'b10bf0e666': 'wiki en: Finding Dory (Fluke e Rudder) + wiki pt (Pedro e Juca)',
  '18f4a0ed25': 'wiki pt: A Pequena Sereia (filme de 1989)',
  'fa91829fe6': 'wiki pt: O Cão e a Raposa (Sra. Tita na dublagem)',
  '487cd421b3': 'wiki pt: O Cão e a Raposa (Dodó na dublagem brasileira)',
  '78a1443b5b': 'wiki pt: O Cão e a Raposa (Toby e Dodó)',
  '544d6932f4': 'wiki pt: O Cão e a Raposa (Copper = Toby, cão de caça)',
  'fed7b51e39': 'wiki pt: 101 Dálmatas (Nanny/Naná)',
  'dcc6b29d75': 'wiki pt: 101 Dálmatas',
  'f926ed147b': 'wiki pt: Toy Story 2 ("O Rodeio do Woody")',
  'f389564d37': 'wiki pt: Beauty and the Beast (trilha sonora), edição brasileira',
  '01c1dcd32e': 'wiki pt: Beauty and the Beast (trilha sonora), edição brasileira',
  '964cbbfa55': 'wiki pt: Beauty and the Beast (trilha sonora), edição brasileira',
  '5245f90f9a': 'wiki pt: Beauty and the Beast (trilha sonora), edição brasileira',
  'df5049c91a': 'wiki pt: Beauty and the Beast (trilha sonora), edição brasileira',
  'ef182ec66e': 'wiki pt: Beauty and the Beast (trilha sonora) + wiki en',
  '61ef783e3d': 'wiki pt: Madame Min ("Verruga")',
  'a5f3be46f0': 'wiki pt: O Corcunda de Notre Dame ("Festival dos Tolos")',
  '89dc13e837': 'WebSearch: Guia da Semana ("Bandido do Chapéu Coco")',
  'e2e55fdb94': 'WebSearch: Quartel-General na versão brasileira',
  '0418eaef78': 'WebSearch: Omelete ("senhora de todo o mal")',
  '967293e217': 'WebSearch: "Todos Querem Ser um Gato"',
  '673dffd151': 'WebSearch: MusicBrainz ("Um sonho é um desejo d\'alma")',
  '7efda179da': 'WebSearch: Joca (terrier escocês) e Caco (bloodhound)',
  '744b27e5e1': 'wiki pt (busca): The Jungle Book (1967)',
  '4fc3713305': 'WebSearch: apelido "Shadow Man"; wiki en: The Princess and the Frog (sombra)',
  'd9f0f5185e': 'WebSearch: filmow (reunião no prédio da ONU)',
  'fa44012dc9': 'WebSearch: filmow (reunião no prédio da ONU) + wiki en: The Rescuers',
  '70fcbf6c9a': 'wiki pt: Enrolados (taverna)',
  '122828de5d': 'wiki pt: Enrolados (taverna)',
  '2799597d0b': 'WebSearch + wiki en: List of Frozen characters (Oaken em Frozen II)',
  'be43a2ef96': 'wiki pt: Bambi ("grande príncipe da floresta")',
  '1a4bdadd9a': 'wiki pt: Detona Ralph ("Corrida Doce")',
  'dc7a003c94': 'wiki pt: Toy Story 2 (Mineiro)',
  '9fce0e4e1f': 'wiki pt: Wish (Reino de Rosas)',
  'df48dd6c9c': 'wiki pt (busca): Soul (filme) ("Pré-Vida")',
  'd48740afe2': 'wiki pt (busca): Up (filme) + WebSearch',
  '52a8add15e': 'wiki pt (busca): A Princesa e o Sapo (trilha sonora) + WebSearch',
  '6b9b9495b8': 'wiki pt: A Pequena Sereia (trilha sonora) ("Aqui no Mar")',
  'bc3255caca': 'wiki pt: A Pequena Sereia (trilha sonora) ("Aqui no Mar")',
  'e5a755e040': 'wiki pt: A Pequena Sereia (trilha sonora)',
  '01d7585696': 'wiki pt: Dumbo ("Jumbo Jr.")',
  '53c48a91d1': 'wiki en: Cinderella (1950) (Anastasia e Drizella)',
  'f9a637a0ee': 'wiki pt: 101 Dálmatas (Horácio e Gaspar)',
  'dfc9dc1eda': 'wiki pt: A Dama e o Vagabundo (Tony e Joe)',
  'a1691cc110': 'wiki pt: O Corcunda de Notre Dame ("Lá Fora")',
  'ce64e01f47': 'wiki pt: O Rei Leão ("Se Preparem")',
  '0f41fbcf77': 'wiki en: Raya and the Last Dragon (Kumandra)',
};
const out = {};
for (const o of prio) {
  if (MANUAL[o.id]) { out[o.id] = MANUAL[o.id]; continue; }
  const r = b1[o.id] || b2[o.id];
  if (r && r.termo && r.pt) { out[o.id] = `wiki pt (busca): ${r.ptTit[0]}`; continue; }
  if (r && r.termo && r.en) { out[o.id] = `wiki en (busca): ${r.enTit[0]}`; continue; }
  if (o.fmt === 'qual-primeiro' && /lançad|cinemas|primeiro longa|surgiu|apareceu|mais antigo|saiu/.test(o.q)) { out[o.id] = 'wiki pt/en: anos de lançamento nos verbetes'; continue; }
  if (o.fmt === 'qual-primeiro' || o.fmt === 'numero' || /^\d/.test(o.r)) { out[o.id] = `wiki en: ${enT(o.grupo)} (enredo)`; continue; }
  if (o.achou) { out[o.id] = `wiki pt/en: ${ptT(o.grupo)} (verbete)`; continue; }
  if (o.pr <= 3) out[o.id] = `wiki en: ${enT(o.grupo)} (enredo)`;
}
writeFileSync('fontes.json', JSON.stringify(out, null, 1));
const sem = prio.filter((o) => !out[o.id]);
console.log('com fonte', Object.keys(out).length, 'sem', sem.length, 'sem e prioridade<=3:', sem.filter((o) => o.pr <= 3).length);
writeFileSync('sem-checagem.txt', sem.map((o) => o.id).join('\n'));
