#!/usr/bin/env node
// Confere a VARIEDADE de uma rodada (zero IA). Regras da rodada 3:
//   - no máximo 3 perguntas por universo ou franquia (campo `universo` da ficha; sem o campo, detecta por palavra-chave)
//   - Entretenimento: música no máximo 1/3 da categoria; poucas "qual banda/cantor gravou X"
//   - Esportes: mostra a distribuição por subtema (diversificar além de atletismo e futebol europeu)
//   - dificuldade: mostra a parte de "fácil" contra o plano
// Uso: node expansao/scripts/variedade.mjs [primeiro último]   (padrão: 26 35, a rodada 3)
import { join } from 'node:path';
import { existsSync } from 'node:fs';
import { lerJson, PASTA_LOTES, limpar } from './lib.mjs';

const [ini, fim] = process.argv.slice(2).map(Number);
const A = ini || 26, B = fim || 35;
const todas = [];
for (let n = A; n <= B; n++) {
  const arq = join(PASTA_LOTES, `lote-${String(n).padStart(3, '0')}.json`);
  if (existsSync(arq)) todas.push(...lerJson(arq).filter((p) => p.status !== 'descartada').map((p) => ({ ...p, lote: n })));
}

// Universos conhecidos (texto limpo, sem acento). A chave é o nome que aparece no relatório.
const UNIVERSOS = {
  'Sítio do Picapau Amarelo': /\b(sitio do picapau|picapau amarelo|monteiro lobato|emilia|visconde de sabugosa|narizinho|dona benta|rabico|quindim)\b/,
  'Turma da Mônica': /\b(turma da monica|cebolinha|cascao|magali|chico bento|mauricio de sousa)\b/,
  'Harry Potter': /\b(harry potter|hogwarts|dumbledore|voldemort|hermione)\b/,
  'Star Wars': /\b(star wars|jedi|darth|skywalker|mandalorian)\b/,
  'Senhor dos Anéis': /\b(senhor dos aneis|hobbit|tolkien|frodo|gandalf|terra media)\b/,
  'Marvel': /\b(marvel|vingadores|homem aranha|homem de ferro|capitao america|thanos|x men|wolverine|thor)\b/,
  'DC': /\b(batman|superman|coringa|mulher maravilha|liga da justica|gotham)\b/,
  'Pokémon': /\b(pokemon|pikachu|ash ketchum)\b/,
  'Mario': /\b(super mario|mario bros|luigi|bowser|princesa peach|yoshi)\b/,
  'Zelda': /\b(zelda|hyrule)\b/,
  'Sonic': /\bsonic\b/,
  'Naruto': /\bnaruto\b/,
  'Dragon Ball': /\b(dragon ball|goku)\b/,
  'One Piece': /\bone piece\b/,
  'Os Simpsons': /\b(simpsons|homer|springfield)\b/,
  'Friends': /\bfriends\b/,
  'Game of Thrones': /\b(game of thrones|westeros)\b/,
  'Stranger Things': /\bstranger things\b/,
  'Resident Evil': /\bresident evil\b/,
  'Fallout': /\bfallout\b/,
  'GTA': /\b(gta|grand theft auto)\b/,
  'Chaves': /\b(chaves|chapolin|seu madruga|dona florinda|chespirito)\b/,
  'Toy Story': /\btoy story\b/,
  'Shrek': /\bshrek\b/,
  'Mortal Kombat': /\bmortal kombat\b/,
  'Street Fighter': /\bstreet fighter\b/,
  'Final Fantasy': /\bfinal fantasy\b/,
  'Minecraft': /\bminecraft\b/,
  'Castelo Rá-Tim-Bum': /\b(castelo ra tim bum)\b/,
  'Trapalhões': /\b(trapalhoes|didi moco|dede santana|mussum|zacarias)\b/,
  'Velozes e Furiosos': /\bvelozes e furiosos\b/,
  'James Bond': /\b(james bond|007)\b/,
  'Jurassic Park': /\bjurassic\b/,
  'Rocky': /\brocky balboa\b/,
  'Matrix': /\bmatrix\b/,
  'The Witcher': /\bwitcher\b/,
  'Call of Duty': /\bcall of duty\b/,
  'League of Legends': /\bleague of legends\b/,
  'Counter-Strike': /\bcounter strike\b/,
};

const porUniverso = new Map();
for (const p of todas) {
  const txt = limpar(`${p.pergunta} ${p.resposta}`);
  const us = new Set(p.universo ? [p.universo] : []);
  for (const [nome, re] of Object.entries(UNIVERSOS)) if (re.test(txt)) us.add(nome);
  for (const u of us) {
    if (!porUniverso.has(u)) porUniverso.set(u, []);
    porUniverso.get(u).push(p);
  }
}
console.log(`Rodada (lotes ${A} a ${B}): ${todas.length} válidas\n`);
console.log('Universos/franquias (máx. 3 por rodada):');
let estourou = 0;
for (const [u, ps] of [...porUniverso].sort((a, b) => b[1].length - a[1].length)) {
  if (ps.length < 2) continue;
  const alerta = ps.length > 3 ? '  <-- ACIMA DE 3' : '';
  if (ps.length > 3) estourou++;
  console.log(`  ${String(ps.length).padStart(2)} ${u}${alerta}`);
  if (ps.length > 3) for (const p of ps) console.log(`       lote ${p.lote} ${p.id} ${p.pergunta.slice(0, 80)}`);
}

const ent = todas.filter((p) => p.categoria === 'Entretenimento');
const mus = ent.filter((p) => /m[uú]sica/i.test(p.subtema || ''));
const gravou = ent.filter((p) => /^qual (banda|cantor|cantora|grupo|dupla|rapper)\b.*\bgravou\b/i.test(p.pergunta));
console.log(`\nEntretenimento: ${ent.length}; música ${mus.length} (${((100 * mus.length) / (ent.length || 1)).toFixed(0)}%, máx. 33%)` +
  `${mus.length * 3 > ent.length ? '  <-- ACIMA DE 1/3' : ''}; "qual banda/cantor gravou X": ${gravou.length}`);

const esp = todas.filter((p) => p.categoria === 'Esportes');
const sub = {};
for (const p of esp) sub[p.subtema] = (sub[p.subtema] || 0) + 1;
console.log(`\nEsportes por subtema (${esp.length}):`);
for (const [s, n] of Object.entries(sub).sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(3)} ${s}`);

const dif = { facil: 0, medio: 0, dificil: 0 };
for (const p of todas) dif[p.dificuldade]++;
console.log(`\nDificuldade: fácil ${dif.facil} (${((100 * dif.facil) / (todas.length || 1)).toFixed(0)}%), médio ${dif.medio}, difícil ${dif.dificil}`);
if (estourou) process.exitCode = 1;
