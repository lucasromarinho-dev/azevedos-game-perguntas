// Aplica as decisões do conferente-disney-v1 num lote: status conferida/descartada, correcao, verificado_web_conferente.
// Uso: node aplicar.mjs PASTA_LOTES NNN
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { D } from './decisoes.mjs';
const [,, LOTES, NNN] = process.argv;
const arq = `${LOTES}/disney-${NNN}.json`;
const lote = JSON.parse(readFileSync(arq, 'utf8'));
const fontes = existsSync('fontes.json') ? JSON.parse(readFileSync('fontes.json', 'utf8')) : {};
const embaralhar = (id, arr) => arr.map((a) => [createHash('md5').update(id + a).digest('hex'), a]).sort().map((x) => x[1]);
let conf = 0, desc = 0, corr = 0;
for (const p of lote) {
  if (p.status === 'descartada') continue; // descartadas na geração ficam como estavam
  const dec = D[p.id];
  if (dec && dec.d) { p.status = 'descartada'; p.motivo = 'conferente: ' + dec.d; desc++; if (fontes[p.id]) p.verificado_web_conferente = fontes[p.id]; continue; }
  if (dec && dec.c) {
    const antes = {};
    const c = dec.c;
    for (const k of ['categoria', 'dificuldade', 'pergunta', 'resposta']) if (c[k] !== undefined && c[k] !== p[k]) { antes[k] = p[k]; p[k] = c[k]; }
    if (c.alternativas) { antes.alternativas = p.alternativas; p.alternativas = embaralhar(p.id, c.alternativas); }
    for (const t of ['troca', 'troca2', 'troca3']) if (c[t]) {
      const i = p.alternativas.indexOf(c[t][0]);
      if (i < 0) throw new Error(`${p.id}: alternativa "${c[t][0]}" não existe`);
      if (!antes.alternativas) antes.alternativas = [...p.alternativas];
      p.alternativas[i] = c[t][1];
    }
    if (!p.alternativas.includes(p.resposta) || new Set(p.alternativas).size !== 4) throw new Error(`${p.id}: alternativas inválidas`);
    p.correcao = { motivo: dec.m, antes };
    corr++;
  }
  p.status = 'conferida';
  p.verificado_web_conferente = fontes[p.id] || 'sem checagem web própria (fora da prioridade; conferida pelo enredo)';
  conf++;
}
writeFileSync(arq, JSON.stringify(lote, null, 1) + '\n');
console.log(`disney-${NNN}: ${conf} conferidas (${corr} corrigidas), ${desc} descartadas`);
