// Monta o banco especial "Desenhos" (1.000 perguntas):
//   450 da selecao-disney-450.json + as "conferida" dos lotes desenhos-001 a 007.
// Saida: expansao/desenhos/perguntas-desenhos.json (uma linha, UTF-8 sem BOM, NFC, sem quebra no fim).
// Uso: node expansao/desenhos/scripts/montar-desenhos.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const D = join(dirname(fileURLToPath(import.meta.url)), '..');
const ler = (f) => JSON.parse(readFileSync(f, 'utf8').replace(/^﻿/, ''));
const NIVEIS = ['facil', 'medio', 'dificil'];
const nfc = (s) => String(s).normalize('NFC');

// dificuldade_ajuste vem como "dificil->medio: motivo" ou "dificil -> medio"
function dificuldadeFinal(p) {
  if (!p.dificuldade_ajuste) return p.dificuldade;
  const m = String(p.dificuldade_ajuste).match(/->\s*(facil|medio|dificil)/);
  if (!m) throw new Error('dificuldade_ajuste ilegivel em ' + p.id);
  return m[1];
}

const limpa = (p, dif) => ({
  categoria: 'Desenhos',
  dificuldade: dif,
  pergunta: nfc(p.pergunta),
  resposta: nfc(p.resposta),
  alternativas: p.alternativas.map(nfc),
});

// Ajustes de enunciado nas 450 Disney, feitos na montagem (o arquivo da seleção fica intacto).
// Motivo: no cruzamento das 1.000 entre si, o enunciado destas entregava a resposta de outra pergunta das 450.
// Chave = posição na selecao-disney-450.json; "de" confere que o texto de origem é o esperado.
const AJUSTES_DISNEY = {
  50: { de: 'Em O Rei Leão, que animais são os capangas de Scar?', pergunta: 'Em O Rei Leão, que animais são os capangas do tio de Simba?' }, // "Scar" = resposta da 15
  291: { de: 'Em O Rei Leão, quantas hienas são as capangas principais de Scar?', pergunta: 'Em O Rei Leão, quantos são os capangas principais do vilão?' }, // "hienas" = resposta da 50
  185: { de: 'Em A Bela e a Fera (1991), até que aniversário da Fera a rosa encantada deve florescer?', pergunta: 'Em A Bela e a Fera (1991), até que aniversário da Fera o feitiço precisa ser quebrado?' }, // "rosa" = resposta da 7
  69: { de: 'Em Frozen, que parte do Olaf é uma cenoura?', pergunta: 'Em Frozen, que parte do boneco de neve é uma cenoura?' }, // "Olaf" = resposta da 66
  53: { de: 'Que animal é o Sebastião, conselheiro do Rei Tritão?', pergunta: 'Em A Pequena Sereia, que animal é o Sebastião, conselheiro do rei dos mares?' }, // "Tritão" = resposta da 56
  80: { de: 'Em Frozen, qual canção Anna e Hans cantam quando se conhecem?', pergunta: 'Em Frozen, qual canção Anna canta com o príncipe que acabou de conhecer?' }, // "Hans" = resposta da 256
  397: { de: 'Em A Pequena Sereia, qual personagem canta "Les Poissons" enquanto persegue Sebastião?', pergunta: 'Em A Pequena Sereia, qual personagem canta "Les Poissons" na cozinha do palácio?' }, // "Sebastião" = resposta da 18
  58: { de: 'Em Cinderela, em que a Fada Madrinha transforma a abóbora?', pergunta: 'Em Cinderela, em que a abóbora é transformada para levar a moça ao baile?' }, // "Fada Madrinha" = resposta da 20
  102: { de: 'Em A Pequena Sereia, que objeto mágico o Rei Tritão usa?', pergunta: 'Em A Pequena Sereia, que objeto mágico o pai de Ariel usa?' }, // "Tritão" = resposta da 56
  241: { de: 'Em Encanto, qual é o dom da irmã Luisa?', pergunta: 'Em Encanto, qual é o dom da irmã do meio?' }, // "Luisa" = resposta da 179
  233: { de: 'Em Cinderela, o que a madrasta faz para impedir Cinderela de provar o sapatinho?', pergunta: 'Em Cinderela, o que a madrasta faz para impedir que o enviado do rei encontre a moça?', trocarAlt: ['Esconde o sapatinho', 'Muda a família de cidade'] }, // "sapatinho" = resposta da 5
};

const saida = [];
ler(join(D, 'selecao-disney-450.json')).forEach((p, i) => {
  const a = AJUSTES_DISNEY[i];
  if (a) {
    if (p.pergunta !== a.de) throw new Error('ajuste Disney ' + i + ': texto de origem mudou');
    p = { ...p, pergunta: a.pergunta, alternativas: [...p.alternativas] };
    if (a.trocarAlt) {
      const k = p.alternativas.indexOf(a.trocarAlt[0]);
      if (k < 0) throw new Error('ajuste Disney ' + i + ': alternativa não encontrada');
      p.alternativas[k] = a.trocarAlt[1];
    }
  }
  saida.push(limpa(p, p.dificuldade));
});
const nDisney = saida.length;

const LOTES = ['001', '002', '003', '004', '005', '006', '007'];
const porLote = {};
for (const n of LOTES) {
  const lote = ler(join(D, 'lotes', `desenhos-${n}.json`));
  porLote[n] = 0;
  for (const p of lote) {
    if (p.status !== 'conferida') continue;
    saida.push(limpa(p, dificuldadeFinal(p)));
    porLote[n]++;
  }
}

// checagens basicas antes de gravar
const chave = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
const vistos = new Set();
for (const p of saida) {
  if (!NIVEIS.includes(p.dificuldade)) throw new Error('dificuldade invalida: ' + p.pergunta);
  if (p.alternativas.length !== 4) throw new Error('alternativas != 4: ' + p.pergunta);
  if (new Set(p.alternativas.map(chave)).size !== 4) throw new Error('alternativas repetidas: ' + p.pergunta);
  if (!p.alternativas.includes(p.resposta)) throw new Error('resposta fora das alternativas: ' + p.pergunta);
  const k = chave(p.pergunta);
  if (vistos.has(k)) throw new Error('enunciado duplicado: ' + p.pergunta);
  vistos.add(k);
}

const conta = (lista) => Object.fromEntries(NIVEIS.map((d) => [d, lista.filter((p) => p.dificuldade === d).length]));
console.log('Disney+Pixar:', nDisney, conta(saida.slice(0, nDisney)));
console.log('Outras animacoes:', saida.length - nDisney, conta(saida.slice(nDisney)), porLote);
console.log('Total:', saida.length, conta(saida));
if (saida.length !== 1000) throw new Error('total diferente de 1000: ' + saida.length);

writeFileSync(join(D, 'perguntas-desenhos.json'), JSON.stringify(saida), 'utf8');
console.log('gravado perguntas-desenhos.json');
