# Notas - rodada 1 do banco Esportes: NBA, UFC e F1

Arquivos:
- `expansao/esportes/lotes/esportes-004.json`: NBA, 100 perguntas;
- `expansao/esportes/lotes/esportes-005.json`: UFC (50) e F1 (50).

Formato igual ao do piloto: status `gerada`, categoria `Esportes`, `subtema` (nba, ufc ou f1), `obra_tema`, `motivo_dificuldade` e `verificado_web`.

## Totais

| Esporte | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| NBA | 35 | 40 | 25 | 100 |
| UFC | 18 | 20 | 12 | 50 |
| F1 | 18 | 20 | 12 | 50 |
| **Total** | **71** | **80** | **49** | **200** |

**Por `obra_tema`:**
- **NBA:** Lendas 37, Era atual 21, Finais e campeões 16, Recordes 13, All-Star e enterradas 10, Brasileiros na NBA 3. Oscar Schmidt no Hall da Fama ficou em Lendas.
- **UFC:** Lutas históricas 16, Cinturões 12, Brasileiros no UFC 11, Lendas estrangeiras 7, Recordes 4.
- **F1:** Brasileiros na F1 12, Senna 9, Campeões 9, GP do Brasil 8, Recordes 4, Lendas 3, Era atual 3, Equipes 2.

**Outros números:**
- **Fatos de 2025 e 2026:** 26 perguntas, todas com o ano no enunciado.
- **Posição da resposta certa:** 50 vezes em cada uma das 4 posições.

## Régua usada (a do Lucas, de 31/10)

- **Fácil.** A resposta é um astro realmente famoso no Brasil, ou o fato é um momento que todo mundo viu. Exemplos: Jordan, LeBron, Kobe, Shaq, Magic, Curry, Durant, Jokić, Wembanyama, Anderson Silva, Poatan, McGregor, Senna, Hamilton e Schumacher. Quando o fato é mais miúdo, a resposta continua sendo o astro (Flu Game, "The Shot", Kazaam, Oscar do Kobe).
- **Médio.** Campeão, vice ou técnico recente da NBA (o Lucas calibrou que campeão recente da NBA é médio). Também entram o adversário de uma luta de cinturão, um detalhe de lance (bola do Kyrie em 2016, mola no capacete do Massa), um prêmio da temporada ou o número de títulos.
- **Difícil.** Número exato, como média de pontos, recorde, posição no draft, defesas de cinturão, cartel, round, poles e vitórias. Também entram o vice de uma final antiga e um personagem secundário de um lance (Ray Allen em 2013, Timo Glock em 2008).

## Checagem web

- **Fonte:** as 200 perguntas foram checadas na Wikipédia (199 na en, 1 na pt), com **212 trechos lidos**. Usei a API da Wikipédia com User-Agent genérico de navegador.
- **Como checou:** cada fato foi procurado no texto da página por um trecho que o confirma. O trecho está em `verificado_web`, com a página.
- **Fatos de 2025 e 2026:** todos vieram da leitura, não da memória. Entre eles:
  - SGA MVP de 2025/26;
  - Wembanyama Defensor do Ano;
  - Mazzulla Técnico do Ano;
  - Spurs vice e Thunder eliminado em 7 jogos na final do Oeste de 2026;
  - Mike Brown técnico campeão;
  - Anthony Edwards MVP do All-Star de 2026 no formato EUA x Mundo;
  - LeBron com a 23ª temporada;
  - aposentadoria do Chris Paul em fevereiro de 2026;
  - UFC na Casa Branca (Freedom 250, 14/06/2026);
  - Poatan no peso-pesado em 2026;
  - Charles x Holloway no UFC 326;
  - Makhachev campeão meio-médio no UFC 322;
  - Mackenzie Dern no UFC 321;
  - Aspinall campeão linear;
  - Norris vencedor em Interlagos 2025;
  - Verstappen vice por 2 pontos;
  - primeira vitória do Antonelli na China em 2026;
  - Bortoleto na Audi.
- **Saíram por falta de trecho que confirmasse:**
  - grito "Chama!" do Poatan (só aparecia em título de reportagem);
  - "The Chosen One" do LeBron;
  - apelido "Rato" do Emerson;
  - Hamilton com a bandeira do Brasil em 2021;
  - total de vitórias do Hamilton (o número pode mudar em 2026). Troquei por "em qual GP passou o Schumacher".

## Cruzamento

**Contra o quê:** o v12 inteiro (todas as categorias), o piloto e as próprias 200 perguntas.

**Como:**
- Antes de escrever, li as perguntas do v12 que falam de NBA, UFC e F1 (213, 109 e 144) e evitei esses fatos.
- Depois rodei as duas camadas do detector, como em `desenhos/scripts/cruzar-v12.mjs`: `cruzamento.mjs` (entidades) e `semelhanca.mjs` (texto).

**Cortes por repetição:**
- **Cortadas pelo detector (7):**
  - "The Answer" do Iverson (v12:2944);
  - "The Mailman" do Malone (v12:2943);
  - Nash MVP em 2005 e 2006 (v12:3058);
  - Raulzinho no Utah Jazz (v12:11894);
  - apelido "Bate-Estaca" (v12:2953);
  - Jéssica Andrade x Rose Namajunas (v12:3083);
  - Gabriel Leone como Senna na série da Netflix. Este está no v12:13500, em outra categoria, e por isso não tinha aparecido na leitura prévia.
- **Cortadas por proximidade (3):**
  - Pereira x Ankalaev no UFC 320, mesma luta que o piloto usa;
  - Hakeem "The Dream", que já está no v12;
  - "Poatan trabalhou numa borracharia", porque outros enunciados do lote já citam Alex Pereira e entregavam a resposta.
- **Reescritas para o enunciado não entregar a resposta de outra pergunta do v12 ou do piloto:**
  - Embiid (sem o "MVP 2022/23");
  - Garnett (sem o "Big Ticket");
  - Isiah Thomas (sem "Bad Boys");
  - Charles x Holloway (sem "BMF");
  - Lesnar (sem "WWE", que é resposta da pergunta da Ronda);
  - GP de São Paulo (sem "Interlagos");
  - Bortoleto (sem "campeão da F2").

**O que sobrou no detector:** 185 marcas em 120 perguntas. Conferi uma a uma e são **falso alarme**: a mesma pessoa ou o mesmo time, mas outro fato. Exemplos:
- Jordan "His Airness" x Novato do Ano de 1985;
- Kobe 60 pontos x 81 pontos;
- SGA MVP da temporada 2025/26 x MVP das Finais de 2025;
- Celtics 18 títulos x campeão de 2024;
- Pereira no UFC 295 e no UFC 313 x categoria recuperada em 2025 (piloto);
- Adesanya no UFC 287 x round do UFC 281 (piloto);
- Norris vencedor em Interlagos 2025 x campeão de 2025 (piloto);
- Alonso recordista de GPs x bicampeão pela Renault.

**Dentro dos dois lotes:** nenhum fato repetido. Wembanyama tem dois prêmios diferentes (Novato 2023/24 e Defensor 2025/26).

## Detector de entrega e alternativas cruzadas

**Detector de entrega:**
- `node expansao/scripts/entrega.mjs --arquivo` deu **0 suspeitas** nos dois lotes.
- Na primeira passada eram 4 no lote 005, e as quatro foram reescritas:
  - Khabib x McGregor;
  - Tema da Vitória;
  - pai do Verstappen;
  - sobrinho do Senna.

**Alternativas cruzadas:**
- Usei uma versão adaptada do `alternativas-cruzadas.mjs`, sobre o v12, o piloto e os lotes 004 e 005.
- A primeira passada apontou **234 erradas em 112 perguntas**: astros, times e pilotos que são resposta de outra pergunta do mesmo lote ou resposta rara de Esportes.
- Todas foram trocadas por nomes do mesmo tipo que não são resposta de nada.
- Para liberar Lakers como errada, a pergunta da NBA Cup 2023 (resposta Lakers) saiu e entrou Mazzulla, Técnico do Ano de 2025/26.
- Resultado final: **0**.

## Pontos para o dono olhar

- **NBA fácil é a faixa mais apertada.** O v12 já usa quase todo fato fácil das lendas (camisas, times, apelidos, campeões). Por isso várias fáceis da NBA têm o astro como resposta e um fato de bastidor de jogo no enunciado (Flu Game, "The Shot", 63 pontos contra os Celtics). Vale ver na amostra se o Lucas acha isso fácil mesmo.
- **Erradas fracas.** Com o filtro de alternativas cruzadas, algumas erradas ficaram menos fortes:
  - "Peso-galo" na pergunta da categoria do Poatan em 2026;
  - Hadjar e Bearman no vice de 2025;
  - pilotos brasileiros antigos (Pizzonia, Diniz, Christian Fittipaldi) em perguntas de 2006 a 2009.
  - Estão corretas, mas são mais fáceis de descartar.
- **Poucos brasileiros na NBA.** São só 3 perguntas, porque o v12 já usa Nenê, Varejão, Splitter, Leandrinho Sexto Homem, Huertas, Caboclo, Felício e Bebê.
