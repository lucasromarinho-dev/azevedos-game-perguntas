# Notas - rodada 2 do banco Esportes: NBA, UFC e F1

Arquivos:
- `expansao/esportes/lotes/esportes-009.json`: NBA, 100 perguntas;
- `expansao/esportes/lotes/esportes-010.json`: UFC (50) e F1 (50).

Formato igual ao da rodada 1: status `gerada`, categoria `Esportes`, `subtema` (nba, ufc ou f1), `obra_tema`, `motivo_dificuldade` e `verificado_web`. O id segue o `gerarId` do `lib.mjs`.

## Totais

| Esporte | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| NBA | 42 | 38 | 20 | 100 |
| UFC | 18 | 20 | 12 | 50 |
| F1 | 18 | 20 | 12 | 50 |
| **Total** | **78** | **78** | **44** | **200** |

**Por `obra_tema`:**
- **NBA:** Lendas 26, Cultura pop 23, Finais e campeões 11, Times 9, Rivalidades 7, Recordes 6, All-Star e enterradas 5, Era atual 5, Dream Team 4, Brasileiros na NBA 4.
- **UFC:** Lendas estrangeiras 11, Brasileiros no UFC 8, Cinturões femininos 8, Eventos no Brasil 7, Pride 6, Lutas históricas 5, Recordes 3, Cinturões 2.
- **F1:** Senna 9, Equipes 8, GP do Brasil 7, Era Schumacher 5, Era Vettel 5, Lendas 4, Era atual 4, Brasileiros na F1 3, Campeões 2, Circuitos 2, Recordes 1.

**Outros números:**
- **Posição da resposta certa:** 25 vezes em cada uma das 4 posições, em cada lote.
- **Fatos recentes:** todos com a data no enunciado (Paris 2024, estátua do Kobe em fevereiro de 2024, trombose do Wembanyama em fevereiro de 2025, All-Star de 2026, UFC 301 em maio de 2024, UFC 306 em setembro de 2024, Kayla Harrison em junho de 2025, Pantoja em dezembro de 2025, Band em 2021).

## Lições da rodada 1 aplicadas

**NBA mais leve.** A NBA saiu com 42 fáceis e 38 médias. O fácil foi montado de dois jeitos:
- a resposta é um astro famosíssimo no Brasil (Jordan, LeBron, Kobe, Shaq, Curry, Magic, Bird, Rodman, Kareem, Durant), com erradas de nomes menos conhecidos;
- ou o assunto é cultura pop que o público geral conhece, e a resposta nem é um jogador: Nike, Gatorade, McDonald's, Netflix, o filme "Air", o talento roubado no filme com os Looney Tunes, a bandeira sobre o logo da Reebok, Jack Nicholson, Spike Lee, Drake, Bill Murray.

**No máximo 3 fáceis com a mesma resposta.** Ficaram com 3: Jordan, LeBron, Kobe e Shaq. Com 2: Curry, Magic e Rodman. No UFC e na F1, só José Aldo se repete (2).

**Enunciado que entrega a resposta de outra pergunta.** Antes de escrever, li as 490 perguntas do v12 ligadas a NBA, UFC e F1 e todas do piloto e dos lotes 004 e 005. Regras que segui:
- nunca "Interlagos", "WWE", "Barcelona", "Space Jam", "Dream Team" como pista, nem "Bulls de Jordan", "Lakers de Kobe", "Cavaliers de 2016" ou "cinturão dos penas do Aldo", porque são respostas de perguntas do v12 ou da rodada 1;
- o filme de 1996 aparece como "o filme em que Michael Jordan joga com os Looney Tunes";
- Senna sem "McLaren" (v12:2598), sem "capacete amarelo" (v12:2531) e sem "S do Senna" (v12:2516).

**Erradas fortes da mesma época.** Exemplos: Marc Gasol na do Pau Gasol, Michael Buffer na do Bruce Buffer, Seth Curry na do Dell Curry, Ralf Schumacher na do Montoya, Kvyat, Sirotkin e Mazepin na do Petrov.

## Checagem web

- **236 checagens** (121 na NBA, 59 no UFC e 56 na F1), todas com o trecho lido e anotado em `verificado_web`.
- **Fonte:** API da Wikipédia (229 na en, 7 na pt), com User-Agent genérico de navegador. Basketball-Reference não foi usado.
- **Como checou:** para cada fato, um trecho do texto da página que o confirma. Quando o trecho não batia com o enunciado, o enunciado foi ajustado ou a pergunta saiu.

**Saíram ou mudaram por falta de trecho que confirmasse:**
- Curry com a camisa 30: virou a pergunta do pai, Dell Curry, que teve a camisa 30 aposentada pelo Hornets;
- nome da carta "I'm Coming Home", do LeBron: a pergunta ficou com "texto publicado na Sports Illustrated";
- "You the real MVP", do Durant: ficou só o MVP de 2013/14;
- Iverson e o crossover em Jordan: virou a entrevista do "practice";
- primeiro jogo da NBA no Brasil em 2013 (Bulls x Wizards): a fonte só traz Cavaliers x Heat no Rio, em 2014;
- Miami Heat = "calor", Vettel e o dedo indicador, bigode do Mansell, Lyoto e a urina, comemoração de arco e flecha do Poatan;
- "estreante" (Montoya), "chileno" (Salazar), "marido de Beyoncé" com ano de mudança para o Brooklyn (Jay-Z) e "em 2022, segundo a Forbes" (LeBron bilionário) foram tirados quando o trecho não trazia o detalhe;
- o comercial McDonald's de Jordan e Bird ficou sem ano, porque a fonte diz 1991 e a lembrança comum é 1993.

## Cruzamento

**Contra o quê:** o v12 inteiro, o piloto, os lotes 001 a 008 (o futebol da rodada 2 entrou na branch antes do envio e foi incluído) e os dois lotes novos.

**Como:** as duas camadas do detector (`cruzamento.mjs` e `semelhanca.mjs`), num script próprio no scratchpad, igual ao da rodada 1.

**Cortes e reescritas por causa do cruzamento:**
- **Cortada (fato repetido):** Mutombo e o dedo depois do toco, que é o v12:3077. Entrou Gheorghe Mureșan no filme "Meu Gigante".
- **Cortada (número igual ao de outra pergunta):** Dirk com 21 temporadas, porque a 004.55 cita as 21 temporadas do Chris Paul. Entrou o recorde de 30 assistências do Scott Skiles.
- **Reescritas para não entregar a resposta de outra pergunta:**
  - a final universitária de 1979 sem "Magic e Bird" (entregava a 009.5);
  - a ponte aérea de 2000 sem "Shaquille" (a 009.31 diz que os dois eram companheiros);
  - a estátua do Kobe sem "Los Angeles" (v12:2693);
  - Shaq quebrando a tabela sem "1992/93" (v12:3063, draft de 1992);
  - Jay-Z sem "marido de Beyoncé" (v12:6754);
  - Drake sem "rapper canadense" (v12:6386);
  - Royce x Sakuraba com o apelido "Caçador de Gracies" no lugar do nome (entregava a 010.24);
  - Grasso sem "Valentina" (entregava a 010.30);
  - Pantoja sem o nome (v12:2963).

**O que sobrou no detector:** 109 perguntas marcadas. Conferi uma a uma. São **falso alarme**: mesma pessoa ou time, mas outro fato. Exemplos:
- Rodman com Madonna x Rodman na Coreia do Norte;
- Kobe no torneio de enterradas de 1997 x troféu do All-Star com o nome dele (004.15);
- Lakers 17 títulos x Kobe jogou só nos Lakers (v12:2693);
- Raptors e o dinossauro x Raptors campeão de 2019 (v12:2914);
- "Jordan Rules" x a equipe Jordan na F1;
- Band na F1 x Faustão na Band (v12:13400);
- Schumacher estreou na Jordan x Barrichello estreou na Jordan (005.93). Mesma resposta, piloto e ano diferentes.

## Detector de entrega

`node expansao/scripts/entrega.mjs --arquivo` deu **0 suspeitas** nos dois lotes. Na primeira passada eram 3, todas na NBA, e as três ganharam uma errada com o mesmo sobrenome:
- Dell Curry (com Seth Curry);
- "Chef Curry" (com Seth Curry);
- "Big Game James" (com James Edwards).

## Pontos para o dono olhar

- **Alternativas cruzadas.** O filtro estrito da rodada 1 (errada que é resposta de outra pergunta) aponta 175 erradas, 53 delas resposta de outra pergunta do próprio lote. Não zerei de propósito. São astros da mesma época (Curry, Durant, Isiah, Barkley, Ewing, Aldo), que a rodada 1 pediu como erradas fortes. Nenhuma entrega resposta.
- **NBA fácil apoiada em cultura pop.** Umas 15 fáceis de NBA são de cinema, propaganda e famosos na torcida. Vale ver na amostra se o Lucas acha isso fácil e se combina com o tema.
- **Brasileiros na NBA continuam poucos (4).** O v12 e a rodada 1 já usam quase todos os nomes: Nenê, Varejão, Splitter, Leandrinho, Huertas, Caboclo, Felício, Bebê, Raulzinho, Rafael Araújo e Gui Santos.
- **010.73 e 010.78 têm a mesma resposta (Brasil),** mas são decisões de anos diferentes: 2007 e 2009.
