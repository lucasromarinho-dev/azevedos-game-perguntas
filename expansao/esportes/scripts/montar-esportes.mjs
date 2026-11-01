// Monta o banco especial "Esportes" (3.000 perguntas):
//   as "conferida" dos lotes (piloto e 001-020) + 42 "reserva" escolhidas na montagem + as 1.019 "reaproveitada" da v12,
//   menos 4 tiradas no cruzamento final (REMOVIDAS).
// Saida: expansao/esportes/perguntas-esportes.json (uma linha, UTF-8 sem BOM, NFC, sem quebra no fim).
// Os arquivos de origem (lotes e reaproveitadas-v12.json) nao sao alterados: reservas e correcoes ficam nos mapas abaixo.
// Uso: node expansao/esportes/scripts/montar-esportes.mjs [--meta saida-com-origem.json]
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const D = join(dirname(fileURLToPath(import.meta.url)), '..');
const ler = (f) => JSON.parse(readFileSync(f, 'utf8').replace(/^﻿/, ''));
const NIVEIS = ['facil', 'medio', 'dificil'];
const nfc = (s) => String(s).normalize('NFC');

// dificuldade_ajuste aparece como "dificil->medio: motivo", "facil -> medio", "medio: motivo" ou {de, para, motivo}.
// Vale o nivel de destino; sem ajuste, vale o campo dificuldade.
function dificuldadeFinal(p) {
  const a = p.dificuldade_ajuste;
  if (!a) return p.dificuldade;
  if (typeof a === 'object') {
    if (!NIVEIS.includes(a.para)) throw new Error('dificuldade_ajuste ilegivel em ' + p.id);
    return a.para;
  }
  const s = String(a).trim();
  let m = s.match(/->\s*(facil|medio|dificil)\b/);
  if (!m) m = s.match(/^(facil|medio|dificil)\b/);
  if (!m) throw new Error('dificuldade_ajuste ilegivel em ' + p.id + ': ' + s);
  return m[1];
}

// Reservas que entram para fechar 3.000 (id -> lote#posicao). Todas com o fato conferido na web pelo conferente
// e fora por variedade (molde de draft acima de 25, molde "GP da primeira vitoria", resposta repetida no lote).
// Ver expansao/esportes/NOTAS-montagem.md.
const RESERVAS = {
  '8af4202823': '016#16', '9056aa2079': '016#17', '0c48774782': '016#19', 'd5ca61dbb2': '016#24',
  '3a41ea2bed': '016#40', 'babd01f596': '016#48', '87f37599b2': '016#49', '5ff1106767': '016#56',
  '14f34c0e7f': '016#84', 'ea2b8d31b4': '016#91', '2f6df2334c': '016#95', '4e20a601c0': '016#102',
  '4ad85d49d1': '016#106', 'bcfdec4632': '016#108', '5d8e4bdf83': '016#70', '4b9494ce62': '017#1',
  '16bd4fba3e': '017#5', '261825d9ef': '017#21', '27f4eb32e7': '017#23', '5a71e861c9': '017#28',
  '1219e5abbb': '017#33', '53ee12458e': '017#41', 'd881322bb2': '017#58', '42a648e7ec': '017#63',
  '447aaad4cb': '017#64', '8155fc0ae7': '017#67', '61dd969586': '017#76',
  'a2b649d40d': '016#10', 'cefa883f16': '016#36', 'e5f5bb3928': '016#59', 'ebe232ff44': '016#65',
  '6f7a311b02': '017#31', 'aba6414dad': '017#70',
  'c035a91720': '004#3', '7b5b28098d': '004#4', 'd786f7b15e': '004#14',
  '2a709f6042': '019#47', '43b22c8f60': '019#58', '8ad50a4f59': '019#79',
  '91591111dc': '018#60', '807e8a8020': '016#78', '02833149a4': '017#44',
};

// Correcoes de enunciado feitas na montagem (varredura de fatos que envelheceram em 1/11/2026 e cruzamento final).
// "de" confere que o texto de origem e o esperado.
const CORRECOES = {
  // Westbrook tinha 209 triplos-duplos e Jokic 200 em 30/10/2026 (wiki en, List of NBA career triple-double leaders): a marca vai mudar de dono na temporada 2026/27.
  '6422f29ff1': { de: 'Qual jogador tem o recorde de partidas com triplo-duplo na história da NBA?', pergunta: 'Qual jogador terminou a temporada 2025/26 como recordista de triplos-duplos na história da NBA?' },
  // Horford jogou pela seleção dominicana de 2008 a 2012 (wiki en, Al Horford): "defende" virou "defendeu".
  '1e62ffbb74': { de: 'Al Horford, campeão da NBA com o Boston Celtics em 2024, defende a seleção de qual país caribenho?', pergunta: 'Al Horford, campeão da NBA com o Boston Celtics em 2024, defendeu a seleção de qual país caribenho?' },
  // Titulo atual pode mudar; ser campeao em duas categorias (leves e meio-medios) e fato permanente (wiki en, Islam Makhachev).
  'd1e0502b74': { de: 'Islam Makhachev, campeão do UFC, é de qual país?', pergunta: 'Islam Makhachev, campeão do UFC em duas categorias, é de qual país?' },
  // 2026 ainda nao acabou: a contagem (17, wiki en Charles Oliveira e List of UFC records) fica datada.
  '7e972d8598': { de: 'Quantas vitórias por finalização Charles do Bronx soma no UFC, recorde da organização, até 2026?', pergunta: 'Quantas vitórias por finalização Charles do Bronx somava no UFC até outubro de 2026, recorde da organização?' },
  // Mbappe passou Klose em 2026 (outra pergunta do banco): o recorde de 2014 vira "ate entao".
  'deaabfe8f6': { de: 'Qual atacante alemão se tornou, em 2014, o maior artilheiro da história das Copas, com 16 gols?', pergunta: 'Qual atacante alemão se tornou, em 2014, o maior artilheiro da história das Copas até então, com 16 gols?' },
  // Wade se aposentou em 2019: "astro do Miami Heat" virou "ídolo do Miami Heat".
  '4d13d62c76': { de: 'Qual astro do Miami Heat é casado com a atriz Gabrielle Union?', pergunta: 'Qual ídolo do Miami Heat é casado com a atriz Gabrielle Union?' },
  // entrega.mjs: "clássico" no enunciado casava com "Clássicos" so na resposta.
  '2d5c474077': { de: 'Como é chamado o clássico pernambucano entre Náutico e Sport?', pergunta: 'Como é chamado o confronto pernambucano entre Náutico e Sport?' },
  // cruzamento final: "Júnior" era a resposta da 008#91 (mais partidas pelo Flamengo).
  "b66f7750da": { de: "Qual clube foi campeão brasileiro de 1992, com o veterano Júnior no time?", pergunta: "Qual clube foi campeão brasileiro de 1992, vencendo o Botafogo na final?" },
  // cruzamento final: "Petković" era a resposta da 003#43.
  "ceb9a276a1": { de: "Qual clube foi campeão brasileiro de 2009, com Adriano e Petković?", pergunta: "Qual clube foi campeão brasileiro de 2009, com Adriano no ataque?" },
  // cruzamento final: "aço" era a resposta da 014#42 (super-herói do Shaq).
  "cd6900329f": { de: "No início da carreira, qual pivô chegou a quebrar os suportes de aço da tabela com enterradas?", pergunta: "No início da carreira, qual pivô chegou a quebrar os suportes de metal da tabela com enterradas?" },
  // cruzamento final: "goleiro Marcos" era a resposta da 001#57; "Felipão" repetia a pista da 002#75 e "Deportivo Cali" é a resposta da 003#36.
  "e618170229": { de: "Qual clube ganhou a Libertadores de 1999, com Felipão e o goleiro Marcos?", pergunta: "Qual clube brasileiro ganhou a Libertadores de 1999?" },
  // cruzamento final: "para o Palmeiras" dava a campeã de 1999 (v12:2849).
  "6839f1cc45": { de: "Ao lado de Oséas, quem marcou de pênalti para o Palmeiras no 2 a 1 do jogo de volta da final da Libertadores de 1999?", pergunta: "Ao lado de Oséas, quem marcou de pênalti no 2 a 1 do jogo de volta da final da Libertadores de 1999?" },
  // cruzamento final: "LeBron James" era a resposta da v12:2942 (A Decisão, com o Cavaliers no texto).
  "b68dbf1168": { de: "Em 2016, qual time LeBron James levou ao título virando a final contra os Warriors?", pergunta: "Em 2016, qual time foi campeão da NBA virando a final contra os Warriors?" },
  // cruzamento final: "Zico" era a resposta da 011#87 (artilheiro do Flamengo em 1981).
  "c3b827fe5d": { de: "Qual clube brasileiro conquistou a Libertadores de 1981, com Zico no time?", pergunta: "Qual clube brasileiro conquistou a Libertadores de 1981?" },
  // cruzamento final: "Neymar e Ganso" repetia a pista da v12:2687 e ligava à piloto#4; "Dorival Júnior" seria a resposta da 002#95.
  "92b80630b6": { de: "Qual clube ganhou a Copa do Brasil de 2010, com Neymar e Ganso?", pergunta: "Qual clube ganhou a Copa do Brasil de 2010?" },
  // cruzamento final: "filho de Hélio Gracie" respondia a 010#10 (pai de Royce).
  "42f3f8e340": { de: "Qual filho de Hélio Gracie levou o jiu-jítsu da família para os Estados Unidos e foi um dos criadores do UFC?", pergunta: "Qual integrante da família Gracie levou o jiu-jítsu para os Estados Unidos e foi um dos criadores do UFC?" },
  // cruzamento final: dizia que ele era o técnico do Santos na final de 2020, o que entregava a 007#94.
  "0d3e7f9e2f": { de: "Qual técnico foi campeão brasileiro de 2021, depois de levar o Santos à final da Libertadores de 2020?", pergunta: "Qual técnico foi campeão brasileiro de 2021 pelo Atlético Mineiro?" },
  // cruzamento final: "Cruzeiro" era a resposta da 002#22.
  "4a596f1118": { de: "Quantos pontos o Cruzeiro somou no título brasileiro de 2014?", pergunta: "Quantos pontos o campeão do Brasileirão de 2014 somou?" },
  // cruzamento final: "Universidad Católica" era a resposta da 002#52.
  "67768a14a4": { de: "Por qual placar o São Paulo venceu a Universidad Católica no jogo de ida da final da Libertadores de 1993?", pergunta: "Por qual placar o São Paulo venceu o jogo de ida da final da Libertadores de 1993?" },
  // cruzamento final: "Lima" era a resposta da 003#2.
  "54589fa3e0": { de: "Qual colombiano abriu o placar para o River Plate na final da Libertadores de 2019, em Lima?", pergunta: "Qual colombiano abriu o placar para o River Plate na final da Libertadores de 2019, contra o Flamengo?" },
  // cruzamento final: "Turim" era a resposta da v12:2751.
  "2cf5cef475": { de: "Qual montadora de Turim foi fundada com a família Agnelli, que também controla a Juventus?", pergunta: "Qual montadora italiana foi fundada com a família Agnelli, que também controla a Juventus?" },
  // cruzamento final: "beisebol" era a resposta da v12:2805.
  "6b04e0ffcc": { de: "Qual número Michael Jordan vestiu ao voltar à NBA depois de jogar beisebol?", pergunta: "Qual número Michael Jordan vestiu ao voltar à NBA, em 1995, depois da primeira aposentadoria?" },
  // cruzamento final: "Brock Lesnar" era a resposta da 005#8.
  "d16550247e": { de: "Em 2008, Brock Lesnar conquistou o cinturão dos pesados vencendo qual lenda americana?", pergunta: "Em novembro de 2008, no UFC 91, qual lenda americana perdeu o cinturão dos pesados por nocaute técnico?" },
  // cruzamento final: "Nike" era a resposta da 009#0.
  "0b47b610fa": { de: "Segundo a famosa propaganda da Nike, por que o primeiro tênis de Michael Jordan teria sido proibido pela NBA, em 1985?", pergunta: "Segundo uma famosa propaganda, por que o primeiro tênis de Michael Jordan teria sido proibido pela NBA, em 1985?" },
  // cruzamento final: "Nike" era a resposta da 009#0.
  "2cfbe008fe": { de: "Desde 2018, a marca Jordan, da Nike, veste qual clube de futebol francês?", pergunta: "Desde 2018, a marca Jordan veste qual clube de futebol francês?" },
  // cruzamento final: "Nike" era a resposta da 009#0.
  "6538c74baf": { de: "O logotipo \"Jumpman\", da linha de tênis da Nike, é a silhueta de qual astro?", pergunta: "O logotipo \"Jumpman\", de uma famosa linha de tênis, é a silhueta de qual astro?" },
  // cruzamento final: "ao lado de Kobe Bryant" dava a dupla da 009#31 (briga com Kobe).
  "d72315052e": { de: "Em qual ano os Lakers trocaram Shaquille O'Neal, depois de três títulos ao lado de Kobe Bryant?", pergunta: "Em qual ano os Lakers trocaram Shaquille O'Neal, depois de três títulos seguidos?" },
  // cruzamento final: "técnico do Boston Celtics" respondia a 014#58 (charuto).
  "c379502d45": { de: "Quantos títulos da NBA Red Auerbach conquistou como técnico do Boston Celtics?", pergunta: "Quantos títulos da NBA Red Auerbach conquistou como técnico?" },
  // cruzamento final: "ídolo do Dallas Mavericks" respondia a v12:2915 e 016#101.
  "91b9cf94e3": { de: "De qual país é Dirk Nowitzki, ídolo do Dallas Mavericks?", pergunta: "De qual país é o ala-pivô Dirk Nowitzki?" },
  // cruzamento final: "ídolo do Utah Jazz" ao lado de Karl Malone respondia a v12:2943.
  "af32e3cb7b": { de: "Qual armador, ídolo do Utah Jazz, formou dupla com Karl Malone e perdeu duas finais para os Bulls de Jordan?", pergunta: "Qual armador formou dupla com Karl Malone e perdeu duas finais para os Bulls de Jordan?" },
  // cruzamento final: "Tony Parker" era a resposta da v12:3047.
  "785dd7e6e2": { de: "Ao lado de Tim Duncan e Tony Parker, quem completava o trio que deu quatro títulos ao San Antonio Spurs?", pergunta: "Ao lado de Tim Duncan e de um armador francês, quem completava o trio que deu quatro títulos ao San Antonio Spurs?" },
  // cruzamento final: "jovem piloto da Mercedes" com o nome respondia a 005#85.
  "8076bd0ca3": { de: "Kimi Antonelli, jovem piloto da Mercedes, é de qual país?", pergunta: "Kimi Antonelli, piloto da Fórmula 1, é de qual país?" },
  // cruzamento final: "Parmalat" era a resposta da 012#70.
  "06a46d0be4": { de: "Qual centroavante, ídolo do Palmeiras da era Parmalat, também foi campeão brasileiro pelo Vasco em 1997?", pergunta: "Qual centroavante, ídolo do Palmeiras nos anos 1990, também foi campeão brasileiro pelo Vasco em 1997?" },
  // cruzamento final: "Renan Barão" era a resposta da v12:3152.
  "caa6fb981b": { de: "Em 2014, numa grande zebra, Renan Barão perdeu o cinturão dos galos para qual americano?", pergunta: "Em 2014, numa grande zebra, qual americano conquistou o cinturão dos galos do UFC?" },
  // cruzamento final: "aposentar como campeão" respondia a v12:3167.
  "6800127eaf": { de: "Quantos GPs Nico Rosberg disputou antes de se aposentar como campeão, em 2016?", pergunta: "Quantos GPs Nico Rosberg disputou na carreira na Fórmula 1?" },
  // cruzamento final: "Chael Sonnen" era a resposta da v12:3153.
  "b55264e777": { de: "Em qual evento Anderson Silva enfrentou Chael Sonnen pela primeira vez, em 2010?", pergunta: "Em qual evento, em agosto de 2010, Anderson Silva defendeu o cinturão dos médios com uma finalização no 5º round?" },
  // cruzamento final: "Ajax, em Amsterdã" era a resposta da 013#74 (sem citar o Tottenham, resposta da 001#86).
  "58649deba7": { de: "Qual brasileiro fez três gols no segundo tempo contra o Ajax, em Amsterdã, na semifinal da Champions 2018/19?", pergunta: "Qual brasileiro fez três gols no segundo tempo, fora de casa, na semifinal da Champions 2018/19?" },
  // cruzamento final: "Dwyane Wade" era a resposta da v12:3044 e da 014#68.
  "824568f977": { de: "Contra qual time o Miami Heat de Dwyane Wade venceu a final de 2006?", pergunta: "Contra qual time o Miami Heat venceu a final de 2006?" },
  // cruzamento final: "Milão" era a resposta da 011#17.
  "1155c71f1d": { de: "Qual clube perdeu nos pênaltis a final da Champions League 2015/16, disputada em Milão?", pergunta: "Qual clube perdeu nos pênaltis a final da Champions League 2015/16?" },
  // cruzamento final: "Atlético de Madrid" era a resposta da 003#75 e da 003#15.
  "8af58971b7": { de: "Em qual cidade foi disputada a final da Champions de 2016, entre Real Madrid e Atlético de Madrid?", pergunta: "Em qual cidade foi disputada a final da Champions de 2016, vencida pelo Real Madrid nos pênaltis?" },
  // cruzamento final: "Alexandre Pantoja" era a resposta da v12:2963.
  "04b254ead5": { de: "Em dezembro de 2023, Alexandre Pantoja fez a primeira defesa do cinturão contra qual americano?", pergunta: "Em dezembro de 2023, qual americano perdeu a disputa do cinturão peso-mosca do UFC?" },
  // cruzamento final: "Argentina" era a resposta da 012#47.
  "40ecc2c955": { de: "Por qual placar o Brasil venceu a Argentina na semifinal da Copa América de 2019?", pergunta: "Por qual placar o Brasil venceu a semifinal da Copa América de 2019?" },
  // cruzamento final: a aposentadoria de Jon Jones como campeão dos pesados respondia a piloto#48.
  "db616e8ed1": { de: "Em 2025, qual britânico passou a ser o campeão linear dos pesados do UFC após a aposentadoria de Jon Jones?", pergunta: "Em 2025, qual britânico passou a ser o campeão linear dos pesados do UFC?" },
  // cruzamento final: "Gilbert Durinho" era a resposta da v12:3154.
  "f935299133": { de: "Em 2021, Gilbert Durinho perdeu a disputa do cinturão dos meio-médios para qual campeão?", pergunta: "Em 2021, no UFC 258, qual campeão defendeu o cinturão dos meio-médios contra um brasileiro?" },
  // cruzamento final: "Vasco" era a resposta da v12:2900.
  "c04c79ab3c": { de: "Quem foi o artilheiro do Brasileirão de 2005, aos 39 anos, jogando pelo Vasco?", pergunta: "Quem foi o artilheiro do Brasileirão de 2005, aos 39 anos?" },
  // cruzamento final: "Cruzeiro" era a resposta da piloto#8.
  "2cb9adc1e3": { de: "Qual atacante, ídolo do Palmeiras, trocou o clube pelo Cruzeiro no início de 2025?", pergunta: "Qual atacante, ídolo do Palmeiras, deixou o clube no início de 2025 para jogar em Minas Gerais?" },
  // cruzamento final: "pela Ferrari" respondia a 015#67 e "acidente de 1976" respondia a v12:2762.
  "4868f29e81": { de: "Em qual ano Niki Lauda conquistou o segundo título, pela Ferrari, depois do acidente de 1976?", pergunta: "Em qual ano Niki Lauda conquistou o segundo dos seus três títulos mundiais?" },
  // cruzamento final: "Israel Adesanya" era a resposta da 018#72.
  "5a8b0f86db": { de: "Em 2023, qual lutador tirou o cinturão dos médios de Israel Adesanya numa grande zebra?", pergunta: "Em 2023, no UFC 293, qual lutador conquistou o cinturão dos médios numa grande zebra?" },
  // cruzamento final: "em 2003" respondia a 004#9 (1ª escolha de 2003).
  "44ada65a64": { de: "Ao chegar à NBA, em 2003, LeBron James escolheu o número da camisa em homenagem a qual astro?", pergunta: "Ao chegar à NBA, LeBron James escolheu o número da camisa em homenagem a qual astro?" },
  // cruzamento final: "em 2003" respondia a 004#9 (1ª escolha de 2003).
  "af112f6f8e": { de: "Quantos pontos LeBron James marcou no jogo de estreia na NBA, em 2003, contra o Sacramento Kings?", pergunta: "Quantos pontos LeBron James marcou no jogo de estreia na NBA, contra o Sacramento Kings?" },
  // cruzamento final: "Abu Dhabi" era a resposta da 005#55.
  "7ca506e4db": { de: "Na decisão de 2010, em Abu Dhabi, o piloto da Ferrari que liderava o campeonato perdeu o título preso atrás de qual russo?", pergunta: "Na decisão de 2010, o piloto da Ferrari que liderava o campeonato perdeu o título preso atrás de qual russo?" },
  // cruzamento final: "Salah" era a resposta da 007#33.
  "a9d589385c": { de: "Qual atacante senegalês formou com Salah e um brasileiro o trio de ataque do Liverpool campeão europeu em 2019?", pergunta: "Qual atacante senegalês formou com um egípcio e um brasileiro o trio de ataque do Liverpool campeão europeu em 2019?" },
  // cruzamento final: "Dwyane Wade" era a resposta da v12:3044 e "LeBron James" no Heat respondia a v12:2942.
  "d3fe53b74c": { de: "Ao lado de LeBron James e Dwyane Wade, quem completava o \"Big Three\" do Miami Heat?", pergunta: "Qual ala-pivô formou o \"Big Three\" do Miami Heat bicampeão da NBA em 2012 e 2013?" },
  // cruzamento final: "Mbappé" era a resposta da 002#53.
  "4ec9d70718": { de: "Quantos gols Kylian Mbappé marcou na Copa do Mundo de 2026, quando foi o artilheiro do torneio?", pergunta: "Quantos gols o artilheiro da Copa do Mundo de 2026 marcou no torneio?" },
  // cruzamento final: "2018" com River Plate respondia a 012#73.
  "45b278a5a8": { de: "Qual técnico argentino levou o River Plate aos títulos da Libertadores de 2015 e de 2018?", pergunta: "Qual técnico argentino levou o River Plate a dois títulos da Libertadores na década de 2010?" },
  // cruzamento final: "campeã peso-pena" ligada a Cyborg respondia a v12:2954.
  "154e5f9834": { de: "Por qual organização feminina Cris Cyborg foi campeã peso-pena antes de chegar ao UFC?", pergunta: "Por qual organização feminina Cris Cyborg foi campeã antes de chegar ao UFC?" },
  // cruzamento final: "no Rio de Janeiro" respondia a 019#68 (autódromo do Rio).
  "3108e8a48e": { de: "Qual brasileiro venceu o GP do Brasil de 1983 e o de 1986, ambos no Rio de Janeiro?", pergunta: "Qual brasileiro venceu o GP do Brasil de 1983 e o de 1986?" },
  // cruzamento final: "Chelsea" era a resposta da 012#55.
  "fdc5a05517": { de: "Qual meia inglês do Chelsea marcou dois gols na final do Mundial de Clubes de 2025?", pergunta: "Qual meia inglês marcou dois gols na final do Mundial de Clubes de 2025?" },
  // cruzamento final: "pela terceira vez" somado à 020#120 (primeiro rebaixamento do Grêmio) entregava.
  "34a26741c2": { de: "Em 2021, qual clube gaúcho foi rebaixado para a Série B pela terceira vez?", pergunta: "Em 2021, qual clube gaúcho foi rebaixado para a Série B do Brasileirão?" },
  // cruzamento final: "Noruega" era a resposta da piloto#1.
  "7d360a0438": { de: "Qual jogador do Brasil teve um pênalti defendido no primeiro tempo da derrota para a Noruega, na Copa de 2026?", pergunta: "Qual jogador do Brasil teve um pênalti defendido no primeiro tempo do jogo da eliminação nas oitavas da Copa de 2026?" },
  // cruzamento final: "Fluminense campeão" era a resposta da v12:2885.
  "c1c8c1f275": { de: "Quem foi o artilheiro do Brasileirão de 2012, pelo Fluminense campeão?", pergunta: "Quem foi o artilheiro do Brasileirão de 2012, com 20 gols?" },
  // cruzamento final: "Alemanha Ocidental" era a resposta da v12:4864.
  "55181e529a": { de: "Qual técnico comandou a Alemanha Ocidental no título mundial de 1974?", pergunta: "Qual técnico foi campeão da Copa do Mundo de 1974?" },
  // cruzamento final: "catenaccio" era a resposta da v12:5399.
  "f7a489ed3e": { de: "Qual técnico argentino comandou a \"Grande Inter\" dos anos 1960 e popularizou o catenaccio?", pergunta: "Qual técnico argentino comandou a \"Grande Inter\" dos anos 1960 e popularizou o esquema defensivo com líbero?" },
  // cruzamento final: "Chuteira de Ouro" era a resposta da v12:5400.
  "ce49ae20fe": { de: "Qual atacante ganhou a Chuteira de Ouro europeia na temporada 2024/25, com 31 gols pelo Real Madrid?", pergunta: "Qual atacante foi o maior artilheiro das ligas europeias em 2024/25, com 31 gols pelo Real Madrid?" },
  // cruzamento final: "Didi" era a resposta da v12:5401.
  "aa138b0187": { de: "Qual apelido Nelson Rodrigues deu a Didi, meia bicampeão mundial em 1958 e 1962?", pergunta: "Qual apelido Nelson Rodrigues deu ao meia do Botafogo bicampeão mundial em 1958 e 1962?" },
  // cruzamento final: "SAF" era a resposta da v12:7481.
  "50157c664f": { de: "Qual empresário americano comprou a SAF do Botafogo em 2022?", pergunta: "Qual empresário americano comprou o futebol do Botafogo em 2022?" },
  // cruzamento final: "Athletico Paranaense" era a resposta da v12:10833.
  "77af849b67": { de: "Qual clube colombiano perdeu a final da Copa Sul-Americana de 2018 para o Athletico Paranaense, nos pênaltis?", pergunta: "Qual clube colombiano foi vice da Copa Sul-Americana de 2018, nos pênaltis?" },
  // cruzamento final: "Gana" era a resposta da v12:12318.
  "cb78636c68": { de: "Qual atacante uruguaio, ídolo do Botafogo, bateu um pênalti de cavadinha contra Gana na Copa de 2010?", pergunta: "Qual atacante uruguaio, ídolo do Botafogo, bateu de cavadinha o pênalti decisivo nas quartas da Copa de 2010?" },
  // cruzamento final: "Boca Juniors" era a resposta da 008#20.
  "7c2db85bf1": { de: "Qual clube mexicano perdeu a final da Sul-Americana de 2005 para o Boca Juniors?", pergunta: "Qual clube mexicano foi vice da Sul-Americana de 2005?" },
  // cruzamento final: "Galvão Bueno" era a resposta da 010#62.
  "2c74e01965": { de: "Qual jornalista foi por décadas o comentarista das transmissões de F1 da Globo, ao lado de Galvão Bueno?", pergunta: "Qual jornalista foi por décadas o comentarista das transmissões de F1 da Globo?" },
  // cruzamento final: "tricampeão escocês" respondia a v12:6054 (Jackie Stewart).
  "f5e933598f": { de: "Por qual equipe de um tricampeão escocês Rubens Barrichello correu antes de ir para a Ferrari?", pergunta: "Por qual equipe Rubens Barrichello correu de 1997 a 1999, antes de ir para a Ferrari?" },
  // cruzamento final: "Coreia do Norte" era a resposta da 013#51.
  "f9aa6f2e2d": { de: "Por qual placar Portugal goleou a Coreia do Norte na fase de grupos da Copa de 2010?", pergunta: "Por qual placar Portugal goleou uma seleção asiática na fase de grupos da Copa de 2010?" },
  // cruzamento final: "Turquia" era a resposta da 002#83 e da v12:12317.
  "ce13c5efdc": { de: "Qual brasileiro simulou ter levado uma bolada no rosto contra a Turquia, na Copa de 2002?", pergunta: "Qual brasileiro simulou ter levado uma bolada no rosto num jogo da fase de grupos da Copa de 2002?" },
  // cruzamento final: "Pirlo" era a resposta da v12:5999.
  "10e7aa9fb2": { de: "Como os italianos chamam o volante armador que organiza o jogo lá de trás, como Pirlo fazia?", pergunta: "Como os italianos chamam o volante armador que organiza o jogo lá de trás?" },
  // cruzamento final: "chute frontal" era a resposta da v12:2964.
  "a9390939b0": { de: "Em 2011, Lyoto Machida aposentou Randy Couture com um chute frontal saltado, comparado a uma cena famosa de qual filme?", pergunta: "Em 2011, Lyoto Machida aposentou Randy Couture com um chute saltado, comparado a uma cena famosa de qual filme?" },
  // cruzamento final: "Fortaleza" era a resposta da v12:4774.
  "0e9fff0545": { de: "Qual goleiro mexicano brilhou no empate sem gols com o Brasil, em Fortaleza, na Copa de 2014?", pergunta: "Qual goleiro mexicano brilhou no empate sem gols com o Brasil na Copa de 2014?" },
  // cruzamento final: "Avaí, em Florianópolis" respondia a v12:2821 (Leão da Ilha).
  "e851fd060b": { de: "Qual é o estádio do Avaí, em Florianópolis?", pergunta: "Qual é o estádio do Avaí?" },
  // cruzamento final: "Friedenreich" era a resposta da v12:3129.
  "8398c709e0": { de: "Qual foi o primeiro título oficial da seleção brasileira, em 1919, com gol de Friedenreich na final?", pergunta: "Qual foi o primeiro título oficial da seleção brasileira, em 1919?" },
  // cruzamento final: reserva 017#44: "o francês" respondia a 004#73 (pivô francês Defensor do Ano).
  "02833149a4": { de: "Em qual posição o francês Rudy Gobert foi escolhido no draft de 2013?", pergunta: "Em qual posição Rudy Gobert foi escolhido no draft de 2013?" },
  // cruzamento final: "vencendo o Miami Heat" dava o adversário da 017#29 (final de 2006).
  "c04a54c395": { de: "Qual time Dirk Nowitzki levou ao título da NBA de 2011, vencendo o Miami Heat?", pergunta: "Qual time Dirk Nowitzki levou ao título da NBA de 2011?" },
  // Reserva 004#4: "astro dos Bulls" entregava, porque Jordan era o único dos Bulls entre as alternativas.
  '7b5b28098d': { de: 'Qual astro dos Bulls marcou 63 pontos contra o Boston Celtics num jogo de playoff de 1986?', pergunta: 'Qual astro marcou 63 pontos contra o Boston Celtics num jogo de playoff de 1986?' },
};

// Perguntas tiradas na montagem (id -> motivo). "de" confere o texto de origem.
const REMOVIDAS = {
  // Mesmo fato de uma pergunta do banco Desenhos ("Em Space Jam, qual time de alienígenas...").
  '28101b3aec': { de: 'No filme de 1996 em que Michael Jordan joga ao lado dos Looney Tunes, como se chama o time dos alienígenas vilões?', motivo: 'repete Desenhos (Monstars)' },
  // Mesmo fato de uma pergunta do banco Desenhos ("Qual coelha é a namorada do Pernalonga no filme Space Jam?").
  'cc4333c0fc': { de: 'No filme de 1996 com Michael Jordan e os Looney Tunes, qual coelha estreou como jogadora do time dele?', motivo: 'repete Desenhos (Lola)' },
  // Três enunciados (005#17, 005#18, 018#42) dizem que o cinturão do Poatan era o dos meio-pesados.
  '5621eadd3d': { de: 'Em outubro de 2025, Alex Pereira recuperou o cinturão de qual categoria do UFC?', motivo: 'entregue por 005#17, 005#18 e 018#42' },
  // v12:3080, 018#99 e 018#60 dizem que Junior Cigano foi campeão dos pesados.
  '690a3b3814': { de: 'Qual lutador brasileiro, apelidado de "Cigano", foi campeão dos pesos-pesados do UFC?', motivo: 'entregue por v12:3080, 018#99 e 018#60' },
};
const usadasRem = new Set();
function removida(p) {
  const r = REMOVIDAS[p.id];
  if (!r) return false;
  if (p.pergunta !== r.de) throw new Error('remocao ' + p.id + ': texto de origem mudou');
  usadasRem.add(p.id);
  return true;
}

const usadasCorr = new Set();
function limpa(p, origem) {
  let pergunta = p.pergunta;
  const c = CORRECOES[p.id];
  if (c) {
    if (pergunta !== c.de) throw new Error('correcao ' + p.id + ': texto de origem mudou');
    pergunta = c.pergunta;
    usadasCorr.add(p.id);
  }
  return {
    q: { categoria: 'Esportes', dificuldade: dificuldadeFinal(p), pergunta: nfc(pergunta), resposta: nfc(p.resposta), alternativas: p.alternativas.map(nfc) },
    meta: { id: p.id, origem, subtema: p.subtema },
  };
}

const itens = [];
const LOTES = ['piloto', ...Array.from({ length: 20 }, (_, i) => String(i + 1).padStart(3, '0'))];
const reservasAchadas = new Set();
const reservasItens = [];
for (const n of LOTES) {
  ler(join(D, 'lotes', `esportes-${n}.json`)).forEach((p, i) => {
    const origem = `${n}#${i}`;
    if (p.status === 'conferida') { if (!removida(p)) itens.push(limpa(p, origem)); }
    else if (p.status === 'reserva' && RESERVAS[p.id]) {
      if (RESERVAS[p.id] !== origem) throw new Error('reserva ' + p.id + ' mudou de posicao: ' + origem);
      reservasAchadas.add(p.id);
      reservasItens.push(limpa(p, origem + ' (reserva)'));
    }
  });
}
itens.push(...reservasItens);
ler(join(D, 'reaproveitadas-v12.json')).forEach((p, i) => {
  if (p.status !== 'reaproveitada') throw new Error('reaproveitada com status inesperado: ' + p.id);
  if (!removida(p)) itens.push(limpa(p, 'reap#' + i + ' ' + (p.origem || '')));
});

for (const id of Object.keys(RESERVAS)) if (!reservasAchadas.has(id)) throw new Error('reserva nao encontrada: ' + id);
for (const id of Object.keys(REMOVIDAS)) if (!usadasRem.has(id)) throw new Error('remocao nao aplicada: ' + id);
for (const id of Object.keys(CORRECOES)) if (!usadasCorr.has(id)) throw new Error('correcao nao aplicada: ' + id);

// checagens basicas antes de gravar
const chave = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
const vistos = new Set();
const ids = new Set();
for (const { q: p, meta } of itens) {
  if (ids.has(meta.id)) throw new Error('id repetido: ' + meta.id);
  ids.add(meta.id);
  if (!NIVEIS.includes(p.dificuldade)) throw new Error('dificuldade invalida: ' + p.pergunta);
  if (p.alternativas.length !== 4) throw new Error('alternativas != 4: ' + p.pergunta);
  if (new Set(p.alternativas.map(chave)).size !== 4) throw new Error('alternativas repetidas: ' + p.pergunta);
  if (!p.alternativas.includes(p.resposta)) throw new Error('resposta fora das alternativas: ' + p.pergunta);
  const k = chave(p.pergunta);
  if (vistos.has(k)) throw new Error('enunciado duplicado: ' + p.pergunta);
  vistos.add(k);
}

const saida = itens.map((i) => i.q);
const conta = (campo) => {
  const c = {};
  for (const { q, meta } of itens) { const k = campo === 'dificuldade' ? q.dificuldade : meta.subtema; c[k] = (c[k] || 0) + 1; }
  return c;
};
console.log('Total:', saida.length, '| reservas:', reservasItens.length, '| correcoes:', usadasCorr.size, '| removidas:', usadasRem.size);
console.log('Por esporte:', conta('subtema'));
console.log('Por dificuldade:', conta('dificuldade'));
if (saida.length !== 3000) throw new Error('total diferente de 3000: ' + saida.length);

writeFileSync(join(D, 'perguntas-esportes.json'), JSON.stringify(saida), 'utf8');
console.log('gravado perguntas-esportes.json');
const iMeta = process.argv.indexOf('--meta');
if (iMeta > 0) writeFileSync(process.argv[iMeta + 1], JSON.stringify(itens.map(({ q, meta }) => ({ ...q, ...meta }))), 'utf8');
