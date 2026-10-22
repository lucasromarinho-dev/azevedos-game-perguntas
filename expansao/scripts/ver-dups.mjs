#!/usr/bin/env node
// Mostra lado a lado as perguntas marcadas como duplicada (certa/suspeita) e a pergunta parecida.
// Uso: node expansao/scripts/ver-dups.mjs lote-001.json [suspeita|certa]
import { join } from 'node:path';
import { lerJson, lerBancoAtual, listarLotes, PASTA_LOTES } from './lib.mjs';
const [arq, nivel] = process.argv.slice(2);
const banco = lerBancoAtual();
const novas = new Map(listarLotes().flatMap((f) => lerJson(f)).map((p) => [p.id, p]));
for (const p of lerJson(join(PASTA_LOTES, arq))) {
  if (p.status === 'descartada' || !p.dup || p.dup === 'nao' || (nivel && p.dup !== nivel)) continue;
  const [tipo, ref] = p.dup_ref.split(':');
  const q = tipo === 'banco' ? banco[+ref] : novas.get(ref);
  console.log(`[${p.dup}] ${p.id} ${p.pergunta} => ${p.resposta}\n      ~ ${p.dup_ref} ${q.pergunta} => ${q.resposta}`);
}
