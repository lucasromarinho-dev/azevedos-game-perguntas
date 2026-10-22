#!/usr/bin/env node
// SONDA DE NOMES (zero IA): recebe uma lista de nomes (entidades) e diz quais NÃO aparecem em nenhuma pergunta
// do banco nem das novas (enunciado ou resposta). Nome ausente = assunto livre para virar candidata.
// É bem mais barato que escrever fatos: só o nome, separado por vírgula ou um por linha.
// Uso: node expansao/scripts/ausentes.mjs arquivo.txt [--todos] [--registrar]  (--registrar grava o custo em metricas.json > listas)
//   --todos: mostra também quantas vezes cada nome presente aparece
// Linhas começando com "#" são comentário; "@grupo Nome" agrupa (só para a saída).
// Grafia normalizada como no detector v3 (sem acento, plural simples, Dust 2 = Dust2...).
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { lerBancoAtual, listarLotes, lerJson, gravarJson, RAIZ_EXP } from './lib.mjs';
import { tokens } from './cruzamento.mjs';

const args = process.argv.slice(2);
const arq = args.find((a) => !a.startsWith('--'));
const todas = [...lerBancoAtual(), ...listarLotes().flatMap((f) => lerJson(f)).filter((p) => p.status !== 'descartada')];
const textos = todas.map((p) => ' ' + tokens(p.pergunta + ' ' + p.resposta + ' ' + p.alternativas.join(' ')).join(' ') + ' ');
const soEnunciado = todas.map((p) => ' ' + tokens(p.pergunta + ' ' + p.resposta).join(' ') + ' ');

let grupo = '';
const saida = new Map();
for (const linha of readFileSync(arq, 'utf8').split(/\r?\n/)) {
  const l = linha.trim();
  if (!l || l.startsWith('#')) continue;
  if (l.startsWith('@')) { grupo = l.slice(1).replace(/^grupo\s*/, ''); continue; }
  for (const nome of l.split(',').map((x) => x.trim()).filter(Boolean)) {
    const t = ' ' + tokens(nome).join(' ') + ' ';
    if (t.trim() === '') continue;
    const n = soEnunciado.filter((x) => x.includes(t)).length;
    const nAlt = textos.filter((x) => x.includes(t)).length - n;
    if (!saida.has(grupo)) saida.set(grupo, { livres: [], presentes: [] });
    if (n === 0) saida.get(grupo).livres.push(nAlt ? `${nome} (só como alternativa x${nAlt})` : nome);
    else saida.get(grupo).presentes.push(`${nome} x${n}`);
  }
}
if (args.includes('--registrar')) {
  // métrica da sonda em metricas.json > listas (conta como lista, para o custo por válida)
  const camM = join(RAIZ_EXP, 'metricas.json');
  const met = lerJson(camM);
  const linhas = readFileSync(arq, 'utf8').split(/\r?\n/).filter((l) => l.trim() && !l.startsWith('#') && !l.startsWith('@'));
  const chars = linhas.join('\n').length;
  let liv = 0, pres = 0;
  for (const s of saida.values()) { liv += s.livres.length; pres += s.presentes.length; }
  met.listas = met.listas || {};
  met.listas[arq.replace(/^.*candidatas[\/\\]/, '')] = { tipo: 'sonda de nomes', linhas: liv + pres, existem: pres, risco: 0, livres: liv,
    caracteres: chars, tokens_aprox: Math.round(chars / 3.5) };
  gravarJson(camM, met);
}
for (const [g, s] of saida) {
  const tot = s.livres.length + s.presentes.length;
  console.log(`[${g || 'sem grupo'}] livres ${s.livres.length}/${tot}: ${s.livres.join(', ')}`);
  if (args.includes('--todos')) console.log(`   presentes: ${s.presentes.join(', ')}`);
}
