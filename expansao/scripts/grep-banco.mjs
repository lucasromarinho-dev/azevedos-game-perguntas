#!/usr/bin/env node
// Conta (e mostra até 2) perguntas do banco atual que citam cada termo. Ajuda a escolher assuntos ainda livres.
// Uso: node expansao/scripts/grep-banco.mjs "tacacá" "pão de queijo" ...
import { lerBancoAtual, limpar } from './lib.mjs';
const banco = lerBancoAtual();
for (const termo of process.argv.slice(2)) {
  const t = ' ' + limpar(termo) + ' ';
  const achou = banco.filter((p) => (' ' + limpar(p.pergunta + ' ' + p.resposta) + ' ').includes(t));
  console.log(`${String(achou.length).padStart(3)}  ${termo}${achou.length ? '  | ' + achou.slice(0, 2).map((p) => p.pergunta.slice(0, 60)).join(' || ') : ''}`);
}
