# Notas - rodada 3 do banco Esportes: NBA, UFC e F1

Arquivos:
- `expansao/esportes/lotes/esportes-014.json`: NBA, 100 perguntas;
- `expansao/esportes/lotes/esportes-015.json`: UFC (50) e F1 (50).

Formato igual ao das rodadas 1 e 2: status `gerada`, categoria `Esportes`, `subtema` (nba, ufc ou f1), `obra_tema`, `motivo_dificuldade` e `verificado_web`. O id segue o `gerarId` do `lib.mjs`.

## Totais

| Esporte | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| NBA | 38 | 40 | 22 | 100 |
| UFC | 17 | 20 | 13 | 50 |
| F1 | 17 | 20 | 13 | 50 |
| **Total** | **72** | **80** | **48** | **200** |

- **Posição da resposta certa:** 25 vezes em cada uma das 4 posições, em cada lote.
- **Fatos recentes com data no texto:** Bam Adebayo com 83 pontos (março de 2026), TNT fora da NBA (fim de 2024/25), NBA Cup de 2023, UFC 314 (abril de 2025), UFC 313 (março de 2025), UFC 297 (janeiro de 2024), UFC 283 (janeiro de 2023), Paramount com o UFC desde 2026, Colapinto (estreia em 2024). Nada da temporada 2026 da F1, que ainda está em aberto.

## Assuntos novos

- **NBA:** franquias e cidades de origem (Fort Wayne, Filadélfia, Buffalo Braves, Vancouver), símbolos de times (Hawks, Bucks, Pelicans), drafts famosos (Bowie, Darko, Oden, Jokić e o comercial da Taco Bell), recordes de pontos (Booker 70, Jordan 69, Baylor 61 em final, Davis 52 no All-Star, Bam 83), Finais de 1990 a 2010 (The Shrug, Paxson, Knicks 8º colocado, Pierce no jogo 1 de 2008), estrangeiros e latinos (Porziņģis, Horford, Scola, Barea, Ewing, Nash, Marc Gasol, Porto Rico em 2004), técnicos (Riley, Auerbach, Daly, Phil Jackson jogador, Bill Russell).
- **UFC:** TUF Brasil (Globo, técnicos das temporadas 1 e 2, Rony Jason e Cezar Ferreira campeões), os primeiros UFCs (sem categorias, 8 lutadores, pay-per-view, Severn, Marco Ruas, Bustamante, Ultimate Brazil), os Gracie (Rorion, Belém e Maeda, a ideia do Hélio, faixa vermelha), cinturões femininos (primeiras campeãs dos pesos palha, mosca e pena; Pennington), brasileiros atuais (Diego Lopes, Ruffy, Poatan na borracharia, Charles e a febre reumática).
- **F1:** campeões dos anos 70 a 90 (Lauda 1975, Alan Jones 1980, Prost 1993 na Williams), Williams e McLaren de Senna e Piquet (BMW 1983, suspensão ativa, 15 de 16 em 1988, Mansell em Adelaide, Ron Dennis, Patrick Head), Interlagos (os lagos, sentido anti-horário, Curva do Sol), pole e corridas marcantes (Fisichella em Spa 2009, Hülkenberg em 2010, Panis em Mônaco 1996, Jerez 1986, Coulthard em 2001), família Fittipaldi.

## Lições da rodada 2 aplicadas

- **NBA fácil sem cultura pop de nicho.** As 38 fáceis de NBA são regras e termos que todo fã de basquete conhece (aro a 3,05 m, 5 em quadra, 82 jogos, armador, pivô, dois dribles, and-one, varrida), símbolos de time óbvios e astros muito famosos (Jordan, LeBron, Magic, Kareem, Rodman). Nada de McDonald's, Drake, Spike Lee ou apelido de jogador menos famoso como fácil.
- **No máximo 3 fáceis com a mesma resposta:** Jordan tem 3 (Jumpman, MVP de todas as finais, meme do choro); o 4º fato de Jordan (23XI Racing) ficou médio.
- **Enunciado sem pista de outra pergunta.** Nada de "Pride", "Red Bull", "tetracampeão", "McLaren" nas perguntas de Senna, "S do Senna", "Barcelona" ou "Toleman".

## Checagem web

- **201 checagens**, todas na API da Wikipédia (en, e pt em Wanderlei Silva, Canal Combate e Reginaldo Leme), com User-Agent genérico de navegador. Cada pergunta tem pelo menos um trecho lido em `verificado_web`.
- Cada trecho foi lido e conferido contra o enunciado. Quando o trecho só citava o nome, sem confirmar o fato, o regex foi trocado por um que pega a frase certa, ou a pergunta saiu.
- **Correções feitas pela leitura do trecho:**
  - Steven Seagal ajudou Lyoto Machida no chute que aposentou Randy Couture (e não Anderson Silva no de Belfort). A pergunta foi reescrita.
  - A frase de Kimi Räikkönen em 2012 é "Just leave me alone, I know what to do!". A pergunta saiu.
  - Iverson ficou sem o "mais baixo da história a ganhar o MVP", que nenhum trecho confirmava.
  - Barea ficou sem a altura; Newey saiu porque o trecho fala de chefe de equipe desde 2026.

## Cortes

**Fato repetido no v12 ou nos lotes 001-010 (cruzamento):** Splash Brothers (v12:2929), garrafão (v12:7112), tempo no garrafão (o v12:7112 traz os três segundos no texto), Mutombo congolês (v12:3077), Xuxa (v12:13562), Galisteu (v12:13173), bandeira amarela (v12:10742), pit stop (v12:5906), Gabriel Leone na série "Senna" (v12:13500). Antes de escrever, também caíram da lista ideias que o v12 já tem: Varejão, Yao Ming, "The Answer", Nash MVP, Kerr, Jazz e Nova Orleans, Jokić e Sérvia, Dirk e Alemanha, Curry MVP unânime, "A Decisão", gancho do céu, Werdum no México, Khabib e Daguestão, Bate-Estaca, Jéssica e Namajunas, Nürburgring, Suzuka, Jacarepaguá, Monza "Templo da Velocidade".

**Entregava a resposta de outra pergunta:** Sabonis (o texto citava a resposta do v12:12984), Popovich (v12:3067), Jordan no beisebol (v12:2805), Bethe Correia "Pitbull" (010:20), José Carlos Pace em 1975 (v12:2759), Senna no GP do Brasil de 1993 (010:91), Ewing 1ª escolha de 1985 (ligava à outra do Ewing), "KD" e "GSP" (sigla igual às iniciais da resposta).

**Sem trecho que confirmasse:** Curry e o protetor bucal, finais em junho, LeBron e o contrato vitalício, tatuagem "Chosen 1", frase do Garnett, NBA Jam, cor dos Bulls, símbolos de Suns, Timberwolves, Kings e Hornets, prorrogação de 5 minutos, regra dos 8 segundos, bordão "Chama" do Poatan, apelido "Beco", Royce no lugar de Rickson, Shamrock na semifinal do UFC 1, cores JPS da Lotus, Berger em Monza 1988, Reutemann em 1981, corta-luz (além disso, ficava perto do v12:7118).

**Cota de dificuldade:** Bobcats 7-59, Iverson no draft de 1996, Peja no três pontos, "Pezão", Anderson em Curitiba, última luta do Anderson, Marlboro.

## Cruzamento

- Contra o v12 inteiro, o piloto e os lotes 001-010 (011-013 ainda não estavam na branch), com as duas camadas (`cruzamento.mjs` e `semelhanca.mjs`) num script no scratchpad.
- **Reescritas para não entregar resposta de outra pergunta:**
  - UFC 229 sem os nomes de Khabib e McGregor (005:7);
  - apelido "Cyborg" sem "Cris Justino" (v12:2792);
  - cicatriz do Aldo sem "Manaus" (005:25) e UFC 163 sem "cinturão dos penas" (v12:2961);
  - Darko sem Bosh e Wade (v12:2930);
  - Buffalo Braves virou pergunta pela franquia (v12:2708);
  - Chuck Daly sem "Barcelona" (v12:2616);
  - Ant-Man sem "Timberwolves" (era a resposta do lobo);
  - Ron Dennis e a marca de cigarros sem "McLaren" (v12:2598);
  - Curva do Sol sem "S do Senna" (v12:2516);
  - Coulthard sem Montoya (010:76);
  - LeBron campeão por três times sem listar Heat e Cavaliers (v12:2942);
  - Barea sem "Dallas" (v12:2915); Nash sem "bicampeão de MVP" (v12:3058).
- **O que sobrou no detector:** 104 marcadas, todas lidas uma a uma. São falso alarme: mesma pessoa, outro fato (Bill Russell técnico x troféu com o nome dele, Wilt nunca expulso x 100 pontos, Lauda 1975 x acidente de 1976, Glover despedida x título aos 42) ou palavras parecidas (Aço x suportes de aço, Cervo x cervo-do-pantanal, Jump shot x Base jump).

## Detector de entrega

`node expansao/scripts/entrega.mjs --arquivo` deu **0 suspeitas** nos dois lotes. Na primeira passada eram 8, todas resolvidas: KD e GSP saíram; a pressão em quadra inteira virou "Full-court press"; a série da HBO ficou sem "Lakers" no texto; e quatro respostas foram enxugadas (UFC 229, soco na nuca, Lyoto e o pai, Curva do Sol).

## Pontos para o dono olhar

- **Fáceis de NBA apoiadas em regras e termos (cerca de 20 das 38).** Ficaram fáceis de verdade, mas são mais "basquete" do que "NBA". Se a amostra achar que destoam do tema, dá para trocar por astros.
- **Respostas repetidas entre lotes**, com fatos diferentes: Phoenix Suns (004:88 e a "Seven Seconds or Less"), New York Knicks (piloto:36, Phil Jackson e a final de 1999), Bruce Lee (v12:2530), Harlem Globetrotters (v12:2633), Michael Schumacher (Ralf no texto e o recorde de voltas rápidas no mesmo lote).
- **Fatos de 2025 e 2026 com uma fonte só:** Bam Adebayo 83 pontos, Paramount e o UFC, Diego Lopes no UFC 314, Ruffy no UFC 313.
