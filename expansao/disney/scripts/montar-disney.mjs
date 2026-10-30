#!/usr/bin/env node
// Monta os lotes do banco Disney a partir de fontes/disney-NNN.txt. Código puro, zero IA.
// Linha da fonte: CAT|dif|grupo|formato|pergunta|resposta|errada1|errada2|errada3[|fonte manual]
//   CAT: CL (Clássicos Disney), PR (Princesas), PX (Pixar), VI (Vilões), MU (Músicas), MO (Disney Moderno e Bichos)
//   dif: f, m, d   formato: - (normal), nao-e, numero, quem-disse, qual-primeiro, complete
// Linha "X|motivo|<linha original>" = pergunta descartada na checagem (fica no lote com status descartada).
// Uso: node montar-disney.mjs           -> monta todos os lotes e mostra os problemas
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { analisar } from '../../scripts/entrega.mjs';

const AQUI = join(dirname(fileURLToPath(import.meta.url)), '..');
const CATS = { CL: 'Clássicos Disney', PR: 'Princesas', PX: 'Pixar', VI: 'Vilões', MU: 'Músicas', MO: 'Disney Moderno e Bichos' };
const DIFS = { f: 'facil', m: 'medio', d: 'dificil' };
const FORMATOS = new Set(['nao-e', 'numero', 'quem-disse', 'qual-primeiro', 'complete']);
const filmes = JSON.parse(readFileSync(join(AQUI, 'filmes.json'), 'utf8'));
const verif = existsSync(join(AQUI, 'verificacao.json')) ? JSON.parse(readFileSync(join(AQUI, 'verificacao.json'), 'utf8')) : {};

export const normEnun = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();

function embaralhar(alts, id) {
  // ordem determinística a partir do id (posição da resposta varia)
  const h = createHash('sha1').update(id).digest();
  const a = [...alts];
  for (let i = a.length - 1; i > 0; i--) { const j = h[i] % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const fontes = readdirSync(join(AQUI, 'fontes')).filter((f) => /^disney-\d{3}\.txt$/.test(f)).sort();
const problemas = [];
const vistos = new Map();
let total = 0, desc = 0;
for (const f of fontes) {
  const nome = f.replace('.txt', '');
  const linhas = readFileSync(join(AQUI, 'fontes', f), 'utf8').split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
  const lote = [];
  for (let l of linhas) {
    let motivo = null;
    if (l.startsWith('X|')) { const p = l.split('|'); motivo = p[1]; l = p.slice(2).join('|'); }
    const c = l.split('|').map((x) => x.trim());
    if (c.length < 9) { problemas.push(`${nome}: linha curta: ${l}`); continue; }
    const [cat, dif, grupo, fmt, pergunta, resposta, e1, e2, e3, fonteManual] = c;
    const id = createHash('sha1').update(pergunta).digest('hex').slice(0, 10);
    const p = {
      id,
      categoria: CATS[cat],
      dificuldade: DIFS[dif],
      pergunta,
      resposta,
      alternativas: embaralhar([resposta, e1, e2, e3], id),
      status: motivo ? 'descartada' : 'gerada',
      verificado_web: fonteManual || verif[id] || null,
      grupo,
    };
    if (fmt !== '-') p.formato = fmt;
    if (motivo) { p.motivo = motivo; lote.push(p); desc++; continue; }
    const erro = (m) => problemas.push(`${nome}:${id} ${m} :: ${pergunta}`);
    if (!p.categoria) erro('categoria');
    if (!p.dificuldade) erro('dificuldade');
    if (fmt !== '-' && !FORMATOS.has(fmt)) erro('formato ' + fmt);
    if (!filmes[grupo]) erro('grupo sem filme ' + grupo);
    if (new Set(p.alternativas.map((a) => a.toLowerCase())).size !== 4) erro('alternativas repetidas');
    if (/[–—]/.test(l)) erro('travessão');
    if (/\b(atual|atualmente|hoje|recentemente)\b/i.test(pergunta)) erro('palavra que envelhece');
    if (!/[?]$/.test(pergunta) && !/\.\.\.["']?\??$/.test(pergunta) && !/\.\.\.$/.test(pergunta)) erro('sem ? no fim');
    const k = normEnun(pergunta);
    if (vistos.has(k)) erro('enunciado duplicado de ' + vistos.get(k));
    vistos.set(k, `${nome}:${id}`);
    const ent = analisar(p);
    if (ent && ent.nivel === 'forte') erro(`ENTREGA forte [${ent.palavras}] => ${resposta}`);
    else if (ent) erro(`entrega parcial [${ent.palavras}] => ${resposta}`);
    lote.push(p);
    total++;
  }
  writeFileSync(join(AQUI, 'lotes', `${nome}.json`), JSON.stringify(lote, null, 1) + '\n');
}
console.log(`${fontes.length} lotes, ${total} válidas, ${desc} descartadas`);
for (const x of problemas) console.log(x);
