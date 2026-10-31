import { BLOCOS } from './fonte.mjs';
import { pagina, busca, limparWiki } from './wikilib.mjs';
import { writeFileSync } from 'node:fs';
const norm = (s) => ' ' + String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
const cacheN = new Map();
async function texto(ref) {
  if (cacheN.has(ref)) return cacheN.get(ref);
  const [host, t] = ref.split('|');
  let p; try { p = await pagina(host, t); } catch (e) { p = { missing: true, texto: '' }; }
  const r = { titulo: p.titulo || t, host, txt: p.missing ? '' : norm(limparWiki(p.texto)) };
  cacheN.set(ref, r); return r;
}
function acha(txt, key) {
  const k = norm(key).trim(); if (!k) return [];
  const curto = k.replace(/ /g, '').length <= 3;
  const alvo = ' ' + k + (curto ? ' ' : '');
  const pos = []; let i = txt.indexOf(alvo);
  while (i >= 0 && pos.length < 200) { pos.push(i); i = txt.indexOf(alvo, i + 1); }
  return pos;
}
function confere(txt, it) {
  const o = it[4] || {};
  const ks = o.k || [it[2]];
  const posicoes = [];
  for (const k of ks) { const ps = k.split('|').flatMap((a) => acha(txt, a)); if (!ps.length) return false; posicoes.push(ps); }
  if (o.n) { const ns = o.n.split('|').flatMap((a) => acha(txt, a)); return posicoes[0].some((p) => ns.some((q) => Math.abs(p - q) < 400)); }
  return true;
}
const rotulo = (r) => (r.host.startsWith('pt.') ? 'wiki pt: ' : r.host.startsWith('en.') ? 'wiki en: ' : 'fandom pt-br ' + r.host.split('.')[0] + ': ') + r.titulo;
const out = []; let ok = 0;
for (const b of BLOCOS) for (const it of b.itens) {
  const o = it[4] || {};
  let achou = null;
  for (const ref of [...(o.s || []), ...b.fontes]) { const r = await texto(ref); if (r.txt && confere(r.txt, it)) { achou = rotulo(r); break; } }
  if (!achou) {
    for (const host of ['pt.wikipedia.org/w', 'en.wikipedia.org/w']) {
      const k1 = (o.k || [it[2]])[0].split('|')[0];
      let ts = []; try { ts = (await busca(host, `"${k1}" ${b.obra}`)) || []; } catch {}
      for (const t of ts.slice(0, 3)) { const r = await texto(host + '|' + t); if (r.txt && confere(r.txt, it)) { achou = rotulo(r) + ' (busca)'; break; } }
      if (achou) break;
    }
  }
  if (achou) ok++;
  out.push({ obra: b.obra, p: it[1], r: it[2], fonte: achou });
  if (!achou) console.log('FALHA |', b.obra, '|', it[1], '=>', it[2]);
}
writeFileSync('verificacao.json', JSON.stringify(out, null, 1));
console.log('ok', ok, 'de', out.length);
