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
import { lerBancoAtual } from './lib.mjs';

const VAZIAS = new Set(('a o as os um uma uns umas de da do das dos em na no nas nos por pela pelo pelas pelos para pra com sem ' +
  'e ou que qual quais quem como onde quando quanto quantos quantas cujo cuja se seu sua seus suas ao aos ' +
  'e foi era sao ser esta estao fica ficam tem ter teve havia ha este isso isto esse essa aquele aquela mais muito muita mesmo ' +
  'ja tambem nao lhe me te nos vos eles elas ele ela entre sobre ate apos the of and to in on at by for is').split(' '));

// Palavras de molde: não provam assunto em comum.
const MOLDE = new Set(['chamad', 'conhec', 'famos', 'nome', 'tipo', 'maior', 'menor', 'primei', 'segund', 'ultimo', 'grande',
  'pequen', 'brasil', 'brasile', 'mundo', 'mundia', 'pais', 'paise', 'cidade', 'estado', 'regiao', 'serie', 'filme', 'jogo',
  'time', 'clube', 'seleca', 'campea', 'histor', 'ano', 'anos', 'vez', 'veze', 'criou', 'criad', 'cerca', 'venceu', 'ficou',
  'tinha', 'durant', 'depois', 'antes', 'princi', 'parte', 'fez', 'deu', 'todo', 'toda', 'todos', 'outro', 'usado', 'usada',
  'sao', 'mais', 'qual', 'quai', 'como', 'qu', 'faz', 'fazer', 'ganhou', 'conqui', 'lancad', 'lancou', 'apelid', 'fica',
  'possui', 'pode', 'leva', 'alem', 'aparec', 'onde', 'chama', 'existe', 'grupo', 'nasceu', 'surgiu', 'tambem', 'personag',
  // papéis e verbos de autoria: "Qual cantor gravou X?" e "Qual cantor gravou Y?" são fatos diferentes
  // palavras de tipo (estreito, rio, guerra...): dizem a classe da resposta, não o assunto
  'estreit', 'oceano', 'rio', 'lago', 'monte', 'ilha', 'serra', 'deserto', 'guerra', 'batalha', 'revolta', 'tratado', 'dinasti',
  'imperio', 'reino', 'teorema', 'lei', 'planeta', 'element', 'festiva', 'copa', 'campeon', 'torneio', 'estadio', 'album', 'premio',
  'gravou', 'cantor', 'cantora', 'banda', 'escreve', 'escreveu', 'pintou', 'pintor', 'dirigiu', 'diretor', 'compos', 'campeao', 'venceu', 'ganhou']);

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
    out.push(w);
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
  const resp = tokens(String(p.resposta).replace(/\([^)]*\)/g, ' ')); // "Ping (latência)" -> ping
  const respComParen = tokens(p.resposta);
  return {
    p: { categoria: p.categoria },
    texto: new Set(tx),
    textoLista: tx,
    resp: [...new Set(resp)],
    respTudo: new Set(respComParen),
    nomes: nomesProprios(p.pergunta),
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
    if (n >= 5 && t.slice(0, n) === u.slice(0, n) && Math.abs(t.length - u.length) <= (n >= 6 ? 2 : 1)) return true;
  }
  return false;
}

/** A resposta de A aparece no texto de B? (todas as palavras; resposta longa: 2/3, desde que as raras estejam) */
function respostaEm(a, b) {
  const { idf } = ctx();
  const rs = a.resp.filter((t) => !MOLDE.has(t) || a.resp.length === 1);
  if (!rs.length) return false;
  if (rs.length === 1 && rs[0].length < 2) return false;
  const achou = rs.map((t) => bateEm(t, b.texto));
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
  if (!((rara.length >= 4 || /\d/.test(rara) || idf(rara) >= 6) && l.includes(rara) && (idf(rara) >= 4.2 || c.length === 1))) return false;
  // nomes compostos: a mais curta inteira dentro da outra ("Jan Koum" x "Jan Koum e Brian Acton"), ou o mesmo
  // sobrenome no fim ("Maria Leopoldina" x "Imperatriz Leopoldina"); não basta o primeiro nome ("Pierre Curie" x "Pierre de Coubertin")
  if (fraca || c.length === 1 || c.every((t) => l.includes(t))) return true;
  return c[c.length - 1] === l[l.length - 1] && idf(c[c.length - 1]) >= 4.2;
}

/** Peso do assunto em comum nos dois textos, fora as respostas. Nome próprio pesa 1,5x. */
function assuntoComum(a, b) {
  const { idf } = ctx();
  let s = 0, n = 0, max = 0;
  const fora = new Set([...a.resp, ...b.resp]);
  for (const t of a.texto) {
    if (MOLDE.has(t) || fora.has(t) || t.length < 3) continue;
    if (!b.texto.has(t) || idf(t) < LIM_IDF_COMUM) continue;
    const w = idf(t) * (a.nomes.has(t) || b.nomes.has(t) ? 1.5 : 1);
    s += w; n++; max = Math.max(max, w);
  }
  return { s, n, max };
}

function jac(a, b) {
  let i = 0;
  for (const t of a) if (b.has(t)) i++;
  return a.size + b.size - i ? i / (a.size + b.size - i) : 0;
}

export const LIM_E2 = 7, LIM_E3 = 10, LIM_E5 = 14, LIM_E6 = 0.6, LIM_IDF_COMUM = 4.5, LIM_E2B = 6;

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
  if (sobreFraca && (inAB || inBA) && comum >= 3) return { nivel: 'certa', sim, regra: `E2c mesma resposta e ela aparece no outro enunciado (${f(comum)})` };
  if (sobreFraca && !sobre && comum >= 13) return { nivel: 'certa', sim, regra: `E2d respostas dividem a palavra rara + muito assunto em comum (${f(comum)})` };
  if (sobre) {
    if (comum >= LIM_E2 * (comumA ? 2 : 1) || sim >= 0.5) return { nivel: 'certa', sim, regra: `E2 mesma resposta + assunto em comum (${f(comum)})` };
    if (respostaRara(a) && comum >= LIM_E2B) return { nivel: 'certa', sim, regra: `E2b mesma resposta rara + palavra em comum (${f(comum)})` };
    if (respostaRara(a)) return { nivel: 'suspeita', sim, regra: `mesma resposta rara (${f(comum)})` };
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
