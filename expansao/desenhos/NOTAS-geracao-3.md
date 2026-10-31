# Desenhos, geração 3: lote desenhos-007 (35 perguntas)

Lote `lotes/desenhos-007.json`, com 35 perguntas, todas com status `gerada` e categoria `Desenhos`.
Cada ficha traz `fonte_tema`, `obra` e `verificado_web`. Nada de Disney ou Pixar.
O lote cobre as 25 que faltam para fechar as 550 de animação fora da Disney/Pixar, com 10 de folga.

## Totais

| Grupo | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| DreamWorks / Illumination / Sony / Blue Sky | 2 | 2 | 4 | 8 |
| Cartoon Network / Nickelodeon | 2 | 2 | 4 | 8 |
| Desenhos clássicos | 2 | 2 | 4 | 8 |
| Anime de família | 1 | 2 | 3 | 6 |
| Desenhos do Brasil | 1 | 1 | 3 | 5 |
| **Total** | **8** | **9** | **18** | **35** |

- **Estúdios no primeiro grupo:** DreamWorks 3 (Madagascar 2, Megamente), Illumination 2 (Meu Malvado Favorito), Sony 2 (Tá Chovendo Hambúrguer, Hotel Transilvânia), Blue Sky 1 (A Era do Gelo 3).
- **Cartoon/Nick:** Meninas Superpoderosas, Steven Universo, Mansão Foster, Samurai Jack, Billy e Mandy (Cartoon); Danny Phantom, Avatar, Os Anjinhos (Nick).
- **Clássicos:** Snoopy 3, Garfield 2, Corrida Maluca 2, Manda-Chuva 1.
- **Anime:** Doraemon, Hamtaro, Cavaleiros do Zodíaco, Sakura Card Captors, O Serviço de Entregas da Kiki, Ponyo.
- **Brasil:** Turma da Mônica 4 (Chico Bento, mãe da Mônica, nome do Cebolinha, Vó Dita), Irmão do Jorel 1.
- **Posição da resposta** (A/B/C/D): 8/9/9/9.
- **Difíceis:** todas são detalhe da história (personagem, lugar, objeto). Nenhuma pergunta de ano, estúdio, criador ou dublador.

## Checagem web (35 de 35)

- O wikitexto foi baixado pela API, com User-Agent genérico. Cada trecho foi lido à mão, e o trecho que confirma o fato está citado em `verificado_web`.
- **Fontes:** Wikipédia pt, Dublagem Wiki (dublagem.fandom.com), Fandom pt-br (turmadamonica, irmaodojorel, doraemon) e Wikipédia en para um caso (El Macho no tubarão rumo ao vulcão).
- **Nomes da dublagem brasileira**, conferidos na Dublagem Wiki ou no Fandom pt-br. Exemplos:
  - Criado (o peixe do Megamente), Capitã Chantel DuBois, Vlad, Eduardo / El Macho, Buck;
  - Puro Osso, Avatar Roku, Bloo, Fenton, Angelica;
  - Batatinha, Irmãos Rocha, Máquina do Mal, Linus van Pelt, Nermal;
  - Hyoga de Cisne, Tomoyo, Jiji, Sōsuke, Laura Haruna;
  - Dona Luísa, Cebolácio, Vó Dita, Lara.
- **Nomes que a fonte corrigiu:**
  - o vilão de Samurai Jack no Brasil é **Abu**, não Aku;
  - o sobrinho do Scooby no Brasil é **Scooby-Loo**, não Scrappy-Doo (essa pergunta saiu depois por repetir o v12).
- **Ajustes pela fonte:**
  - Steven Universo: saiu "cor-de-rosa" do enunciado, porque o trecho lido não diz a cor do Leão;
  - Doraemon: a resposta ficou "De um bolso mágico", porque a fonte não fala da barriga.

## Cruzamento

- **Com o que foi comparado:**
  - `correcoes/perguntas-v12.json` inteiro;
  - `selecao-disney-450.json`;
  - lotes desenhos-001 a 006, inclusive reservas e descartadas.
- **Ferramentas:** `scripts/cruzamento.mjs` (procurarE), `scripts/semelhanca.mjs` (piorOcorrencia) e uma busca de resposta igual.
- **Trocas por fato repetido (4):**
  - Gru quer roubar a Lua: já estava no 002. Entrou a Margo.
  - Homem-Sereia e Mexilhãozinho: já estava no v12. Entrou o sobrenome Fenton (Danny Phantom).
  - Scooby-Loo: já estava no v12. Entrou o Garfield que odeia segunda-feira.
  - Meowth fala como humano: já estava no v12. Entrou a Laura, dona do Hamtaro.
- **Troca por variedade:** o dono do Garfield (Jon) saiu, e o Linus entrou no lugar.
- **Marcas que ficaram (21), todas falsos positivos:** a pergunta cita um personagem que é resposta de outra, mas o fato é outro. Exemplos: Alex na pergunta da Gloria, Flint na do Steve, Dennis na do Vlad, Camus na do Hyoga, Dick Vigarista na da Máquina do Mal. Há também respostas iguais com fato diferente: Abu de Aladdin, Barão Vermelho da banda, Leão do Sport.

## Alternativas

- Cada errada foi procurada nas respostas do v12 inteiro, da seleção Disney, dos lotes 001-006 e do próprio lote.
- Na primeira passada, 14 erradas eram resposta de outra pergunta e foram trocadas. Eram quase todas bichos (Rinoceronte, Morsa, Polvo, Sapo, Rato, Cachorro, Gato, Cavalo), mais O Sol, Ivan, Bill, Bigode, Wobbuffet e Sora.
- No final ficaram 0 erradas que são resposta de outra pergunta.

## Entrega

- `node expansao/scripts/entrega.mjs --arquivo expansao/desenhos/lotes/desenhos-007.json`: 35 perguntas, 0 suspeitas.

## Descartes

Nenhuma ficha foi gravada como descartada. As trocas foram feitas antes de gravar:

- 4 perguntas saíram por repetir fato (Lua, Homem-Sereia, Scooby-Loo, Meowth);
- 1 saiu por variedade (Jon);
- algumas ideias caíram antes de virar ficha, por falta de fonte pt ou da dublagem:
  - Doraemon e o dorayaki (só a fonte en confirma);
  - Reptar (Os Anjinhos);
  - golpe Pó de Diamante (Hyoga);
  - Galinha Pintadinha de bolinhas brancas;
  - Ciborgue (Jovens Titãs).
