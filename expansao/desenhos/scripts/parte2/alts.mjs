import { readFileSync } from 'node:fs';
const X = 'C:/Users/lucas/Documents/Projetos Claude/azevedos-game-perguntas/expansao/';
const n = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const eu = JSON.parse(readFileSync('todas.json', 'utf8'));
const lote = new Map(); // id -> lote
for (const f of ['004','005','006']) for (const p of JSON.parse(readFileSync(X+'desenhos/lotes/desenhos-'+f+'.json','utf8'))) lote.set(p.id, f);
const v12 = JSON.parse(readFileSync(X + 'correcoes/perguntas-v12.json', 'utf8')).filter((p) => p.categoria === 'Entretenimento');
const outros = [...JSON.parse(readFileSync(X + 'desenhos/selecao-disney-450.json', 'utf8'))];
for (const f of ['001','002','003']) outros.push(...JSON.parse(readFileSync(X+'desenhos/lotes/desenhos-'+f+'.json','utf8')));
const cont = (arr) => { const m = new Map(); for (const p of arr) { const k = n(p.resposta); m.set(k, (m.get(k) || 0) + 1); } return m; };
const cV = cont(v12), cO = cont(outros);
const meu = new Map(); for (const p of eu) { const k = n(p.resposta); if (!meu.has(k)) meu.set(k, []); meu.get(k).push(p); }
let tot = 0;
for (const p of eu) for (const a of p.alternativas) {
  if (a === p.resposta) continue; const k = n(a);
  const m = (meu.get(k) || []).filter((q) => q.id !== p.id);
  const tags = [];
  if (m.some((q) => lote.get(q.id) === lote.get(p.id))) tags.push('LOTE');
  else if (m.length) tags.push('PARTE2');
  if (cO.get(k)) tags.push('DESENHOS(' + cO.get(k) + ')');
  if (cV.get(k) && cV.get(k) <= 4) tags.push('RARA-v12(' + cV.get(k) + ')');
  if (tags.length) { tot++; console.log(tags.join(' '), '|', p.obra, '|', p.pergunta.slice(0, 60), '=>', p.resposta, '| errada:', a); }
}
console.log('total', tot);
