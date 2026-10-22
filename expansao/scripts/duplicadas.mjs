#!/usr/bin/env node
// Detector de perguntas duplicadas (v2). Código puro, ZERO uso de IA. As regras ficam em semelhanca.mjs.
//
// Uso:
//   node expansao/scripts/duplicadas.mjs                 -> confere todos os lotes e grava dup/dup_ref/dup_regra
//   node expansao/scripts/duplicadas.mjs lote-006.json   -> confere só esse lote (contra banco + todas as outras novas)
//   node expansao/scripts/duplicadas.mjs --descartar     -> além de marcar, muda "dup: certa" para status "descartada"
//   node expansao/scripts/duplicadas.mjs --banco         -> procura duplicadas DENTRO do banco atual (só relatório, demora)
//   node expansao/scripts/duplicadas.mjs --teste         -> casos de teste (inclui os 15 descartes do conferente)
//
// dup_ref: "banco:<índice>" (posição em perguntas.json) ou "id:<id>" (outra pergunta nova).
// Calibração (out/2026) com as 485 aprovadas e os 15 descartes do conferente-v1:
//   pega 13 de 15 como "certa" (+1 como "suspeita"); falso "certa" em 24 de 485 (4,9%); 13 suspeitas. IDF só do banco.

import { basename } from 'node:path';
import { lerBancoAtual, listarLotes, lerJson, gravarJson, RAIZ_EXP } from './lib.mjs';
import { preparar, comparar, piorOcorrencia } from './semelhanca.mjs';
import { join } from 'node:path';

export { preparar, comparar, piorOcorrencia };
const PESO = { nao: 0, suspeita: 1, certa: 2 };

function rodarLotes(filtro, descartar) {
  const banco = lerBancoAtual().map((p, i) => preparar(p, `banco:${i}`));
  const lotes = listarLotes().map((arq) => ({ arq, dados: lerJson(arq) }));
  // Ordem global das perguntas novas: lote a lote, na ordem do arquivo.
  const todas = [];
  for (const l of lotes) for (const p of l.dados) if (p.status !== 'descartada') todas.push(preparar(p, `id:${p.id}`));
  const posicao = new Map(todas.map((t, i) => [t.ref, i]));

  const tot = { certa: 0, suspeita: 0, nao: 0 };
  for (const l of lotes) {
    if (filtro.length && !filtro.includes(basename(l.arq))) continue;
    let mudou = false;
    for (const p of l.dados) {
      if (p.status === 'descartada') continue;
      const alvo = preparar(p, `id:${p.id}`);
      const i = posicao.get(alvo.ref);
      // Contra o banco atual e contra as novas que vieram ANTES (a mais nova é que fica marcada).
      const r1 = piorOcorrencia(alvo, banco);
      const r2 = piorOcorrencia(alvo, todas.slice(0, i));
      const r = PESO[r2.nivel] > PESO[r1.nivel] || (PESO[r2.nivel] === PESO[r1.nivel] && r2.sim > r1.sim) ? r2 : r1;
      if (p.dup !== r.nivel || (p.dup_ref ?? null) !== r.ref) mudou = true;
      p.dup = r.nivel;
      p.dup_ref = r.ref;
      p.dup_regra = r.regra || null;
      tot[r.nivel]++;
      if (descartar && r.nivel === 'certa') {
        p.status = 'descartada';
        p.motivo = `duplicada certa de ${r.ref} (${r.regra})`;
        mudou = true;
      }
    }
    if (mudou) gravarJson(l.arq, l.dados);
    const c = { certa: 0, suspeita: 0 };
    for (const p of l.dados) if (p.status !== 'descartada' && (p.dup === 'certa' || p.dup === 'suspeita')) c[p.dup]++;
    console.log(`${basename(l.arq)}: certas=${c.certa} suspeitas=${c.suspeita} (válidas)`);
  }
  console.log(`Total conferido: certa=${tot.certa} suspeita=${tot.suspeita} nao=${tot.nao}`);
}

function rodarBanco() {
  const cru = lerBancoAtual();
  const banco = cru.map((p, i) => preparar(p, `banco:${i}`));
  const achados = [];
  for (let i = 0; i < banco.length; i++)
    for (let j = 0; j < i; j++) {
      const r = comparar(banco[i], banco[j]);
      if (r.nivel) achados.push({ ...r, i, j });
    }
  achados.sort((a, b) => (a.nivel === b.nivel ? b.sim - a.sim : a.nivel === 'certa' ? -1 : 1));
  for (const a of achados)
    console.log(`[${a.nivel}] ${a.regra}\n   #${a.j} "${cru[a.j].pergunta}" (${cru[a.j].resposta})\n   #${a.i} "${cru[a.i].pergunta}" (${cru[a.i].resposta})`);
  console.log(`certas=${achados.filter((a) => a.nivel === 'certa').length} suspeitas=${achados.filter((a) => a.nivel === 'suspeita').length}`);
}

function rodarTeste() {
  const cru = lerBancoAtual();
  const banco = cru.map((p, i) => preparar(p, `banco:${i}`));
  const casos = [
    // Reescritas de perguntas existentes -> "certa"
    { esperado: 'certa', p: { categoria: 'Geografia', pergunta: 'Qual o maior oceano do mundo?', resposta: 'Pacífico' } },
    { esperado: 'certa', p: { categoria: 'Geografia', pergunta: 'Qual a capital da Espanha?', resposta: 'Madri' } },
    { esperado: 'certa', p: { categoria: 'Esportes', pergunta: 'Que jogador era chamado de "Anjo das Pernas Tortas"?', resposta: 'Garrincha' } },
    { esperado: 'certa', p: { categoria: 'Ciências', pergunta: 'Qual é o maior lagarto do planeta?', resposta: 'Dragão-de-Komodo' } },
    { esperado: 'certa', p: { categoria: 'Tecnologia', pergunta: 'Quem foi o sucessor de Steve Jobs no cargo de CEO da Apple?', resposta: 'Tim Cook' } },
    { esperado: 'certa', p: { categoria: 'Esportes', pergunta: 'Qual quarterback conquistou sete Super Bowls?', resposta: 'Tom Brady' } },
    { esperado: 'certa|suspeita', p: { categoria: 'Ciências', pergunta: 'Qual é o único número primo que é par?', resposta: 'Dois' } },
    { esperado: 'certa', p: { categoria: 'Geografia', pergunta: 'Qual rio banha a cidade de Florença?', resposta: 'Rio Arno' } },
    // Mesmo fato perguntado ao contrário -> agora "certa" (cruzamento de resposta nos dois sentidos)
    { esperado: 'certa|suspeita', p: { categoria: 'Geografia', pergunta: 'Madri é a capital de qual país?', resposta: 'Espanha' } },
    { esperado: 'certa|suspeita', p: { categoria: 'Tecnologia', pergunta: 'Na maioria dos programas, qual função tem o atalho Ctrl+Z?', resposta: 'Desfazer' } },
    { esperado: 'certa|suspeita', p: { categoria: 'Ciências', pergunta: 'Titã é a maior lua de qual planeta?', resposta: 'Saturno' } },
    // Mesma resposta, fato diferente -> não pode ser "certa"
    { esperado: 'suspeita|nao', p: { categoria: 'Esportes', pergunta: 'Qual ponta do Botafogo driblou meio time na Copa de 1962?', resposta: 'Garrincha' } },
    { esperado: 'nao', p: { categoria: 'Esportes', pergunta: 'Qual seleção venceu a Copa do Mundo de 2022, no Catar?', resposta: 'Argentina' } },
    // Perguntas novas de verdade -> "nao"
    { esperado: 'nao', p: { categoria: 'Ciências', pergunta: 'Qual gás os mergulhadores misturam ao oxigênio no lugar do nitrogênio em mergulhos profundos?', resposta: 'Hélio' } },
    { esperado: 'nao', p: { categoria: 'Geografia', pergunta: 'Qual é a plataforma de streaming do Grupo Globo?', resposta: 'Globoplay' } },
  ];
  let ok = 0;
  for (const c of casos) {
    const r = piorOcorrencia(preparar(c.p, 'teste'), banco);
    const passou = c.esperado.split('|').includes(r.nivel);
    if (passou) ok++;
    const ref = r.ref ? `-> ${r.ref} "${cru[+r.ref.split(':')[1]].pergunta}"` : '';
    console.log(`${passou ? 'OK  ' : 'FALHOU'} esperado=${c.esperado} obtido=${r.nivel} | ${c.p.pergunta} ${ref}`);
  }
  console.log(`${ok}/${casos.length} casos fixos ok`);

  // Os 15 descartes do conferente-v1 (duplicidade disfarçada que o detector v1 deixou passar). Meta: >= 13 "certa".
  const m = lerJson(join(RAIZ_EXP, 'metricas.json'));
  const novas = new Map(listarLotes().flatMap((f) => lerJson(f)).map((p) => [p.id, p]));
  let certas = 0, susp = 0, total = 0;
  for (const l of m.conferencia?.lotes || [])
    for (const d of l.descartes || []) {
      const p = novas.get(d.slice(0, 10));
      if (!p || !/duplicada/.test(d)) continue;
      total++;
      const r = piorOcorrencia(preparar(p, `id:${p.id}`), banco);
      if (r.nivel === 'certa') certas++;
      else if (r.nivel === 'suspeita') susp++;
      console.log(`${r.nivel === 'certa' ? 'PEGOU ' : r.nivel === 'suspeita' ? 'SUSP  ' : 'PERDEU'} ${p.pergunta.slice(0, 70)} => ${p.resposta}  [${r.regra || '-'}]`);
    }
  console.log(`Conferente: ${certas}/${total} como certa, +${susp} como suspeita`);
  if (ok !== casos.length || certas < 13) process.exitCode = 1;
}

const args = process.argv.slice(2);
if (args.includes('--teste')) rodarTeste();
else if (args.includes('--banco')) rodarBanco();
else rodarLotes(args.filter((a) => !a.startsWith('--')).map((a) => basename(a)), args.includes('--descartar'));
