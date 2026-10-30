#!/usr/bin/env node
// Sorteia a amostra da conferência v11 nas trocas da correção "entrega" (só as do banco: reescrever + alternativas).
// Semente 20261108, mulberry32 + Fisher-Yates na ordem do arquivo. Zero IA.
// Uso: node expansao/scripts/amostra-entrega-v11.mjs [N=150] [--todas]  -> imprime antes/depois, uma por bloco
import { join } from 'node:path';
import { RAIZ_EXP, lerJson } from './lib.mjs';

export function mulberry32(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

export function sortear(lista, n, semente = 20261108) {
  const r = mulberry32(semente);
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a.slice(0, n);
}

const correcoes = lerJson(join(RAIZ_EXP, 'correcoes', 'entrega-resposta.json'));
export const trocas = correcoes.filter((c) => c.origem.startsWith('banco:') && (c.acao === 'reescrever' || c.acao === 'alternativas'));

if ((process.argv[1] || '').endsWith('amostra-entrega-v11.mjs')) {
  const n = Number(process.argv.find((x) => /^\d+$/.test(x)) || 150);
  const lista = process.argv.includes('--todas') ? trocas : sortear(trocas, n);
  console.log(`trocas do banco: ${trocas.length}; mostrando ${lista.length}`);
  for (const c of lista) {
    const a = c.antes, d = c.depois;
    const er = (q) => q.alternativas.filter((x) => x !== q.resposta).join(' / ');
    console.log(`## ${c.origem} ${c.acao} ${a.categoria}/${a.dificuldade}->${d.dificuldade}`);
    console.log(`  A: ${a.pergunta} => ${a.resposta} | x ${er(a)}`);
    if (d.pergunta !== a.pergunta) console.log(`  D: ${d.pergunta}`);
    if (er(d) !== er(a)) console.log(`  DX: ${er(d)}`);
  }
}
