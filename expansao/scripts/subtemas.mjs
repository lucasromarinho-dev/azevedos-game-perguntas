#!/usr/bin/env node
// Estima quantas perguntas do banco atual caem em cada subtema, por palavras-chave (sem IA).
// Uma pergunta conta no PRIMEIRO subtema da lista que casar (ordem importa: do mais específico ao mais geral).
// Gera expansao/subtemas.json. Uso: node expansao/scripts/subtemas.mjs [--amostra "Categoria>Subtema"]
import { join } from 'node:path';
import { lerBancoAtual, limpar, gravarJson, RAIZ_EXP } from './lib.mjs';

// Cada subtema: lista de termos (texto limpo, sem acento). Casa se o termo aparece como palavra(s) inteira(s)
// na pergunta + resposta + alternativas. Termo terminado em "*" casa como prefixo.
export const DEF = {
  Geografia: {
    'Capitais estaduais e regiões do Brasil': ['capital do estado', 'nasce em', 'regiao nordeste', 'regiao norte', 'regiao sul', 'regiao sudeste', 'centro oeste', 'distrito federal', 'gentilico'],
    'Cidades e turismo no Brasil': ['em qual estado fica', 'em qual estado ficam', 'qual estado brasileiro', 'cidade brasileira', 'praia*', 'arraial', 'fernando de noronha', 'lencois', 'chapada', 'bonito', 'gramado', 'paraty'],
    'Rios, bacias e hidrografia': ['rio', 'rios', 'bacia', 'cachoeira', 'cataratas', 'lago', 'lagoa', 'represa', 'usina', 'delta', 'foz', 'nascente'],
    'Relevo, montanhas e vulcões': ['monte', 'montanha*', 'cordilheira', 'serra', 'pico', 'vulcao', 'vulcoes', 'planalto', 'planicie', 'deserto', 'cânion', 'canion', 'chapada'],
    'Biomas, clima e vegetação': ['bioma', 'cerrado', 'caatinga', 'pantanal', 'mata atlantica', 'pampa', 'tundra', 'savana', 'taiga', 'clima', 'mangue*', 'floresta'],
    'Oceanos, mares, ilhas e estreitos': ['oceano', 'mar', 'golfo', 'estreito', 'ilha', 'ilhas', 'arquipelago', 'peninsula', 'canal', 'baia'],
    'Capitais do mundo': ['capital da', 'capital do', 'capital de', 'capital oficial', 'sede do governo'],
    'Bandeiras, moedas e idiomas': ['bandeira', 'moeda', 'idioma', 'lingua oficial', 'fala se', 'falado'],
    'Fronteiras, continentes e países': ['fronteira', 'faz fronteira', 'continente', 'sem litoral', 'enclave', 'territorio de', 'pertence a qual', 'maior pais', 'menor pais'],
    'Cidades e monumentos do mundo': ['cidade', 'monumento', 'torre', 'ponte', 'catedral', 'templo', 'palacio', 'muralha', 'apelido'],
    'Coordenadas, fusos e cartografia': ['tropico', 'equador', 'meridiano', 'latitude', 'longitude', 'fuso', 'hemisferio', 'polo', 'circulo polar'],
    'Economia e população': ['produtor', 'produz', 'populacao', 'populoso', 'populosa', 'exportador', 'petroleo', 'minerio'],
  },
  História: {
    'Brasil Colônia': ['capitania*', 'colonia', 'colonial', 'bandeirante*', 'jesuita*', 'cabral', 'descobrimento', 'inconfidencia', 'tiradentes', 'quilombo*', 'zumbi', 'palmares', 'sesmaria*', 'ciclo do ouro', 'pau brasil'],
    'Brasil Império': ['imperio do brasil', 'dom pedro', 'd pedro', 'imperador', 'regencia*', 'farroup*', 'abolicao', 'lei aurea', 'escrav*', 'princesa isabel', 'poder moderador', 'guerra do paraguai', 'dia do fico', 'independencia do brasil'],
    'Brasil República e Era Vargas': ['republica velha', 'getulio', 'vargas', 'estado novo', 'coronelismo', 'tenentismo', 'canudos', 'contestado', 'revolta da vacina', 'revolta da chibata', 'juscelino', 'jk', 'brasilia', 'coluna prestes', 'revolucao de 30', 'constitucionalista'],
    'Ditadura militar e redemocratização': ['ditadura', 'ai 5', 'golpe de 1964', 'militar', 'anistia', 'diretas', 'constituinte', 'redemocrat*'],
    'Antiguidade (Egito, Grécia, Roma)': ['egito', 'egipcio*', 'farao', 'piramide', 'grecia', 'grego*', 'atenas', 'esparta', 'roma', 'romano*', 'cesar', 'imperio romano', 'mesopotamia', 'babilonia', 'persa*', 'fenicio*', 'cartago'],
    'Mitologia': ['mitologia', 'deus', 'deusa', 'deuses', 'olimpo', 'nordica', 'zeus', 'odin', 'heroi grego'],
    'Idade Média e feudalismo': ['medieval', 'idade media', 'feud*', 'cruzada*', 'cavaleiro*', 'templario*', 'vikin*', 'peste negra', 'carlos magno', 'bizantino'],
    'Grandes Navegações e Américas pré-colombianas': ['navegador', 'navegac*', 'colombo', 'vasco da gama', 'magalhaes', 'asteca*', 'inca*', 'maia*', 'conquistador'],
    'Revoluções e Idade Moderna': ['revolucao francesa', 'bastilha', 'jacobino*', 'napoleao', 'iluminismo', 'reforma protestante', 'lutero', 'renascimento', 'absolutismo', 'revolucao industrial', 'independencia dos estados unidos'],
    'Guerras Mundiais': ['primeira guerra', 'segunda guerra', 'guerra mundial', 'nazis*', 'hitler', 'holocausto', 'normandia', 'dia d', 'pearl harbor', 'hiroshima', 'stalingrado', 'eixo', 'aliados'],
    'Guerra Fria e século XX': ['guerra fria', 'uniao sovietica', 'urss', 'muro de berlim', 'cuba', 'cubana', 'vietna', 'coreia', 'corrida espacial', 'otan', 'gorbachev', 'apartheid', 'mandela'],
    'Ásia, África e Oriente Médio': ['japao', 'japones', 'china', 'chines*', 'india', 'gandhi', 'africa', 'africano', 'otomano', 'samurai*', 'xogum*', 'mongol*', 'genghis'],
    'Filosofia e pensadores': ['filosofo*', 'pensador', 'marx', 'iluminista', 'socrates', 'platao', 'aristoteles', 'maquiavel', 'manifesto'],
    'Arte e cultura na história': ['artista', 'pintor', 'pintou', 'pintura*', 'renascentista', 'modernismo', 'semana de arte', 'capela sistina', 'escultor', 'afresco', 'arquitet*'],
    'Colonização e imigração': ['colonia de', 'coloniz*', 'imigrant*', 'imigracao', 'holandes*', 'portugues*'],
    'Personagens e invenções históricas': ['inventou', 'inventor', 'rainha', 'rei', 'presidente', 'lider', 'ativista', 'heroina'],
  },
  Ciências: {
    'Corpo humano e saúde': ['corpo humano', 'nervo', 'utero', 'costela*', 'colesterol', 'neurotransmissor', 'anemia', 'pupila', 'diafragma', 'intestino', 'estomago', 'sangu*', 'hemacia*', 'doencas', 'sintoma*', 'cerebral', 'osso*', 'orgao', 'sangue', 'coracao', 'figado', 'rim', 'rins', 'pulmao', 'cerebro', 'musculo*', 'dente*', 'pele', 'olho', 'vacina*', 'doenca', 'virus', 'bacteria*', 'vitamina*', 'hormonio*', 'celula*', 'medic*', 'saude', 'fobia', 'sono'],
    'Animais e zoologia': ['animal', 'animais', 'ave', 'aves', 'mamifero*', 'reptil', 'peixe*', 'inseto*', 'cobra', 'serpente', 'tubarao', 'baleia', 'passaro*', 'sapo', 'aranha', 'lagarto', 'felino', 'macaco'],
    'Plantas e botânica': ['planta*', 'arvore*', 'flor', 'flores', 'fotossintese', 'folha*', 'fruta*', 'fruto', 'semente*', 'botanic*'],
    'Ecologia e meio ambiente': ['ecolog*', 'cadeia alimentar', 'efeito estufa', 'camada de ozonio', 'aquecimento global', 'poluicao', 'reciclagem', 'mutualismo', 'parasitismo', 'extincao'],
    'Genética e evolução': ['genetic*', 'dna', 'gene*', 'cromossomo*', 'evolucao', 'darwin', 'mendel', 'lamarck', 'selecao natural'],
    'Química e elementos': ['elemento quimico', 'simbolo', 'tabela periodica', 'atomo*', 'molecula*', 'acido', 'gas', 'metal', 'quimic*', 'ph', 'reacao', 'composto'],
    'Física, energia e unidades': ['fisic*', 'energia', 'forca', 'gravidade', 'velocidade', 'luz', 'som', 'eletric*', 'magnet*', 'unidade', 'temperatura', 'pressao', 'newton', 'einstein', 'lei de', 'principio de'],
    'Astronomia e espaço': ['planeta*', 'estrela*', 'sol', 'lua', 'luas', 'galaxia', 'via lactea', 'cometa', 'asteroide', 'telescopio', 'astronauta*', 'nasa', 'orbita', 'buraco negro', 'sistema solar', 'espacial', 'eclipse'],
    'Terra: geologia e clima': ['vulcao', 'terremoto', 'placa*', 'tectonic*', 'rocha*', 'mineral', 'minerio', 'furacao', 'tornado', 'escala', 'atmosfera', 'camada', 'nuvem', 'chuva'],
    'Matemática': ['matematic*', 'numero*', 'poligono', 'lados', 'angulo*', 'triangulo', 'circulo', 'equacao', 'primo', 'pi', 'raiz quadrada', 'teorema'],
    'Dinossauros e pré-história': ['dinossauro*', 'pangeia', 'fossil', 'fosseis', 'jurassico', 'cretaceo', 'mamute'],
    'Instrumentos e medições': ['instrumento', 'mede', 'medir', 'aparelho', 'termometro', 'barometro'],
    'Cientistas e descobertas': ['cientista', 'descobriu', 'descoberta', 'criou', 'pai da', 'pai do'],
  },
  Esportes: {
    'Copa do Mundo': ['copa do mundo', 'copa de', 'mundial de selecoes', 'tetracampe*', 'pentacampe*', 'tricampe*', 'maracanazo'],
    'Seleção brasileira e craques históricos': ['selecao brasileira', 'selecao', 'pele', 'garrincha', 'zico', 'romario', 'ronaldo', 'ronaldinho', 'kaka', 'rivaldo', 'canarinho'],
    'Brasileirão e clubes brasileiros': ['brasileirao', 'campeao brasileiro', 'copa do brasil', 'estadual', 'carioca', 'paulista', 'flamengo', 'corinthians', 'palmeiras', 'sao paulo', 'santos', 'vasco', 'fluminense', 'botafogo', 'gremio', 'internacional', 'cruzeiro', 'atletico', 'bahia', 'vitoria', 'sport', 'clube brasileiro', 'estadio', 'arena'],
    'Libertadores e futebol sul-americano': ['libertadores', 'sul americana', 'recopa', 'boca juniors', 'river plate', 'pen*rol', 'copa america'],
    'Futebol europeu e Champions': ['champions', 'liga dos campeoes', 'premier league', 'la liga', 'serie a', 'bundesliga', 'real madrid', 'barcelona', 'manchester', 'juventus', 'milan', 'bayern', 'liverpool', 'chelsea', 'arsenal', 'psg', 'bola de ouro', 'eurocopa', 'messi', 'cristiano ronaldo'],
    'Basquete e NBA': ['nba', 'wnba', 'mvp', 'draft', 'pivo', 'ala pivo', 'armador', 'warriors', 'novato do ano', 'finais', 'basquete', 'lakers', 'celtics', 'bulls', 'jordan', 'lebron', 'cesta*', 'triplo duplo', 'oscar schmidt'],
    'Fórmula 1 e automobilismo': ['formula 1', 'f1', 'piloto', 'senna', 'piquet', 'fittipaldi', 'barrichello', 'massa', 'schumacher', 'hamilton', 'verstappen', 'gp', 'grande premio', 'autodromo', 'interlagos', 'stock car', 'indy', 'ferrari', 'mclaren'],
    'Olimpíadas e atletismo': ['olimpiada*', 'olimpic*', 'jogos olimpicos', 'medalha', 'atletismo', 'maratona', 'bolt', 'salto', 'natacao', 'ginastica', 'rebeca', 'judo', 'skate', 'surfe'],
    'Tênis e golfe': ['tenis', 'wimbledon', 'roland garros', 'grand slam', 'us open', 'guga', 'federer', 'nadal', 'djokovic', 'golfe'],
    'Lutas, UFC e boxe': ['ufc', 'mma', 'boxe', 'boxeador', 'lutador', 'cinturao', 'peso pena', 'jiu jitsu', 'anderson silva', 'muhammad ali', 'tyson'],
    'Vôlei e outros esportes de quadra': ['volei', 'volei de praia', 'handebol', 'futsal', 'falcao', 'libero'],
    'Esportes americanos (NFL, MLB, NHL)': ['nfl', 'super bowl', 'futebol americano', 'beisebol', 'mlb', 'hoquei', 'nhl', 'touchdown', 'quarterback'],
    'Ciclismo, xadrez e outros': ['ciclismo', 'tour de france', 'xadrez', 'enxadrista', 'remo', 'vela', 'hipismo', 'rugby', 'criquete', 'sinuca', 'dardos', 'esgrima'],
    'Apelidos e clubes regionais': ['clube', 'apelido', 'apelidado', 'chamado de'],
    'Regras e termos do esporte': ['regra', 'quantos jogadores', 'como se chama', 'termo', 'impedimento', 'hat trick', 'pontos', 'cartao'],
  },
  Entretenimento: {
    'Novelas e TV brasileira': ['novela', 'globo', 'sbt', 'programa', 'apresentador*', 'bbb', 'big brother', 'humoristic*', 'chaves', 'xuxa', 'faustao', 'silvio santos'],
    'Música brasileira': ['mpb', 'samba', 'bossa nova', 'sertanej*', 'axe', 'funk', 'forro', 'pagode', 'cantora brasileira', 'cantor brasileiro', 'banda brasileira', 'banda carioca', 'banda paulista', 'baiana', 'roberto carlos', 'caetano', 'gil', 'chico buarque', 'tim maia', 'cazuza', 'legiao urbana', 'tom jobim', 'anitta', 'ivete'],
    'Música internacional e pop': ['cantor', 'cantora', 'banda', 'album', 'rapper', 'grammy', 'beatles', 'queen', 'rock', 'pop', 'michael jackson', 'madonna', 'gravou', 'musica'],
    'Cinema brasileiro': ['filme brasileiro', 'cinema brasileiro', 'cidade de deus', 'central do brasil', 'tropa de elite', 'auto da compadecida', 'ainda estou aqui'],
    'Super-heróis e quadrinhos': ['marvel', 'dc', 'super heroi', 'heroi', 'vilao', 'batman', 'superman', 'homem aranha', 'vingadores', 'x men', 'hq', 'quadrinho*', 'gotham', 'coringa', 'mulher maravilha', 'stark'],
    'Animação, Disney e Pixar': ['disney', 'pixar', 'animacao', 'desenho', 'dreamworks', 'shrek', 'toy story', 'rei leao', 'procurando nemo', 'simpsons', 'turma da monica', 'princesa'],
    'Anime e mangá': ['anime', 'manga', 'dragon ball', 'naruto', 'one piece', 'pokemon', 'cavaleiros do zodiaco', 'sailor moon', 'ghibli'],
    'Séries de TV e streaming': ['serie', 'series', 'netflix', 'hbo', 'friends', 'the office', 'game of thrones', 'breaking bad', 'stranger things', 'temporada'],
    'Sagas e franquias de cinema': ['star wars', 'harry potter', 'senhor dos aneis', 'hobbit', 'jurassic', 'velozes', 'piratas do caribe', 'matrix', 'jogos vorazes', 'crepusculo', 'jedi', 'hogwarts', 'saga', 'franquia', 'james bond', '007'],
    'Cinema internacional e Oscar': ['filme', 'oscar', 'diretor', 'ator', 'atriz', 'cannes', 'hollywood', 'cinema', 'terror'],
    'Literatura e personagens': ['livro', 'romance', 'escritor', 'escritora', 'autor', 'personagem', 'conto', 'poeta'],
  },
  Tecnologia: {
    'Videogames: Nintendo e Mario': ['nintendo', 'mario', 'zelda', 'link', 'kirby', 'donkey kong', 'luigi', 'peach', 'bowser', 'metroid', 'game boy', 'switch', 'wii'],
    'Videogames: consoles e história': ['console', 'playstation', 'ps2', 'xbox', 'sega', 'mega drive', 'atari', 'super nintendo', 'nintendo 64', 'gamecube', 'dreamcast', 'fliperama', 'arcade', 'sonic'],
    'Videogames: franquias e personagens': ['jogo', 'jogos', 'game', 'games', 'gta', 'minecraft', 'fortnite', 'free fire', 'league of legends', 'counter strike', 'call of duty', 'fifa', 'pes', 'pokemon', 'resident evil', 'street fighter', 'mortal kombat', 'the sims', 'rpg', 'franquia'],
    'Redes sociais e apps': ['rede social', 'redes sociais', 'aplicativo', 'app', 'instagram', 'facebook', 'whatsapp', 'twitter', 'tiktok', 'youtube', 'youtuber', 'orkut', 'msn', 'snapchat', 'spotify', 'telegram', 'linkedin', 'twitch', 'kwai', 'ifood', 'uber', 'streamer'],
    'Empresas e fundadores': ['empresa', 'fundou', 'fundador', 'fundada', 'ceo', 'apple', 'microsoft', 'google', 'amazon', 'meta', 'samsung', 'nvidia', 'intel', 'amd', 'tesla', 'jobs', 'gates', 'zuckerberg', 'musk', 'comprou', 'fabricante', 'fabrica'],
    'Hardware e componentes': ['processador', 'cpu', 'gpu', 'placa', 'memoria', 'ram', 'hd', 'ssd', 'disco', 'usb', 'monitor', 'teclado', 'mouse', 'pen drive', 'disquete', 'cd', 'dvd', 'bateria', 'chip', 'byte*', 'bit', 'pixel*'],
    'Internet, redes e protocolos': ['internet', 'www', 'http*', 'wi fi', 'wifi', 'bluetooth', 'rede', 'roteador', 'ip', 'dns', 'url', 'navegador', 'site', 'e mail', 'email', 'nuvem', 'download', 'upload', 'protocolo', '5g', '4g', 'banda larga'],
    'Programação e software': ['programacao', 'linguagem', 'codigo', 'python', 'java', 'javascript', 'html', 'css', 'sql', 'algoritmo', 'software', 'sistema operacional', 'windows', 'linux', 'macos', 'android', 'ios', 'open source', 'bug', 'compilador', 'banco de dados'],
    'Segurança digital': ['virus', 'hacker*', 'malware', 'phishing', 'senha', 'spyware', 'trojan', 'worm', 'ransomware', 'antivirus', 'criptografia', 'firewall', 'golpe'],
    'Celulares e gadgets': ['celular', 'smartphone', 'iphone', 'nokia', 'motorola', 'blackberry', 'tablet', 'ipad', 'smartwatch', 'fone', 'tela', 'camera', 'tamagotchi', 'pager'],
    'IA, robótica e ficção científica': ['inteligencia artificial', 'ia', 'robo', 'robos', 'robotica', 'chatgpt', 'openai', 'skynet', 'androide', 'ficcao cientifica', 'realidade virtual', 'metaverso', 'drone'],
    'História da computação e invenções': ['primeiro computador', 'computador', 'eniac', 'turing', 'lovelace', 'babbage', 'invent*', 'criou', 'criador', 'primeira', 'primeiro'],
  },
};

function compilar(termo) {
  const pref = termo.endsWith('*');
  const t = limpar(pref ? termo.slice(0, -1) : termo).replace(/ /g, ' ');
  return new RegExp('(^| )' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + (pref ? '' : '( |$)'));
}

const banco = lerBancoAtual();
const resultado = {};
const amostraPedida = process.argv.includes('--amostra') ? process.argv[process.argv.indexOf('--amostra') + 1] : null;
for (const [cat, subs] of Object.entries(DEF)) {
  const regras = Object.entries(subs).map(([nome, termos]) => ({ nome, rx: termos.map(compilar) }));
  const lista = banco.filter((p) => p.categoria === cat);
  const cont = Object.fromEntries(regras.map((r) => [r.nome, { facil: 0, medio: 0, dificil: 0, total: 0 }]));
  cont['Outros (sem palavra-chave)'] = { facil: 0, medio: 0, dificil: 0, total: 0 };
  for (const p of lista) {
    const txt = limpar(p.pergunta + ' ' + p.resposta + ' ' + p.alternativas.join(' '));
    const achou = regras.find((r) => r.rx.some((rx) => rx.test(txt)));
    const nome = achou ? achou.nome : 'Outros (sem palavra-chave)';
    cont[nome][p.dificuldade]++;
    cont[nome].total++;
    if (amostraPedida === `${cat}>${nome}`) console.log(`  ${p.dificuldade} ${p.pergunta} => ${p.resposta}`);
  }
  resultado[cat] = { total: lista.length, subtemas: cont };
}

gravarJson(join(RAIZ_EXP, 'subtemas.json'), {
  _leia: 'Estimativa por palavras-chave (scripts/subtemas.mjs). Cada pergunta conta no primeiro subtema que casar. Serve para ver onde há espaço para crescer, não é classificação exata.',
  ...resultado,
});
for (const [cat, r] of Object.entries(resultado)) {
  console.log(`\n${cat} (${r.total})`);
  for (const [n, c] of Object.entries(r.subtemas).sort((a, b) => a[1].total - b[1].total))
    console.log(`  ${String(c.total).padStart(4)}  ${n}  (f${c.facil} m${c.medio} d${c.dificil})`);
}
