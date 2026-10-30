// Seleciona as 450 perguntas Disney+Pixar do modo "Desenhos" a partir das 1.000 conferidas de expansao/disney/lotes.
// Entradas (todas em expansao/desenhos/):
//   cortes-cruzamento-v12.json  ids que repetem fato do banco principal v12 (revisados à mão a partir de cruzar-v12.mjs)
//   decisoes-selecao.json       rejeitadas (régua família, bastidor, trivial demais), grupos exclusivos (no máximo 1 de
//                               cada: perguntas que entregam a outra ou repetem a mesma resposta), ajustes de dificuldade
//                               e correções
// Saídas: selecao-disney-450.json (5 campos, categoria "Desenhos") e selecao-disney-450-ref.json (ligação com a origem).
// Uso: node expansao/desenhos/scripts/selecionar-disney.mjs [--relatorio]
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const EXP = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const DES = join(EXP, 'desenhos');
const ler = (p) => JSON.parse(readFileSync(p, 'utf8'));
const filmes = ler(join(EXP, 'disney', 'filmes.json'));
const cortes = ler(join(DES, 'cortes-cruzamento-v12.json'));
const dec = ler(join(DES, 'decisoes-selecao.json'));
const pool = [];
for (const f of readdirSync(join(EXP, 'disney', 'lotes')).filter((f) => /^disney-\d+\.json$/.test(f)).sort())
  for (const p of ler(join(EXP, 'disney', 'lotes', f))) if (p.status === 'conferida') pool.push({ ...p, lote: f.slice(0, -5) });

const META = { facil: 158, medio: 180, dificil: 112 };
const META_MUSICA = { facil: 25, medio: 28, dificil: 17 }; // 70 no total
// Popularidade com famílias brasileiras: 3 = muito conhecido, 1 = filme pouco lembrado. Teto por filme em cada nível.
const NIVEL3 = 'rei-leao frozen frozen-2 toy-story toy-story-2 toy-story-3 nemo moana enrolados pequena-sereia aladdin bela-fera cinderela branca-de-neve incriveis monstros carros divertida-mente zootopia encanto lilo-stitch mulan viva up ratatouille mogli dumbo pinoquio peter-pan 101-dalmatas hercules tarzan bela-adormecida dory'.split(' ');
const NIVEL1 = 'atlantis bolt chicken-little nem-que-a-vaca dinossauro planeta-tesouro familia-futuro mundo-estranho oliver ratinho-detetive bernardo-bianca bernardo-bianca-2 cao-raposa fantasia fantasia-2000 bom-dinossauro dois-irmaos lightyear carros-2 zootopia-2 pooh-2011 wifi-ralph'.split(' ');
const nivel = (g) => (NIVEL3.includes(g) ? 3 : NIVEL1.includes(g) ? 1 : 2);
const TETO = { 3: 20, 2: 10, 1: 4 };
const FRANQUIA = {
  'frozen-2': 'frozen', 'toy-story-2': 'toy-story', 'toy-story-3': 'toy-story', 'toy-story-4': 'toy-story', lightyear: 'toy-story',
  'carros-2': 'carros', 'carros-3': 'carros', 'universidade-monstros': 'monstros', dory: 'nemo', 'incriveis-2': 'incriveis',
  'moana-2': 'moana', 'zootopia-2': 'zootopia', 'wifi-ralph': 'detona-ralph', 'bernardo-bianca-2': 'bernardo-bianca',
  'pooh-2011': 'pooh', 'fantasia-2000': 'fantasia',
};
const franquia = (g) => FRANQUIA[g] || g;
const TETO_FRANQUIA = 30;
const ano = (g) => filmes[g]?.[2] ?? 0;
const PIXAR = new Set(pool.filter((p) => p.categoria === 'Pixar').map((p) => p.grupo));
const era = (g) => (PIXAR.has(g) ? 'Pixar' : ano(g) < 1989 ? 'Clássicos (até 1988)' : ano(g) <= 1999 ? 'Renascença (1989-1999)' : 'Modernos (2000 em diante)');

const rej = new Set(dec.rejeitadas);
const ajuste = dec.ajustes_dificuldade || {}; // id -> {para, motivo}
const correcoes = dec.correcoes || {}; // id -> {pergunta?, resposta?, alternativas?, motivo, fonte}
const forcar = new Set(dec.forcar || []); // entram primeiro (personagens e momentos mais marcantes)
const preferido = new Map(); // primeiro do grupo exclusivo é o preferido
for (const g of dec.exclusivas) g.forEach((id, i) => preferido.set(id, Math.max(preferido.get(id) ?? -9, i === 0 ? 0.6 : -0.6 * i)));
const jitter = (id) => parseInt(createHash('sha1').update('desenhos-2026' + id).digest('hex').slice(0, 6), 16) / 0xffffff;

const cand = pool.filter((p) => !cortes[p.id] && !rej.has(p.id)).map((p) => {
  const dif = ajuste[p.id]?.para || p.dificuldade;
  const musica = p.categoria === 'Músicas';
  return { p, dif, musica, score: (forcar.has(p.id) ? 10 : 0) + nivel(p.grupo) + (preferido.get(p.id) ?? 0) + jitter(p.id) };
});
cand.sort((a, b) => b.score - a.score);
const escolhidas = [];
const usados = new Set();
const porFilme = {}, porFranquia = {}, porDif = { facil: 0, medio: 0, dificil: 0 }, porMus = { facil: 0, medio: 0, dificil: 0 };
// mesma resposta (sem acento, caixa e artigo) na mesma franquia entra uma vez só: evita três perguntas "O Gênio" seguidas
const chaveResp = (p) => franquia(p.grupo) + '|' + p.resposta.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/^(o|a|os|as|um|uma) /, '').trim();
const respUsadas = new Set();
const conflita = (id) =>
  dec.exclusivas.some((g) => g.includes(id) && g.some((o) => o !== id && usados.has(o))) ||
  (dec.no_maximo_2 || []).some((g) => g.includes(id) && g.filter((o) => usados.has(o)).length >= 2);
function tenta(c) {
  const { p, dif, musica } = c;
  if (usados.has(p.id)) return;
  if (porDif[dif] >= META[dif]) return;
  if (musica && porMus[dif] >= META_MUSICA[dif]) return;
  if (!musica && porDif[dif] - porMus[dif] >= META[dif] - META_MUSICA[dif]) return;
  if ((porFilme[p.grupo] || 0) >= TETO[nivel(p.grupo)]) return;
  if ((porFranquia[franquia(p.grupo)] || 0) >= TETO_FRANQUIA) return;
  if (conflita(p.id)) return;
  if (!/^\d+$/.test(p.resposta) && respUsadas.has(chaveResp(p))) return;
  respUsadas.add(chaveResp(p));
  usados.add(p.id);
  escolhidas.push(c);
  porFilme[p.grupo] = (porFilme[p.grupo] || 0) + 1;
  porFranquia[franquia(p.grupo)] = (porFranquia[franquia(p.grupo)] || 0) + 1;
  porDif[dif]++;
  if (musica) porMus[dif]++;
}
for (const c of cand) tenta(c);

// ordem estável: dificuldade e depois ordem de origem (lotes 001 a 011)
const ordemDif = { facil: 0, medio: 1, dificil: 2 };
const idxOrig = new Map(pool.map((p, i) => [p.id, i]));
escolhidas.sort((a, b) => ordemDif[a.dif] - ordemDif[b.dif] || idxOrig.get(a.p.id) - idxOrig.get(b.p.id));
const saida = [], ref = [];
for (const { p, dif, musica } of escolhidas) {
  const c = correcoes[p.id];
  const q = { categoria: 'Desenhos', dificuldade: dif, pergunta: p.pergunta, resposta: p.resposta, alternativas: [...p.alternativas] };
  if (c) {
    if (c.pergunta) q.pergunta = c.pergunta;
    if (c.resposta) { q.alternativas = q.alternativas.map((a) => (a === p.resposta ? c.resposta : a)); q.resposta = c.resposta; }
    if (c.alternativas) q.alternativas = c.alternativas;
  }
  q.pergunta = q.pergunta.normalize('NFC');
  q.resposta = q.resposta.normalize('NFC');
  q.alternativas = q.alternativas.map((a) => a.normalize('NFC'));
  saida.push(q);
  const r = { id: p.id, lote: p.lote, filme: filmes[p.grupo]?.[1] || p.grupo, grupo: p.grupo, era: era(p.grupo), musica, categoria_original: p.categoria, dificuldade_original: p.dificuldade };
  if (ajuste[p.id]) r.ajuste_dificuldade = { de: p.dificuldade, para: dif, motivo: ajuste[p.id].motivo };
  if (c) r.correcao = { antes: { pergunta: p.pergunta, resposta: p.resposta, alternativas: p.alternativas }, motivo: c.motivo, fonte: c.fonte };
  if (p.correcao) r.correcao_conferente = p.correcao;
  ref.push(r);
}
writeFileSync(join(DES, 'selecao-disney-450.json'), JSON.stringify(saida));
writeFileSync(join(DES, 'selecao-disney-450-ref.json'), JSON.stringify(ref, null, 1) + '\n');
const cont = (f) => ref.reduce((m, r) => ((m[f(r)] = (m[f(r)] || 0) + 1), m), {});
console.log(JSON.stringify({
  total: saida.length, por_dificuldade: porDif, musicas_por_dificuldade: porMus, musicas_total: ref.filter((r) => r.musica).length,
  candidatas: cand.length, cortadas_cruzamento_v12: Object.keys(cortes).length, rejeitadas_regua: rej.size,
  ajustes_dificuldade: Object.keys(ajuste).length, correcoes: ref.filter((r) => r.correcao).length,
  por_era: cont((r) => r.era), filmes_distintos: Object.keys(porFilme).length,
  top_filmes: Object.entries(porFilme).sort((a, b) => b[1] - a[1]).slice(0, 12),
  top_franquias: Object.entries(porFranquia).sort((a, b) => b[1] - a[1]).slice(0, 6),
}, null, 1));
if (process.argv.includes('--relatorio')) {
  const d = {};
  for (const c of cand.filter((c) => !usados.has(c.p.id))) { const k = c.dif + (c.musica ? '-mus' : ''); d[k] = (d[k] || 0) + 1; }
  console.log('sobras', JSON.stringify(d));
}
