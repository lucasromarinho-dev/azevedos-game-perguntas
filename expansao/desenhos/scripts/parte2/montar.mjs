// Monta desenhos-004..006 a partir de fonte.mjs + verificacao.json
import { BLOCOS } from './fonte.mjs';
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { gerarId } from 'file:///C:/Users/lucas/Documents/Projetos Claude/azevedos-game-perguntas/expansao/scripts/lib.mjs';
const ver = JSON.parse(readFileSync('verificacao.json', 'utf8'));
const vmap = new Map(ver.map((v) => [v.p, v.fonte]));
const todas = [];
for (const b of BLOCOS) for (const [dif, p, r, e, o = {}] of b.itens) {
  const h = createHash('sha1').update(p).digest();
  const alts = [r, ...e];
  for (let i = alts.length - 1; i > 0; i--) { const j = h[i] % (i + 1); [alts[i], alts[j]] = [alts[j], alts[i]]; }
  const q = { categoria: 'Desenhos', dificuldade: dif, pergunta: p, resposta: r, alternativas: alts };
  const f = { id: gerarId(q), ...q, status: 'gerada', fonte_tema: b.tema, obra: b.obra, verificado_web: vmap.get(p) || null };
  if (o.mu) f.musica = true;
  todas.push(f);
}
// distribui em 3 lotes intercalando (cada lote com um pouco de cada obra)
const lotes = [[], [], []];
todas.forEach((q, i) => lotes[i % 3].push(q));
const pasta = 'C:/Users/lucas/Documents/Projetos Claude/azevedos-game-perguntas/expansao/desenhos/lotes/';
lotes.forEach((l, i) => writeFileSync(pasta + 'desenhos-00' + (4 + i) + '.json', JSON.stringify(l, null, 1) + '\n'));
writeFileSync('todas.json', JSON.stringify(todas, null, 1));
const c = (k) => todas.reduce((m, q) => ((m[q[k]] = (m[q[k]] || 0) + 1), m), {});
console.log(todas.length, c('dificuldade'), c('fonte_tema'), 'musicas', todas.filter((q) => q.musica).length, 'sem web', todas.filter((q) => !q.verificado_web).length);
