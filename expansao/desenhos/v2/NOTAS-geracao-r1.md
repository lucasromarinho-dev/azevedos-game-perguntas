# Desenhos v2, geração r1: lotes anim-001, anim-002 e anim-003 (275 perguntas)

Lotes em `v2/lotes/`, todas com status `gerada`, categoria `Desenhos`, e `fonte_tema`, `obra` e `verificado_web` em cada ficha.
Nada de Disney nem Pixar. PJ Masks saiu (coprodução Disney Junior).

## Totais

| Grupo | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| DreamWorks / Illumination / Sony / Blue Sky / Warner / Aardman | 26 | 12 | 12 | 50 |
| Cartoon / Nick / TV 2000+ (inclui Discovery Kids e Gloob) | 40 | 22 | 3 | 65 |
| Desenhos clássicos | 25 | 10 | 20 | 55 |
| Anime de família | 23 | 25 | 7 | 55 |
| Desenhos do Brasil | 10 | 30 | 10 | 50 |
| **Total** | **124** | **99** | **52** | **275** |

- Lotes: anim-001 = 92 (filmes 50 + TV 42), anim-002 = 92 (TV 23 + clássicos 55 + anime 14), anim-003 = 91 (anime 41 + Brasil 50).
- 124 obras, 65 delas novas no banco. Mais perguntas: Turma da Mônica 20, Snoopy 9, Digimon 8.
- Difíceis: detalhe da história, nunca ano, estúdio, criador ou dublador.
- Posição da resposta equilibrada (23/23/23/23 por lote, 22 no último).

## Teto de 60 por obra

Contei o banco de 1.000, as 428 de `reaproveitadas.json` (só leitura) e estas 275.
Turma da Mônica chegaria a 71, então cortei 12 fichas dela e fiquei com 20 (total 59).
Fica no limite: se a seleção final das reaproveitadas mantiver as 19 da Turma da Mônica, não cabe mais nenhuma.
Os outros maiores ficam longe do teto: Dragon Ball 48, Pokémon 44, Simpsons 25.

## Músicas (15, só pelo título)

- **Filmes:** Kung Fu Fighting, ...Baby One More Time, Peaches, Tudo é Incrível, Hallelujah, Set It All Free, Your Song Saved My Life e Funkytown.
- **Clássicos:** Linus and Lucy e Christmas Time Is Here.
- **Aberturas de anime:** Catch You Catch Me, Makafushigi Adventure!, We Are!, Mixed Nuts e Target ~Akai Shōgeki~.

Nenhuma pergunta usa letra de música.

## Checagem web

- **364 checagens** citadas em `verificado_web`, todas com o trecho que confirma o fato, e pelo menos 1 por ficha.
- O wikitexto foi baixado pela API das wikis, com User-Agent genérico. Cada trecho foi lido à mão.
- **Fontes:** Dublagem Wiki, Fandom pt-br (turmadamonica, irmaodojorel, trombatrem, saintseiya, naruto, gumball, ben10, smurfs, historietas), wiki pt e wiki en.

## Nomes da dublagem que a fonte corrigiu

- Steven Universo: a mãe é **Rose Quartz**, não "Quartzo Rosa" (Dublagem Wiki).
- Gumball: o robô é **Boberto**.
- Pocoyo: a passarinha é **Sonequita**.
- Os Croods: a preguiça se chama **Braço** (wiki pt), não Cinto.
- Pets: "Gidget / Gigi" e "Snowball / Pompom" são nomes de Portugal. A pergunta não cita o nome dela.
- Shrek 2: "Holding Out for a Hero" virou "O que eu Quero" na dublagem, então a pergunta saiu.
- Super Campeões: "Tom Misaki" e "Mark Lenders" não se confirmaram e ficaram fora.

## Cortes antes de gravar

- **Repetição do v12 (todas as categorias) ou do banco: 41.** Exemplos:
  - Sandy do Texas, Nigel cacatua, Firework, Toad, porcos de Angry Birds, Peach, Luigi;
  - Snoopy beagle, Clementine do Dom Pixote, loja do Maguila, pombo das Máquinas Voadoras, bordão do Leão da Montanha;
  - Taz, Acme, Ligeirinho, Apu, Mister Magoo míope, Patti Maionese, Gary, Snorlax, Shaka, Saga, Mitsumasa Kido, Michael Jordan, Wiggum;
  - Hera Venenosa, Sr. Frio, Arlequina, Formiga Atômica;
  - Marron, Porunga, Raichu, Jigglypuff, Mestre Ancião, Professor Carvalho, Ave Fênix;
  - Dona Morte, Dorinha, Zé Vampir e o apelido "dentuça".
- **Enunciado que entregava outra resposta:** Patrick Estrela, Ametista, Ilha dos Macacos (Zico), Dona Cebola, Sítio dos Bento e Gajah, que foi reescrito.
- **Teto da Turma da Mônica: 12.** Antão, Eduardo, Toneco e Toim, Crostina, Chafurda, Astronauta Pereira, Dona Lina, Cascuda, nome do Chico, aldeia de Lem, Alminha e Seu Antenor.
- **Sem fonte do nome brasileiro:** Princesa Chama, Wilt, Tronquinho, Rini, Scooby-Dum, Moranguinho, Bibo Pai, Preguiçoso e Ranzinza, Peter (Heidi).
- **Bastidor:** Arlequina "criada no desenho".
- **Para equilibrar dificuldade e músicas:** 11 fichas trocadas por músicas e 8 anime difíceis trocados por fáceis.

## Cruzamento

- **Com o que foi comparado:** `cruzamento.mjs` + `semelhanca.mjs` contra o v12 inteiro, as 1.000, `esportes/perguntas-esportes.json` e os três lotes entre si.
- **Marcas que ficaram (cerca de 160)** foram lidas uma a uma. São falsos positivos do tipo que as conferências anteriores aceitaram:
  - cita um personagem que é resposta de outra pergunta, com fato diferente (Florzinha, Leonardo, Trunks/Vegeta, Bidu, Papa-Capim, Emília);
  - mesma resposta genérica em obra diferente (cores, bichos, números).
- **Alternativas:** as erradas que eram resposta de outra pergunta minha foram trocadas quando eram nome próprio. Ficaram só cores, bichos e números genéricos.

## Entrega

- `entrega.mjs --arquivo` com **0 suspeitas** nos três lotes.

## Para o conferente olhar

- **Doug:** a série original é da Nickelodeon, mas a Disney fez a versão de 1996. As 3 perguntas valem para as duas.
- **Bluey, Masha e Miraculous** não são produção Disney, mas passam no Disney+ ou no Disney Channel.
- **Pegasus e Darien:** são nomes da versão 4Kids e da Manchete, que são as que passaram no Brasil.
- **Superamigos (Zan e Jayna), Wally Gator e Tutubarão** podem ser nicho. Ficaram como difíceis ou médias.
