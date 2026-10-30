// Uso: node expansao/scripts/alternativas-cruzadas.mjs lote-076.json [lote-077.json ...]
// Lista alternativas ERRADAS que são a resposta de outra pergunta: do mesmo lote (sempre) ou do banco/outros lotes
// quando a resposta é rara (até 3 perguntas com ela) e da mesma categoria.
import { readFileSync, readdirSync } from 'node:fs';
import { RAIZ_REPO } from './lib.mjs';
import { join } from 'node:path';
const RAIZ = join(RAIZ_REPO, '/');
const norm = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const banco = JSON.parse(readFileSync(RAIZ + 'perguntas.json', 'utf8')).map((p, i) => ({ ...p, _ref: 'banco:' + i }));
const arqs = readdirSync(RAIZ + 'expansao/lotes').filter((f) => /^lote-\d+\.json$/.test(f));
const lotes = arqs.flatMap((f) => JSON.parse(readFileSync(RAIZ + 'expansao/lotes/' + f, 'utf8')).filter((p) => p.status !== 'descartada').map((p) => ({ ...p, _ref: f.slice(5, 8) + ':' + p.id, _lote: f })));
const todas = [...banco, ...lotes];
const porResp = new Map();
for (const t of todas) { const r = norm(t.resposta); if (!porResp.has(r)) porResp.set(r, []); porResp.get(r).push(t); }
let n = 0;
for (const alvo of process.argv.slice(2)) {
  const qs = JSON.parse(readFileSync(RAIZ + 'expansao/lotes/' + alvo, 'utf8')).filter((p) => p.status !== 'descartada');
  for (const p of qs) {
    for (const a of p.alternativas) {
      if (a === p.resposta) continue;
      const na = norm(a);
      if (na.length < 3) continue;
      const outros = (porResp.get(na) || []).filter((t) => t.id !== p.id);
      const mesmoLote = outros.filter((t) => t._lote === alvo);
      const raros = outros.length <= 3 ? outros.filter((t) => t.categoria === p.categoria && !/^\d/.test(na)) : [];
      const hits = [...new Set([...mesmoLote, ...raros])];
      if (!hits.length) continue;
      n++;
      console.log(`${alvo.slice(5, 8)}:${p.id} [${p.categoria}] ${p.pergunta.slice(0, 70)} => ${p.resposta} | errada "${a}"`);
      for (const h of hits.slice(0, 2)) console.log(`     é resposta de ${h._ref}: ${h.pergunta.slice(0, 70)}`);
    }
  }
}
console.log('total:', n);
