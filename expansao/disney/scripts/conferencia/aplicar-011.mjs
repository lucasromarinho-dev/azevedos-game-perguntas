// Decisões do conferente-disney-v2 no lote disney-011: conferida (38, meta exata), reserva (com motivo) ou descartada.
// Grava status, motivo, correcao {motivo, antes} e verificado_web_conferente (fonte curta + trecho).
// Uso (na pasta expansao/disney): node scripts/conferencia/aplicar-011.mjs
import { readFileSync, writeFileSync } from 'node:fs';
const ARQ = 'lotes/disney-011.json';
// id -> [decisão (c = conferida, r = reserva, d = descartada), fonte web, motivo da reserva/descarte ou da correção]
const D = {
  // Pixar difícil (8)
  '33ff153bf2': ['c', 'en.wikipedia: Ratatouille (film) - "their father, Django, the clan leader"; pt.wikipedia: Ratatouille (filme) - "Django, o pai de Remy e Emile"'],
  'a628db1741': ['c', 'en.wikipedia: WALL-E - "a cleaning robot named M-O"'],
  'ea9f3665a9': ['c', 'en.wikipedia: Turning Red - "Ming Lee, Mei\'s strict and overprotective mother"'],
  'f0d7ce5b38': ['c', 'en.wikipedia: Finding Nemo - "gift Nemo to his hyperactive niece, Darla"; pt.wikipedia: Procurando Nemo (dublagem BR: Darla)'],
  '8afba8790f': ['c', 'en.wikipedia: The Incredibles - "a woman named Mirage secretly offers Bob a mission"; pt.wikipedia: Os Incríveis - "Mirage"'],
  '6853c4d56b': ['c', 'en.wikipedia: Finding Dory - "separated from her parents, Jenny and Charlie"'],
  'b899eecc57': ['c', 'en.wikipedia: Ratatouille (film) - "a letter from Linguini\'s late mother that Gusteau is Linguini\'s father"'],
  'c13e783dc5': ['c', 'en.wikipedia: Monsters, Inc. - "Fungus, Randall\'s beleaguered assistant"; pt.wikipedia: Monstros S.A. - "o assistente de Randall"'],
  'f9fd70f54a': ['r', 'en.wikipedia: Inside Out (2015 film) - "Hockey Island"', 'reserva: régua, a Ilha do Hóquei aparece muito no filme (mais média que difícil); sobra para a meta de 8 Pixar'],
  '275435baf2': ['r', 'en.wikipedia: Toy Story - "Hannah Phillips, Sid\'s younger sister"; pt.wikipedia: Toy Story - "Hannah, irmã mais nova de Sid"', 'reserva: mesmo molde de f0d7ce5b38 (nome de menina, uma é errada da outra); sobra para a meta de 8 Pixar'],
  // Músicas difícil (7)
  '42c9327efc': ['c', 'en.wikipedia: The Jungle Book (1967 film) - "Buzzie, the leader of the vulture quartet"; canção "That\'s What Friends Are For (The Vulture Song)"'],
  'd0cab272db': ['c', 'en.wikipedia: List of The Little Mermaid characters - "Ariel\'s older sisters. In the 1989 film, they perform the song Daughters of Triton"'],
  '6078d50960': ['c', 'en.wikipedia: The Princess and the Frog - "Ray ... a girlfriend named Evangeline, an Evening Star in the sky"'],
  '7edb30e6d6': ['c', 'en.wikipedia: Alice in Wonderland (1951 film) - Tweedledee and Tweedledum "recount the tale of The Walrus and the Carpenter"; en.wikipedia: The Walrus and the Carpenter - a morsa convence as ostras, que acabam comidas'],
  'c37a913817': ['c', 'en.wikipedia: Encanto (soundtrack) - "Waiting on a Miracle ... Mirabel\'s I Want song" e "when Antonio Madrigal, Mirabel\'s cousin, gets his gift"; web: savethecat.com e themoviespoiler.com - Mirabel canta sozinha na festa do dom de Antonio', 'enunciado ajustado: a canção é durante a festa da cerimônia, não depois'],
  '3c68e52b42': ['c', 'pt.wikipedia: Pinóquio (filme de 1940) - "João Honesto, a Raposa, e seu companheiro, Gideão, o Gato ... servindo-lhe como ator"'],
  '3186577e5c': ['c', 'en.wikipedia: The Sword in the Stone (1963 film) - canção "Higitus Figitus" (Merlin); web: brothers-brick.com e d23.com - Merlin encolhe a casa inteira e guarda tudo numa mala de viagem'],
  '4a30322cb6': ['r', 'en.wikipedia: Aladdin (1992 Disney film) - "steals bread daily"; en.wikipedia: Aladdin Jr. - "stealing a loaf of bread, causing Razoul and his Guards to chase after him (One Jump Ahead)"', 'reserva: cena de abertura muito conhecida (mais média que difícil); sobra para a meta de 7 Músicas'],
  '624cb4b247': ['r', 'en.wikipedia: Dumbo - "restrained in a locked train car" e Mrs. Jumbo "sings her lullaby Baby Mine"', 'reserva: resposta descritiva e erradas fracas; sobra para a meta de 7 Músicas'],
  // Princesas difícil (4)
  'beb3a9f900': ['c', 'en.wikipedia: The Princess and the Frog - "Oprah Winfrey as Eudora, Tiana\'s mother"'],
  '01c9475404': ['c', 'en.wikipedia: Aladdin (1992 Disney film) - "Prince Achmed: an arrogant prince whom Jasmine rejects as a suitor"; en.wikipedia: List of Disney\'s Aladdin characters - "he leaves the palace after Rajah attacks him"'],
  '44e81f368a': ['c', 'en.wikipedia: Brave (2012 film) - "her triplet brothers Hamish, Hubert, and Harris"'],
  '1f13e6451e': ['c', 'en.wikipedia: List of The Little Mermaid characters - Scuttle "referring to a fork as a dinglehopper"'],
  '7874cb6c59': ['r', 'en.wikipedia: The Princess and the Frog - "James, Tiana\'s father, who helped instill a strong work ethic"', 'reserva: mesmo molde de beb3a9f900 (nome de um dos pais de Tiana); sobra para a meta de 4 Princesas'],
  // Clássicos difícil (3)
  '7d943536e3': ['c', 'pt.wikipedia: Peter Pan (filme de 1953) - "seus irmãos, João e Miguel"; en.wikipedia: Peter Pan (1953 film) - Michael "constantly carries a teddy bear"'],
  'a5a545f6a9': ['c', 'pt.wikipedia: Pinóquio (filme de 1940) - "Espoleta (Lampwick em inglês), um garoto altamente travesso ... a caminho da Ilha dos Prazeres"'],
  'a3eab26e3b': ['c', 'pt.wikipedia: A Dama e o Vagabundo - "sua tia Sarah ... traz consigo dois gatos siameses"'],
  '6e49b256a8': ['r', 'en.wikipedia: The Aristocats - Toulouse "is also a talented painter"', 'reserva: Aristogatas já recebe 2 novas neste lote (99428657e3 e 642a6f4f1b); sobra para a meta de 3 Clássicos'],
  // Vilões difícil (1)
  '634d3c2a76': ['c', 'pt.wikipedia: Bernardo e Bianca (The Rescuers) - "dois jacarés treinados, chamados Brutus e Nero"'],
  '86351c8aa2': ['r', 'en.wikipedia: Captain Hook - "captain of the brig Jolly Roger"; pt.wikipedia: Jolly Roger (desambiguação) - "o navio do Capitão Gancho"', 'reserva: a meta de Vilões é 1 e Brutus e Nero é mais de fã do filme (o nome do navio vem do livro)'],
  // Disney Moderno e Bichos fácil (10)
  '46565960b3': ['c', 'en.wikipedia: Lilo & Stitch - "the Hawaiian concept of ohana, or extended family"; pt.wikipedia: Lilo & Stitch - "ohana, ou família extensa"'],
  '99428657e3': ['c', 'pt.wikipedia: Aristogatas (The Aristocats) - "emboscado por dois cães chamados Napoleão e Lafayette"'],
  'd8a92fd27b': ['c', 'en.wikipedia: Big Hero 6 (film) - "competing in illegal underground betting for robot fights"'],
  'c7c9c92229': ['c', 'en.wikipedia: Wreck-It Ralph - "Ralph decides to win a medal, believing that it will earn him respect"'],
  'eb70bbc127': ['c', 'en.wikipedia: Moana (2016 film) - "attacked by Kakamora, coconut pirates"'],
  'f48ac22580': ['c', 'en.wikipedia: Zootopia - "Judy is assigned to parking duty by Chief Bogo"'],
  '7281348c8a': ['c', 'en.wikipedia: Bolt (2008 film) - "Bolt believes everything in the show is real, including his powers"'],
  '82deb01a0b': ['c', 'en.wikipedia: Winnie the Pooh (2011 film) - "Eeyore\'s tail has gone missing ... a suitable replacement tail"'],
  '25995b73ec': ['c', 'en.wikipedia: Finding Nemo - "Marlin and Dory become trapped in a forest of jellyfish"'],
  'fa02f1443e': ['c', 'en.wikipedia: List of Zootopia characters - "buy his son, Finnick, a Jumbo pop ... melt down the ice pop to resell as small popsicles"'],
  'fd235e53c1': ['r', 'en.wikipedia: Lilo & Stitch - "Nani, Lilo, and Stitch go surfing"', 'reserva: Lilo & Stitch já recebe 1 fácil (46565960b3); sobra para a meta de 10 fáceis'],
  '72f2792f66': ['r', 'en.wikipedia: Zootopia - "Stu Hopps, Judy\'s father and a carrot farmer"', 'reserva: muito óbvia (coelhos e cenoura) e Zootopia já recebe 2 fáceis; sobra para a meta de 10 fáceis'],
  '26675b9668': ['r', 'en.wikipedia: Big Hero 6 (film) - "Cass, Hiro and Tadashi\'s maternal aunt" e "They live above a coffee shop"', 'reserva: Operação Big Hero já recebe 1 fácil (d8a92fd27b); sobra para a meta de 10 fáceis'],
  // Disney Moderno e Bichos médio (3)
  '6712b73e7d': ['c', 'en.wikipedia: Dumbo - "Jim and his gang of crows, who discover them sleeping high up in their tree"'],
  '581239c897': ['c', 'en.wikipedia: Tarzan (1999 film) - "Kerchak, the troop\'s stern leader and Kala\'s mate ... declares Tarzan an outsider"'],
  '1be3292f8c': ['c', 'pt.wikipedia: Procurando Nemo (Finding Nemo) - tabela de dublagem: Pearl no Brasil (Bianca Salgueiro), Pérola em Portugal; "Pearl, um filhote de polvo e colega de escola de Nemo"', 'nome da dublagem brasileira: Pearl (Pérola é o nome da dublagem de Portugal)'],
  'bc6bb9008e': ['r', 'en.wikipedia: Zootopia - "Gideon Grey, a red fox from Bunnyburrow who bullied the young rabbits"', 'reserva: Zootopia já recebe 2 novas e Raposa é a resposta da pergunta do Nick Wilde (fácil de chutar); sobra para a meta de 3 médias'],
  // Disney Moderno e Bichos difícil (2)
  '93bdeb9bdd': ['c', 'en.wikipedia: One Hundred and One Dalmatians - "the barn cat Sergeant Tibbs"; pt.wikipedia: 101 Dálmatas - "ao gato Sargento Tibbs"'],
  '642a6f4f1b': ['c', 'pt.wikipedia: Aristogatas (The Aristocats) - "Amelia e Abigail, duas gansas inglesas que estão viajando de férias"'],
  '061ac3c2ab': ['r', 'en.wikipedia: List of Lilo & Stitch characters - "her doll Scrump"; WebSearch sem o nome na dublagem brasileira (a francesa trocou para Pompom)', 'reserva: nome da boneca na dublagem brasileira não confirmado; sobra para a meta de 2 difíceis'],
};
const C = {
  'c37a913817': { pergunta: 'Em Encanto, durante a festa do dom de qual primo Mirabel se afasta sozinha e canta sobre esperar um milagre?' },
  '1be3292f8c': { pergunta: 'Em Procurando Nemo, que animal é a Pearl, colega de escola de Nemo?' },
};
const lote = JSON.parse(readFileSync(ARQ, 'utf8'));
const cont = { conferida: 0, reserva: 0, descartada: 0 };
for (const p of lote) {
  const d = D[p.id];
  if (!d) throw new Error('sem decisão: ' + p.id);
  const [dec, fonte, motivo] = d;
  p.verificado_web_conferente = fonte;
  delete p.motivo;
  if (dec === 'c') {
    p.status = 'conferida';
    if (C[p.id]) {
      const antes = {};
      for (const [k, v] of Object.entries(C[p.id])) if (p[k] !== v) { antes[k] = p[k]; p[k] = v; }
      if (Object.keys(antes).length) p.correcao = { motivo: 'conferente-disney-v2: ' + motivo, antes };
    }
  } else if (dec === 'r') { p.status = 'reserva'; p.motivo = 'conferente-disney-v2: ' + motivo; }
  else { p.status = 'descartada'; p.motivo = 'conferente-disney-v2: ' + motivo; }
  cont[p.status]++;
}
writeFileSync(ARQ, JSON.stringify(lote, null, 1) + '\n');
console.log(cont);
