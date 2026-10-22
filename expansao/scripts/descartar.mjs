#!/usr/bin/env node
// Marca perguntas como descartadas, com motivo.
// Uso: node expansao/scripts/descartar.mjs lote-001.json "motivo" id1 id2 ...
//      motivo especial "dup": usa "mesmo fato que <dup_ref> (suspeita confirmada)"
import { join } from 'node:path';
import { lerJson, gravarJson, PASTA_LOTES } from './lib.mjs';
const [arq, motivo, ...ids] = process.argv.slice(2);
const caminho = join(PASTA_LOTES, arq);
const lote = lerJson(caminho);
let n = 0;
for (const p of lote)
  if (ids.includes(p.id)) {
    p.status = 'descartada';
    p.motivo = motivo === 'dup' ? `mesmo fato que ${p.dup_ref} (suspeita confirmada na geração)` : motivo;
    n++;
  }
gravarJson(caminho, lote);
console.log(`${arq}: ${n} descartada(s) de ${ids.length} id(s) pedidos`);
