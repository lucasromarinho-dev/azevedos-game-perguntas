#!/usr/bin/env node
// Conferência independente do lote 123 (folga da reposição 2 pop BR), conferente-lote123-v12, 30/10/2026.
// Grava status (conferida / reserva), verificado_web_conferente, conferido_por e dificuldade_ajuste.
// Pode rodar de novo (idempotente). As 4 `descartada` do gerador ficam como estão.
// Web: páginas da Wikipédia pt lidas pelo texto bruto (action=raw), User-Agent genérico de navegador,
// log em expansao/fontes/conferencia-lote-123-chamadas.log; mais 1 WebSearch (Natalie Lamour).
// Escolha das 28 que entram na v12: todas as difíceis que ficaram difíceis (16) e 12 médias variadas,
// porque a remoção tirou 446 difíceis e os lotes 115-122 só repõem 405 (as médias já sobram).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { PASTA_LOTES } from './lib.mjs';

const ARQ = join(PASTA_LOTES, 'lote-123.json');
const QUEM = 'conferente-lote123-v12';
const W = (p) => `pt.wikipedia: ${p}`;

// id -> [decisão, fonte própria, ajuste/motivo]
const D = {
  b7a99abfc0: ['conferida', W('Alexandre Borges (o executivo mulherengo Cadinho casado com três mulheres)')],
  bbce60aeb6: ['conferida', W('Taís Araújo (a empreguete Maria da Penha, Cheias de Charme)')],
  '15d2b6c22f': ['conferida', W('Bruno Gagliasso e Caminho das Índias (o esquizofrênico Tarso)')],
  caef211ad0: ['conferida', W('Glória Pires (Norma Pimentel, presa injustamente, vingativa)')],
  ddcb36651a: ['conferida', W('Deborah Secco e Insensato Coração (elenco: Natalie Lamour)') + '; web: Terra e blogs de novela (ex-participante de reality em busca da fama)'],
  '1b6f69d5ab': ['conferida', W('Chocolate com Pimenta (fábrica administrada pela irmã Jezebel, que aplica desfalques)')],
  '5e9c16b500': ['conferida', W('Ti Ti Ti (2010) (André Spina / Jacques Leclair, Alexandre Borges)')],
  b38d20ad68: ['reserva', W('Detetives do Prédio Azul (Gloob, Dona Leocádia)'), 'régua: série infantil de canal pago, nicho para o adulto sem filhos; o enunciado ("desvendam mistérios no edifício") quase entrega o título'],
  d1be754ffe: ['reserva', W('Legião Urbana (álbum Que País É Este, 1987)'), 'sobra da meta: médias já sobram na v12 (fato confirmado)'],
  '9d4433907b': ['conferida', W('Velha Infância (Tribalistas, single de 2003)')],
  e7d6c9a5d7: ['reserva', W('Pitty (clipe de "Na Sua Estante", Terra)'), 'sobra da meta: médias já sobram na v12 (fato confirmado)'],
  f088e057b6: ['reserva', W('Cuida Bem Dela (segundo single de Henrique & Juliano)'), 'sobra da meta: médias já sobram na v12 (fato confirmado)'],
  ff692838c0: ['conferida', W('Admirável Gado Novo (Zé Ramalho, lançada em 1979)')],
  '2a8579d597': ['conferida', W('Wando ("Fogo e paixão", a música mais associada a ele)')],
  '2c6ec214a6': ['reserva', W('Luan Santana e Te Esperando (EP e faixa de 2013)'), 'sobra da meta: médias já sobram na v12 (fato confirmado)'],
  '64254b6173': ['conferida', W('Ainda Gosto Dela e Skank (participação de Negra Li)')],
  '7df53f3a7a': ['conferida', W('Cláudia Jimenez (a doméstica Edileuza em Sai de Baixo)')],
  '3228181388': ['conferida', W('Sai de Baixo (Vavá, Luis Gustavo, síndico do Arouche Towers)')],
  '620516af0e': ['conferida', W('Bira (baixista do Sexteto do Jô, conhecido pelo riso peculiar)')],
  a5ddb78f12: ['conferida', W('Didi Mocó (bordão "Ô da poltrona!", dirigindo-se ao telespectador)')],
  '9a0c974541': ['conferida', W('Tapas & Beijos (as amigas inseparáveis Fátima e Sueli)')],
  '5e1a33bb46': ['conferida', W('Marco Nanini e O Auto da Compadecida (filme) (o "Capitão" Severino de Aracaju)')],
  ce33184e8e: ['conferida', W('Loucas pra Casar (Ingrid Guimarães, Tatá Werneck e Suzana Pires disputam Márcio Garcia)')],
  '86af58bad0': ['conferida', W('Medida Provisória (filme) (2022, direção de Lázaro Ramos, negros forçados a ir para a África)')],
  d6aab26743: ['conferida', W('Big Brother Brasil 20 (Rafa Kalimann, 2º lugar)')],
  '3bfb63f242': ['reserva', W('Big Brother Brasil 24 (o Sincerão substituiu o Jogo da Discórdia)'), 'sobra da meta: fato recente e médias já sobram na v12 (fato confirmado)'],
  '5babe172cd': ['reserva', W('Jojo Todynho (venceu A Fazenda 12, dezembro de 2020)'), 'sobra da meta: fato recente e médias já sobram na v12 (fato confirmado)'],
  '4064d746ac': ['reserva', W('Claude Troisgros (a série "Que marravilha!" no GNT)'), 'sobra da meta: médias já sobram na v12 (fato confirmado)'],
  '2e1493f227': ['conferida', W('Luva de Pedreiro (vídeos de futebol, "Receba!")')],
  d1b4c964cf: ['reserva', W('Felca (vídeo "adultização", 6 de agosto de 2025)'), 'sobra da meta: fato recente e médias já sobram na v12 (fato confirmado)'],
  '68e47d3694': ['conferida', W('Tapa na Pantera e Maria Alice Vergueiro (protagonista do curta)')],
  '27675a976a': ['reserva', W('Junno Andrade (relação com Xuxa desde 2012)'), 'sobra da meta: médias já sobram na v12 (fato confirmado)'],
  d773c95269: ['conferida', W('Gusttavo Lima (casado com Andressa Suita, dois filhos)')],
  d3c77fd6eb: ['reserva', W('Sandy (cantora) (casada com Lucas Lima de 2008 a 2023)'), 'sobra da meta: fato recente e médias já sobram na v12 (fato confirmado)'],
  '29330a6192': ['conferida', W('Fábio Jr. (com Glória Pires teve a filha Cleo)'), null, 'dificil -> medio (régua, conferente-lote123-v12: Cleo como filha de Glória Pires e Fábio Jr. é sabida de quase todo mundo)'],
  e4d2e54c0f: ['conferida', W('Cafu ("100% Jardim Irene" na camisa em 2002)')],
  '4f5755a285': ['conferida', W('Joel Santana (África do Sul, o inglês que ficou famoso em 2009)')],
  bb35c8385e: ['reserva', W('Tema da Vitória (tocada em 38 das 41 vitórias de Senna)'), 'sobra da meta: "ganhava" no enunciado aproxima de "Vitória" e médias já sobram na v12 (fato confirmado)'],
  '4ce413b2db': ['conferida', W('Roberto Carlos (futebolista) (arrumava o meião no gol de Henry, Copa de 2006)'), null, 'dificil -> medio (régua, conferente-lote123-v12: o meião de Roberto Carlos em 2006 é dos lances mais lembrados da seleção)'],
  '06b6c3ade2': ['conferida', W('Tite (treinador de futebol) (nome completo Adenor Leonardo Bachi)')],
};

const lote = JSON.parse(readFileSync(ARQ, 'utf8'));
const cont = { conferida: 0, reserva: 0, descartada: 0 };
for (const f of lote) {
  if (f.status === 'descartada' && !D[f.id]) { cont.descartada++; continue; }
  const d = D[f.id];
  if (!d) throw new Error(`sem decisão para ${f.id}`);
  const [status, fonte, motivo, ajuste] = d;
  f.status = status;
  f.motivo = status === 'reserva' ? `${QUEM}: ${motivo}` : null;
  f.conferido_por = QUEM;
  f.verificado_web_conferente = fonte;
  if (ajuste) {
    if (f.dificuldade === 'dificil' || f.dificuldade_ajuste === ajuste) { f.dificuldade = 'medio'; f.dificuldade_ajuste = ajuste; }
  }
  cont[status]++;
}
writeFileSync(ARQ, JSON.stringify(lote, null, 2) + '\n', 'utf8');
const dif = (s) => lote.filter((f) => f.status === s).reduce((a, f) => ({ ...a, [f.dificuldade]: (a[f.dificuldade] || 0) + 1 }), {});
console.log(JSON.stringify({ ...cont, conferidas_por_dificuldade: dif('conferida'), reservas_por_dificuldade: dif('reserva') }));
