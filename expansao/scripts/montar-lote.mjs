#!/usr/bin/env node
// Converte uma "fonte" compacta (texto, uma pergunta por linha) em fichas no lote JSON.
// Uso: node expansao/scripts/montar-lote.mjs expansao/fontes/lote-001.txt 1
//
// Formato da linha (separador "|", erradas separadas por ";"):
//   CAT|DIF|subtema|pergunta|resposta certa|errada1;errada2;errada3[|R]
//   CAT: G=Geografia H=História C=Ciências E=Esportes N=Entretenimento T=Tecnologia
//   DIF: f=facil m=medio d=dificil
//   R no fim = fato de 2020 em diante (recente)
// Linhas vazias e começadas por "#" são ignoradas.
//
// O script: valida (regras do jogo + regras do piloto), gera id estável, embaralha as alternativas
// de forma determinística (a posição da certa sai do hash, então varia entre A, B, C e D) e
// ACRESCENTA ao lote só as perguntas cujo id ainda não está nele. Rodar de novo não duplica nada.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { PASTA_LOTES, lerJson, gravarJson, gerarId, motivoInvalida } from './lib.mjs';

const CAT = { G: 'Geografia', H: 'História', C: 'Ciências', E: 'Esportes', N: 'Entretenimento', T: 'Tecnologia' };
const DIF = { f: 'facil', m: 'medio', d: 'dificil' };

const [fonte, num] = process.argv.slice(2);
if (!fonte || !num) {
  console.error('Uso: node montar-lote.mjs <fonte.txt> <número do lote>');
  process.exit(1);
}
const arqLote = join(PASTA_LOTES, `lote-${String(num).padStart(3, '0')}.json`);
const lote = existsSync(arqLote) ? lerJson(arqLote) : [];
const ids = new Set(lote.map((p) => p.id));

/** Embaralha de forma determinística a partir de uma semente (o id). */
function embaralhar(lista, semente) {
  const out = lista.slice();
  let h = createHash('sha1').update(semente).digest();
  for (let i = out.length - 1; i > 0; i--) {
    const j = h[i] % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const erros = [];
let novas = 0;
readFileSync(fonte, 'utf8').split(/\r?\n/).forEach((linha, n) => {
  linha = linha.trim();
  if (!linha || linha.startsWith('#')) return;
  const c = linha.split('|').map((x) => x.trim());
  const onde = `linha ${n + 1}`;
  if (c.length < 6 || c.length > 7) return erros.push(`${onde}: esperado 6 ou 7 campos, veio ${c.length}`);
  const [cat, dif, subtema, pergunta, resposta, erradasTxt, flag] = c;
  const erradas = erradasTxt.split(';').map((x) => x.trim());
  const base = { categoria: CAT[cat], dificuldade: DIF[dif], pergunta, resposta };
  const id = gerarId(base);
  const certaPos = parseInt(id.slice(0, 8), 16) % 4; // posição da certa: A, B, C ou D
  const alts = embaralhar(erradas, id);
  alts.splice(certaPos, 0, resposta);
  const p = {
    id, ...base, alternativas: alts, subtema, status: 'gerada', motivo: null, dup: null, dup_ref: null,
    recente: flag === 'R',
  };
  const m = motivoInvalida(p) || (erradas.length !== 3 ? 'precisa de 3 erradas' : null);
  if (m) return erros.push(`${onde}: ${m} | ${pergunta}`);
  if (/\b(atual|atualmente|hoje|hoje em dia|recentemente)\b/i.test(pergunta)) erros.push(`${onde}: palavra que envelhece | ${pergunta}`);
  const temAno = /\b(19|20)\d\d\b/.test(pergunta);
  if (p.recente) {
    if (p.dificuldade === 'dificil') erros.push(`${onde}: recente não pode ser dificil`);
    if (!/\b20[2-9]\d\b/.test(pergunta)) erros.push(`${onde}: recente precisa do ano (2020+) no texto`);
  }
  if (/\b20[2-9]\d\b/.test(pergunta) && !p.recente) erros.push(`${onde}: tem ano 2020+ mas não está marcada R`);
  if (ids.has(id)) return;
  ids.add(id);
  lote.push(p);
  novas++;
});

if (erros.length) {
  console.error('ERROS (nada foi gravado):\n  ' + erros.join('\n  '));
  process.exit(1);
}
gravarJson(arqLote, lote);
console.log(`${arqLote}: +${novas} novas, total ${lote.length} (válidas ${lote.filter((p) => p.status !== 'descartada').length})`);
