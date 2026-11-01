# Esportes - conferência r4b (lotes 016 e 017, NBA da rodada 4)

Conferente independente, que não escreveu as perguntas. As 210 perguntas `gerada` foram lidas uma a uma:
- `esportes-016.json`: 110 de NBA;
- `esportes-017.json`: 100 de NBA.

Cada pergunta ganhou `status`, `verificado_web_conferente` (fonte e trecho lido) e `conferido_por: conferente-esportes-r4b`. Quando foi o caso, ganhou também `correcao`, `dificuldade_ajuste` (de, para e motivo) e `motivo` (reserva ou descarte). O `id` não foi alterado nas reescritas.

## Resultado

| Status | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| conferida | 10 | 25 | 111 | 146 |
| reserva | 1 | 2 | 55 | 58 |
| descartada | 1 | 2 | 3 | 6 |
| **Total** | **12** | **29** | **169** | **210** |

A dificuldade da tabela já é a ajustada. Posição da resposta certa nas conferidas: 016 = 23/14/19/17; 017 = 18/18/18/19.

## Checagem web própria

- **230 checagens** com trecho lido; todas as 210 perguntas têm pelo menos uma.
- **Fontes:** a base foi a Wikipédia es (ficha do jogador com "draft de la nba = 1.ª ronda (puesto N)", páginas "Finales de la NBA de ANO" com campeão, vice e MVP, páginas de draft e de franquia) e a Wikipédia pt. Para o que essas não traziam: NBA.com (recorde de rebotes do Wilt, concurso de enterradas de 1988, jogo de 370 pontos), ESPN, CBS, SI, NBC, AP, olympics.com e FIBA (NBA Cup de 2024, 27 bolas de três seguidas do Houston, bronze e placar de Paris 2024, final de Tóquio, último jogo de Jordan, Forbes 2014, Spalding). A Wikipédia en entrou só em verbete diferente do gerador (jogo dos 100 pontos, temporada 1985/86 do Celtics, Tyronn Lue, shot clock, NBA 2K).
- User-Agent genérico de navegador. A API da Wikipédia limitou o acesso (429) no começo; daí em diante, com pausa e cache.
- Trechos lidos que **não** confirmavam o fato foram jogados fora e a pergunta foi checada de novo (ex.: o primeiro "27" achado era dos 27 pontos de John Starks em 1994; o primeiro "25 pontos" do LeBron era da final do colégio).

### Números exatos conferidos
Todos os números batem com a fonte: 37,1 de média de Jordan, 32.292 e 5.987 pontos, 14 All-Stars, 5 MVPs; 38.387 pontos, 19 All-Stars e 1.560 jogos de Kareem; 33.643 de Kobe; 15.806 assistências e 3.265 roubos de Stockton; 3.830 tocos de Hakeem; 181 triplos-duplos de Oscar; 55 rebotes de Wilt; 1.390 vitórias de Popovich; 7-59 do Bobcats; 28 derrotas seguidas do 76ers; 40-1 em casa do Celtics de 1985/86; 69-13 dos Bulls de 1996/97; 117,3 de média do Dream Team; 98 a 87 em Paris; 17 ouros olímpicos; 12 finais Lakers x Celtics; e as 50 posições de draft (ficha de cada jogador).

## Correções de fato (1)

- **017:95 (Like Mike):** o filme não se chama "Como Mike" no Brasil. Saiu aqui como **"Pequenos Grandes Astros"** (Wikipédia pt, título-br). O enunciado agora traz o título brasileiro e o original entre parênteses.

Fora isso, nenhum fato errado.

## Variedade: molde de draft

O molde de draft tinha **65 perguntas** nos dois lotes (50 de posição, 12 de 1ª escolha, 3 de "qual time escolheu"). Ficaram **25**, e 40 foram para reserva:
- **Posição (16):** Kobe 13ª, Pippen 5ª, Parker 28ª, Lillard 6ª, Nenê 7ª, Leandrinho 28ª, Brunson 33ª (016); Draymond 35ª, Varejão 30ª, Ginóbili 57ª, Bird 6ª, Shai 11ª, Gui Santos 55ª, Jokić 41ª, Splitter 28ª, Curry 7ª (017).
- **1ª escolha (6):** Yao Ming, Anthony Bennett, Kwame Brown, David Robinson, Derrick Rose, Anthony Davis.
- **Qual time escolheu (3):** Dirk (Bucks), Kawhi (Pacers), Luka (Hawks).
- **Reserva:** posição de jogador menos lembrado no Brasil ou repetida em outra pergunta (CP3, Haliburton, Pierce, Carmelo, Murray, Harden, Kawhi, Morant, Raulzinho, Jaylen Brown, Caboclo, Chet, Magic, Iverson, Dirk, Oladipo, Tatum, Gasol, Garnett, Wade, Ray Allen, Barnes, Siakam, Mitchell, Embiid, Westbrook, Nash, Bosh, Gobert, Love, Trae, Booker, Klay, Butler) e 1ª escolha recente (Wall, Edwards, Banchero, Cade, Blake Griffin, Towns). Magic e Iverson também porque "1ª" se chuta fácil.

Os outros moldes ficaram abaixo de 25: vice/adversário de final (17 conferidas), número/recorde (cerca de 25, com 3 cortados), MVP de final antiga (5), MVP da temporada (cerca de 10), ano de franquia (5 conferidas).

## Reservas por obscuridade (régua do dono)

Difíceis só por serem obscuras, sem graça: Clippers em 1984 (016:20), estreia do Heat (016:58), estreia dos Bulls (016:63), vice de 1971 Baltimore Bullets (016:100), Stephon Castle Novato do Ano (017:3), roubos de Stockton (017:11), jogos de Kareem (017:62), 40-1 em casa do Celtics (017:82), Jazz em 1979 (017:90).

## Repetição e entrega de outra pergunta

Comparação manual de cada pergunta com as 580 perguntas de NBA/basquete do v12, das reaproveitadas, do piloto e dos lotes 001-015, 018-020, por nome, resposta e termo (Kobe, Jordan, Space Jam, ABA, Thunder, Grizzlies, Hornets, Stockton, Wilt, Hakeem, triplo-duplo, Paris 2024 etc.). O `entrega.mjs` não pega estes casos, porque a resposta entregue é de **outra** pergunta.

### Descartes (6)
- **016:25 (Spurs varrem o time de LeBron em 2007):** o v12:3047 ("MVP das Finais de 2007, pelo San Antonio Spurs") já entrega a resposta.
- **017:42 (enterrada da linha do lance livre):** mesmo fato do 004:3 (reserva).
- **017:57 (Kobe na Itália):** mesmo fato do 004:14 (reserva).
- **017:69 (Shaq, 3 MVPs das finais):** mesmo fato do v12:2941 (MVP de 2000, 2001 e 2002).
- **017:71 (63 pontos contra o Celtics):** mesmo fato do 004:4 (reserva).
- **017:80 (ano dos 81 pontos de Kobe):** mesmo jogo do v12:2926, que o enunciado entregava.

### Reservas por repetição ou entrega (9)
016:14 (Oscar e os triplos-duplos entregam a 017:54), 016:15 (último jogo de Kobe = 004:13), 016:53 (Nets no Brooklyn = v12:2979), 016:55 (ABA = 014:72), 016:69 (Caboclo no draft de 2014 = v12:11893), 016:72 (Tune Squad: Space Jam já tem 5 perguntas e a alternativa "Monstars" é a resposta do 009:45), 016:80 (Air Jordan: 014:0, 014:20 e 009:0), 016:86 (Sonics virou Thunder = v12:3139), 017:2 (venda dos Hornets entrega o 009:67), 017:73 (Birmingham Barons: o enunciado com "beisebol" entrega o v12:2805).

### Enunciados reescritos (33)
- **Vice de final sem o campeão no texto:** 016:4 (2024, Celtics entregava v12:2918 e 004:30), 016:9 e 016:85 (Rockets entregava v12:2920), 017:0 (Raptors, v12:2914), 017:93 (Lakers, v12:2710), 016:2 (Cavaliers, v12:2912).
- **Sem "recordista":** 016:99 Stockton (v12:3136), 017:87 Hakeem (v12:3138), 017:79 Wilt (v12:3137), 016:22 Kareem "maior cestinha até 2023" (v12:2924).
- **Sem nacionalidade ou rótulo que é resposta de outra:** "o brasileiro" em Nenê, Leandrinho, Varejão, Splitter e Gui Santos (v12:2702, 2934, 2828, 2933, 004:53); "o argentino" Ginóbili (v12:2827); "o francês" Parker (009:52).
- **Outras pistas:** 016:26 sem "de Michael Jordan" (009:67), 016:51 sem "título de 2026" (piloto:36), 016:61 sem "Wizards" (v12:3076), 016:74 sem "Minneapolis" (v12:3071), 017:7 e 017:88 sem "direto para a NBA" (004:9 e 014:26), 017:15 sem Wilt (v12:2925), 017:26 sem "tetracampeão" (v12:3066), 017:36 sem "ABA" (014:72), 017:75 sem "Lew Alcindor" (004:20), 017:77 sem "Seattle" (v12:3139), 017:81 sem "Miami Heat" (004:17), 017:85 sem "França" (piloto:38), 017:99 sem "Vancouver Grizzlies" (014:63), 017:98 sem "do Golden State" e com alternativas dos dois finalistas (entregava a 017:0).
- **Alternativas trocadas por serem resposta de outra pergunta:** 016:6 (30,1 = 004:75), 016:22 (32.292 = 016:34), 016:34 e 017:34 (38.387 = 016:22).
- **016:107:** sobrava ", ?" no fim do enunciado.

### Detector de entrega
`node expansao/scripts/entrega.mjs --arquivo` deu **0 suspeitas** nos dois lotes, depois das reescritas.

## Ajustes de dificuldade (4)

- **016:4 (vice de 2024):** difícil para médio. Adversário de final recente; a régua chama campeão recente da NBA de médio.
- **016:39 (Karl Malone no Dream Team):** fácil para médio. Jordan seria fácil; Malone exige acompanhar NBA.
- **016:107 (bronze de Paris 2024):** médio para difícil. Bronze olímpico de seleção estrangeira quase ninguém guarda.
- **017:53 (Shaq na LSU):** médio para difícil, mesmo nível de Duncan (016:23) e Kareem (017:75).

## Pontos para o dono olhar

- **NBA fácil continua curta:** 10 conferidas (Dream Team com jogadores da NBA, NBA 2K, Texas, estátua de Jordan, camisa 23 do LeBron, Jordan bilionário, Gianna, Heat na Flórida, urso do Grizzlies, filme "Pequenos Grandes Astros"). Jordan é resposta de 3 delas.
- **O difícil de NBA é quase todo número:** das 111 difíceis conferidas, cerca de 25 são de draft e outras 25 de número ou recorde. Vale espalhar no jogo para não caírem juntas.
- **Reservas de draft (40)** estão corretas de fato e podem voltar se faltar difícil na montagem.
- **017:4 (Jordan bilionário em 2014) x 009:26 (LeBron, primeiro bilionário ainda em atividade):** os dois fatos estão certos e não se contradizem, mas são vizinhos.
