# Desenhos v2, revisão pela régua do adulto

Revisor, 01/11/2026, branch `expansao`. Nada publicado na `main`. A v1 (`perguntas-desenhos.json`) e o arquivo da v2 (`perguntas-desenhos-v2.json`) não foram mexidos. A v2 não foi remontada.

## Régua aplicada

- Só entra desenho que um adulto brasileiro comum conhece, e pergunta que esse adulto tem chance real de acertar.
- Saem obras de criança pequena, obras de nicho e as que só o fã conhece.
- Personagem secundário obscuro sai, mesmo em obra famosa. Na dúvida, fica fora.
- Difícil é detalhe de algo muito conhecido, nunca obra obscura.
- As 10 perguntas da amostra reprovada pelo dono saíram todas (Grinch/Max, Bluey, Wallace & Gromit, Doraemon, Trolls, Miraculous, She-Ra, Peter B. Parker, Grimmel, quinto poder do Capitão Planeta).

Como foi feito: primeiro a obra (lista de obras aprovadas abaixo); obra fora da régua tira a pergunta. Depois, nas obras aprovadas, cada uma das 542 perguntas foi lida e julgada pela pergunta em si (personagem, detalhe, fase do anime, filme sequência pouco visto). Decisão por posição em `revisao-regua-adulto.json`.

Também saíram obras inteiras que ficaram na dúvida: Elementos, Luca, Soul, Barbie (filme lançado direto em vídeo). Digimon ficou só com a pergunta do Agumon; o resto era parceiro e evolução. Pokémon perdeu as fases de Hoenn em diante.

## Resultado

- **Ficam 408, saem 592** das 1.000 novas.
- Motivo da saída: obra de nicho 330; obra de criança pequena 133; pergunta (obra aprovada, assunto ou personagem fora) 129.
- Dificuldade corrigida em 50 das que ficam (registrado no campo `motivo` e em `dificuldade_final`).

### Por grupo

| Grupo | Ficam | Saem | Total |
|---|---|---|---|
| Disney | 102 | 47 | 149 |
| anime | 75 | 107 | 182 |
| clássicos | 74 | 79 | 153 |
| DreamWorks e similares | 47 | 84 | 131 |
| Cartoon/Nick | 37 | 151 | 188 |
| Brasil | 37 | 105 | 142 |
| Pixar | 36 | 19 | 55 |
| **Total** | **408** | **592** | **1000** |

### Por dificuldade (original)

| Dificuldade | Ficam | Saem |
|---|---|---|
| facil | 214 | 222 |
| medio | 145 | 237 |
| dificil | 49 | 133 |

Das que ficam, depois da correção: fácil 184, médio 152, difícil 72.

### As 15 obras que mais saíram

| Obra | Saem | Ficam |
|---|---|---|
| Digimon | 23 | 1 |
| Pokémon | 19 | 23 |
| Irmão do Jorel | 17 | 0 |
| Dragon Ball | 11 | 26 |
| Bluey | 9 | 0 |
| Peixonauta | 9 | 0 |
| Avatar: A Lenda de Aang | 8 | 0 |
| Doraemon | 8 | 0 |
| Turma da Mônica | 8 | 30 |
| Historietas Assombradas | 8 | 0 |
| Balto | 8 | 0 |
| Carrapatos e Catapultas | 8 | 0 |
| Miraculous: As Aventuras de Ladybug | 7 | 0 |
| Sakura Card Captors | 6 | 0 |
| Steven Universo | 6 | 0 |

## Obras que ficam (contagem nas 1.000 novas)

| Obra | Grupo | Ficam |
|---|---|---|
| Turma da Mônica | Brasil | 30 |
| Dragon Ball | anime | 26 |
| Pokémon | anime | 23 |
| Os Simpsons | clássicos | 18 |
| Bob Esponja Calça Quadrada | Cartoon/Nick | 14 |
| Snoopy | clássicos | 10 |
| Os Cavaleiros do Zodíaco | anime | 9 |
| Tartarugas Ninja | clássicos | 8 |
| Alice no País das Maravilhas | Disney | 7 |
| Corrida Maluca | clássicos | 7 |
| Kung Fu Panda | DreamWorks e similares | 7 |
| Looney Tunes | clássicos | 7 |
| Naruto | anime | 7 |
| Robin Hood | Disney | 7 |
| Sítio do Picapau Amarelo | Brasil | 7 |
| Tio Patinhas e Pato Donald | Disney | 7 |
| Toy Story | Pixar | 7 |
| As Aventuras do Ursinho Pooh | Disney | 6 |
| Shrek | DreamWorks e similares | 6 |
| A Bela e a Fera | Disney | 5 |
| Asterix | clássicos | 4 |
| Bambi | Disney | 4 |
| Hércules | Disney | 4 |
| Mickey e sua turma | Disney | 4 |
| Monstros S.A. | Pixar | 4 |
| O Corcunda de Notre Dame | Disney | 4 |
| Pocahontas | Disney | 4 |
| Sailor Moon | anime | 4 |
| Speed Racer | anime | 4 |
| A Dama e o Vagabundo | Disney | 3 |
| A Era do Gelo | DreamWorks e similares | 3 |
| Aladdin | Disney | 3 |
| Detona Ralph | Disney | 3 |
| Garfield | clássicos | 3 |
| He-Man | clássicos | 3 |
| Hotel Transilvânia | DreamWorks e similares | 3 |
| Lilo & Stitch | Disney | 3 |
| Madagascar | DreamWorks e similares | 3 |
| Operação Big Hero | Disney | 3 |
| Os Flintstones | clássicos | 3 |
| Peter Pan | Disney | 3 |
| Rio | DreamWorks e similares | 3 |
| Scooby-Doo | clássicos | 3 |
| Thundercats | clássicos | 3 |
| Up: Altas Aventuras | Pixar | 3 |
| A Fuga das Galinhas | DreamWorks e similares | 2 |
| A Nova Onda do Imperador | Disney | 2 |
| A Pequena Sereia | Disney | 2 |
| A Princesa e o Sapo | Disney | 2 |
| Alvin e os Esquilos | clássicos | 2 |
| Anastasia | DreamWorks e similares | 2 |
| Aristogatas | Disney | 2 |
| As Meninas Superpoderosas | Cartoon/Nick | 2 |
| Branca de Neve e os Sete Anões | Disney | 2 |
| Carros | Pixar | 2 |
| Carros 2 | Pixar | 2 |
| Coragem, o Cão Covarde | Cartoon/Nick | 2 |
| Divertida Mente | Pixar | 2 |
| Enrolados | Disney | 2 |
| Frozen: Uma Aventura Congelante | Disney | 2 |
| Gasparzinho | clássicos | 2 |
| Inspetor Bugiganga | clássicos | 2 |
| Meu Malvado Favorito | DreamWorks e similares | 2 |
| Mogli - O Menino Lobo | Disney | 2 |
| O Laboratório de Dexter | Cartoon/Nick | 2 |
| O Poderoso Chefinho | DreamWorks e similares | 2 |
| O Rei Leão | Disney | 2 |
| Os Smurfs | clássicos | 2 |
| Pica-Pau | clássicos | 2 |
| Procurando Nemo | Pixar | 2 |
| Ratatouille | Pixar | 2 |
| Shrek 2 | DreamWorks e similares | 2 |
| Super Mario Bros. O Filme | DreamWorks e similares | 2 |
| Toy Story 2 | Pixar | 2 |
| Toy Story 4 | Pixar | 2 |
| Valente | Pixar | 2 |
| Vida de Inseto | Pixar | 2 |
| Zootopia: Essa Cidade é o Bicho | Disney | 2 |
| 101 Dálmatas | Disney | 1 |
| A Bela Adormecida | Disney | 1 |
| Angry Birds: O Filme | DreamWorks e similares | 1 |
| Capitão Planeta | clássicos | 1 |
| Caverna do Dragão | clássicos | 1 |
| Cinderela | Disney | 1 |
| Coraline | DreamWorks e similares | 1 |
| Digimon | anime | 1 |
| Divertida Mente 2 | Pixar | 1 |
| Droopy | clássicos | 1 |
| Dumbo | Disney | 1 |
| Encanto | Disney | 1 |
| Fantasia | Disney | 1 |
| Gato Félix | clássicos | 1 |
| Gato de Botas | DreamWorks e similares | 1 |
| Happy Feet | DreamWorks e similares | 1 |
| Homem-Aranha no Aranhaverso | DreamWorks e similares | 1 |
| Johnny Bravo | Cartoon/Nick | 1 |
| Luluzinha | clássicos | 1 |
| Minions | DreamWorks e similares | 1 |
| Moana: Um Mar de Aventuras | Disney | 1 |
| Mr. Bean: A Série Animada | Cartoon/Nick | 1 |
| O Grinch | DreamWorks e similares | 1 |
| O Pequeno Príncipe | DreamWorks e similares | 1 |
| O Ursinho Pooh | Disney | 1 |
| One Piece | anime | 1 |
| Os Incríveis | Pixar | 1 |
| Os Jetsons | clássicos | 1 |
| Pinky e Cérebro | clássicos | 1 |
| Pinóquio | Disney | 1 |
| Popeye | clássicos | 1 |
| Shrek para Sempre | DreamWorks e similares | 1 |
| Sing - Quem Canta Seus Males Espanta | DreamWorks e similares | 1 |
| Tico e Teco | Disney | 1 |
| Toy Story 3 | Pixar | 1 |
| Ursinhos Carinhosos | clássicos | 1 |
| Viva: A Vida é uma Festa | Pixar | 1 |
| WiFi Ralph: Quebrando a Internet | Disney | 1 |
| Zootopia 2 | Disney | 1 |
| Zé Colmeia | clássicos | 1 |

118 obras.

## Quantas faltam para voltar a 2.000

- v1: 1.000 (no ar, não muda). Novas que ficam: 408. **Faltam 592.**
- Disney+Pixar hoje: v1 459 + novas que ficam 138 = 597. Com a proposta: +245 = 842 (teto 1.000).
- Teto de 60 por obra no banco inteiro (v1 + novas que ficam + a gerar): conferido linha a linha, nenhuma passa.

### Proposta de geração por obra famosa

Regras para o gerador: só personagem principal, objeto, bordão, cenário ou cena que todo mundo lembra. Difícil = detalhe de obra muito conhecida. Nada de sequência pouco vista, fase tardia de anime, nome de canção dublada ou personagem de um episódio só. Conferir sem repetir as que já existem na v1 e nas que ficam.

| Grupo | Obra | v1 | Novas que ficam | A gerar | Total |
|---|---|---|---|---|---|
| Disney | Mickey e sua turma | 0 | 4 | 17 | 21 |
| Disney | Tio Patinhas e Pato Donald | 0 | 7 | 12 | 19 |
| Disney | O Rei Leão | 15 | 2 | 15 | 32 |
| Disney | Aladdin | 15 | 3 | 12 | 30 |
| Disney | A Pequena Sereia | 17 | 2 | 10 | 29 |
| Disney | Frozen: Uma Aventura Congelante | 16 | 2 | 10 | 28 |
| Disney | Mulan | 14 | 0 | 10 | 24 |
| Disney | Tarzan | 13 | 0 | 10 | 23 |
| Disney | Branca de Neve e os Sete Anões | 7 | 2 | 8 | 17 |
| Disney | A Bela e a Fera | 11 | 5 | 8 | 24 |
| Disney | Lilo & Stitch | 9 | 3 | 8 | 20 |
| Disney | Cinderela | 14 | 1 | 6 | 21 |
| Disney | Hércules | 9 | 4 | 6 | 19 |
| Disney | Peter Pan | 7 | 3 | 6 | 16 |
| Disney | 101 Dálmatas | 10 | 1 | 6 | 17 |
| Disney | Moana: Um Mar de Aventuras | 14 | 1 | 6 | 21 |
| Disney | Zootopia: Essa Cidade é o Bicho | 10 | 2 | 6 | 18 |
| Disney | Pinóquio | 11 | 1 | 5 | 17 |
| Disney | Mogli - O Menino Lobo | 5 | 2 | 5 | 12 |
| Disney | Dumbo | 6 | 1 | 4 | 11 |
| Disney | Bambi | 2 | 4 | 4 | 10 |
| Pixar | Toy Story | 4 | 7 | 16 | 27 |
| Pixar | Procurando Nemo | 11 | 2 | 10 | 23 |
| Pixar | Os Incríveis | 9 | 1 | 10 | 20 |
| Pixar | Monstros S.A. | 8 | 4 | 10 | 22 |
| Pixar | Carros | 8 | 2 | 8 | 18 |
| Pixar | Up: Altas Aventuras | 5 | 3 | 6 | 14 |
| Pixar | Divertida Mente | 3 | 2 | 6 | 11 |
| Pixar | Ratatouille | 7 | 2 | 5 | 14 |
| DreamWorks e similares | Shrek | 14 | 6 | 16 | 36 |
| DreamWorks e similares | A Era do Gelo | 10 | 3 | 12 | 25 |
| DreamWorks e similares | Meu Malvado Favorito | 13 | 2 | 12 | 27 |
| DreamWorks e similares | Madagascar | 12 | 3 | 10 | 25 |
| DreamWorks e similares | Kung Fu Panda | 9 | 7 | 8 | 24 |
| DreamWorks e similares | Como Treinar o Seu Dragão | 10 | 0 | 6 | 16 |
| DreamWorks e similares | Hotel Transilvânia | 7 | 3 | 5 | 15 |
| DreamWorks e similares | Gato de Botas | 4 | 1 | 4 | 9 |
| Cartoon/Nick | Os Simpsons | 6 | 18 | 29 | 53 |
| Cartoon/Nick | Bob Esponja Calça Quadrada | 18 | 14 | 10 | 42 |
| Cartoon/Nick | As Meninas Superpoderosas | 10 | 2 | 5 | 17 |
| Cartoon/Nick | Garfield | 2 | 3 | 5 | 10 |
| Cartoon/Nick | Snoopy | 2 | 10 | 4 | 16 |
| clássicos | Tom e Jerry | 8 | 0 | 18 | 26 |
| clássicos | Scooby-Doo | 10 | 3 | 16 | 29 |
| clássicos | Pica-Pau | 9 | 2 | 16 | 27 |
| clássicos | Looney Tunes | 18 | 7 | 14 | 39 |
| clássicos | Os Flintstones | 8 | 3 | 12 | 23 |
| clássicos | Caverna do Dragão | 10 | 1 | 12 | 23 |
| clássicos | He-Man | 7 | 3 | 8 | 18 |
| clássicos | Popeye | 7 | 1 | 8 | 16 |
| clássicos | A Pantera Cor-de-Rosa | 0 | 0 | 8 | 8 |
| clássicos | Os Smurfs | 7 | 2 | 8 | 17 |
| clássicos | Os Jetsons | 7 | 1 | 6 | 14 |
| clássicos | Thundercats | 6 | 3 | 6 | 15 |
| clássicos | Tartarugas Ninja | 8 | 8 | 6 | 22 |
| clássicos | Zé Colmeia | 4 | 1 | 5 | 10 |
| clássicos | Corrida Maluca | 1 | 7 | 5 | 13 |
| anime | Os Cavaleiros do Zodíaco | 12 | 9 | 15 | 36 |
| anime | Pokémon | 17 | 23 | 10 | 50 |
| anime | Dragon Ball | 17 | 26 | 11 | 54 |
| anime | Naruto | 10 | 7 | 8 | 25 |
| anime | Sailor Moon | 8 | 4 | 5 | 17 |
| Brasil | Sítio do Picapau Amarelo | 8 | 7 | 10 | 25 |
| Brasil | Turma da Mônica | 20 | 30 | 8 | 58 |
| Brasil | Rio | 6 | 3 | 6 | 15 |
| | **Total a gerar** | | | **592** | |

Por grupo: Disney 174; Pixar 71; DreamWorks e similares 73; Cartoon/Nick 53; clássicos 148; anime 49; Brasil 24.

Obras novas no banco: A Pantera Cor-de-Rosa. Mulan e Tarzan estão só na v1 e ganham novas.

Sugestão de mistura por dificuldade: cerca de 45% fácil, 35% médio, 20% difícil.
