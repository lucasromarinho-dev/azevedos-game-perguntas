// Fonte das 300 perguntas da parte 2 do banco Desenhos.
// Cada item: [dif, pergunta, resposta, [3 erradas], opcoes]
// opcoes: k = chaves (cada uma pode ter alternativas com |), n = palavra que tem de aparecer perto (300 caracteres), s = páginas extras, mu = música
export const BLOCOS = [];
const B = (obra, tema, fontes, itens) => BLOCOS.push({ obra, tema, fontes, itens });
const PT = 'pt.wikipedia.org/w', EN = 'en.wikipedia.org/w';
const pt = (t) => PT + '|' + t, en = (t) => EN + '|' + t, tm = (t) => 'turmadamonica.fandom.com/pt-br|' + t;

// ===================== CLÁSSICOS (130) =====================
B('Tom e Jerry', 'Desenhos clássicos', [pt('Tom and Jerry'), en('Tom and Jerry'), en('Spike and Tyke'), en('Jerry Mouse'), en('Tom Cat')], [
  ['facil', 'Em Tom e Jerry, qual é o nome do cachorro grandalhão que vive dando lição no Tom?', 'Spike', ['Thor', 'Bob', 'Duque'], { k: ['Spike'] }],
  ['facil', 'Em Tom e Jerry, qual é a raça do Spike, o cachorro que vive protegendo o Jerry?', 'Buldogue', ['Dálmata', 'Boxer', 'Poodle'], { k: ['bulldog|buldogue'], n: 'Spike' }],
  ['medio', 'Em Tom e Jerry, como se chama o filhote do cachorro Spike?', 'Tyke', ['Toby', 'Pingo', 'Buddy'], { k: ['Tyke'] }],
  ['medio', 'Em Tom e Jerry, qual é o nome do gato preto de rua que disputa com o Tom a atenção das gatinhas?', 'Butch', ['Bóris', 'Tobias', 'Bartolomeu'], { k: ['Butch'] }],
  ['medio', 'Em Tom e Jerry, como se chama a gatinha branca por quem o Tom vive se apaixonando?', 'Toodles', ['Duquesa', 'Fifi', 'Lulu'], { k: ['Toodles'] }],
  ['facil', 'Em Tom e Jerry, onde fica a casinha do Jerry?', 'Num buraco na parede', ['No forro do telhado', 'Numa caixa de sapatos', 'Embaixo da geladeira'], { k: ['mouse hole|buraco'] }],
  ['dificil', 'No episódio em que Tom é pianista num grande concerto e Jerry mora dentro do piano, que obra ele toca?', 'Rapsódia Húngara n.º 2', ['Danúbio Azul', 'Marcha Turca', 'Für Elise'], { k: ['Hungarian Rhapsody'], s: [en('The Cat Concerto')], mu: 1 }],
  ['dificil', 'No episódio "Johann Mouse", Jerry não resiste e começa a dançar quando Tom toca qual instrumento?', 'Piano', ['Violino', 'Harpa', 'Sanfona'], { k: ['piano'], n: 'waltz', s: [en('Johann Mouse')] }],
  ['dificil', 'No primeiro desenho da dupla, antes de virar Tom, qual nome o gato recebia?', 'Jasper', ['Oscar', 'Félix', 'Bóris'], { k: ['Jasper'], s: [en('Puss Gets the Boot')] }],
]);

B('Pica-Pau', 'Desenhos clássicos', [pt('Pica-Pau (personagem)'), pt('Pica-Pau'), en('Woody Woodpecker'), en('List of Walter Lantz Productions characters')], [
  ['facil', 'De que cor é o topete do Pica-Pau?', 'Vermelho', ['Azul', 'Amarelo', 'Verde'], { k: ['red|vermelh'], n: 'Woody|Pica' }],
  ['facil', 'Qual é a marca registrada do Pica-Pau, que ele solta toda vez que apronta?', 'Uma risada escandalosa', ['Um assobio', 'Um espirro', 'Um uivo'], { k: ['laugh|risada'] }],
  ['facil', 'De que cor é a maior parte das penas do corpo do Pica-Pau?', 'Azul', ['Verde', 'Marrom', 'Preto'], { k: ['blue|azul'] }],
  ['medio', 'Como se chamam os sobrinhos do Pica-Pau?', 'Toquinho e Lasquinha', ['Pipo e Pepe', 'Juca e Chico', 'Tico e Teco'], { k: ['Toquinho|Knothead'] }],
  ['medio', 'Qual pinguinzinho da turma do Pica-Pau vive tentando fugir do frio?', 'Picolino', ['Pingo', 'Gelinho', 'Friozinho'], { k: ['Picolino|Chilly Willy'] }],
  ['medio', 'Qual é o nome da namorada do Pica-Pau?', 'Winnie', ['Wanda', 'Mimi', 'Penélope'], { k: ['Winnie'] }],
  ['medio', 'Qual ursinho preto e branco de desenho clássico divide a turma de personagens com o Pica-Pau e o pinguim Picolino?', 'Andy Panda', ['Po', 'Barney Bear', 'Ursinho Misha'], { k: ['Andy Panda'] }],
  ['medio', 'Qual jacaré guloso vive tentando transformar o Pica-Pau em almoço?', 'Zé Jacaré', ['Jacaré Juca', 'Sr. Dentuço', 'Jacarandá'], { k: ['Gabby Gator|Zé Jacaré'] }],
  ['dificil', 'Qual cachorro vive às voltas com as travessuras do pinguim Picolino?', 'Smedley', ['Totó', 'Ralf', 'Duque'], { k: ['Smedley'], s: [en('Chilly Willy')] }],
]);

B('Looney Tunes', 'Desenhos clássicos', [pt('Looney Tunes'), pt('Pernalonga'), pt('Patolino'), pt('Papa-Léguas e Coiote'), en('Bugs Bunny'), en('Daffy Duck'), en('Wile E. Coyote and the Road Runner'), en('Tweety'), en('Foghorn Leghorn')], [
  ['facil', 'Qual é a pergunta famosa que o Pernalonga faz para quem encontra?', '"O que é que há, velhinho?"', ['"Cadê o queijo, amigão?"', '"Vamos brincar, parceiro?"', '"Tá com fome, docinho?"'], { k: ['que é que há|que há, velhinho|What\'s up, Doc'] }],
  ['facil', 'Qual legume o Pernalonga vive mastigando?', 'Cenoura', ['Beterraba', 'Nabo', 'Rabanete'], { k: ['cenoura|carrot'] }],
  ['facil', 'Que som o Papa-Léguas faz antes de disparar pela estrada?', '"Bip-bip!"', ['"Fom-fom!"', '"Piu-piu!"', '"Vrum-vrum!"'], { k: ['bip-bip'], s: [pt('Papa-Léguas (desenho animado)')] }],
  ['facil', 'Em que lugar vivem o Papa-Léguas e o Coiote?', 'No deserto', ['Na floresta', 'Na praia', 'Na montanha nevada'], { k: ['deserto|desert'] }],
  ['facil', 'O que costuma acontecer com o Coiote quando ele percebe que correu para fora do penhasco?', 'Despenca lá embaixo', ['Sai voando', 'Vira pedra', 'Pula de volta'], { k: ['cliff|penhasco'], n: 'fall|cai' }],
  ['facil', 'Como se chama a dona do Piu-Piu e do Frajola?', 'Vovó', ['Tia Gertrudes', 'Dona Florinda', 'Madame Mim'], { k: ['Granny|Vovó'] }],
  ['medio', 'Qual galo grandalhão e falastrão dos Looney Tunes vive aprontando no galinheiro?', 'Frangolino', ['Cocoricó', 'Galetão', 'Garnizé'], { k: ['Frangolino|Foghorn'] }],
  ['facil', 'Qual coelha é a namorada do Pernalonga no filme "Space Jam"?', 'Lola', ['Penélope', 'Mimi', 'Bia'], { k: ['Lola'], s: [pt('Space Jam'), en('Lola Bunny')] }],
  ['medio', 'Qual é a frase que o Patolino costuma disparar contra quem o irrita?', '"Você é desprezível!"', ['"Isso é um ultraje!"', '"Que coisa horrível!"', '"Ninguém me respeita!"'], { k: ['despicable|desprezível'] }],
  ['medio', 'Qual personagem dos Looney Tunes vira o herói espacial Duck Dodgers?', 'Patolino', ['Coiote', 'Gaguinho', 'Frajola'], { k: ['Duck Dodgers'], n: 'Daffy|Patolino' }],
  ['medio', 'Qual é o nome da namorada do Gaguinho?', 'Petúnia', ['Pétala', 'Penélope', 'Priscila'], { k: ['Petunia|Petúnia'], s: [en('Porky Pig'), en('Petunia Pig')] }],
  ['medio', 'Diante do caçador Hortelino, Pernalonga e Patolino discutem se é temporada de caça de quais bichos?', 'Coelho e pato', ['Pato e ganso', 'Coelho e lebre', 'Pato e peru'], { k: ['Rabbit season'], s: [en('Hunting trilogy')] }],
  ['medio', 'No desenho em que corta o cabelo do Hortelino ao som de "O Barbeiro de Sevilha", quem faz o papel de barbeiro?', 'Pernalonga', ['Coiote', 'Gaguinho', 'Frajola'], { k: ['Barber of Seville'], n: 'Bugs', s: [en('Rabbit of Seville')], mu: 1 }],
  ['medio', 'Em "Space Jam", qual time de alienígenas os Looney Tunes enfrentam no basquete?', 'Monstars', ['Tune Squad', 'Space Bulls', 'Meteoros'], { k: ['Monstars'], s: [pt('Space Jam')] }],
  ['dificil', 'Qual música antiga virou o tema de abertura dos desenhos dos Looney Tunes?', '"The Merry-Go-Round Broke Down"', ['"Merrily We Roll Along"', '"Yankee Doodle"', '"Take Me Out to the Ball Game"'], { k: ['Merry-Go-Round Broke Down'], s: [en('Looney Tunes')], mu: 1 }],
  ['dificil', 'Qual lobo vive tentando roubar ovelhas e bate ponto todo dia com o cão pastor Sam?', 'Ralph', ['Lobão', 'Bafo', 'Lupércio'], { k: ['Ralph Wolf|Ralph'], s: [en('Ralph Wolf and Sam Sheepdog')] }],
  ['dificil', 'Qual monstro peludo laranja, de tênis, já tentou pegar o Pernalonga?', 'Gossamer', ['Peludão', 'Monstrengo', 'Bicho-Papão'], { k: ['Gossamer'], s: [en('Gossamer (Looney Tunes)')] }],
  ['dificil', 'Qual é o nome do cão verde que acompanha Marvin, o Marciano?', 'K-9', ['R2', 'Bolt', 'Spot'], { k: ['K-9'], s: [en('Marvin the Martian')] }],
  ['dificil', 'Em vários desenhos, o Pernalonga sai do túnel e diz que devia ter virado à esquerda em qual cidade?', 'Albuquerque', ['Las Vegas', 'Chicago', 'Miami'], { k: ['Albuquerque'] }],
]);

B('Scooby-Doo', 'Desenhos clássicos', [pt('Scooby-Doo'), pt('Scooby-Doo, Where Are You!'), en('Scooby-Doo'), en('Scooby-Doo, Where Are You!'), en('Mystery Inc.')], [
  ['facil', 'Na turma de detetives do Salsicha, qual petisco é usado para convencer o cachorro medroso a encarar os monstros?', 'Biscoito Scooby', ['Pão de queijo', 'Osso de borracha', 'Bolinho de chuva'], { k: ['Scooby Snack|Biscoito Scooby'] }],
  ['facil', 'Qual integrante da turma do Scooby-Doo usa óculos e é a mais inteligente do grupo?', 'Velma', ['Penélope', 'Mimi', 'Sally'], { k: ['Velma'], n: 'óculos|glasses|intelig' }],
  ['facil', 'Qual integrante da turma do Scooby-Doo tem cabelo ruivo e vive se metendo em encrenca?', 'Daphne', ['Penélope', 'Sally', 'Mimi'], { k: ['Daphne'] }],
  ['facil', 'Quem costuma liderar a turma do Scooby-Doo e montar as armadilhas para pegar os monstros?', 'Fred', ['Bob', 'Jack', 'Ted'], { k: ['Fred'], n: 'trap|armadilha|leader|líder' }],
  ['medio', 'Qual é a raça do Scooby-Doo?', 'Dogue alemão', ['São-bernardo', 'Labrador', 'Boxer'], { k: ['Great Dane|dogue alemão|dogue-alemão'] }],
  ['facil', 'Nos episódios clássicos do Scooby-Doo, quem costuma estar por trás do monstro quando a turma tira a máscara?', 'Uma pessoa fantasiada', ['Um fantasma de verdade', 'Um robô', 'Um animal do zoológico'], { k: ['unmask|desmascar|disguise|fantasiad'] }],
  ['medio', 'Qual é o nome da turma de detetives do Scooby-Doo?', 'Mistério S/A', ['Caça-Fantasmas', 'Detetives do Bairro', 'Turma do Arrepio'], { k: ['Mystery Inc|Mistério S/A|Mistério S.A'] }],
  ['medio', 'No Scooby-Doo, quando é desmascarado, quem o vilão costuma culpar por ter sido pego?', 'As crianças enxeridas e o cachorro', ['A polícia da cidade', 'O vizinho fofoqueiro', 'O próprio comparsa'], { k: ['meddling|enxerid|intrometid'] }],
  ['dificil', 'No primeiro episódio da série clássica do Scooby-Doo, qual monstro a turma desmascara?', 'O fantasma do Cavaleiro Negro', ['O Lobisomem', 'A Múmia', 'O Homem de Neve'], { k: ['Black Knight'], s: [en('List of Scooby-Doo, Where Are You! episodes')] }],
  ['dificil', 'Qual feiticeiro ajuda a turma do Scooby-Doo a recapturar os 13 fantasmas?', 'Vincent Van Ghoul', ['Zatara', 'Mandrake', 'Dr. Estranho'], { k: ['Vincent Van Ghoul'], s: [en('The 13 Ghosts of Scooby-Doo')] }],
]);

B('Os Flintstones', 'Desenhos clássicos', [pt('Os Flintstones'), pt('The Flintstones'), en('The Flintstones'), en('Fred Flintstone')], [
  ['facil', 'Como Fred Flintstone faz o seu carro andar?', 'Correndo com os pés', ['Com um motor a vapor', 'Puxado por um dinossauro', 'Com pedais de bicicleta'], { k: ['feet|pés'] }],
  ['facil', 'Qual é a cor da roupa de Fred Flintstone?', 'Laranja com manchas pretas', ['Azul com listras brancas', 'Verde com bolinhas', 'Marrom lisa'], { k: ['orange|laranja'] }],
  ['medio', 'Em que cidade vivem os Flintstones?', 'Bedrock', ['Rochópolis', 'Pedrópolis', 'Cascalho'], { k: ['Bedrock'] }],
  ['medio', 'Onde Fred Flintstone trabalha, operando um dinossauro?', 'Numa pedreira', ['Numa padaria', 'Num zoológico', 'Numa fábrica de rodas'], { k: ['quarry|pedreira'] }],
  ['medio', 'Qual esporte Fred e Barney adoram jogar juntos?', 'Boliche', ['Golfe', 'Beisebol', 'Futebol'], { k: ['bowling|boliche'] }],
  ['medio', 'Como se chama o chefe de Fred Flintstone na pedreira?', 'Sr. Pedregulho', ['Sr. Rochedo', 'Sr. Cascalho', 'Sr. Granito'], { k: ['Pedregulho|Slate'] }],
  ['medio', 'Qual pequeno alienígena verde só Fred e Barney conseguem enxergar?', 'Grande Gazoo', ['Zorg', 'Gluk', 'Plic'], { k: ['Gazoo'] }],
  ['dificil', 'De qual associação Fred e Barney fazem parte, com chapéus de chifre?', 'Búfalos d\'Água', ['Leões de Pedra', 'Mamutes Unidos', 'Tigres-dentes-de-sabre'], { k: ['Water Buffalo|Búfalos'] }],
]);

B('Os Jetsons', 'Desenhos clássicos', [pt('Os Jetsons'), pt('The Jetsons'), en('The Jetsons')], [
  ['facil', 'Qual é o nome da empregada robô dos Jetsons?', 'Rosie', ['Robertina', 'Zelda', 'Lulu'], { k: ['Rosie|Rosey'] }],
  ['facil', 'Qual é o nome do cachorro dos Jetsons?', 'Astro', ['Cometa', 'Foguete', 'Satélite'], { k: ['Astro'] }],
  ['facil', 'Como George Jetson vai para o trabalho?', 'Num carro voador', ['De trem-bala', 'De patinete', 'Teletransportado'], { k: ['aerocar|carro voador|flying car'] }],
  ['medio', 'Como se chama o filho caçula dos Jetsons?', 'Elroy', ['Elton', 'Leroy', 'Ronnie'], { k: ['Elroy'] }],
  ['medio', 'Como se chama a filha adolescente dos Jetsons?', 'Judy', ['Jane', 'Julie', 'Joana'], { k: ['Judy'] }],
  ['medio', 'Qual é o nome do patrão de George Jetson?', 'Sr. Spacely', ['Sr. Cogswell', 'Sr. Rocket', 'Sr. Galáxio'], { k: ['Spacely'] }],
  ['dificil', 'O que a empresa onde George Jetson trabalha fabrica?', 'Engrenagens', ['Foguetes', 'Robôs', 'Computadores'], { k: ['Sprockets|engrenage'] }],
]);

B('Caverna do Dragão', 'Desenhos clássicos', [pt('Caverna do Dragão'), en('Dungeons & Dragons (TV series)')], [
  ['facil', 'Como as crianças de Caverna do Dragão foram parar no Reino?', 'Andando numa montanha-russa', ['Caindo num poço', 'Entrando num guarda-roupa', 'Lendo um livro mágico'], { k: ['montanha-russa|roller coaster'] }],
  ['facil', 'Em Caverna do Dragão, qual é o nome do filhote de unicórnio que acompanha o Bobby?', 'Uni', ['Estrelinha', 'Lumi', 'Brilho'], { k: ['Uni'] }],
  ['facil', 'Em Caverna do Dragão, qual é o vilão de um chifre só que vive tentando roubar as armas mágicas das crianças?', 'Vingador', ['Feiticeiro Sombrio', 'Rei Corvo', 'Lorde Trevas'], { k: ['Vingador|Venger'] }],
  ['facil', 'Em Caverna do Dragão, qual personagem é o mago que vive tirando coisas do chapéu?', 'Presto', ['Mago Supremo', 'Zoltar', 'Magnus'], { k: ['Presto'] }],
  ['facil', 'Em Caverna do Dragão, qual personagem usa a capa da invisibilidade?', 'Sheila', ['Diana', 'Kátia', 'Paula'], { k: ['Sheila'], n: 'capa|invis|cloak' }],
  ['medio', 'Em Caverna do Dragão, qual arma mágica pertence ao Bobby, o bárbaro?', 'Tacape', ['Martelo', 'Machado', 'Lança'], { k: ['tacape|club'] }],
  ['medio', 'Em Caverna do Dragão, qual é a arma mágica de Hank, o arqueiro?', 'Arco de energia', ['Besta de prata', 'Lança de fogo', 'Funda mágica'], { k: ['arco|bow'], n: 'Hank' }],
  ['facil', 'Em Caverna do Dragão, qual integrante da turma é medroso, reclama de tudo e carrega um escudo?', 'Eric', ['Hank', 'Bobby', 'Kevin'], { k: ['Eric'], n: 'escudo|shield' }],
  ['medio', 'Em Caverna do Dragão, qual dragão de cinco cabeças é temido até pelo Vingador?', 'Tiamat', ['Smaug', 'Bahamut', 'Hidra'], { k: ['Tiamat'] }],
  ['medio', 'Em Caverna do Dragão, qual é a arma mágica de Diana, a acrobata?', 'Bastão', ['Chicote', 'Bumerangue', 'Corda'], { k: ['bastão|staff'], n: 'Diana' }],
]);

B('He-Man', 'Desenhos clássicos', [pt('He-Man'), pt('He-Man and the Masters of the Universe'), en('He-Man and the Masters of the Universe (1983 TV series)'), en('He-Man')], [
  ['facil', 'Qual frase o Príncipe Adam diz, erguendo a espada, para virar He-Man?', '"Pelos poderes de Grayskull!"', ['"Pela força de Eternia!"', '"Pela luz do Sol!"', '"Pelo trovão do céu!"'], { k: ['poderes de Grayskull|power of Grayskull'] }],
  ['facil', 'Qual é a identidade secreta de He-Man?', 'Príncipe Adam', ['Príncipe Leo', 'Príncipe Marcos', 'Príncipe Arthur'], { k: ['Adam'] }],
  ['facil', 'Em que planeta vivem He-Man e seus amigos?', 'Eternia', ['Thundera', 'Krypton', 'Namekusei'], { k: ['Eternia'] }],
  ['medio', 'Qual guerreira, capitã da guarda real, luta ao lado de He-Man?', 'Teela', ['Mara', 'Lyra', 'Zara'], { k: ['Teela'] }],
  ['medio', 'Qual mestre de armas do palácio inventa as engenhocas usadas por He-Man?', 'Mentor', ['Gideon', 'Galahad', 'Lancelot'], { k: ['Mentor|Man-At-Arms'] }],
  ['dificil', 'Qual feiticeira de pele azul é aliada do Esqueleto?', 'Maligna', ['Sombria', 'Medusa', 'Morgana'], { k: ['Maligna|Evil-Lyn'] }],
  ['dificil', 'Qual vilão peludo, aliado do Esqueleto, consegue controlar os animais?', 'Homem-Fera', ['Homem-Lobo', 'Mandíbula', 'Garra'], { k: ['Homem-Fera|Beast Man'] }],
]);

B('She-Ra', 'Desenhos clássicos', [pt('She-Ra'), pt('She-Ra: A Princesa do Poder'), en('She-Ra: Princess of Power')], [
  ['facil', 'Qual frase Adora diz, erguendo a espada, para virar She-Ra?', '"Pela honra de Grayskull!"', ['"Pela luz de Etéria!"', '"Pela força da Rebelião!"', '"Pelo brilho das estrelas!"'], { k: ['honra de Grayskull|honor of Grayskull'] }],
  ['medio', 'Como se chama o cavalo alado de She-Ra?', 'Ventania', ['Relâmpago', 'Tornado', 'Pégaso'], { k: ['Ventania|Swift Wind'] }],
  ['medio', 'Qual vilão comanda a Horda contra She-Ra?', 'Hordak', ['Hordor', 'Skarr', 'Vulcan'], { k: ['Hordak'] }],
  ['medio', 'Em que planeta She-Ra lidera a Rebelião contra a Horda?', 'Etéria', ['Thundera', 'Krypton', 'Arkon'], { k: ['Etéria|Etheria'] }],
]);

B('Thundercats', 'Desenhos clássicos', [pt('ThunderCats'), en('ThunderCats (1985 TV series)'), en('List of ThunderCats characters')], [
  ['facil', 'Qual é a única mulher do grupo original dos Thundercats, famosa pela velocidade?', 'Cheetara', ['Leona', 'Felina', 'Tigrina'], { k: ['Cheetara'] }],
  ['medio', 'Qual Thundercat é o mais forte do grupo e cuida das máquinas e dos veículos?', 'Panthro', ['Leonar', 'Pantor', 'Bravo'], { k: ['Panthro'] }],
  ['medio', 'Qual Thundercat tem listras de tigre e um chicote que o deixa invisível?', 'Tygra', ['Bengali', 'Tigrão', 'Rajá'], { k: ['Tygra'] }],
  ['medio', 'Como se chamam os dois Thundercats filhotes, que são irmãos?', 'WilyKit e WilyKat', ['Kiko e Kika', 'Tico e Teco', 'Lin e Lan'], { k: ['WilyKit|Wilykit'] }],
  ['dificil', 'Na espada de Lion-O, qual joia dá a "visão além do alcance"?', 'Olho de Thundera', ['Pedra do Poder', 'Cristal de Grayskull', 'Rubi Solar'], { k: ['Olho de Thundera|Eye of Thundera'] }],
  ['dificil', 'Como se chama o tanque de guerra dos heróis felinos de Lion-O?', 'Thundertanque', ['Felinomóvel', 'Garramóvel', 'Leotanque'], { k: ['Thundertank|Thundertanque|ThunderTank'] }],
  ['dificil', 'Qual Thundercat mais velho morre na viagem e vira um espírito que aconselha Lion-O?', 'Jaga', ['Leonidas', 'Tigrus', 'Leomar'], { k: ['Jaga'] }],
]);

B('Os Smurfs', 'Desenhos clássicos', [pt('Os Smurfs'), pt('Smurfs'), en('The Smurfs (1981 TV series)'), en('List of The Smurfs characters')], [
  ['facil', 'Qual é a Smurf menina mais famosa da vila?', 'Smurfette', ['Smurfina', 'Smurfinha', 'Smurfa'], { k: ['Smurfette'] }],
  ['facil', 'De que cor são o gorro e a calça do Papai Smurf?', 'Vermelhos', ['Brancos', 'Azuis', 'Amarelos'], { k: ['red pants'], s: [en('Papa Smurf')] }],
  ['medio', 'Qual é o nome do gato do Gargamel?', 'Cruel', ['Sombra', 'Félix', 'Tenebroso'], { k: ['Cruel|Azrael'] }],
  ['medio', 'Qual Smurf usa óculos e vive dando lição de moral nos outros?', 'Gênio', ['Sabido', 'Professor', 'Doutor'], { k: ['Gênio'], n: 'óculos', s: [pt('Lista de personagens de Les Schtroumpfs')] }],
  ['medio', 'Qual Smurf vive tropeçando e quebrando tudo pela vila?', 'Desastrado', ['Atrapalhado', 'Distraído', 'Trapalhudo'], { k: ['Desastrado'], s: [pt('Lista de personagens de Les Schtroumpfs')] }],
  ['medio', 'Qual Smurf é o fortão da vila e tem um coração tatuado no braço?', 'Robusto', ['Forte', 'Bravo', 'Valente'], { k: ['Robusto'], n: 'tatuagem', s: [pt('Lista de personagens de Les Schtroumpfs')] }],
  ['medio', 'No desenho dos Smurfs, quem criou a Smurfette com um feitiço?', 'Gargamel', ['Papai Smurf', 'Vovô Smurf', 'Mago Merlin'], { k: ['Gargamel'], n: 'Smurfette' }],
]);

B('Pantera Cor-de-Rosa', 'Desenhos clássicos', [pt('Pantera Cor-de-Rosa'), en('Pink Panther (character)'), en('The Pink Panther Theme')], [
  ['facil', 'Como a Pantera Cor-de-Rosa se comunica nos desenhos clássicos?', 'Sem falar, só com gestos', ['Cantando ópera', 'Com voz fininha', 'Assobiando'], { k: ['mute|silent|mudo|muda|nunca fala|não fala|pantomime'] }],
  ['medio', 'Qual instrumento conduz a melodia do famoso tema da Pantera Cor-de-Rosa?', 'Saxofone', ['Violino', 'Trompete', 'Flauta'], { k: ['saxophone|saxofone|sax'], mu: 1 }],
  ['dificil', 'No primeiro desenho da Pantera Cor-de-Rosa, ela briga com um pintor que quer pintar uma casa de qual cor?', 'Azul', ['Verde', 'Amarelo', 'Branco'], { k: ['blue'], s: [en('The Pink Phink')] }],
]);

B('Zé Colmeia', 'Desenhos clássicos', [pt('Zé Colmeia'), en('Yogi Bear'), en('The Yogi Bear Show')], [
  ['facil', 'O que o Zé Colmeia usa na cabeça?', 'Um chapéu', ['Um boné', 'Uma coroa', 'Um gorro'], { k: ['hat|chapéu'] }],
  ['medio', 'Qual é o nome do guarda-florestal que vive atrás do Zé Colmeia?', 'Guarda Smith', ['Guarda Jones', 'Guarda Brown', 'Guarda Wilson'], { k: ['Smith'] }],
  ['medio', 'Como o Zé Colmeia costuma se gabar de si mesmo?', 'Diz que é mais esperto que a maioria dos ursos', ['Diz que é mais forte que um leão', 'Diz que é mais rápido que um coelho', 'Diz que é mais bonito que um pavão'], { k: ['mais esperto do que a maioria dos ursos'] }],
  ['dificil', 'Qual é o nome da ursa namorada do Zé Colmeia?', 'Cindy', ['Mimi', 'Teca', 'Bela'], { k: ['Cindy'] }],
]);

B('Popeye', 'Desenhos clássicos', [pt('Popeye'), en('Popeye'), en('List of Popeye characters')], [
  ['facil', 'O que o Popeye come para ficar fortíssimo?', 'Espinafre', ['Alface', 'Brócolis', 'Couve'], { k: ['espinafre|spinach'] }],
  ['facil', 'Qual é a profissão do Popeye?', 'Marinheiro', ['Pescador', 'Pirata', 'Carpinteiro'], { k: ['marinheiro|sailor'] }],
  ['facil', 'Qual grandalhão barbudo vive disputando a Olívia Palito com o Popeye?', 'Brutus', ['Bafo', 'Bafão', 'Tonhão'], { k: ['Brutus'] }],
  ['medio', 'Qual amigo do Popeye é louco por hambúrguer e vive pedindo para pagar depois?', 'Dudu', ['Zezé', 'Tonico', 'Juca'], { k: ['Dudu|Wimpy'] }],
  ['medio', 'Como se chama o bebê que vive com o Popeye?', 'Gugu', ['Bebezinho', 'Nenê', 'Pimpolho'], { k: ['Gugu|Swee\'Pea|Swee\'pea'] }],
  ['medio', 'Que desenho o Popeye tem tatuado nos antebraços?', 'Âncoras', ['Corações', 'Caveiras', 'Estrelas'], { k: ['anchor|âncora'] }],
  ['dificil', 'Qual bichinho mágico, que adivinha o futuro, vive na turma do Popeye?', 'Eugênio, o Jeep', ['Pipoca, o Gnomo', 'Tobias, o Duende', 'Fofinho, o Gênio'], { k: ['Eugene the Jeep|Eugênio'] }],
]);

B('Tartarugas Ninja', 'Desenhos clássicos', [pt('Tartarugas Ninja'), pt('Teenage Mutant Ninja Turtles (série de 1987)'), en('Teenage Mutant Ninja Turtles (1987 TV series)'), en('Teenage Mutant Ninja Turtles')], [
  ['facil', 'Qual é a comida favorita das Tartarugas Ninja?', 'Pizza', ['Hambúrguer', 'Lasanha', 'Cachorro-quente'], { k: ['pizza'] }],
  ['facil', 'Qual Tartaruga Ninja usa a faixa azul e lidera o grupo?', 'Leonardo', ['Rafael', 'Donatello', 'Michelangelo'], { k: ['Leonardo'], n: 'azul|blue' }],
  ['medio', 'Qual é a arma do Donatello, das Tartarugas Ninja?', 'Bastão bō', ['Nunchaku', 'Katanas', 'Tonfa'], { k: ['bo staff|bō|bastão'], n: 'Donatello' }],
  ['medio', 'Qual é a arma do Rafael, das Tartarugas Ninja?', 'Sai', ['Katanas', 'Nunchaku', 'Kama'], { k: ['sai'], n: 'Raphael|Rafael' }],
  ['facil', 'Onde as Tartarugas Ninja moram?', 'Nos esgotos da cidade', ['Num telhado', 'Numa ilha', 'Num navio'], { k: ['esgoto|sewer'] }],
  ['medio', 'Qual dupla de capangas mutantes, um javali e um rinoceronte, trabalha para o Destruidor?', 'Bebop e Rocksteady', ['Bud e Spencer', 'Rocky e Bullwinkle', 'Ping e Pong'], { k: ['Bebop'] }],
  ['medio', 'Qual vilão alienígena das Tartarugas Ninja é um cérebro cor-de-rosa que vive na barriga de um robô?', 'Krang', ['Zorg', 'Mojo', 'Brainiac'], { k: ['Krang'] }],
  ['dificil', 'Que substância transformou as Tartarugas Ninja em mutantes?', 'Uma gosma mutagênica', ['Um raio cósmico', 'Uma picada de aranha', 'Uma poção de bruxa'], { k: ['mutag|ooze'] }],
]);

B('Os Simpsons', 'Desenhos clássicos', [pt('Os Simpsons'), en('The Simpsons'), en('List of The Simpsons characters'), en('Springfield Elementary School')], [
  ['facil', 'De que cor é a pele dos personagens de Os Simpsons?', 'Amarela', ['Azul', 'Verde', 'Laranja'], { k: ['amarel|yellow'] }],
  ['facil', 'Em que cidade vive a família Simpson?', 'Springfield', ['Shelbyville', 'Riverdale', 'Smallville'], { k: ['Springfield'] }],
  ['facil', 'Em Os Simpsons, qual é o melhor amigo do Bart, que usa óculos?', 'Milhouse', ['Martin', 'Nelson', 'Jimbo'], { k: ['Milhouse'] }],
  ['medio', 'Em Os Simpsons, qual é o nome do diretor da escola de Bart e Lisa?', 'Skinner', ['Chalmers', 'Hoover', 'Largo'], { k: ['Skinner'] }],
  ['medio', 'Em Os Simpsons, como se chama o pai de Homer, que mora num asilo e conta histórias sem fim?', 'Abe', ['Clancy', 'Seymour', 'Cletus'], { k: ['Abraham'], n: 'Homer', s: [en('Grampa Simpson')] }],
  ['dificil', 'Em Os Simpsons, qual cientista maluco de óculos vive inventando engenhocas em Springfield?', 'Professor Frink', ['Dr. Hibbert', 'Dr. Nick', 'Sr. Largo'], { k: ['Frink'], n: 'Scientist', s: [en('List of The Simpsons characters')] }],
]);

B('Animaniacs', 'Desenhos clássicos', [pt('Animaniacs'), en('Animaniacs'), en('List of Animaniacs characters')], [
  ['medio', 'Em Animaniacs, qual é o nome do guarda do estúdio que vive tentando prender os irmãos Warner?', 'Ralph', ['Bob', 'Jack', 'Gus'], { k: ['Ralph'] }],
  ['dificil', 'Em Animaniacs, qual é o nome do psiquiatra que tenta, sem sucesso, tratar os irmãos Warner?', 'Dr. Scratchansniff', ['Dr. Freudzinho', 'Dr. Doidovsky', 'Dr. Calmante'], { k: ['Scratchansniff'] }],
]);

B('Pinky e Cérebro', 'Desenhos clássicos', [pt('Pinky e o Cérebro'), pt('Pinky and the Brain'), en('Pinky and the Brain')], [
  ['facil', 'Onde vivem Pinky e Cérebro?', 'Numa gaiola de laboratório', ['Num bueiro', 'Numa loja de queijos', 'Num circo'], { k: ['laborat'] }],
  ['medio', 'Qual é a palavrinha sem sentido que o Pinky vive soltando?', '"Narf!"', ['"Bazinga!"', '"Shazam!"', '"Eita!"'], { k: ['Narf'] }],
  ['dificil', 'Qual hamster, ex-colega de laboratório, também quer dominar o mundo e é rival do Cérebro?', 'Bola de Neve', ['Pipoca', 'Algodão', 'Fofucho'], { k: ['Snowball|Bola de Neve'] }],
]);

// ===================== ANIME (100) =====================
B('Pokémon', 'Anime de família', [pt('Pokémon (anime)'), pt('Ash Ketchum'), en('Ash Ketchum'), en('Pokémon (TV series)'), en('Misty (Pokémon)'), en('Pikachu')], [
  ['facil', 'Qual é o Pokémon parceiro de Ash, que não gosta de ficar dentro da Pokébola?', 'Pikachu', ['Clefairy', 'Sandshrew', 'Poliwag'], { k: ['Pikachu'] }],
  ['facil', 'De que tipo é o Pikachu?', 'Elétrico', ['Fogo', 'Grama', 'Normal'], { k: ['elétric|Electric'], s: [pt('Pikachu')] }],
  ['facil', 'Qual é o grande sonho de Ash em Pokémon?', 'Ser um Mestre Pokémon', ['Ser professor Pokémon', 'Ser líder de ginásio', 'Ser enfermeiro Pokémon'], { k: ['Mestre Pokémon|Pokémon Master'] }],
  ['facil', 'Qual menina de cabelo laranja, fã de Pokémon de água, viaja com Ash?', 'Misty', ['Dawn', 'Íris', 'Lillie'], { k: ['Misty'] }],
  ['facil', 'Em Pokémon, como se chama a bola usada para capturar e guardar os bichinhos?', 'Pokébola', ['Pokécápsula', 'Pokéchave', 'Pokécaixa'], { k: ['Pokébola|Poké Ball|Pokéball'] }],
  ['facil', 'Como se chama o aparelho que Ash usa para ver informações sobre cada Pokémon?', 'Pokédex', ['Pokéfone', 'Pokérrelógio', 'Pokétablet'], { k: ['Pokédex'] }],
  ['medio', 'Por que Ash começa a jornada com o Pikachu, e não com um dos três Pokémon iniciais?', 'Porque acordou atrasado e os outros já tinham sido levados', ['Porque o Pikachu fugiu com ele', 'Porque ganhou de presente da mãe', 'Porque venceu um sorteio'], { k: ['oversle|atrasad|late'] }],
  ['medio', 'Em qual região começa a jornada de Ash no primeiro desenho de Pokémon?', 'Kanto', ['Johto', 'Hoenn', 'Sinnoh'], { k: ['Kanto'] }],
  ['medio', 'Qual Pokémon pássaro marrom Ash captura logo no começo da jornada, em Kanto?', 'Pidgeotto', ['Spearow', 'Fearow', 'Doduo'], { k: ['Pidgeotto'], n: 'captures', s: [en('Pokémon: Indigo League')] }],
  ['medio', 'Qual Pokémon de Ash é libertado para seguir com um bando e uma companheira da mesma espécie?', 'Butterfree', ['Beedrill', 'Venomoth', 'Scyther'], { k: ['Butterfree'] }],
  ['medio', 'Em Pokémon, qual policial, idêntica em todas as cidades, aparece sempre que há um crime?', 'Oficial Jenny', ['Sargento Rose', 'Capitã Lily', 'Agente Daisy'], { k: ['Jenny'] }],
  ['medio', 'Qual Pokémon cobra é o parceiro de Jessie, da Equipe Rocket, no começo do desenho?', 'Ekans', ['Dratini', 'Rattata', 'Zubat'], { k: ['Ekans'], s: [en('Team Rocket')] }],
  ['medio', 'Qual Pokémon de Misty é uma estrela-do-mar roxa?', 'Starmie', ['Staryu', 'Shellder', 'Corsola'], { k: ['Starmie'] }],
  ['dificil', 'Quantos Tauros Ash capturou de uma só vez na Zona Safári?', '30', ['5', '10', '50'], { k: ['30 Tauros|thirty Tauros|30 de Tauros|trinta Tauros'] }],
  ['dificil', 'Qual Pokémon lutador de Ash, sempre furioso, foi deixado para treinar como boxeador?', 'Primeape', ['Machop', 'Hitmonlee', 'Poliwrath'], { k: ['Primeape'] }],
  ['dificil', 'Qual Pokémon leva Ash e os amigos nas costas pelo mar do Arquipélago Laranja?', 'Lapras', ['Gyarados', 'Dewgong', 'Seel'], { k: ['Lapras'] }],
  ['dificil', 'Qual Pokémon caranguejo Ash captura na praia e depois evolui para Kingler?', 'Krabby', ['Corphish', 'Shellder', 'Horsea'], { k: ['Krabby'], s: [en('Pokémon: Indigo League')] }],
  ['dificil', 'Qual Pokémon ajuda a mãe de Ash nas tarefas de casa?', 'Mr. Mime', ['Chansey', 'Jynx', 'Hitmonchan'], { k: ['Mr. Mime'], n: 'Delia', s: [en('Mr. Mime')] }],
]);

B('Dragon Ball', 'Anime de família', [pt('Dragon Ball'), pt('Goku'), pt('Dragon Ball Z'), en('Goku'), en('List of Dragon Ball characters'), en('Dragon Ball Z')], [
  ['facil', 'Que parte do corpo Goku tinha quando criança e que os humanos não têm?', 'Um rabo de macaco', ['Asas', 'Antenas', 'Chifres'], { k: ['rabo|cauda|tail'] }],
  ['facil', 'De que cor fica o cabelo de Goku quando ele vira Super Saiyajin?', 'Dourado', ['Vermelho', 'Prateado', 'Verde'], { k: ['blonde hair'], s: [en('Dragon Ball')] }],
  ['facil', 'Qual é o melhor amigo de Goku, careca e com pontinhos na testa?', 'Kuririn', ['Yamcha', 'Tenshinhan', 'Chaoz'], { k: ['Kuririn|Krillin'] }],
  ['facil', 'Qual garota inventora de cabelo azul leva Goku a procurar as Esferas do Dragão?', 'Bulma', ['Chi-Chi', 'Lunch', 'Videl'], { k: ['Bulma'] }],
  ['facil', 'Em que Goku se transforma quando olha para a lua cheia ainda tendo rabo?', 'Num macaco gigante', ['Num dragão', 'Num lobo', 'Num gorila de pedra'], { k: ['Oozaru|Ōzaru|macaco gigante|giant ape|Great Ape'] }],
  ['facil', 'Qual velho mestre de óculos escuros, que mora numa casinha numa ilha, treina Goku e Kuririn?', 'Mestre Kame', ['Senhor Kaio', 'Mestre Karin', 'Mestre Tsuru'], { k: ['Kame|Roshi'] }],
  ['facil', 'Qual vilão de corpo branco e roxo destruiu o planeta dos Saiyajins?', 'Freeza', ['Cell', 'Cooler', 'Raditz'], { k: ['Freeza|Frieza'] }],
  ['medio', 'Em Dragon Ball, como se chama o segundo filho de Goku?', 'Goten', ['Trunks', 'Pan', 'Uub'], { k: ['Goten'], s: [pt('Goku')] }],
  ['facil', 'Qual guerreiro verde, vindo de Namekusei, vira mestre de Gohan?', 'Piccolo', ['Dende', 'Nail', 'Kami-Sama'], { k: ['Piccolo'] }],
  ['medio', 'Qual técnica Goku forma erguendo as mãos e juntando a energia de todos os seres vivos?', 'Genki Dama', ['Kienzan', 'Final Flash', 'Masenko'], { k: ['Genki Dama|Spirit Bomb'] }],
  ['medio', 'Em Dragon Ball, qual grão mágico cura todos os ferimentos na hora?', 'Semente dos Deuses', ['Feijão Saiyajin', 'Pílula de Namekusei', 'Arroz Sagrado'], { k: ['Semente dos Deuses|Senzu'] }],
  ['medio', 'Qual técnica, ensinada pelo Senhor Kaio, multiplica a força de Goku e o deixa envolto em vermelho?', 'Kaioken', ['Kienzan', 'Taiyoken', 'Masenko'], { k: ['Kaioken|Kaio-ken'] }],
  ['medio', 'A música "Cha-La Head-Cha-La" é a abertura de qual anime?', 'Dragon Ball Z', ['Yu Yu Hakusho', 'Shurato', 'Zatch Bell'], { k: ['Cha-La Head-Cha-La|Cha-La-Head-Cha-La'], s: [en('Cha-La Head-Cha-La')], mu: 1 }],
  ['dificil', 'A música "Dan Dan Kokoro Hikareteku" é a abertura de qual anime?', 'Dragon Ball GT', ['Yu Yu Hakusho', 'Rurouni Kenshin', 'Zatch Bell'], { k: ['Dan Dan'], s: [pt('Dragon Ball GT'), en('Dragon Ball GT')], mu: 1 }],
  ['dificil', 'Qual técnica de Goku permite surgir em qualquer lugar num piscar de olhos, com dois dedos na testa?', 'Teletransporte', ['Super velocidade', 'Imagem residual', 'Voo Bukujutsu'], { k: ['Teletransporte|Instant Transmission|Transmissão Instantânea'] }],
  ['dificil', 'Quais androides o vilão Cell absorve para chegar à forma perfeita?', 'Androides 17 e 18', ['Androides 16 e 17', 'Androides 19 e 20', 'Androides 18 e 19'], { k: ['17'], n: 'Cell', s: [en('Cell (Dragon Ball)')] }],
  ['dificil', 'Em Dragon Ball, como se chama o grande torneio de artes marciais em que Goku luta desde criança?', 'Tenkaichi Budokai', ['Torneio do Poder', 'Copa Saiyajin', 'Jogos de Cell'], { k: ['Tenkaichi Bud'], s: [pt('Dragon Ball')] }],
  ['medio', 'Em Dragon Ball, qual é o nome do pai de Goku?', 'Bardock', ['Raditz', 'Nappa', 'Paragus'], { k: ['Bardock'] }],
]);

B('Os Cavaleiros do Zodíaco', 'Anime de família', [pt('Os Cavaleiros do Zodíaco'), pt('Saint Seiya'), en('Saint Seiya'), en('List of Saint Seiya characters'), en('Pegasus Seiya')], [
  ['facil', 'Em Os Cavaleiros do Zodíaco, qual cavaleiro de bronze veste a armadura de Pégaso?', 'Seiya', ['Shiryu', 'Hyoga', 'Jabu'], { k: ['Seiya'], n: 'Pégaso|Pegasus' }],
  ['facil', 'Em Os Cavaleiros do Zodíaco, qual é a constelação da armadura de Shiryu?', 'Dragão', ['Fênix', 'Leão', 'Cisne'], { k: ['Dragão|Dragon'], n: 'Shiryu' }],
  ['facil', 'Em Os Cavaleiros do Zodíaco, qual cavaleiro de bronze luta com correntes?', 'Shun', ['Hyoga', 'Jabu', 'Nachi'], { k: ['Shun'], n: 'corrente|chain' }],
  ['facil', 'Qual é o golpe mais famoso de Seiya, em Os Cavaleiros do Zodíaco?', 'Meteoro de Pégaso', ['Pó de Diamante', 'Ave Fênix', 'Trovão Atômico'], { k: ['Meteoro de Pégaso|Pegasus Meteor'] }],
  ['medio', 'Em Os Cavaleiros do Zodíaco, qual é o nome de Atena na Terra, a menina criada pelo avô milionário?', 'Saori Kido', ['Shunrei', 'June', 'Miho'], { k: ['Saori'] }],
  ['medio', 'Em Os Cavaleiros do Zodíaco, qual cavaleiro de ouro, nascido no Brasil, guarda a Casa de Touro?', 'Aldebaran', ['Afrodite', 'Kanon', 'Aiolos'], { k: ['Aldebaran'] }],
  ['medio', 'Em Os Cavaleiros do Zodíaco, quantas Casas os cavaleiros de bronze precisam atravessar no Santuário?', 'Doze', ['Sete', 'Dez', 'Oito'], { k: ['12 casas|doze casas|12 Casas|twelve houses|12 houses|Twelve Temples|12 Temples|doze templos'] }],
  ['medio', 'A música "Pegasus Fantasy" é a abertura de qual anime?', 'Os Cavaleiros do Zodíaco', ['Yu Yu Hakusho', 'Shurato', 'Samurai Warriors'], { k: ['Pegasus Fantasy'], mu: 1 }],
  ['dificil', 'Em Os Cavaleiros do Zodíaco, qual cavaleiro de ouro de Áries conserta as armaduras de bronze?', 'Mu', ['Afrodite', 'Aiolos', 'Máscara da Morte'], { k: ['Mu'], n: 'Áries|Aries' }],
  ['dificil', 'Qual é o golpe mais famoso de Shiryu, em Os Cavaleiros do Zodíaco?', 'Cólera do Dragão', ['Pó de Diamante', 'Corrente de Andrômeda', 'Ave Fênix'], { k: ['Cólera do Dragão|Rozan Shō Ryū Ha|Rising Dragon'] }],
  ['dificil', 'Em Os Cavaleiros do Zodíaco, qual cavaleiro de ouro guarda a Casa de Leão?', 'Aioria', ['Afrodite', 'Kanon', 'Aiolos'], { k: ['Aioria'], n: 'Leão' }],
  ['dificil', 'Em Os Cavaleiros do Zodíaco, qual deus dos mares os cavaleiros de bronze enfrentam depois da saga de Asgard?', 'Poseidon', ['Hades', 'Ares', 'Zeus'], { k: ['Poseidon'] }],
]);

B('Naruto', 'Anime de família', [pt('Naruto'), pt('Naruto Uzumaki'), en('Naruto Uzumaki'), en('Naruto'), en('List of Naruto characters')], [
  ['facil', 'Qual é o grande sonho de Naruto?', 'Virar Hokage', ['Virar Kazekage', 'Abrir uma loja de lámen', 'Ser professor da Academia'], { k: ['Hokage'] }],
  ['facil', 'Qual é a cor que domina a roupa de Naruto?', 'Laranja', ['Azul', 'Verde', 'Vermelho'], { k: ['laranja|orange'] }],
  ['facil', 'Qual colega de time de Naruto, do clã Uchiha, vira seu grande rival?', 'Sasuke', ['Neji', 'Shikamaru', 'Rock Lee'], { k: ['Sasuke'], n: 'rival' }],
  ['facil', 'Em Naruto, qual sensei do Time 7 cobre o rosto com uma máscara e vive lendo um livrinho?', 'Kakashi', ['Iruka', 'Asuma', 'Gai'], { k: ['Kakashi'] }],
  ['medio', 'Em Naruto, qual técnica do protagonista é uma esfera de energia girando na palma da mão?', 'Rasengan', ['Amaterasu', 'Shinra Tensei', 'Gatsuga'], { k: ['Rasengan'] }],
  ['medio', 'Em Naruto, qual técnica de Sasuke junta raios na mão e faz um barulho de muitos pássaros?', 'Chidori', ['Gatsuga', 'Hakkeshou', 'Kamui'], { k: ['Chidori'] }],
  ['facil', 'Em Naruto, qual menina tímida do clã Hyuga é apaixonada pelo protagonista?', 'Hinata', ['Sakura', 'Ino', 'Tenten'], { k: ['Hinata'] }],
  ['medio', 'A música "Blue Bird" é a abertura de qual anime?', 'Naruto Shippuden', ['Bleach', 'Fairy Tail', 'Hunter x Hunter'], { k: ['Blue Bird'], s: [pt('Naruto Shippuden'), en('Blue Bird (Ikimonogakari song)')], mu: 1 }],
  ['dificil', 'Em Naruto, qual ninja lendário, padrinho do protagonista, o ensina a invocar sapos?', 'Jiraiya', ['Orochimaru', 'Iruka', 'Asuma'], { k: ['Jiraiya'], n: 'sapos' }],
  ['medio', 'Em Naruto, qual organização de ninjas de capa preta com nuvens vermelhas caça os jinchuriki?', 'Akatsuki', ['Anbu', 'Raiz', 'Sete Espadachins'], { k: ['Akatsuki'] }],
]);

B('Sailor Moon', 'Anime de família', [pt('Sailor Moon'), en('Sailor Moon (TV series)'), en('List of Sailor Moon characters'), en('Usagi Tsukino')], [
  ['facil', 'Qual é o nome da gata preta, com uma lua na testa, que acompanha a Sailor Moon?', 'Luna', ['Diana', 'Mia', 'Kitty'], { k: ['Luna'], n: 'gata|cat' }],
  ['facil', 'Como se chama a Sailor Moon na dublagem brasileira, quando não está transformada?', 'Serena', ['Amy', 'Rei', 'Lita'], { k: ['Serena Tsukino'], s: [pt('Sailor Moon (personagem)')] }],
  ['medio', 'Em Sailor Moon, qual sailor tem poderes de fogo e trabalha num templo?', 'Sailor Marte', ['Sailor Vênus', 'Sailor Júpiter', 'Sailor Plutão'], { k: ['Mars|Marte'], n: 'fogo|fire|templo|shrine' }],
  ['medio', 'Em Sailor Moon, qual sailor é a mais estudiosa do grupo e usa poderes de água e gelo?', 'Sailor Mercúrio', ['Sailor Vênus', 'Sailor Júpiter', 'Sailor Netuno'], { k: ['Mercúrio|Mercury'] }],
  ['facil', 'Qual herói misterioso, de cartola e capa, sempre aparece para ajudar a Sailor Moon?', 'Tuxedo Mask', ['Zorro', 'Capitão Lua', 'Cavaleiro da Lua'], { k: ['Tuxedo Mask'] }],
  ['medio', 'Em Sailor Moon, qual gato branco acompanha a Sailor Vênus?', 'Artemis', ['Apolo', 'Zeus', 'Hermes'], { k: ['Artemis'] }],
  ['dificil', 'Qual rainha comanda o Reino das Trevas na primeira temporada de Sailor Moon?', 'Rainha Beryl', ['Rainha Nehelenia', 'Rainha Serenity', 'Rainha Kaguya'], { k: ['Beryl'] }],
  ['dificil', 'A música "Moonlight Densetsu" é a abertura de qual anime?', 'Sailor Moon', ['Sakura Card Captors', 'Guerreiras Mágicas de Rayearth', 'Pretty Cure'], { k: ['Moonlight Densetsu'], s: [en('Moonlight Densetsu')], mu: 1 }],
]);

B('Digimon', 'Anime de família', [pt('Digimon Adventure'), pt('Digimon'), en('Digimon Adventure'), en('List of Digimon Adventure characters')], [
  ['facil', 'Como se chama o mundo para onde as crianças de Digimon são levadas?', 'Digimundo', ['Terra dos Monstros', 'Reino Virtual', 'Ciberilha'], { k: ['Digimundo|Digital World|Mundo Digital'] }],
  ['medio', 'Em Digimon, qual Digimon, um lobinho com chifre, é parceiro de Matt?', 'Gabumon', ['Gomamon', 'Biyomon', 'Elecmon'], { k: ['Gabumon'] }],
  ['facil', 'Em qual Digimon o Agumon se transforma na primeira digievolução?', 'Greymon', ['Garurumon', 'Birdramon', 'Kabuterimon'], { k: ['Greymon'] }],
  ['medio', 'Em Digimon, qual aparelho as crianças usam para que seus parceiros digievoluam?', 'Digivice', ['Digifone', 'Digicartão', 'Digirrelógio'], { k: ['Digivice'] }],
  ['medio', 'A música "Butter-Fly" é a abertura de qual anime?', 'Digimon Adventure', ['Medabots', 'Monster Rancher', 'Zatch Bell'], { k: ['Butter-Fly|Butterfly'], mu: 1 }],
  ['medio', 'Em Digimon, qual Digimon com jeito de planta é a parceira de Mimi?', 'Palmon', ['Floramon', 'Mushroomon', 'Gomamon'], { k: ['Palmon'], n: 'Mimi', s: [en('List of Digimon Adventure characters')] }],
  ['dificil', 'Em Digimon, qual Digimon com jeito de joaninha é o parceiro de Izzy?', 'Tentomon', ['Kunemon', 'Gomamon', 'Elecmon'], { k: ['Tentomon'], n: 'Izzy', s: [en('List of Digimon Adventure characters')] }],
  ['dificil', 'Em Digimon, qual Digimon parceiro de T.K. é um bichinho laranja que voa batendo as orelhas?', 'Patamon', ['Gomamon', 'Elecmon', 'Biyomon'], { k: ['Patamon'] }],
  ['medio', 'Em Digimon, qual Digimon felina branca é a parceira de Kari?', 'Gatomon', ['Biyomon', 'Renamon', 'Lopmon'], { k: ['Gatomon|Tailmon'] }],
  ['dificil', 'Qual momento do anime Digimon costuma ser embalado pela música "Brave Heart"?', 'As digievoluções', ['A volta para casa', 'Os encerramentos', 'As cenas de despedida'], { k: ['Brave Heart'], s: [en('Brave Heart (Ayumi Miyazaki song)')], mu: 1 }],
]);

B('Yu-Gi-Oh!', 'Anime de família', [pt('Yu-Gi-Oh!'), pt('Yu-Gi-Oh! (anime)'), en('Yu-Gi-Oh! Duel Monsters'), en('List of Yu-Gi-Oh! characters')], [
  ['facil', 'Qual é o monstro favorito de Yugi, um feiticeiro de roupa roxa?', 'Mago Negro', ['Mago do Tempo', 'Kuriboh', 'Caveira Invocada'], { k: ['Mago Negro|Dark Magician'] }],
  ['facil', 'Em Yu-Gi-Oh!, qual é o dragão favorito de Seto Kaiba?', 'Dragão Branco de Olhos Azuis', ['Dragão Alado de Rá', 'Slifer, o Dragão Celeste', 'Dragão de Cristal'], { k: ['Dragão Branco de Olhos Azuis|Blue-Eyes White Dragon|Blue-Eyes'] }],
  ['medio', 'Em Yu-Gi-Oh!, qual rival milionário de Yugi é dono de uma grande empresa?', 'Seto Kaiba', ['Bandit Keith', 'Rex Raptor', 'Weevil Underwood'], { k: ['Kaiba'] }],
  ['medio', 'Em Yu-Gi-Oh!, qual é o melhor amigo loiro de Yugi?', 'Joey', ['Tristan', 'Mokuba', 'Bakura'], { k: ['Joey'] }],
  ['dificil', 'Em Yu-Gi-Oh!, qual carta de dragão é a mais famosa de Joey?', 'Dragão Negro de Olhos Vermelhos', ['Dragão Negro da Meia-Noite', 'Dragão Alado de Rá', 'Dragão de Cristal'], { k: ['Olhos Vermelhos|Red-Eyes'] }],
  ['medio', 'Em Yu-Gi-Oh!, qual monstro dividido em cinco cartas dá a vitória a quem juntar todas na mão?', 'Exódia', ['Obelisco', 'Slifer', 'Rá'], { k: ['Exodia|Exódia'] }],
]);

B('Beyblade', 'Anime de família', [pt('Beyblade'), pt('Beyblade (anime)'), en('Beyblade (TV series)'), en('List of Beyblade characters')], [
  ['medio', 'Em Beyblade, qual é o nome da fera-bit dragão da beyblade de Tyson?', 'Dragoon', ['Draciel', 'Wolborg', 'Galeon'], { k: ['Dragoon'] }],
  ['medio', 'Em Beyblade, qual é o nome da equipe de Tyson?', 'Bladebreakers', ['Demolition Boys', 'White Tigers', 'All Starz'], { k: ['Bladebreakers|BladeBreakers|Blade Breakers'] }],
  ['dificil', 'Em Beyblade, qual fera-bit em forma de fênix pertence ao Kai?', 'Dranzer', ['Draciel', 'Wolborg', 'Galeon'], { k: ['Dranzer'] }],
  ['dificil', 'Em Beyblade, qual fera-bit em forma de tigre branco pertence ao Ray?', 'Driger', ['Draciel', 'Wolborg', 'Galux'], { k: ['Driger'] }],
]);

B('Super Campeões', 'Anime de família', [pt('Super Campeões'), pt('Captain Tsubasa'), en('Captain Tsubasa'), en('List of Captain Tsubasa characters')], [
  ['facil', 'Em Super Campeões, qual goleiro, sempre de boné, é amigo e rival de Oliver Tsubasa?', 'Benji', ['Bruce', 'Patrick', 'Danny'], { k: ['Benji'], n: 'guarda-redes|goleiro|goalkeeper' }],
  ['medio', 'Em Super Campeões, qual é o lema de Oliver Tsubasa sobre a bola?', '"A bola é minha amiga"', ['"A bola é minha vida"', '"Quem não chuta não marca"', '"O gol é meu destino"'], { k: ['bola é minha amiga|ball is my friend|ball is (my) friend|Ball is my friend|ball is my best friend'] }],
  ['medio', 'Em Super Campeões, em qual time escolar Oliver Tsubasa joga no começo da história?', 'Nankatsu', ['Toho', 'Musashi', 'Furano'], { k: ['Nankatsu'] }],
  ['dificil', 'Em Super Campeões, qual jogador brasileiro vira mentor de Oliver Tsubasa?', 'Roberto Hongo', ['Carlos Santana', 'Natureza', 'Pepe Gomes'], { k: ['Roberto'], n: 'Hongo|Brasil|Brazil' }],
]);

B('Meu Amigo Totoro', 'Anime de família', [pt('Meu Amigo Totoro'), pt('Tonari no Totoro'), en('My Neighbor Totoro')], [
  ['facil', 'Em Meu Amigo Totoro, o que Satsuki empresta ao Totoro no ponto de ônibus, debaixo de chuva?', 'Um guarda-chuva', ['Uma capa de chuva', 'Uma toalha', 'Um lenço'], { k: ['umbrella|guarda-chuva'] }],
  ['facil', 'Como se chamam as duas irmãs de Meu Amigo Totoro?', 'Satsuki e Mei', ['Chihiro e Lin', 'Kiki e Ursula', 'Sophie e Lettie'], { k: ['Satsuki', 'Mei'] }],
  ['medio', 'Por que as irmãs de Meu Amigo Totoro se mudam para o campo com o pai?', 'Para ficar perto da mãe, que está no hospital', ['Porque o pai virou fazendeiro', 'Para fugir de uma enchente', 'Para morar com a avó'], { k: ['hospital'] }],
  ['dificil', 'Em Meu Amigo Totoro, que presente o Totoro dá às meninas em troca do guarda-chuva?', 'Um pacotinho de sementes', ['Um apito mágico', 'Uma bolota de ouro', 'Um pião'], { k: ['seeds|sementes|nuts'] }],
  ['dificil', 'A canção "Sanpo" ("Passeio") faz parte da trilha de qual filme de animação japonês?', 'Meu Amigo Totoro', ['O Serviço de Entregas da Kiki', 'Ponyo', 'O Castelo no Céu'], { k: ['Sanpo'], n: 'Totoro', s: [en('Azumi Inoue')], mu: 1 }],
]);

B('A Viagem de Chihiro', 'Anime de família', [pt('A Viagem de Chihiro'), en('Spirited Away')], [
  ['facil', 'Em A Viagem de Chihiro, em que os pais de Chihiro se transformam?', 'Porcos', ['Sapos', 'Pássaros', 'Pedras'], { k: ['porcos|pigs'] }],
  ['medio', 'Em A Viagem de Chihiro, qual feiticeira de cabeça enorme é dona da casa de banhos?', 'Yubaba', ['Zeniba', 'Ursula', 'Madame Suliman'], { k: ['Yubaba'] }],
  ['facil', 'Em A Viagem de Chihiro, qual garoto misterioso ajuda a protagonista e, na verdade, é um dragão?', 'Haku', ['Kamaji', 'Bo', 'Ashitaka'], { k: ['Haku'] }],
  ['dificil', 'Em A Viagem de Chihiro, qual novo nome Yubaba dá à menina quando ela começa a trabalhar?', 'Sen', ['Lin', 'Mei', 'Kiki'], { k: ['Sen'] }],
  ['dificil', 'A música "Itsumo Nando Demo" encerra qual filme de animação japonês?', 'A Viagem de Chihiro', ['O Serviço de Entregas da Kiki', 'Ponyo', 'O Castelo no Céu'], { k: ['Itsumo Nando Demo|Always With Me'], mu: 1 }],
]);

// ===================== BRASIL (70) =====================
B('Turma da Mônica', 'Desenhos do Brasil', [pt('Turma da Mônica'), tm('Mônica'), tm('Cebolinha'), tm('Cascão')], [
  ['facil', 'Na Turma da Mônica, quem é a melhor amiga da Mônica?', 'Magali', ['Aninha', 'Denise', 'Carminha Frufru'], { k: ['melhor amiga, Magali|melhor amiga é Magali'], s: [tm('Mônica')] }],
  ['facil', 'Na Turma da Mônica, de que cor é a camisa do Cebolinha?', 'Verde', ['Azul', 'Vermelha', 'Amarela'], { k: ['verde'], s: [tm('Cebolinha')] }],
  ['facil', 'Na Turma da Mônica, quem é o melhor amigo do Cebolinha e parceiro dos planos contra a Mônica?', 'Cascão', ['Titi', 'Jeremias', 'Do Contra'], { k: ['Cascão'], n: 'amigo' }],
  ['facil', 'Qual é a característica da Mônica que faz os meninos fugirem dela?', 'A força enorme', ['A voz alta', 'O mau cheiro', 'A mania de mentir'], { k: ['força bruta'], s: [tm('Mônica')] }],
  ['medio', 'Como se chama o bairro onde vive a Turma da Mônica?', 'Bairro do Limoeiro', ['Jardim das Laranjeiras', 'Vila Esperança', 'Bairro do Pomar'], { k: ['Limoeiro'] }],
  ['medio', 'Na Turma da Mônica, como se chama o pai do Cebolinha?', 'Seu Cebola', ['Seu Juca', 'Seu Antenor', 'Seu Cebolão'], { k: ['Seu Cebola'], n: 'pai', s: [tm('Cebolinha')] }],
  ['facil', 'Na Turma da Mônica, qual é o nome do cachorro da Mônica?', 'Monicão', ['Monicudo', 'Mônico', 'Sansão'], { k: ['Monicão'], s: [tm('Monicão')] }],
  ['medio', 'Na Turma da Mônica Jovem, como o Cebolinha prefere ser chamado?', 'Cebola', ['Cebolão', 'Ceb', 'Cebolinho'], { k: ['Cebola'], s: [pt('Turma da Mônica Jovem'), tm('Cebola')] }],
  ['medio', 'Como se chama a turma de bichos da floresta que tem o elefante Jotalhão?', 'Turma da Mata', ['Turma da Selva', 'Turma do Bosque', 'Turma da Floresta'], { k: ['Turma da Mata'], s: [tm('Jotalhão'), tm('Turma da Mata')] }],
  ['medio', 'Na Turma da Mônica, qual menina adora pintar e desenhar?', 'Marina', ['Denise', 'Aninha', 'Tati'], { k: ['desenhista'], s: [tm('Marina')] }],
  ['dificil', 'Como se chama a galinha de estimação do Chico Bento?', 'Giselda', ['Cocota', 'Pintadinha', 'Carijó'], { k: ['Giselda'], s: [tm('Giselda'), tm('Chico Bento')] }],
  ['dificil', 'Como se chama o porquinho de estimação do Chico Bento?', 'Torresmo', ['Toicinho', 'Bacon', 'Leitão'], { k: ['Torresmo'], s: [tm('Torresmo'), tm('Chico Bento')] }],
  ['dificil', 'Na Turma do Penadinho, qual caveira é uma das melhores amigas do fantasminha?', 'Cranicola', ['Ossinho', 'Esqueletinho', 'Caveirão'], { k: ['Cranicola'], s: [tm('Cranicola'), tm('Penadinho')] }],
  ['dificil', 'Qual lobisomem faz parte da turma do Penadinho?', 'Lobi', ['Lupércio', 'Uivão', 'Lobão'], { k: ['Lobi'], s: [tm('Lobi'), tm('Penadinho')] }],
  ['dificil', 'Qual leão é o rei da Turma da Mata?', 'Rei Leonino', ['Rei Juba', 'Rei Leonardo', 'Rei Leopoldo'], { k: ['Leonino'], s: [tm('Rei Leonino'), tm('Turma da Mata')] }],
  ['dificil', 'Qual moça das cavernas vive correndo atrás do Piteco querendo casar com ele?', 'Thuga', ['Ugha', 'Pedrina', 'Cacá'], { k: ['Thuga'], s: [tm('Thuga'), tm('Piteco')] }],
  ['dificil', 'Qual é o nome da mãe do Chico Bento?', 'Dona Cotinha', ['Dona Florzinha', 'Dona Lurdinha', 'Dona Filó'], { k: ['Cotinha'], s: [tm('Dona Cotinha'), tm('Chico Bento')] }],
]);

B('Sítio do Picapau Amarelo', 'Desenhos do Brasil', [pt('Sítio do Picapau Amarelo (série animada)'), pt('Sítio do Picapau Amarelo'), pt('Emília (personagem)'), pt('Personagens do Sítio do Picapau Amarelo')], [
  ['facil', 'No Sítio do Picapau Amarelo, qual figura do folclore tem uma perna só e usa gorro vermelho?', 'Saci', ['Curupira', 'Boto', 'Mula sem cabeça'], { k: ['Saci'] }],
  ['facil', 'No Sítio do Picapau Amarelo, quem é a dona da boneca Emília?', 'Narizinho', ['Dona Benta', 'Tia Nastácia', 'Dona Carochinha'], { k: ['Narizinho'], n: 'Emília' }],
  ['medio', 'No Sítio do Picapau Amarelo, por falar sem parar, a Emília ganhou qual apelido?', 'Torneirinha de asneiras', ['Matraca de pano', 'Rádio quebrado', 'Boca de trombone'], { k: ['torneirinha de asneiras'] }],
  ['medio', 'No Sítio do Picapau Amarelo, qual é o nome do burro falante e sábio?', 'Conselheiro', ['Sabichão', 'Doutor', 'Professor'], { k: ['Conselheiro'] }],
  ['facil', 'No Sítio do Picapau Amarelo, qual pó mágico os personagens usam para viajar?', 'Pó de pirlimpimpim', ['Pó de arco-íris', 'Pó de estrela', 'Pó de lua'], { k: ['pirlimpimpim'] }],
  ['medio', 'No Sítio do Picapau Amarelo, qual empregado conhece todas as histórias do Saci e do folclore?', 'Tio Barnabé', ['Seu Elias', 'Seu Juca', 'Tio Chico'], { k: ['Barnabé'] }],
  ['dificil', 'No Sítio do Picapau Amarelo, qual é o nome do reino no fundo do ribeirão que Narizinho visita?', 'Reino das Águas Claras', ['Reino do Mar Azul', 'Reino de Atlântida', 'Reino das Conchas'], { k: ['Águas Claras'] }],
  ['dificil', 'No Sítio do Picapau Amarelo, qual peixe é o príncipe do reino que Narizinho visita no ribeirão?', 'Príncipe Escamado', ['Príncipe Barbatana', 'Príncipe Coral', 'Príncipe Netuno'], { k: ['Escamado'] }],
  ['dificil', 'No Sítio do Picapau Amarelo, o que fez a boneca Emília começar a falar?', 'Uma pílula do Doutor Caramujo', ['Um feitiço da Cuca', 'Um raio de lua cheia', 'Um gole de água encantada'], { k: ['Caramujo'], n: 'pílula' }],
]);

B('O Show da Luna', 'Desenhos do Brasil', [pt('O Show da Luna')], [
  ['facil', 'Em O Show da Luna, qual assunto a Luna mais ama?', 'Ciências', ['Futebol', 'Culinária', 'Moda'], { k: ['ciência'] }],
  ['facil', 'Em O Show da Luna, de que cor é o vestido da Luna?', 'Azul', ['Rosa', 'Vermelho', 'Verde'], { k: ['vestido azul'] }],
  ['medio', 'Em O Show da Luna, quantos anos tem a Luna?', 'Seis', ['Cinco', 'Oito', 'Dez'], { k: ['seis anos'] }],
  ['medio', 'Em O Show da Luna, qual fruta o Júpiter, irmão da Luna, gosta de comer?', 'Maçã', ['Uva', 'Abacaxi', 'Morango'], { k: ['maçã'] }],
  ['medio', 'Em O Show da Luna, qual é o nome da música que toca enquanto a Luna faz seus experimentos?', '"Eu Quero Saber"', ['"Vamos Descobrir"', '"Ciência É Legal"', '"Mistério no Ar"'], { k: ['Eu Quero Saber'], mu: 1 }],
  ['dificil', 'Em O Show da Luna, como se chama o aparelho da Luna que mistura câmera, telescópio e lente de aumento?', 'A-Ha', ['Uau', 'Eureka', 'Olhô'], { k: ['A-Ha'] }],
  ['dificil', 'Em O Show da Luna, onde a Luna e a família foram morar entre a sexta e a sétima temporada?', 'Numa estação espacial', ['Num submarino', 'Numa ilha', 'No Polo Norte'], { k: ['estação espacial'] }],
]);

B('Peixonauta', 'Desenhos do Brasil', [pt('Peixonauta')], [
  ['facil', 'Em Peixonauta, que animal é o Zico, amigo do protagonista?', 'Macaco', ['Sapo', 'Papagaio', 'Tartaruga'], { k: ['macaco'], n: 'Zico' }],
  ['facil', 'Em Peixonauta, qual é a comida predileta do Zico?', 'Banana', ['Manga', 'Goiaba', 'Coco'], { k: ['banana'] }],
  ['medio', 'Em Peixonauta, como se chama a bola mágica e colorida que manda pistas para os heróis?', 'POP', ['BIP', 'ZAP', 'TOP'], { k: ['POP'] }],
  ['medio', 'Em Peixonauta, como se chama a organização secreta da qual o protagonista é agente?', 'O.S.T.R.A.', ['S.U.R.F.', 'M.A.R.É.', 'C.O.R.A.L.'], { k: ['O.S.T.R.A'] }],
  ['dificil', 'Em Peixonauta, como se chama o traje que deixa o protagonista respirar fora d\'água?', 'Blublex', ['Bolhex', 'Aquatrix', 'Escafandrex'], { k: ['Blublex'] }],
  ['dificil', 'Em Peixonauta, como se chama o avô de Marina, que cuida do parque?', 'Dr. Jardim', ['Dr. Floresta', 'Seu Raiz', 'Vô Tronco'], { k: ['Dr. Jardim'] }],
]);

B('Galinha Pintadinha', 'Desenhos do Brasil', [pt('Galinha Pintadinha')], [
  ['facil', 'Qual é o filhote mais famoso da Galinha Pintadinha?', 'Pintinho Amarelinho', ['Patinho Azulzinho', 'Franguinho Pintado', 'Pintinho Pequenino'], { k: ['Pintinho Amarelinho'] }],
  ['facil', 'Como se chama o galo da Galinha Pintadinha?', 'Galo Carijó', ['Galo Garnizé', 'Galo Cantor', 'Galo Cocoricó'], { k: ['Galo Carijó'] }],
  ['facil', 'Qual é o apelido da Galinha Pintadinha?', 'Popó', ['Pipi', 'Cocó', 'Pintada'], { k: ['Popó'] }],
  ['medio', 'Qual destas cantigas antigas ganhou desenho da Galinha Pintadinha logo no primeiro DVD?', '"Escravos de Jó"', ['"Aquarela"', '"Ilariê"', '"Lindo Balão Azul"'], { k: ['Escravos de Jó'], mu: 1 }],
  ['dificil', 'Como são chamadas as irmãs vermelha, verde e roxa da Galinha Pintadinha?', 'As Divas', ['As Penosas', 'As Pintadas', 'As Poderosas'], { k: ['Divas'] }],
  ['dificil', 'De que cor é o Galo Carijó, da Galinha Pintadinha?', 'Roxo', ['Vermelho', 'Laranja', 'Marrom'], { k: ['galo roxo'] }],
]);

B('Irmão do Jorel', 'Desenhos do Brasil', [pt('Irmão do Jorel'), 'irmaodojorel.fandom.com/pt-br|Irmão do Jorel (personagem)'], [
  ['facil', 'No desenho Irmão do Jorel, por que o protagonista é conhecido só como "irmão de alguém"?', 'Porque o irmão mais velho é muito mais popular que ele', ['Porque ele esqueceu o próprio nome', 'Porque o nome dele é segredo de família', 'Porque o irmão gêmeo tem o mesmo nome'], { k: ['popular'] }],
  ['facil', 'Em Irmão do Jorel, como se chamam as duas avós do protagonista?', 'Vovó Gigi e Vovó Juju', ['Vovó Lili e Vovó Lulu', 'Vovó Nina e Vovó Nena', 'Vovó Cacá e Vovó Cocó'], { k: ['Vovó Gigi', 'Vovó Juju'] }],
  ['medio', 'Em Irmão do Jorel, qual é o nome do cachorro da família?', 'Tosh', ['Totó', 'Pipo', 'Thor'], { k: ['Tosh'] }],
  ['medio', 'Em Irmão do Jorel, que doce a Vovó Gigi vive chupando?', 'Pirulito', ['Chiclete', 'Bala de goma', 'Algodão-doce'], { k: ['pirulito'] }],
  ['medio', 'Em Irmão do Jorel, qual menina é a grande paixão do protagonista?', 'Ana Catarina', ['Lara', 'Samantha', 'Débora'], { k: ['Ana Catarina'], s: ['irmaodojorel.fandom.com/pt-br|Ana Catarina'] }],
  ['dificil', 'Em Irmão do Jorel, quais bichos de estimação a Vovó Juju cria?', 'Patos', ['Galinhas', 'Coelhos', 'Gansos'], { k: ['patos'] }],
  ['dificil', 'Em Irmão do Jorel, qual é o ator preferido da Vovó Gigi?', 'Steve Magal', ['Chuck Morris', 'Bruce Bronson', 'Sylvester Magal'], { k: ['Steve Magal'] }],
  ['dificil', 'Em Irmão do Jorel, como se chama o pai do protagonista?', 'Seu Edson', ['Seu Juca', 'Seu Wilson', 'Seu Ademar'], { k: ['Seu Edson'] }],
]);

B('Historietas Assombradas', 'Desenhos do Brasil', [pt('Historietas Assombradas (para Crianças Malcriadas)')], [
  ['facil', 'Em Historietas Assombradas, o que é a avó do Pepe?', 'Uma bruxa', ['Uma vampira', 'Uma fada', 'Uma múmia'], { k: ['bruxa'] }],
  ['medio', 'Em Historietas Assombradas, como se chama o cachorro do Pepe?', 'Ramirez', ['Rodolfo', 'Ringo', 'Rufus'], { k: ['Ramirez'] }],
  ['medio', 'Em Historietas Assombradas, quem é a melhor amiga do Pepe?', 'Marilu', ['Ritinha', 'Lulu', 'Marieta'], { k: ['Marilu'], n: 'melhor amiga' }],
  ['dificil', 'Em Historietas Assombradas, o que os amigos Guto e Gastón são um do outro?', 'Gêmeos siameses', ['Primos de terceiro grau', 'Pai e filho', 'Irmãos adotivos'], { k: ['siameses'] }],
]);

B('Meu AmigãoZão', 'Desenhos do Brasil', [pt('Meu AmigãoZão')], [
  ['facil', 'Em Meu AmigãoZão, que animal é o Golias, o amigão do Yuri?', 'Elefante', ['Hipopótamo', 'Rinoceronte', 'Urso'], { k: ['elefante Golias'] }],
  ['medio', 'Em Meu AmigãoZão, como se chama a girafa amiga da Lili?', 'Nessa', ['Nina', 'Neca', 'Nena'], { k: ['Nessa'] }],
  ['medio', 'Em Meu AmigãoZão, que animal é o Bongo, o amigão do Matt?', 'Canguru', ['Coala', 'Panda', 'Leão'], { k: ['canguru'] }],
  ['dificil', 'Em Meu AmigãoZão, quantos anos têm Yuri, Lili e Matt?', 'Quatro', ['Dois', 'Cinco', 'Sete'], { k: ['quatro anos'] }],
]);

B('Tromba Trem', 'Desenhos do Brasil', [pt('Tromba Trem')], [
  ['facil', 'Em Tromba Trem, que animal é a Duda, amiga do elefante Gajah?', 'Tamanduá', ['Tatu', 'Capivara', 'Onça'], { k: ['tamanduá'] }],
  ['medio', 'Em Tromba Trem, quais insetos são os donos do trem em que a turma viaja?', 'Cupins', ['Formigas', 'Abelhas', 'Besouros'], { k: ['cupins'] }],
  ['medio', 'Em Tromba Trem, o que o elefante Gajah usa sempre na cabeça?', 'Um turbante', ['Uma coroa', 'Um boné', 'Um capacete'], { k: ['turbante'] }],
  ['dificil', 'Em Tromba Trem, o que a turma persegue, achando que é a nave-mãe dos cupins?', 'Um dirigível', ['Um balão de festa', 'Um avião', 'Um foguete'], { k: ['dirigível'] }],
]);

B('O Menino e o Mundo', 'Desenhos do Brasil', [pt('O Menino e o Mundo')], [
  ['facil', 'Em O Menino e o Mundo, de onde o menino sai para procurar o pai?', 'De uma pequena aldeia no interior', ['De um navio no meio do mar', 'De uma cidade gigante', 'De uma estação espacial'], { k: ['pequena aldeia'] }],
  ['facil', 'Em O Menino e o Mundo, quem o menino sai procurando?', 'O pai', ['A mãe', 'O cachorro', 'O avô'], { k: ['procura dele|falta do pai|em busca do pai|busca do pai'] }],
  ['medio', 'Como se chama o menino protagonista de O Menino e o Mundo?', 'Cuca', ['Zeca', 'Tico', 'Juca'], { k: ['Cuca'] }],
  ['medio', 'Em O Menino e o Mundo, por que o pai do menino deixa a aldeia?', 'Para buscar trabalho na cidade grande', ['Para estudar', 'Para servir no exército', 'Para visitar a família'], { k: ['busca de trabalho|procura de trabalho'] }],
  ['dificil', 'Em O Menino e o Mundo, como são as falas dos personagens?', 'Em português de trás para frente', ['Em inglês', 'Só cantadas', 'Em japonês'], { k: ['português invertido'] }],
]);
