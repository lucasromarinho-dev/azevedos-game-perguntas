# Desenhos v2, rodada 2 de geração (anim-004 a anim-007)

Gerador da rodada 2, 01/11/2026, branch `expansao`. Nada de Disney nem Pixar e nada de Turma da Mônica. Todas as fichas com status `gerada`, no formato dos lotes v1, mais o campo `grupo`.

## Lotes

| Lote | Conteúdo | Total |
|---|---|---|
| anim-004 | 60 DreamWorks e similares + 22 Cartoon/Nick/TV | 82 |
| anim-005 | 48 Cartoon/Nick/TV + 34 clássicos | 82 |
| anim-006 | 26 clássicos + 56 anime de família | 82 |
| anim-007 | 14 anime de família + 70 Brasil | 84 |

## Totais

| Grupo | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| DreamWorks/Illumination/Sony/Blue Sky/outros | 27 | 20 | 13 | 60 |
| Cartoon/Nick/TV | 32 | 23 | 15 | 70 |
| Clássicos | 27 | 20 | 13 | 60 |
| Anime de família | 32 | 23 | 15 | 70 |
| Brasil | 32 | 24 | 14 | 70 |
| **Total** | **150** | **110** | **70** | **330** |

- Posição da resposta equilibrada em cada lote (21/21/20/20 e 21/21/21/21).
- **Músicas: só 1** (Waffles, Jovens Titãs em Ação). Ficou longe das 15 pedidas: as músicas candidatas (Peaches, Golden/"Brilho" etc.) já estavam no anim-001 ou no banco, e "Golden" é "Brilho" na dublagem.
- **Teto de 60 por obra:** Pokémon fecha em 60 exatos (banco + reaproveitadas + anim-001..003 + 17 daqui). 8 perguntas de Pokémon foram trocadas por Digimon, Yo-kai, Cavaleiros e Sakura para não estourar. Nenhuma obra passa de 60.
- 124 obras, 81 delas sem nenhuma pergunta no banco atual nem nas reaproveitadas.

## Checagem web

- 525 trechos lidos, em 330 de 330 perguntas, gravados em `verificado_web` (fonte, página e o trecho).
- API das wikis com User-Agent genérico de navegador: Dublagem Wiki, Wikipédia pt e en, Fandom pt-br (pokemon, avatar, winx, irmaodojorel).
- **Nomes que a fonte corrigiu:** Megamente: a repórter é Rosane Rocha; Tá Dando Onda: Cadú Maverick; Robôs: Rodney Lataria e Dom Aço; CatDog: o rato é Orelha; Bob Esponja: Squilliam Imaginoso; Peppa: Danny Cão e Freddy Raposo; Hamtaro: Boss é Chefe; Bonnie tem o irmão Clément; Em Busca do Vale Encantado: Littlefoot, Saura, Patassaura, Petrúcio; Fievel Ratovich; Davi, o Gnomo; Capitão Planeta e os Planetários; Pepe Legal: Baba Looey.
- **Ficou fora por nome não confirmado na dublagem:** Teddy (Mr. Bean), "Podemos consertar?", Sailor Mercúrio/Chibiusa/Diana, Kuriboh, Oliver e rivais de Super Campeões, Abelha Maia (Willi x Willy), D'Artacão, Rudolph, Dente Afiado, Moranguinho, Carinholândia, Arthur, Dr. Slump, Spirit (Chuva/Pequeno Rio).

## Cruzamento

- `cruzamento.mjs` (compararE nos dois sentidos) e `semelhanca.mjs` (comparar) de cada pergunta contra: as 1.000, as 428 reaproveitadas, anim-001..003 (pull antes do cruzamento final), v12 inteiro, Esportes inteiro e os próprios lotes.
- **Cortes antes de gravar: cerca de 190 ideias.** Os grupos mais saturados foram clássicos (Flintstones, Jetsons, Zé Colmeia, Scooby, Pica-Pau, Looney Tunes, He-Man, Caverna: quase tudo já estava no banco ou no v12), anime (Pokémon, Digimon, Naruto, Dragon Ball, Ghibli) e Brasil (Peixonauta, Luna, AmigãoZão).
- Exemplos de corte por repetir o anim-001..003: Lumalee, Peaches, Murray, Griffin, Wallace e o queijo, Lloyd, Sensei Wu, Jett, Rosie, Greg, Marina, Bitzer, Luísa, Super-Gêmeos, Pepe Legal, Tutubarão, Schroeder.
- Enunciados reescritos para não entregar resposta de outra pergunta (ex.: "o Burro" virou "o amigo falante de Shrek"; "Bowser" virou "o grande vilão"; "Misty" virou "a líder de ginásio de Cerulean").
- Marcas que ficaram são falsos positivos: título citado (Sing, Klaus, Avatar, Bluey), respostas iguais em obras diferentes (Azul, Cachorro, Raposa, Pinguim, Yeti) ou palavra comum (Natal, ferro, cavalaria).

## Entrega

- `entrega.mjs --arquivo` em cada lote: 0 suspeitas nos quatro.

## Desvios

- Músicas: 1 em vez de cerca de 15.
- Estúdio Ghibli ficou com obra "Studio Ghibli" em duas fichas (O Reino dos Gatos, O Mundo dos Pequeninos).
