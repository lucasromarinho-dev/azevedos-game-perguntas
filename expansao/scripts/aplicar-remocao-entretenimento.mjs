// Gera expansao/correcoes/perguntas-sem-arte.json: cópia do perguntas.json da main
// sem as perguntas listadas em expansao/correcoes/entretenimento-remocao.json (campo "remover").
// A ordem do resto é mantida. NÃO altera perguntas.json nem a main.
//
// Uso (na raiz do repositório):
//   node expansao/scripts/aplicar-remocao-entretenimento.mjs [caminho-do-banco.json]
// Sem argumento, lê "git show origin/main:perguntas.json".
// Variável QUEST_PERGUNTAS_TS: caminho do perguntas.ts do jogo (montarBanco). Padrão abaixo.
// Para pular a checagem do montarBanco: SEM_MONTARBANCO=1.

import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, '..', '..');
const LISTA = path.join(RAIZ, 'expansao/correcoes/entretenimento-remocao.json');
const SAIDA = path.join(RAIZ, 'expansao/correcoes/perguntas-sem-arte.json');
const PERGUNTAS_TS = process.env.QUEST_PERGUNTAS_TS ||
  'C:/Users/lucas/Documents/Projetos Claude/quest-online-wt-juncao/src/jogos/quest/shared/perguntas.ts';
const CAMPOS = ['categoria', 'dificuldade', 'pergunta', 'resposta', 'alternativas'];
const DIFS = ['facil', 'medio', 'dificil'];
const MINIMO_CELULA = 500; // abaixo disso a célula categoria x dificuldade é considerada perigosa

const textoBanco = process.argv[2]
  ? readFileSync(process.argv[2], 'utf8')
  : execSync('git show origin/main:perguntas.json', { cwd: RAIZ, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
const banco = JSON.parse(textoBanco);
const lista = JSON.parse(readFileSync(LISTA, 'utf8'));

let erros = 0;
const falha = (msg) => { erros++; console.error('ERRO:', msg); };

// 1. Confere que cada item listado bate com o banco (mesma posição, mesmo enunciado).
const tirar = new Set();
for (const it of lista.remover) {
  const q = banco[it.indice];
  if (!q) { falha(`${it.ref}: posição inexistente`); continue; }
  if (q.pergunta !== it.pergunta.pergunta || q.resposta !== it.pergunta.resposta) {
    falha(`${it.ref}: o banco mudou nessa posição ("${q.pergunta}")`);
    continue;
  }
  if (q.categoria !== 'Entretenimento') falha(`${it.ref}: não é Entretenimento`);
  tirar.add(it.indice);
}
if (tirar.size !== lista.remover.length) falha('itens repetidos na lista de remoção');

// 2. Gera a cópia, mantendo a ordem.
const novo = banco.filter((_, i) => !tirar.has(i));

// 3. Validações.
const chavesEnunciado = new Map();
novo.forEach((q, i) => {
  const ks = Object.keys(q);
  if (ks.length !== CAMPOS.length || !CAMPOS.every((c) => ks.includes(c))) falha(`#${i} campos: ${ks.join(',')}`);
  if (!Array.isArray(q.alternativas) || q.alternativas.length !== 4) falha(`#${i} não tem 4 alternativas`);
  else {
    if (new Set(q.alternativas).size !== 4) falha(`#${i} alternativas repetidas`);
    if (!q.alternativas.includes(q.resposta)) falha(`#${i} resposta fora das alternativas`);
  }
  const k = q.pergunta.toLowerCase().replace(/\s+/g, ' ').trim();
  if (chavesEnunciado.has(k)) falha(`#${i} enunciado duplicado de #${chavesEnunciado.get(k)}`);
  else chavesEnunciado.set(k, i);
});

// A ordem do resto é a mesma do banco original.
let j = 0;
banco.forEach((q, i) => { if (!tirar.has(i)) { if (JSON.stringify(q) !== JSON.stringify(novo[j])) falha(`ordem quebrada em ${i}`); j++; } });

// 4. Contagem por célula categoria x dificuldade.
const conta = (arr) => {
  const c = {};
  for (const q of arr) { c[q.categoria] ??= { facil: 0, medio: 0, dificil: 0 }; c[q.categoria][q.dificuldade]++; }
  return c;
};
const antes = conta(banco), depois = conta(novo);
console.log('Célula                     antes  depois');
for (const cat of Object.keys(antes)) for (const d of DIFS) {
  const a = antes[cat][d], n = depois[cat]?.[d] ?? 0;
  const alerta = n < MINIMO_CELULA ? '  <-- pequena' : '';
  console.log(`${(cat + ' ' + d).padEnd(26)} ${String(a).padStart(5)} ${String(n).padStart(7)}${alerta}`);
  if (n < MINIMO_CELULA) falha(`célula ${cat}/${d} ficou com ${n} (< ${MINIMO_CELULA})`);
}

writeFileSync(SAIDA, JSON.stringify(novo));
console.log(`\nbanco: ${banco.length} | removidas: ${tirar.size} | cópia: ${novo.length} -> ${path.relative(RAIZ, SAIDA)}`);

// 5. montarBanco real do jogo (npx tsx).
if (!process.env.SEM_MONTARBANCO) {
  const checador = path.join(AQUI, 'montarbanco-checar.mts');
  const out = execSync(`npx --yes tsx "${checador}" "${SAIDA}"`, {
    cwd: RAIZ, encoding: 'utf8', env: { ...process.env, QUEST_PERGUNTAS_TS: pathToFileURL(PERGUNTAS_TS).href },
  });
  const r = JSON.parse(out.trim().split('\n').pop());
  console.log(`montarBanco: ${r.validas} válidas, ${r.descartadas} descartadas`);
  if (r.descartadas !== 0 || r.validas !== novo.length) falha('montarBanco descartou perguntas');
}

if (erros) { console.error(`\n${erros} erro(s).`); process.exit(1); }
console.log('Tudo certo: 5 campos, 4 alternativas distintas com a resposta, 0 enunciados duplicados, ordem mantida.');
