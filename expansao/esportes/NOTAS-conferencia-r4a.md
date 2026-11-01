# Notas - conferência independente da rodada 4 de futebol (lote 020)

Conferente: `conferente-esportes-r4a`, que não escreveu as perguntas. Régua: `calibracao-lucas.md`, lida como nas conferências r2a e r3a. Data de referência: 1/11/2026.

## Resultado

| Status | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| conferida | 36 | 17 | 56 | 109 |
| descartada | 5 | 3 | 11 | 19 |
| reserva | 2 | 0 | 0 | 2 |

- Conferidas na dificuldade nova; descartadas e reservas na dificuldade do gerador.
- O gerador tinha marcado 50 fáceis, 10 médias e 70 difíceis.
- A resposta certa das conferidas fica 27, 28, 28 e 26 vezes nas posições A, B, C e D.

Cada ficha recebeu `verificado_web_conferente` (menos as descartadas) e `conferido_por`. Quando foi o caso, também ganhou:

- `dificuldade_ajuste`;
- `enunciado_original` e `ajuste_enunciado`;
- `alternativas_originais` e `alternativas_trocadas`;
- `motivo`.

Conferidas por assunto (fácil/médio/difícil):

| Assunto | Fácil | Médio | Difícil |
|---|---|---|---|
| Clubes do Brasil | 9 | 3 | 7 |
| Brasileirão | 0 | 0 | 9 |
| Libertadores e Sul-Americana | 1 | 0 | 8 |
| Copa do Brasil e estaduais | 0 | 2 | 2 |
| Champions e ligas europeias | 10 | 8 | 12 |
| Copa do Mundo | 7 | 2 | 16 |
| Seleção, Copa América e Eliminatórias | 2 | 1 | 2 |
| Craques, ídolos e Bola de Ouro | 7 | 1 | 0 |

## Checagem web

- **160 checagens** em `verificado_web_conferente`, todas com o trecho lido. As 111 fichas que ficaram (conferidas e reservas) têm pelo menos uma.
- Texto bruto da Wikipédia (`action=raw`), com User-Agent genérico de navegador e nunca e-mail.
- Fontes diferentes das do gerador, que usou pt, en e it:
  - es: caixas de jogo dos anexos de grupo das Copas (`resultado = 2:5`), das finais da Libertadores e da Champions, infobox de clubes, jogadores e campeonatos;
  - de: caixas de jogo das Copas e das Euros (`Costa Rica - Brasilien 2:5`), Bundesliga, Serie A e Ligue 1;
  - it e en só onde es e de não tinham o trecho: tabela final do Brasileirão com os pontos (it), finais da Libertadores de 1995 e 2013, final da Champions de 2017 e da Euro de 2012 (en), apelidos (en).
- **Placares**: as 19 conferidas cuja resposta é placar têm duas fontes (es e de, ou es e en). Os 5 placares que caíram foram por repetição, não por erro.
- Pontos do campeão conferidos na tabela final da wiki it e na conta de vitórias e empates da wiki es: 71 (2020), 80 (2016), 84 (2021) e 81 (2022).
- Trecho que só citava o nome não valeu.

### Achados da leitura

- **Lille (097)**: o texto dizia que o título de 2010/11 interrompeu "uma série de Lyon e Bordeaux". Errado: o Olympique de Marselha, que estava nas alternativas, foi campeão em 2009/10. A pergunta virou só "Qual clube ganhou o Campeonato Francês de 2010/11?".
- **Allianz Parque (119)**: a wiki es dá o estádio como Nubank Parque, com o nome antigo "Allianz Parque (2014-2026)". O texto mudou (ver abaixo).
- **Pelé, Atleta do Século (036)**: a wiki en diz que o COI o elegeu Atleta do Século em 1999. A es diz que a revista do COI o pôs entre os cinco melhores atletas do século, o único do futebol. Mantive, com as duas fontes no registro.
- **Bruno Guimarães (030)**: confirmado no Newcastle de 2022 a 2026 e no Arsenal desde 2026 (wiki es e en).
- **Raphinha (013)**: segue no Barcelona (wiki es e en).
- **Martinelli (067)**: hoje está no Al-Hilal (wiki es). A pergunta é sobre a contratação pelo Arsenal em 2019 e continua certa.
- **Dorival (031)**: dispensado em 28/3/2025, depois do 4 a 1 para a Argentina (wiki es e en).

## Descartadas (19)

**Repetem fato já no banco (14):**

- 003: a 007#55 (Cruzeiro, maior campeão da Copa do Brasil, com seis títulos), invertida.
- 004: a v12:4545 (Peñarol, cinco Libertadores), invertida.
- 017: a v12:2777 (São Paulo campeão mundial contra o Barcelona de Cruyff).
- 025: a 011#83 (Brasil 4 a 0 na Polônia em 1986), invertida.
- 027: a v12:11036 (Atlético-MG rebaixado em 2005).
- 028: a 008#16 (100 pontos do campeão de 2003).
- 029: a 007#0 (Grêmio campeão de 1981 sobre o São Paulo), invertida.
- 055: a 003#96 (final de 2018 entre River e Boca em Madri).
- 060: a v12:6569 (Wolfsburg campeão da Bundesliga de 2009).
- 066: a 006#11 (Vasco x Cruzeiro, final de 1974), invertida.
- 091: a v12:2968 ("Vozão" do Ceará). "Vovô" ainda colide com a v12:2878 (Clássico Vovô, Fluminense x Botafogo).
- 100: a 007#19 (Polônia 3ª colocada em 1974).
- 106: a v12:3203 (Klopp campeão inglês com o Liverpool), invertida.
- 122: a 001#76 (gol do Nunes contra o Atlético-MG na final de 1980).

**Outra pergunta traz a resposta no texto (5):**

- 005: a 012#97 diz "final da Champions de 2018, perdida por 3 a 1".
- 042: a 007#85 fala dos "dois gols da final de 2010" (o 2 a 0). O texto também entregava a 001#42.
- 056: a 003#72 diz "vitória por 2 a 1 no Morumbi, ida da final de 2006".
- 107: a v12:5738 (Firmino) e a v12:6739 (Fabinho) dizem que o Liverpool foi campeão inglês em 2020.
- 115: a 006#41 diz "vitória por 1 a 0 em Porto Alegre, ida da final de 2017".

## Reservas (2)

Nos dois casos, outra pergunta entrega a resposta.

- 052 (Cristiano Ronaldo foi para a Juventus em 2018): a 013#91 diz que ele foi artilheiro do Italiano de 2020/21 pela Juventus.
- 069 (Messi no Barcelona de 2004 a 2021): a 002#76 ("o Barcelona de Messi, Suárez e Neymar") e a v12:7031 ("Messi no Barcelona de Guardiola").

## Ajustes de dificuldade (10)

Todos deixaram a pergunta mais difícil, como nas conferências anteriores.

**Fácil para médio (7).** Das 50 fáceis, as que não são fáceis de verdade para o torcedor brasileiro:

- Apelidos menos usados no Brasil:
  - 016, "Bombardeiro" (Gerd Müller);
  - 034, "Capacete" (Júnior);
  - 090, "Pelé Branco" (Zico; o famoso é Galinho de Quintino, que já está no banco).
- Herói de final de Champions antiga, pela mesma régua da r3a (gol em final de Champions é médio):
  - 033, Kahn em 2001;
  - 070, Shevchenko em 2003.
- Gol de final de Euro pouco lembrado:
  - 089, Trezeguet em 2000;
  - 128, Charisteas em 2004. Fácil é a Grécia campeã, que já está no banco.

**Difícil para médio (3):**

- 024: Thiago Silva contra a Colômbia nas quartas de 2014. É gol do Brasil em Copa em casa, como a 013#46 (Kaká em 2006).
- 080: Dida, goleiro titular em 2006. A r3a pôs goleiro titular em médio.
- 093: São Paulo com três títulos mundiais. "Tricampeão mundial" é número famoso, que o clube usa como slogan.

As 36 fáceis que ficaram são momentos marcantes ou apelidos de uso corrente. Alguns exemplos:

- Capetinha, Casão, Doutor, Fogão, Mais Querido;
- Pistolero, El Niño, Apache, Pitbull;
- convulsão do Ronaldo, mão do Henry, Rivaldo contra a Turquia;
- Maradona no antidoping e Maradona técnico em 2010;
- polvo Paul, Éder e França na Euro 2016, Di María em 2021.

## Enunciados reescritos (17)

Todos têm `enunciado_original` e `ajuste_enunciado`.

**O texto citava o campeão, que é resposta de outra pergunta:**

| Pergunta | O que entregava | Pergunta entregue |
|---|---|---|
| 009 | Flamengo campeão de 2020 | v12:2838 |
| 046 | Palmeiras campeão de 2016 | v12:2684 |
| 065 | Atlético-MG campeão de 2021 | v12:2682 |
| 102 | Palmeiras campeão de 2022 | 008#48 e v12:3010 |
| 019 | Grêmio e Olímpico na final de 1995 | 002#46 |
| 022 | "no Mineirão" na final de 2013 | 001#78 e outras de 2013 |
| 059 | "no Beira-Rio" na final de 2010 | 002#56 e 002#51 |
| 112 | "em São Januário" na final de 1998 | v12:2890 |
| 096 | Flamengo e Vasco na final da Copa do Brasil de 2006 | 002#67 |
| 061 | Barcelona e Manchester United em 2009 | 001#94 |
| 098 | Real Madrid e Juventus em 2017 | 007#96 |
| 124 | Alemanha e Argentina na final de 2014 | 001#80 |

**O texto trazia a resposta de outra pergunta:**

- 031: "4 a 1", resposta da 001#70. Virou "depois de uma goleada para a Argentina".
- 071: dizia que a Chapecoense era finalista, o que entregava a 003#50. Virou "a final que não chegou a ser jogada por causa de uma tragédia aérea".
- 074: "artilheiro no Athletico" apontava a v12:3008 (Washington, artilheiro de 2004). Virou "por ter voltado a jogar depois de um problema cardíaco". A wiki es liga o apelido ao problema cardíaco.
- 119: o estádio agora se chama Nubank Parque. "Allianz Parque" é a resposta da v12:2545, e "Palestra Itália" é a da v12:2500. Virou "o atual estádio do Palmeiras, hoje chamado Nubank Parque".

**Fato errado:** 097 (Lille, ver acima).

**Alternativas trocadas (1):** na 098, a 007#75 diz que o time derrotado na final de 2017 marcou. Saíram 2 a 0 e 3 a 0 e entraram 2 a 1 e 4 a 2. A certa (4 a 1) ficou na mesma posição.

## Detector e cruzamento

- `entrega.mjs --arquivo`, rodado depois das mudanças: **0 suspeitas**.
- Cruzamento contra v12 (todas as categorias), reaproveitadas, piloto e lotes 001-015 (com descartadas), nos dois sentidos. Fiz por entidades (`compararE`) e por palavras raras e anos em comum. Rodei de novo no fim, nos 17 textos reescritos.
- Falsos alarmes, com a mesma resposta e fatos diferentes:
  - Edílson (Capetinha x embaixadinhas de 1999);
  - Júnior (Capacete x comentarista);
  - Casagrande (Casão x Democracia Corinthiana);
  - D'Alessandro (Cabezón x Libertadores de 2010);
  - Tévez (Apache x craque de 2005);
  - Thomas Müller (três gols em Portugal x artilheiro de 2010 e gol na final de 2012);
  - Klose (três gols na Arábia Saudita x recorde de 16 gols);
  - Kahn (2001 x melhor da Copa de 2002);
  - Shevchenko (pênalti de 2003 x Bola de Ouro de 2004);
  - Alemanha 3ª em 2006 x 3ª em 2010;
  - Croácia 3ª em 2022 x 3ª em 1998;
  - Atlético Nacional (2016 x 1995 e 1989);
  - Lille (2010/11 x 2020/21);
  - pontos e 3º lugar de anos diferentes.

## Para o dono olhar

- **v12:2545** ("Qual é o nome do estádio do Palmeiras...? Allianz Parque") ficou desatualizada: desde 2026 o estádio se chama Nubank Parque. Vale corrigir na v13, junto com a da Marta.
- O Brasileirão segue com 0 fáceis e 9 difíceis neste lote. Libertadores e Sul-Americana tem 1 fácil.
- Quatro conferidas têm "2 a 0" como resposta (022, 061, 096 e 112), mas são jogos diferentes.
- A 036 (Pelé, Atleta do Século pelo COI em 1999) se apoia na wiki en. A es descreve a mesma escolha de forma mais fraca ("um dos cinco melhores atletas do século").
