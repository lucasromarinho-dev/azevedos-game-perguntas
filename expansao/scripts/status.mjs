#!/usr/bin/env node
// Painel do pipeline: totais por status, categoria e dificuldade, metas do plano e pendências.
// Uso: node expansao/scripts/status.mjs [--pendentes]   (--pendentes lista cada pergunta ainda não aprovada)
import { basename, join } from 'node:path';
import { existsSync } from 'node:fs';
import { listarLotes, lerJson, CATEGORIAS, DIFICULDADES, STATUS, RAIZ_EXP, motivoInvalida } from './lib.mjs';

const lotes = listarLotes().map((arq) => ({ nome: basename(arq), dados: lerJson(arq) }));
const todas = lotes.flatMap((l) => l.dados.map((p) => ({ ...p, lote: l.nome })));
const validas = todas.filter((p) => p.status !== 'descartada');

const conta = (lista, chave) => lista.reduce((m, p) => ((m[chave(p)] = (m[chave(p)] || 0) + 1), m), {});

console.log(`Lotes: ${lotes.length} | perguntas: ${todas.length} | válidas (não descartadas): ${validas.length}`);
console.log('\nPor status:', STATUS.map((s) => `${s}=${todas.filter((p) => p.status === s).length}`).join('  '));

console.log('\nPor lote:');
for (const l of lotes) {
  const c = conta(l.dados, (p) => p.status);
  console.log(`  ${l.nome}: ${STATUS.map((s) => `${s}=${c[s] || 0}`).join(' ')}`);
}

// Metas do plano (expansao/plano.json), se existir
const plano = existsSync(join(RAIZ_EXP, 'plano.json')) ? lerJson(join(RAIZ_EXP, 'plano.json')) : null;
console.log('\nVálidas por categoria x dificuldade' + (plano ? ' (feitas/meta)' : '') + ':');
console.log('  ' + 'Categoria'.padEnd(16) + DIFICULDADES.map((d) => d.padStart(10)).join('') + '     total');
for (const c of CATEGORIAS) {
  let linha = '  ' + c.padEnd(16);
  let tot = 0, totMeta = 0;
  for (const d of DIFICULDADES) {
    const n = validas.filter((p) => p.categoria === c && p.dificuldade === d).length;
    const meta = plano?.metas?.[c]?.[d];
    tot += n; totMeta += meta || 0;
    linha += (meta != null ? `${n}/${meta}` : String(n)).padStart(10);
  }
  console.log(linha + (plano ? `${tot}/${totMeta}` : String(tot)).padStart(10));
}

console.log('\nDuplicidade (válidas):', ['certa', 'suspeita', 'nao'].map((d) => `${d}=${validas.filter((p) => p.dup === d).length}`).join('  '),
  `| sem conferir=${validas.filter((p) => !p.dup).length}`);
console.log('Descartadas por duplicada certa:', todas.filter((p) => p.status === 'descartada' && /duplicada/.test(p.motivo || '')).length);
console.log('Recentes (2020+):', validas.filter((p) => p.recente).length);

const pos = [0, 0, 0, 0];
for (const p of validas) pos[p.alternativas.indexOf(p.resposta)]++;
console.log('Posição da resposta certa (A/B/C/D):', pos.join(' / '));

const invalidas = todas.filter((p) => motivoInvalida(p));
if (invalidas.length) {
  console.log('\nATENÇÃO, inválidas pelo validador do jogo:');
  for (const p of invalidas) console.log(`  ${p.lote} ${p.id}: ${motivoInvalida(p)}`);
}

const susp = validas.filter((p) => p.dup === 'suspeita');
console.log(`\nPendentes: ${validas.filter((p) => p.status === 'gerada').length} aguardando conferência, ` +
  `${validas.filter((p) => p.status === 'conferida').length} aguardando aprovação, ${susp.length} com dup "suspeita" para olhar.`);
if (process.argv.includes('--pendentes'))
  for (const p of validas.filter((p) => p.status !== 'aprovada'))
    console.log(`  [${p.status}${p.dup === 'suspeita' ? ' DUP? ' + p.dup_ref : ''}] ${p.lote} ${p.id} ${p.categoria}/${p.dificuldade}: ${p.pergunta} => ${p.resposta}`);
