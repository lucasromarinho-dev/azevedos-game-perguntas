# Desenhos v2: perguntas reaproveitadas (428)

Seletor das reaproveitadas, 01/11/2026, branch `expansao`. O banco publicado (`perguntas-desenhos.json`, sha 6af4d4b9...) e os arquivos da v1 não foram mexidos. A pasta `v2/lotes/` (perguntas novas) é de outro agente e não foi tocada.

## Arquivos

- `reaproveitadas.json`: 428 fichas, na ordem fáceis, médias, difíceis. Cada uma tem os 5 campos do jogo (categoria "Desenhos", dificuldade, pergunta, resposta, alternativas) e mais `origem`, `obra`, `grupo`, `status` "reaproveitada", `musica` quando é o caso, `dificuldade_origem` quando a dificuldade mudou, `correcao` quando o texto mudou, e `gemea_v12` nas Disney que antes tinham sido cortadas por repetir o v12.
- `fora-reaproveitadas.json`: o que ficou de fora, com o motivo de cada uma.

## Números

| | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| Reaproveitadas | 189 | 162 | 77 | 428 |
| Banco atual | 350 | 400 | 250 | 1.000 |
| Soma | 539 | 562 | 327 | 1.428 |

- Para a meta de 2.000 (800/760/440), as 572 que faltam precisam ficar perto de 261 fáceis, 198 médias e 113 difíceis.
- **Por fonte:** v12 281 (268 de Entretenimento, 10 de Tecnologia, 1 de Ciências); sobras da Disney 125; Disney cortadas antes por repetir o v12 18; reservas do lote 007 4.
- **Por grupo:** Disney 154, Pixar 50, anime 71, Cartoon/Nick 50, clássicos 50, DreamWorks e similares 25, Brasil 28.
- **Disney + Pixar:** 204 novas, 654 no banco final. O teto é 1.000. O grupo Disney daqui inclui Mickey, Pato Donald e Tio Patinhas, Tico e Teco, Gravity Falls e Kim Possible.
- **Obras (banco atual + novas):** Dragon Ball 43, Turma da Mônica 39, Pokémon 38, Bob Esponja 31, Toy Story (franquia) 30, Frozen (franquia) 28, Looney Tunes 25, Shrek (franquia) 22, Os Simpsons 21, Os Cavaleiros do Zodíaco 20. Nenhuma passa de 60.
- **Música:** 13 (12 sobras Disney e Dom Pixote cantando "Clementine"). Só título, filme ou personagem, nenhuma letra.

## Fontes

1. **v12** (`correcoes/perguntas-v12.json`). Ponto de partida: as 307 de tema "animacao-disney" da classificação `classificacao/entretenimento-v11.json`, ligadas ao v12 pelo texto. Depois, uma busca por obra no resto de Entretenimento (Turma da Mônica, Sítio, Snoopy, Garfield, Luluzinha, Riquinho e o bloco de detalhes de fã do Simpsons, Dragon Ball, Pokémon, Naruto, Cavaleiros, Bob Esponja, Shrek). Por fim, as outras categorias: 10 de Pokémon em Tecnologia e a ararinha-azul de Rio em Ciências.
   - **Não entraram pela régua:**
     - bastidor: estúdio, técnica, diretor, dublador, criador, prêmio, ano de criação;
     - adulto: Rick and Morty, South Park, Family Guy, Futurama, Fudêncio, cerveja e bar dos Simpsons;
     - anime adolescente ou adulto: Death Note, Attack on Titan, Demon Slayer, One Punch Man, Your Name, Mononoke;
     - nicho: Shaman King, Space Ghost, Betty Boop, Moranguinho como boneca, nome do meio e primeiro nome de personagem dos Simpsons e do Siriguejo;
     - tom: tiro no Sr. Burns, Sideshow Bob "tentando matar", Comichão e Coçadinha;
     - não é desenho: Chaves, Castelo Rá-Tim-Bum, Bananas de Pijama, Power Rangers, Topo Gigio, live-actions, Grinch.
   - **Nome na dúvida, ficou fora:**
     - 3313 Speedy Gonzales: no Brasil é Ligeirinho, que entra pela 8788;
     - 3417 "Substância X": a dublagem diz Elemento X, e a v1 já descartou o fato.
2. **Sobras da seleção Disney.** As 333 sobras do `selecionar-disney.mjs` foram separadas pelo motivo, numa cópia do script no scratchpad. O script do repositório não rodou.
   - 155 ficaram de fora só por cota, 2 por teto de filme e 18 por "mesma resposta na franquia".
   - As outras 158 estavam em grupo exclusivo com uma das 450 (repetem ou entregam o fato). Não entraram.
3. **Reservas dos lotes 001-007.** Entraram Glória e Margo (cota), Máquina do Mal (variedade) e Vó Dita (teto).
   - Linus ficou fora porque a v12:3310 (Charlie Brown) entra e o enunciado dele cita Charlie Brown.
   - Steve (entrega), Angelica (fato não exclusivo) e Hyoga (ligado à v12:13802, que entra) também ficaram fora.
   - As reservas dos lotes 001-006 saíram todas por nicho, nome não confirmado, entrega ou bastidor, e nenhuma entrou.
4. **Extra: Disney cortadas antes por repetir o v12.** Fora das três fontes pedidas, mas o corte só existia porque o dono ainda não aceitava repetição entre os modos. Foram 145.
   - 59 têm a gêmea do v12 escolhida aqui e ficaram fora.
   - Das 86 restantes, 18 passaram no cruzamento e entraram. Estão marcadas com `gemea_v12`.
   - Sem elas, o total seria 410.

## Cruzamento

- **Como foi feito:**
  - script próprio no scratchpad, que chama `compararE` (`cruzamento.mjs`) nos dois sentidos e `comparar` (`semelhanca.mjs`);
  - cada candidata contra as 1.000 atuais, as 3.000 de Esportes e as outras candidatas;
  - todas as marcas impressas, não só a pior, e lidas uma a uma.
- **Régua da v1:**
  - sai a pergunta cuja resposta já é resposta de outra pergunta da mesma obra no banco;
  - sai a pergunta cujo fato ou pista outro enunciado já entrega;
  - fica a que só cita o nome de um personagem principal sem dar o fato.
- **Resultado:** 169 saíram por cruzamento.
  - 104: o banco atual já entrega o fato. Exemplos: "família Madrigal" com "não faz parte da família Madrigal em Encanto", Úrsula vilã, "capangas de Hades", "Em Tarzan, o que Clayton quer fazer com os gorilas", Olívia Palito com Brutus, "irmão de Hiro que criou Baymax".
  - 30: mesma resposta numa pergunta da mesma obra (Olaf, Elsa, Anna, Gênio, Scar, Maui, Mushu, Balu, Patolino, Madame Samovar, Kristoff).
  - 27: cruzamento entre as escolhidas. Exemplos: One Piece com Luffy, "caixa-forte do Tio Patinhas", "Ohana ... Experimento 626", "Lá em Nova Orleans" com "em que cidade Tiana vive".
  - 8: régua (complete o título, resposta dada pelo próprio título).
- **Esportes:** só marcas de palavra comum (Urso, Texas, Cervo, Leão). Nenhuma pergunta da v2 fala de Space Jam.
- **Marcas que ficaram:** 134 candidatas com alguma marca na passada final (55 "certa"), todas lidas.
  - Pergunta de título com o título citado noutros enunciados, como no banco atual (Sailor Moon, Gumball, Irmão do Jorel, Du, Dudu e Edu, Os Smurfs, "Todos Querem Ser um Gato").
  - Personagem principal citado sem o fato (Lula Molusco, Sr. Burns, Vegeta, Rainha de Copas, Mike Wazowski).
  - Respostas iguais em obras diferentes (Penny, Paris, Gary, Porquinho, cores e bichos).
- **Alternativas:** muitas erradas são personagens que são resposta de outra pergunta da mesma obra. É o que já vinha do v12 e das conferidas da Disney, e não entrega o fato. Não foram trocadas.

## Correções (34 fichas com `correcao`)

- **Dublagem e grafia:**
  - Baloo virou **Balu**;
  - "Os Anjinhos" virou a resposta **Rugrats: Os Anjinhos**, porque a errada era o próprio desenho, e a errada nova é "Os Thornberrys";
  - Wall-E virou WALL-E (a pergunta acabou fora);
  - "Seu Siriguejo" virou **Sr. Siriguejo**, para ficar igual à errada da v12:3257.
- **Fato:** a Coraline é menina, não garoto. Saiu também o estúdio Laika.
- **Bastidor tirado do texto:**
  - voz de Antonio Banderas, Zé Carioca "criado em 1942", Oscar da Viagem de Chihiro e de Klaus;
  - Craig McCracken, "produzido por Spielberg";
  - "mangá" virou o desenho ou o anime (Dragon Ball Z, Naruto, One Piece).
- **Entrega tirada do enunciado:**
  - "planos ... para pegar o Sansão" (resposta de outra);
  - "conserta o prédio" no Felix;
  - "amiga do leão Alex" na Glória (Alex é resposta do banco);
  - "cachorrinho verde" no Floquinho (Verde é resposta do banco);
  - "em Paris" no cargo de Frollo.
- **Tom e redação:**
  - "torturado" virou "interrogado" (Biscoito);
  - "odeiam" virou "não suportam" (Patty e Selma);
  - "dois fadas" virou "duas fadas";
  - o nome da obra entrou no começo das perguntas soltas do bloco de fã.

## Dificuldade (régua família)

- **Mudanças:** 109 fichas com `dificuldade_origem` diferente.
  - A maior parte é do v12, que media pelo adulto: Crush, Dug, Heihei, Slinky e Shifu desceram, e o bloco de fã do v12 virou difícil ou médio conforme a criança que viu.
  - Mais 41 de médio para fácil (Sr. Burns, Shifu, Heihei, Carl, Tigrão, Planos infalíveis, Meowth, Jigglypuff e outras).
  - Mais 19 de difícil para médio: Homem Sereia e Mexilhãozinho, Holandês Voador, Kuririn e a 18, Rumpelstiltskin, Penny e Mittens de Bolt, entre outras.
- **Nenhuma difícil é bastidor.** São detalhes de fã: golpes, mestres, parentes, lugares.

## Fato com data

- v12:1732 (ararinha-azul de Rio, "chegou a ser considerada extinta na natureza"). Conferido na pt.wikipedia, lida em 01/11/2026 (User-Agent genérico): declarada extinta na natureza em 2002 e reintroduzida em 2022. Fica em `verificado_web`.
- As outras não dependem de data. Os anos que aparecem (KPop Demon Hunters de 2025, Moana 2 de 2024, Robô Selvagem de 2024) só situam o filme.

## Validação

- `node expansao/scripts/entrega.mjs --arquivo expansao/desenhos/v2/reaproveitadas.json`: 428 perguntas, 0 suspeitas.
- **Checagem própria:**
  - 4 alternativas distintas com a resposta entre elas;
  - nenhum enunciado repetido;
  - nenhum travessão longo;
  - NFC.
- Os scripts de trabalho ficaram no scratchpad (`anim-reap`), fora do repositório.
