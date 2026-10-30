#!/usr/bin/env node
// Checagem web da reposição 2 (lotes 115-119). Lê as linhas "#W" da fonte, que vêm logo antes de cada pergunta:
//   #W pt|Título da página|termo1;termo2      -> Wikipédia pt (ou en), conteúdo bruto via API, com redirecionamento
//   #W web|consulta                          -> conferido à mão por WebSearch (só listado aqui)
// Para cada pergunta: usa a página (baixada em lotes de até 20 títulos por chamada, com cache em disco), procura
// os termos sem caixa e sem acento e diz OK (todos os termos, com o 1º e os outros a até 600 caracteres),
// LONGE (todos, mas distantes), FALTA (termo ausente) ou SEM PAGINA. Log das chamadas em fontes/reposicao-2-chamadas.log.
// Uso: node expansao/scripts/checar-reposicao-2.mjs expansao/fontes/lote-115.txt [...] [--so-falhas]
import { readFileSync, writeFileSync, existsSync, mkdirSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const UA = 'Mozilla/5.0 (compatible; quiz-checagem/1.0)';
const CACHE = join(process.env.TEMP || '/tmp', 'wiki-cache-reposicao-2');
if (!existsSync(CACHE)) mkdirSync(CACHE, { recursive: true });
const LOG = 'expansao/fontes/reposicao-2-chamadas.log';
const args = process.argv.slice(2);
const soFalhas = args.includes('--so-falhas');
const arquivos = args.filter((a) => !a.startsWith('--'));
const QUEBRA = /\r?\n/;
const norm = (s) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
const chave = (lang, t) => join(CACHE, createHash('sha1').update(lang + '|' + t).digest('hex') + '.json');
const dormir = (ms) => new Promise((r) => setTimeout(r, ms));

async function prebuscar(lang, titulos) {
  const falta = [...new Set(titulos)].filter((t) => !existsSync(chave(lang, t)));
  for (let i = 0; i < falta.length; i += 20) {
    const lote = falta.slice(i, i + 20);
    const url = `https://${lang}.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvslots=main&format=json&formatversion=2&redirects=1&titles=${encodeURIComponent(lote.join('|'))}`;
    let j = null;
    for (let t = 0; t < 6 && !j; t++) {
      try {
        const r = await fetch(url, { headers: { 'User-Agent': UA } });
        if (r.status === 429) { console.error('429, esperando'); await dormir(30000 * (t + 1)); continue; }
        if (r.ok) j = await r.json();
      } catch { await dormir(3000); }
    }
    if (!j) { console.error('falhou o lote', lote.join(' | ')); continue; }
    const mapa = {};
    for (const n of j.query.normalized || []) mapa[n.from] = n.to;
    const red = {};
    for (const n of j.query.redirects || []) red[n.from] = n.to;
    const pags = Object.fromEntries((j.query.pages || []).map((p) => [p.title, p]));
    for (const t of lote) {
      let tt = mapa[t] || t;
      tt = red[tt] || tt;
      const p = pags[tt];
      const texto = p && p.revisions ? p.revisions[0].slots.main.content : null;
      writeFileSync(chave(lang, t), JSON.stringify({ titulo: tt, texto }));
    }
    appendFileSync(LOG, new Date().toISOString() + ' ' + lang + '.wikipedia (' + lote.length + ' páginas) ' + lote.join(' | ') + '\n');
    await dormir(2000);
  }
}
const pagina = (lang, titulo) => (existsSync(chave(lang, titulo)) ? JSON.parse(readFileSync(chave(lang, titulo), 'utf8')) : { titulo, texto: null });

function perto(txt, termos) {
  const t = norm(txt);
  const ts = termos.map(norm);
  const aus = termos.filter((x, i) => !t.includes(ts[i]));
  if (aus.length) return 'FALTA:' + aus.join(',');
  if (ts.length < 2) return 'OK';
  let i = t.indexOf(ts[0]);
  while (i >= 0) {
    const janela = t.slice(Math.max(0, i - 600), i + 600 + ts[0].length);
    if (ts.slice(1).every((x) => janela.includes(x))) return 'OK';
    i = t.indexOf(ts[0], i + 1);
  }
  return 'LONGE';
}

const pedidos = {};
for (const arq of arquivos) {
  for (const l of readFileSync(arq, 'utf8').split(QUEBRA)) {
    if (!l.startsWith('#W ')) continue;
    const p = l.slice(3).trim().split('|');
    if (p[0] !== 'web') (pedidos[p[0]] = pedidos[p[0]] || []).push(p[1]);
  }
}
for (const [lang, ts] of Object.entries(pedidos)) await prebuscar(lang, ts);

let total = 0, ok = 0;
const res = [];
for (const arq of arquivos) {
  let w = null;
  for (const l of readFileSync(arq, 'utf8').split(QUEBRA)) {
    if (l.startsWith('#W ')) { w = l.slice(3).trim(); continue; }
    if (!l.trim() || l.startsWith('#')) continue;
    total++;
    const c = l.split('|');
    const resumo = `${c[1]} ${c[3].slice(0, 70)} => ${c[4]}`;
    if (!w) { res.push(['SEM #W', resumo]); continue; }
    const p = w.split('|');
    w = null;
    if (p[0] === 'web') { res.push(['WEB', resumo + '  [' + p[1] + ']']); continue; }
    const pg = pagina(p[0], p[1]);
    if (!pg.texto) { res.push(['SEM PAGINA ' + p[1], resumo]); continue; }
    const st = perto(pg.texto, (p[2] || '').split(';').filter(Boolean));
    if (st === 'OK') ok++;
    res.push([st, resumo + `  [${p[0]}: ${pg.titulo}]`]);
  }
}
for (const [s, r] of res) if (!soFalhas || s !== 'OK') console.log(s.padEnd(12), r);
console.log(`\n${total} perguntas, ${ok} OK pela Wikipédia, ${res.filter((r) => r[0] === 'WEB').length} para WebSearch`);
