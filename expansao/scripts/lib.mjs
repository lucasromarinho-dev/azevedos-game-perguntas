// Funções compartilhadas do pipeline de expansão (Node puro, sem dependências).
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const RAIZ_EXP = join(dirname(fileURLToPath(import.meta.url)), '..');
export const RAIZ_REPO = join(RAIZ_EXP, '..');
export const PASTA_LOTES = join(RAIZ_EXP, 'lotes');

export const CATEGORIAS = ['Geografia', 'História', 'Ciências', 'Esportes', 'Entretenimento', 'Tecnologia'];
export const DIFICULDADES = ['facil', 'medio', 'dificil'];
export const STATUS = ['gerada', 'conferida', 'aprovada', 'descartada'];

// Palavras vazias (stopwords): não ajudam a dizer se duas perguntas falam da mesma coisa.
const VAZIAS = new Set(
  ('a o as os um uma uns umas de da do das dos em na no nas nos por pela pelo pelas pelos para pra com sem ' +
    'e ou que qual quais quem como onde quando quanto quantos quantas cujo cuja se seu sua seus suas ' +
    'ao aos a à às é foi era sao são ser esta está estao estão fica ficam tem têm ter teve havia ha há ' +
    'este esta isso isto esse essa aquele aquela mais muito muita mesmo ja já tambem também nao não ' +
    'chamado chamada chamados chamadas conhecido conhecida conhecidos conhecidas nome famoso famosa ' +
    'pais estado cidade outro outra lhe me te nos vos eles elas ele ela entre sobre ate até apos após')
    .normalize('NFD').replace(/[̀-ͯ]/g, '').split(/\s+/),
);

/** minúsculas, sem acento, sem pontuação, espaços simples */
export function limpar(txt) {
  return String(txt)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Palavras-chave: texto limpo, sem palavras vazias, com um "radical" simples (5 primeiras letras). */
export function palavrasChave(txt) {
  return limpar(txt)
    .split(' ')
    .filter((w) => w && !VAZIAS.has(w) && (w.length > 1 || /\d/.test(w)))
    .map((w) => (w.length > 5 ? w.slice(0, 5) : w));
}

/** Trigramas de caracteres sobre o texto sem palavras vazias. */
export function trigramas(txt) {
  const s = ' ' + palavrasChave(txt).join(' ') + ' ';
  const out = new Set();
  for (let i = 0; i + 3 <= s.length; i++) out.add(s.slice(i, i + 3));
  return out;
}

export function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  const [p, g] = a.size < b.size ? [a, b] : [b, a];
  for (const x of p) if (g.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

/** Resposta normalizada (tira artigos iniciais como "O", "Os", "A"). */
const NUMEROS = { zero: '0', um: '1', uma: '1', dois: '2', duas: '2', tres: '3', quatro: '4', cinco: '5', seis: '6', sete: '7',
  oito: '8', nove: '9', dez: '10', onze: '11', doze: '12', treze: '13', quatorze: '14', catorze: '14', quinze: '15',
  dezesseis: '16', dezessete: '17', dezoito: '18', dezenove: '19', vinte: '20' };
export function respostaNorm(r) {
  // "C++" e "C#" não podem virar os dois só "c"
  // (só "++" e "#" colados numa letra; o "+" de "Ctrl + Z" some normalmente)
  const t = limpar(String(r).replace(/\+\+/g, ' maismais ').replace(/([A-Za-z])#/g, '$1 sustenido '));
  if (NUMEROS[t]) return NUMEROS[t];
  return t.replace(/^(o|a|os|as|um|uma) /, '');
}

/** Distância de edição (Levenshtein) simples, para pegar grafias diferentes ("Gengis" x "Genghis"). */
export function distancia(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 99;
  let ant = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++)
      cur[j] = Math.min(ant[j] + 1, cur[j - 1] + 1, ant[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    ant = cur;
  }
  return ant[b.length];
}

/** id curto e estável: hash do texto da pergunta + resposta. */
export function gerarId(p) {
  return createHash('sha1').update(limpar(p.pergunta) + '|' + respostaNorm(p.resposta)).digest('hex').slice(0, 10);
}

export function lerBancoAtual() {
  return JSON.parse(readFileSync(join(RAIZ_REPO, 'perguntas.json'), 'utf8'));
}

export function listarLotes() {
  if (!existsSync(PASTA_LOTES)) return [];
  return readdirSync(PASTA_LOTES)
    .filter((f) => /^lote-\d{3}\.json$/.test(f))
    .sort()
    .map((f) => join(PASTA_LOTES, f));
}

export function lerJson(caminho) {
  return JSON.parse(readFileSync(caminho, 'utf8'));
}

export function gravarJson(caminho, dados) {
  writeFileSync(caminho, JSON.stringify(dados, null, 2) + '\n', 'utf8');
}

/** Mesma regra do validador do jogo (quest-online .../shared/perguntas.ts -> motivoInvalida). */
export function motivoInvalida(q) {
  if (!q || typeof q !== 'object') return 'não é um objeto';
  if (!CATEGORIAS.includes(q.categoria)) return `categoria desconhecida: ${q.categoria}`;
  if (!DIFICULDADES.includes(q.dificuldade)) return `dificuldade inválida: ${q.dificuldade}`;
  if (typeof q.pergunta !== 'string' || !q.pergunta.trim()) return 'enunciado vazio';
  if (typeof q.resposta !== 'string' || !q.resposta.trim()) return 'resposta vazia';
  if (!Array.isArray(q.alternativas) || q.alternativas.length !== 4) return 'precisa ter exatamente 4 alternativas';
  if (q.alternativas.some((a) => typeof a !== 'string' || !a.trim())) return 'alternativa vazia';
  if (new Set(q.alternativas).size !== 4) return 'alternativas repetidas';
  if (!q.alternativas.includes(q.resposta)) return 'a resposta não está entre as alternativas';
  return null;
}
