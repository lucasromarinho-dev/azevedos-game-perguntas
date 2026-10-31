# Notas - perguntas reaproveitadas da v12 no banco Esportes

Arquivo: `expansao/esportes/reaproveitadas-v12.json` (1.019 perguntas, status `reaproveitada`, categoria `Esportes`).
Origem: `expansao/correcoes/perguntas-v12.json`, categoria Esportes (2.433 perguntas). Decisão do dono: "Reaproveita", sabendo que haverá repetição entre os dois modos.

## Totais que entraram

| Esporte | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| Futebol | 369 | 360 | 88 | 817 |
| NBA | 11 | 62 | 26 | 99 |
| UFC | 12 | 33 | 3 | 48 |
| F1 | 9 | 37 | 9 | 55 |
| **Total** | **401** | **492** | **126** | **1.019** |

Passagem de dificuldade (v12 > Esportes): médio > fácil 352; médio > médio 189; médio > difícil 1; difícil > médio 301; difícil > difícil 125; difícil > fácil 4 (autores de gol de título: Breno Lopes, Deyverson, Danilo e afins); fácil > fácil 45; fácil > médio 2.

## Quem ficou de fora (1.414)

| Motivo | Quantas |
|---|---|
| Outro esporte (vôlei, tênis, atletismo, Olimpíadas, basquete fora da NBA, Indy, Fórmula E, Stock Car, rúgbi, e-sports, academia etc.) | 918 |
| Fácil demais (fácil da v12 que é óbvio para qualquer pessoa) | 419 (futebol 358, NBA 35, F1 15, UFC 11) |
| Cruzamento com o banco Esportes novo | 52 (49 com piloto e lotes 001-013; 3 com os lotes 014-015, que chegaram durante o trabalho) |
| Repetição interna (duas reaproveitadas com o mesmo fato, ou uma entregando a outra) | 24 |
| Desatualizada | 1 (v12:7565, Marta "maior artilheira da história das Copas"; Mbappé tem 22 e Messi 21 depois de 2026; além disso a resposta "Rainha Marta" é óbvia) |

Das 2.433, 1.558 foram classificadas como futebol, NBA, UFC ou F1 por palavra-chave, com revisão manual das 478 ambíguas. Futebol olímpico e futebol feminino contam como futebol. Regras genéricas de basquete (garrafão, 24 segundos, cesta de 3), WNBA e basquete brasileiro ficaram como "outro esporte".

## Régua usada (calibracao-lucas.md)

- Ponto de partida: médio da v12 vira fácil e difícil da v12 vira médio. Depois, cada pergunta foi lida e ajustada.
- **Fácil**: momento marcante (campeão, quem fez o gol do título, eliminação famosa, apelido de clube grande, ídolo conhecido).
- **Médio**: detalhe de lance ou de campanha (artilheiro de edição, técnico campeão, vice, adversário de final, clube formador, mascote, estádio, apelido de clube regional, MVP das finais).
- **Difícil**: número exato, ano, escalação, nome oficial de estádio, recordista de gols de clube, técnicos campeões de Copas antigas, apelidos de clubes pequenos, brasileiros pouco lembrados na NBA.
- **NBA, UFC e F1**: só ficou fácil o que é famoso de verdade no Brasil (Jordan no beisebol, Varejão, Splash Brothers, Senna x Prost, Massa em 2008, Anderson x Weidman, Aldo em 13 segundos, Amanda x Ronda). Campeão recente da NBA ficou médio.
- Fáceis da v12 só entraram quando são de torcedor engajado e não óbvias (47 entraram; lista abaixo). Na dúvida, ficaram de fora.
- Cada ficha tem `dificuldade_v12` e `motivo_dificuldade`. Quando o motivo é o padrão da passagem (médio > fácil ou difícil > médio), o texto diz isso; nos ajustes o motivo é específico.

## Fatos que podem ter envelhecido

Procurei no texto: atual, até hoje, maior artilheiro, recorde, recordista, mais títulos, maior campeão, único, último, ainda, invicto, desde, e verbos no presente. 62 perguntas mantidas tinham esses termos. Conferi na web (Wikipédia com User-Agent genérico, lendo o trecho) as que podiam ter mudado em 2025 e 2026:

- v12:5045 Fontaine, 13 gols numa só Copa: continua (página de recordes da Copa já atualizada com 2026).
- v12:5955 gol mais rápido das Copas, Hakan Şükür, 11 segundos: continua.
- v12:6005 Roger Milla, jogador mais velho a marcar em Copa: continua (Cristiano Ronaldo, 41 anos em 2026, é o mais velho só em mata-mata).
- v12:11287 Pedro Rocha, maior artilheiro estrangeiro do São Paulo: continua (Calleri é o segundo).
- v12:7855 Warriors com 73 vitórias: continua (temporada 2025/26 sem quebra do recorde).
- As demais (recordistas de gols de clubes brasileiros, Zico no Flamengo, Dinamite no Brasileirão, Yashin, Independiente com 7 Libertadores, recordes de carreira da NBA, Rindt, Brabham, Henry, Rooney, Lampard etc.) são marcas antigas e distantes do segundo colocado; não mudaram.
- v12:7565 (Marta) saiu como desatualizada.

## Correções (4, registradas no campo `correcao`)

- v12:5583: "Quantas seleções disputam a Copa do Mundo de 2026?" virou "disputaram", porque a Copa já aconteceu.
- v12:2864: "Qual clube revelou o atacante Rodrygo, do Real Madrid?" virou "antes da venda ao Real Madrid" (a saída dele era especulada em 2026).
- v12:3035: "Marquinhos, do PSG" virou "que virou capitão do PSG".
- v12:8492: "comanda o programa Jogo Aberto" virou "ficou marcada no comando".
Fora isso, os 5 campos do jogo estão idênticos aos da v12.

## Cruzamento com o banco Esportes novo

Comparei as 1.558 de futebol/NBA/UFC/F1 com as 1.334 perguntas `conferida` e `gerada` do piloto e dos lotes 001-013, nos dois sentidos, com `scripts/cruzamento.mjs` (compararE). O detector marcou 559 (301 "certa"); li uma a uma. A maioria era falso alarme (mesma resposta, fato diferente, como "Peso-pesado", "Boston Celtics", "Santos"). Tirei a reaproveitada quando a nova repete o fato ou quando um enunciado entrega a resposta do outro (exemplos: a nova cita "Copa João Havelange de 2000, que valeu como Campeonato Brasileiro"; a nova cita "Dennis Rodman, especialista em rebotes dos Bulls"). Os lotes 014 e 015 chegaram no meio do trabalho; também cruzei com eles e tirei 3.

Também cruzei as reaproveitadas entre si e tirei 24 (uma entregava a outra, como "MVP das Finais de 2008, pelo Boston Celtics" e "Qual time teve o Big Three... campeão em 2008").

## Detector de entrega

`node expansao/scripts/entrega.mjs --arquivo expansao/esportes/reaproveitadas-v12.json`: 1.019 perguntas, 1 suspeita parcial e 0 fortes. A suspeita (v12:3132, "Clássico dos Clássicos") é falso alarme: todas as alternativas começam com "Clássico".

## Campo obra_tema

Atribuído por palavra-chave, com os nomes já usados nos lotes. Entraram três nomes novos para o que não cabia nos existentes: "Regras, gírias e cultura do futebol" (96), "Regras e cultura do MMA" (6) e "Regras e termos da F1" (4). Futebol: Copa do Mundo 195, Champions e ligas europeias 166, Clubes do Brasil 106, Craques 60, Brasileirão 50, Libertadores e Sul-Americana 48, Seleção 40, Copa do Brasil e estaduais 38, Mundial de Clubes 18. Como é automático, vale uma olhada se o tema for usado para sortear partidas.

## Pontos para o dono olhar

- O futebol ficou com muito fácil e médio (369 e 360) e pouco difícil (88), porque o difícil da v12 quase sempre vira médio aqui.
- NBA, UFC e F1 têm poucas fáceis (11, 12 e 9). É o efeito da regra "fácil tem que ser famoso no Brasil".
- 166 perguntas de futebol europeu e 106 de apelidos, estádios e mascotes de clubes brasileiros: é bastante conteúdo de "almanaque".

## Listas
### Cruzamento com o banco Esportes novo (52)

| Origem | Pergunta da v12 (resumo) | Nova e motivo |
|---|---|---|
| v12:2622 | Qual piloto holandês foi campeão mundial de Fórmula 1 pela primeira vez em 2021, => Max Verstappen | 9202930f3f a nova cita "título de 2021" e "Verstappen" no enunciado, entrega a resposta |
| v12:2715 | Qual lutador russo se aposentou invicto como campeão dos pesos-leves do UFC? => Khabib Nurmagomedov | 08ea6026b6 a nova diz que Khabib se aposentou invicto, entrega a resposta |
| v12:2763 | Qual lutador brasileiro venceu três dos quatro primeiros torneios do UFC usando  => Royce Gracie | c2004ae140 a nova cita "Nos primeiros eventos do UFC, Royce Gracie", entrega a resposta |
| v12:2868 | Qual clube revelou o lateral Marcelo, ídolo do Real Madrid? => Fluminense | 60cd417866 o enunciado cita "lateral Marcelo, ídolo do Real Madrid", entrega a resposta da nova |
| v12:2873 | Qual time manda seus jogos no estádio Nilton Santos, o Engenhão? => Botafogo | 4c155539a8 o enunciado cita "estádio Nilton Santos" do Botafogo e entrega a resposta da nova (recordista de jogos do Botafogo) |
| v12:2895 | Qual clube brasileiro perdeu a final do Mundial de Clubes de 2021 para o Chelsea => Palmeiras | cd6ffc091f a nova cita o Palmeiras e o Chelsea no Mundial, entrega a resposta |
| v12:2908 | Qual jogador de cabelos coloridos era especialista em rebotes no Chicago Bulls d => Dennis Rodman | f0978353d6 a nova (lote 014/015) cita "Dennis Rodman, especialista em rebotes dos Bulls", entrega a resposta |
| v12:2909 | Qual técnico, apelidado de "Mestre Zen", comandou os Bulls de Jordan e os Lakers => Phil Jackson | 5bf0a31a24 a nova cita "Phil Jackson" como técnico campeão, entrega a resposta |
| v12:2913 | Contra qual time Michael Jordan decidiu as Finais de 1998 com o famoso "último a => Utah Jazz | af32e3cb7b a nova cita "ídolo do Utah Jazz" que perdeu finais para os Bulls, entrega a resposta |
| v12:2917 | Qual time conquistou o título da NBA de 2023, com Nikola Jokić? => Denver Nuggets | b9ba58bd46 a nova cita "final para o Denver Nuggets" em 2023, entrega a resposta |
| v12:2921 | Quem foi o MVP da temporada 2015-16, o primeiro escolhido por unanimidade? => Stephen Curry | d2bb7f5612 a nova cita Curry na temporada 2015/16, entrega a resposta |
| v12:2922 | Qual francês foi o primeiro escolhido do draft da NBA de 2023? => Victor Wembanyama | 2cb80a0413 a nova cita "Victor Wembanyama" e "clube francês", entrega a resposta |
| v12:2923 | Quem foi eleito o Novato do Ano da NBA na temporada 1984-85? => Michael Jordan | ee6c727a4e o enunciado cita "Novato do Ano", resposta da nova (lote 014/015) |
| v12:2927 | Como ficou conhecido o estilo veloz e espetacular dos Lakers de Magic Johnson no => Showtime | b34a41fe2e a nova cita "Lakers do Showtime", entrega a resposta |
| v12:2948 | Em qual categoria José Aldo foi campeão do UFC? => Peso-pena | a8b552bb19 a nova cita "cinturão peso-pena do UFC José Aldo", entrega a resposta |
| v12:2950 | Qual lutador brasileiro, apelidado de "Shogun", foi campeão dos meio-pesados do  => Maurício Rua | 66d661b6b1 o enunciado diz que Shogun foi campeão meio-pesado e entrega quem Jon Jones venceu na nova |
| v12:2960 | Qual é o nome do reality show do UFC que revela novos lutadores? => The Ultimate Fighter | 54e397d277 a nova (lote 014/015) cita "The Ultimate Fighter Brasil", entrega a resposta |
| v12:2961 | Qual brasileiro foi o primeiro campeão peso-pena da história do UFC? => José Aldo | a8b552bb19 a nova cita "cinturão peso-pena do UFC José Aldo", entrega a resposta |
| v12:2982 | Qual piloto brasileiro foi campeão da Fórmula 2 e estreou na Fórmula 1 pela Saub => Gabriel Bortoleto | 262fad2652 a nova cita "Gabriel Bortoleto" e "antiga Sauber", entrega a resposta |
| v12:3038 | Quem foi o MVP das Finais de 2019, pelo Toronto Raptors? => Kawhi Leonard | 384a01f9e2 a nova cita "Em 2019, Kawhi Leonard" nos playoffs, entrega a resposta |
| v12:3040 | Quem foi o MVP das Finais de 2025, pelo Oklahoma City Thunder? => Shai Gilgeous-Alexander | c87154db39 a nova cita "Shai Gilgeous-Alexander, astro do Oklahoma City Thunder", entrega a resposta |
| v12:3055 | Quem foi o MVP da temporada 2016-17, com média de triplo-duplo? => Russell Westbrook | 6422f29ff1 a nova pergunta o recordista de triplo-duplos e o enunciado daqui entrega a resposta |
| v12:3056 | Quem foi o MVP da temporada 2022-23, pelo Philadelphia 76ers? => Joel Embiid | c616daccc8 a nova cita "Joel Embiid" e "76ers", entrega a resposta |
| v12:3061 | Quem foi o Novato do Ano da temporada 2018-19, pelo Dallas Mavericks? => Luka Dončić | a4b3e50a25 a nova cita "Luka Dončić foi trocado do Dallas Mavericks", entrega a resposta |
| v12:3077 | Qual pivô congolês ficou famoso por balançar o dedo depois de dar tocos? => Dikembe Mutombo | 458d3c6a76 a nova cita "Dikembe Mutombo" entre os maiores defensores, entrega a resposta |
| v12:3097 | Qual era o nome do Cruzeiro antes de ser obrigado a mudá-lo durante a Segunda Gu => Palestra Itália | 13b1083ee0 a nova cita "Cruzeiro foi fundado, ainda como Palestra Itália", entrega a resposta |
| v12:3112 | Qual jogador é o maior artilheiro da história do Cruzeiro? => Tostão | f38cc082bb a nova cita "com Tostão a grande dupla do Cruzeiro", entrega a resposta |
| v12:3122 | Qual atacante marcou gols em todos os jogos do Brasil na Copa do tricampeonato? => Jairzinho | cb58448d8f a nova cita "gol de Jairzinho" na Copa de 1970, entrega a resposta |
| v12:3148 | Qual pivô ganhou o apelido de "The Process" no Philadelphia 76ers? => Joel Embiid | c616daccc8 a nova cita "Joel Embiid" e "76ers", entrega a resposta |
| v12:3160 | Em qual evento japonês de MMA brilharam Wanderlei Silva e Rodrigo Minotauro ante => Pride | be1dbac5f7 a nova cita "no Pride" no enunciado, entrega a resposta |
| v12:4575 | Qual clube venceu a Liga dos Campeões da Europa de 2023, batendo a Inter de Milã => Manchester City | 7ec3ea7cc6 pergunta invertida: a nova pergunta quem perdeu a final de 2023 para o City |
| v12:5752 | Qual lutador russo foi a grande lenda do evento japonês Pride? => Fedor Emelianenko | b25d5eeb75 a nova cita "russo Fedor Emelianenko", entrega a resposta |
| v12:5917 | Qual clube catarinense ganhou a Copa do Brasil de 1991, com Felipão como técnico => Criciúma | 38db85602b pergunta invertida: a nova pergunta o técnico do Criciúma em 1991 |
| v12:6008 | Qual craque uruguaio, ídolo do River Plate, inspirou Zidane na escolha do nome d => Enzo Francescoli | 7c78b7277a a nova cita "Enzo Francescoli" no River, entrega a resposta |
| v12:6195 | Qual clube espanhol ficou famoso por ganhar a Liga Europa sete vezes? => Sevilla | 9fec886b0c a nova cita "perdeu para o Sevilla a final da Liga Europa", entrega a resposta |
| v12:6197 | Qual clube ucraniano teve muitos brasileiros, como Fernandinho e Willian, nos an => Shakhtar Donetsk | 8f6eb7b16c a nova cita "Willian, que depois brilhou no Shakhtar", entrega a resposta |
| v12:7029 | Qual torneio, disputado até 2004, opunha o campeão europeu ao campeão sul-americ => Copa Intercontinental | 5bc29a4def a nova cita "Copa Intercontinental" no enunciado, entrega a resposta |
| v12:7484 | Qual prêmio é dado ao melhor goleiro de uma Copa do Mundo? => Luva de Ouro | 6a4c4cfd35 a nova cita "Luva de Ouro da Copa do Mundo", entrega a resposta |
| v12:7486 | Qual prêmio da revista Placar é dado aos melhores jogadores de cada posição no B => Bola de Prata | 8843e56e5c a nova cita "Bolas de Ouro, de Prata", entrega a resposta |
| v12:7652 | Qual torneio de seleções o Brasil venceu em casa em 2013, batendo a Espanha por  => Copa das Confederações | 7b82cc8c4a a nova cita "final da Copa das Confederações", entrega a resposta |
| v12:7658 | Qual torneio substituiu o Campeonato Brasileiro em 2000, organizado pelo Clube d => Copa João Havelange | af67f8db36 a nova cita "Copa João Havelange de 2000, que valeu como Campeonato Brasileiro", entrega a resposta |
| v12:7940 | Qual clube do interior paulista disputou a Série A do Brasileirão pela primeira  => Mirassol | 5cd0bad907 a nova cita o Mirassol no Brasileirão de 2025, entrega a resposta |
| v12:7943 | Qual prêmio da revista France Football elege o melhor jogador com menos de 21 an => Troféu Kopa | c66b40bd76 a nova cita "Troféu Kopa, de melhor jogador sub-21", entrega a resposta |
| v12:8397 | Qual clube equatoriano foi campeão da Copa Sul-Americana de 2019? => Independiente del Valle | 2f85d9d0b6 a nova cita o Independiente del Valle como campeão da Sul-Americana, entrega a resposta |
| v12:8400 | Em que ano a final da Libertadores passou a ser disputada em jogo único? => 2019 | 1075ede3b6 a nova cita "a primeira em jogo único" em 2019, entrega a resposta |
| v12:9037 | Qual time da NBA ficou conhecido como "Lob City", com Chris Paul e Blake Griffin => Los Angeles Clippers | 9aac725d31 o enunciado cita "Blake Griffin", resposta da nova |
| v12:10672 | Qual equatoriano é o maior artilheiro da história da Libertadores? => Alberto Spencer | 0b5fdf5625 a nova cita "Alberto Spencer" e o recorde da Libertadores, entrega a resposta |
| v12:11125 | Qual goleiro é o recordista de jogos pela história do Cruzeiro? => Fábio | 9830bad78f a nova cita o goleiro recordista de partidas, e o enunciado daqui entrega a resposta |
| v12:12084 | Qual meia argentino, autor de gols em finais pela seleção, é chamado de "Fideo"  => Di María | a74d4519d4 a nova pergunta quem fez o segundo gol da final de 2022 e o enunciado daqui entrega a resposta |
| v12:12130 | Qual centroavante argentino, artilheiro de Napoli e Juventus, tem o apelido de " => Higuaín | 26f6c0ca14 a nova cita "Gonzalo Higuaín" e o recorde da Serie A, entrega a resposta |
| v12:12471 | Por qual equipe Michael Schumacher ganhou seus dois primeiros títulos, em 1994 e => Benetton | 83099712cc a nova cita "A equipe Benetton" no enunciado, entrega a resposta |
| v12:12989 | Qual clube argentino foi campeão mundial de clubes em 1994, vencendo o Milan em  => Vélez Sarsfield | 8786b3bde2 a nova cita o Vélez campeão da Libertadores de 1994, entrega a resposta |

### Repetição interna entre reaproveitadas (24)

| Sai | Pergunta (resumo) | Motivo |
|---|---|---|
| v12:2598 | Por qual equipe Ayrton Senna conquistou seus três títulos mundiais? => McLaren | v12:2981 fica; a v12:2981 cita "Senna na McLaren" e entrega a resposta |
| v12:2830 | Qual meia holandês, famoso pelos dreadlocks, brilhou no Milan ao lado de Van Bas => Ruud Gullit | v12:2997 fica; o enunciado cita Van Basten no Milan e entrega a v12:2997 |
| v12:2846 | Qual clube venceu a Libertadores de 2022, batendo o Athletico Paranaense na fina => Flamengo | v12:2893 fica; a v12:2893 cita "Flamengo na final da Libertadores de 2022, contra o Athletico" e entrega a resposta |
| v12:2847 | Qual clube o Flamengo derrotou na final da Libertadores de 2025? => Palmeiras | v12:3028 fica; a v12:3028 cita "Flamengo na final da Libertadores de 2025, contra o Palmeiras" e entrega a resposta |
| v12:2851 | Qual clube paulista venceu o Liverpool na final do Mundial de Clubes de 2005? => São Paulo | v12:3118 fica; a v12:3118 cita "tricolor paulista no título mundial de 2005 contra o Liverpool" e entrega a resposta |
| v12:2889 | Qual clube gaúcho ganhou a Libertadores de 2017, vencendo o Lanús na final? => Grêmio | v12:6376 fica; a v12:6376 cita o título do Grêmio na Libertadores de 2017 e entrega a resposta |
| v12:2916 | Qual time foi campeão da NBA em 2021, liderado por Giannis Antetokounmpo? => Milwaukee Bucks | v12:3059 fica; a v12:3059 cita Giannis pelo Milwaukee Bucks e entrega a resposta |
| v12:2918 | Qual time foi campeão da NBA em 2024? => Boston Celtics | v12:6377 fica; a v12:6377 cita "Boston Celtics, campeão da NBA em 2024" e entrega a resposta |
| v12:2931 | Qual time teve o "Big Three" Kevin Garnett, Paul Pierce e Ray Allen, campeão da  => Boston Celtics | v12:3046 fica; a v12:3046 cita "Finais de 2008, pelo Boston Celtics" e entrega a resposta |
| v12:2951 | Qual brasileiro, conhecido como "The Dragon" e adepto do caratê, foi campeão mei => Lyoto Machida | v12:3085 fica; a v12:3085 cita "Lyoto Machida conquistou o cinturão meio-pesado" e entrega a resposta |
| v12:2971 | Em qual país fica o circuito de Fórmula 1 de Spa-Francorchamps? => Bélgica | v12:5665 fica; a v12:5665 cita "circuito belga" e entrega a resposta |
| v12:2979 | Qual franquia da NBA trocou New Jersey pelo bairro do Brooklyn? => Nets | v12:3073 fica; o enunciado cita New Jersey e entrega a v12:3073 |
| v12:3081 | Em qual país Fabrício Werdum conquistou o cinturão dos pesados, vencendo Cain Ve => México | v12:2952 fica; o enunciado cita Fabrício Werdum campeão e Cain Velasquez, entrega a v12:2952 e a v12:3080 |
| v12:3095 | Qual é o estádio do Juventude, em Caxias do Sul? => Alfredo Jaconi | v12:5402 fica; o enunciado cita "Juventude, em Caxias do Sul" e entrega a v12:5402 |
| v12:3164 | Quantos títulos mundiais de Fórmula 1 Emerson Fittipaldi conquistou? => Dois | v12:2487 fica; o enunciado cita Emerson Fittipaldi campeão e entrega a v12:2487 e a v12:3165 |
| v12:5087 | Qual atacante argentino foi artilheiro e campeão da Copa do Mundo de 1978? => Mario Kempes | v12:2808 fica; a v12:2808 cita Kempes como artilheiro de 1978 e entrega a resposta |
| v12:5231 | Qual piloto inglês foi campeão da Fórmula 1 em 1976, na disputa com Niki Lauda? => James Hunt | v12:2762 fica; o enunciado cita Niki Lauda e entrega a v12:2762 |
| v12:5444 | Como se chama o estádio do Guarani, em Campinas? => Brinco de Ouro | v12:2818 fica; o enunciado cita "Guarani, em Campinas" e entrega a v12:2818 e a v12:12401 |
| v12:6007 | Qual atacante búlgaro dividiu a artilharia da Copa de 1994 com o russo Oleg Sale => Hristo Stoichkov | v12:5916 fica; o enunciado cita "russo Oleg Salenko" e entrega a v12:5916 |
| v12:6192 | Qual clube alemão, ligado a uma farmacêutica, foi campeão invicto da Bundesliga  => Bayer Leverkusen | v12:10747 fica; mesmo fato da v12:10747 (Leverkusen invicto em 2023/24) |
| v12:6574 | Qual clube holandês de Roterdã venceu a Copa dos Campeões da Europa de 1970? => Feyenoord | v12:8031 fica; a v12:8031 cita "Feyenoord, em Roterdã" e entrega a resposta |
| v12:7944 | Qual estádio da Mooca, em São Paulo, é a casa do Juventus? => Rua Javari | v12:12494 fica; o enunciado cita "Juventus" na Mooca e entrega a v12:12494 |
| v12:9310 | Qual clube de San Sebastián faz o dérbi basco com o Athletic Bilbao? => Real Sociedad | v12:9092 fica; o enunciado cita Athletic Bilbao e entrega a v12:9092 |
| v12:11693 | Qual atacante, parceira de Sissi, foi destaque da seleção feminina dos anos 1990 => Pretinha | v12:9912 fica; o enunciado cita Sissi e entrega a v12:9912 |

### Fáceis da v12 que entraram (47)

- v12:2487 (f1, facil): Qual foi o primeiro piloto brasileiro campeão mundial de Fórmula 1? => Emerson Fittipaldi
- v12:2490 (f1, facil): Qual piloto brasileiro perdeu o título mundial de Fórmula 1 por apenas um ponto, na última => Felipe Massa
- v12:2599 (futebol, facil): Qual volante brasileira disputou sete Copas do Mundo de futebol feminino? => Formiga
- v12:2635 (nba, facil): Qual armador dos Lakers anunciou em 1991 que tinha HIV e depois foi um dos astros do Dream => Magic Johnson
- v12:2651 (futebol, facil): Qual clube foi campeão brasileiro de 2024, encerrando um jejum de quase 30 anos sem o títu => Botafogo
- v12:2652 (futebol, facil): Qual clube foi campeão brasileiro de 2025? => Flamengo
- v12:2681 (futebol, facil): Qual clube foi campeão brasileiro de 2023? => Palmeiras
- v12:2682 (futebol, facil): Qual clube foi campeão brasileiro de 2021? => Atlético Mineiro
- v12:2683 (futebol, facil): Quem foi o artilheiro do Brasileirão de 2019, com 25 gols? => Gabigol
- v12:2684 (futebol, facil): Qual clube foi campeão brasileiro de 2016, encerrando um jejum de 22 anos? => Palmeiras
- v12:2685 (futebol, facil): Qual clube foi campeão brasileiro de 2009, com Adriano e Petković? => Flamengo
- v12:2686 (futebol, facil): Qual clube ganhou a Copa do Brasil de 2023, seu primeiro título na competição? => São Paulo
- v12:2687 (futebol, facil): Qual clube conquistou a Libertadores de 2011, com Neymar e Ganso? => Santos
- v12:2710 (nba, facil): Qual time foi campeão da NBA em 2020, com LeBron James e Anthony Davis? => Los Angeles Lakers
- v12:2719 (ufc, facil): Qual brasileiro perdeu o cinturão para Conor McGregor em apenas 13 segundos? => José Aldo
- v12:2722 (ufc, facil): Qual brasileira nocauteou Ronda Rousey em menos de um minuto, defendendo seu cinturão? => Amanda Nunes
- v12:5309 (futebol, facil): Qual craque do tri de 1970 ficou famoso pela "patada atômica"? => Rivellino
- v12:5488 (futebol, facil): Qual atacante francês é o maior artilheiro da história do Arsenal? => Thierry Henry
- v12:5489 (futebol, facil): Qual atacante inglês é o maior artilheiro da história do Manchester United? => Wayne Rooney
- v12:5662 (futebol, facil): Qual goleiro brasileiro foi campeão da Champions League pelo Milan, em 2003? => Dida
- v12:5740 (futebol, facil): Qual lateral fez o gol de falta contra a Holanda nas quartas da Copa de 1994? => Branco
- v12:5907 (futebol, facil): Qual clube inglês ganhou a Champions League de 2012, vencendo o Bayern em Munique nos pêna => Chelsea
- v12:5953 (futebol, facil): Qual zagueiro espanhol, capitão do Real Madrid, marcou de cabeça o gol de empate nos acrés => Sergio Ramos
- v12:6052 (futebol, facil): Qual zagueiro de cabelos cacheados, capitão do Barcelona, marcou de cabeça o gol que levou => Carles Puyol
- v12:6092 (futebol, facil): Qual meia inglês, ídolo do Liverpool, comandou a virada contra o Milan na final da Champio => Steven Gerrard
- v12:6093 (futebol, facil): Qual meia inglês é o maior artilheiro da história do Chelsea? => Frank Lampard
- v12:6094 (futebol, facil): Qual atacante francês marcou de pênalti na final da Copa de 2018 e foi ídolo do Atlético d => Antoine Griezmann
- v12:6190 (futebol, facil): Qual zagueiro brasileiro, revelado pelo São Paulo, foi contratado pelo Real Madrid em 2019 => Éder Militão
- v12:6191 (futebol, facil): Qual clube argentino, o "Ciclón" de Boedo, é o time do coração do papa Francisco? => San Lorenzo
- v12:6277 (futebol, facil): Qual meia, camisa 7 do Flamengo campeão da Libertadores de 2019, fazia dupla com Arrascaet => Everton Ribeiro
- v12:6278 (futebol, facil): Qual lateral-direito brasileiro da Inter de Milão foi campeão da Champions League em 2010? => Maicon
- v12:6279 (futebol, medio): Qual goleiro foi o titular do Brasil nos títulos mundiais de 1958 e de 1962? => Gilmar
- v12:9720 (futebol, facil): No filme "Fuga para a Vitória", de 1981, Pelé jogou ao lado de qual astro de Hollywood, qu => Sylvester Stallone
- v12:9766 (futebol, facil): Qual clube canta "Agora quem dá bola é o ..." na marchinha "Leão do Mar", seu hino popular => Santos
- v12:9767 (futebol, facil): Qual clube carioca canta no hino que é "campeão desde 1910"? => Botafogo
- v12:10908 (futebol, facil): Qual clube paulista foi rebaixado pela primeira vez na história do Brasileirão em 2023? => Santos
- v12:10909 (futebol, facil): Em que ano o Corinthians foi rebaixado no Brasileirão? => 2007
- v12:10912 (futebol, facil): Qual seleção africana estreante venceu a França, campeã do mundo, na abertura da Copa de 2 => Senegal
- v12:10993 (futebol, facil): Qual ídolo do Flamengo foi técnico da seleção do Japão na Copa de 2006? => Zico
- v12:10994 (futebol, facil): Em qual cidade japonesa foi a final da Copa do Mundo de 2002? => Yokohama
- v12:10995 (futebol, medio): Em qual cidade americana, no estádio Rose Bowl, foi a final da Copa de 1994? => Pasadena
- v12:11111 (futebol, facil): Qual estádio mexicano recebeu, em 2026, a abertura de uma Copa do Mundo pela terceira vez? => Estádio Azteca
- v12:11170 (futebol, facil): Qual clube brasileiro chegou à semifinal do Mundial de Clubes da FIFA de 2025? => Fluminense
- v12:11172 (f1, facil): Qual heptacampeão da Fórmula 1 trocou a Mercedes pela Ferrari em 2025? => Lewis Hamilton
- v12:11284 (futebol, facil): Qual estádio de Nova Jersey recebeu a final da Copa do Mundo de 2026? => MetLife Stadium
- v12:11931 (futebol, facil): Qual árbitro carioca dos anos 1980 e 1990 ficou famoso pelos gestos exagerados e por um ap => Margarida
- v12:12355 (futebol, facil): Qual atacante senegalês formou com Salah e um brasileiro o trio de ataque do Liverpool cam => Sadio Mané

### Outro esporte que estava no meio de futebol/NBA/UFC/F1 (48)

v12:2484 (tênis); v12:2530 (artes marciais/cinema); v12:2603 (rúgbi); v12:2731 (atletismo); v12:2832 (Indy, não F1); v12:2835 (basquete feminino brasileiro); v12:4650 (rúgbi); v12:5825 (atletismo); v12:5829 (vôlei); v12:6003 (Indy, não F1); v12:6293 (Fórmula E, não F1); v12:6875 (rúgbi); v12:7067 (Fórmula E, não F1); v12:7112 (basquete genérico, não NBA); v12:7118 (basquete genérico, não NBA); v12:7201 (artes marciais); v12:7291 (rúgbi); v12:7295 (rúgbi); v12:8299 (e-sports); v12:8618 (skate); v12:8815 (ginástica); v12:9138 (turfe); v12:9163 (kabaddi); v12:9580 (futebol de cegos, paralímpico); v12:9640 (rúgbi); v12:9860 (Olimpíadas); v12:9913 (mascote olímpico); v12:9994 (squash); v12:10484 (basquete fora da NBA); v12:10518 (motovelocidade); v12:10752 (futebol gaélico); v12:10831 (atletismo); v12:10835 (atletismo); v12:10919 (snowboard); v12:11177 (atletismo); v12:11467 (boia-cross); v12:11510 (rúgbi); v12:11546 (golfe); v12:11770 (marca de roupas, não F1); v12:11854 (antidoping, não é futebol); v12:11860 (tribunal esportivo geral); v12:12086 (atletismo); v12:12248 (boxe); v12:12596 (WNBA, basquete fora da NBA); v12:12980 (basquete fora da NBA); v12:12981 (basquete fora da NBA); v12:12982 (basquete fora da NBA); v12:13056 (tênis)
