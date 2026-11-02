# Fáceis novas e correções - banco Esportes

Base: main em 3331073 (depois da recalibração). Prova: `node esportes/confere-faceis.js` (antigos intactos fora as correções listadas, novas no formato, sem duplicata, fácil >= 20%).

## Resultado
| Nível | Antes | Depois |
|---|---|---|
| Fácil | 265 (8,8%) | 725 (21,0%) |
| Médio | 1489 (49,6%) | 1489 (43,0%) |
| Difícil | 1246 (41,5%) | 1246 (36,0%) |
| Total | 3000 | 3460 |

Novas fáceis: **460** (índices 3000 a 3459, no fim do arquivo; as 3.000 antigas seguem na mesma ordem).

## Como foram feitas
- Escritas por Opus 5.5 em 5 frentes: Seleção e Copas, clubes brasileiros, regras e futebol mundial, outros esportes, e um reforço (cultura do futebol, símbolos, esportes do dia a dia). Cada redator conferiu cada ideia contra as 3.000 do banco e descartou as repetidas.
- Revisão crítica por Opus 5.5, item a item: régua da fácil, fato certo e estável, duplicata, alternativas. Escritas 482, aprovadas 460, reprovadas 22.
- O script de conferência compara texto normalizado e tema + resposta contra todo o banco; 2 pares marcados pelo critério foram conferidos à mão e são fatos diferentes (Copa 2010 x Copa 2026, Senna x Piquet), registrados no script.

## Distribuição por esporte (novas)
Futebol 294 (63,9%), outros 166 (36,1%).
| Esporte | Novas |
|---|---|
| futebol | 294 |
| outros | 62 |
| olimpiadas | 18 |
| volei | 14 |
| tenis | 13 |
| atletismo | 10 |
| f1 | 9 |
| basquete | 8 |
| natacao | 7 |
| ginastica | 7 |
| surfe | 7 |
| judo | 5 |
| skate | 5 |
| ufc | 1 |

## As 5 suspeitas
| # | Situação | Antes | Depois | Fonte |
|---|---|---|---|---|
| 52 | Corrigida | "...até outubro de 2026..." resposta 17 | "...em outubro de 2025, depois do UFC Rio..." resposta 16 (alternativa 17 vira 16) | Band, 11/10/2025: Charles é o maior finalizador do UFC com 16 finalizações; a luta seguinte (UFC 326, 07/03/2026, contra Holloway) foi decisão, sem finalização: https://www.band.com.br/esportes/jogo-aberto/noticias/ufc-rio-charles-do-bronx-vence-e-aumenta-recorde-de-finalizacoes-202510112257 e https://jovempan.com.br/esportes/outros-esportes/ufc-326-charles-do-bronx-vence-por-decisao-unanime-e-e-o-novo-campeao-dos-peso-leve/ |
| 292 | Confirmada, sem mudança | Inglaterra 6 x 4 França | igual | A Crítica e Bem Paraná: Inglaterra 6 a 4 França em 18/07/2026, recorde de gols em disputa de 3º lugar: https://acritica.net/esportes/futebol/inglaterra-vence-franca-6-a-4-terceiro-lugar-copa-2026/ |
| 1079 | Corrigida (desambiguada) | "Qual atacante foi o artilheiro da Copa João Havelange de 2000, com 22 gols?" | "Qual atacante do São Caetano marcou 22 gols na Copa João Havelange de 2000?" | Wikipedia (Copa João Havelange): artilheiro Adhemar, 22 gols; NetVasco lista Romário com 20, por isso "artilheiro" era ambíguo. Com "do São Caetano" e "22 gols" só Adhemar serve (Romário era do Vasco, Magno Alves do Fluminense, Dill do Goiás): https://en.wikipedia.org/wiki/Copa_Jo%C3%A3o_Havelange |
| 1380 | Confirmada, sem mudança | Bam Adebayo, 83 pontos em março de 2026 | igual | NBA.com e CBS Sports: 83 pontos contra os Wizards em 10/03/2026, segunda maior marca da NBA: https://www.nba.com/news/bam-adebayo-83-point-game |
| 2272 | Corrigida | "Por qual time o pivô Nenê foi draftado e estreou na NBA?" | "Por qual time o pivô Nenê estreou na NBA?" | Wikipedia (Nenê): escolhido pelo New York Knicks (7ª escolha de 2002) e trocado com o Denver no dia do draft; estreou pelo Denver: https://en.wikipedia.org/wiki/Nen%C3%AA |

## Reprovadas na revisão (22, não entraram)
| Pergunta | Resposta | Motivo |
|---|---|---|
| Qual goleiro, chamado de "São Marcos" pela torcida, era o titular do Brasil no penta? | Marcos | enunciado entrega a resposta (São Marcos = Marcos) |
| Qual seleção eliminou o Brasil nas quartas de final da Copa de 2018, na Rússia? | Bélgica | régua: eliminação de 2018 pela Bélgica é de torcedor |
| Qual técnico comandou o Brasil na conquista do tri, em 1970? | Zagallo | régua: técnico de 1970 não é conhecido; quase dup #2062 |
| Em qual cidade fica a sede da CBF? | Rio de Janeiro | régua: sede da CBF não é conhecimento geral |
| No Ceará, o Clássico-Rei é disputado entre o Ceará e qual clube? | Fortaleza | duplicata de #2001 (Clássico-Rei Ceará x Fortaleza) |
| Qual estádio de Fortaleza recebe os jogos de Ceará e Fortaleza? | Arena Castelão | duplicata de #2396 (Castelão em Fortaleza) |
| Em 2013, Ronaldinho Gaúcho ganhou a Libertadores jogando por qual clube? | Atlético-MG | régua: Libertadores 2013 do Ronaldinho é de torcedor |
| Em 2024, o zagueiro Thiago Silva voltou ao futebol brasileiro para jogar em qual clube? | Fluminense | régua: clube de Thiago Silva em 2024 é de torcedor |
| Qual é a sigla do árbitro de vídeo, usado para revisar lances polêmicos no futebol? | VAR | alternativas não são siglas, só VAR é sigla |
| Quanto tempo dura o intervalo entre o primeiro e o segundo tempo de um jogo de futebol? | 15 minutos | Duração do intervalo não é fácil para leigo |
| Qual técnico levou a seleção feminina de vôlei aos ouros olímpicos de 2008 e 2012? | Zé Roberto Guimarães | Zé Roberto x Bernardinho confunde leigo; nível médio |
| Fora o tie-break, um set de vôlei termina quando um time chega a quantos pontos, com dois de vantagem? | 25 | Pontos do set é detalhe de regra; médio |
| Quantos títulos mundiais de Fórmula 1 Emerson Fittipaldi conquistou? | 2 | Número de títulos de Emerson não é fácil |
| Em qual prova Thiago Braz ganhou o ouro olímpico na Rio 2016? | Salto com vara | Prova de Thiago Braz é nível médio |
| Em Paris 2024, quais ginastas americanas fizeram reverência a Rebeca Andrade no pódio do solo? | Simone Biles e Jordan Chiles | Jordan Chiles desconhecida do leigo; médio |
| Qual ginasta brasileiro foi campeão olímpico nas argolas em Londres 2012? | Arthur Zanetti | Zanetti nas argolas é nível médio |
| Como se chama o lugar à beira do campo onde ficam os jogadores reservas? | Banco de reservas | Enunciado entrega a resposta (jogadores reservas) |
| Qual é a cor tradicional da camisa principal da seleção da Alemanha? | Branca | Cor da camisa alemã não é fácil para leigo |
| Quantos clubes disputam a Série A do Brasileirão? | 20 | Número de clubes da Série A não é fácil |
| No pódio, quem fica no degrau mais alto? | O campeão | Trivial demais, alternativa O árbitro vira piada |
| Quantos metros tem uma volta na pista oficial de atletismo? | 400 metros | Tamanho da pista não é fácil para leigo |
| O futevôlei mistura quais esportes? | Futebol e vôlei | Nome futevôlei já entrega a resposta |

## Todas as novas (460)
| # | Esporte | Pergunta | Resposta | Alternativas |
|---|---|---|---|---|
| 3000 | futebol | Quantas Copas do Mundo a Seleção Brasileira masculina já conquistou? | 5 | 4 / 5 / 6 / 3 |
| 3001 | futebol | Qual seleção tem mais títulos de Copa do Mundo masculina na história? | Brasil | Alemanha / Itália / Argentina / Brasil |
| 3002 | futebol | Qual é a única seleção que disputou todas as edições da Copa do Mundo masculina? | Brasil | Alemanha / Brasil / Itália / Argentina |
| 3003 | futebol | Em qual Copa do Mundo o Brasil conquistou o pentacampeonato? | 2002 | 1998 / 2006 / 2002 / 1994 |
| 3004 | futebol | Em qual Copa do Mundo o Brasil conquistou o tetracampeonato? | 1994 | 1994 / 1990 / 1998 / 1986 |
| 3005 | futebol | Em qual país o Brasil conquistou o tetra, em 1994? | Estados Unidos | Itália / França / México / Estados Unidos |
| 3006 | futebol | Em qual país o Brasil conquistou o tri, em 1970? | México | Argentina / México / Alemanha / Espanha |
| 3007 | futebol | Contra qual seleção o Brasil jogou a final do penta, em 2002? | Alemanha | Alemanha / Turquia / Itália / França |
| 3008 | futebol | Contra qual seleção o Brasil jogou a final do tetra, em 1994? | Itália | Argentina / Holanda / Itália / Alemanha |
| 3009 | futebol | Como foi decidida a final da Copa de 1994, entre Brasil e Itália? | Nos pênaltis | No tempo normal / Na prorrogação / Com gol de ouro / Nos pênaltis |
| 3010 | futebol | Qual narrador da TV Globo gritou "É tetra! É tetra!" na final da Copa de 1994? | Galvão Bueno | Silvio Luiz / Galvão Bueno / Cléber Machado / Luciano do Valle |
| 3011 | futebol | Qual goleiro era o titular do Brasil na conquista do tetra, em 1994? | Taffarel | Taffarel / Dida / Marcos / Zetti |
| 3012 | futebol | Qual lateral era o capitão e ergueu a taça do penta, em 2002? | Cafu | Roberto Carlos / Júnior / Lúcio / Cafu |
| 3013 | futebol | Qual volante era o capitão e ergueu a taça do tetra, em 1994? | Dunga | Dunga / Mauro Silva / Raí / Mazinho |
| 3014 | futebol | Qual dupla de ataque comandou o Brasil na conquista do tetra, em 1994? | Romário e Bebeto | Ronaldo e Rivaldo / Romário e Bebeto / Careca e Müller / Romário e Edmundo |
| 3015 | futebol | Na Copa de 1994, qual atacante comemorou um gol "embalando um bebê", em homenagem ao filho recém-nascido? | Bebeto | Romário / Raí / Bebeto / Viola |
| 3016 | futebol | Qual era o apelido de Romário, o craque do tetra? | Baixinho | Animal / Imperador / Bruxo / Baixinho |
| 3017 | futebol | Na Copa de 2002, qual craque apareceu com o famoso corte de cabelo apelidado de "Cascão"? | Ronaldo | Ronaldinho Gaúcho / Ronaldo / Rivaldo / Roberto Carlos |
| 3018 | futebol | Qual trio de atacantes ficou conhecido como os "3 Rs" do penta? | Ronaldo, Rivaldo e Ronaldinho | Romário, Rivaldo e Ronaldo / Ronaldo, Robinho e Ronaldinho / Ronaldo, Rivaldo e Ronaldinho / Romário, Raí e Ronaldo |
| 3019 | futebol | Qual técnico comandou o Brasil na conquista do penta, em 2002? | Luiz Felipe Scolari | Carlos Alberto Parreira / Luiz Felipe Scolari / Vanderlei Luxemburgo / Zagallo |
| 3020 | futebol | Por qual apelido é conhecido o técnico Luiz Felipe Scolari? | Felipão | Velho Lobo / Professor / Felipão / Mano |
| 3021 | futebol | Qual era o apelido de Zagallo, campeão do mundo como jogador e como técnico? | Velho Lobo | Velho Lobo / Felipão / Baixinho / Furacão |
| 3022 | futebol | Qual técnico da Seleção ficou famoso pela frase "Vocês vão ter que me engolir", depois de um título em 1997? | Zagallo | Felipão / Parreira / Zagallo / Luxemburgo |
| 3023 | futebol | Qual técnico comandou a Seleção Brasileira nas Copas de 2018 e de 2022? | Tite | Dunga / Felipão / Mano Menezes / Tite |
| 3024 | futebol | Qual é o nome verdadeiro de Pelé? | Edson Arantes do Nascimento | Manoel Francisco dos Santos / Arthur Antunes Coimbra / Edson Arantes do Nascimento / Ronaldo Luís Nazário de Lima |
| 3025 | futebol | Quantas Copas do Mundo Pelé conquistou como jogador? | 3 | 2 / 3 / 4 / 1 |
| 3026 | futebol | Qual é o título pelo qual Pelé é conhecido no mundo inteiro? | Rei do Futebol | Rei do Futebol / Fenômeno / Imperador / Príncipe do Futebol |
| 3027 | futebol | Qual craque vestiu a camisa 10 do Brasil na Copa de 2014, disputada em casa? | Neymar | Oscar / Hulk / Neymar / Fred |
| 3028 | futebol | Na Copa de 2018, qual craque brasileiro virou meme no mundo inteiro por rolar muito no gramado depois das faltas? | Neymar | Gabriel Jesus / Philippe Coutinho / Willian / Neymar |
| 3029 | futebol | Qual lateral-esquerdo do penta era famoso pelo chute fortíssimo nas cobranças de falta? | Roberto Carlos | Roberto Carlos / Branco / Marcelo / Júnior |
| 3030 | futebol | Qual craque do penta ganhou o apelido de "Bruxo" pelas jogadas de mágica? | Ronaldinho Gaúcho | Rivaldo / Ronaldinho Gaúcho / Kaká / Denílson |
| 3031 | futebol | Qual destes craques brasileiros nunca ganhou uma Copa do Mundo? | Zico | Romário / Ronaldo / Zico / Pelé |
| 3032 | futebol | Qual destes craques nunca ganhou uma Copa do Mundo? | Cristiano Ronaldo | Lionel Messi / Zinédine Zidane / Ronaldo Fenômeno / Cristiano Ronaldo |
| 3033 | futebol | Em qual estádio aconteceu o 7 a 1 da Alemanha sobre o Brasil? | Mineirão | Maracanã / Mineirão / Arena Corinthians / Castelão |
| 3034 | futebol | Em qual fase da Copa de 2014 o Brasil perdeu de 7 a 1 para a Alemanha? | Semifinal | Oitavas de final / Quartas de final / Final / Semifinal |
| 3035 | futebol | O famoso 7 a 1 da Alemanha sobre o Brasil aconteceu em qual Copa do Mundo? | 2014 | 2014 / 2010 / 2018 / 2006 |
| 3036 | futebol | Em referência ao Maracanaço, como ficou conhecido o 7 a 1 de 2014? | Mineiraço | Mineiraço / Alemanaço / Tragédia do Mineirão / Sarriá |
| 3037 | futebol | O "Maracanaço" foi a derrota do Brasil para qual seleção, na decisão da Copa no Maracanã? | Uruguai | Argentina / Itália / Uruguai / Paraguai |
| 3038 | futebol | Em qual Copa do Mundo aconteceu o Maracanaço? | 1950 | 1954 / 1950 / 1962 / 1938 |
| 3039 | futebol | Em quais anos o Brasil sediou a Copa do Mundo masculina? | 1950 e 2014 | 1950 e 2010 / 1938 e 2014 / 1962 e 2014 / 1950 e 2014 |
| 3040 | futebol | Qual estádio do Rio de Janeiro foi construído para a Copa do Mundo de 1950? | Maracanã | Maracanã / São Januário / Engenhão / Laranjeiras |
| 3041 | futebol | Em qual cidade foi o jogo de abertura da Copa do Mundo de 2014? | São Paulo | Rio de Janeiro / Brasília / São Paulo / Belo Horizonte |
| 3042 | futebol | Como se chamava o mascote da Copa do Mundo de 2014, no Brasil? | Fuleco | Zakumi / Fuleco / Zabivaka / Footix |
| 3043 | futebol | Qual animal brasileiro inspirou o mascote da Copa de 2014? | Tatu-bola | Mico-leão-dourado / Arara-azul / Onça-pintada / Tatu-bola |
| 3044 | futebol | Qual era o nome da bola oficial da Copa do Mundo de 2014, no Brasil? | Brazuca | Jabulani / Brazuca / Telstar / Al Rihla |
| 3045 | futebol | Qual cantora colombiana cantou "Waka Waka", a música-tema da Copa de 2010? | Shakira | Shakira / Jennifer Lopez / Anitta / Beyoncé |
| 3046 | futebol | Qual corneta de plástico, de som barulhento, virou símbolo da Copa de 2010? | Vuvuzela | Matraca / Vuvuzela / Reco-reco / Apito |
| 3047 | futebol | Qual país sediou a Copa do Mundo de 2010, a primeira no continente africano? | África do Sul | Egito / Nigéria / África do Sul / Marrocos |
| 3048 | futebol | Qual país do Oriente Médio sediou a Copa do Mundo de 2022? | Catar | Catar / Emirados Árabes Unidos / Arábia Saudita / Egito |
| 3049 | futebol | Por causa do calor, a Copa de 2022 foi disputada em quais meses? | Novembro e dezembro | Junho e julho / Março e abril / Novembro e dezembro / Janeiro e fevereiro |
| 3050 | futebol | Qual país sediou a Copa do Mundo de 2018? | Rússia | Alemanha / Rússia / Catar / França |
| 3051 | futebol | Qual país sediou a Copa do Mundo de 2006? | Alemanha | França / Itália / Inglaterra / Alemanha |
| 3052 | futebol | Quais países sediaram juntos a Copa do Mundo de 2026? | Estados Unidos, México e Canadá | Estados Unidos, México e Canadá / Estados Unidos e México / Estados Unidos e Canadá / México, Canadá e Cuba |
| 3053 | futebol | Quais países foram escolhidos como sedes principais da Copa do Mundo de 2030? | Espanha, Portugal e Marrocos | Inglaterra, Escócia e País de Gales / Espanha, Portugal e Marrocos / Argentina, Uruguai e Chile / Itália, França e Suíça |
| 3054 | futebol | Para qual seleção, dona da casa, o Brasil perdeu a final da Copa de 1998? | França | Itália / Holanda / Alemanha / França |
| 3055 | futebol | Qual seleção foi campeã da Copa do Mundo de 2022, no Catar? | Argentina | França / Argentina / Croácia / Marrocos |
| 3056 | futebol | Qual craque ergueu, como capitão, a taça da Copa de 2022 para a Argentina? | Lionel Messi | Lionel Messi / Di María / Sergio Agüero / Diego Maradona |
| 3057 | futebol | Qual seleção foi campeã da Copa do Mundo de 2018, na Rússia? | França | Croácia / Bélgica / França / Inglaterra |
| 3058 | futebol | Qual jovem atacante francês foi campeão do mundo em 2018, com apenas 19 anos? | Kylian Mbappé | Antoine Griezmann / Olivier Giroud / Karim Benzema / Kylian Mbappé |
| 3059 | futebol | Qual seleção foi campeã da Copa do Mundo de 2010, na África do Sul? | Espanha | Espanha / Holanda / Alemanha / Itália |
| 3060 | futebol | Qual seleção foi campeã da Copa do Mundo de 2006, na Alemanha? | Itália | França / Itália / Alemanha / Portugal |
| 3061 | futebol | Qual craque argentino fez o famoso gol de mão, a "mão de Deus", na Copa de 1986? | Diego Maradona | Lionel Messi / Gabriel Batistuta / Mario Kempes / Diego Maradona |
| 3062 | futebol | Qual destas seleções nunca ganhou uma Copa do Mundo? | Holanda | Alemanha / Itália / Holanda / Brasil |
| 3063 | futebol | Qual seleção, de camisa laranja, ganhou o apelido de "Laranja Mecânica"? | Holanda | Holanda / Bélgica / Costa do Marfim / Dinamarca |
| 3064 | futebol | A Copa do Mundo de futebol masculino é disputada de quantos em quantos anos? | 4 | 2 / 3 / 5 / 4 |
| 3065 | futebol | O que significa a sigla CBF, entidade que comanda a Seleção? | Confederação Brasileira de Futebol | Confederação Brasileira de Futebol / Comissão Brasileira de Futebol / Central Brasileira de Futebol / Conselho Brasileiro de Futebol |
| 3066 | futebol | Qual é a cor da camisa principal da Seleção Brasileira? | Amarela | Verde / Azul / Amarela / Branca |
| 3067 | futebol | Qual é a cor do calção do uniforme principal da Seleção Brasileira? | Azul | Verde / Branco / Amarelo / Azul |
| 3068 | futebol | Qual é a cor da camisa reserva tradicional da Seleção Brasileira? | Azul | Azul / Verde / Branca / Preta |
| 3069 | futebol | Qual é a cor do meião do uniforme principal da Seleção Brasileira? | Branco | Amarelo / Branco / Verde / Preto |
| 3070 | futebol | Por causa da camisa amarela, a Seleção Brasileira ganhou o apelido de qual passarinho? | Canarinho | Sabiá / Bem-te-vi / Canarinho / Beija-flor |
| 3071 | futebol | Qual é o mascote oficial da Seleção Brasileira, que virou meme pela cara de bravo? | Canarinho Pistola | Fuleco / Canarinho Pistola / Zé Carioca / Tatu Bravo |
| 3072 | futebol | Como a torcida chama o sexto título mundial, tão esperado pelo Brasil? | Hexa | Hexa / Penta / Septa / Octa |
| 3073 | futebol | Depois do tri de 1970, o Brasil ganhou a posse definitiva de qual taça? | Jules Rimet | Taça Libertadores / Taça Guanabara / Copa América / Jules Rimet |
| 3074 | futebol | De qual metal é feita a taça entregue hoje ao campeão da Copa do Mundo? | Ouro | Prata / Ouro / Bronze / Platina |
| 3075 | futebol | Qual seleção eliminou o Brasil nos pênaltis, nas quartas de final da Copa de 2022? | Croácia | Argentina / França / Marrocos / Croácia |
| 3076 | futebol | Qual marchinha embalou a torcida brasileira na conquista do tri, em 1970? | Pra Frente Brasil | Aquarela do Brasil / País Tropical / Pra Frente Brasil / Coração Verde e Amarelo |
| 3077 | futebol | Em qual edição dos Jogos Olímpicos a Seleção masculina ganhou o primeiro ouro no futebol? | Rio 2016 | Atlanta 1996 / Pequim 2008 / Londres 2012 / Rio 2016 |
| 3078 | futebol | O estádio Mané Garrincha, sede da Copa de 2014, fica em qual cidade? | Brasília | Brasília / Rio de Janeiro / Goiânia / Belo Horizonte |
| 3079 | futebol | A Arena Fonte Nova, sede da Copa de 2014, fica em qual cidade? | Salvador | Recife / Salvador / Fortaleza / Natal |
| 3080 | futebol | A Arena Pantanal, sede da Copa de 2014, fica em qual cidade? | Cuiabá | Campo Grande / Goiânia / Cuiabá / Manaus |
| 3081 | futebol | Por causa do fuso horário, em que período do dia os jogos do penta passavam no Brasil? | De madrugada e de manhã | De madrugada e de manhã / À tarde / À noite / Na hora do almoço |
| 3082 | futebol | Qual seleção é considerada a maior rival da Seleção Brasileira? | Argentina | Uruguai / Argentina / Alemanha / Itália |
| 3083 | futebol | Quantas vezes o Brasil foi campeão do mundo jogando em casa? | Nenhuma | Uma / Duas / Nenhuma / Três |
| 3084 | futebol | Qual craque do tetra entrou para a política e foi eleito senador pelo Rio de Janeiro? | Romário | Bebeto / Romário / Dunga / Raí |
| 3085 | futebol | Qual atacante do tetra foi cortado da Copa de 1998 por lesão e chorou numa entrevista famosa? | Romário | Bebeto / Edmundo / Ronaldo / Romário |
| 3086 | futebol | Qual atacante da Seleção tem o apelido de "Pombo" e fez um golaço de voleio na Copa de 2022? | Richarlison | Richarlison / Vinícius Júnior / Raphinha / Gabriel Jesus |
| 3087 | futebol | Qual seleção europeia é chamada de "Fúria"? | Espanha | Portugal / Itália / Alemanha / Espanha |
| 3088 | futebol | Qual craque italiano, de rabo de cavalo, chutou por cima do gol o último pênalti da final de 1994? | Roberto Baggio | Roberto Baggio / Paolo Maldini / Franco Baresi / Alessandro Del Piero |
| 3089 | futebol | Qual técnico italiano, multicampeão pelo Real Madrid, assumiu a Seleção Brasileira em 2025? | Carlo Ancelotti | Carlo Ancelotti / Fabio Capello / Marcello Lippi / Roberto Mancini |
| 3090 | futebol | Por que as Copas do Mundo de 1942 e 1946 não foram disputadas? | Por causa da Segunda Guerra Mundial | Por causa da Primeira Guerra Mundial / Por causa da Segunda Guerra Mundial / Por causa da gripe espanhola / Por falta de país-sede |
| 3091 | futebol | Qual cantora baiana se apresentou com Pitbull e Jennifer Lopez na abertura da Copa de 2014? | Claudia Leitte | Ivete Sangalo / Daniela Mercury / Anitta / Claudia Leitte |
| 3092 | futebol | Qual cantor porto-riquenho fez sucesso com "La Copa de la Vida", música da Copa de 1998? | Ricky Martin | Enrique Iglesias / Ricky Martin / Luis Fonsi / Marc Anthony |
| 3093 | futebol | Qual país é conhecido no mundo como "o país do futebol"? | Brasil | Argentina / Inglaterra / Brasil / Itália |
| 3094 | futebol | Qual clube paulista é chamado pela torcida de "Timão"? | Corinthians | Corinthians / Palmeiras / Santos / São Paulo |
| 3095 | futebol | Qual clube paulista é chamado de "Verdão"? | Palmeiras | São Paulo / Palmeiras / Corinthians / Santos |
| 3096 | futebol | Qual clube é chamado pela torcida de "Peixe"? | Santos | Grêmio / Vasco / Santos / Cruzeiro |
| 3097 | futebol | Qual clube é chamado pela torcida de "Galo"? | Atlético-MG | Cruzeiro / Bahia / Grêmio / Atlético-MG |
| 3098 | futebol | Qual clube mineiro é chamado de "Raposa"? | Cruzeiro | Cruzeiro / Atlético-MG / América-MG / Uberlândia |
| 3099 | futebol | Qual clube gaúcho é chamado de "Colorado"? | Internacional | Grêmio / Internacional / Juventude / Caxias |
| 3100 | futebol | Qual clube carioca é chamado de "Gigante da Colina"? | Vasco | Botafogo / Fluminense / Vasco / Flamengo |
| 3101 | futebol | Qual clube carioca é o "Tricolor das Laranjeiras"? | Fluminense | Flamengo / Botafogo / Vasco / Fluminense |
| 3102 | futebol | Qual clube é chamado de "Imortal Tricolor"? | Grêmio | Grêmio / Internacional / Fluminense / Bahia |
| 3103 | futebol | Qual clube paulista é conhecido como "Tricolor"? | São Paulo | Corinthians / São Paulo / Palmeiras / Santos |
| 3104 | futebol | Qual clube carioca a torcida chama de "Mengão"? | Flamengo | Vasco / Botafogo / Flamengo / Fluminense |
| 3105 | futebol | A torcida organizada Gaviões da Fiel, que também é escola de samba, é de qual clube? | Corinthians | Palmeiras / São Paulo / Santos / Corinthians |
| 3106 | futebol | Quais clubes disputam o Fla-Flu? | Flamengo e Fluminense | Flamengo e Fluminense / Flamengo e Vasco / Fluminense e Botafogo / Flamengo e Botafogo |
| 3107 | futebol | Quais clubes disputam o Gre-Nal? | Grêmio e Internacional | Grêmio e Juventude / Grêmio e Internacional / Internacional e Caxias / Grêmio e Coritiba |
| 3108 | futebol | Quais clubes disputam o Ba-Vi? | Bahia e Vitória | Botafogo e Vasco / Bahia e Fortaleza / Bahia e Vitória / Vitória e Sport |
| 3109 | futebol | Quais clubes disputam o chamado Clássico dos Milhões? | Flamengo e Vasco | Fluminense e Botafogo / Corinthians e Palmeiras / Grêmio e Internacional / Flamengo e Vasco |
| 3110 | futebol | Quais clubes disputam o Dérbi Paulista? | Corinthians e Palmeiras | Corinthians e Palmeiras / São Paulo e Santos / Palmeiras e Santos / Corinthians e São Paulo |
| 3111 | futebol | Quais clubes disputam o Atletiba? | Athletico e Coritiba | Atlético-MG e Cruzeiro / Athletico e Coritiba / Atlético-GO e Goiás / Athletico e Avaí |
| 3112 | futebol | Quais clubes disputam o Re-Pa, clássico do Pará? | Remo e Paysandu | Sport e Náutico / Ceará e Fortaleza / Remo e Paysandu / Bahia e Vitória |
| 3113 | futebol | Grêmio e Internacional são de qual cidade? | Porto Alegre | Porto Alegre / Curitiba / Florianópolis / Caxias do Sul |
| 3114 | futebol | Bahia e Vitória são de qual cidade? | Salvador | Recife / Salvador / Fortaleza / Aracaju |
| 3115 | futebol | Sport, Náutico e Santa Cruz são de qual cidade? | Recife | Natal / Salvador / Recife / Fortaleza |
| 3116 | futebol | Remo e Paysandu são de qual cidade? | Belém | Manaus / São Luís / Macapá / Belém |
| 3117 | futebol | Athletico Paranaense e Coritiba são de qual cidade? | Curitiba | Curitiba / Londrina / Florianópolis / Porto Alegre |
| 3118 | futebol | Atlético-MG e Cruzeiro são de qual cidade? | Belo Horizonte | Uberlândia / Belo Horizonte / Juiz de Fora / Goiânia |
| 3119 | futebol | A Chapecoense é um clube de qual estado? | Santa Catarina | Paraná / Rio Grande do Sul / Santa Catarina / Mato Grosso do Sul |
| 3120 | futebol | O Goiás Esporte Clube é de qual cidade? | Goiânia | Brasília / Cuiabá / Anápolis / Goiânia |
| 3121 | futebol | O Fortaleza Esporte Clube é de qual estado? | Ceará | Ceará / Rio Grande do Norte / Pernambuco / Bahia |
| 3122 | futebol | Corinthians, Palmeiras, São Paulo e Santos são os quatro grandes de qual estado? | São Paulo | Rio de Janeiro / São Paulo / Minas Gerais / Paraná |
| 3123 | futebol | Quais são as cores do Palmeiras? | Verde e branco | Azul e branco / Vermelho e preto / Verde e branco / Preto e branco |
| 3124 | futebol | Quais são as cores do Internacional, de Porto Alegre? | Vermelho e branco | Azul, preto e branco / Verde e branco / Preto e branco / Vermelho e branco |
| 3125 | futebol | Quais são as cores do Cruzeiro? | Azul e branco | Azul e branco / Preto e branco / Vermelho e branco / Verde e branco |
| 3126 | futebol | Quais são as cores do Grêmio? | Azul, preto e branco | Vermelho e branco / Azul, preto e branco / Verde e branco / Vermelho, branco e preto |
| 3127 | futebol | Quais são as cores do São Paulo Futebol Clube? | Vermelho, branco e preto | Verde, branco e grená / Azul, vermelho e branco / Vermelho, branco e preto / Azul, preto e branco |
| 3128 | futebol | Quais são as três cores do Fluminense? | Verde, branco e grená | Azul, preto e branco / Vermelho, branco e preto / Azul, vermelho e branco / Verde, branco e grená |
| 3129 | futebol | Quais são as cores do Corinthians? | Preto e branco | Preto e branco / Verde e branco / Vermelho e preto / Azul e branco |
| 3130 | futebol | Quais são as cores do Atlético-MG? | Preto e branco | Azul e branco / Preto e branco / Verde e branco / Vermelho e preto |
| 3131 | futebol | Quais são as três cores do Bahia? | Azul, vermelho e branco | Vermelho, branco e preto / Verde, branco e grená / Azul, vermelho e branco / Azul, preto e branco |
| 3132 | futebol | O Vitória, de Salvador, joga com quais cores? | Vermelho e preto | Azul e branco / Verde e branco / Preto e branco / Vermelho e preto |
| 3133 | futebol | Qual destes clubes pernambucanos é rubro-negro, de vermelho e preto? | Sport | Sport / Náutico / Santa Cruz / Central |
| 3134 | futebol | Qual é a cor da camisa principal do Santos? | Branca | Verde / Branca / Azul / Vermelha |
| 3135 | futebol | Qual símbolo aparece no escudo do Botafogo? | Estrela solitária | Cruz de Malta / Âncora / Estrela solitária / Coroa |
| 3136 | futebol | As estrelas do escudo do Cruzeiro representam qual constelação? | Cruzeiro do Sul | Órion / Escorpião / Três Marias / Cruzeiro do Sul |
| 3137 | futebol | Qual santo é o padroeiro do Corinthians? | São Jorge | São Jorge / São Judas Tadeu / Santo Antônio / São Sebastião |
| 3138 | futebol | Qual animal a torcida do Palmeiras adotou como mascote? | Porco | Leão / Porco / Tigre / Raposa |
| 3139 | futebol | Qual ave é o mascote do Flamengo? | Urubu | Galo / Gavião / Urubu / Coruja |
| 3140 | futebol | O estádio do Morumbi pertence a qual clube? | São Paulo | Corinthians / Palmeiras / Santos / São Paulo |
| 3141 | futebol | A Vila Belmiro é o estádio de qual clube? | Santos | Santos / Portuguesa / Corinthians / Ponte Preta |
| 3142 | futebol | São Januário é o estádio de qual clube carioca? | Vasco | Botafogo / Vasco / Fluminense / Flamengo |
| 3143 | futebol | O estádio Beira-Rio, em Porto Alegre, é a casa de qual clube? | Internacional | Grêmio / Juventude / Internacional / Caxias |
| 3144 | futebol | O Estádio Nilton Santos, o Engenhão, é a casa de qual clube carioca? | Botafogo | Flamengo / Vasco / Fluminense / Botafogo |
| 3145 | futebol | A Neo Química Arena, apelidada de Itaquerão, é a casa de qual clube? | Corinthians | Corinthians / São Paulo / Palmeiras / Santos |
| 3146 | futebol | Qual clube baiano manda seus jogos na Arena Fonte Nova? | Bahia | Vitória / Bahia / Jacuipense / Juazeirense |
| 3147 | futebol | Em qual cidade fica o estádio do Pacaembu? | São Paulo | Santos / Campinas / Rio de Janeiro / São Paulo |
| 3148 | futebol | A Arena da Baixada, em Curitiba, é a casa de qual clube? | Athletico Paranaense | Athletico Paranaense / Coritiba / Paraná Clube / Londrina |
| 3149 | futebol | Roberto Dinamite é o maior ídolo da história de qual clube? | Vasco | Fluminense / Vasco / Botafogo / Flamengo |
| 3150 | futebol | O goleiro Marcos, chamado pela torcida de "São Marcos", é ídolo de qual clube? | Palmeiras | Corinthians / São Paulo / Palmeiras / Santos |
| 3151 | futebol | Em 2007, Romário comemorou o seu milésimo gol vestindo a camisa de qual clube? | Vasco | Flamengo / Fluminense / Botafogo / Vasco |
| 3152 | futebol | O atacante Fred é ídolo de qual clube carioca? | Fluminense | Fluminense / Botafogo / Vasco / Flamengo |
| 3153 | futebol | Antes de ir para o Real Madrid, o atacante Endrick foi revelado por qual clube? | Palmeiras | Santos / São Paulo / Corinthians / Palmeiras |
| 3154 | futebol | O nome do Vasco homenageia qual navegador português? | Vasco da Gama | Vasco da Gama / Pedro Álvares Cabral / Fernão de Magalhães / Bartolomeu Dias |
| 3155 | futebol | O Palmeiras foi fundado por imigrantes de qual país? | Itália | Portugal / Itália / Espanha / Alemanha |
| 3156 | futebol | Em 2024, qual clube carioca ganhou a Libertadores pela primeira vez? | Botafogo | Vasco / Fluminense / Botafogo / Flamengo |
| 3157 | futebol | Em 2023, qual clube carioca ganhou a Libertadores pela primeira vez, no Maracanã? | Fluminense | Botafogo / Vasco / Flamengo / Fluminense |
| 3158 | futebol | Em 2019, um incêndio no centro de treinamento Ninho do Urubu matou dez jovens da base de qual clube? | Flamengo | Flamengo / Vasco / Fluminense / Botafogo |
| 3159 | futebol | No nome de clubes como Flamengo e Vasco, a palavra "Regatas" vem de qual esporte? | Remo | Natação / Atletismo / Remo / Ciclismo |
| 3160 | futebol | Quantos jogadores cada time tem em campo no início de uma partida de futebol? | 11 | 9 / 10 / 11 / 12 |
| 3161 | futebol | Sem contar os acréscimos, quanto tempo dura uma partida de futebol profissional? | 90 minutos | 90 minutos / 60 minutos / 80 minutos / 100 minutos |
| 3162 | futebol | O que acontece com o jogador que recebe o cartão vermelho? | É expulso do jogo | Leva só uma advertência / Fica 10 minutos fora / Cobra um pênalti / É expulso do jogo |
| 3163 | futebol | Quantos cartões amarelos na mesma partida fazem um jogador ser expulso? | 2 | 1 / 2 / 3 / 4 |
| 3164 | futebol | Qual cor de cartão o juiz mostra para advertir um jogador, sem expulsá-lo? | Amarelo | Vermelho / Verde / Amarelo / Azul |
| 3165 | futebol | Qual jogador pode pegar a bola com as mãos dentro da própria área? | Goleiro | Zagueiro / Goleiro / Lateral / Capitão |
| 3166 | futebol | Como se chama o gol marcado direto da cobrança de escanteio, sem ninguém tocar na bola? | Gol olímpico | Gol de placa / Gol de ouro / Gol contra / Gol olímpico |
| 3167 | futebol | Quando um jogador faz três gols na mesma partida, como se chama o feito? | Hat-trick | Hat-trick / Gol olímpico / Gol de honra / Gol contra |
| 3168 | futebol | No futebol, o que é um "frango"? | Uma falha do goleiro em bola fácil | Um chute forte de fora da área / Um drible por baixo das pernas / Uma falha do goleiro em bola fácil / Uma falta violenta por trás |
| 3169 | futebol | O que é dar um "chapéu" no adversário? | Passar a bola por cima da cabeça dele | Passar a bola entre as pernas dele / Dar uma cabeçada nele / Tirar a bola dele com um carrinho / Passar a bola por cima da cabeça dele |
| 3170 | futebol | Como se chama o chute de costas, com o corpo no ar, que joga a bola por cima da própria cabeça? | Bicicleta | Peixinho / Bicicleta / Letra / Trivela |
| 3171 | futebol | Como se chama o drible em que a bola passa entre as pernas do adversário? | Caneta | Chapéu / Elástico / Caneta / Lambreta |
| 3172 | futebol | Quando a bola sai pela linha de fundo depois de tocar por último num defensor, o juiz marca o quê? | Escanteio | Tiro de meta / Lateral / Pênalti / Escanteio |
| 3173 | futebol | Quando o atacante chuta para fora pela linha de fundo, como o jogo recomeça? | Tiro de meta | Tiro de meta / Escanteio / Bola ao chão / Arremesso lateral |
| 3174 | futebol | Qual reposição de bola o jogador de linha faz com as mãos? | Arremesso lateral | Escanteio / Arremesso lateral / Tiro de meta / Cobrança de falta |
| 3175 | futebol | Uma falta cometida pelo defensor dentro da própria grande área vira o quê? | Pênalti | Escanteio / Tiro de meta / Pênalti / Arremesso lateral |
| 3176 | futebol | A quantos metros do gol fica a marca do pênalti? | 11 metros | 9 metros / 16 metros / 20 metros / 11 metros |
| 3177 | futebol | Somando os dois tempos, quanto dura a prorrogação de um jogo de futebol? | 30 minutos | 10 minutos / 30 minutos / 20 minutos / 45 minutos |
| 3178 | futebol | Numa disputa de pênaltis, quantas cobranças cada time bate na série inicial? | 5 | 3 / 7 / 5 / 11 |
| 3179 | futebol | Como se chama o tempo extra que o juiz dá no fim de cada tempo para compensar as paralisações? | Acréscimos | Acréscimos / Prorrogação / Intervalo / Morte súbita |
| 3180 | futebol | Qual infração é marcada quando o atacante, na hora do passe, já está atrás da última linha da defesa adversária? | Impedimento | Mão na bola / Impedimento / Jogo perigoso / Falta de ataque |
| 3181 | futebol | Como é chamado popularmente o auxiliar que corre na lateral do campo e levanta uma bandeira para marcar impedimento? | Bandeirinha | Quarto árbitro / Gandula / Bandeirinha / Delegado da partida |
| 3182 | futebol | Depois de um gol, de onde a partida recomeça? | Do centro do campo | Da marca do pênalti / Do centro do campo / Da pequena área / Da bandeira de escanteio |
| 3183 | futebol | Como se chama o gol que um jogador faz, sem querer, contra o próprio time? | Gol contra | Gol de honra / Gol olímpico / Gol contra / Gol de placa |
| 3184 | futebol | Na maioria dos campeonatos de futebol, quantos pontos vale uma vitória? | 3 pontos | 1 ponto / 2 pontos / 3 pontos / 4 pontos |
| 3185 | futebol | Qual posição joga no meio da defesa, à frente do goleiro, com a missão principal de evitar os gols? | Zagueiro | Ponta / Centroavante / Meia / Zagueiro |
| 3186 | futebol | Qual posição joga pelos lados do campo, defendendo e apoiando o ataque pelas beiradas? | Lateral | Lateral / Volante / Centroavante / Goleiro |
| 3187 | futebol | Qual número de camisa é tradicionalmente usado pelo goleiro titular? | 1 | 5 / 1 / 9 / 10 |
| 3188 | futebol | Qual número de camisa é o mais tradicional do craque do time, eternizado por Pelé? | 10 | 7 / 9 / 11 / 10 |
| 3189 | futebol | Qual número de camisa é tradicionalmente usado pelo centroavante, o "homem-gol" do time? | 9 | 9 / 4 / 1 / 6 |
| 3190 | futebol | Como se chama o jogador que mais faz gols num campeonato? | Artilheiro | Capitão / Artilheiro / Lanterna / Xerife |
| 3191 | futebol | Como se chama o time que está em último lugar na tabela de um campeonato? | Lanterna | Vice / Zebra / Lanterna / Líder |
| 3192 | futebol | No futebol, o que quer dizer "deu zebra"? | Aconteceu um resultado inesperado | O favorito goleou / O jogo terminou empatado / O juiz errou um lance / Aconteceu um resultado inesperado |
| 3193 | futebol | Nas estatísticas do futebol, como se chama o último passe antes de um gol? | Assistência | Assistência / Desarme / Finalização / Defesa |
| 3194 | futebol | Como se chama a pessoa que fica atrás do gol e na beira do campo recolhendo a bola quando ela sai? | Gandula | Massagista / Gandula / Roupeiro / Bandeirinha |
| 3195 | futebol | O que o capitão do time usa no braço para ser identificado em campo? | Uma braçadeira | Um relógio / Uma munhequeira / Uma braçadeira / Uma pulseira de borracha |
| 3196 | futebol | Como se chama a fila de jogadores que se forma na frente da bola para atrapalhar uma cobrança de falta? | Barreira | Muralha / Paredão / Retranca / Barreira |
| 3197 | futebol | Como se chama a entrada em que o jogador desliza no gramado para tirar a bola do adversário? | Carrinho | Carrinho / Chapéu / Caneta / Lençol |
| 3198 | futebol | Como se chama a troca rápida de passes curtos entre dois jogadores para furar a marcação? | Tabelinha | Chuveirinho / Tabelinha / Retranca / Banheira |
| 3199 | futebol | Como se chama a bola cruzada pelo alto na área, para alguém tentar cabecear? | Chuveirinho | Tabelinha / Bicicleta / Chuveirinho / Cavadinha |
| 3200 | futebol | Quando um time fica todo atrás, só se defendendo, dizem que ele está jogando na... | Retranca | Banheira / Pelada / Várzea / Retranca |
| 3201 | futebol | Como se chama a brincadeira de manter a bola no ar, sem deixar cair, usando pés, coxas e cabeça? | Embaixadinha | Embaixadinha / Pedalada / Elástico / Trivela |
| 3202 | futebol | Como se chama a cabeçada em que o jogador se joga para a frente, com o corpo quase paralelo ao chão? | Peixinho | Bicicleta / Peixinho / Voleio / Letra |
| 3203 | futebol | Como se chama o jogo de futebol informal, entre amigos, sem nada em disputa? | Pelada | Clássico / Decisão / Pelada / Mata-mata |
| 3204 | futebol | Como se chama o jogo entre dois rivais tradicionais, como Grêmio x Internacional ou Vasco x Botafogo? | Clássico | Amistoso / Torneio / Pelada / Clássico |
| 3205 | futebol | Como se chama o formato de torneio em que quem perde está eliminado? | Mata-mata | Mata-mata / Pontos corridos / Turno único / Quadrangular |
| 3206 | futebol | Como o torcedor chama o resultado decidido fora de campo, nos tribunais esportivos? | Tapetão | Zebra / Tapetão / Catimba / Virada |
| 3207 | futebol | Como se chama a queda de um time para a divisão de baixo do campeonato? | Rebaixamento | Acesso / Promoção / Rebaixamento / Classificação |
| 3208 | futebol | De qual país é Lionel Messi? | Argentina | Uruguai / Espanha / Argentina / Chile |
| 3209 | futebol | De qual país é Cristiano Ronaldo? | Portugal | Portugal / Espanha / Brasil / Itália |
| 3210 | futebol | Em qual clube Messi se consagrou, jogando lá desde a adolescência? | Barcelona | Real Madrid / Juventus / Boca Juniors / Barcelona |
| 3211 | futebol | Real Madrid e Barcelona, rivais do famoso "El Clásico", são clubes de qual país? | Espanha | Portugal / Espanha / México / Itália |
| 3212 | futebol | O Manchester United é um clube de qual país? | Inglaterra | Estados Unidos / Escócia / Irlanda / Inglaterra |
| 3213 | futebol | A Juventus, gigante europeu de camisa listrada em preto e branco, é de qual país? | Itália | Itália / França / Portugal / Espanha |
| 3214 | futebol | O Bayern de Munique é um clube de qual país? | Alemanha | Áustria / Holanda / Alemanha / Suíça |
| 3215 | futebol | Em 2017, Neymar deixou o Barcelona na transferência mais cara da história. Para qual clube ele foi? | PSG | Real Madrid / PSG / Manchester City / Chelsea |
| 3216 | futebol | O que é a Champions League? | Um torneio entre os melhores clubes da Europa | Um campeonato de seleções da Europa / O campeonato nacional da Inglaterra / Um torneio entre os melhores clubes da Europa / Uma copa entre clubes da América do Sul |
| 3217 | futebol | Qual prêmio elege o melhor jogador de futebol do mundo na temporada? | Bola de Ouro | Chuteira de Ouro / Luva de Ouro / Prêmio Puskás / Bola de Ouro |
| 3218 | futebol | Qual clube é o maior campeão da história da Champions League? | Real Madrid | Real Madrid / Milan / Barcelona / Bayern de Munique |
| 3219 | futebol | Qual sigla, com as iniciais e o número da camisa, virou o apelido de Cristiano Ronaldo? | CR7 | CR9 / RC7 / CR7 / CR10 |
| 3220 | futebol | Qual craque ficou famoso pela comemoração em que salta, gira no ar e grita "Siuuu"? | Cristiano Ronaldo | Lionel Messi / Neymar / Kylian Mbappé / Cristiano Ronaldo |
| 3221 | futebol | No fim de 2022, Cristiano Ronaldo trocou a Europa pelo futebol de qual país? | Arábia Saudita | Estados Unidos / Arábia Saudita / Catar / China |
| 3222 | futebol | Em 2023, Messi deixou a Europa para jogar em qual país? | Estados Unidos | Argentina / Arábia Saudita / Estados Unidos / México |
| 3223 | futebol | Qual craque argentino, maior ídolo da história do Napoli, morreu em novembro de 2020? | Diego Maradona | Gabriel Batistuta / Diego Maradona / Juan Román Riquelme / Mario Kempes |
| 3224 | futebol | A Premier League é o campeonato nacional de futebol de qual país? | Inglaterra | Espanha / Itália / Inglaterra / Alemanha |
| 3225 | futebol | Em qual país surgiu o futebol moderno, com as primeiras regras escritas, no século 19? | Inglaterra | Inglaterra / Brasil / Itália / Uruguai |
| 3226 | futebol | O inglês David Beckham é casado com Victoria, ex-integrante de qual grupo pop? | Spice Girls | Destiny's Child / Spice Girls / Pussycat Dolls / Girls Aloud |
| 3227 | futebol | De qual país é o atacante Kylian Mbappé? | França | Bélgica / Senegal / Camarões / França |
| 3228 | futebol | Por qual apelido ficou mundialmente conhecido o atacante Ronaldo, ex-Barcelona, Inter de Milão e Real Madrid? | Fenômeno | Fenômeno / Baixinho / Imperador / Animal |
| 3229 | futebol | O estádio Camp Nou é a casa de qual clube espanhol? | Barcelona | Real Madrid / Atlético de Madrid / Barcelona / Valencia |
| 3230 | futebol | Qual atacante brasileiro, apelidado de "Imperador", virou ídolo da Inter de Milão? | Adriano | Robinho / Kaká / Ronaldo / Adriano |
| 3231 | futebol | A Eurocopa é um torneio disputado por quem? | Seleções da Europa | Clubes da Europa / Seleções da Europa / Clubes da América do Sul / Seleções do mundo todo |
| 3232 | futebol | Qual entidade comanda o futebol mundial e organiza a Copa do Mundo? | FIFA | UEFA / Conmebol / FIFA / CBF |
| 3233 | futebol | Qual entidade do futebol europeu organiza a Champions League? | UEFA | UEFA / FIFA / Conmebol / CBF |
| 3234 | futebol | Pelé encerrou a carreira jogando por qual clube dos Estados Unidos? | Cosmos | LA Galaxy / Inter Miami / Cosmos / Chicago Fire |
| 3235 | futebol | Qual é a cor tradicional da camisa do Real Madrid? | Branca | Vermelha / Branca / Azul e grená / Preta e branca |
| 3236 | futebol | Quais são as cores tradicionais da camisa listrada do Barcelona? | Azul e grená | Preto e branco / Vermelho e branco / Verde e branco / Azul e grená |
| 3237 | futebol | Em 2020, Ronaldinho Gaúcho ficou preso em qual país, por entrar com passaporte falso? | Paraguai | Paraguai / Uruguai / Bolívia / Argentina |
| 3238 | volei | Quantos jogadores de cada time ficam em quadra numa partida de vôlei? | 6 | 4 / 5 / 6 / 7 |
| 3239 | volei | Qual técnico comandou a seleção masculina de vôlei no ouro olímpico de Atenas 2004? | Bernardinho | Zé Roberto Guimarães / Bernardinho / Rubén Magnano / Renan Dal Zotto |
| 3240 | volei | Giba, um dos maiores ídolos do esporte brasileiro, brilhou em qual modalidade? | Vôlei | Basquete / Handebol / Futsal / Vôlei |
| 3241 | volei | No vôlei, quantos toques um time pode dar na bola antes de mandá-la para o outro lado? | 3 | 1 / 2 / 3 / 4 |
| 3242 | volei | Como se chama o jogador de vôlei que usa camisa de cor diferente e só atua na defesa? | Líbero | Líbero / Levantador / Oposto / Ponteiro |
| 3243 | volei | Como se chama o ataque do vôlei em que o jogador salta e bate forte na bola, para baixo, na quadra rival? | Cortada | Manchete / Cortada / Toque / Saque |
| 3244 | volei | Como se chama o toque do vôlei feito com os dois antebraços unidos, muito usado para receber o saque? | Manchete | Cortada / Bloqueio / Saque / Manchete |
| 3245 | volei | Como se chama a jogada em que os jogadores saltam junto à rede, de braços erguidos, para barrar o ataque rival? | Bloqueio | Manchete / Levantada / Bloqueio / Recepção |
| 3246 | volei | Quantos atletas formam cada time no vôlei de praia? | 2 | 2 / 3 / 4 / 6 |
| 3247 | volei | Numa partida de vôlei, quantos sets um time precisa vencer para ganhar o jogo? | 3 | 2 / 3 / 4 / 5 |
| 3248 | volei | Qual levantador da seleção brasileira de vôlei é filho do técnico Bernardinho? | Bruninho | Bruninho / Giba / Serginho / Ricardinho |
| 3249 | volei | Como se chama o ponto feito direto no saque, sem que o rival consiga devolver a bola? | Ace | Bloqueio / Rali / Cravada / Ace |
| 3250 | volei | Como se chama a principal competição nacional de clubes de vôlei do Brasil? | Superliga | NBB / Superliga / Liga Nacional / Taça Brasil |
| 3251 | volei | Qual é a função do levantador num time de vôlei? | Preparar a bola para os atacantes | Bloquear todos os ataques / Sacar em todos os pontos / Preparar a bola para os atacantes / Defender só no fundo da quadra |
| 3252 | f1 | Quantos títulos mundiais de Fórmula 1 Ayrton Senna conquistou? | 3 | 2 / 3 / 4 / 5 |
| 3253 | f1 | Qual piloto alemão, sete vezes campeão mundial, virou ídolo da Ferrari? | Michael Schumacher | Sebastian Vettel / Nico Rosberg / Ralf Schumacher / Michael Schumacher |
| 3254 | f1 | Qual brasileiro foi companheiro de Michael Schumacher na Ferrari entre 2000 e 2005? | Rubens Barrichello | Rubens Barrichello / Felipe Massa / Nelson Piquet / Ayrton Senna |
| 3255 | f1 | Qual é o apelido carinhoso de Rubens Barrichello? | Rubinho | Rubão / Barrica / Rubinho / Rubens Jr. |
| 3256 | f1 | Em qual cidade fica o autódromo de Interlagos? | São Paulo | Rio de Janeiro / São Paulo / Curitiba / Belo Horizonte |
| 3257 | f1 | Na Fórmula 1, qual bandeira é agitada para mostrar que a corrida terminou? | Quadriculada | Amarela / Verde / Azul / Quadriculada |
| 3258 | f1 | Na Fórmula 1, como se chama a primeira posição no grid de largada? | Pole position | Pole position / Safety car / Pit stop / Volta rápida |
| 3259 | f1 | Qual era a cor principal do capacete de Ayrton Senna? | Amarelo | Vermelho / Azul / Amarelo / Branco |
| 3260 | f1 | Na Fórmula 1, como se chama o carro que entra na pista para controlar o ritmo da corrida depois de um acidente? | Safety car | Pole car / Safety car / Pit car / Track car |
| 3261 | basquete | Qual era o apelido de Oscar Schmidt, o maior cestinha da história do basquete brasileiro? | Mão Santa | Mão Santa / Pé de Anjo / Canhão / Mão de Ouro |
| 3262 | basquete | Hortência, a "Rainha" das quadras, foi estrela de qual esporte? | Basquete | Vôlei / Handebol / Basquete / Tênis |
| 3263 | basquete | Qual era o apelido da jogadora de basquete Paula, parceira de Hortência na seleção? | Magic Paula | Paulinha Show / Magic Paula / Rainha Paula / Paula Mão Santa |
| 3264 | basquete | No basquete, quantos pontos vale um lance livre convertido? | 1 | 1 / 2 / 3 / 4 |
| 3265 | basquete | No basquete, quantos pontos vale uma cesta feita de dentro da linha de três? | 2 | 3 / 1 / 2 / 4 |
| 3266 | basquete | Como se chama a jogada em que o atleta salta e coloca a bola na cesta com as mãos por cima do aro? | Enterrada | Bandeja / Rebote / Toco / Enterrada |
| 3267 | basquete | Como se chama, no basquete, bloquear com a mão o arremesso do adversário? | Toco | Toco / Rebote / Garrafão / Assistência |
| 3268 | basquete | Qual é o apelido de LeBron James? | King James | Air / The Answer / King James / Black Mamba |
| 3269 | olimpiadas | Quantos anéis formam o símbolo dos Jogos Olímpicos? | 5 | 3 / 4 / 6 / 5 |
| 3270 | olimpiadas | Os anéis entrelaçados do símbolo olímpico representam o quê? | A união dos continentes | Os cinco oceanos / A união dos continentes / As cinco primeiras sedes / As cores das medalhas |
| 3271 | olimpiadas | De quantos em quantos anos acontecem os Jogos Olímpicos de Verão? | 4 | 1 / 2 / 3 / 4 |
| 3272 | olimpiadas | Em qual país é aceso o fogo da tocha olímpica antes de cada edição dos Jogos? | Grécia | Grécia / Itália / França / Egito |
| 3273 | olimpiadas | Qual medalha recebe o atleta que termina em terceiro lugar numa prova olímpica? | Bronze | Ouro / Prata / Bronze / Cobre |
| 3274 | olimpiadas | Em qual estádio aconteceu a cerimônia de abertura dos Jogos Rio 2016? | Maracanã | Engenhão / Maracanã / Morumbi / Mineirão |
| 3275 | olimpiadas | Qual cidade sediou os Jogos Olímpicos de 2024? | Paris | Londres / Los Angeles / Tóquio / Paris |
| 3276 | olimpiadas | Por que os Jogos de Tóquio 2020 só foram disputados em 2021? | Por causa da pandemia de covid-19 | Por causa da pandemia de covid-19 / Por causa de um terremoto / Por falta de dinheiro / Por causa de uma greve |
| 3277 | olimpiadas | Qual cidade vai sediar os Jogos Olímpicos de 2028? | Los Angeles | Madri / Paris / Los Angeles / Brisbane |
| 3278 | olimpiadas | Como se chama a competição para atletas com deficiência disputada logo depois das Olimpíadas? | Paralimpíada | Pan-Americano / Paralimpíada / Universíade / Mundial Master |
| 3279 | olimpiadas | O que significa a sigla COI? | Comitê Olímpico Internacional | Confederação Olímpica Independente / Conselho Oficial Internacional / Comissão de Organização dos Jogos / Comitê Olímpico Internacional |
| 3280 | olimpiadas | Qual cidade brasileira sediou os Jogos Pan-Americanos de 2007? | Rio de Janeiro | Rio de Janeiro / São Paulo / Brasília / Salvador |
| 3281 | olimpiadas | O lema olímpico em latim, "Citius, Altius, Fortius", significa o quê? | Mais rápido, mais alto, mais forte | Paz, união e esporte / Honra, glória e vitória / Mais rápido, mais alto, mais forte / O importante é competir |
| 3282 | olimpiadas | Quais esportes fazem parte dos Jogos Olímpicos de Inverno? | Esportes na neve e no gelo | Esportes de praia / Esportes na neve e no gelo / Esportes de luta / Esportes a motor |
| 3283 | olimpiadas | Em Paris 2024, qual atleta se tornou a maior medalhista olímpica da história do Brasil? | Rebeca Andrade | Daiane dos Santos / Rayssa Leal / Mayra Aguiar / Rebeca Andrade |
| 3284 | olimpiadas | Isaquias Queiroz é medalhista olímpico em qual esporte? | Canoagem | Remo / Natação / Canoagem / Vela |
| 3285 | olimpiadas | Na cerimônia de abertura dos Jogos, o que um atleta de cada país carrega à frente da delegação? | A bandeira do país | A bandeira do país / A tocha olímpica / Uma coroa de louros / Uma medalha de ouro |
| 3286 | olimpiadas | Como se chama a grande chama que fica acesa no estádio durante todos os Jogos Olímpicos? | Pira olímpica | Farol olímpico / Pira olímpica / Fogueira dos atletas / Lanterna olímpica |
| 3287 | judo | Em qual país surgiu o judô? | Japão | China / Japão / Coreia do Sul / Tailândia |
| 3288 | judo | Como se chama o golpe perfeito que encerra na hora uma luta de judô? | Ippon | Ippon / Waza-ari / Kata / Dojô |
| 3289 | judo | Como se chama o tapete acolchoado sobre o qual se luta judô? | Tatame | Ringue / Octógono / Pista / Tatame |
| 3290 | judo | Qual judoca, criada na Cidade de Deus, no Rio, ganhou o ouro olímpico na Rio 2016? | Rafaela Silva | Sarah Menezes / Mayra Aguiar / Rafaela Silva / Ketleyn Quadros |
| 3291 | judo | No judô, qual é a cor da faixa de quem está começando? | Branca | Preta / Branca / Amarela / Marrom |
| 3292 | natacao | César Cielo foi campeão olímpico em qual esporte? | Natação | Natação / Atletismo / Canoagem / Ciclismo |
| 3293 | natacao | Qual nadador americano é o maior medalhista da história das Olimpíadas? | Michael Phelps | Ryan Lochte / Mark Spitz / Michael Phelps / Ian Thorpe |
| 3294 | natacao | Qual estilo da natação é nadado de barriga para cima? | Costas | Peito / Costas / Borboleta / Crawl |
| 3295 | natacao | Quantos metros de comprimento tem uma piscina olímpica? | 50 metros | 25 metros / 33 metros / 100 metros / 50 metros |
| 3296 | natacao | Qual estilo da natação leva os dois braços juntos para a frente, por cima da água, lembrando asas? | Borboleta | Borboleta / Costas / Peito / Crawl |
| 3297 | natacao | Qual é o estilo mais rápido da natação, usado quase sempre nas provas de nado livre? | Crawl | Peito / Costas / Crawl / Borboleta |
| 3298 | natacao | Qual esporte coletivo é jogado dentro de uma piscina, com uma bola e dois gols? | Polo aquático | Nado artístico / Hóquei / Handebol / Polo aquático |
| 3299 | atletismo | Usain Bolt, o homem mais rápido do mundo, é de qual país? | Jamaica | Estados Unidos / Jamaica / Quênia / Canadá |
| 3300 | atletismo | Qual é a prova mais famosa do atletismo, em que Usain Bolt foi tricampeão olímpico? | 100 metros rasos | 100 metros rasos / 400 metros / Maratona / 1.500 metros |
| 3301 | atletismo | Qual era o famoso gesto de comemoração de Usain Bolt? | Apontar para o alto imitando um raio | Fazer um coração com as mãos / Dar uma cambalhota / Bater continência / Apontar para o alto imitando um raio |
| 3302 | atletismo | Quantos quilômetros tem, aproximadamente, uma maratona? | 42 km | 10 km / 21 km / 42 km / 50 km |
| 3303 | atletismo | Em qual dia do ano é disputada a tradicional Corrida de São Silvestre? | 31 de dezembro | 1º de janeiro / 31 de dezembro / 25 de dezembro / 7 de setembro |
| 3304 | atletismo | Em qual cidade é disputada a Corrida de São Silvestre? | São Paulo | São Paulo / Rio de Janeiro / Curitiba / Porto Alegre |
| 3305 | atletismo | Qual maratonista brasileiro foi agarrado por um espectador em Atenas 2004 e, anos depois, acendeu a pira da Rio 2016? | Vanderlei Cordeiro de Lima | Marílson Gomes dos Santos / Joaquim Cruz / Vanderlei Cordeiro de Lima / Robson Caetano |
| 3306 | atletismo | No revezamento 4x100 metros, o que os atletas passam de mão em mão? | Bastão | Bastão / Tocha / Bandeira / Bola |
| 3307 | atletismo | Quantas provas formam o decatlo? | 10 | 5 / 10 / 7 / 12 |
| 3308 | atletismo | Qual prova do atletismo consiste em lançar uma bola de metal pesada o mais longe possível, a partir do ombro? | Arremesso de peso | Lançamento de dardo / Lançamento de disco / Arremesso de peso / Salto triplo |
| 3309 | ginastica | Rebeca Andrade conquistou o ouro em Paris 2024 em qual aparelho? | Solo | Trave / Solo / Barras assimétricas / Salto |
| 3310 | ginastica | Qual funk embalou a apresentação de Rebeca Andrade no solo em Tóquio 2020? | Baile de Favela | Baile de Favela / Bum Bum Tam Tam / Envolver / Vai Malandra |
| 3311 | ginastica | Qual chorinho embalava as apresentações de Daiane dos Santos no solo? | Brasileirinho | Tico-Tico no Fubá / Carinhoso / Aquarela do Brasil / Brasileirinho |
| 3312 | ginastica | Nadia Comaneci entrou para a história em 1976 ao receber, pela primeira vez nas Olimpíadas, qual nota? | 10 | 9,5 / 9,9 / 10 / 100 |
| 3313 | ginastica | Em qual aparelho da ginástica a atleta faz acrobacias sobre uma barra de apenas 10 cm de largura? | Trave | Trave / Barras assimétricas / Cavalo com alças / Paralelas |
| 3314 | ginastica | Qual destes objetos é usado na ginástica rítmica? | Fita | Raquete / Taco / Dardo / Fita |
| 3315 | ginastica | Simone Biles, uma das maiores ginastas da história, é de qual país? | Estados Unidos | Rússia / Estados Unidos / Romênia / China |
| 3316 | surfe | Qual surfista foi o primeiro brasileiro campeão mundial, em 2014? | Gabriel Medina | Gabriel Medina / Ítalo Ferreira / Filipe Toledo / Adriano de Souza |
| 3317 | surfe | Quem foi o primeiro campeão olímpico da história do surfe, em Tóquio 2020? | Ítalo Ferreira | Gabriel Medina / Kelly Slater / Ítalo Ferreira / Filipe Toledo |
| 3318 | surfe | Quando criança, Ítalo Ferreira aprendeu a surfar usando o quê como prancha? | A tampa de uma caixa de isopor | Uma porta velha / A tampa de uma caixa de isopor / Uma tábua de passar roupa / Um pedaço de geladeira |
| 3319 | surfe | A famosa foto de Gabriel Medina "flutuando" ao lado da onda, em Paris 2024, foi feita em qual lugar? | Taiti | Havaí / Bali / Austrália / Taiti |
| 3320 | surfe | Como se chama a manobra em que o surfista passa por dentro do "túnel" formado pela onda? | Tubo | Tubo / Aéreo / Batida / Cavada |
| 3321 | surfe | Em qual praia de Portugal surfistas como Maya Gabeira enfrentam ondas gigantes? | Nazaré | Cascais / Nazaré / Ericeira / Peniche |
| 3322 | surfe | Qual americano é considerado a maior lenda da história do surfe? | Kelly Slater | Tony Hawk / Shaun White / Kelly Slater / Michael Phelps |
| 3323 | skate | Qual é o apelido da skatista Rayssa Leal? | Fadinha | Princesinha / Formiguinha / Fadinha / Abelhinha |
| 3324 | skate | Com quantos anos Rayssa Leal ganhou a medalha de prata em Tóquio 2020? | 13 | 13 / 16 / 11 / 18 |
| 3325 | skate | Em qual edição dos Jogos Olímpicos o skate estreou como esporte olímpico? | Tóquio 2020 | Rio 2016 / Tóquio 2020 / Paris 2024 / Londres 2012 |
| 3326 | skate | Qual skatista brasileiro ficou famoso no mundo todo pela megarrampa e pelas medalhas nos X Games? | Bob Burnquist | Pedro Barros / Kelvin Hoefler / Tony Hawk / Bob Burnquist |
| 3327 | skate | Qual skatista americano é considerado a maior lenda do esporte e virou até nome de videogame? | Tony Hawk | Tony Hawk / Kelly Slater / Shaun White / Bob Burnquist |
| 3328 | tenis | Quantas vezes Guga foi campeão de Roland Garros? | 3 | 2 / 3 / 1 / 4 |
| 3329 | tenis | Em qual tipo de piso é disputado o torneio de Roland Garros? | Saibro | Saibro / Grama / Quadra dura / Carpete |
| 3330 | tenis | Em qual tipo de piso é disputado o torneio de Wimbledon? | Grama | Saibro / Quadra dura / Grama / Carpete |
| 3331 | tenis | Em qual cidade é disputado o torneio de Wimbledon? | Londres | Paris / Nova York / Melbourne / Londres |
| 3332 | tenis | Qual é a cor obrigatória das roupas dos tenistas em Wimbledon? | Branca | Verde / Branca / Azul / Preta |
| 3333 | tenis | Em 2001, o que Guga desenhou com a raquete no saibro de Roland Garros? | Um coração | Um coração / Uma estrela / A bandeira do Brasil / O próprio nome |
| 3334 | tenis | Qual é o nome verdadeiro do tenista Guga? | Gustavo Kuerten | Gustavo Borges / Gabriel Kuerten / Gustavo Kuerten / Guilherme Kuerten |
| 3335 | tenis | Guga nasceu em qual cidade? | Florianópolis | Curitiba / Porto Alegre / Joinville / Florianópolis |
| 3336 | tenis | Num game de tênis, depois do 15 e do 30, qual é o próximo ponto da contagem? | 40 | 35 / 40 / 45 / 50 |
| 3337 | tenis | Quantos torneios formam o Grand Slam do tênis? | 4 | 4 / 3 / 5 / 6 |
| 3338 | tenis | Qual é o sobrenome das irmãs Venus e Serena, lendas do tênis? | Williams | Johnson / Smith / Williams / Brown |
| 3339 | tenis | Qual tenista espanhol ficou conhecido como "Rei do Saibro"? | Rafael Nadal | Carlos Alcaraz / David Ferrer / Novak Djokovic / Rafael Nadal |
| 3340 | tenis | O tenista Roger Federer é de qual país? | Suíça | Áustria / Suíça / Alemanha / Suécia |
| 3341 | ufc | Como se chama o ringue de oito lados, cercado por grade, onde lutam os atletas do UFC? | Octógono | Tatame / Arena / Octógono / Quadrilátero |
| 3342 | outros | Acelino "Popó" Freitas foi campeão mundial de qual esporte? | Boxe | Boxe / Judô / MMA / Kickboxing |
| 3343 | outros | O boxeador Popó é natural de qual estado brasileiro? | Bahia | Pernambuco / Bahia / Ceará / Rio de Janeiro |
| 3344 | outros | Em 1997, Mike Tyson mordeu a orelha de qual adversário no ringue? | Evander Holyfield | George Foreman / Lennox Lewis / Muhammad Ali / Evander Holyfield |
| 3345 | outros | Qual lenda do boxe dizia que "flutuava como uma borboleta e picava como uma abelha"? | Muhammad Ali | Muhammad Ali / Mike Tyson / Joe Frazier / George Foreman |
| 3346 | outros | Qual era o nome de Muhammad Ali antes de ele mudar de nome? | Cassius Clay | Joe Louis / Sugar Ray / Cassius Clay / Rocky Marciano |
| 3347 | outros | Qual boxeador do cinema foi criado e interpretado por Sylvester Stallone? | Rocky Balboa | Jake LaMotta / Rocky Balboa / Apollo Creed / Adonis Creed |
| 3348 | outros | No boxe, o que acontece quando um lutador vai ao chão e não se levanta até o juiz contar 10? | Perde por nocaute | Perde por nocaute / A luta recomeça / Perde por pontos / O round é anulado |
| 3349 | futebol | Qual jogadora brasileira foi eleita seis vezes a melhor do mundo pela Fifa? | Marta | Formiga / Marta / Cristiane / Debinha |
| 3350 | futebol | A jogadora Marta nasceu em qual estado brasileiro? | Alagoas | Pernambuco / Bahia / Alagoas / Sergipe |
| 3351 | futebol | Qual país vai sediar a Copa do Mundo de futebol feminino de 2027? | Brasil | Estados Unidos / Espanha / Austrália / Brasil |
| 3352 | outros | Quantos jogadores de cada time ficam em quadra no handebol, contando o goleiro? | 7 | 5 / 6 / 7 / 8 |
| 3353 | outros | Quantos jogadores de cada time ficam em quadra no futsal, contando o goleiro? | 5 | 4 / 5 / 6 / 7 |
| 3354 | outros | No xadrez, qual peça se movimenta em forma de "L"? | Cavalo | Cavalo / Bispo / Torre / Rainha |
| 3355 | outros | Como se chama o lance que encerra uma partida de xadrez, com o rei sem escapatória? | Xeque-mate | Roque / Xeque / Empate / Xeque-mate |
| 3356 | outros | Tiger Woods ficou mundialmente famoso em qual esporte? | Golfe | Tênis / Golfe / Beisebol / Polo |
| 3357 | outros | Como se chama a grande final da liga de futebol americano, a NFL? | Super Bowl | World Series / Final Four / Super Bowl / Stanley Cup |
| 3358 | outros | Qual esporte de bola oval tem os All Blacks, da Nova Zelândia, como seleção mais famosa? | Rúgbi | Rúgbi / Críquete / Futebol americano / Hóquei |
| 3359 | outros | O sumô é o esporte tradicional de qual país? | Japão | China / Coreia do Sul / Tailândia / Japão |
| 3360 | outros | Qual instrumento de corda comanda o ritmo da roda de capoeira? | Berimbau | Cavaquinho / Berimbau / Viola / Violão |
| 3361 | outros | Como se chama, no boliche, derrubar todos os pinos com a primeira bola? | Strike | Strike / Spare / Gutter / Split |
| 3362 | outros | Qual é o nome popular do tênis de mesa no Brasil? | Pingue-pongue | Squash / Badminton / Pingue-pongue / Frescobol |
| 3363 | outros | Qual é a corrida de ciclismo mais famosa do mundo, disputada todo ano na França? | Tour de France | Giro d'Italia / Vuelta a España / Paris-Roubaix / Tour de France |
| 3364 | outros | O frescobol, típico das praias brasileiras, é jogado com o quê? | Raquetes de madeira e uma bolinha | Os pés e uma bola de couro / Raquetes de madeira e uma bolinha / Tacos e uma bola de beisebol / As mãos e uma peteca |
| 3365 | futebol | Qual narrador ficou famoso pelo bordão "Haja coração!"? | Galvão Bueno | Cléber Machado / Galvão Bueno / Luís Roberto / Sílvio Luiz |
| 3366 | futebol | Qual comentarista de arbitragem da TV Globo ficou famoso pelo bordão "A regra é clara"? | Arnaldo Cezar Coelho | Arnaldo Cezar Coelho / Casagrande / Juca Kfouri / Neto |
| 3367 | futebol | Na linguagem do dia a dia, o que significa "pisar na bola"? | Cometer um erro | Ter uma ideia genial / Chegar atrasado / Mudar de assunto / Cometer um erro |
| 3368 | futebol | O que quer dizer a expressão "pendurar as chuteiras"? | Aposentar-se | Trocar de emprego / Mudar de cidade / Aposentar-se / Casar-se |
| 3369 | futebol | Quando dizem que um funcionário "veste a camisa" da empresa, o que querem dizer? | Que ele se dedica de verdade a ela | Que ele usa uniforme / Que ele se dedica de verdade a ela / Que ele foi promovido / Que ele vai pedir demissão |
| 3370 | futebol | O que significa "dar uma bola fora"? | Dizer ou fazer algo inconveniente | Dizer ou fazer algo inconveniente / Acertar em cheio / Faltar ao trabalho / Ganhar um prêmio |
| 3371 | futebol | No dia a dia, chamar uma conquista de "gol de placa" quer dizer que ela foi o quê? | Excepcional | Ilegal / Sem importância / Feita por sorte / Excepcional |
| 3372 | futebol | Fora do futebol, o que significa "bater na trave"? | Quase conseguir | Errar feio / Ganhar fácil / Quase conseguir / Desistir no começo |
| 3373 | futebol | Quando alguém "tira o time de campo", o que essa pessoa faz? | Desiste e vai embora | Assume o comando / Desiste e vai embora / Pede ajuda / Ganha a discussão |
| 3374 | futebol | Quem "joga para a torcida" está fazendo o quê? | Agindo para agradar o público | Agindo para agradar o público / Trabalhando em silêncio / Ajudando o adversário / Fugindo da responsabilidade |
| 3375 | futebol | Na linguagem do dia a dia, o que significa "virar o jogo"? | Reverter uma situação ruim | Desistir de tudo / Trapacear / Mudar de time / Reverter uma situação ruim |
| 3376 | futebol | Qual expressão vinda do futebol é usada para dizer que algo é muito bom? | Show de bola | Bola murcha / Gol contra / Show de bola / Pisar na bola |
| 3377 | futebol | O que significa "dar o pontapé inicial" num projeto? | Começar o projeto | Encerrar o projeto / Começar o projeto / Cancelar o projeto / Atrasar o projeto |
| 3378 | futebol | O que significa deixar alguém "para escanteio"? | Deixar a pessoa de lado | Deixar a pessoa de lado / Promover a pessoa / Proteger a pessoa / Pedir desculpas à pessoa |
| 3379 | futebol | Quem "faz o meio de campo" entre duas pessoas está fazendo o quê? | Intermediando a conversa entre elas | Brigando com as duas / Ignorando as duas / Competindo com as duas / Intermediando a conversa entre elas |
| 3380 | futebol | No dia a dia, o que significa "entrar de sola" numa discussão? | Agir de forma dura e agressiva | Ficar em silêncio / Concordar com todos / Agir de forma dura e agressiva / Mudar de assunto |
| 3381 | futebol | Qual empresa italiana publica o tradicional álbum de figurinhas da Copa do Mundo? | Panini | Adidas / Panini / Topps / Nike |
| 3382 | futebol | Em dia de jogo do Brasil na Copa, o que muitas repartições públicas costumam decretar? | Ponto facultativo | Ponto facultativo / Feriado bancário / Lei seca / Horário de verão |
| 3383 | futebol | Em época de Copa do Mundo, moradores de muitas ruas do Brasil pintam o asfalto e os muros com quais cores? | Verde e amarelo | Azul e branco / Vermelho e preto / Laranja e branco / Verde e amarelo |
| 3384 | futebol | Qual é a continuação do grito da torcida "Eu sou brasileiro..."? | ...com muito orgulho, com muito amor | ...do jeito que Deus quis / ...e a taça é nossa / ...com muito orgulho, com muito amor / ...vamos ao hexa |
| 3385 | futebol | Como se chama a "onda" que a torcida faz no estádio, levantando em sequência pelas arquibancadas? | Ola | Mosaico / Ola / Bandeirão / Avalanche |
| 3386 | futebol | Que grito a torcida faz a cada passe quando o time está "dando um baile" no rival? | Olé | Olé / Uh / Bis / Já ganhou |
| 3387 | futebol | Como se chama a bandeira gigante que a torcida estende sobre a arquibancada? | Bandeirão | Faixa / Flâmula / Estandarte / Bandeirão |
| 3388 | futebol | Quais animais animados ficaram famosos no Fantástico, da TV Globo, "comentando" os resultados do futebol? | Cavalinhos | Papagaios / Macacos / Cavalinhos / Pinguins |
| 3389 | futebol | Qual programa esportivo da TV Globo vai ao ar na hora do almoço, durante a semana? | Globo Esporte | Esporte Espetacular / Globo Esporte / Fantástico / Bem, Amigos! |
| 3390 | futebol | Como se chama o torcedor que vive criticando o próprio time? | Corneteiro | Corneteiro / Pé-frio / Fanático / Gandula |
| 3391 | futebol | Como se chama a pessoa que, segundo a superstição, dá azar ao time quando vai ao estádio? | Pé-frio | Corneteiro / Pé-quente / Bicão / Pé-frio |
| 3392 | futebol | Como se chamava o setor popular do antigo Maracanã, onde o torcedor via o jogo em pé, perto do gramado? | Geral | Cadeira cativa / Camarote / Geral / Tribuna |
| 3393 | futebol | Qual objeto o juiz usa para marcar as faltas e parar o jogo? | Apito | Bandeira / Apito / Sino / Buzina |
| 3394 | futebol | Para que serve o spray de espuma que o juiz usa antes de cobranças de falta? | Marcar a posição da bola e da barreira | Marcar a posição da bola e da barreira / Marcar o impedimento / Pintar a linha de fundo / Avisar uma substituição |
| 3395 | futebol | Como se chama a trave horizontal que fica no alto do gol? | Travessão | Poste / Baliza / Rede / Travessão |
| 3396 | futebol | Como se chama o calçado com travas usado no futebol de campo? | Chuteira | Sapatilha / Tênis de corrida / Chuteira / Bota |
| 3397 | futebol | Qual proteção o jogador de futebol usa na perna, por baixo do meião? | Caneleira | Joelheira / Caneleira / Tornozeleira / Cotoveleira |
| 3398 | futebol | O que o goleiro usa nas mãos para agarrar melhor a bola? | Luvas | Luvas / Munhequeiras / Faixas / Dedeiras |
| 3399 | futebol | Como se chama a cobrança de pênalti com um toque leve, por cima, enquanto o goleiro pula para o lado? | Cavadinha | Paradinha / Chapéu / Cavadinha / Trivela |
| 3400 | futebol | Como os cariocas chamam o jogo de mesa com bonequinhos presos em varetas, que os paulistas chamam de pebolim? | Totó | Botão / Totó / Bilhar / Gamão |
| 3401 | futebol | Como se chama o jogo de mesa em que se empurram peças redondas com uma palheta para fazer gol? | Futebol de botão | Futebol de botão / Totó / Dominó / Damas |
| 3402 | futebol | Qual série de videogame de futebol, da EA, mudou de nome para EA Sports FC em 2023? | FIFA | PES / Winning Eleven / Football Manager / FIFA |
| 3403 | futebol | Qual jogador é considerado o maior craque da história do futsal brasileiro? | Falcão | Neymar / Romário / Falcão / Ronaldinho Gaúcho |
| 3404 | futebol | Em qual clube brasileiro Pelé jogou praticamente toda a sua carreira? | Santos | Corinthians / Santos / Vasco / Botafogo |
| 3405 | futebol | Em qual estádio Pelé marcou o seu milésimo gol, em 1969? | Maracanã | Maracanã / Pacaembu / Morumbi / Vila Belmiro |
| 3406 | futebol | Qual era a comemoração mais famosa de Pelé depois de um gol? | Um salto com soco no ar | Uma cambalhota / Uma dança / Um beijo no escudo / Um salto com soco no ar |
| 3407 | futebol | Pelé foi ministro de qual área no governo federal? | Esporte | Educação / Cultura / Esporte / Turismo |
| 3408 | futebol | Qual paulista, de família britânica, é considerado o pai do futebol no Brasil por trazer as primeiras bolas e regras? | Charles Miller | Oscar Cox / Charles Miller / Arthur Friedenreich / Leônidas da Silva |
| 3409 | futebol | Em qual cidade fica o estádio do Mineirão? | Belo Horizonte | Belo Horizonte / Uberlândia / Juiz de Fora / Contagem |
| 3410 | futebol | O estádio de Wembley, palco de grandes finais, fica em qual cidade? | Londres | Manchester / Liverpool / Paris / Londres |
| 3411 | futebol | Quais são as cores da camisa listrada da seleção argentina? | Azul-celeste e branco | Azul e amarelo / Vermelho e branco / Azul-celeste e branco / Verde e branco |
| 3412 | futebol | Qual seleção sul-americana joga com a camisa toda azul-celeste e é bicampeã do mundo? | Uruguai | Uruguai / Argentina / Chile / Colômbia |
| 3413 | futebol | A Copa América é o torneio de seleções de qual continente? | América do Sul | Europa / África / Ásia / América do Sul |
| 3414 | futebol | A Libertadores é o principal torneio de clubes de qual continente? | América do Sul | Europa / América do Norte / América do Sul / África |
| 3415 | futebol | Como é chamado o principal campeonato nacional de clubes do futebol brasileiro? | Brasileirão | Paulistão / Brasileirão / Copa do Nordeste / Copa Sul-Americana |
| 3416 | futebol | Como se chamam os campeonatos disputados entre clubes do mesmo estado, como o Carioca e o Paulista? | Estaduais | Regionais / Nacionais / Continentais / Estaduais |
| 3417 | futebol | O que significa dar "cartão vermelho" para alguém, no dia a dia? | Mandar a pessoa embora | Dar uma promoção / Fazer um elogio / Mandar a pessoa embora / Dar uma segunda chance |
| 3418 | outros | Quais são as três provas do triatlo? | Natação, ciclismo e corrida | Natação, remo e corrida / Natação, ciclismo e corrida / Ciclismo, corrida e salto / Natação, ciclismo e tiro |
| 3419 | outros | Como se chama a versão mais longa e famosa do triatlo, que termina com uma maratona inteira? | Ironman | Ironman / Decatlo / Biatlo / Pentatlo moderno |
| 3420 | outros | Quantos quilômetros tem, aproximadamente, uma meia maratona? | 21 km | 10 km / 15 km / 30 km / 21 km |
| 3421 | outros | O nome "maratona" vem de uma lenda de qual país? | Grécia | Itália / Egito / Grécia / Turquia |
| 3422 | outros | Qual medalha recebe o segundo colocado numa prova olímpica? | Prata | Ouro / Prata / Bronze / Cobre |
| 3423 | outros | Em qual cidade foram disputados os primeiros Jogos Olímpicos da era moderna? | Atenas | Roma / Paris / Londres / Atenas |
| 3424 | outros | Como se chama a prova de corrida em que o atleta precisa pular obstáculos ao longo da pista? | Corrida com barreiras | Salto triplo / Corrida com barreiras / Revezamento / Marcha atlética |
| 3425 | outros | Qual estilo da natação lembra o movimento de um sapo? | Peito | Peito / Crawl / Costas / Borboleta |
| 3426 | outros | Em qual cidade brasileira nasceu o futevôlei, nas areias da praia? | Rio de Janeiro | Salvador / Fortaleza / Rio de Janeiro / Santos |
| 3427 | outros | No futevôlei, qual parte do corpo os jogadores não podem usar? | As mãos | A cabeça / As mãos / O peito / Os pés |
| 3428 | outros | A peteca, brincadeira e esporte tradicional do Brasil, tem origem em qual povo? | Indígenas brasileiros | Indígenas brasileiros / Japoneses / Portugueses / Holandeses |
| 3429 | outros | No Tour de France, qual cor de camisa veste o líder da classificação geral? | Amarela | Verde / Rosa / Azul / Amarela |
| 3430 | outros | Como se chama o grupo principal de ciclistas que pedala junto numa prova de estrada? | Pelotão | Comboio / Esquadrão / Pelotão / Batalhão |
| 3431 | outros | Como se chama o exercício de academia em que, deitado no banco, se empurra a barra para cima? | Supino | Agachamento / Supino / Remada / Rosca |
| 3432 | outros | Como se chama o peso pequeno, segurado em uma só mão, usado na musculação? | Halter | Halter / Anilha / Barra / Caneleira |
| 3433 | outros | Qual exercício consiste em ficar parado, apoiado nos antebraços e na ponta dos pés, com o corpo reto? | Prancha | Flexão / Polichinelo / Burpee / Prancha |
| 3434 | outros | Quantas casas tem um tabuleiro de xadrez? | 64 | 49 / 81 / 64 / 100 |
| 3435 | outros | Qual peça do xadrez anda apenas na diagonal? | Bispo | Torre / Bispo / Rei / Peão |
| 3436 | outros | Qual é a peça mais poderosa do xadrez, que anda em qualquer direção quantas casas quiser? | Dama | Dama / Torre / Rei / Bispo |
| 3437 | outros | Quantas peças cada jogador tem no início de uma partida de xadrez? | 16 | 12 / 20 / 32 / 16 |
| 3438 | outros | Como se chamam as competições profissionais de videogame? | E-sports | Games olímpicos / Fliperama / E-sports / Arcade |
| 3439 | outros | No futebol americano, como se chama a jogada principal de pontuação, ao levar a bola até a área final do rival? | Touchdown | Home run / Touchdown / Strike / Ace |
| 3440 | outros | No beisebol, com o que o rebatedor bate na bola? | Taco | Taco / Raquete / Luva / Remo |
| 3441 | outros | No beisebol, como se chama a rebatida que manda a bola para fora do campo? | Home run | Touchdown / Strike / Cesta / Home run |
| 3442 | outros | No hóquei no gelo, o que os jogadores disputam no lugar de uma bola? | Um disco | Uma peteca / Um anel / Um disco / Uma bola oval |
| 3443 | outros | Na sinuca, qual bola o jogador acerta com o taco para bater nas outras? | A bola branca | A bola preta / A bola branca / A bola vermelha / A bola amarela |
| 3444 | outros | Quantos pinos ficam de pé no início de cada jogada no boliche? | 10 | 10 / 6 / 8 / 12 |
| 3445 | outros | O kung fu é uma arte marcial de qual país? | China | Japão / Coreia do Sul / Tailândia / China |
| 3446 | outros | O muay thai é uma arte marcial de qual país? | Tailândia | Japão / China / Tailândia / Vietnã |
| 3447 | outros | O taekwondo é uma arte marcial de qual país? | Coreia do Sul | Japão / Coreia do Sul / China / Tailândia |
| 3448 | outros | Qual família brasileira ficou famosa no mundo por desenvolver o jiu-jítsu brasileiro? | Gracie | Gracie / Nogueira / Machida / Silva |
| 3449 | outros | Nas artes marciais como judô e caratê, qual cor de faixa indica um lutador de alta graduação? | Preta | Branca / Amarela / Verde / Preta |
| 3450 | outros | A capoeira mistura luta com o quê? | Dança e música | Natação / Corrida / Dança e música / Arremesso |
| 3451 | outros | Qual esporte olímpico usa florete, espada e sabre? | Esgrima | Tiro com arco / Esgrima / Judô / Hipismo |
| 3452 | outros | Como se chama quem monta o cavalo nas corridas do turfe? | Jóquei | Jóquei / Peão / Tropeiro / Cocheiro |
| 3453 | outros | Como se chama a onda que se forma no encontro do rio com o mar, na Amazônia, onde surfistas pegam ondas por quilômetros? | Pororoca | Maré cheia / Tsunami / Ressaca / Pororoca |
| 3454 | outros | Qual time de basquete dos Estados Unidos é famoso pelas exibições cheias de truques e humor? | Harlem Globetrotters | Los Angeles Lakers / Chicago Bulls / Harlem Globetrotters / Dream Team |
| 3455 | outros | Qual esporte, jogado com taco e bola, é paixão nacional na Índia? | Críquete | Beisebol / Críquete / Hóquei / Golfe |
| 3456 | outros | Em qual esporte se usa uma peteca de penas e raquetes leves, numa quadra com rede alta? | Badminton | Badminton / Tênis / Squash / Pingue-pongue |
| 3457 | outros | No golfe, como se chama acertar o buraco com uma única tacada? | Hole in one | Birdie / Eagle / Par / Hole in one |
| 3458 | outros | Em qual categoria Ayrton Senna começou a correr, ainda criança? | Kart | Fórmula 3 / Stock Car / Kart / Motocross |
| 3459 | outros | Como se chama o esporte em que se rema em pé sobre uma prancha? | Stand up paddle | Canoagem / Stand up paddle / Windsurfe / Bodyboard |
