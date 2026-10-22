// Núcleo do detector de duplicadas (v2). Código puro, ZERO IA. Usado por duplicadas.mjs e candidatas.mjs.
//
// Ideia: duas perguntas são o mesmo fato quando dividem a ENTIDADE principal e a resposta "conversa" com a outra.
// Para saber o que é entidade (raro) e o que é molde ("qual seleção venceu a copa"), cada radical de palavra
// recebe um peso IDF: quanto mais raro no banco, maior o peso. "Louisiana" pesa ~8; "venceu" pesa ~3.
//
// Sinais calculados para o par (A, B):
//   peso    = soma do IDF dos radicais específicos em comum nos dois enunciados
//   mesma   = mesma resposta (normalizada, número por extenso, uma contida na outra, 1 letra de diferença)
//   cruzAB  = a resposta de A aparece no TEXTO de B (frase inteira, todos os radicais, ou grafia parecida)
//   parcial = um radical RARO da resposta de A aparece no texto de B ("José Roberto Guimarães" x "Zé Roberto")
// Regras "certa":
//   R1 mesma resposta + texto muito parecido (Jaccard >= 0.45)
//   R2 mesma resposta + peso >= limite (limite menor se a resposta é rara no banco)
//   R3 cruzamento nos DOIS sentidos (pergunta invertida: Manila->Filipinas x Filipinas->Manila)
//   R4 cruzamento num sentido + peso >= LIM_CRUZ (Gutenberg, Plano Marshall, Tetris, Louisiana)
//   R5 cruzamento parcial + peso >= LIM_PARCIAL
// "suspeita" ficou só para: mesma resposta rara com UM radical raro em comum (vale olhar, mas pode ser outro fato).
import { lerBancoAtual, listarLotes, lerJson, palavrasChave, respostaNorm, limpar, distancia, jaccard } from './lib.mjs';

// Radicais de molde: aparecem em perguntas de assuntos diferentes. Não provam nada sozinhos.
export const GENERICAS = new Set(['brasi', 'maior', 'menor', 'prime', 'segun', 'ultim', 'mundo', 'mundi', 'plane', 'siste', 'solar',
  'numer', 'grand', 'pequ', 'pais', 'paise', 'cidad', 'nome', 'tipo', 'serie', 'filme', 'jogo', 'time', 'clube', 'selec',
  'campe', 'histo', 'anos', 'vezes', 'chama', 'conhe', 'famos', 'usado', 'usada', 'criou', 'criad', 'cerca',
  'vence', 'copa', 'dispu', 'final', 'ganho', 'conqu', 'press', 'lider', 'brasileiro', 'parte', 'ficou', 'tinha', 'durante',
  'duran', 'depoi', 'onlin', 'antes', 'princ', 'regia', 'estad', 'fez', 'deu', 'tem', 'ser', 'fazer', 'todo', 'toda', 'todos', 'outro']);

export const LIM_CERTA_SIM = 0.45;
export const LIM_MESMA_RARA = 4; // resposta rara (até 3 perguntas com ela): basta um radical pouco comum em comum
export const LIM_MESMA = 11; // resposta comum (países, estados, clubes): precisa de mais assunto em comum
export const LIM_CRUZ = 14;
export const LIM_CRUZ_COMUM = 15; // resposta é palavra comum nos enunciados (Brasil, França): precisa de mais assunto
export const LIM_CRUZ_REVERSO = 15;
export const LIM_INVERTIDA = 3;
export const LIM_PARCIAL = 19;
export const IDF_RARO = 5.5; // radical presente em ~20 perguntas ou menos

let CACHE = null;
/** Tabela de IDF e frequência de respostas, sobre banco atual + novas não descartadas. */
export function contexto() {
  if (CACHE) return CACHE;
  const todas = [...lerBancoAtual(), ...listarLotes().flatMap((f) => lerJson(f)).filter((p) => p.status !== 'descartada')];
  const df = new Map();
  const freqResp = new Map();
  for (const p of todas) {
    for (const r of new Set(palavrasChave(p.pergunta + ' ' + p.resposta))) df.set(r, (df.get(r) || 0) + 1);
    const rn = respostaNorm(p.resposta);
    freqResp.set(rn, (freqResp.get(rn) || 0) + 1);
  }
  const N = todas.length;
  CACHE = { N, df, freqResp, idf: (r) => Math.log((N + 1) / ((df.get(r) || 0) + 1)) };
  return CACHE;
}

function radicaisResposta(resp) {
  return palavrasChave(resp).filter((r) => r.length >= 3 || /\d/.test(r));
}

/** Pré-calcula o que a comparação precisa. */
export function preparar(p, ref) {
  const pal = new Set(palavrasChave(p.pergunta));
  const esp = new Set([...pal].filter((x) => !GENERICAS.has(x)));
  const texto = ' ' + limpar(p.pergunta) + ' ';
  return {
    ref,
    categoria: p.categoria,
    resp: respostaNorm(p.resposta),
    respRad: radicaisResposta(p.resposta),
    // palavras inteiras da resposta, sem palavras vazias ("Mu Online" -> mu, online)
    respPal: palavrasChave(p.resposta).length ? limpar(p.resposta).split(' ').filter((w) => palavrasChave(w).length) : [],
    pal,
    esp,
    texto,
    palavras: texto.trim().split(' '),
  };
}

/** Respostas iguais, ou uma contida na outra como palavras inteiras ("pacifico" x "oceano pacifico"). */
export function mesmaResposta(r1, r2) {
  if (r1 === r2) return true;
  // grafia diferente, palavra a palavra (Gengis Khan x Genghis Khan), nunca em palavra curta (Vitamina A x Vitamina K)
  const w1 = r1.split(' '), w2 = r2.split(' ');
  if (w1.length === w2.length && !/\d/.test(r1 + r2) &&
      w1.every((w, i) => w === w2[i] || (w.length >= 5 && w2[i].length >= 5 && distancia(w, w2[i]) <= 1))) return true;
  // uma contida na outra, desde que seja boa parte dela (Pacífico x Oceano Pacífico; não Norte x Coreia do Norte)
  const [c, l] = r1.length <= r2.length ? [r1, r2] : [r2, r1];
  return c.length >= 4 && c.length / l.length >= 0.45 && (' ' + l + ' ').includes(' ' + c + ' ');
}

const VOGAIS = /[aeiou]/g;
/** Palavra da resposta "bate" com uma palavra do texto? exata, prefixo longo (desfazer ~ desfaz),
 *  ou mesmas consoantes com mesmo começo (Dioneia ~ Dionaea). Prefixo curto não vale (Globoplay x Globo). */
function bate(w, t) {
  if (w === t) return true;
  const n = Math.max(5, w.length - 3);
  if (t.length >= w.length - 3 && w.length >= 5 && t.slice(0, n) === w.slice(0, n)) return true;
  if (w.length >= 6 && t.length >= 6 && w.slice(0, 3) === t.slice(0, 3) && w.replace(VOGAIS, '') === t.replace(VOGAIS, '')) return true;
  return false;
}

/** A resposta de A aparece no texto de B? Devolve 'cheio' | 'parcial' | null. */
export function respostaNoTexto(a, b) {
  const { idf } = contexto();
  if (!a.respPal.length || a.resp.length < 3) return null;
  if (b.texto.includes(' ' + a.resp + ' ')) return 'cheio';
  const achou = a.respPal.map((w) => b.palavras.some((t) => bate(w, t)));
  if (achou.every(Boolean)) return 'cheio';
  if (a.respPal.some((w, k) => achou[k] && w.length >= 4 && idf(w.slice(0, 5)) >= IDF_RARO && !GENERICAS.has(w.slice(0, 5)))) return 'parcial';
  return null;
}

/** Algum radical da resposta é raro no banco (Tetris, Louisiana)? */
function respostaRara(a) {
  const { idf } = contexto();
  return a.respRad.some((r) => idf(r) >= 6);
}

/** A resposta é uma palavra que aparece em muitos enunciados (Brasil, França, Japão)? */
function respostaComum(a) {
  const { idf } = contexto();
  return a.respRad.length > 0 && Math.max(...a.respRad.map(idf)) < 4;
}

/** Peso do assunto em comum: soma do IDF dos radicais específicos que os dois enunciados dividem. */
export function pesoComum(a, b) {
  const { idf } = contexto();
  let s = 0;
  let n = 0;
  for (const r of a.esp) if (b.esp.has(r)) { s += idf(r); n++; }
  return { peso: s, n };
}

/** Compara A com B. Devolve { nivel: 'certa'|'suspeita'|null, sim, regra } */
export function comparar(a, b) {
  const { freqResp } = contexto();
  const sim = jaccard(a.esp, b.esp);
  const { peso, n } = pesoComum(a, b);
  const mesma = mesmaResposta(a.resp, b.resp);
  if (mesma) {
    if (sim >= LIM_CERTA_SIM) return { nivel: 'certa', sim, regra: 'R1 mesma resposta e texto parecido' };
    const rara = (freqResp.get(a.resp) || 0) <= 3 || (freqResp.get(b.resp) || 0) <= 3;
    if (peso >= (rara ? LIM_MESMA_RARA : LIM_MESMA)) return { nivel: 'certa', sim, regra: `R2 mesma resposta e assunto em comum (peso ${peso.toFixed(1)})` };
    if (rara && peso >= 3) return { nivel: 'suspeita', sim, regra: `mesma resposta rara, pouco assunto em comum (peso ${peso.toFixed(1)})` };
    return { nivel: null, sim };
  }
  // Direção importa: a resposta da NOVA (a) citada no enunciado antigo (b) é forte ("o banco já entrega o fato");
  // a resposta antiga citada no enunciado novo é comum e fraca (a pergunta nova só usa um fato conhecido como pista).
  // respostas "irmãs" (Vitamina A x Vitamina K): dividem palavra, então não é pergunta invertida
  if (a.respPal.some((w) => b.respPal.includes(w))) return { nivel: null, sim };
  const ab = respostaNoTexto(a, b);
  const ba = respostaNoTexto(b, a);
  if (ab === 'cheio' && ba === 'cheio' && peso >= LIM_INVERTIDA) return { nivel: 'certa', sim, regra: `R3 pergunta invertida (cruzamento nos dois sentidos, peso ${peso.toFixed(1)})` };
  if (((ab === 'cheio' && ba === 'parcial' && respostaRara(a)) || (ab === 'parcial' && ba === 'cheio' && respostaRara(b)))) return { nivel: 'certa', sim, regra: 'R3 pergunta invertida (cruzamento cheio + parcial)' };
  if (ab === 'cheio' && peso >= (respostaComum(a) ? LIM_CRUZ_COMUM : LIM_CRUZ)) return { nivel: 'certa', sim, regra: `R4 resposta nova citada no enunciado antigo + assunto em comum (peso ${peso.toFixed(1)})` };
  if (ba === 'cheio' && peso >= LIM_CRUZ_REVERSO && sim >= 0.45) return { nivel: 'certa', sim, regra: `R4b resposta antiga citada no enunciado novo + enunciados parecidos (peso ${peso.toFixed(1)})` };
  if (ba === 'cheio' && peso >= LIM_CRUZ_REVERSO) return { nivel: 'suspeita', sim, regra: `R4b resposta antiga citada no enunciado novo + muito assunto em comum (peso ${peso.toFixed(1)})` };
  if ((ab || ba) && peso >= LIM_PARCIAL) return { nivel: 'certa', sim, regra: `R5 parte da resposta citada + muito assunto em comum (peso ${peso.toFixed(1)})` };
  return { nivel: null, sim };
}

/** Procura a pior ocorrência (certa > suspeita; empate: maior similaridade) numa lista de candidatos. */
export function piorOcorrencia(alvo, candidatos) {
  let melhor = { nivel: 'nao', ref: null, sim: 0, regra: null };
  const peso = { nao: 0, suspeita: 1, certa: 2 };
  for (const c of candidatos) {
    if (c.ref === alvo.ref) continue;
    const r = comparar(alvo, c);
    if (!r.nivel) continue;
    if (peso[r.nivel] > peso[melhor.nivel] || (peso[r.nivel] === peso[melhor.nivel] && r.sim > melhor.sim))
      melhor = { nivel: r.nivel, ref: c.ref, sim: r.sim, regra: r.regra };
  }
  return melhor;
}
