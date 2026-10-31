# Desenhos, parte 2: 300 perguntas (clássicos, anime e Brasil)

Lotes `lotes/desenhos-004.json`, `desenhos-005.json` e `desenhos-006.json`, com 100 perguntas cada, todas com status `gerada` e categoria `Desenhos`.
Cada ficha traz `fonte_tema`, `obra` e `verificado_web`. As 15 perguntas de música também trazem `musica: true`.

## Totais

| | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| Desenhos clássicos | 48 | 57 | 25 | 130 |
| Anime de família | 35 | 38 | 27 | 100 |
| Desenhos do Brasil | 22 | 25 | 23 | 70 |
| **Total** | **105** | **120** | **75** | **300** |

- **Por obra:** nenhuma obra passa de 20 perguntas.
  - Top 10: Looney Tunes 19, Pokémon 18, Dragon Ball 18, Turma da Mônica 17, Cavaleiros do Zodíaco 12, Scooby-Doo 10, Caverna do Dragão 10, Naruto 10, Digimon 10, Tom e Jerry 9 (Pica-Pau também tem 9).
- **Músicas (15):** só título, desenho ou momento, nunca letra.
  - Clássicos: Rapsódia Húngara (Tom e Jerry), O Barbeiro de Sevilha (Pernalonga), tema dos Looney Tunes, sax da Pantera Cor-de-Rosa.
  - Anime: Cha-La Head-Cha-La, Dan Dan Kokoro Hikareteku, Pegasus Fantasy, Blue Bird, Moonlight Densetsu, Butter-Fly, Brave Heart, Sanpo (Totoro), Itsumo Nando Demo (Chihiro).
  - Brasil: Eu Quero Saber (Luna), Escravos de Jó (Galinha Pintadinha).
- **Posição da resposta** (A/B/C/D): 69/73/87/71.

## Checagem web (300 de 300)

- **Fontes:** a checagem foi feita por script, sem IA, sobre o wikitexto baixado pela API (User-Agent genérico):
  - Wikipédia pt;
  - Fandom pt-br: turmadamonica e irmaodojorel;
  - Wikipédia en, quando o detalhe só aparece lá (episódios de Tom e Jerry, Looney Tunes, listas de personagens).
- **Regra:** a chave da resposta tem que aparecer na página. Quando a pergunta liga dois fatos, a chave precisa aparecer até 400 caracteres de uma palavra de contexto.
- **Revisão manual:** depois da passada automática, os trechos foram lidos um a um, nos casos com chave fraca ou achados por busca.
  Quando a fonte não sustentava a pergunta, ela foi trocada ou reescrita:
  - Super Campeões: os nomes Mark Lenders e Julian Ross na dublagem brasileira não foram confirmados, e as perguntas saíram;
  - o Smurf "Brincalhão" virou "Desastrado" (na fonte pt, o Brincalhão se chama Joca);
  - o Yakko's World saiu e o tema dos Looney Tunes entrou no lugar;
  - Sanpo: a pergunta passou a dizer "faz parte da trilha", e não "abertura";
  - Zé Colmeia: a frase foi ajustada para "mais esperto do que a maioria dos ursos".
- **Nomes da dublagem brasileira:** foram conferidos na fonte pt sempre que ela existe. Exemplos: Zé Jacaré, Picolino, Sr. Pedregulho, Búfalos d'Água, Dudu, Gugu, Eugênio, Serena Tsukino, Cruel, Gênio, Robusto, Desastrado, Ventania, Maligna, Homem-Fera e Mentor.

## Cruzamento

- **Com o que foi comparado:**
  - `correcoes/perguntas-v12.json`;
  - `selecao-disney-450.json`;
  - os lotes 001-003 da parte 1;
  - as próprias 300, entre si.
- **Ferramentas:** `scripts/cruzamento.mjs` (procurarE), `scripts/semelhanca.mjs` (piorOcorrencia) e uma busca por resposta igual.
- **Trocas por fato repetido no v12 (14):**
  - Otto e Willie (Simpsons);
  - Apu e o Kwik-E-Mart (pergunta invertida);
  - mãe de Ash (Delia);
  - Shaka, Saga e Mestre Ancião (Cavaleiros);
  - Sansão (duas perguntas);
  - Franjinha;
  - Pedrinho;
  - Kurama;
  - "ex-androide que casa com Kuririn" (pergunta invertida);
  - Majin Boo e Babidi (pergunta invertida);
  - Cebolinha "dono da rua" (perto do "Dona da Rua" da Mônica).
- **Marcas que ficaram:** são falsos positivos.
  - Perguntas da mesma obra citam umas as outras.
  - Algumas respostas são iguais, mas o fato é outro. Exemplos: Aldebaran contra a estrela Aldebarã, Jiraiya do anime contra o Jiraiya da Manchete, Mistério S/A contra a Máquina de Mistério.

## Entrega e alternativas

- **entrega.mjs:** rodou com `--arquivo` nos três lotes e deu 0 suspeitas no final.
  - Antes disso, 6 perguntas foram reescritas: Andy Panda, Pidgeotto, Dragão Negro, Biscoito Scooby, Monicão e Irmão do Jorel.
- **alternativas.mjs:** o script original só lê `lotes/lote-NNN.json`. Por isso rodei um equivalente: cada errada é procurada nas respostas das 300, da seleção Disney, dos lotes 001-003 e do v12 (Entretenimento).
  - Foram trocadas 30 erradas que eram a resposta de outra pergunta: no mesmo lote, na parte 2, na Disney ou na parte 1.
  - Ficaram só as cores (vermelho, azul, verde...), que são respostas comuns, e "Rafael" como errada na pergunta do Leonardo, porque as outras tartarugas são as erradas naturais.

## Descartes

Nenhuma ficha foi gravada como descartada. Todas as trocas foram feitas na fonte, antes de gravar os lotes:

- 14 perguntas saíram por repetir fato do v12;
- 5 saíram por fonte fraca ou nome da dublagem brasileira sem confirmação: Mark Lenders, Julian Ross, Brincalhão, Yakko's World e Sansão com nós nas orelhas;
- 6 enunciados foram reescritos por entregar a resposta.

## Geração

A fonte das perguntas e os scripts estão em `scripts/parte2/`:

- `fonte.mjs`;
- `verificar.mjs` e `wikilib.mjs`, a checagem web (o cache fica em `wiki/` ao lado do script);
- `montar.mjs`, que grava os lotes;
- `cruzar2.mjs`, o cruzamento;
- `alts.mjs`, as alternativas.
