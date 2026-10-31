# Desenhos, parte 2: conferência dos lotes 004, 005 e 006

Conferente independente (não escreveu as perguntas). Cada ficha ganhou `status` final, `verificado_web_conferente` com a fonte curta e, quando houve, `correcao_conferente`, `dificuldade_ajuste` e `motivo_conferente`.

## Resultado

| Status | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| conferida | 101 | 119 | 65 | 285 |
| reserva | 2 | 3 | 5 | 10 |
| descartada | 1 | 1 | 3 | 5 |
| **Total** | **104** | **123** | **73** | **300** |

A dificuldade já conta os 3 ajustes abaixo (eram 105/120/75).

## Checagem web

- **461 checagens próprias** nas 300 fichas (todas têm pelo menos uma).
  - Feitas por script com User-Agent genérico, pela API das wikis, com o trecho impresso e lido um a um. Cache e listas ficaram no scratchpad, não no repositório.
  - Mais cerca de 15 buscas e leituras avulsas na web (TecMundo, Omelete, Correio da Manhã, Critical Hits, dissertações UFMG/UFSC e outras).
- **Fontes diferentes das do gerador** (ele usou quase só wiki pt):
  - fandoms em pt-br (Pica-Pau, Looney Tunes, Scooby-Doo, Smurfs, Simpsons, Pokémon, Dragon Ball, Cavaleiros, Naruto, Sailor Moon, Yu-Gi-Oh!, Irmão do Jorel, Historietas, Tromba Trem, Thundercats);
  - fandoms em inglês (Tom e Jerry, Looney Tunes, Flintstones, Hanna-Barbera, He-Man, Thundercats, Smurfs, Turtlepedia, Simpsons, Pokémon, Digimon, Yu-Gi-Oh!, Beyblade, Captain Tsubasa, Ghibli, Popeye, Pantera, Animaniacs);
  - wiki en e wiki es para os desenhos do Brasil (Earth to Luna!, El mundo de Luna, Peztronauta, Jorel's Brother, Haunted Tales for Wicked Kids, Trunk Train, Sítio 2012).
- **Nome da dublagem:** 82 fichas conferidas na **Dublagem Wiki** (dublagem.fandom.com) ou no campo "nome português" do fandom pt-br.
- **Mesma página do gerador:** 6 fichas ficaram só com a página que o gerador já tinha usado, com o trecho relido por mim:
  - 004.77 (camisa do Cebolinha), 004.80 (Giselda), 005.80 (Torresmo), 006.1 (buraco do Jerry), 006.96 (idade no AmigãoZão);
  - 005.91, que foi para reserva.
  São fatos simples, e nenhuma outra fonte os contradiz.

## Correções (9)

- **Nome da dublagem:**
  - 004.4: sobrinhos do Pica-Pau → **Toquinho e Lasquita** (estava "Lasquinha"; wiki pt, fandom pt-br e EiNerd dizem Lasquita).
  - 004.68: parceira da Kari → **Tailmon**. A Dublagem Wiki registra que a dublagem brasileira é a única que não usa Gatomon.
  - 006.62: gata da Sailor Moon → **Lua**, que é o nome na dublagem da Manchete. O enunciado foi reescrito, porque "lua na testa" entregava a resposta e citar "Serena" cruzava com a 004.63.
  - 005.63 e 006.63: **Sailor Mars** e **Sailor Mercury**, e as erradas viraram Venus, Jupiter, Pluto e Neptune. A dublagem brasileira usa os nomes em inglês.
  - 005.64: "Sailor Vênus" → **Sailor Venus** no enunciado.
  - 005.70: Exódia → **Exodia** (grafia da carta no Brasil).
- **Fato:**
  - 004.52: Piccolo não "veio de Namekusei", ele nasceu na Terra. O enunciado agora diz "um namekuseijin".
  - 006.25: Maligna não tem pele azul (é amarela ou clara). O enunciado agora fala do cajado com bola de cristal.

## Ajustes de dificuldade (3)

- 004.92 (nomes das duas avós do Irmão do Jorel): fácil → médio.
- 004.54 (Teletransporte do Goku): difícil → médio.
- 005.58 (Cólera do Dragão): difícil → médio.

## Descartadas (5)

- 004.91 "As Divas": a única fonte é a wiki pt. A imprensa sobre o filme de 2026 lista as Divas como **personagens novos**, então as irmãs vermelha, verde e roxa não se confirmam.
- 005.1 Toodles e 005.29 Thundertanque: o nome brasileiro não foi confirmado (Dublagem Wiki e wiki pt não trazem esses nomes).
- 005.42 Pinky e Cérebro "numa gaiola de laboratório": repete o fato do v12 ("dupla de ratos de laboratório").
- 006.47 30 Tauros: o fandom pt-br registra que o episódio **nunca foi exibido no Brasil**, então fica fora da régua família.

## Reservas (10)

- 005.83 Conselheiro: o burro não aparece na série animada do Sítio (2012). Só existe nos livros e na TV.
- 004.89 Blublex: a grafia é incerta (Blublex na wiki pt, Bubblex na wiki en, Bublex em outra fonte).
- 005.91 Galo Carijó roxo: a cor só aparece na fonte do gerador.
- 006.54 Tenkaichi Budokai: a dublagem chama de "Torneio de Artes Marciais", e com esse nome o enunciado entregaria a resposta.
- 006.11 K-9: o nome do cão na dublagem brasileira não foi confirmado.
- O Menino e o Mundo (004.99, 005.98, 005.99, 006.98, 006.99): os fatos estão certos, mas o filme é de nicho para famílias brasileiras.

## Smurfs

- Nenhuma pergunta usa "Brincalhão" nem "Joca". A troca do gerador por **Desastrado** está certa, e a Dublagem Wiki confirma o nome.
- A mesma página da Dublagem Wiki mostra que **Joca** é o nome brasileiro do Smurf brincalhão (Jokey). "Brincalhão" é nome de Portugal.
- Gênio, Robusto, Smurfette e Gato Cruel também foram confirmados na dublagem.

## Cruzamento

- **Com o que comparei:**
  - `cruzar2.mjs` (procurarE + piorOcorrencia) contra o v12, a seleção Disney, os lotes 001-003 e as 300 entre si;
  - uma busca manual no v12 por palavra-chave de cada obra (239 perguntas lidas).
- Os lotes 001-003 não têm nenhuma obra em comum com 004-006 (são filmes de outros estúdios, Cartoon Network, Nick e pré-escola).
- Só o Pinky e Cérebro saiu por esse motivo. As outras marcas são falsos positivos: o fato é outro, mesmo quando a obra é a mesma (Kuririn e Androide 18, Time 7 e Kakashi, Pallet e Kanto, Atena e Saori).
- A reescrita da 006.62 tirou a única marca nova, que era a citação de "Serena".

## Entrega e alternativas

- **`entrega.mjs --arquivo`:** 0 suspeitas nos três lotes, rodado depois das correções.
- **Alternativas cruzadas (`alts.mjs`, sem as descartadas):** 79 marcas, todas aceitáveis.
  - Erradas iguais a uma resposta do mesmo lote ou da parte 2: só cores.
  - As demais são respostas raras do v12 que funcionam como erradas naturais (Tico e Teco, Sansão, Kienzan, Krypton, Leão).
- **Formato:** todas as fichas têm 4 alternativas distintas, com a resposta entre elas.
- **Música:** nenhuma pergunta usa letra.
