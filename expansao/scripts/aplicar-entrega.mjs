#!/usr/bin/env node
// Aplica as correções de "enunciado que entrega a resposta" (expansao/correcoes/entrega-resposta.json).
// NÃO mexe no perguntas.json: gera uma CÓPIA corrigida em expansao/correcoes/perguntas-corrigido.json,
// na mesma ordem do banco publicado, trocando cada pergunta no lugar e tirando só as marcadas "remover".
//
// Uso:
//   node expansao/scripts/aplicar-entrega.mjs                 -> banco publicado (git show origin/main:perguntas.json)
//   node expansao/scripts/aplicar-entrega.mjs --banco X.json  -> outro arquivo de banco
//   node expansao/scripts/aplicar-entrega.mjs --lotes         -> também aplica as correções "lote-NNN:id" direto
//                                                                nos arquivos dos lotes (campo `correcao`)
//   --montar CAMINHO/perguntas.ts  -> roda o montarBanco real do jogo na cópia (npx tsx) e mostra quantas descartou
//
// Depois de gravar, valida a cópia: só os 5 campos; 4 alternativas distintas com a resposta entre elas;
// nenhum enunciado repetido; e a heurística entrega.mjs rodada de novo (só sobra o que foi julgado falso alarme).
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import { RAIZ_EXP, RAIZ_REPO, PASTA_LOTES, lerJson, gravarJson } from './lib.mjs';
import { analisar, norm } from './entrega.mjs';

const args = process.argv.slice(2);
const opt = (k) => (args.includes(k) ? args[args.indexOf(k) + 1] : null);
const CAMPOS = ['categoria', 'dificuldade', 'pergunta', 'resposta', 'alternativas'];
const igual = (a, b) => JSON.stringify(CAMPOS.map((k) => a[k])) === JSON.stringify(CAMPOS.map((k) => b[k]));
const chave = (s) => norm(s).replace(/[^a-z0-9]+/g, ' ').trim();

const correcoes = lerJson(join(RAIZ_EXP, 'correcoes', 'entrega-resposta.json'));
const banco = opt('--banco')
  ? JSON.parse(readFileSync(opt('--banco'), 'utf8'))
  : JSON.parse(execSync('git show origin/main:perguntas.json', { cwd: RAIZ_REPO, maxBuffer: 1 << 28 }).toString('utf8'));

// 1) banco publicado -> cópia corrigida
const remover = new Set();
const trocas = new Map();
let erros = 0;
for (const c of correcoes) {
  if (!c.origem.startsWith('banco:')) continue;
  const i = Number(c.origem.slice(6));
  if (!banco[i] || !igual(banco[i], c.antes)) { console.log(`ERRO ${c.origem}: o banco não bate com "antes"`); erros++; continue; }
  if (c.acao === 'remover') remover.add(i);
  else if (c.acao === 'reescrever' || c.acao === 'alternativas') trocas.set(i, c.depois);
}
if (erros) process.exit(1);
const copia = [];
banco.forEach((p, i) => {
  if (remover.has(i)) return;
  const q = trocas.get(i) || p;
  copia.push(Object.fromEntries(CAMPOS.map((k) => [k, q[k]])));
});
const saida = join(RAIZ_EXP, 'correcoes', 'perguntas-corrigido.json');
writeFileSync(saida, JSON.stringify(copia));
console.log(`cópia: ${banco.length} -> ${copia.length} perguntas (${trocas.size} trocadas no lugar, ${remover.size} removidas) em ${saida}`);

// 2) lotes do piloto (só com --lotes): troca direto no lote e registra em `correcao`
if (args.includes('--lotes')) {
  const porLote = new Map();
  for (const c of correcoes) {
    if (!c.origem.startsWith('lote-') || c.acao === 'nenhuma') continue;
    const [lote, id] = c.origem.split(':');
    if (!porLote.has(lote)) porLote.set(lote, []);
    porLote.get(lote).push({ id, c });
  }
  for (const [lote, lista] of porLote) {
    const caminho = join(PASTA_LOTES, `${lote}.json`);
    const fichas = lerJson(caminho);
    let n = 0;
    for (const { id, c } of lista) {
      const f = fichas.find((q) => q.id === id);
      if (!f) { console.log(`${lote}: id ${id} não achado`); continue; }
      if (c.depois && igual(f, c.depois)) continue; // já aplicada
      if (!igual(f, c.antes)) { console.log(`${lote}:${id} não bate com "antes"; pulei`); continue; }
      let nota;
      if (c.acao === 'remover') { f.status = 'descartada'; f.motivo = `entrega a resposta: ${c.motivo}`; nota = 'descartada: enunciado entregava a resposta'; }
      else {
        if (f.pergunta !== c.depois.pergunta) nota = `enunciado reescrito por entregar a resposta (antes: "${f.pergunta}")`;
        else nota = `erradas trocadas por entregar a resposta (antes: ${f.alternativas.filter((a) => a !== f.resposta).join(' / ')})`;
        if (f.dificuldade !== c.depois.dificuldade) nota += `; dificuldade ${f.dificuldade} -> ${c.depois.dificuldade}`;
        for (const k of CAMPOS) f[k] = Array.isArray(c.depois[k]) ? [...c.depois[k]] : c.depois[k];
      }
      f.correcao = f.correcao ? `${f.correcao}; ${nota}` : nota;
      n++;
    }
    gravarJson(caminho, fichas);
    console.log(`${lote}: ${n} correção(ões) aplicada(s)`);
  }
}

// 3) validação da cópia
const falsos = new Set(correcoes.filter((c) => c.classificacao === 'falso-alarme').map((c) => chave(c.antes.pergunta)));
let campos = 0, alts = 0;
const vistos = new Map(), dups = [];
const restantes = [];
let falsosMantidos = 0;
copia.forEach((p, i) => {
  if (Object.keys(p).join() !== CAMPOS.join()) campos++;
  if (!Array.isArray(p.alternativas) || p.alternativas.length !== 4 || new Set(p.alternativas).size !== 4 || !p.alternativas.includes(p.resposta)) alts++;
  const k = chave(p.pergunta);
  if (vistos.has(k)) dups.push(`${vistos.get(k)} e ${i}: ${p.pergunta}`);
  else vistos.set(k, i);
  if (analisar(p)) (falsos.has(k) ? falsosMantidos++ : restantes.push(`${i}: ${p.pergunta} => ${p.resposta}`));
});
console.log(`validação: campos fora do padrão ${campos}; alternativas com problema ${alts}; enunciados repetidos ${dups.length}`);
for (const d of dups.slice(0, 20)) console.log('  repetido', d);
console.log(`heurística na cópia: ${restantes.length} entrega(s) restante(s), ${falsosMantidos} falso(s) alarme(s) mantido(s)`);
for (const r of restantes.slice(0, 30)) console.log('  resta', r);

// 4) montarBanco real do jogo (opcional)
if (opt('--montar')) {
  const dir = mkdtempSync(join(tmpdir(), 'entrega-'));
  const ts = join(dir, 'montar.mts');
  writeFileSync(ts, `import { readFileSync } from 'node:fs';\nimport { montarBanco } from ${JSON.stringify(pathToFileURL(opt('--montar')).href)};\nconst { relatorio } = montarBanco(JSON.parse(readFileSync(${JSON.stringify(saida)}, 'utf8')));\nconsole.log('montarBanco: ' + relatorio.validas + ' válidas, ' + relatorio.descartadas.length + ' descartadas');\n`);
  console.log(execSync(`npx tsx "${ts}"`, { cwd: join(opt('--montar'), '..'), encoding: 'utf8' }).trim());
}
if (campos || alts || dups.length || restantes.length) process.exitCode = 1;
