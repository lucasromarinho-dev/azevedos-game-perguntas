#!/usr/bin/env node
// Monta o CANDIDATO v11 do banco principal em expansao/correcoes/perguntas-v11.json. NÃO mexe no perguntas.json
// nem na main; nada é publicado. Ordem, a partir de origin/main:perguntas.json:
//   1. aplica as trocas da correção "entrega" (correcoes/entrega-resposta.json, acao reescrever/alternativas, origem banco:N);
//   2. remove as 8 "remover" da correção entrega e as 286 de correcoes/entretenimento-remocao.json (campo remover).
//      Nas que estão nas duas listas (troca + remoção), a remoção vence;
//   3. acrescenta no fim as `conferida` dos lotes 111 a 113 (reposição), na ordem dos lotes, só com os 5 campos.
// Grava minificado, em uma linha, UTF-8 sem BOM e sem quebra de linha no fim, e valida:
//   itens não tocados idênticos e na mesma ordem relativa; só os 5 campos na ordem do jogo; 4 alternativas distintas
//   com a resposta; 0 enunciados repetidos (também sem caixa, acento e espaços); heurística entrega.mjs (só falsos
//   alarmes conhecidos); montarBanco real do jogo (npx tsx montarbanco-checar.mts); contagem categoria x dificuldade.
// Uso: node expansao/scripts/montar-v11.mjs [--banco X.json] [--sem-montarbanco] [--json resumo.json]
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
const SAIDA = join(RAIZ_EXP, 'correcoes', 'perguntas-v11.json');
const so5 = (q) => Object.fromEntries(CAMPOS.map((k) => [k, Array.isArray(q[k]) ? [...q[k]] : q[k]]));
const igual = (a, b) => JSON.stringify(CAMPOS.map((k) => a[k])) === JSON.stringify(CAMPOS.map((k) => b[k]));
const chave = (s) => norm(s).replace(/[^a-z0-9]+/g, ' ').trim();
const chaveSimples = (s) => s.toLowerCase().replace(/\s+/g, ' ').trim();

let erros = 0;
const falha = (m) => { erros++; console.log('ERRO:', m); };

const banco = opt('--banco')
  ? JSON.parse(readFileSync(opt('--banco'), 'utf8'))
  : JSON.parse(execSync('git show origin/main:perguntas.json', { cwd: RAIZ_REPO, maxBuffer: 1 << 28 }).toString('utf8'));

// 1) trocas e remoções da correção "entrega"
const entrega = lerJson(join(RAIZ_EXP, 'correcoes', 'entrega-resposta.json'));
const trocas = new Map();
const removerEntrega = new Set();
for (const c of entrega) {
  if (!c.origem.startsWith('banco:')) continue;
  const i = Number(c.origem.slice(6));
  if (!banco[i] || !igual(banco[i], c.antes)) { falha(`${c.origem}: o banco não bate com "antes"`); continue; }
  if (c.acao === 'remover') removerEntrega.add(i);
  else if (c.acao === 'reescrever' || c.acao === 'alternativas') trocas.set(i, c.depois);
}

// 2) remoção de Entretenimento
const lista = lerJson(join(RAIZ_EXP, 'correcoes', 'entretenimento-remocao.json'));
const removerEnt = new Set();
for (const it of lista.remover) {
  const q = banco[it.indice];
  if (!q || !igual(q, it.pergunta)) { falha(`${it.ref}: o banco não bate com a lista de remoção`); continue; }
  removerEnt.add(it.indice);
}
const remover = new Set([...removerEntrega, ...removerEnt]);
const nasDuas = [...trocas.keys()].filter((i) => remover.has(i)).sort((a, b) => a - b);
const trocasAplicadas = [...trocas.keys()].filter((i) => !remover.has(i)).length;

// 3) reposição conferida
const reposicao = [];
const descartadasRepo = [];
for (const n of ['111', '112', '113']) {
  for (const f of lerJson(join(PASTA_LOTES, `lote-${n}.json`))) {
    if (f.status === 'conferida') reposicao.push(so5(f));
    else if (f.status === 'descartada') descartadasRepo.push(`${n}:${f.id} ${f.categoria}/${f.dificuldade}`);
    else falha(`lote-${n}:${f.id} com status ${f.status}`);
  }
}

// montagem
const v11 = [];
banco.forEach((p, i) => {
  if (remover.has(i)) return;
  v11.push(so5(trocas.has(i) ? trocas.get(i) : p));
});
const nBase = v11.length;
v11.push(...reposicao);
const texto = JSON.stringify(v11);
writeFileSync(SAIDA, texto, 'utf8'); // sem BOM e sem quebra de linha no fim

// validações
const bytes = readFileSync(SAIDA);
if (bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf) falha('arquivo com BOM');
if (bytes[bytes.length - 1] === 0x0a) falha('quebra de linha no fim');
if (texto.includes('\n')) falha('arquivo com mais de uma linha');

// a) não tocados idênticos e na mesma ordem relativa
const naoTocadosAntes = banco.filter((_, i) => !remover.has(i) && !trocas.has(i)).map((q) => JSON.stringify(so5(q)));
const naoTocadosV11 = [];
{
  let k = 0;
  banco.forEach((_, i) => { if (!remover.has(i)) { if (!trocas.has(i)) naoTocadosV11.push(JSON.stringify(v11[k])); k++; } });
}
const ordemOk = naoTocadosAntes.length === naoTocadosV11.length && naoTocadosAntes.every((s, j) => s === naoTocadosV11[j]);
if (!ordemOk) falha('itens não tocados mudaram ou saíram de ordem');
// os não tocados precisam ser idênticos aos originais byte a byte (sem campos extras no original)
const originaisCom5 = banco.every((q) => Object.keys(q).join() === CAMPOS.join());

// b) campos, alternativas, repetidos
let campos = 0, alts = 0;
const vistos = new Map(), vistosSimples = new Map(), dups = [];
v11.forEach((p, i) => {
  if (Object.keys(p).join() !== CAMPOS.join()) campos++;
  if (!Array.isArray(p.alternativas) || p.alternativas.length !== 4 || new Set(p.alternativas).size !== 4 || !p.alternativas.includes(p.resposta)) alts++;
  for (const [mapa, k] of [[vistos, chave(p.pergunta)], [vistosSimples, chaveSimples(p.pergunta)]]) {
    if (mapa.has(k)) dups.push(`${mapa.get(k)} e ${i}: ${p.pergunta}`); else mapa.set(k, i);
  }
});
if (campos) falha(`${campos} itens fora dos 5 campos`);
if (alts) falha(`${alts} itens com alternativas inválidas`);
if (dups.length) { falha(`${dups.length} enunciados repetidos`); dups.slice(0, 10).forEach((d) => console.log('  repetido', d)); }

// c) heurística de entrega (falsos alarmes já julgados ficam)
const falsos = new Set(entrega.filter((c) => c.classificacao === 'falso-alarme').map((c) => chave(c.antes.pergunta)));
const restantes = [];
let falsosMantidos = 0;
v11.forEach((p, i) => { if (analisar(p)) (falsos.has(chave(p.pergunta)) ? falsosMantidos++ : restantes.push(`${i}: ${p.pergunta} => ${p.resposta}`)); });
if (restantes.length) { falha(`${restantes.length} entrega(s) restante(s)`); restantes.slice(0, 20).forEach((r) => console.log('  resta', r)); }

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
  if (montar.descartadas !== 0 || montar.validas !== v11.length) falha(`montarBanco: ${out}`);
}

// e) contagem categoria x dificuldade
const contar = (arr) => Object.fromEntries(CATEGORIAS.map((c) => [c, Object.fromEntries(DIFICULDADES.map((d) => [d, arr.filter((q) => q.categoria === c && q.dificuldade === d).length]))]));
const antes = contar(banco), depois = contar(v11);

const resumo = {
  banco_main: banco.length,
  trocas_entrega: trocas.size,
  trocas_aplicadas: trocasAplicadas,
  removidas_entrega: removerEntrega.size,
  removidas_entretenimento: removerEnt.size,
  troca_e_remocao_remocao_venceu: nasDuas.map((i) => `banco:${i}`),
  removidas_total: remover.size,
  base_apos_correcoes: nBase,
  reposicao_conferidas: reposicao.length,
  reposicao_descartadas: descartadasRepo,
  total_v11: v11.length,
  validacao: {
    nao_tocados_identicos_e_em_ordem: ordemOk && originaisCom5,
    nao_tocados: naoTocadosAntes.length,
    campos_fora_do_padrao: campos,
    alternativas_com_problema: alts,
    enunciados_repetidos: dups.length,
    entrega_restantes: restantes.length,
    entrega_falsos_alarmes_mantidos: falsosMantidos,
    montarBanco: montar,
    sem_bom_uma_linha_sem_quebra_final: true,
  },
  por_categoria_dificuldade: { antes, depois },
};
console.log(JSON.stringify(resumo, null, 1));
if (opt('--json')) writeFileSync(opt('--json'), JSON.stringify(resumo, null, 2) + '\n');
if (erros) { console.log(`${erros} erro(s)`); process.exitCode = 1; } else console.log('OK: candidato v11 gravado em', SAIDA);
