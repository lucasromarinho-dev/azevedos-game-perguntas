#!/usr/bin/env node
// MÉTODO "RESPOSTAS PRIMEIRO" (zero IA): filtra uma lista curta de fatos candidatos ANTES de escrever perguntas.
//
// Uso: node expansao/scripts/candidatas.mjs expansao/candidatas/<arquivo>.txt [--json] [--so-banco] [--livres]
//      --so-banco: compara só com perguntas.json (útil para validar o filtro com perguntas já geradas)
//      --livres  : imprime só as linhas aprovadas (LIVRE e RISCO), prontas para virar perguntas
// Formato do arquivo (uma candidata por linha; "#" = comentário):
//   Categoria|Resposta - fato curto (escreva o fato com as palavras-chave que a pergunta vai usar)
//   ex.: Esportes|Ayrton Senna - piloto brasileiro campeão da Fórmula 1 em 1988 pela McLaren
//   Uma linha "@microtema Nome" abre um microtema; vale até o próximo "@microtema".
//
// Usa o MESMO detector das perguntas completas (semelhanca.mjs), tratando o fato como se fosse o enunciado:
//   EXISTE : o detector daria "certa" (mesma resposta + assunto, pergunta invertida, resposta citada no banco...)
//   RISCO  : o detector daria "suspeita", ou a mesma resposta já existe na categoria (escreva um ângulo bem diferente)
//   LIVRE  : nada parecido
// Também compara as candidatas entre si (a segunda igual vira EXISTE).
// Por microtema mostra a taxa de descarte; acima de 50% o microtema é SATURADO (marque na árvore e troque).
import { readFileSync } from 'node:fs';
import { lerBancoAtual, listarLotes, lerJson, respostaNorm } from './lib.mjs';
import { preparar, comparar, mesmaResposta } from './semelhanca.mjs';

const args = process.argv.slice(2);
const arq = args.find((a) => !a.startsWith('--'));
if (!arq) { console.error('Uso: node candidatas.mjs <arquivo.txt> [--json] [--so-banco] [--livres]'); process.exit(1); }

const base = [
  ...lerBancoAtual().map((p, i) => ({ ...p, ref: `banco:${i}` })),
  ...(args.includes('--so-banco') ? [] : listarLotes().flatMap((f) => lerJson(f)).filter((p) => p.status !== 'descartada').map((p) => ({ ...p, ref: `id:${p.id}` }))),
];
const preparadas = base.map((p) => ({ prep: preparar(p, p.ref), p }));

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
void respostaNorm;
