# Notas - rodada 4 do banco Esportes (futebol)

Arquivo: `expansao/esportes/lotes/esportes-020.json` (130 perguntas, status `gerada`, categoria `Esportes`, subtema `futebol`). Mesmo formato dos lotes 011-013.

## Totais

| Assunto (`obra_tema`) | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| Clubes do Brasil | 13 | 0 | 9 | 22 |
| Brasileirão | 0 | 3 | 10 | 13 |
| Libertadores e Sul-Americana | 2 | 0 | 11 | 13 |
| Copa do Brasil e estaduais | 0 | 2 | 3 | 5 |
| Champions e ligas europeias | 17 | 4 | 15 | 36 |
| Copa do Mundo | 7 | 0 | 20 | 27 |
| Seleção, Copa América e Eliminatórias | 2 | 1 | 2 | 5 |
| Craques, ídolos e Bola de Ouro | 9 | 0 | 0 | 9 |
| **Total** | **50** | **10** | **70** | **130** |

- A resposta certa fica 33, 33, 32 e 32 vezes nas posições A, B, C e D.
- Fato recente leva a data no texto (Dorival em março de 2025, Bruno Guimarães de 2022 a 2026, Raphinha desde 2022). Nada em aberto em 1/11/2026.
- Nenhuma Copa de 2026 e nenhuma Libertadores, Sul-Americana ou Copa do Brasil de 2026.

## Régua usada

A do `calibracao-lucas.md`, com as lições da r2a e da r3a.

- **Fácil**: apelido famoso (Capetinha, Cabezón, Coração Valente, Pitbull, Apache, Super Mario, El Niño, El Pistolero, Bombardeiro, Doutor, Pelé Branco, Casão, Capacete), apelido de clube (Fogão, Vovô, Cruzmaltino, Mais Querido, Blues, Reds, Bianconeri), gol do título (Charisteas, Éder, Trezeguet, Torres, Di María), herói de final (Kahn, Shevchenko), adversário de final muito lembrada (Itália na Euro 2012, França na Euro 2016, Barcelona no Mundial de 1992), momento marcante (convulsão do Ronaldo, Rivaldo contra a Turquia, mão do Henry, Maradona no antidoping, polvo Paul, final da Libertadores de 2018 no Bernabéu, final de 2014 no Maracanã), ídolo e clube e transferência famosa (Kaká, Cristiano Ronaldo, Messi, Klopp, Raphinha).
- **Médio**: vice de final antiga com o campeão fora do texto (Brasileirão 1974, 1980 e 1981; Copa do Brasil 2018 e 2023; Copa América 2024), goleiro reserva que entrou na final de 2002, clube europeu de brasileiro menos óbvio (Bruno Guimarães, Martinelli) e apelido de clube menos conhecido (Giallorossi).
- **Difícil**: 3º lugar (Brasileirão 2010, 2013, 2017 e 2020; Copas de 1974, 2006 e 2022), pontos exatos do campeão (2003, 2016, 2020, 2021 e 2022), placar de jogo não decisivo de Copa, placar de final e de jogo de ida ou volta, ano de fundação e de inauguração, ano de rebaixamento, goleiro titular e técnico de Copa antiga, número de títulos, campeão de liga europeia antiga, autor de gol de jogo não decisivo.

## Checagem web

- **130 checagens** em `verificado_web`, uma por pergunta, todas com o trecho lido. Texto bruto da Wikipédia (`action=raw`), User-Agent genérico de navegador, nunca e-mail. Fontes: wiki en (infobox e caixas de jogo), wiki pt (infobox de clubes, jogadores e campeonatos) e wiki it (tabelas do Brasileirão por temporada, para 3º lugar e pontos).
- O padrão de busca foi apertado até o trecho provar o fato (ex.: `#Brazil vs Scotland|4-1`, `vicecampeão = {{Futebol Atlético-MG`, `third = CRO`, `team1score1 = 1 | team2score1 = 0`). Trecho que só citava o nome não valeu e foi trocado.
- Travessão e meia-risca dos trechos trocados por hífen.
- **Correções que a leitura obrigou:**
  - Bruno Guimarães saiu do Newcastle para o Arsenal em 2026: a pergunta virou "jogou de 2022 a 2026".
  - Casillas tinha 20 anos na final de 2002: saiu o "de 21 anos" e a pergunta ficou só no fato de ter saído do banco.
  - O gol do Thiago Silva contra a Colômbia em 2014 não está como "de cabeça" na fonte: saiu o detalhe.
  - Os gols do Klose contra a Arábia Saudita em 2002: a fonte prova os três gols, não "de cabeça". Saiu o detalhe.
  - A lesão do Ronaldo na Inter: a ruptura foi em novembro de 1999 e a recaída em abril de 2000. O texto diz "entre 1999 e 2000".
  - O gol do Éder na Euro 2016 foi aos 108 minutos, na prorrogação.
- **Saíram por falta de trecho que provasse**: placares das finais da Copa América de 1997 e 1999, número de Copas das Confederações pela página do torneio (ficou a do Brasil), Arsenal vice da Premier 2015/16.

## Cruzamento

`cruzamento.mjs` (procurarE) contra as Esportes do v12, `reaproveitadas-v12.json`, o piloto, os lotes 001-015 (sem descartadas) e o próprio lote, rodado **antes** da checagem web em cada bloco de rascunho. No fim, também contra as descartadas.

- **Cerca de 420 rascunhos, cerca de 290 cortes.** O banco está saturado, sobretudo nas fáceis.
  - **Fáceis**: dos cerca de 260 rascunhos, cerca de 200 repetiam fato. Já estão no banco quase todos os campeões e vices de Brasileirão, Copa do Brasil (2006 a 2024) e Libertadores dos anos 1990 a 2020, os clubes formadores (Vini, Kaká, Ronaldinho, Ronaldo, Romário, Robinho, Coutinho), as finais de Champions de 2000 a 2026, as Copas de 1974 a 2022 (sedes, finais, zebras), os mascotes e apelidos de clubes brasileiros, os estádios, Klopp, Guardiola, Zidane técnico, Mourinho, Simeone, os rebaixamentos de Santos, Cruzeiro, Inter, Vasco e Corinthians, e os Mundiais de 1981, 2005, 2019 e 2022.
  - **Difíceis**: das cerca de 160, cerca de 80 repetiam fato (artilheiros antigos do Brasileirão, 3º lugar das Copas de 1986 a 2018, fundação de Flamengo, Fluminense, Corinthians, Grêmio, Inter e Cruzeiro, inauguração de Morumbi, Beira-Rio e Maracanã, Messi 91 gols, Shearer 260, Milan 7 Champions, sedes de final de Champions).
  - **Entrega de outra pergunta**: o Palmeiras nos títulos de 2020/21 (Felipe Melo), a Grécia campeã da Euro 2004 (Charisteas "grego"), Portugal campeão da Euro 2016 (Éder e França), o Cruzeiro campeão de 2003 (pergunta dos 100 pontos), o Valencia vice em 2000 e 2001 (placar de 2000 e Kahn), a Juventus vice em 2003 (Shevchenko), o Botafogo, o Palmeiras e o Fluminense campeões (placares das finais de 2024, 2021 e 2023), o Atlético Nacional vice em 1995 (placar de 1995), "Palestra Itália" (fundação do Palmeiras), "no Morumbi" (vice de 1981), "Arsenal" no texto do Bruno Guimarães (resposta da Martinelli). Todos reescritos ou cortados.
  - **Mesmo texto de descartada**: "Romário marcou o milésimo gol pelo Vasco" (002#6, descartada na r1). Saiu e entrou "El Pistolero".
- **Falsos alarmes conferidos** (mesma resposta, fato diferente): Edílson (Capetinha x embaixadinhas de 1999), D'Alessandro (apelido x Libertadores 2010), Washington (apelido x artilharia de 2004), Tévez, Sócrates, Zico, Casagrande, Júnior, Gerd Müller, Shevchenko, Maradona (2010 e 1994), Cristiano Ronaldo, Suárez (Pistolero x mordidas), 3º lugar e pontos de anos diferentes, vices de anos diferentes, placares de jogos diferentes.

## Detector e validador

- `node expansao/scripts/entrega.mjs --arquivo expansao/esportes/lotes/esportes-020.json`: **0 suspeitas**. Antes disso, "Atleta do Século pelo Comitê" foi reescrito (o detector casava "pelo" com "Pelé").
- Validador do jogo (`motivoInvalida`): 0 inválidas. Ids únicos e sem colisão com v12, reaproveitadas, piloto e 001-015.

## Para o dono olhar

- Fáceis de Brasileirão, Copa do Brasil e Libertadores quase não existem mais livres: as 50 fáceis ficaram em apelidos, Europa (Euro, Champions, transferências) e momentos de Copa. Brasileirão ficou com 0 fáceis e Seleção com 5 perguntas no total.
- Liverpool é resposta de três perguntas de fatos diferentes (jejum de 30 anos, Klopp e "Reds"), e Fernando Torres de duas (El Niño e gol da Euro 2008).
- Muitas difíceis são placar (cerca de 25). Se o peso incomodar, as mais fracas são os placares de jogo de ida e volta da Libertadores.
