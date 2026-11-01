// Monta a v1.1 do banco especial "Desenhos" (1.000 perguntas), que substitui a v1 no ar.
// Ordem de prioridade:
//   1) as 622 da v1 que ficam pela régua do adulto (v2/revisao-regua-adulto-v1.json), com a dificuldade final da revisão;
//   2) as reescritas aprovadas (v1_1/reescritas.json), cada uma conferida na web pelo conferente;
//   3) das 408 boas da v2 (v2/revisao-regua-adulto.json, posições 1001-2000 de v2/perguntas-desenhos-v2.json):
//      todas as difíceis e médias, e as fáceis que faltarem para fechar 1.000. Fácil sai primeiro da obra com mais perguntas
//      no conjunto (empate: a de posição maior), para espalhar as obras.
// As correções já decididas vêm do arquivo da v2 (Piyomon na 002.66 e os AJUSTES_REA do montar-v2.mjs); o script confere.
// Saída: v1_1/perguntas-desenhos-v1_1.json (uma linha, UTF-8 sem BOM, NFC, sem quebra no fim, 5 campos) e
//        v1_1/perguntas-desenhos-v1_1-origem.json (origem por posição).
// Regras checadas: 1.000; nenhuma obra (franquia) acima de 45; Disney + Pixar <= 55%; enunciados únicos (sem caixa e acento);
//   4 alternativas distintas com a resposta entre elas; nenhum travessão longo.
// Uso: node expansao/desenhos/v1_1/scripts/montar-v1_1.mjs [--seco]
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const V11 = join(dirname(fileURLToPath(import.meta.url)), '..');
const D = join(V11, '..');
const V2 = join(D, 'v2');
const SECO = process.argv.includes('--seco');
const ler = (f) => JSON.parse(readFileSync(f, 'utf8').replace(/^﻿/, ''));
const NIVEIS = ['facil', 'medio', 'dificil'];
const TOTAL = 1000;
const TETO_OBRA = 45;
const TETO_DISNEY_PIXAR = 550;
const nfc = (s) => String(s).normalize('NFC');
const chave = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

// Mesmo agrupamento por franquia do montar-v2.mjs (copiado: importar aquele script o executaria).
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
const obraChave = (obra) => {
  const k = chave(obra).replace(/\s*\(franquia\)$/, '');
  for (const [re, nome] of FRANQUIAS) if (re.test(k)) return nome;
  return nfc(obra).replace(/\s*\(franquia\)$/, '');
};

// Tirados depois do cruzamento final (posição na revisão -> motivo). Ver NOTAS.md.
const EXCLUIR_V2 = {
  1073: "o enunciado da v1:756 (Greymon) já cita o Agumon, resposta desta; as duas revisões guardaram cada uma a sua pergunta do Agumon",
  1181: "a v1:215 pergunta quem é a Madame Samovar na canção-tema e esta cita o nome para perguntar o objeto",
};
// Ajustes de enunciado em perguntas da v2, feitos na montagem (o arquivo da v2 não muda). Chave = posição na revisão;
// "de" confere o texto de origem. Motivo: no cruzamento final, o enunciado dava a resposta de outra pergunta do banco.
const AJUSTES_V2 = {
  1401: { de: "Qual Cavaleiro de Ouro de Gêmeos se passava pelo Grande Mestre e tentou matar a pequena Saori?", pergunta: "Qual Cavaleiro de Ouro de Gêmeos se passava pelo Grande Mestre e tentou matar Atena ainda bebê?" }, // "Saori" = resposta da v1:932
  1219: { de: "Qual Cavaleiro de Fênix, irmão mais velho de Shun, é o mais solitário do grupo em \"Os Cavaleiros do Zodíaco\"?", pergunta: "Qual Cavaleiro de Fênix, irmão mais velho do Cavaleiro de Andrômeda, é o mais solitário do grupo em \"Os Cavaleiros do Zodíaco\"?" }, // "Shun" = resposta da v1:746
  1620: { de: "Qual é o golpe mais poderoso do Shun, de Andrômeda?", pergunta: "Qual é o golpe mais poderoso do Cavaleiro de Andrômeda, em Os Cavaleiros do Zodíaco?" }, // "Shun" = resposta da v1:746
};

const limpa = (p, dif) => ({
  categoria: 'Desenhos',
  dificuldade: dif,
  pergunta: nfc(p.pergunta),
  resposta: nfc(p.resposta),
  alternativas: p.alternativas.map(nfc),
});

const v1 = ler(join(D, 'perguntas-desenhos.json'));
const v2 = ler(join(V2, 'perguntas-desenhos-v2.json'));
const origemV2 = ler(join(V2, 'perguntas-desenhos-v2-origem.json'));
const revV1 = ler(join(V2, 'revisao-regua-adulto-v1.json'));
const revV2 = ler(join(V2, 'revisao-regua-adulto.json'));
const reescritas = ler(join(V11, 'reescritas.json'));
if (v1.length !== 1000 || v2.length !== 2000 || revV1.length !== 1000 || revV2.length !== 1000) throw new Error('tamanhos de entrada inesperados');

// correções já decididas: conferidas no arquivo da v2
const iPiyo = origemV2.findIndex((m) => m.origem === '002.66');
if (v2[iPiyo].resposta !== 'Piyomon' || !v2[iPiyo].alternativas.includes('Piyomon')) throw new Error('002.66 sem Piyomon');
const AJUSTES_REA = {
  382: 'Em Os Simpsons, qual zelador escocês da escola vive irritado e rasgando a camisa?',
  390: 'Em Os Simpsons, qual loja de conveniência o Apu toca?',
  394: 'Em Pokémon, qual garota passa a viajar com Ash na região de Hoenn?',
};
for (const [i, txt] of Object.entries(AJUSTES_REA)) {
  const j = origemV2.findIndex((m) => m.origem === 'rea:' + i);
  if (v2[j].pergunta !== txt) throw new Error('AJUSTES_REA rea:' + i + ' não aplicado na v2');
}

const saida = [];
const meta = [];
const conta = () => Object.fromEntries(NIVEIS.map((d) => [d, saida.filter((p) => p.dificuldade === d).length]));

// ---------- 1) v1 que fica ----------
revV1.forEach((r, i) => {
  if (r.posicao !== i + 1 || r.origem !== 'v1:' + i) throw new Error('revisão v1 desalinhada em ' + i);
  if (r.decisao !== 'fica') return;
  if (nfc(v1[i].resposta) !== nfc(r.resposta) || JSON.stringify(v1[i]) !== JSON.stringify(v2[i])) throw new Error('v1 desalinhada em ' + i);
  if (!NIVEIS.includes(r.dificuldade_final)) throw new Error('dificuldade_final inválida v1:' + i);
  saida.push(limpa(v1[i], r.dificuldade_final));
  meta.push({ origem: 'v1:' + i, fonte: 'v1', posicao_revisao: r.posicao, obra: r.obra, grupo: r.grupo, dificuldade_original: v1[i].dificuldade });
});
const nV1 = saida.length;

// ---------- 2) reescritas ----------
const todasRev = [...revV1, ...revV2];
for (const r of reescritas) {
  const base = todasRev[r.origem_posicao - 1];
  if (!base || base.decisao !== 'sai') throw new Error('reescrita sem pergunta descartada de origem: ' + r.origem_posicao);
  if (!r.verificado_web_conferente || !r.dublagem_br) throw new Error('reescrita sem checagem web ou dublagem: ' + r.origem_posicao);
  saida.push(limpa(r, r.dificuldade));
  meta.push({ origem: 'reescrita:' + r.origem_posicao, fonte: 'reescrita', posicao_revisao: r.origem_posicao, obra: r.obra, grupo: r.grupo,
    substitui: v2[r.origem_posicao - 1].pergunta });
}
const nRe = saida.length - nV1;

// ---------- 3) boas da v2 ----------
const cand = revV2.filter((r) => r.decisao === 'fica' && !EXCLUIR_V2[r.posicao]).map((r) => {
  let p = v2[r.posicao - 1];
  const aj = AJUSTES_V2[r.posicao];
  if (aj) { if (p.pergunta !== aj.de) throw new Error("ajuste v2 " + r.posicao + ": texto de origem mudou"); p = { ...p, pergunta: aj.pergunta }; }
  if (nfc(p.resposta) !== nfc(r.resposta)) throw new Error('v2 desalinhada em ' + r.posicao);
  return { r, p, dif: r.dificuldade_final };
});
const obrasAgora = {};
meta.forEach((m) => { const k = obraChave(m.obra); obrasAgora[k] = (obrasAgora[k] || 0) + 1; });
let escolha = [...cand];
const totalObra = (k) => (obrasAgora[k] || 0) + escolha.filter((c) => obraChave(c.r.obra) === k).length;
// fáceis saem primeiro, da obra com mais perguntas no conjunto
while (nV1 + nRe + escolha.length > TOTAL) {
  const faceis = escolha.filter((c) => c.dif === 'facil');
  if (!faceis.length) throw new Error('sem fáceis para tirar');
  faceis.sort((a, b) => totalObra(obraChave(b.r.obra)) - totalObra(obraChave(a.r.obra)) || b.r.posicao - a.r.posicao);
  escolha = escolha.filter((c) => c !== faceis[0]);
}
const foraV2 = cand.filter((c) => !escolha.includes(c)).map((c) => c.r.posicao);
for (const c of escolha) {
  saida.push(limpa(c.p, c.dif));
  meta.push({ origem: origemV2[c.r.posicao - 1].origem, fonte: 'v2', posicao_revisao: c.r.posicao, obra: c.r.obra, grupo: c.r.grupo, dificuldade_original: c.p.dificuldade });
}
const nV2 = escolha.length;

// ---------- checagens ----------
if (saida.length !== TOTAL) throw new Error('total diferente de 1.000: ' + saida.length);
const vistos = new Map();
saida.forEach((p, i) => {
  if (Object.keys(p).join() !== 'categoria,dificuldade,pergunta,resposta,alternativas') throw new Error('campos ' + i);
  if (!NIVEIS.includes(p.dificuldade)) throw new Error('dificuldade inválida ' + i);
  if (p.alternativas.length !== 4) throw new Error('alternativas != 4: ' + p.pergunta);
  if (new Set(p.alternativas.map(chave)).size !== 4) throw new Error('alternativas repetidas: ' + p.pergunta);
  if (!p.alternativas.includes(p.resposta)) throw new Error('resposta fora das alternativas: ' + p.pergunta);
  if (/[–—]/.test(JSON.stringify(p))) throw new Error('travessão longo: ' + p.pergunta);
  const k = chave(p.pergunta);
  if (vistos.has(k)) throw new Error(`enunciado duplicado: ${meta[vistos.get(k)].origem} x ${meta[i].origem}: ${p.pergunta}`);
  vistos.set(k, i);
});
const obras = {};
meta.forEach((m) => { const k = obraChave(m.obra); obras[k] = (obras[k] || 0) + 1; });
const acima = Object.entries(obras).filter(([, n]) => n > TETO_OBRA);
if (acima.length) throw new Error('obra acima de 45: ' + JSON.stringify(acima));
const grupos = {};
meta.forEach((m) => { grupos[m.grupo] = (grupos[m.grupo] || 0) + 1; });
const disneyPixar = (grupos.Disney || 0) + (grupos.Pixar || 0);
if (disneyPixar > TETO_DISNEY_PIXAR) throw new Error('Disney + Pixar acima de 55%: ' + disneyPixar);

// ---------- relatório ----------
const porNivelFonte = {};
saida.forEach((p, i) => { const f = meta[i].fonte; porNivelFonte[f] = porNivelFonte[f] || { facil: 0, medio: 0, dificil: 0 }; porNivelFonte[f][p.dificuldade]++; });
console.log('Composição:', { v1: nV1, reescritas: nRe, v2: nV2 }, 'v2 boas que ficaram fora:', foraV2.length);
console.log('Por nível e fonte:', porNivelFonte);
console.log('Por nível:', conta(), 'alvo 350/400/250');
console.log('Por grupo:', grupos, 'Disney+Pixar:', disneyPixar);
console.log('Top 10 obras:', Object.entries(obras).sort((a, b) => b[1] - a[1]).slice(0, 10));
console.log('v2 fora (posição):', foraV2.join(' '));

if (!SECO) {
  writeFileSync(join(V11, 'perguntas-desenhos-v1_1.json'), JSON.stringify(saida), 'utf8');
  writeFileSync(join(V11, 'perguntas-desenhos-v1_1-origem.json'), JSON.stringify(meta.map((m, i) => ({ posicao: i + 1, ...m })), null, 1) + '\n', 'utf8');
  console.log('gravado perguntas-desenhos-v1_1.json e perguntas-desenhos-v1_1-origem.json');
}
