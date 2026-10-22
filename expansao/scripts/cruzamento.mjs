// Camada 2 do detector (v3): CRUZAMENTO DE ENTIDADES. Código puro, ZERO IA.
// Foi o cruzamento que o conferente usou na rodada 1 e que pegou as 76 duplicadas que a camada 1 (semelhanca.mjs) deixou passar:
// a RESPOSTA e os NOMES PRÓPRIOS de uma pergunta procurados no TEXTO da outra, nos dois sentidos.
//
// Grafia normalizada antes de comparar (função tokens):
//   - sem acento, minúsculas, sem palavras vazias ("Guerra da Cisplatina" = "Guerra Cisplatina")
//   - letra+número juntos ("Dust 2" = "Dust2"), siglas com ponto juntas ("E.T." = "ET"), letra solta some ("Leon S. Kennedy")
//   - plural simples ("joules" = "joule", "soros" = "soro"), radical de 7 letras
//   - sinônimos e símbolos (Fe = ferro, Hg = mercúrio, King = Rei, GTA = Grand Theft Auto, Invincibles = Invencíveis)
//   - "Edge" x "Microsoft Edge": a palavra mais rara da resposta mais curta está na outra = mesma resposta
//
// Sinais do par (A = pergunta nova ou candidata, B = pergunta já existente):
//   inAB   = a resposta de A aparece no texto de B          ("Manila?" x "Manila é capital de...")
//   inBA   = a resposta de B aparece no texto de A
//   sobre  = as respostas dividem a palavra rara             ("Rupia" x "Rupia indiana", "Prêmio Puskás" x "Ferenc Puskás")
//   comum  = peso (IDF) das palavras raras (IDF >= 4,5) em comum nos dois textos, fora as respostas; nome próprio vale 1,5x
// Regras "certa":
//   E1  inAB e inBA (pergunta invertida; se as duas respostas são palavras comuns, exige comum >= 3)
//   E2  sobre + (comum >= LIM_E2, o dobro se a resposta é comum, ou textos parecidos)
//   E2b sobre + resposta rara (até 3 perguntas do banco citam) + uma palavra rara em comum
//   E2c sobre + a resposta aparece no outro texto + comum >= 3
//   E3  inAB + comum >= LIM_E3
//   E4  inAB + resposta de A rara + uma palavra rara em comum
//   E5  inBA + comum >= LIM_E5 (sentido fraco: precisa de mais assunto)
// "suspeita": mesma resposta rara sem assunto em comum; resposta rara citada em pergunta da mesma categoria;
//             resposta citada com pouco assunto; enunciados quase iguais (Jaccard >= 0,6) com respostas diferentes.
// Calibração (rodada 2): node expansao/scripts/duplicadas.mjs --teste
//   76 descartes do conferente na rodada 1: 69 "certa" (91%) + 6 "suspeita"; só 1 passa sem marca.
//   1.409 perguntas conferidas como boas: ~9,6% marcadas "certa" (muitas são vizinhas de verdade, ex.: Tux x pinguim do Linux).
// v4 (rodada 3): tabela ENTIDADES (transliterações e nomes alternativos), diminutivos, e as regras
//   E2e mesma resposta rara + algum assunto (Alfa Centauri, Palm)
//   E7  a pergunta antiga é SOBRE a resposta nova (nome próprio/termo entre aspas) e a resposta antiga aparece na nova (Magalhães, código aberto)
//   E8  resposta nova repartida entre texto e resposta antiga (Código Civil + Napoleão)
//   Teste com índice banco + novas: piloto 13/16, rodada 1 69/76 (91%), rodada 2 10/10; conferidas boas marcadas "certa": 6,6% (2.418).
import { lerBancoAtual } from './lib.mjs';

const VAZIAS = new Set(('a o as os um uma uns umas de da do das dos em na no nas nos por pela pelo pelas pelos para pra com sem ' +
  'e ou que qual quais quem como onde quando quanto quantos quantas cujo cuja se seu sua seus suas ao aos ' +
  'e foi era sao ser esta estao fica ficam tem ter teve havia ha este isso isto esse essa aquele aquela mais muito muita mesmo ' +
  'ja tambem nao lhe me te nos vos eles elas ele ela entre sobre ate apos the of and to in on at by for is').split(' '));

// Palavras de molde: não provam assunto em comum. Escritas por extenso e passadas pelo mesmo radical() dos textos
// (assim "durante" não vira "durant" e não apaga o sobrenome Durant).
const MOLDE_PALAVRAS = ('chamado chamada chamados chamadas conhecido conhecida conhecidos famoso famosa famosos nome tipo maior menor ' +
  'primeiro primeira segundo segunda ultimo ultima grande grandes pequeno pequena brasil brasileiro brasileira mundo mundial pais paises ' +
  'cidade estado regiao serie filme jogo time clube selecao campeao campea campeonato historia ano anos vez vezes criou criado criada ' +
  'cerca venceu ficou tinha durante depois antes principal parte fez deu todo toda todos outro usado usada sao mais qual quais como ' +
  'faz fazer ganhou conquistou lancado lancada lancou apelido apelidado fica possui pode leva alem aparece onde chama existe grupo ' +
  'nasceu surgiu tambem personagem ' +
  // palavras de tipo (estreito, rio, guerra...): dizem a classe da resposta, não o assunto
  'estreito oceano rio lago monte ilha serra deserto guerra batalha revolta tratado dinastia imperio reino teorema lei planeta ' +
  'elemento festival copa torneio estadio album premio conferencia ' +
  // papéis e verbos de autoria: "Qual cantor gravou X?" e "Qual cantor gravou Y?" são fatos diferentes
  'gravou cantor cantora banda escreveu pintou pintor dirigiu diretor compos').split(' ');
const MOLDE = new Set(MOLDE_PALAVRAS.map((w) => radical(w)));
// Gentílicos e qualificadores de origem: dizem DE ONDE é a resposta, não QUAL fato se pergunta
// ("clube paranaense campeão de 1985" x "clube paranaense chamado de Coxa" são fatos diferentes)
const GENTILICOS = new Set(('brasileiro brasileira paulista carioca mineiro mineira gaucho gaucha baiano baiana paranaense catarinense ' +
  'cearense potiguar alagoano sergipano capixaba goiano goiana amazonense paraense ' +
  'nordestino nordestina sulista chileno chilena peruano mexicano ' +
  'canadense ingles inglesa britanico britanica escoces irlandes frances francesa alemao alema italiano italiana ' +
  'espanhol espanhola portugues portuguesa holandes holandesa belga suico sueco norueguês noruegues russo russa ' +
  'polones tcheco hungaro grego grega turco turca egipcio africano africana japones japonesa chines chinesa coreano coreana indiano ' +
  'europeu europeia asiatico latino sertanejo sertaneja sovietico sovietica romano romana nazista').split(' ').map((w) => radical(w)));

// Sinônimos / formas equivalentes (já sem acento). Lado esquerdo vira o direito.
const SINONIMOS = {
  fe: 'ferro', hg: 'mercurio', au: 'ouro', ag: 'prata', cu: 'cobre', pb: 'chumbo', na: 'sodio', k: 'potassio', sn: 'estanho',
  zn: 'zinco', ca: 'calcio', mg: 'magnesio', he: 'helio', ne: 'neonio', ar: 'argonio', cl: 'cloro', co2: 'dioxido carbono',
  h2o: 'agua', o2: 'oxigenio', n2: 'nitrogenio', nacl: 'cloreto sodio', u: 'uranio', pu: 'plutonio', ti: 'titanio',
  king: 'rei', queen: 'rainha', invincibles: 'invenciveis', gta: 'grand theft auto', eua: 'estados unidos', usa: 'estados unidos',
  urss: 'uniao sovietica', spartacus: 'espartaco', onu: 'nacoes unidas', ue: 'uniao europeia', nba: 'nba', f1: 'formula 1', psg: 'paris saint germain',
  'man utd': 'manchester united', ww2: 'segunda guerra', ia: 'inteligencia artificial', ai: 'inteligencia artificial',
  ufc: 'ufc', dna: 'dna', 'dr': 'doutor', sr: 'senhor', sto: 'santo', sta: 'santa', 'st': 'saint', mt: 'mato',
};
// Símbolos químicos só valem quando a palavra veio em maiúscula/estilo símbolo no original (evita "na" = sódio, "fe" = fé).
const SIMBOLOS = new Set(['fe', 'hg', 'au', 'ag', 'cu', 'pb', 'na', 'k', 'sn', 'zn', 'ca', 'mg', 'he', 'ne', 'ar', 'cl', 'co2', 'h2o', 'o2', 'n2', 'nacl', 'u', 'pu', 'ti']);

function semAcento(t) {
  return String(t).normalize('NFD').replace(/[̀-ͯ]/g, '');
}

/** Normaliza o texto cru mantendo informação de maiúscula para símbolos químicos. Devolve lista de palavras. */
function palavras(txt) {
  let s = semAcento(txt);
  // símbolos químicos escritos como símbolo (Fe, Hg, CO2, H2O): troca pelo nome antes de baixar a caixa
  s = s.replace(/\b([A-Z][a-z]?\d?|[A-Z][a-z]?Cl|H2O|CO2|NaCl)\b/g, (m) => {
    const l = m.toLowerCase();
    return SIMBOLOS.has(l) && m.length <= 4 && /[A-Z]/.test(m[0]) && (m.length === 1 ? false : true) ? ` ${SINONIMOS[l]} ` : m;
  });
  s = s.toLowerCase();
  s = s.replace(/\b([a-z])\.(?=[a-z]\.)/g, '$1').replace(/\b([a-z])\.([a-z])\.?/g, '$1$2 '); // E.T. -> et, T.E. -> te
  s = s.replace(/([a-z])[\s-]+(\d)\b/g, '$1$2'); // dust 2 -> dust2
  s = s.replace(/(\d),(\d)/g, '$1$2'); // 1,618 -> 1618
  s = s.replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
  const out = [];
  for (let w of s.split(' ')) {
    if (!w || VAZIAS.has(w)) continue;
    if (w.length === 1 && !/\d/.test(w)) continue; // letra solta (Leon S. Kennedy)
    if (SINONIMOS[w] && !SIMBOLOS.has(w)) { out.push(...SINONIMOS[w].split(' ')); continue; }
    out.push(diminutivo(w));
  }
  return trocarEntidades(out);
}

/** Diminutivo simples: "canetinha" = "caneta", "livrinho" = "livro" (os dois lados passam pela mesma regra). */
function diminutivo(w) {
  if (w.length >= 8 && /[^aeiou]inh[ao]s?$/.test(w)) return w.replace(/inh([ao])s?$/, '$1');
  return w;
}

// TABELA DE SINÔNIMOS DE ENTIDADES (v4, rodada 3): transliterações, grafias alternativas e nomes que dizem a mesma coisa.
// Cada linha: "forma canônica = variante | variante ...". Tudo sem acento e já sem palavras vazias ("Vila da Folha" -> "vila folha").
// A troca acontece antes do radical, nos dois textos comparados, então a pergunta nova e a do banco caem na mesma forma.
// Casos que motivaram (passaram pela rodada 2): Riad/Riade, Yalta/Ialta, Polaris/Estrela Polar, Palm Pilot/Palm,
// Vila da Folha/Vila Oculta da Folha, Alfa/Próxima Centauri, cangaceiros/cangaço, Código Napoleônico/Código Civil de Napoleão,
// open source/código aberto, Programa do Jô/Jô Soares, talk show/programa de entrevistas.
const ENTIDADES_TXT = `
riade = riad | riyadh
ialta = yalta
estrela polar = polaris | estrela norte
palm = palm pilot | palmtop | palm top
vila folha = vila oculta folha | konoha | konohagakure
alfa centauri = proxima centauri | alpha centauri
cangaco = cangaceiro | cangaceira | cangaceiros
codigo civil napoleao = codigo napoleonico | codigo napoleao | codigo civil frances
codigo aberto = open source | codigo fonte aberto
jo soares = programa jo
entrevista = talk show
estrela = estelar
okapi = ocapi
pequim = beijing | peking
xangai = shanghai
cantao = guangzhou
mumbai = bombaim | bombay
calcuta = kolkata
chennai = madras
myanmar = mianmar | birmania | burma
sri lanka = ceilao
tailandia = siao
catar = qatar
bahrein = barein | barem | bahrain
kuwait = kuait | kuaite
abu dhabi = abu dabi
dubai = dubay
teera = teerao | tehran
nova delhi = nova deli | new delhi
hanoi = hanoi
taiwan = formosa
eswatini = suazilandia | swaziland
tchequia = republica tcheca | czechia
belarus = bielorrussia | bielo russia
macedonia norte = macedonia
kiev = kyiv | quieve | kiiv
moscou = moscow | moskva
paises baixos = holanda
nova york = new york | ny
gengis khan = genghis khan | chinggis khan | gengis can
mao tse tung = mao zedong | mao tse tung
kruschev = khrushchev | kruchev | khrushchov | kruschov
gorbachev = gorbatchov | gorbachov
ieltsin = yeltsin | eltsin
tchaikovsky = tchaikovski | tchaikowsky | tchaikovskij | chaikovsky
dostoievski = dostoyevsky | dostoievsky | dostoevsky
tchekhov = chekhov | tchecov
estaline = stalin
hercules = heracles
ulisses = odisseu | odysseus
buda = buddha | sidarta gautama | siddhartha gautama | gautama
hirohito = showa
ho chi minh = saigon
everest = sagarmatha | chomolungma
fuji = fujiyama | fujisan
kilimanjaro = quilimanjaro
himalaia = himalaya
saara = sahara
tamisa = thames
reno = rhine | rhein
rio prata = rio plata | rio la plata
cabo horn = cabo hornos
canal mancha = english channel
malvinas = falklands | falkland
groenlandia = greenland
pele = edson arantes nascimento
cassius clay = muhammad ali
kareem abdul jabbar = lew alcindor
lampiao = virgulino ferreira | virgulino
tiradentes = joaquim jose silva xavier
aleijadinho = antonio francisco lisboa
xuxa = maria graca meneghel
freddie mercury = farrokh bulsara
playstation1 = ps1 | psone | ps one
playstation2 = ps2
playstation3 = ps3
playstation4 = ps4
playstation5 = ps5
nintendo64 = n64
super nintendo = snes | super nes
nes = nintendinho | famicom | nintendo entertainment system
mega drive = sega genesis
game boy advance = gba
counter strike = cs go | csgo | cs2
league legend = lol
world warcraft = wow
dungeons dragon = dnd
call duty = cod
apolo = apollo
gripe espanhola = influenza 1918
dioxido carbono = gas carbonico
via lactea = milky way
`;
const ENTIDADES = new Map(); // primeira palavra -> [{ de: [...], para: [...] }], frases mais longas primeiro
for (const linha of ENTIDADES_TXT.split('\n')) {
  if (!linha.includes('=')) continue;
  const [canon, vars] = linha.split('=');
  const para = canon.trim().split(/\s+/);
  for (const v of vars.split('|')) {
    const de = v.trim().replace(/[^a-z0-9 ]+/g, ' ').trim().split(/\s+/).filter((w) => w && !VAZIAS.has(w));
    if (!de.length || de.join(' ') === para.join(' ')) continue;
    if (!ENTIDADES.has(de[0])) ENTIDADES.set(de[0], []);
    ENTIDADES.get(de[0]).push({ de, para });
  }
}
for (const l of ENTIDADES.values()) l.sort((a, b) => b.de.length - a.de.length);

function trocarEntidades(ws) {
  const out = [];
  for (let i = 0; i < ws.length; ) {
    const op = (ENTIDADES.get(ws[i]) || []).find((e) => e.de.every((w, k) => ws[i + k] === w));
    if (op) { out.push(...op.para); i += op.de.length; } else out.push(ws[i++]);
  }
  return out;
}

/** radical: tira plural simples e corta em 6 letras */
export function radical(w) {
  if (/\d/.test(w)) return w;
  if (w.length > 4 && w.endsWith('oes')) w = w.slice(0, -3) + 'ao';
  else if (w.length > 4 && w.endsWith('ais')) w = w.slice(0, -3) + 'al';
  else if (w.length > 4 && w.endsWith('es') && /[rsz]es$/.test(w)) w = w.slice(0, -2);
  else if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) w = w.slice(0, -1);
  return w.length > 7 ? w.slice(0, 7) : w;
}

export function tokens(txt) {
  return palavras(txt).map(radical);
}

/** Nomes próprios do enunciado: palavras com inicial maiúscula fora do começo da frase, e trechos entre aspas. */
function nomesProprios(txt) {
  const out = new Set();
  const limpo = String(txt).replace(/^[^A-Za-zÀ-ú0-9"'“]+/, '');
  const ws = limpo.split(/\s+/);
  ws.forEach((w, i) => {
    if (i === 0) return;
    if (/^["'“(]?[A-ZÀ-Ý]/.test(w)) for (const t of tokens(w)) out.add(t);
  });
  for (const m of limpo.matchAll(/["“']([^"”']+)["”']/g)) for (const t of tokens(m[1])) out.add(t);
  return out;
}

let CTX = null;
function ctx() {
  if (CTX) return CTX;
  const banco = lerBancoAtual();
  const df = new Map();
  const dfTexto = new Map(); // em quantos ENUNCIADOS + respostas a palavra aparece (raridade da resposta)
  for (const p of banco) {
    for (const t of new Set(tokens(p.pergunta + ' ' + p.resposta))) df.set(t, (df.get(t) || 0) + 1);
    for (const t of new Set(tokens(p.pergunta + ' ' + p.resposta))) dfTexto.set(t, (dfTexto.get(t) || 0) + 1);
  }
  const N = banco.length;
  CTX = { N, df, dfTexto, idf: (t) => Math.log((N + 1) / ((df.get(t) || 0) + 1)) };
  return CTX;
}

/** Pré-cálculo de uma pergunta (ou candidata: pergunta = fato curto). */
export function prepararE(p) {
  const tx = tokens(p.pergunta);
  let resp = tokens(String(p.resposta).replace(/\([^)]*\)/g, ' ')); // "Ping (latência)" -> ping
  // resposta que é palavra vazia ("Pará" vira "para"): usa a palavra crua
  if (!resp.length) resp = semAcento(p.resposta).toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').trim().split(/\s+/).filter(Boolean).map((w) => 'x' + w);
  const respComParen = tokens(p.resposta);
  return {
    p: { categoria: p.categoria },
    texto: new Set(tx),
    textoLista: tx,
    resp: [...new Set(resp)],
    respTudo: new Set(respComParen),
    nomes: nomesProprios(p.pergunta),
    // títulos entre aspas ("Evidências", "Fio de Cabelo") são o assunto do fato
    aspas: new Set([...String(p.pergunta).matchAll(/["“]([^"”]+)["”]/g)].flatMap((m) => tokens(m[1]))),
    respStr: resp.join(' '),
  };
}

/** Palavra x bate com alguma do conjunto? exata ou prefixo comum longo (doge ~ dogeco; goiani ~ goiania). */
function bateEm(t, conj) {
  if (conj.has(t)) return true;
  if (t.length < 5) return false;
  for (const u of conj) {
    if (u.length < 5) continue;
    const n = Math.min(t.length, u.length);
    // prefixo comum só vale para palavras longas ("goiania" ~ "goianio"); "lingua" x "linguado" não
    if (n >= 7 && t.slice(0, n) === u.slice(0, n) && Math.abs(t.length - u.length) <= 1) return true;
  }
  return false;
}

/** A resposta de B tem alguma palavra rara e longa citada no texto de A? ("Napoleão Bonaparte" x "...legado de Napoleão") */
function respostaParcialEm(b, a) {
  const { idf } = ctx();
  return b.resp.some((t) => !MOLDE.has(t) && t.length >= 5 && idf(t) >= 5 && bateEm(t, a.texto));
}

/** Resposta de A com 2+ palavras, TODAS no texto ou na resposta de B, com pelo menos uma em cada ("Código Civil Napoleão" x
 *  "promulgou o Código Civil" => Napoleão). */
function respostaDividida(a, b) {
  const rs = a.resp.filter((t) => !MOLDE.has(t) && t.length >= 3);
  if (rs.length < 2) return false;
  const noTexto = rs.filter((t) => b.texto.has(t)), naResp = rs.filter((t) => !b.texto.has(t) && b.resp.includes(t));
  return noTexto.length + naResp.length === rs.length && noTexto.length > 0 && naResp.length > 0;
}

/** A resposta de A é exatamente o termo entre aspas de B ("código aberto"). */
function respostaEntreAspas(a, b) {
  const rs = a.resp.filter((t) => !MOLDE.has(t) && t.length >= 3);
  return rs.length > 0 && b.aspas.size > 0 && rs.every((t) => b.aspas.has(t)) && [...b.aspas].every((t) => rs.includes(t) || MOLDE.has(t));
}

/** A resposta de A (sem palavras de molde) está toda entre os nomes próprios ou termos entre aspas de B? */
function respostaEhAssunto(a, b) {
  const { idf } = ctx();
  const rs = a.resp.filter((t) => !MOLDE.has(t) && t.length >= 3);
  return rs.length > 0 && rs.every((t) => b.nomes.has(t) || b.aspas.has(t)) && rs.some((t) => idf(t) >= 6);
}

/** A resposta de A aparece no texto de B? (todas as palavras; resposta longa: 2/3, desde que as raras estejam)
 *  comResposta = true: procura no texto E na resposta de B */
function respostaEm(a, b, comResposta = false) {
  const { idf } = ctx();
  const rs = a.resp.filter((t) => !MOLDE.has(t) || a.resp.length === 1);
  if (!rs.length) return false;
  if (rs.length === 1 && rs[0].length < 2) return false;
  const alvo = comResposta ? new Set([...b.texto, ...b.resp]) : b.texto;
  const achou = rs.map((t) => bateEm(t, alvo));
  const n = achou.filter(Boolean).length;
  if (n === rs.length) return rs.some((t) => t.length >= 3 || /\d/.test(t)) || rs.length > 1;
  if (rs.length >= 3 && n / rs.length >= 0.66) return rs.some((t, k) => achou[k] && idf(t) >= 6);
  // nome composto: o sobrenome raro basta ("Hernán Cortés" ~ "Cortés"), se for bem raro
  if (rs.length === 2) {
    const k = idf(rs[0]) >= idf(rs[1]) ? 0 : 1;
    if (achou[k] && idf(rs[k]) >= 6.5 && rs[k].length >= 5) return true;
  }
  return false;
}

/** As respostas dividem uma palavra rara (ou são iguais)? */
function sobreposicao(a, b, fraca = false) {
  const { idf } = ctx();
  if (a.respStr && a.respStr === b.respStr) return true;
  // a palavra mais rara da resposta MAIS CURTA tem que estar na outra ("Rupia" x "Rupia indiana"; não "Oceano Índico" x "Oceano Pacífico")
  const ra = a.resp.filter((t) => !MOLDE.has(t) && t.length >= 2), rb = b.resp.filter((t) => !MOLDE.has(t) && t.length >= 2);
  if (!ra.length || !rb.length) return false;
  const [c, l] = ra.length <= rb.length ? [ra, rb] : [rb, ra];
  if (fraca) return c.some((t) => t.length >= 4 && idf(t) >= 5.5 && l.includes(t));
  const rara = c.reduce((m, t) => (idf(t) > idf(m) || (idf(t) === idf(m) && t.length > m.length) ? t : m), c[0]);
  if (!((rara.length >= 4 || /\d/.test(rara) || idf(rara) >= 6) && l.includes(rara) && (idf(rara) >= 4.2 || (c.length === 1 && idf(rara) >= 3.6)))) return false;
  // nomes compostos: a mais curta inteira dentro da outra ("Jan Koum" x "Jan Koum e Brian Acton"), ou o mesmo
  // sobrenome no fim ("Maria Leopoldina" x "Imperatriz Leopoldina"); não basta o primeiro nome ("Pierre Curie" x "Pierre de Coubertin")
  if (fraca || c.length === 1 || c.every((t) => l.includes(t))) return true;
  return c[c.length - 1] === l[l.length - 1] && idf(c[c.length - 1]) >= 4.2;
}

/** Peso do conteúdo específico de um enunciado (o que o fato é), fora respostas, moldes e gentílicos. */
function pesoEspecifico(a, fora) {
  const { idf } = ctx();
  let s = 0;
  for (const t of a.texto) {
    if (MOLDE.has(t) || GENTILICOS.has(t) || fora.has(t) || t.length < 3 || idf(t) < LIM_IDF_COMUM) continue;
    s += idf(t) * (a.nomes.has(t) ? 1.5 : 1);
  }
  return s;
}

/** Peso do assunto em comum nos dois textos, fora as respostas. Nome próprio pesa 1,5x. */
function assuntoComum(a, b) {
  const { idf } = ctx();
  let s = 0, n = 0, max = 0;
  const fora = new Set([...a.resp, ...b.resp]);
  for (const t of a.texto) {
    if (MOLDE.has(t) || GENTILICOS.has(t) || fora.has(t) || t.length < 3) continue;
    if (!b.texto.has(t) || idf(t) < LIM_IDF_COMUM) continue;
    const w = idf(t) * (a.nomes.has(t) || b.nomes.has(t) ? 1.5 : 1);
    s += w; n++; max = Math.max(max, w);
  }
  return { s, n, max };
}

function jac(a0, b0) {
  const a = new Set([...a0].filter((t) => !MOLDE.has(t) && !GENTILICOS.has(t)));
  const b = new Set([...b0].filter((t) => !MOLDE.has(t) && !GENTILICOS.has(t)));
  let i = 0;
  for (const t of a) if (b.has(t)) i++;
  return a.size + b.size - i ? i / (a.size + b.size - i) : 0;
}

export const LIM_E7 = 12;
export const LIM_E2 = 7, LIM_E3 = 10, LIM_E5 = 14, LIM_E6 = 0.6, LIM_IDF_COMUM = 4.5, LIM_E2B = 6, LIM_RAZAO = 0.2;

/** Respostas "comuns" (aparecem em muitos enunciados): país, estado, cor, número pequeno. Exigem mais assunto. */
function respostaComum(a) {
  const { dfTexto } = ctx();
  return a.resp.length > 0 && a.resp.every((t) => (dfTexto.get(t) || 0) >= 25);
}
function respostaRara(a) {
  const { dfTexto } = ctx();
  return a.resp.length > 0 && a.resp.some((t) => !MOLDE.has(t) && t.length >= 4 && (dfTexto.get(t) || 0) <= 3);
}

/** Compara A (nova) com B (existente). Devolve { nivel, regra, sim }. */
export function compararE(a, b) {
  const sim = jac(a.texto, b.texto);
  const inAB = respostaEm(a, b);
  const inBA = respostaEm(b, a);
  const sobre = sobreposicao(a, b);
  const sobreFraca = sobre || sobreposicao(a, b, true); // só a palavra mais rara em comum ("Fábrica de papel" x "Papel e celulose")
  const { s: comum, n } = assuntoComum(a, b);
  const comumA = respostaComum(a), comumB = respostaComum(b);
  const f = (x) => x.toFixed(1);
  if (inAB && inBA && !sobreFraca) {
    if (!(comumA && comumB) || comum >= 3) return { nivel: 'certa', sim, regra: `E1 pergunta invertida (respostas cruzadas nos textos, assunto ${f(comum)})` };
  }
  // mesma resposta, mas cada pergunta cita um título diferente entre aspas: fatos diferentes ("gravou Evidências" x "gravou Fio de Cabelo")
  const titulosDiferentes = a.aspas.size > 0 && b.aspas.size > 0 && jacT(a.aspas, b.aspas) < 0.5;
  if (sobreFraca && titulosDiferentes && !(inAB || inBA)) return { nivel: sim >= 0.5 ? 'suspeita' : null, sim, regra: 'mesma resposta, títulos diferentes entre aspas' };
  // v4 (rodada 3): regras para as 10 que passaram na rodada 2
  const mesmaExata = a.respStr && a.respStr === b.respStr;
  // v4.1: resposta só numérica ("3", "1", "40"): o número sozinho não prova o mesmo fato ("field goal vale 3" x "cesta de fora
  // vale 3"). Só conta como duplicada com enunciados parecidos de verdade.
  const soNumero = /^\d+$/.test(a.respStr.replace(/\s/g, '')) && /^\d+$/.test(b.respStr.replace(/\s/g, ''));
  if (soNumero && mesmaExata) return sim >= 0.5 ? { nivel: 'certa', sim, regra: `E2 mesma resposta numérica e enunciados parecidos (${f(sim)})` } : { nivel: sim >= 0.35 ? 'suspeita' : null, sim, regra: 'mesma resposta numérica, enunciados diferentes' };
  if (mesmaExata && respostaRara(a) && (sim >= 0.3 || comum >= LIM_E2B))
    return { nivel: 'certa', sim, regra: `E2e mesma resposta rara e algum assunto em comum (${f(comum)}, sim ${f(sim)})` };
  if (!mesmaExata && respostaDividida(a, b) && respostaParcialEm(b, a))
    return { nivel: 'certa', sim, regra: 'E8 invertida parcial (resposta nova repartida entre texto e resposta antiga, e a antiga citada na nova)' };
  if (inAB && !mesmaExata && !comumA && a.p.categoria === b.p.categoria && b.resp.some((t) => !MOLDE.has(t) && t.length >= 3 && bateEm(t, a.texto)) &&
      (respostaEntreAspas(a, b) || (!sobreFraca && respostaEhAssunto(a, b) && pesoEspecifico(b, new Set([...a.resp, ...b.resp])) < LIM_E7)))
    return { nivel: 'certa', sim, regra: 'E7 a pergunta antiga é SOBRE a resposta nova (nome próprio ou termo entre aspas)' };
  if (sobreFraca && (inAB || inBA) && comum >= 3) return { nivel: 'certa', sim, regra: `E2c mesma resposta e ela aparece no outro enunciado (${f(comum)})` };
  // mesma resposta: só é o mesmo fato se boa parte do conteúdo específico do enunciado mais curto está no outro
  const foraR = new Set([...a.resp, ...b.resp]);
  const razao = comum / Math.max(1, Math.min(pesoEspecifico(a, foraR), pesoEspecifico(b, foraR)));
  if (sobreFraca && !sobre && comum >= 13 && razao >= LIM_RAZAO) return { nivel: 'certa', sim, regra: `E2d respostas dividem a palavra rara + muito assunto em comum (${f(comum)})` };
  if (sobre) {
    if (sim >= 0.5) return { nivel: 'certa', sim, regra: `E2 mesma resposta e enunciados parecidos (${f(sim)})` };
    if (comum >= LIM_E2B && razao >= LIM_RAZAO) return { nivel: 'certa', sim, regra: `E2 mesma resposta e mesmo assunto (${f(comum)}, ${Math.round(razao * 100)}% do fato)` };
    if (comum >= LIM_E2B) return { nivel: 'suspeita', sim, regra: `mesma resposta, assunto vizinho (${f(comum)}, ${Math.round(razao * 100)}% do fato)` };
  }
  if (inAB && !sobreFraca) {
    if (comum >= LIM_E3 * (comumA ? 2 : 1)) return { nivel: 'certa', sim, regra: `E3 resposta nova citada no texto antigo + assunto (${f(comum)})` };
    if (respostaRara(a) && n >= 1) return { nivel: 'certa', sim, regra: `E4 resposta nova (rara) citada no texto antigo (${f(comum)})` };
    if (respostaRara(a) && a.p.categoria === b.p.categoria) return { nivel: 'suspeita', sim, regra: `resposta nova (rara) citada no texto antigo da mesma categoria` };
    if (!comumA && comum >= 3) return { nivel: 'suspeita', sim, regra: `resposta nova citada no texto antigo (${f(comum)})` };
  }
  if (inBA && !sobreFraca) {
    if (comum >= LIM_E5 * (comumB ? 1.5 : 1)) return { nivel: 'certa', sim, regra: `E5 resposta antiga citada no texto novo + assunto (${f(comum)})` };
  }
  if (sim >= LIM_E6 && n >= 2) return { nivel: 'suspeita', sim, regra: `enunciados quase iguais, respostas diferentes (${f(sim)})` };
  return { nivel: null, sim };
}

/** Índice por prefixo de 4 letras para não comparar com o banco inteiro. lista = [{p, ref}] */
export function indexar(lista) {
  const itens = lista.map(({ p, ref }) => ({ ref, p, e: prepararE(p) }));
  const idx = new Map();
  itens.forEach((it, i) => {
    for (const t of new Set([...it.e.texto, ...it.e.resp])) {
      if (t.length < 2 || MOLDE.has(t)) continue;
      const k = t.slice(0, 4);
      if (!idx.has(k)) idx.set(k, []);
      idx.get(k).push(i);
    }
  });
  return { itens, idx };
}

/** Pior ocorrência (certa > suspeita) de A contra o índice. ignorar(ref) -> true pula o item. */
export function procurarE(alvoP, indice, ignorar = () => false) {
  const a = prepararE(alvoP);
  const cand = new Set();
  for (const t of new Set([...a.texto, ...a.resp])) {
    if (t.length < 2 || MOLDE.has(t)) continue;
    for (const i of indice.idx.get(t.slice(0, 4)) || []) cand.add(i);
  }
  let melhor = { nivel: 'nao', ref: null, sim: 0, regra: null };
  const P = { nao: 0, suspeita: 1, certa: 2 };
  for (const i of cand) {
    const it = indice.itens[i];
    if (ignorar(it.ref)) continue;
    const r = compararE(a, it.e);
    if (!r.nivel) continue;
    if (P[r.nivel] > P[melhor.nivel] || (P[r.nivel] === P[melhor.nivel] && r.sim > melhor.sim)) melhor = { nivel: r.nivel, ref: it.ref, sim: r.sim, regra: r.regra };
  }
  return melhor;
}

/** Jaccard simples entre conjuntos de palavras (títulos entre aspas). */
function jacT(a, b) {
  let i = 0;
  for (const t of a) if (b.has(t)) i++;
  return a.size + b.size - i ? i / (a.size + b.size - i) : 0;
}
