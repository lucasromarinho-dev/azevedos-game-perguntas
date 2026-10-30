import { readFileSync, readdirSync, existsSync } from 'node:fs';
const [,, LOTES, WIKI] = process.argv;
const norm = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9*]+/g, ' ').trim();
const cache = {};
const txt = (g, l) => { const k = g + l; if (!(k in cache)) { const f = `${WIKI}/${g}.${l}.txt`; cache[k] = existsSync(f) ? ' ' + norm(readFileSync(f, 'utf8')) + ' ' : ''; } return cache[k]; };
const tem = (t, s) => { const n = norm(s); return n.length > 0 && t.includes(' ' + n + ' '); };
let ok = 0, falta = [];
for (const f of readdirSync(LOTES).filter((x) => /^disney-\d{3}\.json$/.test(x)).sort()) {
  for (const p of JSON.parse(readFileSync(`${LOTES}/${f}`, 'utf8'))) {
    if (p.status === 'descartada') continue;
    const pt = txt(p.grupo, 'pt'), en = txt(p.grupo, 'en');
    const alvo = p.pergunta.startsWith('Qual dest') && /NÃO/.test(p.pergunta) ? p.alternativas.filter((a) => a !== p.resposta) : [p.resposta];
    const r = alvo.map((a) => tem(pt, a) ? 'pt' : tem(en, a) ? 'en' : null);
    if (r.every(Boolean)) ok++; else falta.push(`${p.id}|${p.dificuldade[0]}|${p.categoria.slice(0,3)}|${p.grupo}|${p.pergunta}|${p.resposta}`);
  }
}
console.log('achadas', ok, 'faltam', falta.length); console.log(falta.join('\n'));
