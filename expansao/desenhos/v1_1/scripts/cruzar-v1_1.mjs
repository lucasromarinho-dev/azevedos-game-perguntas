// Cruzamento final da v1.1: as 1.000 entre si (compararE nos dois sentidos + comparar de semelhanca.mjs)
// e contra as 3.000 de Esportes (expansao/esportes/perguntas-esportes.json). Grava as marcas para leitura.
// Uso: node expansao/desenhos/v1_1/scripts/cruzar-v1_1.mjs saida.json
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepararE, compararE } from '../../../scripts/cruzamento.mjs';
import { preparar, comparar } from '../../../scripts/semelhanca.mjs';
const V11 = join(dirname(fileURLToPath(import.meta.url)), '..');
const EXP = join(V11, '..', '..');
const ban = JSON.parse(readFileSync(join(V11, 'perguntas-desenhos-v1_1.json'), 'utf8'));
const org = JSON.parse(readFileSync(join(V11, 'perguntas-desenhos-v1_1-origem.json'), 'utf8'));
const esp = JSON.parse(readFileSync(join(EXP, 'esportes', 'perguntas-esportes.json'), 'utf8'));
const E = ban.map((p) => prepararE(p)), S = ban.map((p, i) => preparar(p, i));
const out = [];
const P = { suspeita: 1, certa: 2 };
const pior = (a, b) => (!a ? b : !b ? a : P[b.nivel] > P[a.nivel] ? b : a);
for (let i = 0; i < ban.length; i++) for (let j = i + 1; j < ban.length; j++) {
  let r = null;
  for (const x of [compararE(E[i], E[j]), compararE(E[j], E[i]), comparar(S[i], S[j])]) if (x.nivel) r = pior(r, x);
  if (r) out.push({ tipo: 'interno', nivel: r.nivel, regra: r.regra, a: i + 1, b: j + 1, obraA: org[i].obra, obraB: org[j].obra,
    fonteA: org[i].fonte, fonteB: org[j].fonte, A: ban[i].pergunta + ' => ' + ban[i].resposta, B: ban[j].pergunta + ' => ' + ban[j].resposta });
}
const EE = esp.map((p) => prepararE(p));
for (let i = 0; i < ban.length; i++) for (let j = 0; j < esp.length; j++) {
  let r = null;
  for (const x of [compararE(E[i], EE[j]), compararE(EE[j], E[i])]) if (x.nivel) r = pior(r, x);
  if (r) out.push({ tipo: 'esportes', nivel: r.nivel, regra: r.regra, a: i + 1, b: 'esp:' + j, obraA: org[i].obra, fonteA: org[i].fonte,
    A: ban[i].pergunta + ' => ' + ban[i].resposta, B: esp[j].pergunta + ' => ' + esp[j].resposta });
}
writeFileSync(process.argv[2], JSON.stringify(out, null, 1));
const c = (f) => out.filter(f).length;
console.log('marcas', out.length, 'internas', c((o) => o.tipo === 'interno'), 'certa internas', c((o) => o.tipo === 'interno' && o.nivel === 'certa'),
  'com reescrita ou v2', c((o) => o.tipo === 'interno' && (o.fonteA !== 'v1' || o.fonteB !== 'v1')), 'esportes', c((o) => o.tipo === 'esportes'));
