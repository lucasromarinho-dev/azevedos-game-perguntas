# Desenhos v2, rodada 3 de geração (anim-008)

Gerador da rodada 3, 01/11/2026, branch `expansao`. Lote para fechar as 2.000 do banco (faltavam 19) com folga.
Nada de Disney, Pixar, Turma da Mônica nem Pokémon. Todas as fichas com status `gerada`, no formato dos lotes anim-001 a 007 (com `grupo`).

## Totais

| Grupo | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| Cartoon/Nick/TV | 4 | 2 | 2 | 8 |
| DreamWorks e similares | 3 | 3 | 1 | 7 |
| Clássicos | 2 | 2 | 1 | 5 |
| Anime de família | 2 | 2 | 1 | 5 |
| Brasil | 3 | 1 | 1 | 5 |
| **Total** | **14** | **10** | **6** | **30** |

- Posição da resposta: 7/8/7/8.
- 26 obras. Quase todas sem nenhuma pergunta no banco, nas reaproveitadas e nos lotes 001 a 007:
  - TV: Octonautas, Dinotrem, As Pistas de Blue, Mike, o Cavaleiro, Aventuras com os Kratts, Charlie e Lola;
  - filmes: O Touro Ferdinando, O Caminho para El Dorado, A Família Mitchell e a Revolta das Máquinas, O Lorax;
  - clássicos: Alvin e os Esquilos (só o Dave no 002), Riquinho e Tintim (só no v12, com outro fato);
  - Brasil: Bob Zoom, Lupi & Baduki, Princesas do Mar, Zuzubalândia, O Grilo Feliz.
- Obras que já tinham perguntas, com fato novo: Os Sem-Floresta, Robô Selvagem, Speed Racer, Corrida Maluca, Doraemon, Hamtaro, Ponyo, Kiki.

## Checagem web

- 52 trechos lidos nas 30 fichas, gravados em `verificado_web` (fonte, página e trecho). Toda ficha tem pelo menos 1, e 22 têm 2.
- API das wikis com User-Agent genérico de navegador: Dublagem Wiki, Wikipédia pt e en, Fandom (Ghibli, Doraemon, Alvin and the Chipmunks).

## Nomes da dublagem que a fonte corrigiu

- Octonautas: o capitão é **Capitão Polo Polar** (não Barnacles), o pinguim é **Enfermeiro Pepe Pinguim** (não Peso), a coelha é **Perita** (não Tweak) e o polvo é **Professor Sabedor**.
- Dinosaur Train no Brasil é **Dinotrem**, e o Buddy se chama **Bruno**.
- O Lorax: o Once-ler é **Umavez-ildo**.
- Robô Selvagem: Brightbill é **Bico-Vivo**, Fink é **Astuto**, Pinktail é **Cauda-Rosa**.
- Mike, o Cavaleiro: os dragões são **Faísca e Esguicho**.
- Corrida Maluca: o soldado do Carro Tanque é **Soldado Digley** na Dublagem Wiki (Meekley na wiki pt). Ele só entra como alternativa errada.
- Hamtaro: Oxnard é **Fofuxo**.
- **Ficou fora por nome não confirmado:** Monchi (o pug dos Mitchell não está no elenco da Dublagem Wiki), Tayo (sem página na Dublagem Wiki).

## Cruzamento

- `cruzamento.mjs` (procurarE) e `semelhanca.mjs` (piorOcorrencia) de cada pergunta contra: as 1.000, as reaproveitadas, anim-001 a 007, v12 inteiro, Esportes inteiro e o próprio lote.
- Busca própria por obra e personagem (cerca de 120 termos) nos mesmos arquivos, antes de escrever, e checagem das alternativas que são resposta de outra pergunta.
- **Cortes antes de gravar (ideias que já estavam no banco ou no v12):** Rio (Blu não voa, Jade, Linda), quase toda TV dos anos 2000 (Padrinhos Mágicos, Jimmy Neutron, Coragem, Dexter, Meninas Superpoderosas, Ei Arnold!, Backyardigans, Thornberrys), Scooby, Jetsons, Thundercats, Smurfs, Tom e Jerry, Pica-Pau, Looney Tunes, Popeye, Gato Félix, Ghibli (Calcifer, Gato-ônibus, Sem-Rosto, Sophie velha, Jiji, Haku), Menino Maluquinho (panela), Super Campeões (Benji).
- **Reescrita:** a do Robô Selvagem citava "a robô Roz, que cria um filhote de ganso", que é o enunciado da rea:91. Agora pergunta pelo ganso que aprende a voar antes da migração.
- Marcas que ficaram são falsos positivos:
  - título citado: Robô Selvagem, Riquinho, Tintim, Speed Racer, Doraemon (respostas de perguntas que pedem o título);
  - mesma resposta em obra diferente: Tiranossauro (Horácio), Coelha (Rebecca), Cabra, Tartaruga, Formiga (fábula), Amarelo (Minions);
  - palavra comum: Estelar x estrelas-do-mar, flores x girassol, presunto x chivito, rato x Plic, Ploc e Chuvisco.

## Entrega

- `entrega.mjs --arquivo` no lote: **0 suspeitas**.
- Todas as fichas têm 4 alternativas distintas com a resposta entre elas. Nenhum travessão longo.

## Observações para o conferente

- Ponyo: a fonte (Fandom Ghibli) diz "ham". "Presunto" é a tradução.
- Doraemon amarelo: as duas fontes concordam na cor; divergem só no motivo do choro (tristeza ou poção), que a pergunta não cita.
- Charlie e Lola (Soren Lorensen) e Corrida Maluca (Sargento Bombarda) foram marcadas difíceis por serem detalhe de fã.
