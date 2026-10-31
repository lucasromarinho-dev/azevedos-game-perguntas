# Esportes - conferência r1a (piloto, 004 e 005)

Conferente independente, que não escreveu as perguntas. As 260 perguntas `gerada` foram lidas uma a uma:
- `esportes-piloto.json`: 60;
- `esportes-004.json`: 100 de NBA;
- `esportes-005.json`: 50 de UFC e 50 de F1.

Cada pergunta ganhou `status`, `verificado_web_conferente` (fonte e trecho lido) e `conferido_por: conferente-esportes-r1a`. Quando foi o caso, ganhou também `correcao`, `dificuldade_ajuste` (com a direção e o motivo) e `motivo`.

## Resultado

| Esporte | Status | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|---|
| Futebol | conferida | 14 | 18 | 4 | 36 |
| NBA | conferida | 23 | 48 | 36 | 107 |
| NBA | reserva | 3 | 0 | 0 | 3 |
| NBA | descartada | 1 | 1 | 0 | 2 |
| UFC | conferida | 16 | 29 | 11 | 56 |
| F1 | conferida | 14 | 28 | 13 | 55 |
| F1 | reserva | 1 | 0 | 0 | 1 |
| **Total** | | | | | **260** |

Totais: **254 conferidas, 4 reservas, 2 descartadas**. A dificuldade da tabela já é a ajustada.

## Checagem web própria

- **275 checagens**, pelo menos uma por pergunta, todas com o trecho lido e anotado.
- **Fontes, diferentes das do gerador sempre que deu:**
  - Wikipédia pt (texto bruto do verbete);
  - Sherdog (cartel de Pereira, Charles, Jon Jones, McGregor, Adesanya e Khabib);
  - StatsF1 (vitórias e poles do Senna);
  - Wikipédia en só quando a pt não trazia o fato (quase todo fato de 2025 e 2026, finais e prêmios da NBA).
- User-Agent genérico de navegador.
- Basketball-Reference bloqueou o acesso automático (403). Por isso a NBA foi checada na Wikipédia pt, na lista de campeões da pt e em verbetes da en.
- **Fatos de 2025 e 2026, todos com trecho lido:**
  - Copa de 2026: Espanha 1 x 0 Argentina na prorrogação; Ferran Torres; Rodri Bola de Ouro; Mbappé com 10 gols; Enzo Fernández expulso; Noruega 2 x 0 Brasil, com pênalti do Bruno Guimarães defendido pelo Nyland;
  - Champions de 2025/26: PSG campeão nos pênaltis, com gol do Havertz; Arsenal campeão inglês;
  - Sul-Americana de 2025: Lanús;
  - NBA: Knicks 4 x 1 Spurs; Brunson MVP das finais; tapinha do Anunoby; Spurs eliminando o Thunder em 7 jogos; Mike Brown e Mitch Johnson; SGA MVP pela segunda vez; Wembanyama Defensor do Ano; Mazzulla Técnico do Ano; Edwards MVP do All-Star de 2026 (EUA x Mundo); McClung tricampeão de enterradas; Chris Paul aposentado em fevereiro de 2026;
  - UFC: Freedom 250 na Casa Branca em 14/06/2026; Pereira no peso-pesado em 2026; Charles x Holloway no UFC 326; Makhachev no UFC 322; Dern no UFC 321; Aspinall promovido;
  - F1: Norris campeão e Verstappen vice por 2 pontos; Norris, Antonelli e Verstappen no pódio de Interlagos 2025; primeiros pontos do Bortoleto na Áustria 2025; Antonelli na China 2026; Bortoleto na Audi.
- **Pontos que conferi a mais:**
  - Charles do Bronx venceu o Holloway por decisão. Por isso as 17 finalizações da p.53 continuam certas.
  - A Wikipédia en diz que LeBron tem 24 temporadas hoje. A 004.79 pergunta pela temporada 2025/26, em que ele chegou a 23 e bateu o recorde, então continua certa.

## Correções de fato

- **004.94:** o apelido do Rafael Araújo é **"Bábby"**, e não "Baby" (Wikipédia pt).
- **005.24:** o chute do Machida no Couture foi **comparado** ao chute da garça do Karatê Kid. A fonte não diz que foi "inspirado" no filme, e o enunciado foi ajustado.
- **004.55:** saiu "sete times". Chris Paul estava no Raptors, sem jogar, quando foi dispensado, e a conta de times fica ambígua.
- **005.96:** as alternativas tinham "Ralph Schumacher" e "Ralf Schumacher", que são a mesma pessoa. O enunciado dizia "italiano", e isso não batia com as alternativas. O enunciado foi reescrito sem a nacionalidade, e entraram Alonso e Coulthard.

## Enunciados que entregavam a resposta (29 reescritos)

O `entrega.mjs` não pega estes casos, porque a resposta entregue é de **outra** pergunta: do v12 ou do próprio banco Esportes.

**Contra o v12:**
- p.17 e p.25 (Botafogo na final de 2024 x v12:2647);
- p.18 (Fluminense na semifinal x v12:11170);
- p.20 ("primeiro título do PSG" x v12:10746);
- p.26 (Boca x Fluminense x v12:2879 e v12:2648);
- p.50, p.51 e 005.20 ("cinturão peso-leve" x v12:2949);
- p.52 e 005.46 (Pereira x Adesanya pelo cinturão x v12:2956);
- 004.36 ("pivô do 76ers" x "The Process", v12:3148);
- 004.41 ("dos Cavaliers" em 2016 x v12:2912);
- 004.51 (Barcelona x v12:2616);
- 004.88 (Bucks campeão de 2021 x v12:2916);
- 005.44 (derrota para McGregor x v12:2719);
- 005.55 (Verstappen campeão de 2021 x v12:2622);
- 005.70 (Senna e Prost x v12:2981);
- 005.71 ("tricampeonato" do Piquet x v12:2760).

**Dentro do banco Esportes:**
- p.12 (Espanha x Argentina entregava a p.0);
- p.47, 004.42 e 004.69 ("Knicks campeão" entregava a p.36);
- 004.68 (Spurs no Oeste entregava a 004.42).

**Dentro da própria pergunta:**
- 004.97 ("de 1984 a 1986" entregava o 3);
- 005.66 ("sobrinho do Ayrton", com só a resposta sendo Senna). Virou a pergunta da dupla da Williams com Maldonado.

## Ajustes de dificuldade (46)

**Para o lado mais fácil (16).** A calibração do Lucas diz que detalhe de lance de final é médio.

- **Futebol (10):**
  - p.12 (gol do título da Copa) e p.22 (Lanús): de médio para fácil, como o Lucas marcou na amostra cega.
  - De difícil para médio (8): p.24 (5 x 0), p.25 (Gregore), p.26 (Advíncula), p.27 (Montiel), p.30 (Enzo expulso), p.31 (pênalti do Bruno Guimarães), p.33 (Havertz) e p.34 (Montevidéu, mesmo nível da sede de 2024).
- **UFC (4), de difícil para médio:** p.52 (5º round, como o Lucas marcou), 005.46 (round), 005.47 (Jamahal Hill) e 005.49 (Holloway).
- **NBA (1), de difícil para médio:** 004.87 (bola do Ray Allen em 2013).
- **F1 (1), de difícil para médio:** 005.94 (Timo Glock em 2008).

**Para o lado mais difícil (30).** A régua diz que NBA, UFC e F1 a galera acompanha menos, e que o fácil tem que ser famoso de verdade no Brasil.

- **NBA, de fácil para médio (12):**
  - p.36 (Knicks, como o Lucas marcou);
  - p.39 (time do Wemby);
  - 004.6 ("I'm back");
  - 004.10 (4 títulos do LeBron);
  - 004.17 (Shaq no Heat);
  - 004.21 (Big Fundamental);
  - 004.25 e 004.72 (prêmios do Wemby);
  - 004.26 (altura);
  - 004.27 (4 ouros do Durant);
  - 004.32 (2 ouros do Jordan);
  - 004.33 (3 aposentadorias).
- **NBA, de médio para difícil (8):**
  - p.41 (Flagg, primeira escolha);
  - 004.42 e 004.64 (vices, mesmo nível dos vices de 2021 e 2022);
  - 004.43 (Técnico do Ano);
  - 004.58 (Hornets no draft do Kobe);
  - 004.60 (McClung);
  - 004.66 (Metropolitans 92);
  - 004.69 (Mike Brown).
- **UFC (5):**
  - de fácil para médio: 005.4 ("Fenômeno"), 005.8 (Lesnar), 005.14 (ano do UFC 1) e 005.27 (Holly Holm);
  - de médio para difícil: 005.36 (Matt Hamill).
- **F1, de fácil para médio (5):**
  - p.55 (Cadillac);
  - 005.53 (agora com Mercedes e Ferrari nas opções);
  - 005.61 (Piastri);
  - 005.63 (ano do título do Senna);
  - 005.66 (reescrita).

## Alternativas trocadas (49, em 24 perguntas)

**As erradas fracas que o gerador apontou:**
- 005.15: "Peso-galo" virou "Peso-médio".
- 005.87: Hadjar e Bearman viraram Russell e Leclerc.
- Pilotos brasileiros antigos (Pizzonia, Diniz, Christian e Pietro Fittipaldi) viraram brasileiros da mesma época:
  - 005.65: Barrichello, Zonta e da Matta;
  - 005.66: Massa, Barrichello e Nasr;
  - 005.74: Massa, Nelsinho e Bruno Senna;
  - 005.76: Massa, Barrichello e di Grassi;
  - 005.58: Massa e Emerson.

**Outras erradas fracas:**
- 005.50: Piquet e Moss viraram Prost e Schumacher, que têm 4 e 5 vitórias em Mônaco.
- 005.53: Toyota e BMW Sauber viraram Mercedes e Ferrari.
- 005.71: Tyrrell e Arrows viraram Brabham e Lotus.
- 005.77: Indy virou Fórmula 2.
- 005.78: Bearman e Gasly viraram Antonelli e Verstappen, que foram o 2º e o 3º.
- 005.82: Herbert virou Damon Hill.
- 005.84: Patrese, Coulthard e Bottas viraram Räikkönen, Barrichello e Hamilton.
- 004.17: Kings e Hawks viraram Lakers e Magic.
- 004.42: Kings virou Thunder.
- 004.68: Grizzlies e Kings viraram Nuggets e Lakers.
- 004.88: Nets e Kings viraram Bucks e Jazz.

**Por causa das reescritas:**
- p.12: Lautaro e Julián Álvarez, para as opções não serem só espanhóis.
- p.20: Inzaghi, Flick e Arteta.
- p.25: Battaglia e Otávio, do Atlético, para as opções não serem só do Botafogo.
- p.47: Wembanyama.
- 004.41: Curry e Klay.
- 005.96: Alonso e Coulthard.

Algumas erradas novas são resposta de outra pergunta de assunto diferente (Thunder, Lakers, Wembanyama, Antonelli, Verstappen, Barrichello, Massa). Nenhuma delas entrega nada.

## Descartadas (2)

- **004.39 (4 títulos do Curry):** é fato repetido do v12:3066. Kerr comandou os títulos de 2015, 2017, 2018 e 2022, que são os quatro do Curry.
- **004.7 (primeiro título do LeBron pelo Heat):** o v12 já liga LeBron ao Heat (2942, "A Decisão", e 2930, Big Three). Além disso, os enunciados da 004.67 e da 004.90 entregam a resposta.

## Reservas (4)

- **004.3 e 004.4 (enterrada de 1988 e 63 pontos):** o lote tinha 5 fáceis com resposta Michael Jordan. Ficaram 1, 2 e 5.
- **004.14 (infância do Kobe na Itália):** era a quarta fácil com resposta Kobe Bryant.
- **005.62 (Jos Verstappen):** "pai do tetracampeão Max" entrega pelo sobrenome, de qualquer jeito que se escreva.

## Cruzamento com o v12

- Rodei um cruzamento próprio contra as 13.986 do v12. Ele junta palavras do enunciado e da resposta e marca quando a resposta é a mesma.
- Fiz também uma busca por termo (NBA, UFC, F1, times, astros, pilotos).
- Resultado:
  - **2 fatos repetidos**, descartados acima;
  - **18 enunciados que entregavam a resposta de uma pergunta do v12**, todos reescritos e listados acima.
- O resto é falso alarme: mesma pessoa ou time, fato diferente. Exemplos:
  - Kobe 60 pontos x 81 pontos;
  - SGA MVP de 2025/26 x MVP das finais de 2025;
  - Bortoleto F3 x F2 e Sauber;
  - Piquet em 1987 pela Williams x Brabham em 1981 e 1983;
  - Machida x Couture x cinturão sobre Rashad Evans.

## Detector de entrega

`node expansao/scripts/entrega.mjs --arquivo` nos três lotes: **0 suspeitas** (60, 100 e 100 perguntas).

## Pontos para o dono olhar

- **O futebol do piloto ficou com só 4 difíceis em 36** (14 fáceis, 18 médias e 4 difíceis), porque a régua do Lucas leva lance de final para médio. Os lotes 001 a 003 de futebol podem compensar com mais números exatos.
- **A NBA ficou mais pesada:** 23 fáceis, 48 médias e 36 difíceis nas conferidas. Isso segue a régua de que campeão recente é médio. Vale ver se o Lucas concorda com vices e prêmios recentes como difíceis.
- **A final da NBA de 2026 ainda tem 6 perguntas:** campeão, MVP, tapinha, vice, técnico e final do Oeste. Agora nenhuma entrega a outra, mas o assunto está concentrado.
