# Desenhos - conferência 1 (lotes desenhos-001, 002 e 003)

Conferente independente, que não escreveu as perguntas. As 250 perguntas `gerada` foram lidas uma a uma. Cada uma ganhou `status`, `verificado_web_conferente` (fonte curta, com o termo que confirmou o fato), `conferido_por` e, quando foi o caso, `correcao`, `dificuldade_ajuste` e `motivo`.

## Resultado
| status | fácil | média | difícil | total |
|---|---|---|---|---|
| conferida | 86 | 96 | 58 | 240 |
| reserva | 0 | 1 | 2 | 3 |
| descartada | 2 | 4 | 1 | 7 |

## Checagem web própria
- 519 checagens anotadas, pelo menos uma por pergunta, e todas com o trecho lido. Fontes: Wikipédia en e pt pela API e Fandom pt-br pela API (busca e texto do verbete), com User-Agent genérico. Usei também 12 buscas na web e leituras de página (trilha de Sing, Vetor, Liga Antivilões, Bola de Neve, Sunflower, Lobo Mau, nomes de Du, Dudu e Edu) e o Fandom em inglês para detalhes que a Wikipédia não traz (Mandark, jaleco do Dexter, Fantasmão, Suzy, Gems, BMO e outros).
- A regra automática do gerador deixou passar nomes errados da dublagem. Os casos estão abaixo.

## Nomes da dublagem corrigidos
- Jorgen Von Strangle -> **Jorgen Von Estranho** (Fandom pt-br Padrinhos Mágicos).
- Músculo -> **Musculoso**, e Skips -> **Saltitão** (Fandom pt-br Apenas um Show). O Saltitão está em 002.50 e 003.50.
- Banana Joe -> **João Banana**, Richard -> **Ricardo**, Srta. Simian -> **Srta. Símio** (Fandom pt-br Gumball).
- Meio do Nada -> **Lugar Nenhum**, a cidade do Coragem (Fandom pt-br Coragem).
- Vovô Porco -> **Vovô Pig** (Peppapedia).
- Na 002.67, a Sarah é irmã do **Du** (Ed), não do Edu (Eddy). A Wikipédia pt diz "Ed (Du) ... Eddy (Edu)".
- Ferb: Inglaterra -> **Reino Unido** (as fontes dizem britânico e United Kingdom).
- Gidget -> **Gigi**, nome brasileiro, na alternativa da 002.20.

## Outras correções (22 perguntas)
- 001.29: a alternativa "Jonathan" também estava certa, porque é o nome completo do Johnny. Ela virou "Jimmy".
- 001.46: a alternativa "Gigante" também é um gigante vermelho e branco. Ela virou "Ultra-T".
- 002.30: quem toca a Macarena para o Kraken é o Johnny, não o Drácula. O enunciado foi reescrito.
- 002.36: a alternativa "Siri-azul" também é caranguejo. Ela virou outra.
- 002.51: o Pairulito é filho do dono do parque, não o dono. O enunciado foi reescrito.
- 002.62: o enunciado citava Retroville, que é a resposta da 003.61. A cidade saiu do texto.
- 002.77: o Vlad quer "conquistar" a mãe do Danny, e não "roubar".
- 003.2: a pergunta virou "quantos filhos" (trigêmeos), com alternativas do mesmo tipo.
- 003.30: "Peter Porker Jr." é quase o nome verdadeiro do Porco-Aranha, então a alternativa foi trocada.
- 003.63: o enunciado tinha a palavra "lugar", e o entrega.mjs pegou. Foi reescrito.
- 001.19 (sem bastidor de parada de sucesso) e 003.69 (redação).

## Ajustes de dificuldade (3)
- 001.35 Grug: de difícil para média, porque é o nome do pai protagonista.
- 001.49 Gunter: de difícil para média, porque ele aparece em quase todo episódio do Rei Gelado.
- 001.40 Plankton com um olho: de média para fácil.

## Descartadas (7)
- 002.81 (o Avatar domina quatro elementos): fato repetido do v12:6584.
- 001.76 (laboratório secreto do Dexter): fato repetido do v12:3315.
- 003.1 (nariz do Pinóquio): fato repetido das 450 Disney (dis:1).
- 001.78 (quartzo rosa no umbigo): fato ambíguo, porque a série revela que a pedra é um diamante rosa.
- 001.69 ("-inador"): o Fandom pt-br usa "Inator", e o nome brasileiro não foi confirmado.
- 003.66 (quebra-queixo): a Wikipédia pt diz "balas de caramelo grandes e redondas", e nenhuma fonte traz "quebra-queixo".
- 001.61 (Carl): o Fandom pt-br alterna "Caio Wheezer" e "Carl Wheezer", então o nome é incerto.

## Reservas (3)
- 001.28 (Real in Rio indicada ao Oscar): é pergunta de bastidor.
- 002.29 ("zing"): o termo não foi confirmado na dublagem brasileira.
- 002.20 (Chloe): o nome brasileiro não foi confirmado.

## Cruzamento e alternativas
- Rodei `cruzamento.mjs` (indexar/procurarE) dos 3 lotes contra o v12 inteiro e as 450 Disney. Também fiz um grep por obra no v12. As marcas "certa" que sobraram são falso alarme (ocapi, Venom, ceroulas, border collie, ametista, Bananas de Pijama, Penny de Bernardo e Bianca, Mama Odie), porque o fato é outro.
- Alternativas cruzadas: nenhuma alternativa errada é resposta de outra pergunta destes 3 lotes nem das 450 Disney. Troquei 33 alternativas que eram resposta nas Disney, por exemplo Maurice, Rainha Elinor, Hakuna Matata, Rex, Django, Marie, Olaf, Ping, Wendy, Roxo, Polvo, Gato e Porco. Os cruzamentos só com o v12 são de outra categoria e palavras comuns (animais, cores, Riverdale), e ficaram.
- `entrega.mjs --arquivo` nos 3 lotes deu 0 suspeitas. Todas têm 4 alternativas distintas com a resposta entre elas, nenhuma tem travessão longo e todas terminam com "?". Nenhuma música usa letra.
