#!/usr/bin/env node
// Conferência independente da reposição (lotes 111 a 113), conferente-v11, 30/10/2026.
// Aplica nas fichas as decisões tomadas uma a uma (correções, dificuldade, descartes) e marca o resto como conferida.
// Pode rodar de novo: só mexe em ficha com status "gerada" ou já conferida por este conferente.
// Uso: node expansao/scripts/conferir-reposicao-v11.mjs
import { join } from 'node:path';
import { PASTA_LOTES, lerJson, gravarJson, motivoInvalida } from './lib.mjs';

const CONF = 'conferente-v11';

// id -> { campo: novo valor } + nota (vai para `correcao`)
const CORRECOES = {
  e5abec2f34: { troca: ['José Barbosa', 'Severino Barbosa'], nota: 'errada "José Barbosa" trocada por "Severino Barbosa": o nome completo do Chacrinha é José Abelardo Barbosa de Medeiros, então "José Barbosa" era defensável' },
  faa1c6f8fd: { pergunta: 'Qual jornalista ficou marcado pelo bordão "Isto é uma vergonha!" nos telejornais?', nota: 'bordão corrigido de "Isso é uma vergonha!" para "Isto é uma vergonha!" (forma registrada na Wikipédia e na Folha)' },
  a7c274027f: { pergunta: 'Qual banda gaúcha de pop rock gravou "Eu Sei", que entrou na trilha de uma novela das oito da Globo em 2006?', nota: 'em 2006 o horário ainda se chamava "novela das oito" (a canção entrou em "Páginas da Vida"; o nome da novela não foi posto para não entregar a resposta de 112:20926b14f8)' },
  feceec9122: { pergunta: 'Qual cantor fluminense dos anos 1960, galã do iê-iê-iê, ficou conhecido como "O Príncipe"?', nota: 'Ronnie Von nasceu em Niterói: "carioca" trocado por "fluminense"' },
  '742d6e770a': { pergunta: 'Qual dublador foi por muitos anos, até 2007, a voz brasileira de Homer Simpson?', nota: '"por décadas" era exagero: Waldyr Sant\'anna deixou o personagem em 2007 (Omelete, citado na Wikipédia)' },
  '45c87c39b6': { pergunta: 'Qual programa de humor da Globo, de 2010, reunia Bruno Mazzeo, Débora Lamm e outros em esquetes curtas?', nota: 'Fernanda Souza não foi confirmada no elenco de 2010; trocada por Débora Lamm (elenco da 1ª temporada, JustWatch)' },
  d7ca8888e0: { troca: ['Ronaldinho Gaúcho', 'Titi'], nota: 'errada "Ronaldinho Gaúcho" trocada por "Titi": Mauricio de Sousa também criou um Ronaldinho Gaúcho mirim (2006), errada ficava discutível' },
  a67f9b0bbe: { pergunta: 'Qual modelo fez a Feiticeira, personagem de véu e roupas de odalisca que virou febre na TV em 1999?', nota: 'tirado "do programa H": o enunciado citava a resposta de 111:86fcbc8697 (programa de Luciano Huck na Band)' },
  e9545d405c: { pergunta: 'Qual apresentador e dono do SBT ficou famoso pelo bordão "Quem quer dinheiro?"?', nota: 'tirado "o homem do Baú": o enunciado citava a resposta de banco:8353 (Baú da Felicidade)' },
};

const REBAIXAR = {
  '6729e9cc84': 'Sérgio Reis e "Menino da Porteira" são conhecidos de quase todo mundo',
  '23ef12ad81': 'Chayene foi a personagem mais lembrada de "Cheias de Charme"',
  '5d48684ed9': 'Wagner Moura como o vilão Olavo, rosto muito conhecido',
  '02a8157341': 'Raj foi o protagonista de "Caminho das Índias"',
  '76618c5700': 'a dupla João Paulo & Daniel é muito conhecida',
  '132c14dfd5': 'Zé Lelé é personagem fixo do Chico Bento',
  d28d3eb9b0: 'Franjinha é personagem conhecido da Turma da Mônica',
  '0fa86aa5a1': 'o Astronauta é personagem conhecido de Mauricio de Sousa',
};

const DESCARTAR = {
  acc8577438: 'duplicada do banco: banco:2821 já pergunta qual clube mineiro tem o coelho como mascote (América Mineiro)',
  '233a0d021e': 'duplicada do banco: banco:4580 já pergunta quais países da América do Sul não fazem fronteira com o Brasil (Chile e Equador); sem grupo, as duas sairiam na mesma partida',
};

// fichas em que a fonte lida nesta sessão confirmou o fato central (todas as conferidas; ver README)
const tot = { conferidas: 0, sem_mudanca: 0, corrigidas: 0, rebaixadas: 0, descartadas: 0 };
for (const n of ['111', '112', '113']) {
  const caminho = join(PASTA_LOTES, `lote-${n}.json`);
  const fichas = lerJson(caminho);
  for (const f of fichas) {
    if (!(f.status === 'gerada' || f.conferido_por === CONF)) continue;
    f.conferido_por = CONF;
    if (DESCARTAR[f.id]) {
      f.status = 'descartada';
      f.motivo = DESCARTAR[f.id];
      tot.descartadas++;
      continue;
    }
    let mudou = false;
    const c = CORRECOES[f.id];
    if (c && !f.correcao?.includes(c.nota)) {
      if (c.pergunta) f.pergunta = c.pergunta;
      if (c.troca) {
        const i = f.alternativas.indexOf(c.troca[0]);
        if (i < 0) throw new Error(`${f.id}: errada ${c.troca[0]} não achada`);
        f.alternativas[i] = c.troca[1];
      }
      f.correcao = f.correcao ? `${f.correcao}; ${c.nota} (${CONF})` : `${c.nota} (${CONF})`;
    }
    if (c) { mudou = true; tot.corrigidas++; }
    if (REBAIXAR[f.id]) {
      if (!f.dificuldade_ajuste) { f.dificuldade_ajuste = `dificil -> medio (régua rígida, ${CONF}: ${REBAIXAR[f.id]})`; f.dificuldade = 'medio'; }
      mudou = true; tot.rebaixadas++;
    }
    const inv = motivoInvalida(f);
    if (inv) throw new Error(`${f.id}: ${inv}`);
    f.status = 'conferida';
    f.verificado_web_conferente = true;
    tot.conferidas++;
    if (!mudou) tot.sem_mudanca++;
  }
  gravarJson(caminho, fichas);
}
console.log(tot);
