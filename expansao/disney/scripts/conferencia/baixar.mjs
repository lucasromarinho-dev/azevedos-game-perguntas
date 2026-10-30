// Baixa (action=raw) as páginas citadas em verificado_web dos lotes 111-113 e mostra a linha onde a resposta aparece.
import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';
const REPO = 'C:/Users/lucas/Documents/Projetos Claude/azevedos-game-perguntas-repo/expansao/lotes';
const DIR = process.argv[2];
const LOG = join(DIR, '..', 'chamadas.log');
const UA = 'Mozilla/5.0 (compatible; quiz-checker/1.0)';
const extras = process.argv[3] ? JSON.parse(readFileSync(process.argv[3], 'utf8')) : {}; // id -> ["pt:Pagina", ...]
const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const arq = (w, t) => join(DIR, (w + '_' + t).replace(/[^\w\-]+/g, '_').slice(0, 120) + '.txt');
async function pegar(w, t) {
  const f = arq(w, t);
  if (existsSync(f)) return readFileSync(f, 'utf8');
  const url = `https://${w}.wikipedia.org/w/index.php?title=${encodeURIComponent(t.replace(/ /g, '_'))}&action=raw`;
  let txt = '';
  for (let k = 0; k < 3; k++) {
    const r = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
    appendFileSync(LOG, `${new Date().toISOString()} ${r.status} ${w} ${t}\n`);
    if (r.status === 429) { await new Promise((s) => setTimeout(s, 5000)); continue; }
    txt = r.ok ? await r.text() : '';
    break;
  }
  const m = txt.match(/^#(?:REDIRECT|REDIRECIONAMENTO)\s*\[\[([^\]|#]+)/i);
  if (m) { await new Promise((s) => setTimeout(s, 250)); txt = await pegar(w, m[1]); }
  writeFileSync(f, txt);
  await new Promise((s) => setTimeout(s, 250));
  return txt;
}
const out = [];
for (const n of [111, 112, 113]) {
  for (const f of JSON.parse(readFileSync(join(REPO, `lote-${n}.json`), 'utf8'))) {
    if (f.status === 'descartada') continue;
    const fontes = [];
    const v = typeof f.verificado_web === 'string' ? f.verificado_web : '';
    const m = v.match(/^(pt|en)\.wikipedia:\s*(.+)$/);
    if (m) fontes.push([m[1], m[2].trim()]);
    for (const e of extras[f.id] || []) { const [w, ...t] = e.split(':'); fontes.push([w, t.join(':')]); }
    if (!fontes.length) { out.push(`## ${n}:${f.id} SEM FONTE WIKI | ${f.pergunta} => ${f.resposta} (${v})`); continue; }
    const resp = norm(f.resposta);
    const partes = resp.split(/[\s&,]+/).filter((p) => p.length >= 4);
    let linhas = [];
    for (const [w, t] of fontes) {
      const txt = await pegar(w, t);
      const ls = txt.split('\n');
      let achou = ls.filter((l) => norm(l).includes(resp));
      if (!achou.length && partes.length) achou = ls.filter((l) => partes.every((p) => norm(l).includes(p)));
      linhas.push(`[${w}:${t} ${txt.length}b] ` + (achou.length ? achou.slice(0, 3).map((l) => l.slice(0, 400)).join(' || ') : 'RESPOSTA NAO ACHADA'));
    }
    out.push(`## ${n}:${f.id} ${f.dificuldade} | ${f.pergunta} => ${f.resposta}\n` + linhas.join('\n'));
  }
}
writeFileSync(join(DIR, '..', 'relatorio-wiki.txt'), out.join('\n'));
console.log('ok', out.length);
