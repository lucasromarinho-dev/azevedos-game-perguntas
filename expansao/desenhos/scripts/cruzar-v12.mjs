// Cruza as 1.000 conferidas do banco Disney com o banco principal candidato v12 (correcoes/perguntas-v12.json).
// Usa o detector de entidades (scripts/cruzamento.mjs) nos dois sentidos e grava as marcas para revisão manual.
// Uso: node expansao/desenhos/scripts/cruzar-v12.mjs saida.json
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { indexar, procurarE } from '../../scripts/cruzamento.mjs';
const EXP = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const v12 = JSON.parse(readFileSync(join(EXP, 'correcoes', 'perguntas-v12.json'), 'utf8'));
const pasta = join(EXP, 'disney', 'lotes');
const pool = [];
for (const f of readdirSync(pasta).filter((f) => /^disney-\d+\.json$/.test(f)).sort())
  for (const p of JSON.parse(readFileSync(join(pasta, f), 'utf8'))) if (p.status === 'conferida') pool.push({ ...p, lote: f.slice(0, -5) });
const idx = indexar(v12.map((p, i) => ({ p, ref: 'v12:' + i })));
const out = [];
for (const p of pool) {
  const r = procurarE(p, idx);
  if (r.nivel !== 'nao') { const b = v12[+r.ref.slice(4)]; out.push({ id: p.id, nivel: r.nivel, regra: r.regra, ref: r.ref, disney: p.pergunta + ' => ' + p.resposta, v12: b.pergunta + ' => ' + b.resposta }); }
}
writeFileSync(process.argv[2], JSON.stringify(out, null, 1));
console.log('pool', pool.length, 'marcadas', out.length, 'certa', out.filter((o) => o.nivel === 'certa').length);
