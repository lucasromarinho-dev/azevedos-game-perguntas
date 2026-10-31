# Notas - rodada 3 do banco Esportes (futebol)

Arquivos: `expansao/esportes/lotes/esportes-011.json`, `012` e `013` (100 perguntas cada, status `gerada`, categoria `Esportes`, subtema `futebol`). Mesmo formato dos lotes 006-008.

## Totais

| Assunto (`obra_tema`) | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| Clubes do Brasil | 33 | 22 | 15 | 70 |
| Brasileirão | 6 | 12 | 22 | 40 |
| Libertadores e Sul-Americana | 12 | 14 | 9 | 35 |
| Copa do Brasil e estaduais | 7 | 11 | 7 | 25 |
| Champions e ligas europeias | 16 | 24 | 15 | 55 |
| Copa do Mundo (1970 a 2022) | 12 | 12 | 11 | 35 |
| Seleção, Copa América e Eliminatórias | 8 | 12 | 5 | 25 |
| Craques, ídolos e Bola de Ouro | 6 | 9 | 0 | 15 |
| **Total** | **100** | **115** | **85** | **300** |

- Cada lote tem 33 ou 34 fáceis, 38 ou 39 médias e 28 ou 29 difíceis, com os assuntos misturados. A resposta certa fica 75 vezes em cada posição.
- Clubes do Brasil cobre 16 clubes: Flamengo, Fluminense, Vasco, Botafogo, Corinthians, Palmeiras, São Paulo, Santos, Grêmio, Internacional, Atlético-MG, Cruzeiro, Bahia, Vitória, Coritiba e Santa Cruz.
- Copa do Mundo: nenhuma pergunta de 2026 nem anterior a 1970.
- Fatos recentes levam a data no texto (Mundial de Clubes 2025, Bahia na SAF do City em 2023, Savarino em 2024, artilheiro de 2024, Retegui 2024/25). Nada em aberto: a Libertadores e a Copa do Brasil de 2026 ficaram de fora.

## Régua usada

A do `calibracao-lucas.md`, com as lições da r1 e da r2.

- **Fácil**: momento marcante, campeão, adversário de final famosa, clube que revelou um craque, recorde de partidas de ídolo, jogo do Brasil em Copa que todo mundo viu.
- **Médio**: vice, semifinal, artilheiro, técnico campeão recente, prêmio individual, sede de final, autor de gol que decidiu jogo de Copa.
- **Difícil**: número exato (pontos, gols, placar de final antiga, ano de fundação ou inauguração), terceiro colocado, técnico de título antigo, artilheiro antigo, escalação, autor de gol que não decidiu.

Como a r2 avisou, as fáceis "clássicas" já estavam quase todas usadas. As novas vieram de: clube formador de craque (Paquetá, Antony, Willian, Hulk, Arthur, Pato, Rivaldo), ídolos e recordes de partidas (Rogério Ceni, Nilton Santos, Roberto Dinamite, Valdomiro), times e apelidos históricos (Camisas Negras, Menudos do Morumbi, Deus da Raça, Queixada, Príncipe), títulos mundiais antigos (Santos 1962/63, Grêmio 1995, Vasco 1998, Cruzeiro 1997), finais dos anos 1970 a 1990, jogos do Brasil nas Copas de 1994, 1998, 2006, 2010 e 2018 e técnicos campeões europeus.

## Checagem web

- **308 checagens** registradas em `verificado_web`, todas com o trecho lido. Texto bruto da Wikipédia (`action=raw`) em português e inglês, User-Agent genérico de navegador, nunca e-mail. Toda pergunta tem pelo menos uma; oito têm duas. São 163 leituras na Wikipédia em português e 145 em inglês.
- O padrão de busca foi apertado até o trecho provar o fato (por exemplo `campeão = ... vicecampeão = ...`, a caixa do jogo com o placar, `league topscorer = ...`, `datainauguração = ...`). Trecho que só citava o nome não valeu.
- **Correções que a leitura obrigou:**
  - Lugano e Bolívar são zagueiros, e Mineiro é volante (o rascunho dizia atacante).
  - Alerrandro dividiu a artilharia de 2024 com Yuri Alberto: o enunciado diz isso.
  - O 3º lugar de 2021 foi o Palmeiras, não o Flamengo (vice).
  - A artilharia da Libertadores de 2025 foi dividida: a pergunta saiu. O mesmo com as da Copa do Brasil de 2019, 2022 e 2023.
  - Joãozinho em 1976: a fonte diz "ponta-esquerda" e não "de falta". Thiago Neves em 2008: hat-trick na vitória por 3 a 1, título nos pênaltis da LDU.
  - Manolas: a fonte tem o gol aos 82 minutos, não "de cabeça". Ajax 2019: a fonte confirma a eliminação do Real Madrid, não o placar. Villarreal 2021: saiu o "11 a 10".
  - São Januário foi inaugurado em 21/04/1927; a Nike é fornecedora desde 1996; Gerson voltou ao Flamengo em 2019 (o rascunho errava a ordem dos clubes).
- **Saíram por falta de trecho**: Viola imitando porco (1993), pênalti do Zico em 1986, Thiago Silva suspenso no 7 a 1, Bolívia 1993, Paraguai 2015, URSS 1988, Argentina 1993, bronze olímpico de 1996 e 2008, Leão em 2001, Chile 2 x 0 de 2015, João Leite, Cláudio e Carlitos como artilheiros, Lazzaroni e Luiz Carlos Ferreira, 18 gols do Brasil em 2002, Liverpool com 92 pontos.

## Cruzamento

`expansao/scripts/cruzamento.mjs` (procurarE) contra as Esportes do v12, o piloto, os lotes 001-010 (sem descartadas) e os meus próprios rascunhos. Nesta rodada rodei o cruzamento **antes** da checagem web, em cada bloco de rascunhos, para não gastar leitura com pergunta repetida.

- **Cerca de 470 rascunhos, cerca de 170 cortes.**
  - **Cerca de 110 por repetir fato do v12, do piloto ou dos lotes 001-010.** Exemplos: finais do Brasileirão de 1986, 1992, 1995, 1997, 1998 e 1999; Sócrates em 2011; Bahia 3 x 2 em 2021; São Paulo 2 x 1 em 2024; Felipão 2018; maiores artilheiros de Grêmio, Botafogo, Fluminense, Cruzeiro, São Paulo e Palmeiras; Sóbis 2006; Mineiro 2005; técnicos dos Mundiais (Abel, Autuori, Carpegiani, Espinosa) e Celso Roth; semifinais da Copa de 1994 e 1998; Chile 2014; Camarões e Coreia em 2022; 3º lugar de 2014; Hungria 10 x 1; Romário x Uruguai 1993; finais olímpicas de 2016 e 2020; Copa América 1995, 2021 e 2024; Copa América feminina 2025; Oscar no Sub-20 de 2011; Conte 2016/17; Lille 2020/21; Osimhen; Calleri 2016; Mazembe 2010; Peru 1970; 4 a 2 de 2018.
  - **Cerca de 25 por entregar a resposta de outra pergunta** (do banco ou minha). Exemplos: Romário no PSV x artilheiro do Barça; Gana em dois Sub-20; Mané x Real Madrid 2018; Monaco 2004 (o v12 cita o Mônaco); Bélgica 2018 (a 001 cita a Bélgica no gol contra do Fernandinho); Sporting Cristal (a 007 cita); Grêmio em sete Gauchões (a 007 fala da sequência do rival); Atlético em seis Mineiros; Bayern 2012 (pergunta invertida do v12).
  - **Cerca de 35** por falta de trecho (lista acima) e **18** para fechar a distribuição.
- **Enunciados reescritos** para não entregar: Thiago Neves sem "Fluminense", River 2019 sem "Flamengo", Lanús sem "Grêmio", Di Matteo e Havertz sem "Chelsea"/"City", Sheringham sem "Manchester United" e "Solskjær", Roma 2000/01 sem Totti e Cafu, Queixada sem "Vasco", Dida sem "Milan", Alex sem "Cruzeiro" e "Palmeiras" na mesma frase, Zapata sem "Deportivo Cali", Sporting Cristal sem "Cruzeiro", Mourinho 2004 sem "Porto", Copa João Havelange sem "Vasco", Forlán sem "melhor da Copa de 2010", Adhemar sem "São Caetano".
- **Falsos alarmes conferidos** (mesma resposta, fato diferente): Tite em 2011 x Mundial de 2012, Cuca em 2021 x Libertadores de 2013, Reinaldo artilheiro de 1977 x maior artilheiro do Galo, Nunes 1981 x final de 1980, clubes que revelaram craques diferentes, Juninho no Vasco x no Lyon, River, Boca, LDU, Olimpia e Nacional em edições diferentes, Mourinho 2004 x 2010, Telê no Galo x na Seleção, Kaká na Copa de 2006 x artilheiro da Champions, Zico artilheiro da Libertadores 1981 x Brasileirão, Evair em 1997 x pênalti de 1999.

## Detector de entrega e validador

- `node expansao/scripts/entrega.mjs --arquivo expansao/esportes/lotes/esportes-01N.json`: **0 suspeitas** nos três lotes. Antes disso, reescrevi cinco enunciados que o detector marcou: City Football Group ("dono do Manchester City"), Montillo (o apelido estava no texto), México 1999 ("no México"), Argentinos Juniors ("clube argentino") e Camisas Negras ("jogadores negros").
- Validador do jogo (`motivoInvalida`): 0 inválidas. Ids únicos e sem colisão com v12, piloto e 001-010. Sem travessão longo nem meia-risca em nenhum campo (os títulos ingleses do tipo "2021-22 Premier League" e os placares dos trechos usam hífen).

## Para o dono olhar

- Craques ficou sem difícil (6 fáceis e 9 médias). As difíceis do bloco caíram no cruzamento.
- Brasileirão ficou pesado em difícil (22 de 40): as fáceis do campeonato (campeões e finais) já estão quase todas no v12 e na r1/r2.
- Pares de mesmo tipo que não se entregam e deixei: 3º lugar do Brasileirão em 2016, 2018, 2021 e 2022; pontos do campeão em 2012, 2014, 2015 e 2023; técnicos campeões da Copa América 1997, 1999 e 2007; quatro anos de fundação e cinco de inauguração de estádio.
- "Qual jogador tem mais partidas pela história do X" entrou para São Paulo, Botafogo, Vasco, Internacional e Grêmio (a 006 e a 008 têm Palmeiras, Flamengo e Corinthians).
