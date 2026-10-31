# Esportes - conferência r2b (lotes 009 e 010)

Conferente independente, que não escreveu as perguntas. As 200 perguntas `gerada` foram lidas uma a uma:
- `esportes-009.json`: 100 de NBA;
- `esportes-010.json`: 50 de UFC e 50 de F1.

Cada pergunta ganhou `status`, `verificado_web_conferente` (fonte e trecho lido) e `conferido_por: conferente-esportes-r2b`. Quando foi o caso, ganhou também `correcao` e `dificuldade_ajuste` (com a direção e o motivo). O `id` não foi alterado nas reescritas.

## Resultado

| Esporte | Status | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|---|
| NBA | conferida | 31 | 49 | 20 | 100 |
| UFC | conferida | 15 | 25 | 10 | 50 |
| F1 | conferida | 15 | 22 | 13 | 50 |
| **Total** | | **61** | **96** | **43** | **200** |

**200 conferidas, 0 descartadas, 0 reservas.** A dificuldade da tabela já é a ajustada. A posição da resposta certa continua 25 em cada uma das 4 posições, nos dois lotes.

## Checagem web própria

- **302 checagens** anotadas (pelo menos uma por pergunta), todas com o trecho lido.
- **Fontes:** Wikipédia pt (texto do verbete), Sherdog (cartel de Anderson Silva, José Aldo, Ronda Rousey, Shogun e Dan Henderson), CBS Sports (bandeira sobre a Reebok em 1992) e Wikipédia en quando a pt não trazia o fato. Sempre que deu, a página lida foi outra que não a do gerador (ex.: temporada de 2004 da F1 para a Jaguar, Chase Center para o Warriors, UFC 251 para a Ilha da Luta).
- User-Agent genérico de navegador. A API da Wikipédia limitou o acesso algumas vezes; as páginas foram guardadas em cache e lidas de novo com calma.
- **Fatos de 2025 e 2026, todos com trecho lido:**
  - camisa 30 de Dell Curry aposentada pelo Hornets em 19/03/2026 (009.4);
  - All-Star de 2026 no Intuit Dome, em Inglewood (009.79);
  - trombose no ombro do Wembanyama em fevereiro de 2025 (009.69);
  - Kayla Harrison campeã no UFC 316, em junho de 2025, sobre Julianna Peña (010.32);
  - Pantoja perdeu para Joshua Van no UFC 323, em 06/12/2025, depois de 4 defesas (010.49);
  - Kelly Piquet e Verstappen juntos desde 2020, com a filha nascida em 2025 (010.67).

## Ajustes de dificuldade (24)

**NBA (15).** A régua diz que a galera acompanha NBA menos que futebol, então o fácil precisa ser famoso de verdade no Brasil.
- **De fácil para médio (12):**
  - 009.6 (Bird parou depois de 1992);
  - 009.15 (Kyrie e a Terra plana);
  - 009.16 (Magic no All-Star de 1992);
  - 009.20 (entrevista do "practice");
  - 009.25 (comercial do McDonald's);
  - 009.29 (Curry e Under Armour);
  - 009.30 (Bill Murray no filme);
  - 009.32 (Drake e os Raptors);
  - 009.33 (Jack Nicholson);
  - 009.34 (Spike Lee);
  - 009.36 (MVP de 2013/14, mesmo nível dos prêmios de temporada da r1a);
  - 009.42 (apelido "Alien" do Wembanyama).
- **De médio para fácil (1):** 009.73. O enunciado cita Michigan State e Indiana State, então a resposta universitária fica evidente.
- **De médio para difícil (1):** 009.79 (sede do All-Star de 2026).
- **De difícil para médio (1):** 009.94 (Kawhi, o único astro entre as opções).

**UFC (5).**
- **De fácil para médio (3):** 010.6 (irmãos de Jon Jones), 010.8 (Ilha da Luta) e 010.15 (Bruce Buffer, com o irmão Michael como errada forte).
- **De difícil para médio (2):** 010.42 (Bob Sapp x Minotauro) e 010.44 (Rickson x Takada). São lutas lendárias para o fã brasileiro, e não número exato.

**F1 (4).**
- **De fácil para médio (3):** 010.55 (Lauda Air), 010.57 (Mick na Haas) e 010.65 (Maranello).
- **De médio para difícil (1):** 010.80, que ficou mais difícil depois da reescrita.

**Cultura pop da NBA.** Das fáceis de cultura pop, ficaram fáceis as que um brasileiro que gosta de esporte acerta: Nike, Gatorade, o talento roubado no filme com os Looney Tunes, Netflix, o filme "Air", a bandeira sobre a Reebok, Kareem no "Apertem os Cintos", 76ers e 1776, Shaq "Diesel", Rodman com Madonna e na Coreia do Norte, LeBron bilionário. Foram para médio: McDonald's, Under Armour, Bill Murray, Drake, Jack Nicholson, Spike Lee e o apelido do Wembanyama.

## Correções de fato (4)

- **009.20:** "dezenas de vezes" virou "mais de 20 vezes". A fonte conta 22 vezes a palavra "practice".
- **009.92:** "pivô sudanês" virou "pivô nascido no Sudão". A Wikipédia pt o chama de sul-sudanês, porque a cidade natal hoje fica no Sudão do Sul.
- **010.17:** a resposta "Kimono" virou "Quimono", na grafia em português (a mesma do v12:7204).
- **010.64:** a resposta "Cerca de 3 segundos" virou "Menos de 3 segundos". A fonte diz que os pneus são trocados "in under three seconds".

## Enunciados reescritos (6)

O `entrega.mjs` não pega estes casos, porque a resposta entregue é de **outra** pergunta, ou fica entre dois nomes iguais.

- **009.14:** "Chef Curry" virou "Chef". O sobrenome deixava a pergunta entre os dois Curry. Seth Curry saiu e entrou Damian Lillard.
- **010.26:** saiu o nome de Michael Bisping, que é a resposta da 010.25. Ficou "um rival britânico".
- **010.77:** saiu "da Toro Rosso", que é a resposta da 010.69. Charles Leclerc, que é monegasco e não francês, foi trocado por Jean-Éric Vergne.
- **010.80:** saiu "Red Bull" e "equipe dos energéticos", que entregavam o v12:2623. Agora a pergunta é pela equipe da Ford vendida no fim de 2004. Stewart, que também foi da Ford e virou a própria Jaguar, saiu para não haver duas certas, e entrou Prost.
- **010.86:** saiu "tetracampeão", que entregava a 005.81 (quantos títulos teve Prost).
- **010.89:** saiu o nome de Fernando Alonso. Junto com o ano de 2010, ele ligava a resposta da 010.72 (o companheiro que Massa deixou passar). Ficou "o piloto da Ferrari que liderava o campeonato".

## Repetição e entrega

- **Cruzamento:** busca por termo contra as perguntas de NBA, UFC e F1 do v12 (735 linhas) e leitura das 260 perguntas do piloto e dos lotes 004 e 005, mais as de basquete, UFC e F1 dos lotes 001-003 e 006-008.
- **Nenhum fato repetido.** Os casos parecidos são outro fato:
  - Lakers com 17 títulos x Celtics com 18 (004.30);
  - NBA com time do Canadá x Raptors é do Canadá (v12:2703);
  - Durant MVP de 2013/14 x Durant no Warriors (v12:2940);
  - Shaq MVP de 1999/2000 x MVP das finais de 2000 a 2002 (v12:2941);
  - 2007 decidido no Brasil x Massa perdeu por um ponto em 2008 (v12:2490);
  - cores da McLaren de Senna x equipe e motor dos títulos (v12:2598 e v12:2761).
- **Detector de entrega:** `node expansao/scripts/entrega.mjs --arquivo` deu **0 suspeitas** nos dois lotes, depois das reescritas.
- **Alternativas cruzadas:** como o gerador avisou, há erradas que são resposta de outra pergunta (astros da mesma época). Nenhuma gera ambiguidade.

## Pontos para o dono olhar

- **"Pride" aparece em 5 enunciados do UFC** (010.23, 24, 38, 43 e 44), e o v12:3160 pergunta justamente o nome do evento japonês. Não reescrevi, porque o próprio v12:5752 já diz "evento japonês Pride" no enunciado. Se o v12:3160 for para o jogo, vale olhar.
- **Hélio Gracie (010.10)** aparece no enunciado do v12:7763, como o rival de Kimura em 1951. É pista fraca, e a pergunta ficou.
- **Ronda Rousey** está no enunciado de 010.1, 010.20, 010.39 e 010.45, e é a resposta da 010.7 (Velozes e Furiosos 7). Nenhum desses enunciados fala de cinema, então ficou.
- **009.4 (Dell Curry)** depende de fato de 2026 (camisa aposentada em 19/03/2026), confirmado em uma fonte.
- **Os ids não foram recalculados** nas 10 perguntas com texto alterado, para não quebrar referências.
