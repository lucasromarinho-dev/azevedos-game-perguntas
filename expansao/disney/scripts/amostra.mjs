#!/usr/bin/env node
// Gera amostra-lucas-disney.md (sorteio pela semente 20261107) e imprime o resumo para o metricas.json. Zero IA.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = join(dirname(fileURLToPath(import.meta.url)), '..');
const SEMENTE = 20261107;
function mulberry32(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const rng = mulberry32(SEMENTE);
const filmes = JSON.parse(readFileSync(join(AQUI, 'filmes.json'), 'utf8'));
const todas = [];
let descartadas = 0;
for (const f of readdirSync(join(AQUI, 'lotes')).filter((x) => /^disney-\d{3}\.json$/.test(x)).sort()) {
  for (const p of JSON.parse(readFileSync(join(AQUI, 'lotes', f), 'utf8'))) {
    if (p.status === 'descartada') descartadas++; else todas.push(p);
  }
}
const CATS = ['Clássicos Disney', 'Princesas', 'Pixar', 'Vilões', 'Músicas', 'Disney Moderno e Bichos'];
const DIFS = [['facil', 'Fácil'], ['medio', 'Média'], ['dificil', 'Difícil']];
const conta = (fn) => todas.filter(fn).length;
const pct = (n) => `${((100 * n) / todas.length).toFixed(1).replace('.', ',')}%`;
const porGrupo = {};
for (const p of todas) porGrupo[p.grupo] = (porGrupo[p.grupo] || 0) + 1;
const ranking = Object.entries(porGrupo).sort((a, b) => b[1] - a[1]);
const nome = (g) => filmes[g][1];
const formatos = {};
for (const p of todas) formatos[p.formato || 'normal'] = (formatos[p.formato || 'normal'] || 0) + 1;

let md = `# Banco Disney - amostra para o Lucas\n\n`;
md += `Versão especial do LOTER QUIZ só com perguntas da Disney e da Pixar: **${todas.length} perguntas** em 6 temas novos. `;
md += `Nada foi publicado: o arquivo pronto fica em \`expansao/disney/perguntas-disney.json\` e só entra no jogo quando você mandar.\n\n`;
md += `## Quantas perguntas tem de cada tipo\n\n| Tema | Fácil | Média | Difícil | Total |\n|---|---|---|---|---|\n`;
for (const c of CATS) md += `| ${c} | ${DIFS.map(([d]) => conta((p) => p.categoria === c && p.dificuldade === d)).join(' | ')} | ${conta((p) => p.categoria === c)} |\n`;
md += `| **Total** | ${DIFS.map(([d]) => `**${conta((p) => p.dificuldade === d)}** (${pct(conta((p) => p.dificuldade === d))})`).join(' | ')} | **${todas.length}** |\n\n`;
md += `- **Filmes diferentes:** ${ranking.length}. O que mais aparece é ${nome(ranking[0][0])}, com ${ranking[0][1]} perguntas (${pct(ranking[0][1])} do banco); depois vêm ${nome(ranking[1][0])} (${ranking[1][1]}) e ${nome(ranking[2][0])} (${ranking[2][1]}).\n`;
md += `- **"Difícil" aqui é pergunta de fã**: nome de personagem secundário ou detalhe da história. Nada de ano de lançamento, bilheteria ou diretor.\n`;
md += `- **Nomes e títulos como no Brasil**: Mate, Linguini, Zezé, Gato Pilantra, "Livre Estou", "Vencer Distâncias", "Imagem" (a canção da Mulan)...\n`;
md += `- **Jeitos diferentes de perguntar** (cada um abaixo de 10% do banco): "Qual destes NÃO é..." ${formatos['nao-e'] || 0}, "Quem disse..." ${formatos['quem-disse'] || 0}, "O que vem primeiro..." ${formatos['qual-primeiro'] || 0}, "Complete..." ${formatos.complete || 0}, perguntas de número ${formatos.numero || 0}.\n`;
md += `- **Conferência na internet:** todas as ${todas.length} perguntas foram conferidas na Wikipédia (português e inglês) ou numa busca na web. ${descartadas} perguntas foram jogadas fora no caminho (repetidas ou sem confirmação, como títulos de canção que não achei na versão brasileira).\n\n`;
md += `## 5 perguntas de cada tema (sorteio pela semente ${SEMENTE})\n\nA resposta certa está em **negrito**.\n`;
const NIVEL = Object.fromEntries(DIFS);
for (const c of CATS) {
  const lista = todas.filter((p) => p.categoria === c);
  const escolhidas = [];
  while (escolhidas.length < 5) { const p = lista[Math.floor(rng() * lista.length)]; if (!escolhidas.includes(p)) escolhidas.push(p); }
  md += `\n### ${c}\n\n`;
  escolhidas.forEach((p, i) => {
    md += `${i + 1}. (${NIVEL[p.dificuldade]}, ${nome(p.grupo)}) ${p.pergunta}\n   ${p.alternativas.map((a) => (a === p.resposta ? `**${a}**` : a)).join(' / ')}\n`;
  });
}
writeFileSync(join(AQUI, 'amostra-lucas-disney.md'), md);
console.log(JSON.stringify({ total: todas.length, descartadas, filmes: ranking.length, mais_frequente: { filme: nome(ranking[0][0]), perguntas: ranking[0][1] }, top5: ranking.slice(0, 5), formatos,
  por_categoria: Object.fromEntries(CATS.map((c) => [c, Object.fromEntries(DIFS.map(([d]) => [d, conta((p) => p.categoria === c && p.dificuldade === d)]))])),
  por_dificuldade: Object.fromEntries(DIFS.map(([d]) => [d, conta((p) => p.dificuldade === d)])) }));
