# Desenhos v1, revisão pela régua do adulto

Revisor, 01/11/2026, branch `expansao`. Nada publicado na `main`. A v1 no ar (`perguntas-desenhos.json`) não foi mexida. Decisão por posição (1-1000, igual à ordem da v1 e às posições 1-1000 de `perguntas-desenhos-v2-origem.json`) em `revisao-regua-adulto-v1.json`, no mesmo formato de `revisao-regua-adulto.json`.

## Régua aplicada

A mesma da revisão das 1.000 novas (`NOTAS-revisao-regua-adulto.md`):

- Só entra desenho que um adulto brasileiro comum conhece, e pergunta que esse adulto tem chance real de acertar.
- Saem obras de criança pequena, obras de nicho e detalhe que só o fã conhece (personagem secundário, nome de capanga, bichinho de coadjuvante, episódio específico, nome de abertura em japonês, sequência pouco vista). Na dúvida, sai.
- Difícil é detalhe de algo muito conhecido, nunca obra obscura.

Como foi feito: primeiro a obra; obra fora da régua tira todas as perguntas. Depois, nas obras aprovadas, cada pergunta foi lida e julgada pelo assunto em si.

Coerência com a revisão das novas: saíram as mesmas obras (Elementos, Luca, Soul, Wish, Moana 2, Trolls, Megamente, Pets, Ben 10, Hora de Aventura, Gumball, Avatar, Steven Universo, Irmão do Jorel, Chihiro, Totoro, Yu-Gi-Oh!, She-Ra, Doraemon, Sakura e outras). Digimon ficou só com a pergunta do Agumon (como médio). Frozen 2 perdeu os espíritos e nomes secundários; Pokémon perdeu os Pokémon secundários.

Obras que só existem na v1 e saíram inteiras por nicho, na dúvida: A Espada Era a Lei, Irmão Urso, Raya e o Último Dragão, Phineas e Ferb, Os Padrinhos Mágicos, Super Campeões, Carros 3 (perguntas só de personagens novos), Red, Planeta do Tesouro, Dinossauro, Alô Amigos, Animaniacs, Manda-Chuva, Beyblade.

## Resultado

- **Ficam 622, saem 378** das 1.000 da v1.
- Motivo da saída: obra de nicho 187; obra de criança pequena 40; pergunta (obra aprovada, assunto ou personagem fora) 151.
- Dificuldade corrigida em 93 das que ficam (no campo `motivo` e em `dificuldade_final`).

### Por grupo

| Grupo | Ficam | Saem | Total |
|---|---|---|---|
| Disney | 249 | 101 | 350 |
| clássicos | 106 | 26 | 132 |
| DreamWorks e similares | 85 | 26 | 111 |
| Pixar | 79 | 30 | 109 |
| anime | 56 | 47 | 103 |
| Cartoon/Nick | 29 | 102 | 131 |
| Brasil | 18 | 46 | 64 |
| **Total** | **622** | **378** | **1000** |

### Por dificuldade (original)

| Dificuldade | Ficam | Saem |
|---|---|---|
| facil | 299 | 51 |
| medio | 270 | 130 |
| dificil | 53 | 197 |

Das que ficam, depois da correção: fácil 259, médio 270, difícil 93. A maior parte das difíceis da v1 era nome de coadjuvante; por isso o difícil caiu muito e várias fáceis viraram médias (nome de personagem não é fácil).

### As 15 obras que mais saíram

| Obra | Saem | Ficam |
|---|---|---|
| Avatar: A Lenda de Aang | 12 | 0 |
| Hora de Aventura | 10 | 0 |
| Digimon | 9 | 1 |
| Os Padrinhos Mágicos | 9 | 0 |
| Phineas e Ferb | 9 | 0 |
| Turma da Mônica | 9 | 11 |
| Irmão do Jorel | 8 | 0 |
| O Incrível Mundo de Gumball | 8 | 0 |
| Patrulha Canina | 8 | 0 |
| Peppa Pig | 8 | 0 |
| Ben 10 | 7 | 0 |
| O Show da Luna | 7 | 0 |
| Raya e o Último Dragão | 7 | 0 |
| Apenas um Show | 6 | 0 |
| As Meninas Superpoderosas | 6 | 4 |

63 obras saíram inteiras; 96 obras ficam com pelo menos uma pergunta.

## Efeito na conta para voltar a 2.000

A proposta de geração em `NOTAS-revisao-regua-adulto.md` contou a v1 inteira (1.000). Com esta revisão, se a v1 também for enxugada, o banco perde mais 378 e a conta de "a gerar" precisa ser refeita com a coluna v1 nova (as que ficam aqui). Nada foi remontado.
