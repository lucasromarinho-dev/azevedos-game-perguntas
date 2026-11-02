# Recalibração de dificuldade - banco Esportes

> PARCIAL: 25 de 30 lotes aplicados (01, 02, 03, 04, 06, 07, 08, 09, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29). Os números abaixo cobrem só esses lotes; o resto segue com o nível antigo.

Só o campo `dificuldade` mudou: texto, resposta, alternativas e ordem estão idênticos. Prova: `node esportes/confere-recalibracao.js` (compara com a main de antes, bcc1e97).

## Régua (público adulto brasileiro comum)
- **Fácil**: qualquer adulto responde sem acompanhar esporte (Pelé, Maracanã, penta de 2002, Neymar, Senna, Rio 2016, regras básicas, apelidos famosíssimos).
- **Médio**: quem acompanha esporte responde (campeões recentes, craques atuais, Bolas de Ouro recentes, clubes grandes do exterior, estádios famosos, regras com detalhe, ídolos dos grandes clubes).
- **Difícil**: datas, placares, artilheiros de jogos específicos, estádios e cidades estrangeiras, jogadores secundários, episódios antigos, estatísticas, esportes de nicho, história antes de 1970 fora dos marcos.

Método: julgamento item a item por Opus 5.5, 30 lotes de 100 em ordem, 6 agentes com 5 lotes cada.

## Antes e depois
| Nível | Antes | Depois |
|---|---|---|
| Fácil | 856 (28,5%) | 275 (9,2%) |
| Médio | 1313 (43,8%) | 1566 (52,2%) |
| Difícil | 831 (27,7%) | 1159 (38,6%) |
| Total | 3000 | 3000 |

Mudaram: **885** (29,5%) - subiram 882, desceram 3.

Transições:
| De \ Para | Fácil | Médio | Difícil |
|---|---|---|---|
| Fácil | 275 | 551 | 30 |
| Médio | 0 | 1012 | 301 |
| Difícil | 0 | 3 | 828 |

## 30 exemplos que SUBIRAM
| # | Mudança | Pergunta | Resposta | Razão |
|---|---|---|---|---|
| 70 | Fácil -> Difícil | Qual clube venceu a Copa do Brasil de 2002, numa final contra o Brasiliense? | Corinthians | final antiga de Copa do Brasil |
| 255 | Fácil -> Médio | Qual seleção perdeu na prorrogação a final da Copa do Mundo de 2010? | Holanda | vice de Copa exige acompanhar |
| 289 | Médio -> Difícil | Qual clube ganhou a Copa do Brasil de 1996, vencendo o Palmeiras na final? | Cruzeiro | final antiga de Copa do Brasil |
| 342 | Médio -> Difícil | Qual zagueiro holandês fez de falta o gol do primeiro título europeu do Barcelona, na final de 1992? | Ronald Koeman | autor de gol de final antiga |
| 509 | Fácil -> Médio | Em 2006, qual brasileiro venceu o GP do Brasil, primeira vitória de um brasileiro em casa desde Senna? | Felipe Massa | vitória específica de 2006 |
| 544 | Fácil -> Difícil | Qual clube foi campeão brasileiro invicto em 1979? | Internacional | campanha invicta de 1979 |
| 733 | Fácil -> Médio | Qual seleção venceu o Brasil na final do futebol feminino dos Jogos de Paris 2024? | Estados Unidos | final olímpica feminina exige acompanhar |
| 889 | Médio -> Difícil | Em 2004, qual astro do Houston Rockets marcou 13 pontos nos 35 segundos finais para virar o jogo contra o San Antonio Spurs? | Tracy McGrady | jogo específico de temporada regular |
| 941 | Fácil -> Médio | Em 2012, depois de nocautear Chad Mendes no Rio, como José Aldo comemorou? | Correu para a torcida, pulando a grade | comemoração de luta específica |
| 963 | Médio -> Difícil | Em março de 2023, no UFC 285, qual mexicana conquistou o cinturão peso-mosca feminino numa grande zebra? | Alexa Grasso | campeã estrangeira de categoria |
| 990 | Fácil -> Médio | Qual é o número que Lewis Hamilton usa no carro? | 44 | número de piloto exige acompanhar F1 |
| 1008 | Médio -> Difícil | Em 2001, no Brasil, qual piloto da Williams ultrapassou Michael Schumacher e liderava a corrida quando foi atingido por um retardatário? | Juan Pablo Montoya | lance específico de corrida de 2001 |
| 1103 | Fácil -> Médio | Qual técnico italiano ganhou a Premier League de 2015/16? | Claudio Ranieri | técnico campeão estrangeiro exige acompanhar |
| 1113 | Médio -> Difícil | Qual seleção eliminou o Brasil nos pênaltis nas quartas da Copa do Mundo feminina de 2011, depois de um empate no último minuto da prorrogação? | Estados Unidos | episódio específico de Copa feminina |
| 1153 | Fácil -> Médio | Qual zagueiro brasileiro foi campeão da Champions de 2010 pela Inter de Milão? | Lúcio | elenco campeão estrangeiro exige acompanhar |
| 1160 | Fácil -> Difícil | Qual atacante fez o gol do Botafogo na final do Carioca de 1989, que acabou com um jejum de 21 anos sem títulos? | Maurício | autor de gol de final antiga |
| 1171 | Fácil -> Médio | Qual zagueiro uruguaio, ídolo do São Paulo, foi titular nos títulos da Libertadores e do Mundial de 2005? | Diego Lugano | zagueiro estrangeiro exige acompanhar |
| 1225 | Fácil -> Médio | Qual clube perdeu para o Flamengo a decisão do Módulo Verde, a Copa União de 1987? | Internacional | vice de final de 1987 |
| 1887 | Fácil -> Médio | Qual clube colombiano disputaria a final da Sul-Americana de 2016, que não chegou a ser jogada por causa de uma tragédia aérea? | Atlético Nacional | adversário da Chape exige acompanhar |
| 2093 | Fácil -> Médio | Quem foi o artilheiro do Brasileirão de 1995, ano do título do Botafogo? | Túlio Maravilha | artilheiro de ano específico |
| 2109 | Fácil -> Médio | Qual seleção eliminou o Brasil nas quartas de final da Copa de 2010? | Holanda | eliminação em Copa específica |
| 2114 | Fácil -> Médio | Como é chamado o clássico entre São Paulo e Palmeiras? | Choque-Rei | nome de clássico |
| 2275 | Fácil -> Médio | Qual americano tirou o cinturão de Anderson Silva no UFC? | Chris Weidman | adversário específico no UFC |
| 2398 | Fácil -> Médio | Qual seleção venceu a Copa do Mundo de 1974, disputada em casa? | Alemanha Ocidental | campeão de Copa de 1974 |
| 2535 | Médio -> Difícil | Qual goleiro foi o titular do Brasil na Copa de 1982? | Valdir Peres | goleiro titular de Copa antiga |
| 2603 | Fácil -> Médio | Qual regra da UEFA limita os gastos dos clubes ao que eles arrecadam? | Fair play financeiro | regra da UEFA exige acompanhar |
| 2620 | Médio -> Difícil | Qual torneio da Conmebol, de 1988 a 1997, reunia só os clubes que já tinham vencido a principal copa do continente? | Supercopa Libertadores | torneio extinto pouco lembrado |
| 2666 | Médio -> Difícil | Qual era o mascote da Copa de 1978, um garoto de chapéu e camisa da seleção argentina? | Gauchito | mascote antigo pouco lembrado |
| 2674 | Fácil -> Médio | Qual ex-atacante, símbolo da Democracia Corinthiana, virou comentarista da Globo? | Casagrande | comentarista exige acompanhar |
| 2726 | Médio -> Difícil | Qual personagem de Nelson Rodrigues "explicava" os resultados absurdos do futebol? | Sobrenatural de Almeida | referência literária antiga |

## 30 exemplos que DESCERAM
| # | Mudança | Pergunta | Resposta | Razão |
|---|---|---|---|---|
| 597 | Difícil -> Médio | Qual seleção ficou em 3º lugar na Copa de 2018? | Bélgica | terceiro lugar de Copa exige acompanhar |
| 1233 | Difícil -> Médio | Qual zagueiro chegou ao Flamengo em julho de 2019, como o terceiro espanhol da história do clube, e foi campeão da Libertadores daquele ano? | Pablo Marí | única alternativa espanhola entrega a resposta |
| 1264 | Difícil -> Médio | Qual goleiro francês ganhou a Luva de Ouro da Copa de 1998? | Fabien Barthez | alternativas entregam o goleiro mais famoso |

## Para o Lucas decidir depois: fato errado, ambíguo ou desatualizado (4)
Nada disso foi alterado no banco; só anotado.
| # | Tipo | Pergunta | Resposta | Nota |
|---|---|---|---|---|
| 52 | nao-verificavel | Quantas vitórias por finalização Charles do Bronx somava no UFC até outubro de 2026, recorde da organização? | 17 | até meados de 2026 eram 16 finalizações no UFC; 17 exige vitória por finalização depois, conferir |
| 292 | nao-verificavel | Qual foi o placar da disputa do terceiro lugar da Copa do Mundo de 2026? | 6 a 4 | 6 a 4 é placar incomum para jogo de terceiro lugar; conferir se não somou pênaltis |
| 1079 | ambiguo | Qual atacante foi o artilheiro da Copa João Havelange de 2000, com 22 gols? | Adhemar | Artilharia de 2000 varia nas fontes; Dill, Magno Alves e Romário também aparecem como artilheiros (20 gols) |
| 2272 | errado | Por qual time o pivô Nenê foi draftado e estreou na NBA? | Denver Nuggets | Nenê foi escolhido pelo New York Knicks no draft de 2002 e trocado na hora para o Denver; estreou pelo Denver, mas não foi draftado por ele |

## Todas as mudanças (885)
| # | Mudança | Pergunta | Resposta | Razão |
|---|---|---|---|---|
| 2 | Fácil -> Médio | Quem foi o artilheiro da Copa do Mundo de 2022, com 8 gols? | Kylian Mbappé | artilheiro de Copa exige acompanhar |
| 3 | Fácil -> Médio | Contra qual adversário Vinícius Júnior fez o gol do título do Real Madrid na final da Champions 2021/22? | Liverpool | adversário de final de Champions |
| 5 | Fácil -> Médio | Qual clube conquistou a Champions League 2025/26, vencendo a final nos pênaltis? | Paris Saint-Germain | campeão europeu exige acompanhar |
| 6 | Fácil -> Médio | Qual clube foi campeão da Premier League 2025/26? | Arsenal | campeão inglês exige acompanhar |
| 7 | Fácil -> Médio | Qual seleção eliminou o Brasil nas quartas de final da Copa América de 2024, nos pênaltis? | Uruguai | eliminação em Copa América, quem acompanha |
| 8 | Fácil -> Médio | No início de 2025, Gabigol deixou o Flamengo para jogar em qual clube? | Cruzeiro | transferência exige acompanhar futebol |
| 9 | Fácil -> Médio | Em 2024, Philippe Coutinho voltou ao Brasil para defender qual clube? | Vasco | transferência exige acompanhar futebol |
| 10 | Fácil -> Médio | Qual jogador foi eleito o melhor jovem da Eurocopa de 2024, campeão com a Espanha? | Lamine Yamal | prêmio de torneio europeu |
| 11 | Fácil -> Médio | Qual clube brasileiro venceu o Chelsea por 3 a 1 na fase de grupos do Mundial de Clubes de 2025? | Flamengo | jogo específico do Mundial |
| 12 | Fácil -> Médio | Quem marcou o gol do título na final da Copa do Mundo de 2026? | Ferran Torres | autor de gol de final |
| 16 | Médio -> Difícil | Quem fez os dois gols do Real Madrid na vitória por 2 a 0 sobre o Borussia Dortmund, na final da Champions 2023/24? | Carvajal e Vinícius Júnior | autores de gols de jogo específico |
| 18 | Médio -> Difícil | Quem fez os dois gols do Chelsea na semifinal do Mundial de Clubes de 2025? | João Pedro | autor de gols de jogo específico |
| 21 | Médio -> Difícil | Quem fez o gol do Botafogo na vitória por 1 a 0 sobre o PSG, no Mundial de Clubes de 2025? | Igor Jesus | autor de gol de jogo específico |
| 22 | Fácil -> Médio | Qual clube argentino venceu o Atlético-MG nos pênaltis na final da Copa Sul-Americana de 2025? | Lanús | final continental, quem acompanha sabe |
| 23 | Médio -> Difícil | Por qual placar o Chelsea venceu o PSG na final do Mundial de Clubes de 2025? | 3 a 0 | placar de jogo específico |
| 25 | Médio -> Difícil | Qual jogador foi expulso logo no primeiro minuto da final da Libertadores de 2024? | Gregore | jogador secundário em lance específico |
| 26 | Médio -> Difícil | Na final da Libertadores de 2023, quem marcou o gol do time derrotado? | Luis Advíncula | autor de gol do derrotado |
| 30 | Médio -> Difícil | Qual jogador da Argentina foi expulso na final da Copa do Mundo de 2026? | Enzo Fernández | expulsão em jogo específico |
| 31 | Médio -> Difícil | Qual jogador do Brasil teve um pênalti defendido no primeiro tempo do jogo da eliminação nas oitavas da Copa de 2026? | Bruno Guimarães | lance específico de jogo |
| 33 | Médio -> Difícil | Quem marcou o gol do Arsenal na final da Champions League 2025/26, decidida nos pênaltis? | Kai Havertz | autor de gol de jogo específico |
| 37 | Fácil -> Médio | Em fevereiro de 2025, Luka Dončić foi trocado do Dallas Mavericks para qual time? | Los Angeles Lakers | transferência da NBA |
| 38 | Fácil -> Médio | Qual seleção perdeu para os Estados Unidos na final do basquete masculino em Paris 2024? | França | final olímpica de basquete |
| 48 | Fácil -> Médio | Em março de 2023, Jon Jones conquistou o cinturão de qual categoria do UFC? | Peso-pesado | categoria de luta exige acompanhar UFC |
| 51 | Médio -> Difícil | No UFC 281, em 2022, em que round Alex Pereira nocauteou o rival e ficou com o cinturão dos médios? | 5º round | detalhe de round específico |
| 53 | Fácil -> Médio | Quem foi o campeão mundial de Fórmula 1 em 2025? | Lando Norris | campeão de F1 exige acompanhar |
| 61 | Médio -> Difícil | Qual clube perdeu a final do Brasileirão de 1993 para o Palmeiras? | Vitória | final antiga de Brasileirão |
| 64 | Fácil -> Médio | Qual meia francês, ex-Olympique de Marseille, foi contratado pelo Vasco em 2023? | Dimitri Payet | contratação exige acompanhar futebol |
| 65 | Fácil -> Médio | Qual goleiro do Corinthians fez uma defesa histórica num chute de Diego Souza, do Vasco, nas quartas de final da Libertadores de 2012? | Cássio | lance específico de Libertadores |
| 66 | Fácil -> Médio | Qual técnico comandou a Seleção Brasileira na Copa do Mundo de 2010? | Dunga | técnico de Copa antiga |
| 68 | Médio -> Difícil | Em qual cidade foi disputada a final da Champions League 2025/26? | Budapeste | cidade estrangeira de final |
| 70 | Fácil -> Difícil | Qual clube venceu a Copa do Brasil de 2002, numa final contra o Brasiliense? | Corinthians | final antiga de Copa do Brasil |
| 71 | Fácil -> Médio | Qual clube venceu a Copa João Havelange de 2000, que valeu como Campeonato Brasileiro? | Vasco da Gama | título antigo, quem acompanha sabe |
| 72 | Médio -> Difícil | Qual atacante dividiu com Adriano a artilharia do Brasileirão de 2009? | Diego Tardelli | artilheiro secundário de campeonato antigo |
| 76 | Médio -> Difícil | Qual clube perdeu a final do Brasileirão de 1995 para o Botafogo? | Santos | final de Brasileirão de 1995 |
| 79 | Fácil -> Médio | Em qual zagueiro italiano Luis Suárez deu uma mordida na Copa de 2014? | Giorgio Chiellini | lance de Copa, alternativas parecidas |
| 80 | Médio -> Difícil | Qual clube ganhou a Copa do Brasil de 1992, vencendo o Fluminense na final? | Internacional | final antiga de Copa do Brasil |
| 82 | Fácil -> Médio | Em 2011, o Corinthians garantiu o título brasileiro no mesmo dia da morte de qual ídolo do clube? | Sócrates | episódio exige acompanhar futebol |
| 86 | Fácil -> Médio | Em 2011, Neymar fez o gol que ganhou o Prêmio Puskás da Fifa num jogo do Santos contra qual clube? | Flamengo | adversário de jogo específico |
| 89 | Médio -> Difícil | Qual seleção o Brasil venceu na final da Copa América de 1997, disputada em La Paz? | Bolívia | adversário de final antiga |
| 96 | Fácil -> Médio | Qual técnico comandou a Argentina campeã da Copa do Mundo de 2022? | Lionel Scaloni | técnico campeão exige acompanhar |
| 97 | Fácil -> Médio | No Brasileirão de 2023, qual clube chegou a ter 13 pontos de vantagem na liderança e acabou vendo o Palmeiras ser campeão? | Botafogo | campanha de Brasileirão exige acompanhar |
| 99 | Fácil -> Médio | Qual clube perdeu a final da Champions League 2009/10 para a Inter de Milão? | Bayern de Munique | final de Champions antiga |
| 100 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2004, com Robinho como principal estrela? | Santos | título de 2004 exige acompanhar |
| 101 | Fácil -> Médio | Qual clube foi campeão inglês quatro vezes seguidas, de 2020/21 a 2023/24? | Manchester City | campeão inglês exige acompanhar |
| 102 | Fácil -> Médio | Qual seleção eliminou o Brasil nas quartas de final da Copa América de 2001, num dos maiores vexames da Seleção? | Honduras | eliminação antiga, quem acompanha lembra |
| 106 | Fácil -> Médio | Qual clube ganhou a Copa do Brasil de 2011, vencendo o Coritiba na final? | Vasco da Gama | final de Copa do Brasil |
| 107 | Médio -> Difícil | Quem fez o gol da vitória do São Paulo por 3 a 2 sobre o Milan, nos minutos finais, no Mundial de 1993? | Müller | autor de gol de jogo antigo |
| 110 | Médio -> Difícil | Qual zagueiro argentino fez de cabeça o gol da primeira derrota do Brasil em casa nas Eliminatórias, no Maracanã, em novembro de 2023? | Nicolás Otamendi | autor de gol, alternativas parecidas |
| 114 | Fácil -> Médio | Qual goleiro do Palmeiras defendeu o pênalti de Marcelinho Carioca na semifinal da Libertadores de 2000, contra o Corinthians? | Marcos | lance específico de Libertadores |
| 119 | Fácil -> Médio | Qual clube brasileiro perdeu a final da Copa Sul-Americana de 2022 para o Independiente del Valle? | São Paulo | final continental exige acompanhar |
| 120 | Fácil -> Médio | Qual seleção campeã do mundo foi eliminada na fase de grupos da Copa de 2018, depois de perder para a Coreia do Sul? | Alemanha | campanha de Copa exige acompanhar |
| 121 | Fácil -> Médio | Qual lateral-esquerdo, ex-Real Madrid, foi campeão da Libertadores de 2023? | Marcelo | elenco campeão exige acompanhar |
| 122 | Fácil -> Difícil | Qual lateral-esquerdo italiano bateu o pênalti do título da Itália na final da Copa de 2006? | Fabio Grosso | detalhe de pênalti de 2006 |
| 125 | Médio -> Difícil | Qual clube ganhou a Copa do Brasil de 1995, vencendo o Grêmio na final? | Corinthians | final antiga de Copa do Brasil |
| 126 | Fácil -> Médio | Quem fez o gol do ouro olímpico do Brasil na prorrogação da final de Tóquio? | Malcom | autor de gol de final olímpica |
| 129 | Fácil -> Médio | Qual volante fez o gol do título do Mundial de Clubes de 2005, contra o Liverpool? | Mineiro | autor de gol de final |
| 131 | Médio -> Difícil | Qual clube inglês ganhou a Conference League de 2025/26, vencendo o Rayo Vallecano na final? | Crystal Palace | competição de pouco destaque, final específica |
| 132 | Fácil -> Médio | Qual clube brasileiro conquistou a Libertadores de 1981? | Flamengo | título de 1981 exige acompanhar |
| 133 | Médio -> Difícil | Qual atacante fez o gol do título do Flamengo na final do Brasileirão de 1980, contra o Atlético-MG? | Nunes | autor de gol de final antiga |
| 135 | Fácil -> Médio | Qual clube paraguaio o Atlético-MG venceu nos pênaltis na final da Libertadores de 2013? | Olimpia | adversário de final continental |
| 141 | Fácil -> Médio | Qual clube inglês perdeu a final da Champions League 2018/19 para o Liverpool, em Madri? | Tottenham | adversário de final de Champions |
| 142 | Fácil -> Médio | Qual clube foi campeão italiano em 2022/23, o primeiro título desde a era Maradona? | Napoli | campeão italiano exige acompanhar |
| 143 | Fácil -> Médio | Qual técnico ganhou três Brasileirões seguidos, em 2006, 2007 e 2008? | Muricy Ramalho | técnico campeão exige acompanhar |
| 145 | Médio -> Difícil | Qual clube perdeu a final da Copa do Brasil de 2003 para o Cruzeiro? | Flamengo | final antiga de Copa do Brasil |
| 147 | Fácil -> Médio | Qual volante espanhol fez o gol do título do Manchester City na final da Champions League 2022/23? | Rodri | autor de gol de final |
| 148 | Fácil -> Médio | Qual seleção o Brasil venceu de virada por 3 a 2 na final da Copa das Confederações de 2009? | Estados Unidos | final de Confederações exige acompanhar |
| 149 | Fácil -> Médio | Qual clube perdeu as finais da Champions League de 2009 e de 2011 para o Barcelona? | Manchester United | finais de Champions exige acompanhar |
| 152 | Fácil -> Médio | Qual clube foi campeão brasileiro de 1996, vencendo a Portuguesa na final? | Grêmio | final antiga de Brasileirão |
| 156 | Fácil -> Médio | Qual jogador ganhou a Bola de Ouro de 2021? | Lionel Messi | Bola de Ouro específica exige acompanhar |
| 158 | Fácil -> Médio | Qual clube marroquino eliminou o Atlético-MG na semifinal do Mundial de Clubes de 2013? | Raja Casablanca | adversário estrangeiro em Mundial |
| 165 | Fácil -> Difícil | Qual clube argentino perdeu nos pênaltis a final da Libertadores de 1992? | Newell's Old Boys | final antiga, clube estrangeiro |
| 166 | Fácil -> Médio | Qual seleção eliminou o Brasil nos pênaltis nas quartas de final da Copa de 1986? | França | eliminação de Copa antiga |
| 170 | Fácil -> Médio | Qual clube uruguaio perdeu a final da Libertadores de 2011? | Peñarol | adversário de final continental |
| 172 | Fácil -> Médio | Qual meia voltou ao São Paulo em 2023, depois de mais de dez anos na Europa, e ganhou a Copa do Brasil naquele ano? | Lucas Moura | retorno de jogador exige acompanhar |
| 173 | Médio -> Difícil | Por qual placar terminou a final da Copa do Mundo de 2018? | 4 a 2 | placar de final específica |
| 174 | Fácil -> Médio | Qual clube ganhou a Copa do Brasil de 2013, vencendo o Athletico Paranaense na final? | Flamengo | final de Copa do Brasil |
| 176 | Fácil -> Médio | Qual clube foi campeão brasileiro em 2013 e repetiu o título em 2014? | Cruzeiro | campeão brasileiro exige acompanhar |
| 177 | Fácil -> Médio | Qual técnico comandou o Palmeiras no título brasileiro de 2018? | Luiz Felipe Scolari | técnico campeão exige acompanhar |
| 178 | Médio -> Difícil | Qual atacante montenegrino fez o gol do título do Real Madrid na final da Champions de 1998, contra a Juventus? | Predrag Mijatović | autor de gol de final antiga |
| 186 | Médio -> Difícil | Qual seleção o Brasil venceu no jogo decisivo da Copa América de 1989, no Maracanã? | Uruguai | jogo decisivo de 1989 |
| 187 | Fácil -> Médio | Qual seleção o Brasil goleou por 4 a 1 na final da Copa das Confederações de 2005? | Argentina | final de Confederações exige acompanhar |
| 189 | Fácil -> Médio | Qual zagueiro do Chelsea escorregou e perdeu o pênalti que daria o título na final da Champions de 2008? | John Terry | lance de final de Champions |
| 193 | Fácil -> Médio | Qual brasileiro fez três gols no segundo tempo, fora de casa, na semifinal da Champions 2018/19? | Lucas Moura | jogo específico de Champions |
| 198 | Fácil -> Médio | Qual zagueiro fez de cabeça o gol do título brasileiro do Flamengo contra o Grêmio, na última rodada de 2009? | Ronaldo Angelim | autor de gol de jogo decisivo |
| 200 | Fácil -> Médio | Qual clube gaúcho conquistou a Libertadores de 1995, com Felipão no comando? | Grêmio | título continental antigo exige acompanhar |
| 201 | Médio -> Difícil | Qual clube ganhou a Copa do Brasil de 1994, vencendo o Ceará na final? | Grêmio | final antiga de Copa do Brasil |
| 206 | Fácil -> Médio | Qual francês terminou a Copa de 2026 como maior artilheiro da história das Copas do Mundo, com 22 gols? | Kylian Mbappé | recorde de Copa exige acompanhar |
| 208 | Médio -> Difícil | Qual jogador entrou no segundo tempo e marcou o gol do título na final do Brasileirão de 1996? | Aílton | autor de gol de final antiga |
| 210 | Médio -> Difícil | Qual árbitro estava no centro do escândalo da "Máfia do Apito", que levou à anulação de jogos do Brasileirão de 2005? | Edílson Pereira de Carvalho | nome de árbitro, alternativas parecidas |
| 212 | Médio -> Difícil | Qual clube ganhou a Copa do Brasil de 1997, vencendo o Flamengo na final? | Grêmio | final antiga de Copa do Brasil |
| 214 | Fácil -> Médio | Em 2011, qual clube colombiano eliminou o Corinthians na fase preliminar da Libertadores, num vexame histórico? | Deportes Tolima | eliminação específica exige acompanhar |
| 215 | Fácil -> Médio | Qual holandês fez o gol do título do Bayern na final da Champions League 2012/13, contra o Borussia Dortmund? | Arjen Robben | autor de gol de final |
| 216 | Fácil -> Difícil | Qual seleção o Brasil venceu na final da Copa América de 1999, com Rivaldo e Ronaldo? | Uruguai | adversário de final antiga |
| 220 | Fácil -> Médio | Qual clube ganhou a Copa do Brasil de 2006, numa final carioca contra o Vasco? | Flamengo | final de Copa do Brasil |
| 224 | Médio -> Difícil | Qual clube ganhou a Copa do Brasil de 1990, a primeira conquistada por um time do Rio? | Flamengo | final antiga de Copa do Brasil |
| 227 | Fácil -> Médio | Qual clube foi campeão da Série B de 2024? | Santos | Série B exige acompanhar |
| 228 | Fácil -> Difícil | Qual clube ganhou a Copa do Brasil de 1998, com Felipão como técnico? | Palmeiras | final antiga de Copa do Brasil |
| 229 | Fácil -> Médio | Qual clube perdeu a final da Champions League 2014/15 para o Barcelona de Messi, Suárez e Neymar? | Juventus | adversário de final de Champions |
| 230 | Médio -> Difícil | Contra qual clube o Palmeiras venceu por 1 a 0 e confirmou o título brasileiro de 2016? | Chapecoense | adversário de jogo específico |
| 233 | Fácil -> Médio | Qual clube foi campeão brasileiro de 1992, vencendo o Botafogo na final? | Flamengo | final antiga de Brasileirão |
| 241 | Fácil -> Médio | Qual seleção o Brasil eliminou nos pênaltis nas oitavas de final da Copa de 2014, no Mineirão? | Chile | adversário de jogo de Copa |
| 242 | Fácil -> Médio | Em 2009, qual clube escapou do rebaixamento depois de chegar a ter 98% de chance de cair, num time apelidado de "Time de Guerreiros"? | Fluminense | episódio de Brasileirão exige acompanhar |
| 244 | Fácil -> Médio | Qual clube perdeu a final da Champions League 2019/20 para o Bayern de Munique, em Lisboa? | Paris Saint-Germain | adversário de final de Champions |
| 246 | Médio -> Difícil | Quem converteu o pênalti do título da Alemanha Ocidental na final da Copa de 1990, contra a Argentina? | Andreas Brehme | cobrador de pênalti de final antiga |
| 247 | Fácil -> Médio | Qual técnico ganhou a Libertadores de 2022? | Dorival Júnior | técnico campeão exige acompanhar |
| 248 | Médio -> Difícil | Qual dupla de atacantes do Fluminense dos anos 1980 era chamada de "Casal 20"? | Assis e Washington | apelido antigo de dupla |
| 249 | Fácil -> Médio | Por qual clube Harry Kane conquistou o primeiro título da carreira, na temporada 2024/25? | Bayern de Munique | título de clube exige acompanhar |
| 252 | Fácil -> Médio | Qual clube saudita eliminou o Flamengo na semifinal do Mundial de Clubes disputado em fevereiro de 2023? | Al-Hilal | eliminação em Mundial exige acompanhar |
| 253 | Fácil -> Médio | Na Copa América de 2011, o Brasil errou todos os pênaltis da disputa nas quartas de final contra qual seleção? | Paraguai | eliminação em Copa América |
| 255 | Fácil -> Médio | Qual seleção perdeu na prorrogação a final da Copa do Mundo de 2010? | Holanda | vice de Copa exige acompanhar |
| 258 | Médio -> Difícil | Qual seleção o Brasil goleou por 6 a 0 na final da Copa das Confederações de 1997? | Austrália | final antiga de Confederações |
| 259 | Fácil -> Médio | Em 2021, qual clube gaúcho foi rebaixado para a Série B do Brasileirão? | Grêmio | rebaixamento exige acompanhar futebol |
| 265 | Médio -> Difícil | Qual atacante italiano fez os dois gols do Milan na final da Champions de 2007, contra o Liverpool? | Filippo Inzaghi | autor de gols de final antiga |
| 267 | Fácil -> Médio | Qual clube perdeu a final da Champions League 2013/14, disputada em Lisboa? | Atlético de Madrid | adversário de final de Champions |
| 270 | Médio -> Difícil | Contra qual clube o Atlético-MG virou por 3 a 2, fora de casa, para confirmar o título brasileiro de 2021? | Bahia | adversário de jogo específico |
| 274 | Fácil -> Médio | Qual atacante alemão se tornou, em 2014, o maior artilheiro da história das Copas até então, com 16 gols? | Miroslav Klose | recorde de Copa exige acompanhar |
| 275 | Fácil -> Médio | Contra qual clube Zidane fez o famoso gol de voleio na final da Champions League de 2002? | Bayer Leverkusen | adversário de final de Champions |
| 279 | Médio -> Difícil | Qual atacante nigeriano fez os três gols da final da Liga Europa de 2023/24? | Ademola Lookman | autor de gols de final secundária |
| 281 | Médio -> Difícil | Contra qual clube Rogério Ceni marcou o seu centésimo gol, em 2011? | Corinthians | adversário de gol específico |
| 284 | Médio -> Difícil | Qual clube perdeu a final do Brasileirão de 1997 para o Vasco? | Palmeiras | final antiga de Brasileirão |
| 286 | Fácil -> Médio | Qual técnico comandou a Seleção Brasileira de forma interina em 2023, sem deixar o clube que treinava? | Fernando Diniz | técnico interino exige acompanhar |
| 287 | Médio -> Difícil | Qual clube colombiano perdeu nos pênaltis a final da Libertadores de 1999? | Deportivo Cali | final antiga, clube estrangeiro |
| 288 | Fácil -> Médio | Qual técnico comandou a Seleção Brasileira na Copa do Mundo de 2006? | Carlos Alberto Parreira | técnico de Copa antiga |
| 289 | Médio -> Difícil | Qual clube ganhou a Copa do Brasil de 1996, vencendo o Palmeiras na final? | Cruzeiro | final antiga de Copa do Brasil |
| 290 | Médio -> Difícil | Qual atacante do Botafogo-SP ganhou o Prêmio Puskás da Fifa de 2023, com um gol de bicicleta? | Guilherme Madruga | jogador secundário |
| 294 | Fácil -> Médio | Qual meia sérvio fez o gol de falta do tricampeonato carioca do Flamengo em 2001, contra o Vasco? | Petkovic | autor de gol de estadual |
| 297 | Médio -> Difícil | Qual jovem atacante fez o gol do título do Ajax na final da Champions de 1995, contra o Milan? | Patrick Kluivert | autor de gol de final antiga |
| 300 | Médio -> Difícil | Quem foi o artilheiro do Brasileirão de 2011, jogando pelo Santos? | Borges | artilheiro secundário, Neymar como distrator |
| 303 | Fácil -> Médio | Qual clube brasileiro perdeu a final do Mundial de Clubes de 2017 para o Real Madrid, com gol de falta de Cristiano Ronaldo? | Grêmio | adversário de final de Mundial |
| 304 | Fácil -> Médio | Qual clube argentino venceu o Cruzeiro na final da Copa Sul-Americana de 2024? | Racing | final continental exige acompanhar |
| 306 | Médio -> Difícil | Qual clube ganhou a Copa do Brasil de 2000, vencendo o São Paulo na final? | Cruzeiro | final antiga de Copa do Brasil |
| 311 | Fácil -> Médio | Quem bateu o último pênalti, o do título, na final da Champions League de 2012, em Munique? | Didier Drogba | lance de final de Champions |
| 313 | Médio -> Difícil | Quem fez o gol do título da Argentina na final da Copa de 1986, contra a Alemanha Ocidental? | Jorge Burruchaga | autor de gol de final antiga |
| 314 | Fácil -> Médio | Qual clube mineiro conquistou a Libertadores de 1997? | Cruzeiro | título continental antigo exige acompanhar |
| 316 | Fácil -> Médio | Qual clube ganhou a Copa do Brasil de 2007, vencendo o Figueirense na final? | Fluminense | final de Copa do Brasil |
| 317 | Fácil -> Médio | Qual clube ganhou a Copa do Brasil de 2012, vencendo o Coritiba na final? | Palmeiras | final de Copa do Brasil |
| 318 | Médio -> Difícil | Qual atacante argentino eliminou o Brasil nas oitavas da Copa de 1990, depois de passe de Maradona? | Claudio Caniggia | autor de gol de jogo antigo |
| 319 | Médio -> Difícil | Qual meia foi eleito o Rei da América em 2017? | Luan | prêmio específico, jogador secundário |
| 323 | Fácil -> Médio | Qual clube venceu a final do Brasileirão de 1994, numa decisão contra o Corinthians? | Palmeiras | final antiga de Brasileirão |
| 324 | Médio -> Difícil | Qual clube foi vice-campeão brasileiro em 1992? | Botafogo | vice de campeonato antigo |
| 325 | Fácil -> Médio | Qual clube perdeu nos pênaltis a final da Champions League 2015/16? | Atlético de Madrid | adversário de final de Champions |
| 326 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2005, no ano do escândalo da "Máfia do Apito"? | Corinthians | campeão brasileiro exige acompanhar |
| 330 | Médio -> Difícil | Qual clube grego ganhou a Conference League de 2023/24? | Olympiacos | competição de pouco destaque |
| 333 | Fácil -> Médio | Qual atacante uruguaio, ex-Barcelona, jogou pelo Grêmio na temporada de 2023? | Luis Suárez | passagem por clube exige acompanhar |
| 336 | Médio -> Difícil | Qual clube colombiano foi vice da Copa Sul-Americana de 2018, nos pênaltis? | Junior Barranquilla | vice estrangeiro de torneio secundário |
| 337 | Fácil -> Médio | Em 2005, Ronaldinho foi aplaudido de pé no estádio de qual rival do Barcelona, depois de marcar dois gols? | Real Madrid | episódio específico exige acompanhar |
| 338 | Fácil -> Médio | Qual meia fez o gol do título mundial do Internacional contra o Barcelona, em 2006? | Adriano Gabiru | autor de gol de final |
| 340 | Fácil -> Médio | Qual clube perdeu a final da Champions League 2020/21 para o Chelsea, no Porto? | Manchester City | adversário de final de Champions |
| 341 | Fácil -> Médio | Qual atacante marcou os dois gols do jogo de volta da final da Libertadores de 2012, no Pacaembu? | Emerson Sheik | autor de gols de final |
| 342 | Médio -> Difícil | Qual zagueiro holandês fez de falta o gol do primeiro título europeu do Barcelona, na final de 1992? | Ronald Koeman | autor de gol de final antiga |
| 343 | Médio -> Difícil | Qual clube ganhou a Copa do Brasil de 2001, vencendo o Corinthians na final? | Grêmio | final antiga de Copa do Brasil |
| 345 | Fácil -> Médio | Qual clube brasileiro perdeu a final da Libertadores de 2000 para o Boca Juniors, nos pênaltis? | Palmeiras | final continental exige acompanhar |
| 346 | Fácil -> Médio | Em qual cidade foi disputada a final da Libertadores de 2018, entre River Plate e Boca Juniors, depois do ataque ao ônibus do Boca? | Madri | sede de final exige acompanhar |
| 349 | Fácil -> Médio | Qual técnico levou o Corinthians aos títulos brasileiros de 2011 e de 2015? | Tite | técnico campeão exige acompanhar |
| 350 | Fácil -> Médio | Quantos títulos da NBA Michael Jordan conquistou na carreira? | 6 | número de títulos da NBA |
| 355 | Médio -> Difícil | Qual destes astros da NBA nasceu em Akron, Ohio, a mesma cidade de LeBron James? | Stephen Curry | cidade natal de jogador |
| 365 | Fácil -> Médio | Qual astro do Boston Celtics venceu os três primeiros torneios de três pontos do All-Star, de 1986 a 1988? | Larry Bird | lenda da NBA pouco conhecida aqui |
| 366 | Fácil -> Médio | Qual lenda da NBA trocou de nome em 1971 e deixou de se chamar Lew Alcindor? | Kareem Abdul-Jabbar | nome antigo exige acompanhar NBA |
| 368 | Fácil -> Médio | Qual astro da NBA é conhecido pelo apelido de "Joker"? | Nikola Jokić | apelido exige acompanhar NBA |
| 369 | Fácil -> Médio | Qual astro da NBA vendia relógios e óculos nas ruas de Atenas antes de virar profissional? | Giannis Antetokounmpo | história de jogador exige acompanhar NBA |
| 370 | Fácil -> Médio | Qual astro da NBA, campeão da Euroliga pelo Real Madrid em 2018, virou estrela nos Estados Unidos? | Luka Dončić | trajetória exige acompanhar basquete |
| 373 | Médio -> Difícil | Qual jogador é o recordista de ouros olímpicos no basquete masculino, com quatro? | Kevin Durant | recorde numérico olímpico |
| 374 | Fácil -> Médio | Qual astro americano acertou quatro bolas de três seguidas nos minutos finais da final olímpica de Paris 2024, contra a França? | Stephen Curry | lance de final olímpica |
| 375 | Fácil -> Médio | Em 2020, por causa da pandemia, os playoffs da NBA foram disputados numa "bolha" em qual lugar? | Disney World, na Flórida | detalhe da NBA na pandemia |
| 376 | Fácil -> Médio | Qual franquia é a maior campeã da história da NBA, com 18 títulos? | Boston Celtics | recorde de títulos da NBA |
| 377 | Fácil -> Médio | O nome de Kobe Bryant foi inspirado em quê? | Num tipo de carne japonesa | curiosidade exige acompanhar NBA |
| 392 | Médio -> Difícil | Qual é o primeiro nome verdadeiro de Magic Johnson? | Earvin | nome de batismo, alternativas parecidas |
| 395 | Médio -> Difícil | Antes do basquete, Tim Duncan treinava qual esporte nas Ilhas Virgens? | Natação | curiosidade biográfica obscura |
| 398 | Médio -> Difícil | Qual ala brasileiro chegou ao Golden State Warriors em 2023? | Gui Santos | jogador secundário |
| 500 | Fácil -> Médio | Em qual GP foi decidido o título de 2021 da Fórmula 1, numa disputa na última volta entre Verstappen e Hamilton? | Abu Dhabi | decisão de título específica da F1 |
| 502 | Fácil -> Médio | Em 2026, Gabriel Bortoleto corre por qual montadora, que comprou a antiga Sauber? | Audi | equipe atual de piloto exige acompanhar F1 |
| 503 | Fácil -> Médio | Qual brasileiro foi, por anos, o recordista de largadas da história da Fórmula 1? | Rubens Barrichello | recorde de largadas exige acompanhar F1 |
| 504 | Fácil -> Médio | Desde 2021, a corrida brasileira da Fórmula 1 passou a ter qual nome oficial? | GP de São Paulo | nome oficial do GP exige acompanhar |
| 507 | Médio -> Difícil | Em qual ano Ayrton Senna conquistou o primeiro título mundial? | 1988 | ano específico de título |
| 508 | Fácil -> Médio | Qual equipe de Fórmula 1 usa a cor laranja "papaia" como marca registrada? | McLaren | cor de equipe exige acompanhar F1 |
| 509 | Fácil -> Médio | Em 2006, qual brasileiro venceu o GP do Brasil, primeira vitória de um brasileiro em casa desde Senna? | Felipe Massa | vitória específica de 2006 |
| 513 | Médio -> Difícil | Em qual circuito Senna fez a famosa primeira volta na chuva em 1993, passando quatro carros? | Donington Park | circuito estrangeiro de corrida antiga |
| 515 | Médio -> Difícil | Em 1987, Nelson Piquet foi campeão mundial correndo por qual equipe? | Williams | equipe de título de 1987 |
| 516 | Médio -> Difícil | Em 1972, Emerson Fittipaldi foi campeão pela primeira vez correndo por qual equipe? | Lotus | equipe de título de 1972 |
| 521 | Médio -> Difícil | Em 2023, Gabriel Bortoleto foi campeão de qual categoria de base do automobilismo? | Fórmula 3 | categoria de base de piloto |
| 523 | Médio -> Difícil | Em 2022, qual piloto conquistou sua primeira vitória na F1, em Interlagos? | George Russell | primeira vitória de piloto estrangeiro |
| 525 | Médio -> Difícil | Quantos títulos mundiais Alain Prost conquistou? | 4 | número de títulos é estatística |
| 527 | Médio -> Difícil | Com quantos anos Max Verstappen estreou na Fórmula 1, em 2015, o mais jovem da história? | 17 | idade de estreia é recorde numérico |
| 544 | Fácil -> Difícil | Qual clube foi campeão brasileiro invicto em 1979? | Internacional | campanha invicta de 1979 |
| 546 | Médio -> Difícil | Qual seleção o Brasil eliminou na semifinal da Copa de 1962? | Chile | semifinal de Copa antes de 1970 |
| 547 | Médio -> Difícil | Qual clube argentino venceu o Grêmio na final da Libertadores de 1984? | Independiente | final de Libertadores de 1984 |
| 550 | Fácil -> Médio | Qual clube venceu o Palmeiras na final do Paulistão de 2025? | Corinthians | final estadual recente exige acompanhar |
| 554 | Fácil -> Difícil | Qual clube venceu o Cruzeiro na final do Brasileirão de 1974? | Vasco da Gama | final do Brasileirão de 1974 |
| 556 | Médio -> Difícil | Qual atacante foi o artilheiro da Copa do Brasil de 2013, com 8 gols pelo campeão? | Hernane | artilheiro de Copa do Brasil |
| 559 | Médio -> Difícil | Qual seleção o Brasil venceu por 2 a 1 na final do Mundial Sub-17 de 2019, disputado em casa? | México | final de Mundial Sub-17 |
| 561 | Fácil -> Médio | Qual clube perdeu a final do Paulistão de 2024 para o Palmeiras? | Santos | final estadual recente exige acompanhar |
| 565 | Fácil -> Difícil | Em qual estádio de Bruxelas aconteceu a tragédia antes da final da Copa dos Campeões de 1985, entre Juventus e Liverpool? | Heysel | estádio estrangeiro de tragédia antiga |
| 568 | Fácil -> Difícil | Qual clube o Santos de Pelé venceu na final da Libertadores de 1963? | Boca Juniors | final de Libertadores de 1963 |
| 572 | Fácil -> Difícil | Qual atacante fez três gols na final da Copa de 1966? | Geoff Hurst | artilheiro de final de 1966 |
| 574 | Médio -> Difícil | Quem marcou nos dois jogos da final da Libertadores de 2010 pelo campeão? | Giuliano | autor de gols em final específica |
| 575 | Médio -> Difícil | Em qual cidade foi disputada a final da Champions de 2009, no Estádio Olímpico? | Roma | cidade estrangeira de final específica |
| 576 | Fácil -> Médio | Qual clube ganhou o Campeonato Francês de 2024/25? | Paris Saint-Germain | campeão de liga estrangeira |
| 580 | Fácil -> Médio | Qual clube perdeu a final do Brasileirão de 2002 para o Santos de Robinho e Diego? | Corinthians | final do Brasileirão de 2002 |
| 583 | Fácil -> Médio | Qual holandês fez um gol de peixinho na goleada por 5 a 1 sobre a Espanha, na estreia das duas na Copa de 2014? | Robin van Persie | lance de jogo específico de Copa |
| 588 | Médio -> Difícil | Qual clube venceu o Cruzeiro nos pênaltis na final da Libertadores de 1977? | Boca Juniors | final de Libertadores de 1977 |
| 590 | Fácil -> Médio | Qual destes clubes caiu para a Série B no Brasileirão de 2024? | Athletico Paranaense | rebaixado exige acompanhar Brasileirão |
| 592 | Médio -> Difícil | Qual técnico ganhou a Copa do Brasil de 2019, vencendo o Internacional na final? | Tiago Nunes | técnico secundário de título específico |
| 596 | Fácil -> Difícil | Quem marcou o gol do 2 a 1 no Maracanã, no jogo de volta, que deu o título da Copa do Brasil de 2025? | Memphis Depay | autor de gol em final específica |
| 597 | Difícil -> Médio | Qual seleção ficou em 3º lugar na Copa de 2018? | Bélgica | terceiro lugar de Copa exige acompanhar |
| 598 | Médio -> Difícil | Em qual cidade argentina foi disputada a final da Sul-Americana de 2022? | Córdoba | cidade estrangeira de final continental |
| 600 | Fácil -> Médio | Qual técnico é o maior campeão da história da Champions League, com cinco títulos? | Carlo Ancelotti | recorde de técnico exige acompanhar |
| 603 | Fácil -> Médio | Em outubro de 2023, Neymar rompeu o ligamento do joelho num jogo das Eliminatórias contra qual seleção? | Uruguai | adversário de jogo específico |
| 609 | Fácil -> Médio | Qual técnico espanhol assumiu o Real Madrid em junho de 2025, mas deixou o clube sete meses depois? | Xabi Alonso | técnico recente de clube estrangeiro |
| 616 | Fácil -> Médio | Qual inglês ganhou a Bola de Ouro de 2026, na cerimônia de Londres em outubro? | Harry Kane | Bola de Ouro recente |
| 620 | Fácil -> Médio | Qual clube ganhou a Série B de 2022, voltando à elite depois de três anos? | Cruzeiro | campeão da Série B exige acompanhar |
| 622 | Médio -> Difícil | Qual atacante argentino do São Paulo foi o artilheiro da Libertadores de 2016, com 9 gols? | Jonathan Calleri | artilheiro de competição específica |
| 623 | Médio -> Difícil | Qual clube perdeu nos pênaltis a final do Brasileirão de 1977 para o São Paulo? | Atlético Mineiro | final do Brasileirão de 1977 |
| 639 | Fácil -> Difícil | Qual clube venceu o São Paulo no Morumbi, com gol de Baltazar, e foi campeão brasileiro de 1981? | Grêmio | final do Brasileirão de 1981 |
| 642 | Fácil -> Médio | Qual seleção venceu o Brasil por 3 a 0 na disputa do 3º lugar da Copa de 2014? | Holanda | disputa de 3º lugar exige acompanhar |
| 646 | Fácil -> Médio | Qual empresário americano comprou o futebol do Botafogo em 2022? | John Textor | dono de SAF exige acompanhar |
| 650 | Fácil -> Difícil | Qual clube perdeu a final do Brasileirão de 1975 para o Internacional? | Cruzeiro | final do Brasileirão de 1975 |
| 660 | Médio -> Difícil | Qual técnico foi campeão brasileiro de 1995? | Paulo Autuori | técnico campeão de 1995 |
| 661 | Fácil -> Médio | Qual uruguaio, dispensado pelo Barcelona, foi decisivo no título espanhol do Atlético de Madrid em 2020/21? | Luis Suárez | campeão espanhol exige acompanhar |
| 663 | Médio -> Difícil | Qual brasileiro foi o artilheiro da Copa de 1938? | Leônidas da Silva | Copa de 1938 antes de 1970 |
| 664 | Fácil -> Difícil | Qual clube venceu o São Paulo nos pênaltis na final da Libertadores de 1994? | Vélez Sarsfield | final de Libertadores de 1994 |
| 667 | Fácil -> Médio | Qual goleiro estava no gol do Brasil na derrota por 7 a 1 para a Alemanha, em 2014? | Júlio César | escalação de jogo específico |
| 671 | Fácil -> Médio | Quem marcou de pênalti logo no 2º minuto da final da Champions de 2019, em Madri? | Mohamed Salah | lance de final estrangeira |
| 673 | Fácil -> Médio | Em setembro de 2021, o Brasil x Argentina pelas Eliminatórias, em São Paulo, foi suspenso aos cinco minutos. Por quê? | Agentes de saúde exigiram o isolamento de quatro jogadores | episódio específico de Eliminatórias |
| 674 | Fácil -> Médio | Em 2013, qual clube perdeu pontos no tribunal por escalar o meia Héverton de forma irregular e acabou rebaixado? | Portuguesa | caso de tribunal exige acompanhar |
| 677 | Fácil -> Médio | Qual seleção eliminou a Argentina de Messi nas oitavas de final da Copa de 2018, numa vitória por 4 a 3? | França | jogo específico de Copa |
| 680 | Médio -> Difícil | Em qual cidade foi disputada a final inglesa da Liga Europa de 2019, entre Chelsea e Arsenal? | Baku | cidade estrangeira de final |
| 681 | Fácil -> Médio | Qual clube venceu o Grêmio na final do Gauchão de 2025 e interrompeu a sequência de títulos do rival? | Internacional | final estadual recente exige acompanhar |
| 683 | Médio -> Difícil | Qual clube uruguaio perdeu a final da Libertadores de 1962 para o Santos? | Peñarol | final de Libertadores de 1962 |
| 685 | Fácil -> Difícil | Na final do Brasileirão de 1990, quem marcou o gol do título do Corinthians sobre o São Paulo? | Tupãzinho | autor de gol de final antiga |
| 694 | Fácil -> Médio | De qual clube Harry Kane saiu em 2023, deixando o posto de maior artilheiro da história do clube? | Tottenham | clube estrangeiro de jogador |
| 696 | Médio -> Difícil | Qual seleção o Brasil venceu por 4 a 2 nas quartas de final da Copa de 1970? | Peru | placar de jogo específico de 1970 |
| 697 | Fácil -> Difícil | Quem fez o gol do título do Brasil no jogo decisivo da Copa América de 1989, no Maracanã? | Romário | autor de gol de jogo de 1989 |
| 705 | Fácil -> Médio | Na "Batalha dos Aflitos", em 2005, qual clube venceu o jogo decisivo e ganhou a Série B? | Grêmio | episódio da Série B exige acompanhar |
| 709 | Fácil -> Difícil | Em 1976, cerca de 70 mil corintianos foram ao Maracanã na "Invasão Corintiana". Qual era o adversário daquela semifinal? | Fluminense | episódio antigo de 1976 |
| 712 | Fácil -> Médio | Qual brasileiro ficou em 2º lugar na Bola de Ouro de 2024? | Vinícius Júnior | Bola de Ouro recente |
| 719 | Médio -> Difícil | Qual técnico foi tricampeão brasileiro seguido entre 1975 e 1977, duas vezes pelo Internacional e uma pelo São Paulo? | Rubens Minelli | técnico campeão nos anos 70 |
| 720 | Fácil -> Médio | Quem fez os dois gols da final da Champions de 2010, no Santiago Bernabéu? | Diego Milito | autor de gols de final estrangeira |
| 722 | Médio -> Difícil | Qual seleção venceu o Brasil por 3 a 1 em 1966 e eliminou o bicampeão ainda na fase de grupos? | Portugal | Copa de 1966 antes de 1970 |
| 727 | Fácil -> Médio | Na decisão por pênaltis da final da Copa do Brasil de 2022, qual lateral converteu a última cobrança do Flamengo? | Rodinei | cobrador de pênalti específico |
| 730 | Fácil -> Médio | Qual clube perdeu a final da Champions de 2017, em Cardiff, para o Real Madrid? | Juventus | final estrangeira exige acompanhar |
| 733 | Fácil -> Médio | Qual seleção venceu o Brasil na final do futebol feminino dos Jogos de Paris 2024? | Estados Unidos | final olímpica feminina exige acompanhar |
| 734 | Fácil -> Difícil | Qual clube venceu o Santos no Maracanã e foi campeão brasileiro de 1983? | Flamengo | final do Brasileirão de 1983 |
| 737 | Fácil -> Médio | Qual francês acertou o travessão e perdeu o único pênalti da disputa na final da Copa de 2006? | David Trezeguet | lance de final de Copa |
| 741 | Fácil -> Médio | Em 1993, o Palmeiras encerrou um jejum de quase 17 anos sem títulos vencendo qual rival na final do Paulistão? | Corinthians | final estadual de 1993 |
| 744 | Médio -> Difícil | Quem fez o gol do 1 a 0 sobre o Vasco, em São Januário, que confirmou o título brasileiro de 2018? | Deyverson | autor de gol de jogo específico |
| 745 | Fácil -> Difícil | Qual clube perdeu a final do Brasileirão de 1982 para o Flamengo, no Estádio Olímpico? | Grêmio | final do Brasileirão de 1982 |
| 748 | Fácil -> Médio | Qual atacante marcou um golaço por cobertura no estádio do Lanús, no jogo de volta da final da Libertadores de 2017? | Luan | lance de final continental |
| 751 | Médio -> Difícil | Na Batalha dos Aflitos, em 2005, quem fez o único gol do jogo, num contra-ataque logo depois do pênalti defendido? | Anderson | autor de gol de jogo específico |
| 755 | Fácil -> Médio | Qual clube ganhou o Campeonato Italiano de 2023/24, conquistando a segunda estrela pelo 20º título? | Inter de Milão | campeão de liga estrangeira |
| 766 | Fácil -> Médio | Para qual clube o goleiro Ederson foi em 2017, saindo do Benfica? | Manchester City | transferência exige acompanhar |
| 770 | Fácil -> Médio | Qual técnico, ex-goleiro e ídolo do São Paulo, foi o técnico do campeão brasileiro de 2020? | Rogério Ceni | técnico campeão recente |
| 773 | Fácil -> Médio | Qual seleção eliminou a Espanha nos pênaltis nas oitavas de final da Copa de 2022? | Marrocos | jogo específico de Copa |
| 777 | Fácil -> Médio | Qual clube venceu o Atlético-MG na final do Campeonato Mineiro de 2026? | Cruzeiro | final estadual recente exige acompanhar |
| 788 | Fácil -> Médio | Na final da Copa do Brasil de 2024, qual atacante fez dois gols no jogo de ida, no Maracanã? | Gabigol | autor de gols de final recente |
| 792 | Fácil -> Médio | Em 2009, o Barcelona de Guardiola foi o primeiro clube europeu a ganhar quantos títulos num mesmo ano? | 6 | marca de clube estrangeiro |
| 795 | Fácil -> Médio | Qual técnico comandou o Brasil na Copa de 1998, vice-campeão na França? | Zagallo | técnico de Copa específica |
| 799 | Médio -> Difícil | Qual seleção o Brasil venceu por 5 a 2 na semifinal da Copa de 1958, com três gols de Pelé? | França | placar de jogo de 1958 |
| 800 | Médio -> Difícil | Qual clube uruguaio venceu o Internacional na final da Libertadores de 1980? | Nacional | final de Libertadores de 1980 |
| 803 | Fácil -> Médio | Na final do Carioca de 1995, qual jogador do Fluminense fez o famoso "gol de barriga" contra o Flamengo? | Renato Gaúcho | lance de final estadual exige acompanhar |
| 807 | Fácil -> Difícil | Qual clube ganhou o Brasileirão de 1972 e o de 1973, com a chamada Segunda Academia? | Palmeiras | títulos brasileiros dos anos 70 |
| 810 | Fácil -> Médio | Quantas Bolas de Ouro Cristiano Ronaldo ganhou na carreira? | 5 | número de Bolas de Ouro exige acompanhar |
| 812 | Médio -> Difícil | Quem fez, de pênalti, o gol do título do Brasil na final da Copa América feminina de 2022? | Debinha | autora de gol de final específica |
| 817 | Médio -> Difícil | Em 2012, o campeão brasileiro confirmou a taça vencendo o Palmeiras por 3 a 2 em qual cidade do interior paulista? | Presidente Prudente | cidade de jogo específico |
| 818 | Fácil -> Médio | Qual atacante fez o gol da virada nos acréscimos da final da Champions de 1999? | Ole Gunnar Solskjær | autor de gol de final estrangeira |
| 821 | Fácil -> Médio | Qual atacante fez o gol do título do Athletico Paranaense na final da Sul-Americana de 2021, em Montevidéu? | Nikão | autor de gol de final continental |
| 828 | Médio -> Difícil | Qual goleiro romeno defendeu quatro pênaltis seguidos na final da Copa dos Campeões de 1986? | Helmuth Duckadam | goleiro estrangeiro de final antiga |
| 829 | Fácil -> Médio | Qual clube ganhou a Bundesliga em 2010/11 e em 2011/12, com Jürgen Klopp no comando? | Borussia Dortmund | campeão de liga estrangeira |
| 831 | Médio -> Difícil | Quantos gols Pelé marcou em Copas do Mundo? | 12 | estatística numérica de gols |
| 832 | Fácil -> Médio | Qual seleção venceu o Brasil nos pênaltis na final da Copa América de 1995? | Uruguai | final de Copa América de 1995 |
| 834 | Fácil -> Médio | Qual fundamento era o ponto fraco de Shaquille O'Neal, a ponto de os rivais fazerem falta nele de propósito? | Lance livre | detalhe técnico de astro da NBA |
| 835 | Fácil -> Médio | Qual jogador da NBA namorou Madonna nos anos 1990 e chegou a se casar com a atriz Carmen Electra? | Dennis Rodman | vida pessoal de jogador da NBA |
| 836 | Fácil -> Médio | Qual astro da NBA foi um dos porta-bandeiras dos Estados Unidos na abertura dos Jogos de Paris 2024? | LeBron James | porta-bandeira olímpico exige acompanhar |
| 837 | Médio -> Difícil | Stephen Curry é filho de qual ex-jogador da NBA, que também usava a camisa 30 e teve o número aposentado pelo Charlotte Hornets? | Dell Curry | pai de astro da NBA |
| 839 | Médio -> Difícil | Qual lenda da seleção americana de 1992, com problemas nas costas, se aposentou logo depois dos Jogos? | Larry Bird | aposentadoria específica de jogador da NBA |
| 842 | Fácil -> Médio | Na final do Oeste de 2000, contra o Portland, qual astro deu a ponte aérea que selou a vitória no jogo 7? | Kobe Bryant | lance específico de playoff da NBA |
| 846 | Fácil -> Médio | Em 2014, qual astro anunciou, num texto publicado na revista Sports Illustrated, a volta ao time do seu estado natal? | LeBron James | episódio de carreira da NBA |
| 847 | Fácil -> Médio | Qual astro da NBA ganhou o apelido de "Chef"? | Stephen Curry | apelido exige acompanhar NBA |
| 849 | Médio -> Difícil | Qual astro, que tinha se aposentado meses antes, voltou só para o All-Star Game de 1992 e foi eleito o MVP do jogo? | Magic Johnson | MVP de All-Star antigo |
| 850 | Fácil -> Médio | A NBA tem times de quais dois países? | Estados Unidos e Canadá | exige saber de time canadense |
| 853 | Médio -> Difícil | Em 2002, qual astro ficou famoso por uma entrevista em que repetiu mais de 20 vezes a palavra "practice" (treino)? | Allen Iverson | entrevista antiga de jogador da NBA |
| 855 | Fácil -> Médio | Qual time da NBA é o segundo maior campeão da história, com 17 títulos? | Los Angeles Lakers | número de títulos de time da NBA |
| 857 | Fácil -> Médio | Qual bebida esportiva fez, em 1991, a famosa campanha "Be Like Mike", com Michael Jordan? | Gatorade | campanha publicitária antiga específica |
| 859 | Fácil -> Médio | Qual astro foi o primeiro jogador da NBA a se tornar bilionário ainda em atividade? | LeBron James | marco financeiro exige acompanhar |
| 864 | Fácil -> Médio | Qual pivô teve uma briga famosa e pública com Kobe Bryant quando os dois eram companheiros de equipe? | Shaquille O'Neal | bastidor da NBA exige acompanhar |
| 868 | Fácil -> Médio | Em 1997, qual novato de 18 anos venceu o torneio de enterradas do All-Star? | Kobe Bryant | torneio de enterradas antigo |
| 869 | Médio -> Difícil | Qual astro foi eleito o MVP da temporada 2013/14, interrompendo a sequência de dois prêmios seguidos de LeBron James? | Kevin Durant | MVP de temporada específica |
| 870 | Fácil -> Médio | Qual lenda da NBA fez o copiloto Roger Murdock na comédia "Apertem os Cintos... O Piloto Sumiu!", de 1980? | Kareem Abdul-Jabbar | participação em filme antigo |
| 871 | Fácil -> Médio | O nome do Philadelphia 76ers faz referência a qual fato histórico? | A independência dos EUA, em 1776 | exige saber data da independência americana |
| 872 | Fácil -> Médio | No pódio olímpico de 1992, com o que Michael Jordan cobriu o logotipo da Reebok no agasalho? | Bandeira dos Estados Unidos | episódio olímpico de 1992 |
| 873 | Fácil -> Médio | Qual é o título do filme de 2023, dirigido por Ben Affleck, sobre como uma marca de tênis contratou Michael Jordan? | Air | título de filme pouco popular |
| 874 | Fácil -> Médio | Qual ex-pivô da NBA também faz carreira na música eletrônica com o nome artístico "Diesel"? | Shaquille O'Neal | carreira musical de jogador |
| 876 | Médio -> Difícil | Nos Jogos de 1992, Charles Barkley deu uma cotovelada num jogador de qual seleção, na estreia da seleção americana? | Angola | adversário de jogo olímpico antigo |
| 877 | Médio -> Difícil | Qual armador ficou fora da seleção americana de 1992, segundo relatos, por resistência de Michael Jordan? | Isiah Thomas | bastidor de convocação de 1992 |
| 885 | Médio -> Difícil | Qual astro derrubou com a mão um morcego que voava pela quadra, num jogo de 2009? | Manu Ginóbili | episódio curioso de jogo da NBA |
| 887 | Médio -> Difícil | Qual pivô romeno, um dos mais altos da história da NBA, fez o papel-título do filme "Meu Gigante" (1998), com Billy Crystal? | Gheorghe Mureșan | jogador secundário da NBA |
| 888 | Médio -> Difícil | No jogo 7 das finais de 2016, LeBron James deu um toco decisivo nos minutos finais em qual jogador? | Andre Iguodala | lance específico de final da NBA |
| 889 | Médio -> Difícil | Em 2004, qual astro do Houston Rockets marcou 13 pontos nos 35 segundos finais para virar o jogo contra o San Antonio Spurs? | Tracy McGrady | jogo específico de temporada regular |
| 894 | Médio -> Difícil | A série "Arremesso Final" (The Last Dance) acompanha de perto qual temporada da NBA? | 1997/98 | temporada específica da NBA |
| 895 | Médio -> Difícil | Desde 2021, a bola oficial da NBA é fabricada por qual marca? | Wilson | fornecedor de bola da NBA |
| 898 | Médio -> Difícil | Qual astro criou e interpretou o "Uncle Drew", um idoso que joga basquete, em comerciais e num filme de 2018? | Kyrie Irving | personagem publicitário de nicho |
| 900 | Médio -> Difícil | Qual jogador da NBA atuou com Denzel Washington no filme "Jogada Decisiva" (He Got Game), de 1998? | Ray Allen | participação em filme de nicho |
| 901 | Médio -> Difícil | Em fevereiro de 2025, Victor Wembanyama foi afastado pelo resto da temporada por causa de qual problema? | Trombose no ombro | lesão específica de jogador da NBA |
| 904 | Médio -> Difícil | Magic Johnson é um dos donos de qual time de beisebol? | Los Angeles Dodgers | negócios de ex-jogador fora da NBA |
| 905 | Fácil -> Médio | A maior rivalidade da NBA nos anos 1980 começou numa final de 1979 entre Michigan State e Indiana State. De qual competição? | Torneio universitário (NCAA) | origem universitária exige acompanhar NBA |
| 908 | Médio -> Difícil | Quem foi eleito o MVP da temporada 1999/2000, a um voto da unanimidade? | Shaquille O'Neal | MVP de temporada específica |
| 910 | Médio -> Difícil | Qual astro dos Lakers do "Showtime" ganhou o apelido de "Big Game James"? | James Worthy | jogador secundário dos anos 80 |
| 933 | Fácil -> Médio | Qual golpe Ronda Rousey usava para finalizar a maioria das rivais? | Chave de braço | técnica de lutadora exige acompanhar |
| 934 | Fácil -> Médio | Conor McGregor lançou uma marca de qual bebida, a Proper No. Twelve? | Uísque | negócio de lutador exige acompanhar |
| 935 | Fácil -> Médio | Qual lutador ficou famoso por um vídeo em que, ainda criança, luta com um filhote de urso? | Khabib Nurmagomedov | vídeo viral exige acompanhar MMA |
| 937 | Fácil -> Médio | Em maio de 2024, no UFC 301, no Rio, qual ídolo brasileiro voltou da aposentadoria e venceu sua luta? | José Aldo | evento específico do UFC |
| 939 | Fácil -> Médio | Qual lutadora do UFC atuou no filme "Velozes e Furiosos 7", de 2015? | Ronda Rousey | filmografia de lutadora |
| 941 | Fácil -> Médio | Em 2012, depois de nocautear Chad Mendes no Rio, como José Aldo comemorou? | Correu para a torcida, pulando a grade | comemoração de luta específica |
| 942 | Fácil -> Médio | Qual é o nome do pai de Royce Gracie, grão-mestre e um dos criadores do jiu-jítsu brasileiro? | Hélio Gracie | família Gracie exige acompanhar |
| 943 | Fácil -> Médio | Antes da fama, Conor McGregor trabalhava em qual profissão? | Encanador | biografia de lutador estrangeiro |
| 944 | Fácil -> Médio | O filme brasileiro "Mais Forte que o Mundo", de 2016, conta a história de qual lutador? | José Aldo | filme nacional pouco conhecido |
| 946 | Fácil -> Médio | Em abril de 2018, em Nova York, Conor McGregor foi preso depois de arremessar um carrinho de metal contra o quê? | Um ônibus com lutadores | episódio policial de lutador |
| 948 | Fácil -> Médio | Em setembro de 2024, o UFC 306 foi realizado dentro de qual arena futurista, coberta de telas de LED? | Sphere | local de evento específico |
| 949 | Fácil -> Médio | Nos primeiros eventos do UFC, Royce Gracie lutava vestindo o quê? | Quimono | detalhe dos primeiros eventos do UFC |
| 950 | Médio -> Difícil | Em 2009, no UFC 101, Anderson Silva derrubou três vezes e nocauteou no primeiro round qual ex-campeão dos meio-pesados? | Forrest Griffin | adversário de luta específica antiga |
| 951 | Médio -> Difícil | Em 2012, no UFC 153, no Rio, Anderson Silva venceu qual americano com uma joelhada no corpo, depois de provocá-lo encostado na grade? | Stephan Bonnar | adversário de luta específica |
| 957 | Médio -> Difícil | Em 2017, qual campeão britânico perdeu o cinturão dos médios para um canadense que voltava depois de quatro anos parado? | Michael Bisping | campeão estrangeiro de categoria |
| 958 | Médio -> Difícil | No UFC 100, em 2009, qual americano nocauteou um rival britânico com um direito, num dos nocautes mais famosos do UFC? | Dan Henderson | nocaute específico de 2009 |
| 963 | Médio -> Difícil | Em março de 2023, no UFC 285, qual mexicana conquistou o cinturão peso-mosca feminino numa grande zebra? | Alexa Grasso | campeã estrangeira de categoria |
| 986 | Fácil -> Médio | Qual filme de 2013, dirigido por Ron Howard, é sobre a Fórmula 1 dos anos 1970? | Rush | título de filme pouco popular |
| 988 | Fácil -> Médio | Em 2010, Michael Schumacher voltou à Fórmula 1 correndo por qual equipe? | Mercedes | equipe de retorno exige acompanhar F1 |
| 990 | Fácil -> Médio | Qual é o número que Lewis Hamilton usa no carro? | 44 | número de piloto exige acompanhar F1 |
| 991 | Fácil -> Médio | Como são chamados os torcedores fanáticos da Ferrari? | Tifosi | termo de torcida exige acompanhar |
| 992 | Fácil -> Médio | Qual série documental da Netflix, lançada em 2019, popularizou a Fórmula 1 entre novos fãs? | Drive to Survive | série documental exige acompanhar F1 |
| 995 | Fácil -> Médio | Em 2021, a Fórmula 1 deixou a Globo e passou a ser transmitida na TV aberta brasileira por qual emissora? | Band | emissora de transmissão exige acompanhar |
| 998 | Fácil -> Médio | Desde 2018, os carros da Fórmula 1 têm qual estrutura de proteção em volta da cabeça do piloto? | Halo | nome técnico exige acompanhar F1 |
| 999 | Fácil -> Médio | Max Verstappen namora desde 2020 Kelly, filha de qual ex-piloto brasileiro? | Nelson Piquet | vida pessoal de piloto estrangeiro |
| 1000 | Médio -> Difícil | Em 2013, na Malásia, Sebastian Vettel desobedeceu à ordem "Multi 21" e ultrapassou qual companheiro? | Mark Webber | episódio específico de F1 de 2013 |
| 1008 | Médio -> Difícil | Em 2001, no Brasil, qual piloto da Williams ultrapassou Michael Schumacher e liderava a corrida quando foi atingido por um retardatário? | Juan Pablo Montoya | lance específico de corrida de 2001 |
| 1009 | Médio -> Difícil | Em 2019, no GP do Brasil, qual francês terminou em 2º e conseguiu seu primeiro pódio na Fórmula 1? | Pierre Gasly | pódio específico de piloto secundário |
| 1011 | Médio -> Difícil | Em 1989, no Rio, Nigel Mansell venceu logo na estreia por qual equipe? | Ferrari | vitória específica de corrida antiga |
| 1038 | Fácil -> Médio | Qual grupo empresarial, dono de clubes em vários países, comprou a SAF do Bahia em 2023? | City Football Group | exige acompanhar mercado de SAFs |
| 1041 | Fácil -> Médio | Qual meia fez três gols na volta da final da Libertadores de 2008, no Maracanã, mas não evitou a derrota nos pênaltis para a LDU? | Thiago Neves | exige ter visto final de 2008 |
| 1044 | Médio -> Difícil | Qual atacante foi o artilheiro da Libertadores de 1995, com 12 gols? | Jardel | artilharia antiga com número de gols |
| 1045 | Fácil -> Médio | Qual seleção africana o Brasil venceu por 3 a 0 nas oitavas da Copa de 2006? | Gana | adversário específico de Copa |
| 1048 | Médio -> Difícil | Em qual cidade foi disputada a final da Champions de 2016, vencida pelo Real Madrid nos pênaltis? | Milão | cidade estrangeira de final específica |
| 1049 | Fácil -> Difícil | Qual clube italiano o Santos venceu no Mundial de 1963, num jogo-desempate no Maracanã? | Milan | adversário de Mundial antes de 1970 |
| 1052 | Fácil -> Médio | Qual seleção, anfitriã, ganhou a Copa América de 2001? | Colômbia | campeão específico de Copa América |
| 1053 | Fácil -> Médio | Qual atacante bateu o recorde de marcar em 11 jogos seguidos da Premier League, em 2015, pelo Leicester? | Jamie Vardy | recorde de Premier exige acompanhar |
| 1056 | Fácil -> Médio | Qual atacante brasileiro formou dupla com Maradona no Napoli campeão italiano de 1990? | Careca | exige conhecer futebol dos anos 1990 |
| 1058 | Médio -> Difícil | Qual seleção africana venceu o Brasil nos pênaltis na final do Mundial Sub-20 de 2009, no Egito? | Gana | final de base, categoria de nicho |
| 1060 | Fácil -> Médio | Qual jogador tem mais partidas pela história do Vasco? | Roberto Dinamite | recorde de clube exige acompanhar |
| 1063 | Médio -> Difícil | Qual clube ficou com o vice do Brasileirão de 1972, depois de empatar sem gols com o Palmeiras na final? | Botafogo | vice de Brasileirão de 1972 |
| 1065 | Médio -> Difícil | Quem marcou para o time da casa na final da Champions de 2012, em Munique, decidida nos pênaltis? | Thomas Müller | autor de gol de jogo específico |
| 1067 | Fácil -> Médio | Qual clube chileno ganhou a Libertadores de 1991, até hoje o único título do país na competição? | Colo-Colo | campeão estrangeiro de Libertadores antiga |
| 1075 | Médio -> Difícil | Qual jogador colombiano chutou para fora o último pênalti da final da Libertadores de 1999, dando o título ao Palmeiras? | Zapata | jogador secundário em lance específico |
| 1081 | Fácil -> Médio | Qual goleiro mexicano brilhou no empate sem gols com o Brasil na Copa de 2014? | Guillermo Ochoa | exige ter visto jogo de 2014 |
| 1083 | Médio -> Difícil | Quem foi o artilheiro da Copa América de 1989, disputada no Brasil? | Bebeto | artilharia de torneio de 1989 |
| 1087 | Médio -> Difícil | Qual atacante foi o artilheiro do Brasileirão de 1986, com 25 gols pelo campeão? | Careca | artilharia antiga com número de gols |
| 1090 | Médio -> Difícil | Qual clube carioca perdeu a final da Copa do Brasil de 1999? | Botafogo | vice específico de Copa do Brasil antiga |
| 1091 | Fácil -> Médio | Qual lateral-esquerdo brasileiro ganhou as Champions de 1998, 2000 e 2002 pelo Real Madrid? | Roberto Carlos | títulos específicos de Champions |
| 1095 | Fácil -> Médio | Qual centroavante, ídolo do Palmeiras nos anos 1990, também foi campeão brasileiro pelo Vasco em 1997? | Evair | exige conhecer elencos dos anos 1990 |
| 1098 | Médio -> Difícil | Qual zagueiro grego fez o terceiro gol da vitória por 3 a 0 da Roma sobre o Barcelona, que virou as quartas da Champions 2017/18? | Kostas Manolas | autor de gol, jogador secundário estrangeiro |
| 1099 | Fácil -> Médio | Qual atacante era o parceiro de Pelé nas famosas tabelas do Santos dos anos 1960? | Coutinho | parceiro de Pelé exige conhecer história |
| 1102 | Fácil -> Médio | Qual clube equatoriano venceu o Fortaleza nos pênaltis na final da Sul-Americana de 2023? | LDU | final continental exige acompanhar |
| 1103 | Fácil -> Médio | Qual técnico italiano ganhou a Premier League de 2015/16? | Claudio Ranieri | técnico campeão estrangeiro exige acompanhar |
| 1106 | Fácil -> Médio | Qual seleção venceu o Brasil por 2 a 1 na fase de grupos da Copa de 1998, em Marselha? | Noruega | resultado específico de fase de grupos |
| 1108 | Médio -> Difícil | Qual clube brasileiro foi eliminado na semifinal da Libertadores de 2007? | Santos | semifinalista específico de Libertadores antiga |
| 1110 | Fácil -> Médio | Qual clube revelou o meia Rivaldo, antes de ele passar pelo Mogi Mirim? | Santa Cruz | clube formador exige acompanhar |
| 1112 | Médio -> Difícil | Qual seleção o Brasil goleou por 4 a 0 nas oitavas da Copa de 1986? | Polônia | adversário e placar de Copa antiga |
| 1113 | Médio -> Difícil | Qual seleção eliminou o Brasil nos pênaltis nas quartas da Copa do Mundo feminina de 2011, depois de um empate no último minuto da prorrogação? | Estados Unidos | episódio específico de Copa feminina |
| 1117 | Fácil -> Médio | Qual seleção o Brasil venceu por 2 a 0, com gols de Coutinho e Neymar nos acréscimos, na Copa de 2018? | Costa Rica | jogo específico de fase de grupos |
| 1119 | Médio -> Difícil | Qual seleção eliminou o Brasil nas oitavas da Copa do Mundo feminina de 2015? | Austrália | eliminação específica de Copa feminina |
| 1125 | Fácil -> Médio | Qual clube revelou o meia Willian, que depois brilhou no Shakhtar e no Chelsea? | Corinthians | clube formador exige acompanhar |
| 1126 | Médio -> Difícil | Quem fez o gol do Atlético de Madrid na final da Champions de 2016, empatando o jogo? | Yannick Carrasco | autor de gol de jogo específico |
| 1127 | Médio -> Difícil | Qual clube perdeu a primeira final da Copa do Brasil, em 1989? | Sport | vice de final antiga de 1989 |
| 1128 | Médio -> Difícil | Qual clube chileno perdeu a final da Libertadores de 1981? | Cobreloa | vice estrangeiro de Libertadores antiga |
| 1129 | Fácil -> Difícil | Qual clube perdeu a final do Brasileirão de 1976 para o Internacional, no Beira-Rio? | Corinthians | final de Brasileirão de 1976 |
| 1131 | Médio -> Difícil | Qual técnico do Flamengo dos anos 1970 ficou famoso por popularizar o termo "overlapping"? | Cláudio Coutinho | técnico dos anos 1970, detalhe histórico |
| 1132 | Fácil -> Médio | Qual goleiro bateu e converteu o pênalti do título na final da Copa do Brasil de 2015? | Fernando Prass | lance de final exige acompanhar |
| 1134 | Médio -> Difícil | Qual clube mexicano o São Paulo eliminou na semifinal da Libertadores de 2006? | Chivas Guadalajara | semifinal específica com clube estrangeiro |
| 1143 | Fácil -> Médio | Qual seleção o Brasil venceu por 2 a 0 nas oitavas da Copa de 2018, em Samara? | México | adversário específico de oitavas |
| 1149 | Médio -> Difícil | Qual clube foi vice-campeão brasileiro de 1979? | Vasco da Gama | vice de Brasileirão de 1979 |
| 1153 | Fácil -> Médio | Qual zagueiro brasileiro foi campeão da Champions de 2010 pela Inter de Milão? | Lúcio | elenco campeão estrangeiro exige acompanhar |
| 1155 | Médio -> Difícil | Qual técnico comandou o Brasil na Copa das Confederações de 2001? | Emerson Leão | técnico de torneio secundário antigo |
| 1158 | Médio -> Difícil | Qual clube uruguaio ganhou a Libertadores de 1988, vencendo o Newell's Old Boys na final? | Nacional | campeão estrangeiro de Libertadores antiga |
| 1160 | Fácil -> Difícil | Qual atacante fez o gol do Botafogo na final do Carioca de 1989, que acabou com um jejum de 21 anos sem títulos? | Maurício | autor de gol de final antiga |
| 1163 | Fácil -> Médio | Qual clube de Buenos Aires, que revelou Maradona, ganhou a Libertadores de 1985? | Argentinos Juniors | campeão estrangeiro, dica de Maradona ajuda |
| 1164 | Fácil -> Médio | Em 2002, qual clube carioca caiu para a Série B junto com o Palmeiras? | Botafogo | rebaixamento específico exige acompanhar |
| 1171 | Fácil -> Médio | Qual zagueiro uruguaio, ídolo do São Paulo, foi titular nos títulos da Libertadores e do Mundial de 2005? | Diego Lugano | zagueiro estrangeiro exige acompanhar |
| 1177 | Fácil -> Médio | Qual seleção o Brasil venceu por 2 a 1 na abertura da Copa de 1998, em Saint-Denis? | Escócia | adversário específico de estreia |
| 1181 | Fácil -> Médio | Qual clube inglês eliminou o Palmeiras nas quartas do Mundial de Clubes de 2025? | Chelsea | eliminação específica exige acompanhar |
| 1185 | Fácil -> Médio | Qual clube revelou o meia Lucas Paquetá, antes da venda ao Milan? | Flamengo | clube formador exige acompanhar |
| 1188 | Fácil -> Médio | Por qual clube francês Ronaldinho jogou antes de ir para o Barcelona, em 2003? | PSG | trajetória de clube exige acompanhar |
| 1191 | Médio -> Difícil | Qual atacante do Expresso da Vitória era apelidado de "Queixada"? | Ademir de Menezes | apelido de jogador antes de 1970 |
| 1192 | Fácil -> Médio | Qual clube perdeu nos pênaltis, em casa, a final do Paulistão de 2018 para o Corinthians? | Palmeiras | final estadual exige acompanhar |
| 1195 | Médio -> Difícil | Qual inglês marcou o gol de empate nos acréscimos da final da Champions de 1999, em Barcelona? | Teddy Sheringham | autor de gol de final antiga |
| 1200 | Fácil -> Difícil | Qual jogador fez o sexto gol do Barcelona na virada por 6 a 1 sobre o PSG, nas oitavas da Champions 2016/17? | Sergi Roberto | autor de gol de jogo específico |
| 1203 | Fácil -> Médio | Qual seleção empatou por 1 a 1 com o Brasil na estreia da Copa de 2018? | Suíça | exemplo da régua: estreia de 2018 |
| 1206 | Fácil -> Médio | Qual clube revelou o atacante Alexandre Pato, campeão mundial de 2006 aos 17 anos? | Internacional | clube formador exige acompanhar |
| 1209 | Fácil -> Médio | Qual seleção ganhou a Copa América de 2015 e a de 2016, as duas sobre a Argentina? | Chile | campeão de Copa América exige acompanhar |
| 1210 | Fácil -> Médio | Quem fez o gol do título da final da Champions de 2021, disputada no Porto? | Kai Havertz | autor de gol de final exige acompanhar |
| 1213 | Fácil -> Difícil | Qual seleção o Brasil venceu por 2 a 0 na estreia da Copa de 1994? | Rússia | adversário de estreia de Copa antiga |
| 1215 | Médio -> Difícil | Qual seleção eliminou o Brasil na semifinal olímpica feminina do Rio 2016 e depois perdeu a final para a Alemanha? | Suécia | semifinal específica de futebol feminino |
| 1221 | Fácil -> Médio | Qual clube revelou o atacante Hulk, antes de ele ir para o Japão? | Vitória | clube formador exige acompanhar |
| 1222 | Médio -> Difícil | Quem fez o gol do Liverpool na final da Champions de 2018, perdida por 3 a 1? | Sadio Mané | autor de gol de jogo específico |
| 1224 | Fácil -> Médio | Qual clube argentino ganhou a Libertadores de 2014, vencendo o Nacional, do Paraguai, na final? | San Lorenzo | campeão estrangeiro de Libertadores |
| 1225 | Fácil -> Médio | Qual clube perdeu para o Flamengo a decisão do Módulo Verde, a Copa União de 1987? | Internacional | vice de final de 1987 |
| 1228 | Fácil -> Médio | Qual clube baiano perdeu a final da Copa do Brasil de 2010? | Vitória | vice de Copa do Brasil exige acompanhar |
| 1232 | Fácil -> Médio | Qual zagueiro uruguaio foi titular do Grêmio campeão da Libertadores e do Mundial de 1983? | Hugo De León | zagueiro estrangeiro dos anos 1980 |
| 1233 | Difícil -> Médio | Qual zagueiro chegou ao Flamengo em julho de 2019, como o terceiro espanhol da história do clube, e foi campeão da Libertadores daquele ano? | Pablo Marí | única alternativa espanhola entrega a resposta |
| 1238 | Fácil -> Médio | Qual seleção o Brasil goleou por 4 a 1 nas oitavas da Copa de 1998? | Chile | adversário específico de oitavas |
| 1244 | Médio -> Difícil | Qual clube foi vice-campeão brasileiro de 1978? | Palmeiras | vice de Brasileirão de 1978 |
| 1245 | Fácil -> Médio | Qual técnico espanhol ganhou seis Premier Leagues com o Manchester City? | Pep Guardiola | técnico estrangeiro exige acompanhar |
| 1248 | Fácil -> Médio | Qual atacante uruguaio, ídolo do Atlético de Madrid e do Manchester United, jogou pelo Internacional em 2012 e 2013? | Diego Forlán | passagem por clube exige acompanhar |
| 1252 | Fácil -> Médio | Qual clube é o maior campeão brasileiro, com 12 títulos até 2025? | Palmeiras | contagem de títulos exige acompanhar |
| 1256 | Médio -> Difícil | Qual meia fez o gol da vitória por 1 a 0 do Fluminense no primeiro jogo da final do Brasileirão de 1984? | Romerito | autor de gol de final antiga |
| 1259 | Fácil -> Médio | Qual clube argentino ganhou a Libertadores de 1996, vencendo o América de Cali na final? | River Plate | campeão estrangeiro de Libertadores |
| 1260 | Médio -> Difícil | Qual clube foi vice-campeão brasileiro de 1988? | Internacional | vice de Brasileirão de 1988 |
| 1263 | Fácil -> Médio | Qual seleção o Brasil venceu por 1 a 0 nas oitavas da Copa de 1994, no dia 4 de julho? | Estados Unidos | adversário específico de oitavas |
| 1264 | Difícil -> Médio | Qual goleiro francês ganhou a Luva de Ouro da Copa de 1998? | Fabien Barthez | alternativas entregam o goleiro mais famoso |
| 1265 | Médio -> Difícil | Qual clube alemão foi campeão da Bundesliga de 1997/98 logo depois de subir da segunda divisão? | Kaiserslautern | campeão alemão antigo, feito específico |
| 1266 | Fácil -> Médio | Qual clube revelou o volante Arthur, que depois foi vendido ao Barcelona? | Grêmio | clube formador exige acompanhar |
| 1269 | Médio -> Difícil | Qual seleção eliminou o Brasil nas oitavas da Copa do Mundo feminina de 2019, na prorrogação? | França | eliminação específica de Copa feminina |
| 1272 | Médio -> Difícil | Qual jogador tem mais partidas pela história do Internacional? | Valdomiro | recorde numérico de clube, ídolo antigo |
| 1273 | Fácil -> Médio | Qual seleção asiática o Brasil venceu por 2 a 1 na estreia da Copa de 2010? | Coreia do Norte | adversário específico de estreia |
| 1276 | Médio -> Difícil | Qual argelino fez um gol de calcanhar na final da Copa dos Campeões de 1987, pelo Porto? | Rabah Madjer | autor de gol de final antiga |
| 1281 | Fácil -> Médio | Qual clube revelou o atacante Antony, vendido ao Ajax em 2020? | São Paulo | clube formador exige acompanhar |
| 1283 | Médio -> Difícil | Qual clube gaúcho perdeu a final da Copa do Brasil de 1991? | Grêmio | vice de Copa do Brasil antiga |
| 1284 | Médio -> Difícil | Qual clube colombiano perdeu a final da Libertadores de 1995? | Atlético Nacional | vice estrangeiro de Libertadores antiga |
| 1287 | Médio -> Difícil | Qual meia, apelidado de "Príncipe", formou com Tostão a grande dupla do Cruzeiro dos anos 1960? | Dirceu Lopes | jogador dos anos 1960 |
| 1292 | Fácil -> Médio | Como ficou conhecido o time do Vasco campeão carioca de 1923, formado por operários e trabalhadores humildes? | Camisas Negras | história de clube exige acompanhar |
| 1295 | Fácil -> Médio | Quem fez o gol do Corinthians no empate por 1 a 1 na Bombonera, no jogo de ida da final da Libertadores de 2012? | Romarinho | autor de gol exige acompanhar |
| 1298 | Médio -> Difícil | Qual ponta-esquerda fez o gol histórico da vitória por 3 a 2 do Cruzeiro no terceiro jogo da final da Libertadores de 1976? | Joãozinho | autor de gol de final antiga |
| 1299 | Fácil -> Médio | Na Copa de 1982, qual craque argentino foi expulso na derrota por 3 a 1 para o Brasil? | Maradona | episódio específico de Copa de 1982 |
| 1515 | Médio -> Difícil | Qual time foi vice-campeão da NBA em 1994? | New York Knicks | vice da NBA de 1994, antigo |
| 1537 | Médio -> Difícil | Qual pivô do Detroit Pistons campeão de 2004, sem ter sido escolhido no draft, ficou famoso pelo cabelo black power e pelos tocos? | Ben Wallace | jogador secundário de NBA |
| 1540 | Médio -> Difícil | Em 1987/88, além do MVP da temporada, Michael Jordan ganhou qual outro prêmio, raro para um cestinha? | Defensor do Ano | prêmio específico de temporada antiga |
| 1588 | Médio -> Difícil | No jogo 1 da final de 2001, Allen Iverson passou por cima de qual jogador dos Lakers, caído na quadra? | Tyronn Lue | jogador secundário em lance específico |
| 1591 | Fácil -> Médio | Qual filha de Kobe Bryant, de 13 anos, também morreu na tragédia de janeiro de 2020 que matou o pai? | Gianna | nome da filha exige acompanhar notícia |
| 1600 | Médio -> Difícil | Contra qual time o Miami Heat venceu a final de 2006? | Dallas Mavericks | final de NBA de 2006, adversário |
| 1620 | Médio -> Difícil | Qual astro foi o primeiro a ter média de triplo-duplo numa temporada inteira, em 1961/62? | Oscar Robertson | história da NBA antes de 1970 |
| 1655 | Médio -> Difícil | Em 2014, numa grande zebra, qual americano conquistou o cinturão dos galos do UFC? | T. J. Dillashaw | campeão secundário de 2014 |
| 1663 | Médio -> Difícil | Em 2020, José Aldo perdeu a disputa do cinturão vago dos galos para qual russo? | Petr Yan | adversário estrangeiro de luta específica |
| 1676 | Médio -> Difícil | Em qual round Conor McGregor foi finalizado na primeira derrota dele no UFC, em março de 2016? | 2º | round específico de luta |
| 1686 | Médio -> Difícil | Em novembro de 2008, no UFC 91, qual lenda americana perdeu o cinturão dos pesados por nocaute técnico? | Randy Couture | perdedor de evento antigo específico |
| 1687 | Médio -> Difícil | Em 2015, qual americano perdeu o cinturão dos leves para um brasileiro, por decisão unânime? | Anthony Pettis | perdedor estrangeiro de luta específica |
| 1692 | Médio -> Difícil | Em qual round Ronda Rousey foi nocauteada ao perder o cinturão, em 2015? | 2º | round específico de luta |
| 1704 | Médio -> Difícil | Em qual round Anderson Silva nocauteou Vitor Belfort, em 2011? | 1º | round específico de luta |
| 1706 | Médio -> Difícil | Em qual round Alex Pereira venceu a luta que lhe deu o cinturão dos meio-pesados, em novembro de 2023? | 2º | round específico de luta |
| 1717 | Fácil -> Médio | No MMA, qual finalização prende o pescoço do rival pela frente, com o braço, e é muito usada quando ele tenta uma queda? | Guilhotina | nome técnico de finalização exige acompanhar |
| 1718 | Médio -> Difícil | Em qual round terminou a luta principal do UFC 229, em outubro de 2018? | 4º | round específico de luta |
| 1727 | Médio -> Difícil | Em qual round Anderson Silva foi nocauteado ao perder o cinturão dos médios, em 2013? | 2º | round específico de luta |
| 1730 | Médio -> Difícil | Em 2017, na luta de boxe contra Floyd Mayweather, o astro irlandês do UFC perdeu por nocaute técnico em qual round? | 10º | round específico de luta |
| 1735 | Médio -> Difícil | O Poatan nasceu em qual cidade paulista? | São Bernardo do Campo | cidade natal de lutador |
| 1772 | Fácil -> Médio | Em 2024, nos 30 anos da morte de Senna, Lewis Hamilton deu voltas em Interlagos com qual carro? | A McLaren campeã de 1990 | episódio recente exige acompanhar F1 |
| 1810 | Fácil -> Médio | Em 2023, qual brasileiro foi à Justiça pedindo o título de 2008, por causa da batida armada em Singapura? | Felipe Massa | notícia de F1 exige acompanhar |
| 1831 | Fácil -> Médio | Qual atacante ficou conhecido como "Capetinha" e brilhou no Palmeiras e no Corinthians? | Edílson | apelido conhecido de quem acompanha futebol |
| 1841 | Fácil -> Médio | Qual clube espanhol o atacante Raphinha defende desde 2022? | Barcelona | clube atual de craque |
| 1843 | Fácil -> Difícil | Qual atacante espanhol fez o gol do título da Eurocopa de 2008, contra a Alemanha? | Fernando Torres | autor de gol de final específica |
| 1845 | Fácil -> Médio | Qual atacante argentino, ex-Corinthians, é chamado de "Apache" por causa do bairro onde cresceu? | Carlos Tévez | apelido exige acompanhar futebol |
| 1851 | Médio -> Difícil | Qual zagueiro abriu o placar da vitória por 2 a 1 sobre a Colômbia, nas quartas da Copa de 2014? | Thiago Silva | autor de gol de jogo específico |
| 1854 | Fácil -> Médio | Qual técnico foi demitido da Seleção em março de 2025, depois de uma goleada para a Argentina nas Eliminatórias? | Dorival Júnior | notícia da Seleção exige acompanhar |
| 1858 | Fácil -> Difícil | Qual atacante saiu do banco e fez, na prorrogação, o gol do título da Eurocopa de 2016? | Éder | autor de gol de final específica |
| 1860 | Fácil -> Médio | Qual meia argentino tem o apelido de "Cabezón"? | D'Alessandro | apelido de estrangeiro, alternativas parecidas |
| 1872 | Fácil -> Médio | Qual atacante francês ajeitou a bola com a mão no lance que eliminou a Irlanda na repescagem para a Copa de 2010? | Thierry Henry | lance estrangeiro exige acompanhar futebol |
| 1885 | Fácil -> Médio | Qual clube londrino é chamado de "Blues"? | Chelsea | apelido de clube estrangeiro |
| 1887 | Fácil -> Médio | Qual clube colombiano disputaria a final da Sul-Americana de 2016, que não chegou a ser jogada por causa de uma tragédia aérea? | Atlético Nacional | adversário da Chape exige acompanhar |
| 1888 | Fácil -> Médio | Qual seleção perdeu em casa, na prorrogação, a final da Eurocopa de 2016? | França | vice de Eurocopa exige acompanhar |
| 1890 | Fácil -> Médio | Qual atacante ganhou o apelido de "Coração Valente" por ter voltado a jogar depois de um problema cardíaco? | Washington | apelido de jogador exige acompanhar |
| 1901 | Médio -> Difícil | Qual goleiro do Real Madrid saiu do banco no segundo tempo da final da Champions de 2002? | Iker Casillas | reserva em final específica antiga |
| 1902 | Fácil -> Médio | Qual clube italiano é chamado de "Bianconeri" por causa das cores preta e branca? | Juventus | apelido de clube estrangeiro |
| 1903 | Fácil -> Médio | Qual clube italiano Ronaldo Fenômeno defendia quando sofreu as graves lesões no joelho, entre 1999 e 2000? | Inter de Milão | clube de época exige acompanhar |
| 1905 | Médio -> Difícil | Qual atacante francês fez o gol de ouro do título da França na final da Eurocopa de 2000? | David Trezeguet | autor de gol de final específica |
| 1907 | Fácil -> Médio | Qual atacante italiano ficou conhecido como "Super Mario"? | Mario Balotelli | alternativas todas Mario, exige acompanhar |
| 1919 | Fácil -> Médio | Qual clube de Merseyside é chamado de "Reds"? | Liverpool | alternativas todas de Merseyside |
| 1920 | Fácil -> Médio | Qual seleção a Espanha goleou por 4 a 0 na final da Eurocopa de 2012? | Itália | adversário de final estrangeira |
| 1921 | Fácil -> Médio | Para qual clube Kaká foi vendido pelo Milan, em 2009? | Real Madrid | transferência exige acompanhar futebol |
| 1922 | Fácil -> Médio | Quem fez o gol do título na final da Copa América de 2021, no Maracanã? | Di María | autor de gol de final recente |
| 1923 | Fácil -> Médio | Qual volante, ex-Juventus e ex-Palmeiras, ficou conhecido pelo apelido de "Pitbull"? | Felipe Melo | apelido de jogador exige acompanhar |
| 1933 | Fácil -> Médio | Qual atacante uruguaio é chamado de "El Pistolero"? | Luis Suárez | apelido de jogador estrangeiro |
| 1935 | Fácil -> Médio | Qual brasileiro simulou ter levado uma bolada no rosto num jogo da fase de grupos da Copa de 2002? | Rivaldo | lance específico de Copa |
| 1936 | Fácil -> Difícil | Qual atacante holandês fez o famoso gol de voleio na final da Eurocopa de 1988? | Marco van Basten | gol de final estrangeira de 1988 |
| 1937 | Fácil -> Médio | Qual atacante, ídolo do Corinthians, é chamado de "Casão"? | Walter Casagrande | apelido de ídolo exige acompanhar |
| 1938 | Médio -> Difícil | Qual atacante fez de cabeça o gol do título da Eurocopa de 2004, na final disputada em Lisboa? | Angelos Charisteas | autor de gol de final estrangeira |
| 1939 | Fácil -> Médio | Qual atacante espanhol era chamado de "El Niño"? | Fernando Torres | apelido de jogador estrangeiro |
| 1940 | Fácil -> Médio | Qual astro venceu o torneio de enterradas de 1988 saltando da linha do lance livre? | Michael Jordan | torneio específico da NBA |
| 1941 | Fácil -> Médio | Qual astro marcou 63 pontos contra o Boston Celtics num jogo de playoff de 1986? | Michael Jordan | jogo específico, alternativa óbvia |
| 1942 | Fácil -> Médio | Qual astro da NBA passou parte da infância na Itália, onde o pai jogava basquete? | Kobe Bryant | biografia de astro exige acompanhar |
| 1982 | Fácil -> Médio | Qual foi o primeiro piloto brasileiro campeão mundial de Fórmula 1? | Emerson Fittipaldi | leigo tenderia a Senna |
| 1984 | Fácil -> Médio | Qual volante brasileira disputou sete Copas do Mundo de futebol feminino? | Formiga | futebol feminino exige acompanhar |
| 1986 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2024, encerrando um jejum de quase 30 anos sem o título? | Botafogo | campeão recente de Brasileirão |
| 1987 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2025? | Flamengo | campeão recente de Brasileirão |
| 1988 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2023? | Palmeiras | campeão recente de Brasileirão |
| 1989 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2021? | Atlético Mineiro | campeão recente de Brasileirão |
| 1990 | Fácil -> Médio | Quem foi o artilheiro do Brasileirão de 2019, com 25 gols? | Gabigol | artilheiro de Brasileirão |
| 1991 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2016, encerrando um jejum de 22 anos? | Palmeiras | campeão de Brasileirão exige acompanhar |
| 1992 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2009, com Adriano no ataque? | Flamengo | campeão de Brasileirão exige acompanhar |
| 1993 | Fácil -> Médio | Qual clube ganhou a Copa do Brasil de 2023, seu primeiro título na competição? | São Paulo | campeão de Copa do Brasil |
| 1996 | Fácil -> Médio | Qual brasileiro perdeu o cinturão para Conor McGregor em apenas 13 segundos? | José Aldo | luta de UFC exige acompanhar |
| 1997 | Fácil -> Médio | Qual brasileira nocauteou Ronda Rousey em menos de um minuto, defendendo seu cinturão? | Amanda Nunes | luta de UFC exige acompanhar |
| 1999 | Fácil -> Médio | Qual estádio é a casa do Real Madrid? | Santiago Bernabéu | estádio famoso estrangeiro |
| 2000 | Fácil -> Médio | Qual goleiro brasileiro foi injustamente culpado pela derrota para o Uruguai na final da Copa no Maracanã? | Barbosa | goleiro de 1950 exige conhecer história |
| 2001 | Fácil -> Médio | Qual grande clube do Nordeste brasileiro disputa o clássico 'Clássico-Rei' e tem como rival o Fortaleza? | Ceará | rivalidade regional exige acompanhar |
| 2002 | Fácil -> Médio | Qual clube pernambucano manda seus jogos na Ilha do Retiro e é um dos maiores do Nordeste? | Sport Recife | estádio regional exige acompanhar |
| 2005 | Fácil -> Médio | No MMA, o que significa a sigla 'TKO'? | Nocaute técnico | sigla de MMA exige acompanhar luta |
| 2006 | Fácil -> Médio | Qual jogador holandês foi o principal nome do 'Carrossel Holandês' e do futebol total? | Johan Cruyff | ídolo estrangeiro histórico |
| 2007 | Fácil -> Médio | Qual jogador uruguaio marcou o gol do título contra o Brasil no Maracanazo? | Alcides Ghiggia | autor do gol do Maracanazo |
| 2008 | Fácil -> Médio | Qual seleção ganhou a primeira Copa do Mundo de futebol? | Uruguai | campeão de 1930 não é óbvio |
| 2009 | Fácil -> Médio | Qual clube nordestino é conhecido como 'Tricolor de Aço'? | Fortaleza | apelido de clube regional |
| 2010 | Fácil -> Médio | Qual clube brasileiro é chamado de 'Furacão'? | Athletico Paranaense | apelido de clube exige acompanhar |
| 2011 | Fácil -> Médio | Qual clube brasileiro foi o primeiro a vencer a Copa Libertadores da América? | Santos | fato histórico da Libertadores |
| 2012 | Fácil -> Médio | O Sport Club do Recife, clube pernambucano tradicional do Nordeste, tem como apelido qual animal? | Leão | mascote regional exige acompanhar |
| 2013 | Fácil -> Médio | O Santa Cruz, clube pernambucano famoso por sua torcida apaixonada, tem como apelido qual animal? | Cobra Coral | mascote regional exige acompanhar |
| 2015 | Fácil -> Médio | Qual clube inglês manda seus jogos no estádio Anfield? | Liverpool | estádio estrangeiro famoso |
| 2016 | Fácil -> Médio | O Chelsea manda seus jogos em qual estádio de Londres? | Stamford Bridge | estádio estrangeiro |
| 2017 | Fácil -> Médio | A Juventus é baseada em qual cidade italiana? | Turim | cidade de clube estrangeiro |
| 2018 | Fácil -> Médio | Qual seleção africana foi a primeira a chegar a uma semifinal de Copa do Mundo? | Marrocos | fato de Copa recente |
| 2019 | Fácil -> Médio | Qual jogador alemão é conhecido como 'Der Kaiser' (O Imperador)? | Franz Beckenbauer | apelido de ídolo estrangeiro |
| 2020 | Fácil -> Médio | Qual meia brasileiro foi ídolo da Roma, na Itália, e ganhou o apelido de "Rei de Roma"? | Falcão | ídolo brasileiro no exterior |
| 2021 | Fácil -> Médio | Qual foi o primeiro jogador africano a vencer a Bola de Ouro da France Football? | George Weah | Bola de Ouro histórica |
| 2023 | Fácil -> Médio | Quantos títulos mundiais Nelson Piquet conquistou na Fórmula 1? | 3 | número de títulos exige acompanhar |
| 2026 | Fácil -> Médio | Qual técnica de nocaute no MMA consiste em socos desferidos no adversário caído, com o atacante montado sobre ele? | Ground and pound | termo técnico de MMA |
| 2030 | Fácil -> Médio | Em qual país o Brasil conquistou sua primeira Copa do Mundo, com Pelé aos 17 anos? | Suécia | sede de Copa de 1958 |
| 2032 | Fácil -> Médio | Contra qual seleção o Brasil venceu a final do tricampeonato, por 4 a 1? | Itália | adversário da final de 1970 |
| 2033 | Fácil -> Médio | Qual é o apelido do troféu da Liga dos Campeões, por causa de suas grandes alças? | Orelhuda | apelido de troféu |
| 2034 | Fácil -> Médio | Como é chamado o clássico entre São Paulo e Corinthians? | Majestoso | nome de clássico |
| 2036 | Fácil -> Médio | Qual clube baiano é chamado de "Esquadrão de Aço"? | Bahia | apelido de clube regional |
| 2037 | Fácil -> Médio | Qual clube paraense é conhecido como "Papão da Curuzu"? | Paysandu | apelido de clube regional |
| 2038 | Fácil -> Médio | Qual clube gaúcho venceu o Barcelona de Ronaldinho na final do Mundial de Clubes? | Internacional | título mundial de clube |
| 2039 | Fácil -> Médio | Qual meia foi o craque do São Paulo campeão mundial contra o Barcelona de Cruyff, irmão de Sócrates? | Raí | craque de título de clube |
| 2040 | Fácil -> Médio | Qual seleção é conhecida como "Diabos Vermelhos"? | Bélgica | apelido de seleção estrangeira |
| 2041 | Fácil -> Médio | Qual seleção asiática chegou à semifinal da Copa do Mundo jogando em casa? | Coreia do Sul | fato de Copa exige acompanhar |
| 2042 | Fácil -> Médio | Qual meia do Corinthians era chamado de "Pé de Anjo" pelas cobranças de falta? | Marcelinho Carioca | apelido de ídolo de clube |
| 2043 | Fácil -> Médio | Qual capitão da seleção ergueu a taça do tricampeonato e marcou um golaço na final? | Carlos Alberto Torres | capitão de 1970 |
| 2044 | Fácil -> Médio | Qual jogador marcou dois gols pelo Grêmio na final do Mundial contra o Hamburgo? | Renato Gaúcho | autor de gols do Mundial 1983 |
| 2045 | Fácil -> Médio | Qual estádio do Manchester United é chamado de "Teatro dos Sonhos"? | Old Trafford | estádio estrangeiro |
| 2046 | Fácil -> Médio | Qual clube argentino tem o apelido de "Xeneize"? | Boca Juniors | apelido de clube estrangeiro |
| 2047 | Fácil -> Médio | Qual clube alemão tem uma arquibancada famosa chamada "Muralha Amarela"? | Borussia Dortmund | torcida de clube estrangeiro |
| 2048 | Fácil -> Médio | Qual clube italiano é apelidado de "Velha Senhora"? | Juventus | apelido de clube estrangeiro |
| 2049 | Fácil -> Médio | Qual clube português revelou Cristiano Ronaldo? | Sporting | clube formador de craque |
| 2050 | Fácil -> Médio | Qual meia croata ganhou a Bola de Ouro após levar sua seleção à final da Copa? | Luka Modrić | Bola de Ouro recente |
| 2052 | Fácil -> Médio | Qual piloto alemão foi tetracampeão de Fórmula 1 pela Red Bull? | Sebastian Vettel | campeão de F1 recente |
| 2054 | Fácil -> Médio | Em qual equipe de Fórmula 1 Ayrton Senna corria quando sofreu o acidente fatal, em 1994? | Williams | equipe exige acompanhar F1 |
| 2055 | Fácil -> Médio | Quanto tempo dura cada round em uma luta do UFC? | 5 minutos | regra de UFC |
| 2056 | Fácil -> Médio | Qual esporte Michael Jordan praticou profissionalmente quando deixou o basquete pela primeira vez? | Beisebol | curiosidade de ídolo estrangeiro |
| 2057 | Fácil -> Médio | Qual seleção ganhou seu primeiro título mundial em casa, com Kempes como artilheiro? | Argentina | campeão de Copa de 1978 |
| 2058 | Fácil -> Médio | Qual meia espanhol marcou o gol do título mundial da Espanha, na prorrogação da final? | Andrés Iniesta | autor de gol de final |
| 2059 | Fácil -> Médio | Qual jogador alemão marcou o gol do título da Copa disputada no Brasil, na prorrogação? | Mario Götze | autor de gol de final |
| 2060 | Fácil -> Médio | Qual goleiro argentino foi decisivo nos pênaltis na conquista da Copa do Catar? | Emiliano Martínez | goleiro de Copa recente |
| 2061 | Fácil -> Médio | Em qual zagueiro italiano Zidane deu uma cabeçada na final da Copa disputada na Alemanha? | Marco Materazzi | episódio de Copa exige acompanhar |
| 2063 | Fácil -> Médio | Qual clube tem como hino a canção "You'll Never Walk Alone"? | Liverpool | hino de clube estrangeiro |
| 2064 | Fácil -> Médio | Qual clube inglês foi campeão nacional invicto e ganhou o apelido de "Invincibles"? | Arsenal | feito de clube estrangeiro |
| 2066 | Fácil -> Médio | Qual clube de Campinas é conhecido como "Bugre"? | Guarani | apelido de clube regional |
| 2067 | Fácil -> Médio | Qual clube mineiro tem o coelho como mascote? | América Mineiro | mascote de clube regional |
| 2068 | Fácil -> Médio | Qual clube pernambucano é conhecido como "Timbu"? | Náutico | apelido de clube regional |
| 2069 | Fácil -> Médio | Qual clube catarinense é chamado de "Leão da Ilha"? | Avaí | apelido de clube regional |
| 2070 | Fácil -> Médio | Qual clube catarinense tem o tigre como mascote? | Criciúma | mascote de clube regional |
| 2072 | Fácil -> Médio | Qual zagueiro italiano ergueu a taça da Copa disputada na Alemanha e ganhou a Bola de Ouro? | Fabio Cannavaro | capitão campeão estrangeiro |
| 2073 | Fácil -> Médio | Qual goleiro colombiano ficou famoso pela defesa "escorpião", com os pés por cima da cabeça? | René Higuita | lance de jogador estrangeiro |
| 2074 | Fácil -> Médio | Qual atacante marfinense virou ídolo do Chelsea? | Didier Drogba | ídolo estrangeiro de clube |
| 2076 | Fácil -> Médio | Qual pivô brasileiro, de cabelo cacheado, foi ídolo do Cleveland Cavaliers? | Anderson Varejão | jogador de NBA |
| 2079 | Fácil -> Médio | Qual clube ganhou o Brasileirão três vezes seguidas, em 2006, 2007 e 2008? | São Paulo | campeão brasileiro específico |
| 2080 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2020, num campeonato que só terminou em 2021? | Flamengo | campeão brasileiro específico |
| 2081 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2017? | Corinthians | campeão brasileiro específico |
| 2082 | Fácil -> Médio | Qual clube foi o primeiro campeão do Brasileirão por pontos corridos, em 2003? | Cruzeiro | campeão brasileiro específico |
| 2083 | Fácil -> Médio | Qual clube venceu a Copa do Brasil de 2024, derrotando o Atlético Mineiro na final? | Flamengo | campeão de Copa do Brasil |
| 2084 | Fácil -> Médio | Qual clube conquistou a Copa do Brasil de 2025, vencendo o Vasco na final? | Corinthians | campeão de Copa do Brasil |
| 2085 | Fácil -> Médio | Em 2014, qual clube venceu o rival Cruzeiro na final da Copa do Brasil? | Atlético Mineiro | final de Copa do Brasil |
| 2086 | Fácil -> Médio | Qual clube ganhou a Copa do Brasil de 2009 com Ronaldo Fenômeno no time? | Corinthians | campeão de Copa do Brasil |
| 2087 | Fácil -> Médio | Qual clube ganhou a Libertadores de 2012, vencendo o Boca Juniors na final? | Corinthians | campeão de Libertadores |
| 2088 | Fácil -> Médio | Qual clube conquistou a Libertadores em 1992 e 1993, com o técnico Telê Santana? | São Paulo | campeão de Libertadores |
| 2089 | Fácil -> Médio | Qual clube brasileiro ganhou a Libertadores de 1999? | Palmeiras | campeão de Libertadores |
| 2090 | Fácil -> Médio | Em 2019, o Flamengo perdeu a final do Mundial de Clubes para qual time? | Liverpool | adversário em final de Mundial |
| 2091 | Fácil -> Médio | Qual time venceu o Santos por 4 a 0 na final do Mundial de Clubes de 2011? | Barcelona | adversário em final de Mundial |
| 2093 | Fácil -> Médio | Quem foi o artilheiro do Brasileirão de 1995, ano do título do Botafogo? | Túlio Maravilha | artilheiro de ano específico |
| 2095 | Fácil -> Médio | Qual seleção o Brasil venceu por 3 a 0 na final da Copa América de 2007? | Argentina | final de Copa América |
| 2097 | Fácil -> Médio | Qual seleção o Brasil venceu na final do futebol masculino nos Jogos de Tóquio? | Espanha | final olímpica de 2021 |
| 2099 | Fácil -> Médio | Qual meia brasileiro, ídolo do Milan, ganhou a Bola de Ouro de 2007? | Kaká | Bola de Ouro específica |
| 2100 | Fácil -> Médio | Na Copa do penta, qual brasileiro marcou de falta, por cobertura, contra a Inglaterra? | Ronaldinho Gaúcho | lance específico da Copa de 2002 |
| 2101 | Fácil -> Médio | Na Copa disputada no Brasil, Neymar sofreu uma fratura nas costas no jogo contra qual seleção? | Colômbia | adversário em jogo específico |
| 2102 | Fácil -> Médio | Qual goleiro, apelidado de "Gigante", foi herói do Corinthians no título mundial contra o Chelsea? | Cássio | goleiro de título de clube |
| 2103 | Fácil -> Médio | Qual clube revelou o atacante Rodrygo, antes da venda ao Real Madrid? | Santos | clube formador exige acompanhar |
| 2104 | Fácil -> Médio | Qual clube revelou o atacante Gabriel Jesus? | Palmeiras | clube formador exige acompanhar |
| 2105 | Fácil -> Médio | Qual clube revelou o meia Kaká? | São Paulo | clube formador exige acompanhar |
| 2106 | Fácil -> Médio | Qual clube revelou Ronaldinho Gaúcho? | Grêmio | clube formador exige acompanhar |
| 2107 | Fácil -> Médio | Pelé nasceu em qual estado brasileiro? | Minas Gerais | Pelé nasceu em MG, pega muitos |
| 2108 | Fácil -> Médio | Qual seleção eliminou o Brasil nas quartas de final da Copa de 2006, com gol de Thierry Henry? | França | eliminação em Copa específica |
| 2109 | Fácil -> Médio | Qual seleção eliminou o Brasil nas quartas de final da Copa de 2010? | Holanda | eliminação em Copa específica |
| 2111 | Fácil -> Médio | Qual é o mascote do Grêmio? | Mosqueteiro | mascote de clube |
| 2112 | Fácil -> Médio | Qual é o mascote do Fluminense? | Cartola | mascote de clube |
| 2114 | Fácil -> Médio | Como é chamado o clássico entre São Paulo e Palmeiras? | Choque-Rei | nome de clássico |
| 2115 | Fácil -> Médio | Como é chamado o clássico entre Fluminense e Botafogo? | Clássico Vovô | nome de clássico |
| 2116 | Fácil -> Médio | Qual clube argentino perdeu a final da Libertadores de 2023 para o Fluminense? | Boca Juniors | final de Libertadores específica |
| 2120 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2015? | Corinthians | campeão brasileiro específico |
| 2121 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2014? | Cruzeiro | campeão brasileiro específico |
| 2122 | Fácil -> Médio | Qual clube foi campeão brasileiro de 2012? | Fluminense | campeão brasileiro específico |
| 2123 | Fácil -> Médio | Qual clube pernambucano ganhou a Copa do Brasil de 2008, vencendo o Corinthians? | Sport | campeão de Copa do Brasil |
| 2124 | Fácil -> Médio | Qual clube ganhou a Copa do Brasil de 2010? | Santos | campeão de Copa do Brasil |
| 2125 | Fácil -> Médio | Qual clube venceu a Libertadores de 2006, derrotando o São Paulo na final? | Internacional | final de Libertadores específica |
| 2126 | Fácil -> Médio | Qual clube carioca ganhou a Libertadores de 1998? | Vasco da Gama | campeão de Libertadores |
| 2127 | Fácil -> Médio | Qual clube perdeu a final da Libertadores de 2008 para a LDU, nos pênaltis, no Maracanã? | Fluminense | final de Libertadores específica |
| 2128 | Fácil -> Médio | Quem marcou o gol do título do Fluminense na prorrogação da final da Libertadores de 2023? | John Kennedy | autor de gol de final |
| 2129 | Fácil -> Médio | Quem fez o gol do título do Flamengo na final da Libertadores de 2022, contra o Athletico? | Gabigol | autor de gol de final |
| 2131 | Fácil -> Médio | Qual clube perdeu a final do Mundial de Clubes de 2023 para o Manchester City? | Fluminense | final de Mundial específica |
| 2132 | Fácil -> Médio | Qual clube venceu o primeiro Mundial de Clubes da FIFA, em 2000, contra o Vasco? | Corinthians | campeão de Mundial específico |
| 2135 | Fácil -> Médio | Por qual clube Romário se profissionalizou? | Vasco da Gama | clube de estreia de ídolo |
| 2136 | Fácil -> Médio | Por qual clube Ronaldo Fenômeno estreou como profissional? | Cruzeiro | clube de estreia de ídolo |
| 2137 | Fácil -> Médio | Qual clube cearense é chamado de "Leão do Pici"? | Fortaleza | apelido de clube regional |
| 2142 | Fácil -> Médio | Qual era o fiel escudeiro de Michael Jordan nos títulos do Chicago Bulls? | Scottie Pippen | coadjuvante de ídolo da NBA |
| 2144 | Fácil -> Médio | Quais números de camisa Kobe Bryant usou nos Lakers? | 8 e 24 | números de camisa exige acompanhar |
| 2149 | Médio -> Difícil | Qual time foi bicampeão da NBA em 1994 e 1995? | Houston Rockets | campeão antigo da NBA |
| 2151 | Médio -> Difícil | Qual pivô marcou 100 pontos em um único jogo da NBA? | Wilt Chamberlain | recorde numérico antigo da NBA |
| 2153 | Médio -> Difícil | Qual era o apelido do duro time dos Pistons bicampeão da NBA em 1989 e 1990? | Bad Boys | apelido antigo de time da NBA |
| 2154 | Fácil -> Médio | Qual dupla do Golden State Warriors ficou conhecida como "Splash Brothers"? | Stephen Curry e Klay Thompson | apelido de dupla da NBA |
| 2159 | Fácil -> Médio | Na NBA, como se chama a atuação com dois dígitos em três estatísticas, como pontos, rebotes e assistências? | Triplo-duplo | termo técnico de basquete |
| 2160 | Médio -> Difícil | Qual é o nome do troféu entregue ao time campeão da NBA? | Troféu Larry O'Brien | nome de troféu da NBA |
| 2161 | Fácil -> Médio | Quantos jogos, no máximo, pode ter uma série final da NBA? | 7 | regra de série da NBA |
| 2162 | Fácil -> Médio | Como se chama a liga universitária americana que revela muitos jogadores para a NBA? | NCAA | liga universitária americana |
| 2166 | Médio -> Difícil | Qual jogador do Utah Jazz era chamado de "The Mailman" (O Carteiro)? | Karl Malone | apelido antigo de jogador NBA |
| 2170 | Fácil -> Médio | Em qual categoria Anderson Silva foi campeão do UFC? | Peso-médio | categoria exige acompanhar MMA |
| 2176 | Fácil -> Médio | Alex Pereira tomou o cinturão dos médios do UFC de qual rival que ele já tinha vencido no kickboxing? | Israel Adesanya | rival específico no UFC |
| 2178 | Fácil -> Médio | Ronda Rousey veio de qual esporte olímpico antes de chegar ao MMA? | Judô | origem esportiva de lutadora |
| 2179 | Fácil -> Médio | Quantos rounds tem uma luta que vale cinturão no UFC? | 5 | regra de UFC |
| 2185 | Fácil -> Médio | Qual seleção o Brasil venceu na final da Copa América de 2019? | Peru | final de Copa América |
| 2186 | Fácil -> Médio | Qual clube cearense tem o apelido de "Vozão"? | Ceará | apelido de clube regional |
| 2187 | Fácil -> Médio | Qual clube paulista manda seus jogos no estádio do Canindé? | Portuguesa | estádio de clube menor |
| 2189 | Fácil -> Médio | Qual é o nome do estádio próprio do Atlético Mineiro? | Arena MRV | estádio recente de clube |
| 2190 | Fácil -> Médio | Qual é o mascote do tricolor do Morumbi? | Santo Paulo | mascote de clube |
| 2191 | Fácil -> Médio | Qual animal é o mascote do Santos? | Baleia | mascote de clube |
| 2192 | Fácil -> Médio | Qual é o mascote do Corinthians? | Mosqueteiro | mascote de clube |
| 2194 | Fácil -> Médio | Qual técnico comandou o Brasil na conquista do tetracampeonato mundial? | Carlos Alberto Parreira | técnico do tetra |
| 2195 | Fácil -> Médio | Qual craque comandou o Brasil no título da Copa do Chile, com Pelé machucado? | Garrincha | protagonista da Copa de 1962 |
| 2196 | Fácil -> Médio | Qual jogador da NBA é chamado de "The Beard" por causa da barba? | James Harden | apelido de jogador da NBA |
| 2198 | Fácil -> Médio | Qual craque húngaro dá nome ao prêmio de gol mais bonito da FIFA? | Ferenc Puskás | nome de prêmio da FIFA |
| 2199 | Fácil -> Médio | Qual técnico escocês comandou o Manchester United por mais de 25 anos? | Alex Ferguson | técnico estrangeiro |
| 2200 | Fácil -> Médio | Qual técnico português se apresentou ao futebol inglês como "Special One"? | José Mourinho | apelido de técnico estrangeiro |
| 2201 | Fácil -> Médio | Qual clube uruguaio é o grande rival do Nacional, de Montevidéu? | Peñarol | rivalidade de clube estrangeiro |
| 2202 | Fácil -> Médio | Qual seleção é chamada de "Os Três Leões"? | Inglaterra | apelido de seleção estrangeira |
| 2203 | Médio -> Difícil | Qual atacante holandês, artilheiro do Milan, era chamado de "Cisne de Utrecht"? | Marco van Basten | apelido obscuro de jogador estrangeiro |
| 2225 | Médio -> Difícil | Qual clube foi o primeiro campeão da Copa do Brasil, em 1989? | Grêmio | campeão de 1989 específico |
| 2229 | Fácil -> Médio | Qual atacante fez o gol do título do Palmeiras na final da Libertadores de 2020, contra o Santos? | Breno Lopes | autor de gol de final |
| 2230 | Fácil -> Médio | Qual atacante marcou o gol do título do Palmeiras na prorrogação da final da Libertadores de 2021? | Deyverson | autor de gol de final |
| 2231 | Fácil -> Médio | Quem fez o gol do Flamengo na final da Libertadores de 2025, contra o Palmeiras? | Danilo | autor de gol de final |
| 2266 | Médio -> Difícil | O troféu de MVP das Finais da NBA leva o nome de qual lenda do Boston Celtics? | Bill Russell | nome de troféu da NBA |
| 2267 | Médio -> Difícil | De qual ex-jogador é a silhueta que, segundo a tradição, inspirou o logotipo da NBA? | Jerry West | curiosidade de nicho da NBA |
| 2271 | Médio -> Difícil | Por qual time Oscar Schmidt foi escolhido no draft da NBA, mas recusou para seguir na seleção? | New Jersey Nets | episódio antigo de draft |
| 2275 | Fácil -> Médio | Qual americano tirou o cinturão de Anderson Silva no UFC? | Chris Weidman | adversário específico no UFC |
| 2276 | Médio -> Difícil | Anderson Silva conquistou o cinturão dos médios do UFC vencendo qual americano? | Rich Franklin | adversário de luta de 2006 |
| 2281 | Médio -> Difícil | Lyoto Machida conquistou o cinturão meio-pesado do UFC nocauteando qual americano? | Rashad Evans | adversário de luta de 2009 |
| 2306 | Médio -> Difícil | Qual atacante é o maior artilheiro da história do Campeonato Brasileiro? | Roberto Dinamite | recorde numérico histórico |
| 2307 | Médio -> Difícil | Qual técnico comandou o Flamengo no título mundial contra o Liverpool? | Paulo César Carpegiani | técnico de título de 1981 |
| 2313 | Médio -> Difícil | Qual técnico comandou o Brasil na primeira conquista de Copa do Mundo, na Suécia? | Vicente Feola | técnico de Copa antes de 1970 |
| 2321 | Médio -> Difícil | Qual foi o primeiro grande ídolo do futebol brasileiro, apelidado de "El Tigre"? | Arthur Friedenreich | ídolo anterior a 1970 pouco lembrado |
| 2327 | Médio -> Difícil | Qual jogador conquistou mais títulos da NBA na história? | Bill Russell | recorde numérico da NBA |
| 2328 | Médio -> Difícil | Qual jogador tem o recorde de assistências na história da NBA? | John Stockton | recorde numérico da NBA |
| 2337 | Médio -> Difícil | Qual jogador de apenas 1,60 m foi o mais baixo da história da NBA? | Muggsy Bogues | curiosidade de nicho da NBA |
| 2357 | Médio -> Difícil | Qual seleção venceu a Hungria na final conhecida como "Milagre de Berna"? | Alemanha Ocidental | final de Copa de 1954 |
| 2358 | Médio -> Difícil | Qual goleiro soviético é o único da posição a ter ganhado a Bola de Ouro? | Lev Yashin | goleiro estrangeiro anterior a 1970 |
| 2378 | Fácil -> Médio | Qual clube argentino é o maior campeão da Libertadores, com sete títulos? | Independiente | recorde de títulos exige acompanhar |
| 2379 | Fácil -> Médio | Qual seleção venceu a Eurocopa de 2024, batendo a Inglaterra na final? | Espanha | campeão de Euro recente |
| 2384 | Fácil -> Médio | Desde 2022, quantas substituições cada time pode fazer no tempo normal de uma partida oficial de futebol? | Cinco | regra com detalhe |
| 2386 | Médio -> Difícil | Qual clube venceu a Taça Brasil de 1959, o primeiro torneio nacional do país? | Bahia | torneio nacional de 1959 |
| 2387 | Fácil -> Médio | Qual seleção venceu a Copa América de 2024, disputada nos Estados Unidos? | Argentina | campeão de Copa América recente |
| 2388 | Fácil -> Médio | Qual seleção venceu a Copa do Mundo de 1966, disputada em casa? | Inglaterra | campeão de Copa antiga |
| 2389 | Fácil -> Médio | Qual seleção venceu a Copa do Mundo de 1978, disputada em casa? | Argentina | campeão de Copa de 1978 |
| 2390 | Médio -> Difícil | Qual país sediou a Copa do Mundo de 1938? | França | sede de Copa antes de 1970 |
| 2391 | Médio -> Difícil | Qual seleção venceu a Copa do Mundo de 1934, disputada em seu próprio território? | Itália | campeão de Copa antes de 1970 |
| 2392 | Fácil -> Médio | Qual estádio da Cidade do México recebeu as finais das Copas de 1970 e 1986? | Estádio Azteca | estádio estrangeiro famoso |
| 2393 | Fácil -> Médio | Qual clube pernambucano manda seus jogos no Estádio do Arruda? | Santa Cruz | estádio de clube regional |
| 2397 | Fácil -> Médio | Qual competição reúne o campeão da Libertadores e o campeão da segunda copa continental da Conmebol? | Recopa Sul-Americana | nome de competição continental |
| 2398 | Fácil -> Médio | Qual seleção venceu a Copa do Mundo de 1974, disputada em casa? | Alemanha Ocidental | campeão de Copa de 1974 |
| 2399 | Fácil -> Médio | Qual seleção eliminou o Brasil de Zico e Sócrates na Copa de 1982, na "Tragédia do Sarriá"? | Itália | eliminação em Copa de 1982 |
| 2502 | Fácil -> Médio | Qual zagueiro de cabelos cacheados, capitão do Barcelona, marcou de cabeça o gol que levou a Espanha à final da Copa de 2010? | Carles Puyol | lance de semifinal exige acompanhar Copa |
| 2503 | Médio -> Difícil | Qual piloto escocês foi tricampeão da Fórmula 1 e lutou pela segurança nas pistas nos anos 60 e 70? | Jackie Stewart | piloto antigo dos anos 60 e 70 |
| 2504 | Fácil -> Médio | Qual meia inglês, ídolo do Liverpool, comandou a virada contra o Milan na final da Champions de 2005? | Steven Gerrard | final europeia exige acompanhar futebol |
| 2505 | Fácil -> Médio | Qual meia inglês é o maior artilheiro da história do Chelsea? | Frank Lampard | recorde de clube estrangeiro |
| 2506 | Fácil -> Médio | Qual atacante francês marcou de pênalti na final da Copa de 2018 e foi ídolo do Atlético de Madrid? | Antoine Griezmann | craque estrangeiro, exige acompanhar |
| 2507 | Fácil -> Médio | Qual atacante italiano, ídolo da Juventus, continuou no clube mesmo depois do rebaixamento de 2006? | Alessandro Del Piero | ídolo estrangeiro, exige acompanhar |
| 2509 | Médio -> Difícil | Qual craque argentino, ídolo do Real Madrid nos anos 50, ganhou as cinco primeiras Copas dos Campeões da Europa? | Alfredo Di Stéfano | história distante dos anos 50 |
| 2511 | Médio -> Difícil | Qual centroavante brasileiro marcou nas finais das Copas de 1958 e de 1962? | Vavá | artilheiro de finais antes de 1970 |
| 2512 | Médio -> Difícil | Qual craque do Flamengo e do Bangu, ídolo de Pelé, foi eleito o melhor jogador da Copa de 1950? | Zizinho | Copa de 1950, jogador antigo |
| 2513 | Médio -> Difícil | Qual centroavante brasileiro foi artilheiro da Champions League de 1999-2000 pelo Porto? | Mário Jardel | artilharia de temporada específica |
| 2515 | Fácil -> Médio | Qual zagueiro brasileiro, revelado pelo São Paulo, foi contratado pelo Real Madrid em 2019? | Éder Militão | zagueiro atual, exige acompanhar |
| 2516 | Fácil -> Médio | Qual clube argentino, o "Ciclón" de Boedo, é o time do coração do papa Francisco? | San Lorenzo | curiosidade de clube argentino |
| 2517 | Fácil -> Médio | Qual clube turco tem uma torcida famosa por transformar o estádio em "Inferno" e é rival do Fenerbahçe? | Galatasaray | clube estrangeiro, exige acompanhar |
| 2522 | Médio -> Difícil | Qual clube inglês ganhou duas Copas dos Campeões da Europa seguidas, em 1979 e 1980, com Brian Clough? | Nottingham Forest | título europeu antigo de clube secundário |
| 2523 | Médio -> Difícil | Qual clube argentino de La Plata ganhou três Libertadores seguidas, de 1968 a 1970? | Estudiantes | Libertadores dos anos 60 e 70 |
| 2525 | Fácil -> Médio | Qual meia, camisa 7 do Flamengo campeão da Libertadores de 2019, fazia dupla com Arrascaeta? | Everton Ribeiro | elenco específico exige acompanhar |
| 2526 | Fácil -> Médio | Qual lateral-direito brasileiro da Inter de Milão foi campeão da Champions League em 2010? | Maicon | jogador de título europeu específico |
| 2527 | Médio -> Difícil | Qual goleiro foi o titular do Brasil nos títulos mundiais de 1958 e de 1962? | Gilmar | goleiro de Copas antes de 1970 |
| 2529 | Médio -> Difícil | Qual meia do Palmeiras abriu o placar na final da Libertadores de 2021, contra o Flamengo? | Raphael Veiga | autor de gol de final específica |
| 2530 | Fácil -> Médio | Qual clube londrino, apelidado de "Hammers", joga no antigo Estádio Olímpico de 2012? | West Ham | clube estrangeiro com detalhe |
| 2531 | Fácil -> Médio | Qual clube de Gelsenkirchen é o grande rival do Borussia Dortmund? | Schalke 04 | rivalidade alemã exige acompanhar |
| 2532 | Fácil -> Médio | Qual clube de Florença joga de roxo e é chamado de "Viola"? | Fiorentina | clube italiano por apelido |
| 2533 | Médio -> Difícil | Qual circuito britânico recebeu a primeira corrida da história da Fórmula 1, em 1950? | Silverstone | história da F1 de 1950 |
| 2535 | Médio -> Difícil | Qual goleiro foi o titular do Brasil na Copa de 1982? | Valdir Peres | goleiro titular de Copa antiga |
| 2537 | Médio -> Difícil | Qual clube do Pireu é o maior campeão do futebol grego? | Olympiacos | recorde de liga grega |
| 2541 | Fácil -> Médio | Qual técnico, ídolo do Grêmio como jogador, levou o clube ao título da Libertadores de 2017? | Renato Portaluppi | técnico de título específico |
| 2543 | Fácil -> Médio | Qual clube espanhol de camisa amarela é chamado de "Submarino Amarelo"? | Villarreal | apelido de clube estrangeiro |
| 2544 | Fácil -> Médio | Qual clube de Sevilha, de verde e branco, é o grande rival do Sevilla? | Real Betis | rivalidade espanhola exige acompanhar |
| 2545 | Médio -> Difícil | Qual clube russo de São Petersburgo venceu a Copa da UEFA em 2008? | Zenit | título europeu de clube russo |
| 2546 | Médio -> Difícil | Qual lateral-direito brasileiro marcou o gol do título da Champions de 2006 pelo Barcelona? | Belletti | autor de gol de final específica |
| 2548 | Médio -> Difícil | Qual clube alemão, ligado à Volkswagen, foi campeão da Bundesliga de 2009? | Wolfsburg | campeão alemão de temporada específica |
| 2549 | Fácil -> Médio | Qual clube alemão ligado à Red Bull foi fundado em 2009 e chegou rapidamente à elite? | RB Leipzig | clube estrangeiro exige acompanhar |
| 2550 | Médio -> Difícil | Qual clube de Bogotá teve Di Stéfano no time durante a era do "El Dorado" colombiano? | Millonarios | episódio antigo do futebol colombiano |
| 2555 | Fácil -> Médio | Qual atacante uruguaio, apelidado de "Matador", defendeu Napoli, PSG e Boca Juniors? | Edinson Cavani | atacante estrangeiro exige acompanhar |
| 2556 | Fácil -> Médio | Qual jovem atacante do Palmeiras foi vendido ao Chelsea, em 2024, ainda com 17 anos? | Estêvão | transferência recente exige acompanhar |
| 2560 | Fácil -> Médio | Qual clube grego de Atenas, de verde e branco, é o grande rival do Olympiacos? | Panathinaikos | rivalidade grega exige acompanhar |
| 2561 | Médio -> Difícil | Qual clube de Moscou é chamado de "time do povo" e é um dos mais populares da Rússia? | Spartak Moscou | clube russo por apelido |
| 2567 | Médio -> Difícil | Qual clube colombiano, o "Diablo Rojo", perdeu três finais seguidas de Libertadores nos anos 80? | América de Cali | finais de Libertadores dos anos 80 |
| 2570 | Médio -> Difícil | Qual armador brasileiro jogou duas temporadas pelo Los Angeles Lakers depois de brilhar no Barcelona? | Marcelinho Huertas | basquete, jogador secundário |
| 2571 | Fácil -> Médio | Qual estádio de Buenos Aires é a casa do River Plate? | Monumental de Núñez | estádio estrangeiro exige acompanhar |
| 2572 | Fácil -> Médio | Qual estádio de Campinas é a casa da Ponte Preta? | Moisés Lucarelli | estádio de clube médio |
| 2573 | Médio -> Difícil | Qual galo foi o mascote da Copa do Mundo de 1998, na França? | Footix | mascote antigo pouco lembrado |
| 2574 | Médio -> Difícil | Qual foi o nome do mascote da Copa do Mundo de 2022, no Catar? | La'eeb | nome de mascote pouco lembrado |
| 2575 | Médio -> Difícil | Qual estádio de Florianópolis é a casa do Figueirense? | Orlando Scarpelli | estádio de clube médio regional |
| 2576 | Médio -> Difícil | Qual leão foi o primeiro mascote da história das Copas, em 1966, na Inglaterra? | World Cup Willie | mascote de Copa antiga |
| 2577 | Fácil -> Médio | Quais clubes disputam o Derby Campineiro? | Guarani e Ponte Preta | clássico regional exige acompanhar |
| 2578 | Fácil -> Médio | Qual clube é o grande rival do Arsenal no clássico do norte de Londres? | Tottenham | clássico inglês exige acompanhar |
| 2579 | Fácil -> Médio | O "Le Classique" é o clássico francês entre o PSG e qual clube? | Olympique de Marseille | clássico francês exige acompanhar |
| 2580 | Fácil -> Médio | Qual auxiliar fica entre os bancos de reservas e cuida das substituições? | Quarto árbitro | regra com detalhe de arbitragem |
| 2581 | Fácil -> Médio | Como se chama o atacante que recua para armar as jogadas, como Messi no Barcelona de Guardiola? | Falso nove | termo tático exige acompanhar |
| 2591 | Fácil -> Médio | Qual expressão dos narradores indica a região perigosa perto da área, de onde saem muitos gols? | Zona do agrião | jargão de narrador exige acompanhar |
| 2595 | Fácil -> Médio | Como se chama o meio-campista de marcação que joga um pouco mais avançado, ajudando no ataque? | Segundo volante | termo tático exige acompanhar |
| 2596 | Fácil -> Médio | Como se chama a estratégia de manter a defesa adiantada, perto do meio de campo? | Linha alta | termo tático exige acompanhar |
| 2600 | Fácil -> Médio | Qual sigla, criada por lei em 2021, designa o modelo de clube-empresa adotado por Botafogo, Cruzeiro e Vasco? | SAF | termo de gestão exige acompanhar futebol |
| 2602 | Fácil -> Médio | Qual taça é entregue ao vencedor do primeiro turno do Campeonato Carioca? | Taça Guanabara | competição estadual exige acompanhar |
| 2603 | Fácil -> Médio | Qual regra da UEFA limita os gastos dos clubes ao que eles arrecadam? | Fair play financeiro | regra da UEFA exige acompanhar |
| 2604 | Médio -> Difícil | Qual seleção venceu a primeira Copa do Mundo Feminina, em 1991? | Estados Unidos | futebol feminino antigo, data específica |
| 2605 | Fácil -> Médio | Qual era o apelido de Jairzinho, ponta do tricampeonato? | Furacão da Copa | apelido de jogador de 1970 |
| 2607 | Fácil -> Médio | Qual atacante uruguaio, ídolo do Botafogo, bateu de cavadinha o pênalti decisivo nas quartas da Copa de 2010? | Loco Abreu | lance específico de Copa |
| 2608 | Fácil -> Médio | Qual meia holandês, quatro vezes campeão da Champions, jogou no Botafogo em 2012 e 2013? | Clarence Seedorf | passagem específica de estrangeiro |
| 2609 | Fácil -> Médio | Qual meia argentino, ídolo do Internacional, foi campeão da Libertadores de 2010? | D'Alessandro | ídolo de clube, exige acompanhar |
| 2610 | Fácil -> Médio | Qual meia chileno, apelidado de "Mago", foi ídolo do Palmeiras? | Valdivia | ídolo de clube, exige acompanhar |
| 2611 | Fácil -> Médio | Qual ex-lateral, campeão da Libertadores de 2019 como jogador, virou técnico do Flamengo em 2024? | Filipe Luís | técnico atual, exige acompanhar |
| 2612 | Médio -> Difícil | Qual atacante do Botafogo dos anos 1940, de temperamento explosivo e vida boêmia, foi vivido por Rodrigo Santoro no cinema? | Heleno de Freitas | jogador dos anos 1940 |
| 2615 | Médio -> Difícil | Qual volante do Cruzeiro foi campeão do mundo com a Seleção em 1970? | Wilson Piazza | jogador secundário de 1970 |
| 2617 | Fácil -> Médio | Qual atacante do Flamengo virou meme com o grito da torcida de que ele era "melhor que Eto'o"? | Obina | meme de torcedor, exige acompanhar |
| 2619 | Médio -> Difícil | Qual torneio nacional, disputado de 1967 a 1970, também é reconhecido como Campeonato Brasileiro? | Torneio Roberto Gomes Pedrosa | torneio antigo dos anos 60 |
| 2620 | Médio -> Difícil | Qual torneio da Conmebol, de 1988 a 1997, reunia só os clubes que já tinham vencido a principal copa do continente? | Supercopa Libertadores | torneio extinto pouco lembrado |
| 2625 | Fácil -> Médio | Como se chama a sequência rápida de curvas em S colocada numa reta para reduzir a velocidade dos carros? | Chicane | termo de automobilismo |
| 2627 | Médio -> Difícil | Qual é a categoria de peso mais leve do UFC, disputada só por mulheres? | Peso-palha | detalhe de categoria do UFC |
| 2628 | Médio -> Difícil | Qual clube do interior paulista foi campeão estadual em 2002 e 2014? | Ituano | títulos estaduais de clube pequeno |
| 2633 | Fácil -> Médio | Qual é o nome do estádio que o Atlético de Madrid usa desde 2017? | Metropolitano | estádio estrangeiro |
| 2634 | Fácil -> Médio | Qual estádio é a casa do Olympique de Marselha? | Vélodrome | estádio estrangeiro |
| 2635 | Fácil -> Médio | Qual é o estádio do Avaí? | Ressacada | estádio de clube regional |
| 2639 | Médio -> Difícil | Qual é o estádio próprio do ABC, de Natal? | Frasqueirão | estádio de clube regional |
| 2643 | Fácil -> Médio | Qual programa de debate esportivo da TV Gazeta ficou famoso pelas brigas entre os comentaristas? | Mesa Redonda | programa esportivo de nicho |
| 2647 | Médio -> Difícil | Qual brasileiro inventou o spray de espuma que o juiz usa para marcar a barreira? | Heine Allemagne | inventor pouco conhecido |
| 2649 | Médio -> Difícil | Como é apelidado o estádio do Feyenoord, em Roterdã? | De Kuip | apelido de estádio estrangeiro |
| 2651 | Médio -> Difícil | Qual é a largura oficial do gol de futebol? | 7,32 metros | medida numérica oficial |
| 2655 | Médio -> Difícil | Como é chamada a torcida organizada do Boca Juniors? | La 12 | torcida organizada estrangeira |
| 2656 | Fácil -> Médio | Qual estádio de La Paz, a mais de 3.500 metros de altitude, é temido pelos times visitantes? | Hernando Siles | estádio estrangeiro |
| 2657 | Médio -> Difícil | Qual cachorro foi o mascote da Copa do Mundo de 1994, nos Estados Unidos? | Striker | mascote antigo pouco lembrado |
| 2660 | Médio -> Difícil | Qual clube chileno foi campeão invicto da Copa Sul-Americana de 2011? | Universidad de Chile | campeão continental específico estrangeiro |
| 2661 | Médio -> Difícil | Qual era o mascote da Copa de 1986, no México, uma pimenta de sombrero e bigode? | Pique | mascote antigo pouco lembrado |
| 2662 | Médio -> Difícil | Como se chamavam os dois garotos mascotes da Copa de 1974, na Alemanha Ocidental? | Tip e Tap | mascote antigo pouco lembrado |
| 2663 | Médio -> Difícil | Qual bola, de gomos pretos e brancos, estreou na Copa do Mundo de 1970? | Telstar | nome de bola antiga |
| 2665 | Fácil -> Médio | Qual estádio de Montevidéu recebeu a final da primeira Copa do Mundo, em 1930? | Centenário | estádio estrangeiro de Copa antiga |
| 2666 | Médio -> Difícil | Qual era o mascote da Copa de 1978, um garoto de chapéu e camisa da seleção argentina? | Gauchito | mascote antigo pouco lembrado |
| 2667 | Médio -> Difícil | Como se chamava a bola da Copa do Mundo de 2002, na Coreia do Sul e no Japão? | Fevernova | nome de bola de Copa |
| 2668 | Fácil -> Médio | Qual narrador é famoso pelo bordão "Que beleza!"? | Milton Leite | bordão exige acompanhar transmissões |
| 2669 | Fácil -> Médio | Qual narrador de rádio ficou famoso pelo bordão "Ripa na chulipa e pimba na gorduchinha"? | Osmar Santos | bordão de rádio antigo |
| 2670 | Fácil -> Médio | Qual apresentadora, ex-Miss Brasil, ficou marcada no comando do programa esportivo "Jogo Aberto", na Band? | Renata Fan | apresentadora de programa esportivo |
| 2671 | Médio -> Difícil | Qual narrador de rádio abria as transmissões com "Abrem-se as cortinas e começa o espetáculo"? | Fiori Gigliotti | narrador antigo de rádio |
| 2672 | Médio -> Difícil | Qual narrador, famoso nas rádios e TVs do Rio, ficou conhecido pelo bordão "Tá lá o corpo estendido no chão"? | Januário de Oliveira | narrador regional antigo |
| 2673 | Médio -> Difícil | Qual era o nome da bola da Copa do Mundo de 2006, na Alemanha? | Teamgeist | nome de bola de Copa |
| 2674 | Fácil -> Médio | Qual ex-atacante, símbolo da Democracia Corinthiana, virou comentarista da Globo? | Casagrande | comentarista exige acompanhar |
| 2675 | Fácil -> Médio | Qual clube carioca ficou conhecido como "Expresso da Vitória" no fim dos anos 1940? | Vasco | apelido histórico de time |
| 2676 | Médio -> Difícil | Na Fórmula 1, como se chama o regime em que os carros, depois da classificação, não podem receber ajustes até a corrida? | Parque fechado | regulamento técnico da F1 |
| 2677 | Fácil -> Médio | Qual time dos anos 1970, com Rivellino, ficou conhecido como "Máquina Tricolor"? | Fluminense | apelido histórico de time |
| 2678 | Fácil -> Médio | Qual tcheco deu nome à cobrança de pênalti com um toque leve por cima do goleiro, na final da Eurocopa de 1976? | Panenka | origem de lance exige acompanhar |
| 2679 | Médio -> Difícil | Qual clube gaúcho ficou conhecido como "Rolo Compressor" nos anos 1940? | Internacional | apelido de time dos anos 40 |
| 2680 | Médio -> Difícil | Qual clube manda os jogos no estádio Bento Freitas, em Pelotas? | Brasil de Pelotas | estádio de clube pequeno |
| 2683 | Fácil -> Médio | Como se chama o drible em que o jogador prende a bola entre os pés e a joga por cima da própria cabeça? | Lambreta | nome de drible exige acompanhar |
| 2685 | Fácil -> Médio | Qual clube carioca ganhou o apelido de "pó de arroz" por causa de um jogador que passava o pó no rosto, em 1914? | Fluminense | história de 1914 do apelido |
| 2686 | Fácil -> Médio | Qual clube paraense teve a torcida organizada Terror Bicolor? | Paysandu | torcida organizada regional |
| 2688 | Médio -> Difícil | Qual clube baiano tem a torcida organizada Os Imbatíveis? | Vitória | torcida organizada regional |
| 2689 | Médio -> Difícil | Qual curva do autódromo de Interlagos tem nome de árvore? | Pinheirinho | curva de autódromo |
| 2690 | Médio -> Difícil | Qual clube paranaense tem a torcida organizada Os Fanáticos? | Athletico Paranaense | torcida organizada regional |
| 2691 | Fácil -> Médio | No Brasileirão de pontos corridos, qual é o primeiro critério de desempate entre times com os mesmos pontos? | Número de vitórias | regra de desempate com detalhe |
| 2692 | Fácil -> Médio | Qual clube paulista tem a torcida organizada Dragões da Real? | São Paulo | torcida organizada exige acompanhar |
| 2693 | Fácil -> Médio | Como se chama o passe lançado no espaço vazio, para onde o companheiro vai correr? | Ponto futuro | jargão tático exige acompanhar |
| 2694 | Fácil -> Médio | Na gíria do futebol, como se chama marcar quatro gols numa mesma partida? | Poker | gíria pouco usada |
| 2696 | Médio -> Difícil | Qual clube paraense venceu a Copa dos Campeões de 2002 e ganhou vaga na Libertadores? | Paysandu | torneio extinto, título regional |
| 2697 | Fácil -> Médio | Como se chamava o critério de desempate em que o gol marcado fora de casa valia mais? | Gol qualificado | regra de desempate com detalhe |
| 2698 | Fácil -> Médio | Como é apelidado o Leicester City, clube azul das Midlands inglesas? | Foxes | apelido de clube estrangeiro |
| 2699 | Fácil -> Médio | Como são chamados os torcedores do Barcelona? | Culés | apelido de torcida estrangeira |
| 2700 | Fácil -> Médio | Qual clube italiano é chamado de "Nerazzurri" por causa das cores preto e azul? | Inter de Milão | apelido italiano exige acompanhar |
| 2701 | Fácil -> Médio | Qual clube escocês manda os jogos no estádio Ibrox, em Glasgow? | Rangers | estádio estrangeiro |
| 2702 | Fácil -> Médio | Qual clube de Lisboa manda os jogos no Estádio José Alvalade? | Sporting | estádio estrangeiro |
| 2705 | Médio -> Difícil | Qual clube italiano tem o apelido de "Partenopei"? | Napoli | apelido italiano de nicho |
| 2706 | Médio -> Difícil | Qual clube baiano tem a torcida organizada Bamor? | Bahia | torcida organizada regional |
| 2708 | Fácil -> Médio | Qual clube espanhol joga no San Mamés, estádio apelidado de "A Catedral"? | Athletic Bilbao | estádio estrangeiro |
| 2709 | Médio -> Difícil | Qual clube gaúcho tem a torcida organizada Camisa 12? | Internacional | torcida organizada regional |
| 2711 | Médio -> Difícil | Qual curva de Interlagos leva os carros para a subida dos boxes, no fim da volta? | Junção | curva de autódromo |
| 2712 | Médio -> Difícil | Qual clube paraguaio é chamado de "Decano"? | Olimpia | apelido de clube estrangeiro de nicho |
| 2714 | Médio -> Difícil | Qual clube argentino é chamado de "Pincharratas"? | Estudiantes | apelido de clube estrangeiro de nicho |
| 2718 | Fácil -> Médio | Como se chama o centroavante que sai da área para buscar o jogo, deixando o meio da área vazio? | Falso 9 | termo tático exige acompanhar |
| 2723 | Médio -> Difícil | Qual personagem de Jô Soares ligava para Telê Santana pedindo "bota ponta, Telê!"? | Zé da Galera | humor de TV antigo |
| 2724 | Fácil -> Médio | Como se chamava a bola de couro antiga, de gomos costurados, que ficava pesadíssima quando molhada? | Capotão | objeto antigo do futebol |
| 2725 | Médio -> Difícil | Qual bola da Adidas estreou na Copa de 1978, na Argentina? | Tango | nome de bola antiga |
| 2726 | Médio -> Difícil | Qual personagem de Nelson Rodrigues "explicava" os resultados absurdos do futebol? | Sobrenatural de Almeida | referência literária antiga |
| 2727 | Médio -> Difícil | Qual menino de sombreiro foi o mascote da Copa de 1970, no México? | Juanito | mascote antigo pouco lembrado |
| 2728 | Médio -> Difícil | Qual mascote da Copa de 1990, na Itália, era um boneco feito de blocos com cabeça de bola? | Ciao | mascote antigo pouco lembrado |
| 2729 | Fácil -> Médio | Qual canção do somali-canadense K'naan virou o hino de uma marca na Copa de 2010? | Wavin' Flag | música de Copa menos lembrada |
| 2730 | Médio -> Difícil | Em qual Copa do Mundo estrearam os cartões amarelo e vermelho? | 1970 | data histórica de regra |
| 2731 | Fácil -> Médio | Na F1, qual bandeira avisa o piloto que deve dar passagem a um carro mais rápido? | Azul | regra de F1 com detalhe |
| 2732 | Fácil -> Médio | Qual clube mexicano é famoso por escalar só jogadores mexicanos? | Chivas | curiosidade de clube estrangeiro |
| 2733 | Médio -> Difícil | Qual árbitro inglês inventou os cartões amarelo e vermelho, inspirado num semáforo? | Ken Aston | personagem pouco conhecido |
| 2737 | Fácil -> Médio | Qual clube canta "Agora quem dá bola é o ..." na marchinha "Leão do Mar", seu hino popular? | Santos | hino de clube exige acompanhar |
| 2738 | Fácil -> Médio | Qual clube carioca canta no hino que é "campeão desde 1910"? | Botafogo | hino de clube exige acompanhar |
| 2741 | Médio -> Difícil | Qual clube turco ganhou a Copa da Uefa de 2000? | Galatasaray | título europeu de clube turco |
| 2744 | Médio -> Difícil | Qual compositor fez os hinos populares de Flamengo, Fluminense, Vasco e Botafogo? | Lamartine Babo | compositor de hinos antigos |
| 2745 | Médio -> Difícil | Qual seleção europeia é chamada de "Vatreni", os ardentes? | Croácia | apelido de seleção de nicho |
| 2748 | Fácil -> Médio | Qual atacante norueguês comemora os gols sentado, de pernas cruzadas, como se meditasse? | Erling Haaland | craque atual exige acompanhar |
| 2749 | Fácil -> Médio | Qual atacante de Camarões, aos 38 anos, dançava junto à bandeirinha de escanteio na Copa de 1990? | Roger Milla | lance de Copa antiga |
| 2750 | Fácil -> Difícil | Qual seleção ganhou a Eurocopa de 1992 depois de entrar de última hora no torneio? | Dinamarca | episódio antigo de Eurocopa |
| 2751 | Médio -> Difícil | Qual seleção africana ganhou o ouro no futebol olímpico em Sydney 2000? | Camarões | campeão olímpico antigo |
| 2752 | Fácil -> Médio | Qual seleção ganhou o ouro no futebol olímpico de Atlanta 1996, batendo o Brasil na semifinal? | Nigéria | futebol olímpico exige acompanhar |
| 2753 | Médio -> Difícil | Qual seleção ganhou a Eurocopa de 1976, decidida nos pênaltis contra a Alemanha Ocidental? | Tchecoslováquia | campeão europeu antigo |
| 2754 | Médio -> Difícil | Em 2021, qual árbitra brasileira foi a primeira mulher a apitar um jogo do Mundial de Clubes da FIFA? | Edina Alves | arbitragem, fato específico |
| 2758 | Fácil -> Médio | Até a derrota na final de 1950, a seleção brasileira jogava com camisa de qual cor? | Branca | história antiga da seleção |
| 2760 | Médio -> Difícil | Qual clube de São Luís é o "Bolívia Querida"? | Sampaio Corrêa | apelido de clube regional |
| 2762 | Fácil -> Médio | Como se chama, em inglês, o jogo em que o goleiro não sofre gol? | Clean sheet | termo em inglês exige acompanhar |
| 2768 | Médio -> Difícil | Qual marca inglesa fez a camisa da seleção brasileira no tetra de 1994? | Umbro | fornecedor de camisa antigo |
| 2771 | Fácil -> Médio | Como são chamadas as torcidas organizadas da Itália? | Ultras | termo de torcida exige acompanhar |
| 2773 | Fácil -> Médio | Como se chama a supercopa inglesa, entre o campeão da liga e o da FA Cup? | Community Shield | torneio estrangeiro exige acompanhar |
| 2787 | Fácil -> Médio | Qual seleção foi a grande zebra campeã da Eurocopa de 2004, em Portugal? | Grécia | campeão europeu exige acompanhar |
| 2788 | Fácil -> Médio | Em qual clube dos Estados Unidos David Beckham jogou a partir de 2007? | LA Galaxy | clube estrangeiro exige acompanhar |
| 2790 | Médio -> Difícil | Qual seleção venceu a Copa do Mundo feminina de 2011, na Alemanha? | Japão | futebol feminino, campeã específica |
| 2791 | Fácil -> Médio | Em qual clube japonês Zico virou ídolo nos anos 1990? | Kashima Antlers | passagem de ídolo no exterior |
| 2792 | Médio -> Difícil | Qual norueguesa ganhou a primeira Bola de Ouro feminina, em 2018? | Ada Hegerberg | prêmio feminino, jogadora estrangeira |
| 2794 | Fácil -> Médio | Qual goleiro mexicano ficou famoso pelas camisas coloridas que ele mesmo desenhava? | Jorge Campos | goleiro estrangeiro exige acompanhar |
| 2795 | Fácil -> Médio | Qual americana de cabelo colorido foi eleita a melhor jogadora do mundo em 2019? | Megan Rapinoe | prêmio específico exige acompanhar |
| 2801 | Fácil -> Médio | Qual clube brasileiro ganhou a Copa Sul-Americana de 2012, numa final contra o Tigre, da Argentina? | São Paulo | título continental específico |
| 2802 | Médio -> Difícil | Qual clube argentino ganhou a Copa Sul-Americana de 2020? | Defensa y Justicia | campeão estrangeiro de clube pequeno |
| 2804 | Fácil -> Médio | Qual atacante chileno da Inter de Milão e do Real Madrid era chamado de "Bam Bam"? | Iván Zamorano | atacante estrangeiro exige acompanhar |
| 2805 | Fácil -> Difícil | Qual capitão uruguaio do Maracanazo de 1950 era chamado de "Negro Jefe"? | Obdulio Varela | jogador de 1950 |
| 2807 | Médio -> Difícil | Qual meia peruano brilhou nas Copas de 1970 e 1978 e é ídolo do Alianza Lima? | Teófilo Cubillas | ídolo estrangeiro antigo |
| 2809 | Fácil -> Médio | Qual centroavante argentino voltou ao São Paulo em 2021 e ganhou a Copa do Brasil de 2023 pelo clube? | Calleri | atacante atual exige acompanhar |
| 2811 | Fácil -> Médio | Qual clube ganhou a Liga dos Campeões pela primeira vez em 2025? | Paris Saint-Germain | campeão europeu recente |
| 2812 | Fácil -> Médio | Qual técnico espanhol levou um clube alemão ao título nacional invicto em 2024? | Xabi Alonso | técnico estrangeiro exige acompanhar |
| 2814 | Médio -> Difícil | Qual meia espanhola ganhou a Bola de Ouro em 2023 e 2024? | Aitana Bonmatí | futebol feminino estrangeiro |
| 2815 | Fácil -> Médio | Qual atacante empatou nos acréscimos a final da Copa América de 2004 contra a Argentina? | Adriano | lance de final específica |
| 2816 | Médio -> Difícil | Qual clube romeno foi o primeiro do Leste Europeu campeão da Copa dos Campeões, em 1986? | Steaua Bucareste | título europeu antigo de clube romeno |
| 2817 | Médio -> Difícil | Qual clube de Bruxelas é o maior campeão da história do futebol belga? | Anderlecht | recorde de liga belga |
| 2825 | Médio -> Difícil | Como se chama o troféu entregue ao campeão da Eurocopa? | Henri Delaunay | nome de troféu pouco conhecido |
| 2828 | Fácil -> Médio | Em que ano o Corinthians foi rebaixado no Brasileirão? | 2007 | ano específico de rebaixamento |
| 2829 | Fácil -> Médio | Qual seleção africana estreante venceu a França, campeã do mundo, na abertura da Copa de 2002? | Senegal | jogo específico de Copa |
| 2831 | Médio -> Difícil | Qual seleção asiática eliminou a Itália na Copa de 1966? | Coreia do Norte | episódio de Copa antiga |
| 2835 | Fácil -> Médio | Qual ídolo do Flamengo foi técnico da seleção do Japão na Copa de 2006? | Zico | carreira de técnico no exterior |
| 2836 | Fácil -> Médio | Em qual cidade japonesa foi a final da Copa do Mundo de 2002? | Yokohama | cidade estrangeira de final |
| 2837 | Médio -> Difícil | Em qual cidade americana, no estádio Rose Bowl, foi a final da Copa de 1994? | Pasadena | cidade estrangeira de final antiga |
| 2838 | Médio -> Difícil | Qual zagueiro do penta fez gol de bicicleta contra a Costa Rica na Copa de 2002? | Edmílson | autor de gol específico |
| 2839 | Fácil -> Médio | Qual técnico brasileiro comandou o Real Madrid em 2005? | Vanderlei Luxemburgo | passagem de técnico no exterior |
| 2840 | Fácil -> Médio | Qual ponta-esquerda da seleção de 1982 tinha um chute fortíssimo de canhota? | Éder | jogador da seleção de 1982 |
| 2841 | Fácil -> Médio | Qual lateral da seleção de 1982, ídolo do Flamengo, virou comentarista de TV? | Júnior | jogador da seleção de 1982 |
| 2842 | Médio -> Difícil | Em qual cidade mexicana o Brasil jogou a fase de grupos da Copa de 1986? | Guadalajara | cidade estrangeira de Copa antiga |
| 2846 | Médio -> Difícil | Em que ano o Atlético-MG foi rebaixado no Brasileirão, voltando campeão da Série B no ano seguinte? | 2005 | ano específico de rebaixamento |
| 2847 | Médio -> Difícil | Em qual país foi disputada a Copa América de 2004, vencida pelo Brasil nos pênaltis? | Peru | sede de torneio específico |
| 2849 | Fácil -> Médio | Em que ano o Internacional foi rebaixado no Brasileirão, pela primeira vez na história? | 2016 | ano específico de rebaixamento |
| 2852 | Fácil -> Médio | Qual estádio mexicano recebeu, em 2026, a abertura de uma Copa do Mundo pela terceira vez? | Estádio Azteca | estádio estrangeiro de Copa |
| 2854 | Fácil -> Médio | Qual goleiro do Palmeiras defendeu a seleção nas Copas de 1974 e 1978? | Leão | goleiro de Copas antigas |
| 2856 | Fácil -> Médio | Qual tecnologia, com câmeras e sensor na bola, estreou na Copa de 2022 para marcar a posição irregular de atacantes? | Impedimento semiautomático | tecnologia de arbitragem com detalhe |
| 2857 | Médio -> Difícil | Quais países foram escolhidos, em 2023, para sediar a Eurocopa de 2028? | Reino Unido e Irlanda | sede futura de torneio europeu |
| 2858 | Fácil -> Médio | Qual clube brasileiro chegou à semifinal do Mundial de Clubes da FIFA de 2025? | Fluminense | campanha específica de clube |
| 2859 | Fácil -> Médio | Qual heptacampeão da Fórmula 1 trocou a Mercedes pela Ferrari em 2025? | Lewis Hamilton | transferência na F1 exige acompanhar |
| 2861 | Médio -> Difícil | Qual lateral-esquerdo da seleção foi um dos injustamente culpados pela derrota para o Uruguai em 1950, no Maracanã? | Bigode | jogador secundário de 1950 |
| 2862 | Fácil -> Médio | Qual meia inglês marcou dois gols na final do Mundial de Clubes de 2025? | Cole Palmer | autor de gols de final |
| 2864 | Fácil -> Médio | Qual estádio de Nova Jersey recebeu a final da Copa do Mundo de 2026? | MetLife Stadium | estádio estrangeiro de Copa |
| 2867 | Fácil -> Médio | Qual meia comandou o Cruzeiro na tríplice coroa de 2003 e virou ídolo do Fenerbahçe? | Alex | ídolo de clube exige acompanhar |
| 2869 | Médio -> Difícil | Qual apelido Nelson Rodrigues deu ao meia do Botafogo bicampeão mundial em 1958 e 1962? | Príncipe Etíope | apelido de jogador antigo |
| 2873 | Fácil -> Médio | Qual programa esportivo da Band teve o ex-jogador Neto como apresentador? | Os Donos da Bola | programa esportivo exige acompanhar |
| 2875 | Fácil -> Médio | Qual estátua de um menino fazendo xixi virou mascote do Botafogo? | Manequinho | mascote de clube exige acompanhar |
| 2876 | Fácil -> Médio | Qual herói, com as cores azul, vermelha e branca, é o mascote do Bahia? | Super-Homem | mascote de clube exige acompanhar |
| 2878 | Fácil -> Médio | Qual apresentador comandou por anos o programa esportivo "Terceiro Tempo"? | Milton Neves | programa esportivo exige acompanhar |
| 2880 | Médio -> Difícil | Qual clube espanhol manda seus jogos no Estádio Ramón Sánchez-Pizjuán? | Sevilla | estádio estrangeiro menos famoso |
| 2881 | Fácil -> Médio | Qual programa de debate esportivo da ESPN Brasil reunia comentaristas como Juca Kfouri e José Trajano? | Linha de Passe | programa esportivo de TV paga |
| 2883 | Médio -> Difícil | Qual clube francês manda seus jogos no Estádio Geoffroy-Guichard? | Saint-Étienne | estádio estrangeiro menos famoso |
| 2886 | Fácil -> Médio | Qual clube do ABC paulista foi vice-campeão da Libertadores de 2002? | São Caetano | campanha específica de clube pequeno |
| 2887 | Médio -> Difícil | Qual clube de fora da capital foi, em 1986, o primeiro a quebrar a hegemonia dos grandes no Campeonato Paulista profissional? | Inter de Limeira | título estadual antigo de clube pequeno |
| 2891 | Fácil -> Médio | Qual atacante francês do PSG ganhou a Bola de Ouro de 2025? | Ousmane Dembélé | Bola de Ouro recente |
| 2892 | Fácil -> Médio | Qual técnico assumiu a seleção brasileira em 2024 e caiu nas quartas de final da Copa América daquele ano? | Dorival Júnior | técnico e campanha específica |
| 2893 | Fácil -> Médio | Qual técnico assumiu a seleção depois da Copa de 2010 e levou a equipe à prata olímpica em Londres 2012? | Mano Menezes | técnico e campanha específica |
| 2894 | Médio -> Difícil | Qual atacante mineira da seleção feminina fez sucesso no North Carolina Courage, dos Estados Unidos? | Debinha | futebol feminino, carreira no exterior |
| 2895 | Médio -> Difícil | Qual atacante da seleção feminina, nascida em Araraquara, jogou no futebol da Coreia do Sul e da China? | Bia Zaneratto | futebol feminino, carreira no exterior |
| 2896 | Médio -> Difícil | Qual técnico levou a seleção feminina à medalha de prata em Paris 2024? | Arthur Elias | técnico do futebol feminino |
| 2897 | Médio -> Difícil | Qual brasileira foi eleita a melhor jogadora da liga americana NWSL em 2023, a primeira do país a ganhar o prêmio? | Kerolin | prêmio de liga feminina estrangeira |
| 2898 | Médio -> Difícil | Qual técnico comandou o Brasil na Copa de 1978, que terminou em terceiro lugar e sem derrotas? | Cláudio Coutinho | técnico de Copa antiga |

## Checkpoints
- 02/11 18:43: checkpoint 1 - 25 de 30 lotes aplicados; fácil caindo forte (275 de 3.000 parcial), reportado à gerente.

