// Cruza as 300 com v12, seleção Disney 450, lotes desenhos 001-003 e entre si (cruzamento.mjs + semelhanca.mjs)
import { readFileSync, existsSync } from 'node:fs';
import { indexar, procurarE } from 'file:///C:/Users/lucas/Documents/Projetos Claude/azevedos-game-perguntas/expansao/scripts/cruzamento.mjs';
import { preparar, piorOcorrencia } from 'file:///C:/Users/lucas/Documents/Projetos Claude/azevedos-game-perguntas/expansao/scripts/semelhanca.mjs';
const X = 'C:/Users/lucas/Documents/Projetos Claude/azevedos-game-perguntas/expansao/';
const minhas = JSON.parse(readFileSync('todas.json', 'utf8'));
const outros = [];
JSON.parse(readFileSync(X + 'correcoes/perguntas-v12.json', 'utf8')).forEach((p, i) => outros.push({ p, ref: 'v12:' + i }));
JSON.parse(readFileSync(X + 'desenhos/selecao-disney-450.json', 'utf8')).forEach((p, i) => outros.push({ p, ref: 'disney:' + i }));
for (const n of ['001', '002', '003']) { const f = X + 'desenhos/lotes/desenhos-' + n + '.json'; if (existsSync(f)) JSON.parse(readFileSync(f, 'utf8')).forEach((p, i) => outros.push({ p, ref: 'd' + n + ':' + i })); }
minhas.forEach((p) => outros.push({ p, ref: 'eu:' + p.id }));
const idx = indexar(outros);
const prep = outros.map(({ p, ref }) => preparar(p, ref));
const byRef = new Map(outros.map((o) => [o.ref, o.p]));
let n = 0;
for (const p of minhas) {
  const r1 = procurarE(p, idx, (ref) => ref === 'eu:' + p.id);
  const r2 = piorOcorrencia(preparar(p, 'eu:' + p.id), prep);
  for (const r of [r1, r2]) if (r.nivel !== 'nao') { n++; const b = byRef.get(r.ref); console.log(r.nivel.toUpperCase(), '|', p.id, p.pergunta, '=>', p.resposta, '\n    ', r.ref, b.pergunta, '=>', b.resposta, '|', r.regra); }
}
console.log('marcas', n, 'contra', outros.length);
