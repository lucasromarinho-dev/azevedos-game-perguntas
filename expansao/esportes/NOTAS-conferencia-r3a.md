# Notas - conferência independente da rodada 3 de futebol (lotes 011, 012 e 013)

Conferente: `conferente-esportes-r3a`, que não escreveu as perguntas. Régua: `calibracao-lucas.md`, lida como nas conferências da r1 e da r2 (`NOTAS-conferencia-r2a.md`). Data de referência: 31/10/2026.

## Resultado

| Status | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| conferida | 65 | 145 | 80 | 290 |
| descartada | 4 | 0 | 1 | 5 |
| reserva | 3 | 2 | 0 | 5 |

Os números já estão na dificuldade nova. O gerador tinha marcado 100 fáceis, 115 médias e 85 difíceis.

Conferidas por lote (fácil/médio/difícil):

- 011: 19/54/24;
- 012: 24/46/26;
- 013: 22/45/30.

Cada ficha recebeu `verificado_web_conferente` e `conferido_por`. Quando foi o caso, também ganhou:

- `dificuldade_ajuste`;
- `enunciado_original` e `ajuste_enunciado`;
- `alternativas_trocadas`;
- `resposta_original` e `ajuste_resposta`;
- `motivo`.

Conferidas por assunto (fácil/médio/difícil):

| Assunto | Fácil | Médio | Difícil |
|---|---|---|---|
| Clubes do Brasil | 24 | 28 | 15 |
| Brasileirão | 3 | 12 | 23 |
| Libertadores e Sul-Americana | 8 | 17 | 8 |
| Copa do Brasil e estaduais | 3 | 15 | 6 |
| Champions e ligas europeias | 5 | 37 | 11 |
| Copa do Mundo | 12 | 12 | 11 |
| Seleção, Copa América e Eliminatórias | 4 | 15 | 6 |
| Craques, ídolos e Bola de Ouro | 6 | 9 | 0 |

## Checagem web

- **360 checagens** registradas em `verificado_web_conferente`, todas com o trecho lido. As 300 perguntas têm pelo menos uma.
  - 011: 134;
  - 012: 115;
  - 013: 111.
- Texto bruto da Wikipédia (`action=raw`), com User-Agent genérico de navegador e nunca e-mail.
- Para fugir das fontes do gerador (pt e en), usei primeiro es, it e de:
  - es: quadro de honra das Copas, das Libertadores, dos Brasileirões antigos, da Copa do Brasil, da Copa América e das finais da Champions, além das caixas de jogo (`local = Brasil | resultado = 2:0 | visita = ...`);
  - it: tabelas do Brasileirão por temporada (pontos e 3º lugar) e Serie A;
  - de: Bundesliga;
  - en e pt: só quando es, it e de não tinham o trecho (escalações das finais da Libertadores, partidas por clube, apelidos).
- Trecho que só citava o nome não valeu. Quando o trecho era fraco (lista de bases, legenda de imagem, navbox), busquei outro até achar um que prova o fato.
- Achados da leitura:
  - A wiki es dá Zidane como melhor jogador da Copa de 1998, mas a it dá Ronaldo, que é o certo. A 011#46 está certa.
  - Em 2000, Candinho foi interino entre Luxemburgo e Leão (lista de técnicos da Seleção, wiki en). Por isso a 012#27 mudou.
  - O artilheiro de 1976 aparece como Dadá Maravilha (wiki es). A 012#49 passou a usar esse nome.
  - Pontos dos campeões conferem na tabela da wiki it: 70 (2023), 81 (2015), 80 (2014) e 77 (2012).
  - O 3º lugar também confere na wiki it: Palmeiras em 2021, Flamengo em 2016 e Fluminense em 2022. O Internacional em 2018 está na wiki es.
  - Guardiola tem seis Premier Leagues. A de 2025/26 foi do Arsenal, e o número está fechado.

## Fato e alternativas corrigidos

- 012#27: "Qual técnico substituiu Luxemburgo em 2000?" tinha duas certas, Candinho (interino) e Leão. Virou "Qual técnico comandou o Brasil na Copa das Confederações de 2001?", e Leão está confirmado na lista de convocados.
- 012#74: Sergi Roberto é meia e lateral, não zagueiro. O enunciado agora diz "Qual jogador".
- 013#53: Fernandinho é volante, não zagueiro. O enunciado agora diz "Qual jogador".
- 012#49: a resposta "Dario" virou "Dadá Maravilha", como está na fonte.
- Alternativas trocadas (a certa ficou na mesma posição):
  - 011#25: entrou Casagrande no lugar de Alemão, que também era do Napoli campeão de 1990.
  - 012#20: entrou Luis Díaz no lugar de Jhon Kennedy, que é brasileiro e saía pela nacionalidade.
  - 013#19: entrou 1925 no lugar de 1935, ano da refundação do São Paulo, que podia ser defendido como certo.
  - 013#24: entrou Flamengo no lugar do Internacional, que saía com "carioca" no enunciado.

## Descartadas (5)

- 011#0: repete a 003#73 (final de 1994, Palmeiras x Corinthians), com a pergunta invertida.
- 011#37: repete a 003#99 (Tite campeão brasileiro de 2011 com o Corinthians).
- 012#30: repete a v12:5917 (Criciúma campeão da Copa do Brasil de 1991 com Felipão).
- 012#48: Roma campeã italiana de 2000/01. A 013#6 ("levou a Roma ao título italiano de 2000/01") e a 013#20 entregam a resposta.
- 013#11: repete a v12:4575 (City bate a Inter na final da Champions de 2023).

## Reservas (5)

Nos cinco casos, outra pergunta entrega o adversário.

- 011#55: Dortmund no Mundial de 1997. A v12:12704 diz que o Dortmund ganhou a Champions de 1997.
- 012#18: Ajax no Mundial de 1995. A 003#46 e a 012#22 dizem que o Ajax ganhou a Champions de 1995.
- 013#18: Real Madrid no Mundial de 1998. A v12:6740 e a 002#24 dizem que o Real ganhou a Champions de 1998.
- 012#79: Boca na semifinal de 2001 contra o Palmeiras. A 003#27 (Bianchi campeão de 2001) e a 011#31 apontam o campeão.
- 013#42: Tigres na semifinal de 2015 contra o Internacional. A 008#9 diz que o Tigres foi à final de 2015.

## Ajustes de dificuldade (36)

**30 ficaram mais difíceis.**

**Fácil para médio (28):**

- Técnico campeão, pela régua do dono: 011#85, 011#92, 012#11, 012#22, 013#55 e 013#85.
- Semifinal: 012#10, 012#47 e 012#73.
- Vice de estadual: 011#3, 012#40 e 013#66.
- Vice de final antiga, depois que a dica do campeão saiu do enunciado: 011#99, 013#37 e 013#62.
- Vice da Copa do Brasil, sem a dica do Ronaldo: 011#40.
- Goleiro titular de time campeão: 011#44 e 012#7.
- Detalhe de campanha: 011#59, 011#84, 013#47 e 013#74.
- Torneio ou liga menos acompanhados pelo público:
  - 011#11, Liga Europa;
  - 011#47, Confederações de 1999;
  - 011#48, rebaixamento do Hamburgo;
  - 013#48, Lazio 1999/2000.
- Apelido de ídolo antigo: 011#33.
- Gol de jogo de ida de final antiga: 013#33.

**Médio para difícil (2):**

- 012#87: artilheiro antigo, com número exato.
- 013#53: autor do gol da final do Sub-20 de 2003.

**6 ficaram mais fáceis, de difícil para médio:**

- Gol em final de Champions, que quem viu lembra: 011#34 (Müller), 011#97 (Carrasco) e 012#97 (Mané).
- 011#45 (Zapata): pela régua, detalhe de lance de final é médio.
- Artilheiro recente: 011#89 (Gabigol) e 012#34 (Messi).

Clubes do Brasil ficou com 24 fáceis conferidas, mais 3 que foram para reserva. Nenhuma é do tipo "o Maracanã fica em qual cidade". As mais fáceis que ficaram são de torcedor:

- maior campeão do Carioca e do Brasileirão;
- Parmalat;
- Coutinho com Pelé;
- clube que revelou o craque.

## Enunciados reescritos (40)

Todos têm `enunciado_original` e `ajuste_enunciado`. Quase todos entregavam a resposta de outra pergunta, que o `entrega.mjs` não pega porque ela está em outro arquivo.

**O texto citava o campeão, que é resposta de outra pergunta:**

- Copa do Brasil:
  - 2009, v12:2844 (011#40);
  - 1999, v12:5402 (011#61);
  - 1989, v12:3022 (011#98);
  - 2015, v12:3021 (012#3 e 012#98);
  - 1998, 002#75 (012#61);
  - 2005, v12:5956 (012#93 e 013#24);
  - 2010, v12:2887 (013#3);
  - 2001, 003#93 (013#30);
  - 1991, v12:5917 (013#61);
  - 2008, v12:2886 (013#93).
- Brasileirão:
  - 2021, v12:2682 (011#95);
  - 1992, 002#81 (012#1);
  - 1971, v12:5909 (012#19);
  - 1979, 006#0 (012#21);
  - 1978, v12:12401 (013#21);
  - 1988, v12:5910 (013#37);
  - 1983, 008#0 (013#58).
- Libertadores:
  - 1981, 001#75 (011#99);
  - 1995, 002#46 (012#94 e 013#62);
  - 1992, v12:2848 (012#87).

**"Eliminou na semifinal" revelava o finalista:**

- 011#42: Cruzeiro em 2009, resposta da 001#30.
- 011#79: Grêmio em 2007, resposta da v12:3025.

**O texto trazia a resposta de outra pergunta:**

| Pergunta | O que entregava | Pergunta entregue |
|---|---|---|
| 011#67 | "Paulista de Jundiaí" | v12:5956 |
| 011#74 | Leicester | v12:5485 |
| 012#47 | Peru | v12:2967 |
| 012#80 | Tottenham | 007#59 |
| 013#16 | Copa das Confederações | v12:7652 |
| 013#33 | Vasco | 002#0 |
| 013#36 | Francescoli | v12:6008 |
| 013#49 | Sport | 003#9 |
| 013#67 | Holanda | v12:2871 |
| 012#71 | "recorde de Higuaín" (o número da resposta) | 012#23 |
| 012#27 | "Vanderlei Luxemburgo" | 013#79 |

**A dica estava no próprio texto:**

- 013#33: "paraguaio" (as erradas são brasileiras).
- 013#97: "brasileiro" (Alenichev e McCarthy não são brasileiros).
- 013#4: "a que sediou o torneio".

**Erro de posição:** 012#74 e 013#53.

## Detector e cruzamento

- `entrega.mjs --arquivo`, rodado depois das mudanças: **0 suspeitas** nos três lotes.
- Cruzamento (`compararE` contra v12, reaproveitadas, piloto e lotes 001-015, nos dois sentidos), rodado de novo no fim: só falsos alarmes, todos de fatos diferentes.
  - Inter 2010 x Inter 2006.
  - Botafogo em 1972 e 2002 x Palmeiras vice em 2024.
  - Zico artilheiro x Zico no Mundial.
  - River x Boca como rivais.
  - Alex revelado pelo Coritiba x Coritiba vice em 2012.
  - Chelsea em 2025 x Chelsea em 2021.
  - Flu x Boca em 2008 e em 2023.
  - Nilton Santos em jogos x estádio Nilton Santos.

## Para o dono olhar

- As fáceis caíram de 100 para 65 conferidas, como nas rodadas anteriores. O que mais pesou foram técnico campeão, semifinal e vice, que viraram médio pela régua.
- Champions e ligas europeias ficou com só 5 fáceis (37 médias). Brasileirão ficou com 3 fáceis e 23 difíceis.
- Pares do mesmo jogo que deixei, porque não se entregam:
  - Müller (011#34) e Drogba (003#61), na final de 2012.
  - Sheringham (012#69) e Solskjær (008#85), na final de 1999.
  - Petković (012#78) e Neymar (piloto#14), em Brasil x Croácia em 2022.
  - Carrasco (011#97) e Cristiano Ronaldo (012#17), na final de 2016.
- Rivaldo (011#81): a wiki en põe a base dele no Santa Cruz (1983-1989), e a es lista um clube antes do Santa Cruz no profissional. Mantive "revelou" porque a base sustenta.
- 013#29 ("maior campeão brasileiro, com 12 títulos até 2025") está certa hoje. O Brasileirão de 2026 está em andamento, e o "até 2025" protege a pergunta.
