#!/usr/bin/env node
// Conferência v11 da correção "entrega" (conferente-v11, 30/10/2026): aplica no próprio entrega-resposta.json
// as mudanças decididas na amostra (semente 20261108, ver amostra-entrega-v11.mjs) e registra cada uma
// no campo `conferencia_v11` da entrada. Pode rodar de novo sem duplicar.
// Uso: node expansao/scripts/conferir-entrega-v11.mjs
import { join } from 'node:path';
import { writeFileSync } from 'node:fs';
import { RAIZ_EXP, lerJson } from './lib.mjs';

const CAMINHO = join(RAIZ_EXP, 'correcoes', 'entrega-resposta.json');
const MUDANCAS = {
  'banco:7439': {
    pergunta: 'Como se chama o dispositivo que corrige a posição dos dentes com bráquetes e fios?',
    nota: 'conferente-v11: "tratamento" trocado por "dispositivo" (a resposta é o aparelho, não o tratamento)',
  },
  'banco:6650': {
    pergunta: 'Qual desenho brasileiro mostra uma menina apaixonada pelo céu, que vive fazendo experiências com o irmão Júpiter?',
    nota: 'conferente-v11: tirado "o furão Cláudio", que entregava a resposta de lote-111:014a8b9226 (reposição: que animal é o Cláudio)',
  },
  'banco:3221': {
    pergunta: 'Qual série de humor da Globo tinha o funcionário público Lineu e o taxista Agostinho?',
    nota: 'conferente-v11: tirados "de 2001 a 2014" e "Nenê", pistas repetidas em lote-113:035c969bff (reposição: atriz de Dona Nenê na versão de 2001), cujo enunciado cita esta resposta',
  },
};

const lista = lerJson(CAMINHO);
let n = 0;
for (const c of lista) {
  const m = MUDANCAS[c.origem];
  if (!m) continue;
  if (c.conferencia_v11 === m.nota) continue;
  c.depois.pergunta = m.pergunta;
  c.conferencia_v11 = m.nota;
  n++;
}
writeFileSync(CAMINHO, JSON.stringify(lista, null, 1) + '\n', 'utf8'); // o arquivo usa recuo de 1 espaço
console.log(`${n} mudança(s) aplicada(s); ${Object.keys(MUDANCAS).length} previstas`);
