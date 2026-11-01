// Sorteia a amostra da v1.1 para o Lucas: 4 fáceis, 3 médias e 3 difíceis, ao acaso, com semente fixa (mulberry32).
// Uso: node expansao/desenhos/v1_1/scripts/amostra-v1_1.mjs [semente]   (padrão 20261101)
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const V11 = join(dirname(fileURLToPath(import.meta.url)), '..');
const SEMENTE = Number(process.argv[2] || 20261101);
const ban = JSON.parse(readFileSync(join(V11, 'perguntas-desenhos-v1_1.json'), 'utf8'));
const org = JSON.parse(readFileSync(join(V11, 'perguntas-desenhos-v1_1-origem.json'), 'utf8'));
let t = SEMENTE >>> 0;
const rnd = () => { t = (t + 0x6d2b79f5) >>> 0; let x = Math.imul(t ^ (t >>> 15), 1 | t); x ^= x + Math.imul(x ^ (x >>> 7), 61 | x); return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
const QTD = { facil: 4, medio: 3, dificil: 3 };
const NOME = { facil: 'Fácil', medio: 'Média', dificil: 'Difícil' };
const linhas = ['# Amostra da v1.1 do banco Desenhos', '',
  `Sorteio por script (\`scripts/amostra-v1_1.mjs\`), semente **${SEMENTE}** (mulberry32), estratificado: 4 fáceis, 3 médias e 3 difíceis. Nenhuma foi escolhida a dedo.`, ''];
let n = 0;
for (const nivel of ['facil', 'medio', 'dificil']) {
  const pool = ban.map((p, i) => i).filter((i) => ban[i].dificuldade === nivel);
  const pegou = [];
  while (pegou.length < QTD[nivel]) { const i = pool[Math.floor(rnd() * pool.length)]; if (!pegou.includes(i)) pegou.push(i); }
  for (const i of pegou) {
    const p = ban[i];
    n++;
    linhas.push(`${n}. **[${NOME[nivel]}]** ${p.pergunta}`, `   - Alternativas: ${p.alternativas.join(' / ')}`, `   - **Resposta:** ${p.resposta}`,
      `   - Posição ${i + 1}, obra ${org[i].obra}, origem ${org[i].fonte} (${org[i].origem})`, '');
  }
}
writeFileSync(join(V11, 'amostra-lucas.md'), linhas.join('\n'), 'utf8');
console.log(linhas.join('\n'));
