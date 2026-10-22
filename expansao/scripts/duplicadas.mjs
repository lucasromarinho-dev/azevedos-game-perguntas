#!/usr/bin/env node
// Detector de perguntas duplicadas (v3). Código puro, ZERO uso de IA.
// Duas camadas, fica a pior marca: semelhanca.mjs (v2: texto e IDF) e cruzamento.mjs (v3: resposta e nomes próprios
// de uma pergunta procurados no texto da outra, nos dois sentidos, com grafia normalizada).
// LOTES FECHADOS (já conferidos, listados em metricas.json > conferencia) NUNCA são regravados.
//
// Uso:
//   node expansao/scripts/duplicadas.mjs                 -> confere todos os lotes ABERTOS e grava dup/dup_ref/dup_regra
//   node expansao/scripts/duplicadas.mjs lote-006.json   -> confere só esse lote (contra banco + todas as outras novas)
//   node expansao/scripts/duplicadas.mjs --descartar     -> além de marcar, muda "dup: certa" para status "descartada"
//   node expansao/scripts/duplicadas.mjs --banco         -> procura duplicadas DENTRO do banco atual (só relatório, demora)
//   node expansao/scripts/duplicadas.mjs --teste         -> casos de teste + descartes do conferente + falsos positivos nas conferidas
//
// dup_ref: "banco:<índice>" (posição em perguntas.json) ou "id:<id>" (outra pergunta nova).
// Calibração (out/2026) com as 485 aprovadas e os 15 descartes do conferente-v1:
//   pega 13 de 15 como "certa" (+1 como "suspeita"); falso "certa" em 24 de 485 (4,9%); 13 suspeitas. IDF só do banco.

import { basename } from 'node:path';
import { lerBancoAtual, listarLotes, lerJson, gravarJson, RAIZ_EXP } from './lib.mjs';
import { preparar, comparar, piorOcorrencia } from './semelhanca.mjs';
import { indexar, procurarE } from './cruzamento.mjs';
import { join } from 'node:path';

export { preparar, comparar, piorOcorrencia };
const PESO = { nao: 0, suspeita: 1, certa: 2 };

/** Junta as duas camadas: semelhança (v2) e cruzamento de entidades (v3). Fica com a pior. */
function pior(...rs) {
  return rs.reduce((m, r) => (PESO[r.nivel] > PESO[m.nivel] || (PESO[r.nivel] === PESO[m.nivel] && r.sim > m.sim) ? r : m));
}

/** Lotes já conferidos (metricas.json > conferencia.lotes): fechados, ninguém regrava. */
export function lotesFechados() {
  const m = lerJson(join(RAIZ_EXP, 'metricas.json'));
  return new Set((m.conferencia?.lotes || []).map((l) => `lote-${l.lote}.json`));
}

function rodarLotes(filtro, descartar) {
  const cruBanco = lerBancoAtual();
  const banco = cruBanco.map((p, i) => preparar(p, `banco:${i}`));
  const lotes = listarLotes().map((arq) => ({ arq, dados: lerJson(arq) }));
  // Ordem global das perguntas novas: lote a lote, na ordem do arquivo.
  const todas = [];
  const crus = [];
  for (const l of lotes) for (const p of l.dados) if (p.status !== 'descartada') { todas.push(preparar(p, `id:${p.id}`)); crus.push({ p, ref: `id:${p.id}` }); }
  const posicao = new Map(todas.map((t, i) => [t.ref, i]));
  const indice = indexar([...cruBanco.map((p, i) => ({ p, ref: `banco:${i}` })), ...crus]);

  const tot = { certa: 0, suspeita: 0, nao: 0 };
  const fechados = lotesFechados();
  for (const l of lotes) {
    if (filtro.length && !filtro.includes(basename(l.arq))) continue;
    if (fechados.has(basename(l.arq))) { if (filtro.length) console.log(`${basename(l.arq)}: lote fechado (já conferido), não mexo`); continue; }
    let mudou = false;
    for (const p of l.dados) {
      if (p.status === 'descartada') continue;
      const alvo = preparar(p, `id:${p.id}`);
      const i = posicao.get(alvo.ref);
      // Contra o banco atual e contra as novas que vieram ANTES (a mais nova é que fica marcada).
      const r1 = piorOcorrencia(alvo, banco);
      const r2 = piorOcorrencia(alvo, todas.slice(0, i));
      // camada 3: cruzamento de entidades, contra o banco e as novas anteriores
      const r3 = procurarE(p, indice, (ref) => ref === alvo.ref || (ref.startsWith('id:') && posicao.get(ref) >= i));
      const r = pior(r1, r2, r3);
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

function rodarTeste(args) {
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
    // v3: o banco já tem "Garrincha brilhou no Botafogo" (pista + resposta entregues) -> agora conta como duplicada
    // Mesma resposta, fato diferente -> não pode ser "certa"
    { esperado: 'certa|suspeita', p: { categoria: 'Esportes', pergunta: 'Qual ponta do Botafogo driblou meio time na Copa de 1962?', resposta: 'Garrincha' } },
    { esperado: 'nao', p: { categoria: 'Esportes', pergunta: 'Qual seleção venceu a Copa do Mundo de 2022, no Catar?', resposta: 'Argentina' } },
    // Perguntas novas de verdade -> "nao"
    { esperado: 'nao', p: { categoria: 'Ciências', pergunta: 'Qual gás os mergulhadores misturam ao oxigênio no lugar do nitrogênio em mergulhos profundos?', resposta: 'Hélio' } },
    { esperado: 'nao', p: { categoria: 'Geografia', pergunta: 'Qual é a plataforma de streaming do Grupo Globo?', resposta: 'Globoplay' } },
  ];
  // Índice: banco + novas não descartadas (a duplicada pode ser de outra pergunta nova, ex.: Código Napoleônico x piloto)
  const novasValidas = listarLotes().flatMap((f) => lerJson(f)).filter((p) => p.status !== 'descartada');
  const indice = indexar([...cru.map((p, i) => ({ p, ref: `banco:${i}` })), ...novasValidas.map((p) => ({ p, ref: `id:${p.id}` }))]);
  const indiceBanco = indexar(cru.map((p, i) => ({ p, ref: `banco:${i}` })));
  // casos fixos: só contra o banco; descartes e falsos positivos: contra banco + novas (menos ela mesma)
  const detectar = (p, ref) => pior(piorOcorrencia(preparar(p, ref), banco), procurarE(p, ref === 'teste' ? indiceBanco : indice, (r) => r === ref));
  let ok = 0;
  for (const c of casos) {
    const r = detectar(c.p, 'teste');
    const passou = c.esperado.split('|').includes(r.nivel);
    if (passou) ok++;
    const ref = r.ref ? `-> ${r.ref} "${cru[+r.ref.split(':')[1]].pergunta}"` : '';
    console.log(`${passou ? 'OK  ' : 'FALHOU'} esperado=${c.esperado} obtido=${r.nivel} | ${c.p.pergunta} ${ref}`);
  }
  console.log(`${ok}/${casos.length} casos fixos ok`);

  // Descartes do conferente por duplicidade (piloto: lotes 001-005; rodada 1: lotes 006-015).
  // Meta da rodada 2: >= 90% dos 76 da rodada 1 como "certa", sem falso positivo em massa nas conferidas.
  const m = lerJson(join(RAIZ_EXP, 'metricas.json'));
  const novas = new Map(listarLotes().flatMap((f) => lerJson(f)).map((p) => [p.id, p]));
  const ver = args.includes('-v');
  const grupos = { piloto: { certas: 0, susp: 0, total: 0 }, rodada1: { certas: 0, susp: 0, total: 0 }, rodada2: { certas: 0, susp: 0, total: 0 } };
  const descIds = new Set();
  for (const l of m.conferencia?.lotes || [])
    for (const d of l.descartes || []) {
      const p = novas.get(d.slice(0, 10));
      if (!p || !/duplicada/.test(d)) continue;
      descIds.add(p.id);
      const g = grupos[l.lote <= '005' ? 'piloto' : l.lote <= '015' ? 'rodada1' : 'rodada2'];
      g.total++;
      const r = detectar(p, `id:${p.id}`);
      if (r.nivel === 'certa') g.certas++;
      else if (r.nivel === 'suspeita') g.susp++;
      if (ver || r.nivel !== 'certa') console.log(`${r.nivel === 'certa' ? 'PEGOU ' : r.nivel === 'suspeita' ? 'SUSP  ' : 'PERDEU'} ${p.pergunta.slice(0, 70)} => ${p.resposta}  [${r.regra || '-'}]`);
    }
  for (const [k, g] of Object.entries(grupos))
    console.log(`Conferente ${k}: ${g.certas}/${g.total} como certa (${((100 * g.certas) / (g.total || 1)).toFixed(0)}%), +${g.susp} como suspeita`);
  // Falsos positivos: perguntas que o conferente aprovou (status conferida/aprovada) e o detector marcaria.
  let fp = 0, fs = 0, n = 0;
  for (const p of novas.values()) {
    if (descIds.has(p.id) || !['conferida', 'aprovada'].includes(p.status)) continue;
    n++;
    const r = detectar(p, `id:${p.id}`);
    if (r.nivel === 'certa') fp++;
    else if (r.nivel === 'suspeita') fs++;
  }
  console.log(`Conferidas como boas: ${n}; marcadas certa=${fp} (${((100 * fp) / (n || 1)).toFixed(1)}%), suspeita=${fs}`);
  const r1 = grupos.rodada1, r2 = grupos.rodada2;
  if (ok !== casos.length || r1.certas < 0.9 * r1.total || r2.certas < r2.total) process.exitCode = 1;
}

const args = process.argv.slice(2);
if (args.includes('--teste')) rodarTeste(args);
else if (args.includes('--banco')) rodarBanco();
else rodarLotes(args.filter((a) => !a.startsWith('--')).map((a) => basename(a)), args.includes('--descartar'));
