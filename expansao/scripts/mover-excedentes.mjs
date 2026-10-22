#!/usr/bin/env node
// Move as válidas EXCEDENTES de um lote aberto para o próximo (que ainda não foi entregue).
// Excedente = o que passa da cota do lote em cada categoria x dificuldade (mesma conta do faltam.mjs).
// As descartadas ficam no lote de origem (para a métrica de descarte). Nunca mexe em lote fechado.
// Uso: node expansao/scripts/mover-excedentes.mjs lote-026.json lote-027.json
import { join } from 'node:path';
import { existsSync } from 'node:fs';
import { lerJson, gravarJson, PASTA_LOTES, RAIZ_EXP, CATEGORIAS, DIFICULDADES } from './lib.mjs';

const [de, para] = process.argv.slice(2);
const fechados = new Set((lerJson(join(RAIZ_EXP, 'metricas.json')).conferencia?.lotes || []).map((l) => `lote-${l.lote}.json`));
if (fechados.has(de) || fechados.has(para)) { console.error('lote fechado (já conferido): não mexo'); process.exit(1); }
const n = parseInt(de.match(/\d+/)[0], 10);
const [plano, NL, k] = n >= 26 ? ['plano-r3.json', 10, n - 25] : n >= 16 ? ['plano-r2.json', 10, n - 15] : ['plano-r1.json', 10, n - 5];
const metas = lerJson(join(RAIZ_EXP, plano)).metas;
const origem = lerJson(join(PASTA_LOTES, de));
const arqDestino = join(PASTA_LOTES, para);
const destino = existsSync(arqDestino) ? lerJson(arqDestino) : [];
const mover = new Set();
for (const c of CATEGORIAS)
  for (const d of DIFICULDADES) {
    const m = metas[c][d];
    const cota = Math.round((m * k) / NL) - Math.round((m * (k - 1)) / NL);
    const val = origem.filter((p) => p.status !== 'descartada' && p.categoria === c && p.dificuldade === d);
    for (const p of val.slice(cota)) mover.add(p.id); // fica com as primeiras, move as últimas
  }
const fica = origem.filter((p) => !mover.has(p.id));
const vai = origem.filter((p) => mover.has(p.id));
gravarJson(join(PASTA_LOTES, de), fica);
gravarJson(arqDestino, [...destino, ...vai]);
console.log(`${de}: ficaram ${fica.filter((p) => p.status !== 'descartada').length} válidas; ${vai.length} movidas para ${para}`);
