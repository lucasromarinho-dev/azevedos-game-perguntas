#!/usr/bin/env node
// Checagem automática contra o texto dos verbetes da Wikipédia (pt e en) baixados por baixar-wiki.mjs.
// Zero IA. Para cada pergunta procura a resposta (ou, nas "nao-e", as três erradas) no verbete do filme do grupo.
// Números e ordens fora da lista de filmes ficam para a checagem manual (verificacao-manual.json: id -> fonte curta).
// Uso: node verificar.mjs PASTA_WIKI   -> grava verificacao.json e lista o que falta
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = join(dirname(fileURLToPath(import.meta.url)), '..');
const WIKI = process.argv[2];
const filmes = JSON.parse(readFileSync(join(AQUI, 'filmes.json'), 'utf8'));
const manual = existsSync(join(AQUI, 'verificacao-manual.json')) ? JSON.parse(readFileSync(join(AQUI, 'verificacao-manual.json'), 'utf8')) : {};
const n = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
// tira a marcação do wikitexto e deixa só letras e números separados por um espaço
const limpa = (t) => n(t.replace(/\[\[(?:[^\]|]*\|)?([^\]]*)\]\]/g, '$1').replace(/'{2,}/g, '')).replace(/[^a-z0-9]+/g, ' ');
const VAZIAS = new Set('com dos das uma para que nao por the and pelo pela seu sua como mais'.split(' '));
const cache = new Map();
function texto(slug) {
  if (!cache.has(slug)) {
    let t = '';
    for (const l of ['pt', 'en']) { const a = join(WIKI, `${slug}.${l}.txt`); if (existsSync(a)) t += '\n' + readFileSync(a, 'utf8'); }
    for (const extra of readdirSync(WIKI).filter((f) => f.startsWith(`${slug}+`))) t += '\n' + readFileSync(join(WIKI, extra), 'utf8');
    cache.set(slug, ' ' + limpa(t) + ' ');
  }
  return cache.get(slug);
}
// remakes e continuações também valem como fonte do grupo
const paginas = (g) => Object.keys(filmes).filter((s) => s === g || s === `${g}-2019` || s === `${g}-2017` || s === `${g}-2016` || s === `${g}-2023` || s === `${g}-2015` || s === `${g}-2025` || (g === 'bela-adormecida' && s === 'malevola') || (g === '101-dalmatas' && s === 'cruella'));
function achar(alvo, slugs) {
  // a expressão inteira tem que aparecer como trecho contínuo no texto limpo do verbete
  const a = ' ' + limpa(alvo).trim() + ' ';
  if (a.trim().length < 2) return null;
  for (const s of slugs) { const t = texto(s); if (t && t.includes(a)) return s; }
  return null;
}
const titulo = Object.fromEntries(Object.entries(filmes).map(([s, [, pt, ano]]) => [n(pt), ano]));
const out = {};
const falta = [];
let porAuto = 0, porManual = 0;
for (const f of readdirSync(join(AQUI, 'lotes')).filter((x) => x.endsWith('.json')).sort()) {
  for (const p of JSON.parse(readFileSync(join(AQUI, 'lotes', f), 'utf8'))) {
    if (p.status === 'descartada') continue;
    const m = manual[p.id];
    if (typeof m === 'string') { out[p.id] = m; porManual++; continue; }
    if (m && m.buscar) {
      const sl = m.em || paginas(p.grupo);
      const achados = m.buscar.map((t) => achar(t, sl));
      if (achados.every(Boolean)) { out[p.id] = 'wiki pt/en: ' + filmes[achados[0]][0] + ' ("' + m.buscar.join('", "') + '")'; porAuto++; continue; }
    }
    const slugs = paginas(p.grupo);
    const erradas = p.alternativas.filter((a) => a !== p.resposta);
    let ok = null;
    if (p.formato === 'nao-e') {
      const achados = erradas.map((e) => achar(e, slugs));
      if (achados.every(Boolean)) ok = `wiki pt/en: ${filmes[achados[0]][0]} (as 3 erradas constam)`;
    } else if (p.formato === 'qual-primeiro') {
      const anos = p.alternativas.map((a) => titulo[n(a)]);
      if (anos.every(Boolean) && Math.min(...anos) === titulo[n(p.resposta)] && anos.filter((x) => x === titulo[n(p.resposta)]).length === 1)
        ok = 'wiki: anos de lançamento dos verbetes (filmes.json)';
    } else if (p.formato !== 'numero') {
      const s = achar(p.resposta, slugs);
      if (s) ok = `wiki pt/en: ${filmes[s][0]}`;
    }
    if (ok) { out[p.id] = ok; porAuto++; } else falta.push(`${f}:${p.id} [${p.grupo}${p.formato ? ' ' + p.formato : ''}] ${p.pergunta} => ${p.resposta}`);
  }
}
writeFileSync(join(AQUI, 'verificacao.json'), JSON.stringify(out, null, 1) + '\n');
console.log(`auto ${porAuto}, manual ${porManual}, faltam ${falta.length}`);
for (const x of falta) console.log(x);
