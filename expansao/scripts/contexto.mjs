#!/usr/bin/env node
// CONTEXTO BARATO (zero IA): antes de gerar um microtema, lista até N perguntas que já tocam nele
// (banco atual + novas), para usar como "já existe, não repetir".
// Uso: node expansao/scripts/contexto.mjs "Categoria" "termo1" "termo2" ... [--n 20]
// Ordena pela quantidade de termos que aparecem na pergunta/resposta.
import { lerBancoAtual, listarLotes, lerJson, limpar } from './lib.mjs';

const args = process.argv.slice(2);
const iN = args.indexOf('--n');
const N = iN >= 0 ? parseInt(args[iN + 1], 10) : 20;
const resto = args.filter((_, i) => i !== iN && i !== iN + 1);
const [cat, ...termos] = resto;
const ts = termos.map((t) => ' ' + limpar(t) + ' ');
const todas = [
  ...lerBancoAtual().map((p, i) => ({ ...p, ref: `banco:${i}` })),
  ...listarLotes().flatMap((f) => lerJson(f)).filter((p) => p.status !== 'descartada').map((p) => ({ ...p, ref: `id:${p.id}` })),
];
const achadas = todas
  .filter((p) => !cat || cat === '*' || p.categoria === cat)
  .map((p) => {
    const txt = ' ' + limpar(p.pergunta + ' ' + p.resposta) + ' ';
    return { p, n: ts.filter((t) => txt.includes(t)).length };
  })
  .filter((x) => x.n > 0)
  .sort((a, b) => b.n - a.n)
  .slice(0, N);
console.log(`# Já existe (${achadas.length}${achadas.length === N ? '+' : ''}), não repetir:`);
for (const { p } of achadas) console.log(`- ${p.pergunta} => ${p.resposta}`);
