#!/usr/bin/env node
// Árvore de temas com cotas. Meta atual: 3x (banco total ~13.700); a cota 10x original fica como referência. Recalcula as contagens e grava expansao/arvore.json.
// - meta: total desejado no subtema (banco atual + novas), definido pelo Lucas
// - atual_estimado: perguntas do banco atual no subtema (estimativa por palavras-chave, via subtemas.json)
// - novas_validas: perguntas novas não descartadas nos lotes
// - status: "aberto" | "saturado" (saturado = microtema/subtema que descartou mais de 50% das candidatas)
// - microtemas: lista livre, preenchida conforme o trabalho avança
// Uso: node expansao/scripts/arvore.mjs   (preserva status e microtemas já gravados)
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { lerJson, gravarJson, listarLotes, lerBancoAtual, RAIZ_EXP } from './lib.mjs';

// [nome na árvore, meta, nomes equivalentes em subtemas.json / campo "subtema" das fichas]
const METAS = {
  Geografia: [
    ['Brasil: estados, capitais e regiões', 500, ['Capitais estaduais e regiões do Brasil']],
    ['Brasil: cidades, turismo e apelidos', 700, ['Cidades e turismo no Brasil']],
    ['Comidas e bebidas típicas, Brasil e mundo', 600, []],
    ['Rios, oceanos, mares e ilhas', 600, ['Rios, bacias e hidrografia', 'Oceanos, mares, ilhas e estreitos']],
    ['Relevo, vulcões e desertos', 400, ['Relevo, montanhas e vulcões']],
    ['Biomas, clima e natureza', 400, ['Biomas, clima e vegetação']],
    ['Capitais e países do mundo', 900, ['Capitais do mundo', 'Fronteiras, continentes e países']],
    ['Bandeiras, moedas e idiomas', 600, ['Bandeiras, moedas e idiomas']],
    ['Cidades e monumentos do mundo', 700, ['Cidades e monumentos do mundo']],
    ['População, curiosidades e recordes', 500, ['Economia e população', 'Coordenadas, fusos e cartografia']],
  ],
  História: [
    ['Brasil Colônia', 500, ['Brasil Colônia']],
    ['Brasil Império', 500, ['Brasil Império']],
    ['Brasil República, Vargas, ditadura e redemocratização', 700, ['Brasil República e Era Vargas', 'Ditadura militar e redemocratização']],
    ['Antiguidade', 700, ['Antiguidade (Egito, Grécia, Roma)']],
    ['Mitologia', 500, ['Mitologia']],
    ['Idade Média', 400, ['Idade Média e feudalismo']],
    ['Navegações e Américas pré-colombianas', 400, ['Grandes Navegações e Américas pré-colombianas']],
    ['Revoluções e Idade Moderna', 500, ['Revoluções e Idade Moderna', 'Colonização e imigração']],
    ['Guerras Mundiais', 600, ['Guerras Mundiais']],
    ['Guerra Fria e século XX', 500, ['Guerra Fria e século XX']],
    ['Ásia, África e Oriente Médio', 400, ['Ásia, África e Oriente Médio']],
    ['Personagens, invenções e filosofia', 600, ['Personagens e invenções históricas', 'Filosofia e pensadores', 'Arte e cultura na história']],
  ],
  Ciências: [
    ['Corpo humano e saúde', 900, ['Corpo humano e saúde']],
    ['Animais', 1000, ['Animais e zoologia']],
    ['Plantas', 400, ['Plantas e botânica']],
    ['Ecologia e meio ambiente', 300, ['Ecologia e meio ambiente']],
    ['Genética e evolução', 300, ['Genética e evolução']],
    ['Química', 500, ['Química e elementos']],
    ['Física e unidades', 500, ['Física, energia e unidades', 'Instrumentos e medições']],
    ['Astronomia', 700, ['Astronomia e espaço']],
    ['Terra, geologia e clima', 400, ['Terra: geologia e clima']],
    ['Dinossauros e pré-história', 300, ['Dinossauros e pré-história']],
    ['Cientistas e descobertas', 400, ['Cientistas e descobertas']],
    ['Matemática e lógica', 300, ['Matemática']],
  ],
  Esportes: [
    ['Brasileirão e clubes brasileiros', 1500, ['Brasileirão e clubes brasileiros', 'Apelidos e clubes regionais']],
    ['Seleção e craques', 700, ['Seleção brasileira e craques históricos']],
    ['Copa do Mundo', 700, ['Copa do Mundo']],
    ['Libertadores e futebol sul-americano', 500, ['Libertadores e futebol sul-americano']],
    ['Futebol europeu', 900, ['Futebol europeu e Champions']],
    ['Basquete e NBA', 500, ['Basquete e NBA']],
    ['F1 e automobilismo', 500, ['Fórmula 1 e automobilismo']],
    ['Olimpíadas e atletismo', 600, ['Olimpíadas e atletismo']],
    ['Lutas, UFC e boxe', 400, ['Lutas, UFC e boxe']],
    ['Tênis', 300, ['Tênis e golfe']],
    ['Vôlei', 300, ['Vôlei e outros esportes de quadra']],
    ['Esportes americanos', 200, ['Esportes americanos (NFL, MLB, NHL)']],
    ['Outros (xadrez, surfe, skate, e-sports)', 300, ['Ciclismo, xadrez e outros', 'Regras e termos do esporte']],
  ],
  Entretenimento: [
    ['Novelas e TV brasileira', 900, ['Novelas e TV brasileira']],
    ['Reality shows (BBB, A Fazenda etc.)', 400, []],
    ['Humor e programas de auditório', 300, []],
    ['Música brasileira', 1200, ['Música brasileira']],
    ['Música internacional', 1000, ['Música internacional e pop']],
    ['Cinema brasileiro', 300, ['Cinema brasileiro']],
    ['Cinema internacional e Oscar', 800, ['Cinema internacional e Oscar']],
    ['Sagas e franquias', 600, ['Sagas e franquias de cinema']],
    ['Super-heróis', 500, ['Super-heróis e quadrinhos']],
    ['Animação', 500, ['Animação, Disney e Pixar']],
    ['Anime', 400, ['Anime e mangá']],
    ['Séries e streaming', 800, ['Séries de TV e streaming']],
    ['Literatura', 400, ['Literatura e personagens']],
    ['Memes e internet', 300, []],
  ],
  Tecnologia: [
    ['Games: Nintendo', 500, ['Videogames: Nintendo e Mario']],
    ['Games: consoles e história', 600, ['Videogames: consoles e história']],
    ['Games: franquias e personagens', 1500, ['Videogames: franquias e personagens']],
    ['Redes sociais e apps', 600, ['Redes sociais e apps']],
    ['Empresas, marcas e fundadores', 900, ['Empresas e fundadores']],
    ['Hardware', 400, ['Hardware e componentes']],
    ['Internet e redes', 400, ['Internet, redes e protocolos']],
    ['Programação', 300, ['Programação e software']],
    ['Segurança digital', 300, ['Segurança digital']],
    ['Celulares e gadgets', 500, ['Celulares e gadgets']],
    ['IA, robótica e ficção científica', 500, ['IA, robótica e ficção científica']],
    ['História da computação', 500, ['História da computação e invenções']],
  ],
};

const caminho = join(RAIZ_EXP, 'arvore.json');
const antiga = existsSync(caminho) ? lerJson(caminho) : {};
const sub = lerJson(join(RAIZ_EXP, 'subtemas.json'));
const novas = listarLotes().flatMap((f) => lerJson(f)).filter((p) => p.status !== 'descartada');

// META 3x (decisão do Lucas, out/2026): banco total ~13.700. As cotas 10x viram pesos; Brasil e Entretenimento têm prioridade.
const TOTAL_3X = 13700;
const RODADA = 1000; // novas por rodada (rodada 1 = lotes 006 a 015)
const PRIORIDADE = /Brasil|Brasileir|Seleção|Novelas|Música brasileira|Cinema brasileiro|Reality|Humor|Comidas|Memes/;
const bancoCat = {};
for (const p of lerBancoAtual()) bancoCat[p.categoria] = (bancoCat[p.categoria] || 0) + 1;
const novasCat = {};
for (const p of novas) novasCat[p.categoria] = (novasCat[p.categoria] || 0) + 1;
const meta10Cat = Object.fromEntries(Object.entries(METAS).map(([c, l]) => [c, l.reduce((s, x) => s + x[1], 0)]));
const meta10Tot = Object.values(meta10Cat).reduce((a, b) => a + b, 0);

const out = {
  _leia:
    'META 3x (decisão do Lucas): banco total ~13.700. meta_3x por categoria = TOTAL_3X x (cota 10x da categoria / soma das cotas 10x); ' +
    'o que falta na categoria é repartido entre os subtemas pelo peso (cota 10x - atual - novas), com peso 1,3 para Brasil e Entretenimento brasileiro ' +
    'e peso 0,5 para subtema com microtema saturado. atual_estimado vem de subtemas.json (palavras-chave; "Outros" fica fora). ' +
    'cota_rodada = quanto do subtema entra na rodada atual (1.000 novas). meta_10x fica como referência. Microtema saturado: cota 0. Recalcule com scripts/arvore.mjs.',
  _resumo: {},
};
for (const [cat, lista] of Object.entries(METAS)) {
  out[cat] = {};
  const meta3Cat = Math.round((TOTAL_3X * meta10Cat[cat]) / meta10Tot);
  const faltaCat = Math.max(0, meta3Cat - (bancoCat[cat] || 0) - (novasCat[cat] || 0));
  const linhas = lista.map(([nome, meta, equivalentes]) => {
    const atual = equivalentes.reduce((s, e) => s + (sub[cat]?.subtemas?.[e]?.total || 0), 0);
    const nv = novas.filter((p) => p.categoria === cat && (equivalentes.includes(p.subtema) || p.subtema === nome)).length;
    const velho = antiga[cat]?.[nome] || {};
    const saturado = /saturado/.test(velho.status || '');
    const peso = Math.max(0, meta - atual - nv) * (PRIORIDADE.test(nome) || cat === 'Entretenimento' ? 1.3 : 1) * (saturado ? 0.5 : 1);
    return { nome, meta, atual, nv, velho, peso };
  });
  const somaPeso = linhas.reduce((s, l) => s + l.peso, 0) || 1;
  for (const l of linhas) {
    const alvoNovas = Math.round((faltaCat * l.peso) / somaPeso);
    const micro = l.velho.microtemas || {};
    for (const m of Object.values(micro)) if (m.status === 'saturado') m.cota = 0;
    out[cat][l.nome] = {
      meta_3x: l.atual + l.nv + alvoNovas,
      meta_10x: l.meta,
      atual_estimado: l.atual,
      novas_validas: l.nv,
      falta: alvoNovas,
      cota_rodada: Math.round((alvoNovas * RODADA) / 8700),
      status: l.velho.status || 'aberto',
      microtemas: micro,
    };
  }
  out._resumo[cat] = { meta_3x: meta3Cat, banco: bancoCat[cat] || 0, novas_validas: novasCat[cat] || 0, falta: faltaCat };
}
gravarJson(caminho, out);
for (const [cat, r] of Object.entries(out._resumo)) {
  const cota = Object.values(out[cat]).reduce((s, x) => s + x.cota_rodada, 0);
  console.log(`${cat.padEnd(15)} meta3x ${r.meta_3x}  banco ${r.banco}  novas ${r.novas_validas}  falta ${r.falta}  cota rodada ${cota}`);
}
