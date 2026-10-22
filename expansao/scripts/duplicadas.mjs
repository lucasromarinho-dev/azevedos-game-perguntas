#!/usr/bin/env node
// Detector de perguntas duplicadas. Código puro, ZERO uso de IA.
//
// Uso:
//   node expansao/scripts/duplicadas.mjs                 -> confere todos os lotes e grava dup/dup_ref
//   node expansao/scripts/duplicadas.mjs lote-003.json   -> confere só esse lote (contra banco + todos os outros lotes)
//   node expansao/scripts/duplicadas.mjs --descartar     -> além de marcar, muda "dup: certa" para status "descartada"
//   node expansao/scripts/duplicadas.mjs --banco         -> procura duplicadas DENTRO do banco atual (só relatório)
//   node expansao/scripts/duplicadas.mjs --teste         -> roda os casos de teste embutidos
//
// Regras (similaridade = maior valor entre Jaccard de palavras-chave e Jaccard de trigramas):
//   certa    : mesma resposta normalizada E similaridade >= LIM_CERTA
//   suspeita : mesma resposta E similaridade >= LIM_SUSP_MESMA
//              OU similaridade >= LIM_SUSP_DIFERENTE com resposta diferente
//              OU pergunta "invertida" (a resposta de uma aparece no enunciado da outra e vice-versa)
//   nao      : nenhum dos casos
// dup_ref: "banco:<índice>" (posição em perguntas.json) ou "id:<id>" (outra pergunta nova).

import { basename, join } from 'node:path';
import {
  lerBancoAtual, listarLotes, lerJson, gravarJson, palavrasChave, trigramas, jaccard,
  respostaNorm, limpar, PASTA_LOTES,
} from './lib.mjs';

export const LIM_CERTA = 0.45;
export const LIM_SUSP_MESMA = 0.25;
export const LIM_SUSP_DIFERENTE = 0.6;

/** Pré-calcula o que a comparação precisa. */
export function preparar(p, ref) {
  const pal = new Set(palavrasChave(p.pergunta));
  return {
    ref,
    resp: respostaNorm(p.resposta),
    pal,
    tri: trigramas(p.pergunta),
    texto: ' ' + limpar(p.pergunta) + ' ',
    categoria: p.categoria,
  };
}

function similaridade(a, b) {
  return Math.max(jaccard(a.pal, b.pal), jaccard(a.tri, b.tri));
}

function contemResposta(texto, resp) {
  return resp.length >= 4 && texto.includes(' ' + resp + ' ');
}

/** Respostas iguais, ou uma contida na outra como palavras inteiras ("pacifico" x "oceano pacifico"). */
export function mesmaResposta(r1, r2) {
  if (r1 === r2) return true;
  const [c, l] = r1.length <= r2.length ? [r1, r2] : [r2, r1];
  return c.length >= 4 && (' ' + l + ' ').includes(' ' + c + ' ');
}

/** Compara A com B. Devolve { nivel: 'certa'|'suspeita'|null, sim } */
export function comparar(a, b) {
  const sim = similaridade(a, b);
  const mesma = mesmaResposta(a.resp, b.resp);
  if (mesma && sim >= LIM_CERTA) return { nivel: 'certa', sim };
  if (mesma && sim >= LIM_SUSP_MESMA) return { nivel: 'suspeita', sim };
  if (!mesma && sim >= LIM_SUSP_DIFERENTE) return { nivel: 'suspeita', sim };
  // Pergunta invertida: "Capital da França?" (Paris) x "Paris é capital de qual país?" (França)
  if (!mesma && a.categoria === b.categoria && contemResposta(a.texto, b.resp) && contemResposta(b.texto, a.resp))
    return { nivel: 'suspeita', sim };
  return { nivel: null, sim };
}

/** Procura a pior ocorrência (certa > suspeita; empate: maior similaridade) numa lista de candidatos. */
export function piorOcorrencia(alvo, candidatos) {
  let melhor = { nivel: 'nao', ref: null, sim: 0 };
  const peso = { nao: 0, suspeita: 1, certa: 2 };
  for (const c of candidatos) {
    const r = comparar(alvo, c);
    if (!r.nivel) continue;
    if (peso[r.nivel] > peso[melhor.nivel] || (peso[r.nivel] === peso[melhor.nivel] && r.sim > melhor.sim))
      melhor = { nivel: r.nivel, ref: c.ref, sim: r.sim };
  }
  return melhor;
}

function rodarLotes(filtro, descartar) {
  const banco = lerBancoAtual().map((p, i) => preparar(p, `banco:${i}`));
  const arquivos = listarLotes();
  // Ordem global das perguntas novas: lote a lote, na ordem do arquivo.
  const todas = [];
  const lotes = arquivos.map((arq) => ({ arq, dados: lerJson(arq) }));
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
      const peso = { nao: 0, suspeita: 1, certa: 2 };
      const r = peso[r2.nivel] > peso[r1.nivel] || (peso[r2.nivel] === peso[r1.nivel] && r2.sim > r1.sim) ? r2 : r1;
      const novoDup = r.nivel;
      const novoRef = r.ref;
      if (p.dup !== novoDup || (p.dup_ref ?? null) !== novoRef) mudou = true;
      p.dup = novoDup;
      p.dup_ref = novoRef;
      tot[novoDup]++;
      if (descartar && novoDup === 'certa') {
        p.status = 'descartada';
        p.motivo = `duplicada certa de ${novoRef}`;
        mudou = true;
      }
    }
    if (mudou) gravarJson(l.arq, l.dados);
    const c = { certa: 0, suspeita: 0 };
    for (const p of l.dados) if (p.dup === 'certa' || p.dup === 'suspeita') c[p.dup]++;
    console.log(`${basename(l.arq)}: certas=${c.certa} suspeitas=${c.suspeita}`);
  }
  console.log(`Total conferido: certa=${tot.certa} suspeita=${tot.suspeita} nao=${tot.nao}`);
}

function rodarBanco() {
  const cru = lerBancoAtual();
  const banco = cru.map((p, i) => preparar(p, i));
  const achados = [];
  for (let i = 0; i < banco.length; i++)
    for (let j = 0; j < i; j++) {
      const r = comparar(banco[i], banco[j]);
      if (r.nivel) achados.push({ nivel: r.nivel, sim: r.sim, i, j });
    }
  achados.sort((a, b) => (a.nivel === b.nivel ? b.sim - a.sim : a.nivel === 'certa' ? -1 : 1));
  for (const a of achados)
    console.log(
      `[${a.nivel} ${a.sim.toFixed(2)}] #${a.j} "${cru[a.j].pergunta}" (${cru[a.j].resposta})  x  #${a.i} "${cru[a.i].pergunta}" (${cru[a.i].resposta})`,
    );
  console.log(`certas=${achados.filter((a) => a.nivel === 'certa').length} suspeitas=${achados.filter((a) => a.nivel === 'suspeita').length}`);
}

function rodarTeste() {
  const cru = lerBancoAtual();
  const banco = cru.map((p, i) => preparar(p, `banco:${i}`));
  const achar = (txt) => cru.findIndex((p) => p.pergunta === txt);
  const casos = [
    // Reescritas de perguntas existentes -> esperado "certa"
    { esperado: 'certa', p: { categoria: 'Geografia', pergunta: 'Qual o maior oceano do mundo?', resposta: 'Pacífico' } },
    { esperado: 'certa', p: { categoria: 'Geografia', pergunta: 'Qual a capital da Espanha?', resposta: 'Madri' } },
    { esperado: 'certa', p: { categoria: 'Esportes', pergunta: 'Que jogador era chamado de "Anjo das Pernas Tortas"?', resposta: 'Garrincha' } },
    { esperado: 'certa', p: { categoria: 'Ciências', pergunta: 'Qual é o maior lagarto do planeta?', resposta: 'Dragão-de-Komodo' } },
    { esperado: 'certa', p: { categoria: 'Tecnologia', pergunta: 'Quem foi o sucessor de Steve Jobs no cargo de CEO da Apple?', resposta: 'Tim Cook' } },
    // Mesmo fato perguntado ao contrário -> esperado "suspeita"
    { esperado: 'suspeita', p: { categoria: 'Geografia', pergunta: 'Madri é a capital de qual país?', resposta: 'Espanha' } },
    // Mesma resposta, assunto parecido mas fato diferente -> "suspeita" ou "nao"
    { esperado: 'suspeita|nao', p: { categoria: 'Esportes', pergunta: 'Qual ponta do Botafogo driblou meio time na Copa de 1962?', resposta: 'Garrincha' } },
    // Pergunta nova de verdade -> "nao"
    // Achados reais: estas "novas" já existiam no banco (a 1a reescrita, a 2a invertida)
    { esperado: 'certa', p: { categoria: 'Geografia', pergunta: 'Qual rio banha a cidade de Florença?', resposta: 'Rio Arno' } },
    { esperado: 'suspeita', p: { categoria: 'Ciências', pergunta: 'Titã é a maior lua de qual planeta?', resposta: 'Saturno' } },
    // Pergunta nova de verdade -> "nao"
    { esperado: 'nao', p: { categoria: 'Geografia', pergunta: 'Qual estado brasileiro tem a cidade de Paraty como patrimônio da UNESCO?', resposta: 'Rio de Janeiro' } },
    { esperado: 'nao', p: { categoria: 'Ciências', pergunta: 'Qual gás os mergulhadores misturam ao oxigênio no lugar do nitrogênio em mergulhos profundos?', resposta: 'Hélio' } },
  ];
  let ok = 0;
  for (const c of casos) {
    const r = piorOcorrencia(preparar(c.p, 'teste'), banco);
    const passou = c.esperado.split('|').includes(r.nivel);
    if (passou) ok++;
    const ref = r.ref ? `-> ${r.ref} "${cru[+r.ref.split(':')[1]].pergunta}"` : '';
    console.log(`${passou ? 'OK  ' : 'FALHOU'} esperado=${c.esperado} obtido=${r.nivel} sim=${r.sim.toFixed(2)} | ${c.p.pergunta} ${ref}`);
  }
  void achar;
  console.log(`${ok}/${casos.length} casos ok`);
  if (ok !== casos.length) process.exitCode = 1;
}

const args = process.argv.slice(2);
if (args.includes('--teste')) rodarTeste();
else if (args.includes('--banco')) rodarBanco();
else rodarLotes(args.filter((a) => !a.startsWith('--')).map((a) => basename(a)), args.includes('--descartar'));
void join; void PASTA_LOTES;
