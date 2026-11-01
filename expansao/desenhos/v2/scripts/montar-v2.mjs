// Monta a v2 do banco especial "Desenhos" (2.000 perguntas):
//   1) as 1.000 da v1 (perguntas-desenhos.json), na mesma ordem e idênticas;
//   2) as 428 de v2/reaproveitadas.json;
//   3) as "conferida" dos lotes anim-001 a anim-007;
//   4) as "conferida" do anim-008 que faltarem para fechar 2.000, escolhidas para levar a
//      dificuldade rumo a 800 fáceis / 760 médias / 440 difíceis. As conferidas que sobrarem
//      viram "reserva" no próprio anim-008 (com motivo_montagem).
// Saída: expansao/desenhos/v2/perguntas-desenhos-v2.json (uma linha, UTF-8 sem BOM, NFC, sem quebra no fim,
//   5 campos na ordem categoria, dificuldade, pergunta, resposta, alternativas).
// Regras checadas: Disney + Pixar <= 1.000; nenhuma obra (franquia) acima de 60; enunciados únicos
//   (sem caixa e acento); 4 alternativas distintas com a resposta entre elas.
// Uso: node expansao/desenhos/v2/scripts/montar-v2.mjs [--seco]   (--seco não grava nada)
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const V2 = join(dirname(fileURLToPath(import.meta.url)), '..');
const D = join(V2, '..');
const SECO = process.argv.includes('--seco');
const ler = (f) => JSON.parse(readFileSync(f, 'utf8').replace(/^﻿/, ''));
const NIVEIS = ['facil', 'medio', 'dificil'];
const META = { facil: 800, medio: 760, dificil: 440 };
const TOTAL = 2000;
const TETO_OBRA = 60;
const TETO_DISNEY_PIXAR = 1000;
const nfc = (s) => String(s).normalize('NFC');
const chave = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

// Dificuldade final. Nos lotes anim o campo "dificuldade" já vem com o ajuste aplicado, mas o
// dificuldade_ajuste às vezes é texto livre ("facil -> medio", "medio: motivo"). Lê o nível que vem
// depois de "->" ou, sem seta, o primeiro nível citado; se divergir do campo, para tudo.
function dificuldadeFinal(p, onde) {
  if (!NIVEIS.includes(p.dificuldade)) throw new Error(`${onde}: dificuldade inválida ${p.dificuldade}`);
  if (!p.dificuldade_ajuste) return p.dificuldade;
  const t = chave(p.dificuldade_ajuste).replace(/médio/g, 'medio');
  const seta = t.match(/->\s*(facil|medio|dificil)/);
  const solto = t.match(/\b(facil|medio|dificil)\b/);
  const alvo = seta ? seta[1] : solto ? solto[1] : null;
  if (!alvo) throw new Error(`${onde}: dificuldade_ajuste ilegível: ${p.dificuldade_ajuste}`);
  if (alvo !== p.dificuldade) throw new Error(`${onde}: ajuste "${p.dificuldade_ajuste}" não bate com dificuldade "${p.dificuldade}"`);
  return alvo;
}

const limpa = (p, dif) => ({
  categoria: 'Desenhos',
  dificuldade: dif,
  pergunta: nfc(p.pergunta),
  resposta: nfc(p.resposta),
  alternativas: p.alternativas.map(nfc),
});

// Obra agrupada por franquia, para o teto de 60.
const FRANQUIAS = [
  [/^shrek|gato de botas/, 'Shrek'], [/^toy story|lightyear/, 'Toy Story'], [/^frozen/, 'Frozen'], [/^carros/, 'Carros'],
  [/monstros s\.a\.|universidade monstros/, 'Monstros S.A.'], [/^moana/, 'Moana'], [/os incriveis/, 'Os Incríveis'],
  [/procurando (nemo|dory)/, 'Procurando Nemo'], [/^divertida mente/, 'Divertida Mente'], [/^zootopia/, 'Zootopia'],
  [/^bernardo e bianca/, 'Bernardo e Bianca'], [/detona ralph|wifi ralph/, 'Detona Ralph'], [/avatar|lenda de korra/, 'Avatar'],
  [/jovens titas/, 'Os Jovens Titãs'], [/^spirit/, 'Spirit'], [/^fantasia/, 'Fantasia'], [/meu malvado favorito|^minions/, 'Meu Malvado Favorito'],
  [/^mickey|tio patinhas|pato donald|tico e teco|alo, amigos|voce ja foi a bahia/, 'Mickey e turma (Disney)'],
  [/ursinho pooh/, 'Ursinho Pooh'], [/^101 dalmatas/, '101 Dálmatas'], [/^rio$/, 'Rio'], [/^madagascar/, 'Madagascar'],
  [/^kung fu panda/, 'Kung Fu Panda'], [/^a era do gelo/, 'A Era do Gelo'], [/^como treinar/, 'Como Treinar o Seu Dragão'],
];
export const obraChave = (obra) => {
  const k = chave(obra).replace(/\s*\(franquia\)$/, '');
  for (const [re, nome] of FRANQUIAS) if (re.test(k)) return nome;
  return nfc(obra).replace(/\s*\(franquia\)$/, '');
};
const PIXAR = /^(toy story|carros|monstros s\.a\.|universidade monstros|procurando (nemo|dory)|os incriveis|ratatouille|wall-e|up: altas|valente|divertida mente|viva: a vida|soul|luca|elementos|lightyear|o bom dinossauro|dois irmaos|vida de inseto|red: crescer)/;
const GRUPO_TEMA = {
  DreamWorks: 'DreamWorks e similares', Illumination: 'DreamWorks e similares', 'Blue Sky': 'DreamWorks e similares',
  Sony: 'DreamWorks e similares', 'Warner Animation': 'DreamWorks e similares', Aardman: 'DreamWorks e similares',
  Nickelodeon: 'Cartoon/Nick', 'Cartoon Network': 'Cartoon/Nick', 'Discovery Kids': 'Cartoon/Nick', Gloob: 'Cartoon/Nick',
  'DreamWorks TV': 'Cartoon/Nick', 'Peppa Pig (Nick Jr./Discovery Kids)': 'Cartoon/Nick', 'Disney Channel': 'Disney',
  'Desenhos clássicos': 'clássicos', 'Anime de família': 'anime', 'Desenhos do Brasil': 'Brasil',
};
const grupoDe = (obra, grupo, tema) => {
  if (PIXAR.test(chave(obra))) return 'Pixar';
  const g = grupo || GRUPO_TEMA[tema];
  if (!g) throw new Error('sem grupo: ' + obra + ' / ' + tema);
  return g;
};

// ---------- 1) v1 ----------
const v1 = ler(join(D, 'perguntas-desenhos.json'));
if (v1.length !== 1000) throw new Error('v1 não tem 1.000');
const meta = []; // {origem, obra, grupo, musica} paralelo à saída
const refDisney = ler(join(D, 'selecao-disney-450.json'));
const ref = ler(join(D, 'selecao-disney-450-ref.json'));
ref.forEach((r, i) => meta.push({ origem: 'v1:' + i, obra: r.filme, grupo: grupoDe(r.filme, r.era === 'Pixar' ? 'Pixar' : 'Disney'), musica: !!r.musica }));
for (const n of ['001', '002', '003', '004', '005', '006', '007']) {
  for (const p of ler(join(D, 'lotes', `desenhos-${n}.json`))) {
    if (p.status !== 'conferida') continue;
    // confere que o metadado está alinhado com a v1 (a resposta da ficha do lote é a da posição na v1)
    if (nfc(p.resposta) !== v1[meta.length].resposta) throw new Error('metadado desalinhado na v1:' + meta.length);
    meta.push({ origem: 'v1:' + meta.length, obra: p.obra, grupo: grupoDe(p.obra, null, p.fonte_tema), musica: !!p.musica });
  }
}
if (meta.length !== 1000 || refDisney.length !== 450) throw new Error('metadados da v1 não fecham 1.000');
refDisney.forEach((p, i) => { if (nfc(p.resposta) !== v1[i].resposta) throw new Error('metadado Disney desalinhado na v1:' + i); });

// Ajustes de enunciado nas reaproveitadas, feitos na montagem (reaproveitadas.json fica intacto).
// Motivo: no cruzamento final das 2.000, o enunciado destas dava o fato de outra pergunta do banco.
// Chave = posição em reaproveitadas.json; "de" confere que o texto de origem é o esperado.
const AJUSTES_REA = {
  382: { de: 'Qual zelador escocês da escola de Springfield vive irritado e rasgando a camisa?', pergunta: 'Em Os Simpsons, qual zelador escocês da escola vive irritado e rasgando a camisa?' }, // "Springfield" = resposta da v1:730
  390: { de: 'Em Os Simpsons, qual loja de conveniência Apu toca em Springfield?', pergunta: 'Em Os Simpsons, qual loja de conveniência o Apu toca?' }, // "Springfield" = resposta da v1:730
  394: { de: 'Qual garota passa a viajar com Ash em Hoenn, no lugar de Misty?', pergunta: 'Em Pokémon, qual garota passa a viajar com Ash na região de Hoenn?' }, // "Misty" viajando com Ash = fato e resposta da v1:827
};
const saida = v1.map((p) => ({ categoria: p.categoria, dificuldade: p.dificuldade, pergunta: p.pergunta, resposta: p.resposta, alternativas: [...p.alternativas] }));

// ---------- 2) reaproveitadas ----------
const rea = ler(join(V2, 'reaproveitadas.json'));
if (rea.length !== 428) throw new Error('reaproveitadas não tem 428');
rea.forEach((p, i) => {
  const a = AJUSTES_REA[i];
  if (a) {
    if (p.pergunta !== a.de) throw new Error('ajuste rea:' + i + ': texto de origem mudou');
    p = { ...p, pergunta: a.pergunta };
  }
  saida.push(limpa(p, dificuldadeFinal(p, 'rea:' + i)));
  meta.push({ origem: 'rea:' + i, obra: p.obra, grupo: grupoDe(p.obra, p.grupo), musica: !!p.musica });
});

// ---------- 3) anim-001..007 ----------
// Músicas dos lotes anim (pergunta pelo título da música; só o 005.27 traz o campo musica). Lista das NOTAS de conferência.
const MUSICA_ANIM = new Set(['001.23', '001.26', '001.30', '001.88', '003.87', '003.88', '005.27']);
const porLote = {};
for (let n = 1; n <= 7; n++) {
  const L = `anim-00${n}`;
  porLote[L] = 0;
  ler(join(V2, 'lotes', L + '.json')).forEach((p, i) => {
    if (p.status !== 'conferida') return;
    const onde = `${String(n).padStart(3, '0')}.${i + 1}`;
    saida.push(limpa(p, dificuldadeFinal(p, onde)));
    meta.push({ origem: onde, obra: p.obra, grupo: grupoDe(p.obra, p.grupo, p.fonte_tema), musica: !!p.musica || MUSICA_ANIM.has(onde) });
    porLote[L]++;
  });
}
const p0266 = saida[meta.findIndex((m) => m.origem === '002.66')];
if (p0266.resposta !== 'Piyomon') throw new Error('002.66 sem a troca Biyomon -> Piyomon');

// ---------- 4) anim-008: escolha para fechar 2.000 ----------
const F8 = join(V2, 'lotes', 'anim-008.json');
const lote8 = ler(F8);
const conta = (lista) => Object.fromEntries(NIVEIS.map((d) => [d, lista.filter((p) => p.dificuldade === d).length]));
const atual = conta(saida);
const faltam = TOTAL - saida.length;
const cand8 = lote8.map((p, i) => ({ p, i, dif: dificuldadeFinal(p, '008.' + (i + 1)) }))
  .filter((c) => c.p.status === 'conferida' || (c.p.status === 'reserva' && c.p.motivo_montagem));
if (cand8.length < faltam) throw new Error(`anim-008 só tem ${cand8.length} conferidas, faltam ${faltam}`);
// guloso: a cada passo pega, na ordem do lote, uma do nível com maior falta em relação à meta
const escolhidas = new Set();
const soma = { ...atual };
for (let k = 0; k < faltam; k++) {
  const niveis = NIVEIS.filter((d) => cand8.some((c) => c.dif === d && !escolhidas.has(c.i)))
    .sort((a, b) => (META[b] - soma[b]) - (META[a] - soma[a]));
  const c = cand8.find((x) => x.dif === niveis[0] && !escolhidas.has(x.i));
  escolhidas.add(c.i);
  soma[c.dif]++;
}
for (const c of cand8) {
  if (escolhidas.has(c.i)) {
    c.p.status = 'conferida';
    delete c.p.motivo_montagem;
    saida.push(limpa(c.p, c.dif));
    meta.push({ origem: '008.' + (c.i + 1), obra: c.p.obra, grupo: grupoDe(c.p.obra, c.p.grupo, c.p.fonte_tema), musica: !!c.p.musica });
  } else {
    c.p.status = 'reserva';
    c.p.motivo_montagem = `reserva da montagem v2: conferida, mas sobrou. As 2.000 fecharam com ${faltam} do anim-008 e as médias já passavam da meta de ${META.medio}.`;
  }
}

// ---------- checagens ----------
if (saida.length !== TOTAL) throw new Error('total diferente de 2.000: ' + saida.length);
for (let i = 0; i < 1000; i++) if (JSON.stringify(saida[i]) !== JSON.stringify(v1[i])) throw new Error('v1 mudou no item ' + i);
const vistos = new Map();
saida.forEach((p, i) => {
  if (Object.keys(p).join() !== 'categoria,dificuldade,pergunta,resposta,alternativas') throw new Error('campos ' + i);
  if (!NIVEIS.includes(p.dificuldade)) throw new Error('dificuldade inválida ' + i);
  if (p.alternativas.length !== 4) throw new Error('alternativas != 4: ' + p.pergunta);
  if (new Set(p.alternativas.map(chave)).size !== 4) throw new Error('alternativas repetidas: ' + p.pergunta);
  if (!p.alternativas.includes(p.resposta)) throw new Error('resposta fora das alternativas: ' + p.pergunta);
  if (/[20132014]/.test(JSON.stringify(p)) && i >= 1000) throw new Error('travessão longo: ' + p.pergunta);
  const k = chave(p.pergunta);
  if (vistos.has(k)) throw new Error(`enunciado duplicado: ${meta[vistos.get(k)].origem} x ${meta[i].origem}: ${p.pergunta}`);
  vistos.set(k, i);
});
const obras = {};
meta.forEach((m) => { const k = obraChave(m.obra); obras[k] = (obras[k] || 0) + 1; });
const acima = Object.entries(obras).filter(([, n]) => n > TETO_OBRA);
if (acima.length) throw new Error('obra acima de 60: ' + JSON.stringify(acima));
const grupos = {};
meta.forEach((m) => { grupos[m.grupo] = (grupos[m.grupo] || 0) + 1; });
const disneyPixar = (grupos.Disney || 0) + (grupos.Pixar || 0);
if (disneyPixar > TETO_DISNEY_PIXAR) throw new Error('Disney + Pixar acima de 1.000: ' + disneyPixar);

// ---------- relatório ----------
console.log('Por lote anim (conferidas):', porLote, 'anim-008 escolhidas:', [...escolhidas].map((i) => '008.' + (i + 1)).join(' '));
console.log('Por dificuldade:', conta(saida), 'meta', META);
console.log('Por grupo:', grupos, 'Disney+Pixar:', disneyPixar);
console.log('Top 10 obras:', Object.entries(obras).sort((a, b) => b[1] - a[1]).slice(0, 10));
console.log('Músicas (marcadas):', meta.filter((m) => m.musica).length);

if (!SECO) {
  writeFileSync(join(V2, 'perguntas-desenhos-v2.json'), JSON.stringify(saida), 'utf8');
  writeFileSync(F8, JSON.stringify(lote8, null, 1) + '\n', 'utf8');
  writeFileSync(join(V2, 'perguntas-desenhos-v2-origem.json'), JSON.stringify(meta, null, 1) + '\n', 'utf8');
  console.log('gravado perguntas-desenhos-v2.json, perguntas-desenhos-v2-origem.json e anim-008.json');
}
