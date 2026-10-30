#!/usr/bin/env node
// Desfaz o descarte automático do detector quando a "duplicada certa" é falso positivo (resposta ou termo igual, fato diferente).
// A ficha volta para "gerada", fica com dup "suspeita" e ganha `dup_revisado` com a explicação (como na rodada 7).
// ATENÇÃO: rodar duplicadas.mjs --descartar de novo nesse lote descartaria essas fichas outra vez; para conferir, use sem --descartar.
// Uso: node expansao/scripts/restaurar.mjs lote-086.json "explicação" id1 id2 ...
import { join } from 'node:path';
import { lerJson, gravarJson, PASTA_LOTES } from './lib.mjs';
const [arq, motivo, ...ids] = process.argv.slice(2);
const caminho = join(PASTA_LOTES, arq);
const lote = lerJson(caminho);
let n = 0;
for (const p of lote)
  if (ids.includes(p.id) && (p.status === 'descartada' || p.dup === 'certa')) {
    p.status = 'gerada';
    p.motivo = null;
    p.dup = 'suspeita';
    p.dup_revisado = `${motivo} (ref. ${p.dup_ref})`;
    n++;
  }
gravarJson(caminho, lote);
console.log(`${arq}: ${n} restaurada(s) de ${ids.length} id(s) pedidos`);
