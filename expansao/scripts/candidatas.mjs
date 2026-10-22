#!/usr/bin/env node
// MÉTODO "RESPOSTAS PRIMEIRO" (zero IA): filtra uma lista curta de fatos candidatos ANTES de escrever perguntas.
//
// Uso: node expansao/scripts/candidatas.mjs expansao/candidatas/<arquivo>.txt [--json] [--so-banco] [--livres]
//      --so-banco: compara só com perguntas.json (útil para validar o filtro com perguntas já geradas)
//      --livres  : imprime só as linhas aprovadas (LIVRE e RISCO), prontas para virar perguntas
//      --registrar: grava/atualiza o resultado de cada microtema em expansao/microtemas.json (saturado se descarte > 50%)
// Formato do arquivo (uma candidata por linha; "#" = comentário):
//   Categoria|Resposta - fato curto (escreva o fato com as palavras-chave que a pergunta vai usar)
//   ex.: Esportes|Ayrton Senna - piloto brasileiro campeão da Fórmula 1 em 1988 pela McLaren
//   Uma linha "@microtema Nome" abre um microtema; vale até o próximo "@microtema".
//
// Usa o MESMO detector das perguntas completas (semelhanca.mjs + cruzamento.mjs), tratando o fato como se fosse o enunciado.
// O cruzamento (v3) procura a resposta e os nomes próprios da candidata no TEXTO de cada pergunta do banco e das novas
// (e vice-versa), com grafia normalizada (Guerra da Cisplatina = Guerra Cisplatina, Dust 2 = Dust2, Fe = ferro).
//   EXISTE : o detector daria "certa" (mesma resposta + assunto, pergunta invertida, resposta citada no banco...)
//   RISCO  : o detector daria "suspeita", ou a mesma resposta já existe na categoria (escreva um ângulo bem diferente)
//   LIVRE  : nada parecido
// Também compara as candidatas entre si (a segunda igual vira EXISTE).
// Por microtema mostra a taxa de descarte; acima de 50% o microtema é SATURADO (marque na árvore e troque).
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { lerBancoAtual, listarLotes, lerJson, gravarJson, respostaNorm, RAIZ_EXP } from './lib.mjs';
import { preparar, comparar, mesmaResposta } from './semelhanca.mjs';
import { indexar, procurarE, prepararE, compararE } from './cruzamento.mjs';

const args = process.argv.slice(2);
const arq = args.find((a) => !a.startsWith('--'));
if (!arq) { console.error('Uso: node candidatas.mjs <arquivo.txt> [--json] [--so-banco] [--livres]'); process.exit(1); }

const base = [
  ...lerBancoAtual().map((p, i) => ({ ...p, ref: `banco:${i}` })),
  ...(args.includes('--so-banco') ? [] : listarLotes().flatMap((f) => lerJson(f)).filter((p) => p.status !== 'descartada').map((p) => ({ ...p, ref: `id:${p.id}` }))),
];
const preparadas = base.map((p) => ({ prep: preparar(p, p.ref), p }));
const indiceE = indexar(base.map((p) => ({ p, ref: p.ref })));
const porRef = new Map(base.map((p) => [p.ref, p]));

let microtema = null;
const resultado = [];
const aceitas = [];
for (const linha of readFileSync(arq, 'utf8').split(/\r?\n/).map((l) => l.trim()).filter(Boolean)) {
  if (linha.startsWith('@microtema')) { microtema = linha.replace('@microtema', '').trim(); continue; }
  if (linha.startsWith('#')) continue;
  const [categoria, resto = ''] = linha.split('|');
  const [resposta, ...fatoP] = resto.split(' - ');
  const fato = fatoP.join(' - ');
  const alvo = preparar({ categoria, pergunta: fato, resposta }, 'cand');
  let nivel = 'LIVRE', ref = null, parecida = null, regra = null;
  for (const { prep, p } of [...preparadas, ...aceitas]) {
    const r = comparar(alvo, prep);
    if (r.nivel === 'certa') { nivel = 'EXISTE'; ref = prep.ref; parecida = p; regra = r.regra; break; }
    if (nivel === 'LIVRE' && (r.nivel === 'suspeita' || (p.categoria === categoria && mesmaResposta(alvo.resp, prep.resp)))) {
      nivel = 'RISCO'; ref = prep.ref; parecida = p; regra = r.regra || 'mesma resposta já usada na categoria';
    }
  }
  // camada v3: cruzamento de entidades (banco + novas pelo índice; candidatas aceitas antes, direto)
  if (nivel !== 'EXISTE') {
    const cand = { categoria, pergunta: fato, resposta };
    let r = procurarE(cand, indiceE);
    let pr = r.ref ? porRef.get(r.ref) : null;
    if (r.nivel !== 'certa') {
      const ea = prepararE(cand);
      for (const { p } of aceitas) {
        const x = compararE(ea, prepararE(p));
        if (x.nivel === 'certa' || (x.nivel === 'suspeita' && r.nivel === 'nao')) { r = { ...x, ref: `cand:${p.resposta}` }; pr = p; if (x.nivel === 'certa') break; }
      }
    }
    if (r.nivel === 'certa') { nivel = 'EXISTE'; ref = r.ref; parecida = pr; regra = r.regra; }
    else if (r.nivel === 'suspeita' && nivel === 'LIVRE') { nivel = 'RISCO'; ref = r.ref; parecida = pr; regra = r.regra; }
  }
  if (nivel !== 'EXISTE') aceitas.push({ prep: preparar({ categoria, pergunta: fato, resposta }, `cand:${resposta}`), p: { categoria, pergunta: fato, resposta } });
  resultado.push({ microtema, categoria, resposta, fato, nivel, ref, regra, parecida: parecida ? `${parecida.pergunta} => ${parecida.resposta}` : null });
}

if (args.includes('--json')) console.log(JSON.stringify(resultado, null, 2));
else if (args.includes('--livres')) for (const r of resultado.filter((r) => r.nivel !== 'EXISTE')) console.log(`${r.nivel}|${r.categoria}|${r.resposta} - ${r.fato}`);
else {
  for (const r of resultado)
    console.log(`${r.nivel.padEnd(6)} ${r.resposta} - ${r.fato}${r.parecida ? `\n         ~ ${r.ref} ${r.parecida}  [${r.regra}]` : ''}`);
  const porMicro = new Map();
  for (const r of resultado) {
    const k = r.microtema || '(sem microtema)';
    if (!porMicro.has(k)) porMicro.set(k, []);
    porMicro.get(k).push(r);
  }
  console.log('');
  for (const [k, lista] of porMicro) {
    const desc = lista.filter((r) => r.nivel === 'EXISTE').length;
    const taxa = desc / lista.length;
    console.log(`[${k}] candidatas=${lista.length} existem=${desc} risco=${lista.filter((r) => r.nivel === 'RISCO').length} livres=${lista.filter((r) => r.nivel === 'LIVRE').length} descarte=${(taxa * 100).toFixed(0)}%${taxa > 0.5 ? '  -> SATURADO' : ''}`);
  }
}
if (args.includes('--registrar')) {
  const cam = join(RAIZ_EXP, 'microtemas.json');
  const reg = existsSync(cam) ? lerJson(cam) : {};
  const grupos = new Map();
  for (const r of resultado) {
    const k = r.microtema || '(sem microtema)';
    if (!grupos.has(k)) grupos.set(k, []);
    grupos.get(k).push(r);
  }
  for (const [k, lista] of grupos) {
    const existem = lista.filter((r) => r.nivel === 'EXISTE').length;
    const ant = reg[k] || { candidatas: 0, existem: 0, arquivos: [] };
    const nomeArq = arq.replace(/^.*candidatas[\/]/, '');
    if ((ant.arquivos || []).includes(nomeArq)) continue; // já registrado (não conta duas vezes)
    const cand = ant.candidatas + lista.length, ex = ant.existem + existem;
    reg[k] = { categoria: lista[0].categoria, candidatas: cand, existem: ex, descarte: +(ex / cand).toFixed(2),
      status: ex / cand > 0.5 ? 'saturado' : 'aberto', arquivos: [...new Set([...(ant.arquivos || []), arq.replace(/^.*candidatas[\/]/, '')])] };
  }
  gravarJson(cam, reg);
  // métrica da lista (por arquivo): quantas linhas, quantas já existiam, tamanho em caracteres e tokens aproximados
  const camM = join(RAIZ_EXP, 'metricas.json');
  const met = lerJson(camM);
  const linhasArq = readFileSync(arq, 'utf8').split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith('#') && !l.startsWith('@'));
  const chars = linhasArq.join('\n').length;
  met.listas = met.listas || {};
  met.listas[arq.replace(/^.*candidatas[\/\\]/, '')] = { linhas: resultado.length, existem: resultado.filter((r) => r.nivel === 'EXISTE').length,
    risco: resultado.filter((r) => r.nivel === 'RISCO').length, livres: resultado.filter((r) => r.nivel === 'LIVRE').length,
    caracteres: chars, tokens_aprox: Math.round(chars / 3.5) };
  gravarJson(camM, met);
  console.log(`registrado em microtemas.json (${grupos.size} microtemas) e metricas.json > listas`);
}
void respostaNorm;
