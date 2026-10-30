#!/usr/bin/env node
// Detector de "enunciado que entrega a resposta". Código puro, ZERO uso de IA.
// Origem: varredura do coordenador (palavra de 4+ letras da resposta, sem acento, que aparece no enunciado
// e em nenhuma alternativa errada). Esta versão também pega:
//   - radicais e variações (plural, gênero, aumentativo: "Safadão" x "safada", "paraguaio" x "Paraguai");
//   - siglas (resposta "NBA" com "NBA" no enunciado; resposta "Organização das Nações Unidas" com "ONU" no enunciado);
//   - nomes próprios curtos de 3 letras ("Lee", "Kim", "Ivo");
//   - palavra que aparece em mais de uma alternativa, mas a resposta continua sendo a ÚNICA que casa com
//     mais palavras do enunciado (ex.: "Nintendo" e "portátil" no enunciado; só a resposta tem as duas).
//
// Regra: para cada alternativa, conta quantas palavras dela (4+ letras, sigla ou nome de 3 letras) casam com
// alguma palavra do enunciado. Se a resposta tem a MAIOR contagem e ninguém empata com ela, é suspeita.
// Também é suspeita quando alguma palavra da resposta casa com o enunciado e com nenhuma palavra das erradas.
//   nivel "forte"   = há palavra exclusiva da resposta no enunciado (a regra antiga, agora com radical);
//   nivel "parcial" = nenhuma exclusiva, mas a resposta casa com mais palavras do enunciado que qualquer errada.
//
// Uso:
//   node expansao/scripts/entrega.mjs                      -> banco publicado (git show origin/main:perguntas.json)
//   node expansao/scripts/entrega.mjs --arquivo X.json     -> um banco qualquer (lista de perguntas)
//   node expansao/scripts/entrega.mjs --lotes 106-110      -> lotes da expansão (ignora descartadas)
//   --json saida.json  grava a lista de suspeitas; --ignorar correcoes.json pula as já classificadas
//     como "falso-alarme" (para a segunda passada só mostrar o que sobrou).
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';
import { RAIZ_REPO, PASTA_LOTES } from './lib.mjs';

const VAZIAS = new Set(
  ('sobre entre depois antes quando grande primeiro primeira nacional brasil brasileiro brasileira estados ' +
    'unidos cidade santos sistema teoria qual quais como onde quem para pela pelo pelas pelos este esta essa esse ' +
    'isso isto aquele aquela muito muita mais menos mesmo tambem nome nomes famoso famosa conhecido conhecida ' +
    'chamado chamada chamados chamadas foram sendo seria tinha tinham fica ficam ficou chama chamam pais paises ' +
    'parte partes tipo tipos forma formas usado usada usados usadas todo toda todos todas cada outro outra outros ' +
    'outras desta deste dessa desse dela dele delas deles numa numas nuns pelo qual seus suas sua seu uma umas ' +
    'anos ano dia dias vez vezes')
    .split(/\s+/),
);
const MINI = new Set('de da do das dos e em na no nas nos o a os as um uma the of and y la el le les du des von van'.split(' '));

export const norm = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

/** Radical simples: tira "s" final e uma vogal final ("safadão" -> "safada", "safada" -> "safad"). */
function radical(w) {
  let r = w.replace(/(oes|aes|ais|eis|ns)$/, (m) => (m === 'ns' ? 'm' : m[0]));
  r = r.replace(/s$/, '');
  r = r.replace(/(ao|a|o|e)$/, '');
  return r;
}

/** Duas palavras casam: iguais, mesmo radical, ou o radical (5+ letras) de uma é começo da outra. */
export function casa(a, b) {
  if (a === b) return true;
  const ra = radical(a), rb = radical(b);
  if (ra.length >= 3 && ra === rb) return true;
  const [c, l] = ra.length <= rb.length ? [ra, b] : [rb, a];
  return c.length >= 5 && l.startsWith(c) && l.length - c.length <= 5;
}

/** Palavras que contam de um texto: 4+ letras (fora das vazias), siglas e nomes próprios de 3 letras. */
export function palavras(txt) {
  const orig = String(txt).split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  const out = [];
  for (const o of orig) {
    const w = norm(o);
    if (MINI.has(w)) continue;
    const sigla = /^[A-Z0-9]{2,6}$/.test(o) && /[A-Z]/.test(o);
    const proprio3 = w.length === 3 && /^\p{Lu}\p{Ll}{2}$/u.test(o);
    if (sigla) out.push({ w, tipo: 'sigla' });
    else if (proprio3) out.push({ w, tipo: 'nome3' });
    else if (w.length >= 4 && !VAZIAS.has(w) && !/^\d+$/.test(w)) out.push({ w, tipo: 'palavra' });
  }
  return out;
}

/** Sigla formada pelas iniciais das palavras de um nome ("Organização das Nações Unidas" -> "onu"). */
function iniciais(txt) {
  const ws = String(txt).split(/[^\p{L}\p{N}]+/u).filter((w) => w && !MINI.has(norm(w)));
  return ws.length >= 2 ? norm(ws.map((w) => w[0]).join('')) : '';
}

/** Analisa uma pergunta. Devolve null ou { nivel, palavras, placar }. */
export function analisar(p) {
  const enunTokens = String(p.pergunta).split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  const enun = enunTokens.map(norm);
  const siglasEnun = new Set(enunTokens.filter((o) => /^[A-Z]{2,6}$/.test(o)).map(norm));
  const placar = p.alternativas.map((alt) => {
    const hits = new Set();
    const toks = new Map(); // palavra da alternativa -> palavras do enunciado com que ela casou
    for (const { w, tipo } of palavras(alt)) {
      const casadas = enun.filter((e, i) =>
        tipo === 'palavra' ? e.length >= 4 && casa(w, e)
        : tipo === 'sigla' ? e === w
        : e === w && /^\p{Lu}/u.test(enunTokens[i])); // nome de 3 letras: só com maiúscula no enunciado
      if (casadas.length) { hits.add(w); toks.set(w, casadas); }
    }
    const ini = iniciais(alt);
    if (ini.length >= 2 && siglasEnun.has(ini)) hits.add(ini.toUpperCase());
    // resposta-sigla cuja expansão está no enunciado
    if (/^[A-Z]{2,6}$/.test(alt.trim())) {
      const s = norm(alt.trim());
      for (let i = 0; i + s.length <= enunTokens.length; i++) {
        const pedaco = enunTokens.slice(i).filter((w) => !MINI.has(norm(w))).slice(0, s.length);
        if (pedaco.length === s.length && norm(pedaco.map((w) => w[0]).join('')) === s && pedaco.every((w) => /^\p{Lu}/u.test(w))) {
          hits.add(alt.trim());
          break;
        }
      }
    }
    return { alt, hits: [...hits], toks };
  });
  const r = placar.find((x) => x.alt === p.resposta);
  if (!r || !r.hits.length) return null;
  const outros = placar.filter((x) => x.alt !== p.resposta);
  const maxOutros = Math.max(...outros.map((x) => x.hits.length));
  // palavra exclusiva: casa com o enunciado e com nenhuma palavra de nenhuma errada (a regra antiga, com radical)
  const palavrasErradas = outros.flatMap((x) => palavras(x.alt).map((t) => t.w));
  // (e a palavra do enunciado que ela casou também não casa com nenhuma errada: "Sergipe" casa com Sergipano e Sergipense)
  const tokOutros = new Set(outros.flatMap((x) => [...x.toks.values()].flat()));
  const exclusivas = r.hits.filter(
    (h) => !outros.some((x) => x.hits.includes(h)) && !palavrasErradas.some((w) => casa(norm(h), w)) && !(r.toks.get(h) || []).some((t) => tokOutros.has(t)),
  );
  if (!exclusivas.length && r.hits.length <= maxOutros) return null;
  return { nivel: exclusivas.length ? 'forte' : 'parcial', palavras: r.hits, exclusivas, placar: placar.map((x) => x.hits.length) };
}

function bancoPublicado() {
  return JSON.parse(execSync('git show origin/main:perguntas.json', { cwd: RAIZ_REPO, maxBuffer: 1 << 28 }).toString('utf8'));
}

function lerLotes(faixa) {
  const [a, b] = faixa.split('-').map(Number);
  const itens = [];
  for (let n = a; n <= (b || a); n++) {
    const nome = `lote-${String(n).padStart(3, '0')}`;
    const lote = JSON.parse(readFileSync(join(PASTA_LOTES, `${nome}.json`), 'utf8'));
    for (const p of lote) if (p.status !== 'descartada') itens.push({ origem: `${nome}:${p.id}`, p });
  }
  return itens;
}

if (process.argv[1] && /(^|[\\/])entrega\.mjs$/.test(process.argv[1])) {
  const args = process.argv.slice(2);
  const opt = (k) => (args.includes(k) ? args[args.indexOf(k) + 1] : null);
  let itens;
  if (opt('--lotes')) itens = lerLotes(opt('--lotes'));
  else {
    const banco = opt('--arquivo') ? JSON.parse(readFileSync(opt('--arquivo'), 'utf8')) : bancoPublicado();
    itens = banco.map((p, i) => ({ origem: `banco:${i}`, p }));
  }
  const ignorar = new Map();
  if (opt('--ignorar')) {
    for (const c of JSON.parse(readFileSync(opt('--ignorar'), 'utf8'))) ignorar.set(c.classificacao === 'falso-alarme' ? JSON.stringify([c.antes.pergunta, c.antes.resposta]) : '', true);
  }
  const sus = [];
  for (const { origem, p } of itens) {
    const r = analisar(p);
    if (!r) continue;
    if (ignorar.has(JSON.stringify([p.pergunta, p.resposta]))) continue;
    sus.push({ origem, ...r, pergunta: p.pergunta, resposta: p.resposta, alternativas: p.alternativas, categoria: p.categoria, dificuldade: p.dificuldade });
  }
  const fortes = sus.filter((s) => s.nivel === 'forte').length;
  console.log(`${itens.length} perguntas, ${sus.length} suspeitas (${fortes} fortes, ${sus.length - fortes} parciais)`);
  if (opt('--json')) writeFileSync(opt('--json'), JSON.stringify(sus, null, 1));
  if (!opt('--json') || args.includes('--mostrar')) {
    for (const s of sus) console.log(`${s.origem} [${s.nivel}:${s.palavras}] ${s.pergunta} => ${s.resposta} | ${s.alternativas.join(' / ')}`);
  }
}
