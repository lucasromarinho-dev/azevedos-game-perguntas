# Conferência da reposição 2 (pop BR), parte 1: lotes 115, 116 e 117

Conferente independente: `conferente-reposicao-2-br-parte1` (30/10/2026). Lotes 118 e 119 ficam com o outro conferente. Nada publicado; `main`, `perguntas.json`, `README.md`, `metricas.json` e `expansao/correcoes/` não foram tocados.

## Resultado

263 `gerada` conferidas (87 no 115, 88 no 116, 88 no 117):

| Status | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| `conferida` | 5 | 164 | 86 | **255** |
| `reserva` | 0 | 1 | 7 | **8** |
| `descartada` | 0 | 0 | 0 | **0** |

Os médios já contam os 2 ajustes de dificuldade. Toda ficha tem `conferido_por` e `verificado_web_conferente` (fonte curta); `dup_revisado` mantido em todas as 119 marcadas.

## Checagem web (própria, sem reaproveitar as páginas do gerador)

- **224 perguntas pela Wikipédia**: para cada uma escrevi a busca e os termos (resposta + um termo do enunciado), fiz a busca na API (`list=search`, pt e, se faltasse, en), li o texto bruto das primeiras páginas e só aceitei quando os dois termos apareciam a até 600 caracteres um do outro; li o trecho de cada uma. Termos curtos (Mé, Ali, Fez, Max, Cinco) só valem como palavra inteira. Muitas vezes a página que confirmou é outra (verbete do ator, da música, da emissora). 793 chamadas de API (523 buscas, 270 leituras em lote), User-Agent genérico de navegador; log em `fontes/conferencia-reposicao-2-br-parte1-chamadas.log`.
- **39 perguntas por WebSearch** (cerca de 45 buscas): as de meme, bordão e slogan que o gerador conferiu só por busca e as que a Wikipédia não fechou. Mé (de "mel"), aviõezinhos, Glória Pires no Oscar, "pede pra sair", Pelé e Elis, "Haja coração", Anjo, Cactos, Casa de Vidro, cavalinhos do Fantástico, Amado Batista, monge João do Neymar, carrinho de rolimã do "Taca-le pau", "Já acabou, Jéssica?", "Que deselegante!", Calabreso, Marquezine, raio-x, Gina Indelicada, Família Doriana, Intercine, Gil do Vigor, "Eita, Giovana", Acorda, menina, Baile de Favela, Dona da Rua, castigo do Monstro, Pelé e Xuxa, "Corta pra mim", "Toca Raul", "Faz parte", Alok no Free Fire, Tiririca, Priscila, Rodrigo Hilbert (tricô confirmado em A Gazeta), quatro indicações de "Cidade de Deus", Gkay paraibana (de Solânea), Zona de Perigo.
- **263 de 263 com checagem própria registrada.**

## Reservas (8)

Régua "adulto comum de 25 a 45 anos, sem ser fã":
- **0e451a0bd9** Pelé gravou com Elis Regina (1969): fato confirmado, mas antigo e de bastidor.
- **fbb30ad38b** Luiz Caldas, "Tieta" (1989): cantor da faixa pouco lembrado hoje.
- **088b978fb4** "Comédia MTV": público restrito; e o "Furo MTV" também tinha Dani Calabresa.
- **c982ca13c2** Clara Nunes, "O Mar Serenou" e "Conto de Areia": sambas dos anos 1970.
- **8b9991d454** Dengue e Praga do "Xou da Xuxa": antigo e pouco lembrado.
- **f52861add3** Coalhada, de Chico Anysio: personagem secundário, pouco lembrado.
- **67840df47a** Mallu Magalhães, "Tchubaruba": hit de internet de nicho (2007).
- **3c4a20a146** Jaipur, cidade da família de Raj em "Caminho das Índias": não confirmado (a Wikipédia só cita Jaipur como locação das gravações; Caras e DCI não dizem a cidade).

## Ajustes de dificuldade (2, difícil -> médio)

- **ec4ffb1a5f** Gabriel Medina casado com Yasmin Brunet: muito noticiado, ligado ao BBB 24.
- **6681690110** Thelma, de "Amor de Mãe": novela de 2019 a 2021, desfecho em 2021 (fato recente fica no máximo médio).

## Correções (2)

- **4909d4393b** Casa de Vidro: o enunciado estava no passado ("se chamava"), mas a dinâmica continua (BBB 26), e usava a palavra "vitrine", que era uma das erradas. Virou "Como se chama a estrutura transparente montada num shopping, de onde o público escolhe participantes extras para o BBB?"; errada "Vitrine" trocada por "Redoma" (a primeira troca, "Aquário", era resposta rara de outra pergunta e foi desfeita). O enunciado novo acendeu `dup: certa` com banco:5628 (Pirâmide do Louvre, "estrutura transparente"): falso positivo, anotado em `dup_revisado` (a Casa de Vidro do lote-041 está descartada).
- **df845040b6** Sandy & Junior: a pergunta pede uma dupla, mas as erradas eram grupos (Tchakabum, Jeito Moleque, Twister); trocadas por Bruno & Marrone, Rionegro & Solimões e Edson & Hudson (nenhuma é resposta de outra pergunta, `checa-resposta.mjs`).

## Confirmados na checagem (pontos que o gerador pediu para olhar)

- Difíceis de elenco: Capitu (Giovanna Antonelli, "Laços de Família"), Branca (Susana Vieira, "Por Amor"), Laureta (Adriana Esteves, "Segundo Sol"), Cora (Marjorie Estiano e Drica Moraes), Paula e Taís, Monalisa, Sophia, Josiane, Rubinho, Bozena, Neide Aparecida, Giovanni Improtta: todos confirmados.
- Fonte errada do gerador: **ab477a3c3c** (Zeca Baleiro) tinha `verificado_web` "Ara Ketu"; confirmado em "Perfil - Zeca Baleiro".
- Tiririca: as fontes registram "pior que tá não fica" e "pior do que está não fica"; mantido.

## Checagens (todas sem `--descartar`)

- `entrega.mjs --lotes 115-117`: **0 suspeitas**.
- `duplicadas.mjs` nos três lotes: 73 `certa` e 46 `suspeita`, as mesmas do gerador (lidas com `ver-dups.mjs`, fato diferente) mais a da Casa de Vidro acima; `dup_revisado` em todas.
- `alternativas.mjs` nos três lotes juntos: só 2 `RARA` de palavra comum (Sete, Mia); 0 erradas que são resposta de outra do lote.
- `checa-resposta.mjs --lote`: nada novo nas duas fichas mudadas; as repetições de resposta são de fato diferente (Carrinho de rolimã, Show do Milhão, Galvão Bueno etc., já revisadas pelo gerador).
