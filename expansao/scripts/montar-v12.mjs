#!/usr/bin/env node
// Monta o CANDIDATO v12 do banco principal em expansao/correcoes/perguntas-v12.json. NÃO mexe no perguntas.json
// nem na main; nada é publicado. Ordem, a partir de origin/main:perguntas.json (v11, 66c0421, 13.986):
//   1. remove as 707 de correcoes/entretenimento-remocao-2.json (campo remover; confere posição + objeto);
//   2. troca a grafia "Sirigueijo" por "Siriguejo" (dublagem, Wikipédia pt) nos itens que ficam;
//   3. acrescenta no fim as `conferida` dos lotes 115 a 123 (reposição 2), na ordem dos lotes, só com os 5 campos
//      (as `reserva` e `descartada` ficam fora e aparecem no resumo).
// Grava minificado, em uma linha, UTF-8 sem BOM, NFC e sem quebra de linha no fim, e valida:
//   itens não tocados idênticos e na mesma ordem relativa; só os 5 campos na ordem do jogo; 4 alternativas distintas
//   com a resposta; 0 enunciados repetidos (também sem caixa, acento e espaços); entrega.mjs no banco inteiro
//   (nenhuma suspeita que já não existia na v11); montarBanco real (npx tsx montarbanco-checar.mts);
//   contagem por categoria e por categoria x dificuldade contra a v11.
// Uso: node expansao/scripts/montar-v12.mjs [--banco X.json] [--sem-montarbanco] [--json resumo.json]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { RAIZ_EXP, RAIZ_REPO, PASTA_LOTES, lerJson, CATEGORIAS, DIFICULDADES } from './lib.mjs';
import { analisar, norm } from './entrega.mjs';

const args = process.argv.slice(2);
const opt = (k) => (args.includes(k) ? args[args.indexOf(k) + 1] : null);
const CAMPOS = ['categoria', 'dificuldade', 'pergunta', 'resposta', 'alternativas'];
const PERGUNTAS_TS = process.env.QUEST_PERGUNTAS_TS ||
  'C:/Users/lucas/Documents/Projetos Claude/quest-online-wt-juncao/src/jogos/quest/shared/perguntas.ts';
const SAIDA = join(RAIZ_EXP, 'correcoes', 'perguntas-v12.json');
const LOTES = ['115', '116', '117', '118', '119', '120', '121', '122', '123'];
const TOTAL_ESPERADO = 13986;
const nfc = (s) => String(s).normalize('NFC');
const so5 = (q) => Object.fromEntries(CAMPOS.map((k) => [k, Array.isArray(q[k]) ? q[k].map(nfc) : nfc(q[k])]));
const igual = (a, b) => JSON.stringify(CAMPOS.map((k) => a[k])) === JSON.stringify(CAMPOS.map((k) => b[k]));
const chave = (s) => norm(s).replace(/[^a-z0-9]+/g, ' ').trim();
const chaveSimples = (s) => s.toLowerCase().replace(/\s+/g, ' ').trim();

let erros = 0;
const falha = (m) => { erros++; console.log('ERRO:', m); };

const banco = opt('--banco')
  ? JSON.parse(readFileSync(opt('--banco'), 'utf8'))
  : JSON.parse(execSync('git show origin/main:perguntas.json', { cwd: RAIZ_REPO, maxBuffer: 1 << 28 }).toString('utf8'));
if (banco.length !== TOTAL_ESPERADO) falha(`banco de partida com ${banco.length} (esperado ${TOTAL_ESPERADO})`);

// 1) remoção de Entretenimento (segunda limpeza)
const lista = lerJson(join(RAIZ_EXP, 'correcoes', 'entretenimento-remocao-2.json'));
const remover = new Set();
for (const it of lista.remover) {
  const q = banco[it.indice];
  if (!q || !igual(q, it.pergunta)) { falha(`${it.ref}: o banco não bate com a lista de remoção`); continue; }
  remover.add(it.indice);
}
if (remover.size !== 707) falha(`remoção com ${remover.size} (esperado 707)`);
const removidasPorDif = Object.fromEntries(DIFICULDADES.map((d) => [d, [...remover].filter((i) => banco[i].dificuldade === d).length]));

// 2) grafia Siriguejo
const ERRADA = /Sirigueijo/g, CERTA = 'Siriguejo';
const trocas = new Map(); // índice v11 -> item corrigido
const registroGrafia = [];
banco.forEach((p, i) => {
  if (remover.has(i)) return;
  const s = JSON.stringify(so5(p));
  if (!ERRADA.test(s)) return;
  ERRADA.lastIndex = 0;
  const depois = JSON.parse(s.replace(ERRADA, CERTA));
  trocas.set(i, depois);
  registroGrafia.push({ origem: `banco:${i}`, antes: so5(p), depois });
});

// 3) reposição conferida (lotes 115 a 123)
const reposicao = [];
const porLote = {};
const fora = { reserva: [], descartada: [] };
for (const n of LOTES) {
  porLote[n] = 0;
  for (const f of lerJson(join(PASTA_LOTES, `lote-${n}.json`))) {
    if (f.status === 'conferida') {
      if (!f.verificado_web_conferente) falha(`lote-${n}:${f.id} conferida sem verificado_web_conferente`);
      reposicao.push(so5(f)); porLote[n]++;
    } else if (f.status === 'reserva' || f.status === 'descartada') fora[f.status].push(`${n}:${f.id} ${f.dificuldade}`);
    else falha(`lote-${n}:${f.id} com status ${f.status}`);
  }
}
const repoPorDif = Object.fromEntries(DIFICULDADES.map((d) => [d, reposicao.filter((q) => q.dificuldade === d).length]));
if (reposicao.some((q) => /Sirigueijo/.test(JSON.stringify(q)))) falha('reposição com "Sirigueijo"');

// montagem
const v12 = [];
banco.forEach((p, i) => { if (!remover.has(i)) v12.push(trocas.has(i) ? trocas.get(i) : so5(p)); });
const nBase = v12.length;
v12.push(...reposicao);
if (v12.length !== TOTAL_ESPERADO) falha(`v12 com ${v12.length} (esperado ${TOTAL_ESPERADO})`);
const texto = JSON.stringify(v12).normalize('NFC');
writeFileSync(SAIDA, texto, 'utf8'); // sem BOM e sem quebra de linha no fim

// validações
const bytes = readFileSync(SAIDA);
const semBom = !(bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf);
const semQuebraFinal = bytes[bytes.length - 1] !== 0x0a;
const umaLinha = !bytes.includes(0x0a) && !bytes.includes(0x0d);
const ehNfc = bytes.toString('utf8') === bytes.toString('utf8').normalize('NFC');
if (!semBom) falha('arquivo com BOM');
if (!semQuebraFinal) falha('quebra de linha no fim');
if (!umaLinha) falha('arquivo com mais de uma linha');
if (!ehNfc) falha('arquivo fora de NFC');

// a) não tocados idênticos e na mesma ordem relativa
const naoTocadosAntes = banco.filter((_, i) => !remover.has(i) && !trocas.has(i)).map((q) => JSON.stringify(q));
const naoTocadosV12 = [];
{
  let k = 0;
  banco.forEach((_, i) => { if (!remover.has(i)) { if (!trocas.has(i)) naoTocadosV12.push(JSON.stringify(v12[k])); k++; } });
}
const ordemOk = naoTocadosAntes.length === naoTocadosV12.length && naoTocadosAntes.every((s, j) => s === naoTocadosV12[j]);
if (!ordemOk) falha('itens não tocados mudaram ou saíram de ordem');

// b) campos, alternativas, repetidos
let campos = 0, alts = 0;
const vistos = new Map(), vistosSimples = new Map(), dups = [], dupsSimples = [];
v12.forEach((p, i) => {
  if (Object.keys(p).join() !== CAMPOS.join()) campos++;
  if (!Array.isArray(p.alternativas) || p.alternativas.length !== 4 || new Set(p.alternativas).size !== 4 || !p.alternativas.includes(p.resposta)) alts++;
  if (vistosSimples.has(chaveSimples(p.pergunta))) dupsSimples.push(i); else vistosSimples.set(chaveSimples(p.pergunta), i);
  const k = chave(p.pergunta);
  if (vistos.has(k)) dups.push(`${vistos.get(k)} e ${i}: ${p.pergunta}`); else vistos.set(k, i);
});
if (campos) falha(`${campos} itens fora dos 5 campos`);
if (alts) falha(`${alts} itens com alternativas inválidas`);
if (dups.length) { falha(`${dups.length} enunciados repetidos`); dups.slice(0, 10).forEach((d) => console.log('  repetido', d)); }

// c) entrega no banco inteiro: só valem suspeitas que já estavam na v11
const suspV11 = new Set(banco.filter((p) => analisar(p)).map((p) => chave(p.pergunta)));
const suspV12 = v12.map((p, i) => [p, i]).filter(([p]) => analisar(p));
const novas = suspV12.filter(([p]) => !suspV11.has(chave(p.pergunta))).map(([p, i]) => `${i}: ${p.pergunta} => ${p.resposta}`);
if (novas.length) { falha(`${novas.length} suspeita(s) nova(s) de entrega`); novas.forEach((r) => console.log('  nova', r)); }

// d) montarBanco real
let montar = null;
if (!args.includes('--sem-montarbanco')) {
  const checar = join(RAIZ_EXP, 'scripts', 'montarbanco-checar.mts');
  const cwdJogo = join(PERGUNTAS_TS, '..', '..', '..', '..', '..');
  const out = execSync(`npx tsx "${checar}" "${SAIDA}"`, {
    cwd: existsSync(cwdJogo) ? cwdJogo : RAIZ_REPO, encoding: 'utf8',
    env: { ...process.env, QUEST_PERGUNTAS_TS: pathToFileURL(PERGUNTAS_TS).href },
  }).trim().split('\n').pop();
  montar = JSON.parse(out);
  if (montar.descartadas !== 0 || montar.validas !== v12.length) falha(`montarBanco: ${out}`);
}

// e) contagens
const contar = (arr) => Object.fromEntries(CATEGORIAS.map((c) => [c, Object.fromEntries(DIFICULDADES.map((d) => [d, arr.filter((q) => q.categoria === c && q.dificuldade === d).length]))]));
const porCat = (arr) => Object.fromEntries(CATEGORIAS.map((c) => [c, arr.filter((q) => q.categoria === c).length]));
const catV11 = porCat(banco), catV12 = porCat(v12);
const catIguais = CATEGORIAS.every((c) => catV11[c] === catV12[c]);
if (!catIguais) falha('contagem por categoria diferente da v11');

const resumo = {
  banco_main: banco.length,
  removidas: remover.size,
  removidas_por_dificuldade: removidasPorDif,
  grafia_siriguejo: registroGrafia,
  base_apos_remocao: nBase,
  reposicao_conferidas: reposicao.length,
  reposicao_por_lote: porLote,
  reposicao_por_dificuldade: repoPorDif,
  reposicao_fora: { reserva: fora.reserva.length, descartada: fora.descartada.length, reservas: fora.reserva },
  total_v12: v12.length,
  validacao: {
    nao_tocados_identicos_e_em_ordem: ordemOk,
    nao_tocados: naoTocadosAntes.length,
    campos_fora_do_padrao: campos,
    alternativas_com_problema: alts,
    enunciados_repetidos_exatos: dupsSimples.length,
    enunciados_repetidos_sem_caixa_acento: dups.length,
    entrega_suspeitas_v11: suspV11.size,
    entrega_suspeitas_v12: suspV12.length,
    entrega_suspeitas_novas: novas.length,
    montarBanco: montar,
    sem_bom: semBom, uma_linha: umaLinha, sem_quebra_final: semQuebraFinal, nfc: ehNfc,
  },
  por_categoria: { v11: catV11, v12: catV12 },
  por_categoria_dificuldade: { v11: contar(banco), v12: contar(v12) },
};
console.log(JSON.stringify(resumo, null, 1));
if (opt('--json')) writeFileSync(opt('--json'), JSON.stringify(resumo, null, 2) + '\n');
if (erros) { console.log(`${erros} erro(s)`); process.exitCode = 1; } else console.log('OK: candidato v12 gravado em', SAIDA);
