#!/usr/bin/env node
// MÉTODO "RESPOSTAS PRIMEIRO" (zero IA): filtra uma lista curta de fatos candidatos ANTES de escrever perguntas.
//
// Uso: node expansao/scripts/candidatas.mjs expansao/candidatas/<arquivo>.txt [--json] [--so-banco]
//      --so-banco: compara só com perguntas.json (útil para validar o filtro com perguntas já geradas)
// Formato do arquivo (uma candidata por linha; "#" = comentário):
//   Categoria|Resposta - fato curto
//   ex.: Esportes|Ayrton Senna - campeão F1 1988
//   A primeira linha pode ser "@microtema Nome do microtema" (só para o relatório e a árvore).
//
// Para cada candidata o script compara com o banco atual e com as novas (lotes):
//   EXISTE   : mesma resposta normalizada E o fato divide 1+ palavra-chave específica com a pergunta parecida,
//              ou a resposta aparece numa pergunta da mesma categoria e o fato divide palavras-chave (pergunta invertida)
//   RISCO    : mesma resposta já usada na categoria (fato diferente) -> pode, mas escreva um ângulo novo
//   LIVRE    : nada parecido
// No fim mostra a taxa de descarte; acima de 50% o microtema deve ser marcado como "saturado" na árvore.
import { readFileSync } from 'node:fs';
import { lerBancoAtual, listarLotes, lerJson, palavrasChave, respostaNorm, limpar } from './lib.mjs';

const GENERICAS = new Set(['capit', 'famos', 'maior', 'menor', 'prime', 'segun', 'brasi', 'mundo', 'cidad', 'nome', 'chama',
  'conhe', 'tipic', 'orige', 'campe', 'venceu', 'vence', 'jogo', 'time', 'clube', 'selec', 'filme', 'serie', 'grand']);

const arq = process.argv[2];
if (!arq) { console.error('Uso: node candidatas.mjs <arquivo.txt> [--json]'); process.exit(1); }
const linhas = readFileSync(arq, 'utf8').split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
const microtema = (linhas.find((l) => l.startsWith('@microtema')) || '').replace('@microtema', '').trim() || null;

const base = [
  ...lerBancoAtual().map((p, i) => ({ ...p, ref: `banco:${i}` })),
  ...(process.argv.includes('--so-banco') ? [] : listarLotes().flatMap((f) => lerJson(f))).filter((p) => p.status !== 'descartada').map((p) => ({ ...p, ref: `id:${p.id}` })),
].map((p) => ({
  ref: p.ref, categoria: p.categoria, pergunta: p.pergunta, resposta: p.resposta,
  resp: respostaNorm(p.resposta), pal: new Set(palavrasChave(p.pergunta + ' ' + p.resposta)),
  texto: ' ' + limpar(p.pergunta) + ' ',
}));

const resultado = [];
for (const l of linhas) {
  if (l.startsWith('#') || l.startsWith('@')) continue;
  const [cat, resto = ''] = l.split('|');
  const [resposta, ...fatoP] = resto.split(' - ');
  const fato = fatoP.join(' - ');
  const resp = respostaNorm(resposta);
  // palavras do fato, sem as genéricas demais para provar que é o mesmo assunto
  const palFato = new Set(palavrasChave(fato).filter((x) => !GENERICAS.has(x)));
  const palResp = palavrasChave(resposta);
  let nivel = 'LIVRE', ref = null, parecida = null;
  for (const p of base) {
    const comuns = [...palFato].filter((x) => p.pal.has(x)).length;
    const mesmaResp = p.resp === resp || (resp.length >= 4 && (p.resp.includes(resp) || resp.includes(p.resp)) && Math.min(p.resp.length, resp.length) >= 4);
    const respNoTexto = palResp.length > 0 && resp.length >= 4 && palResp.every((r) => p.pal.has(r)) && p.categoria === cat;
    if ((mesmaResp && comuns >= 1) || (respNoTexto && comuns >= 2 && !mesmaResp)) { nivel = 'EXISTE'; ref = p.ref; parecida = p; break; }
    if (mesmaResp && p.categoria === cat && nivel === 'LIVRE') { nivel = 'RISCO'; ref = p.ref; parecida = p; }
  }
  resultado.push({ categoria: cat, resposta, fato, nivel, ref, parecida: parecida ? `${parecida.pergunta} => ${parecida.resposta}` : null });
}

if (process.argv.includes('--json')) console.log(JSON.stringify({ microtema, resultado }, null, 2));
else {
  for (const r of resultado)
    console.log(`${r.nivel.padEnd(6)} ${r.resposta} - ${r.fato}${r.parecida ? `\n         ~ ${r.ref} ${r.parecida}` : ''}`);
  const desc = resultado.filter((r) => r.nivel === 'EXISTE').length;
  const taxa = resultado.length ? desc / resultado.length : 0;
  console.log(`\n${microtema ? `[${microtema}] ` : ''}candidatas=${resultado.length} existem=${desc} risco=${resultado.filter((r) => r.nivel === 'RISCO').length} livres=${resultado.filter((r) => r.nivel === 'LIVRE').length} descarte=${(taxa * 100).toFixed(0)}%${taxa > 0.5 ? '  -> SATURADO, marque na árvore e troque de microtema' : ''}`);
}
