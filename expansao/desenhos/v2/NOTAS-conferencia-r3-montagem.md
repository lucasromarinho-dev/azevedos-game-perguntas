# Desenhos v2, conferência r3 (anim-008) e montagem das 2.000

Conferente independente e montador, 01/11/2026, branch `expansao`. Nada publicado na `main`. A v1 (`perguntas-desenhos.json`) e `reaproveitadas.json` não foram mexidos.

## Conferência do anim-008 (30)

| Status | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| conferida (entrou na v2) | 13 | 0 | 6 | 19 |
| reserva | 1 | 9 | 0 | 10 |
| descartada | 0 | 1 | 0 | 1 |

- Checagem própria das 30 pela API das wikis, com User-Agent genérico de navegador, e o trecho lido. Fica em `verificado_web_conferente`.
- **Fontes diferentes das do gerador** quando deu: Fandoms octonauts, dinosaur-train, bluesclues, wildkratts, alvin, tintin, doraemon, hamtaro e ghibli; wiki en (Octonauts, Mike the Knight, Wacky Races, Sea Princesses, Richie Rich); wiki pt (Dinosaur Train, Over the Hedge, O Caminho para El Dorado, The Wild Robot, The Lorax).
  - Bob Zoom: wiki pt e uma matéria da Folha do Leste ("formiguinha azul").
  - Zuzubalândia e O Grilo Feliz: só a Dublagem Wiki, relida por mim.
- **Nomes da dublagem confirmados na Dublagem Wiki:** Enfermeiro Pepe Pinguim, Perita, Bruno (Dinotrem), Faísca e Esguicho, Soren Lorensen, Lupe, Verne, Bico-Vivo, Umavez-ildo, Dólar, Dupond e Dupont, Corredor X, Sargento Bombarda, Fofuxo, Ester, Zuzu e Maledeto. Tortuga ("QG da Tortuga") está na sinopse da Dublagem Wiki.
- **Descartada:** 008.23 Ponyo ("Presunto"). A fonte diz "ham". Não achei o termo em nenhuma fonte em português: wiki pt, Dublagem Wiki e duas buscas na web. A comida é o próprio fato perguntado, então não dava para reescrever sem ela.
- **Reserva por nicho:** 008.27 Lupi & Baduki. A série é de 2024 e tem uma temporada de 13 episódios (Dublagem Wiki). O fato está certo.
- **Reserva da montagem:** as 9 médias conferidas. As médias já passavam da meta (782 contra 760), então só entraram fáceis e difíceis.
- **Régua:** nenhum ajuste de dificuldade. As difíceis são detalhe de fã (Soren Lorensen, Tortuga, Umavez-ildo, Sargento Bombarda, a cor original do Doraemon e o vilão Maledeto).
- **Correção:** 008.17. "do menino milionário" virou "do protagonista", porque dava o fato da rea:249 (o garoto mais rico do mundo). Fica em `correcao_montagem`.

## Montagem

- **Script:** `scripts/montar-v2.mjs`. Saída: `perguntas-desenhos-v2.json`, mais `perguntas-desenhos-v2-origem.json`, que dá a origem, a obra, o grupo e a música de cada posição.
- **Ordem:**
  - as 1.000 da v1, idênticas;
  - as 428 reaproveitadas;
  - as 553 conferidas do 001 ao 007;
  - 19 do anim-008, escolhidas pela maior falta em relação à meta.
- **Dificuldade:** usei a final. Nos lotes, o campo `dificuldade` já traz os 41 ajustes, e o script confere cada `dificuldade_ajuste` (lê o nível depois de "->" ou o primeiro nível citado) contra o campo. Nenhum divergiu.
- **002.66:** "Biyomon" virou "Piyomon" (resposta e alternativa), como na Dublagem Wiki. Fica em `correcao_montagem`.
  - A v1 ainda usa "Biyomon" como alternativa errada em 3 perguntas, mas não pode mudar.

## Cruzamento final (2.000 entre si e contra as 3.000 de Esportes)

- `compararE` (`cruzamento.mjs`) nos dois sentidos e `comparar` (`semelhanca.mjs`), em todos os pares.
- **Primeira passada:** 1.497 marcas.
  - 392 entre perguntas da v1, já lidas na montagem da v1.
  - 1.073 com alguma pergunta nova (252 "certa").
  - 32 contra Esportes.
- **Lidas:** todas as "certa", todas as "suspeita" da mesma obra (269), todas as do anim-008 (30) e todas as de Esportes.
- **Casos reais, tratados (5):**
  - rea:382 e rea:390 citavam "Springfield", a resposta da v1:730. Os dois enunciados foram reescritos na montagem (mapa `AJUSTES_REA` no script; o arquivo das reaproveitadas não mudou).
  - rea:394 dizia "no lugar de Misty", o que dava a resposta e o fato da v1:827 (a menina que viaja com Ash). Virou "Em Pokémon, qual garota passa a viajar com Ash na região de Hoenn?".
  - 002.14 citava "Cat Noir", a resposta da 001.74. Virou "qual garoto se transforma no parceiro da Ladybug?" (no lote).
  - 008.17, acima.
- **Segunda passada:** 1.493 marcas. Sumiram só as 4 "certa" desses pares, e nenhuma marca nova apareceu.
- **Marcas que ficaram, todas falso alarme pela régua das reaproveitadas:**
  - pergunta de título com o título citado noutros enunciados (Naruto, Sailor Moon, Irmão do Jorel, Aristogatas, Gumball, Bluey, Digimon "Butter-Fly", Riquinho);
  - personagem principal citado sem o fato (Woody, Buzz, Cebolinha, Misty, Pikachu, Bart, Mestre Kame, Gargamel, Muntz, Eric, Fada Madrinha);
  - mesma resposta genérica em obra diferente (cores, coelha, tiranossauro, tartaruga, porco, Penny, Max);
  - fatos diferentes da mesma obra (Tia Nastácia, Squirtle e as digievoluções).
- **Esportes:** só palavra ou resposta comum (Vermelho/Ferrari, Leão/Sport, Urso/Grizzlies, Polvo, Texas, Rock Lee x Bruce Lee).

## Totais da v2

- **Dificuldade:** 786 fáceis, 782 médias e 432 difíceis. A meta era 800/760/440, mas as 1.981 fixas já davam 782 médias.
- **Grupos:**
  - Disney 499 e Pixar 164, o que dá 663 de Disney + Pixar (teto 1.000);
  - Cartoon/Nick 319, clássicos 285, anime 285, DreamWorks e similares 242 e Brasil 206.
  - Valente, Red e Toy Story 3 contam como Pixar pela obra, mesmo onde o campo de origem dizia Disney.
  - As 10 de "Disney Channel" da v1 contam como Disney.
- **Obras (franquia junta):** Pokémon 59, Turma da Mônica 58, Dragon Ball 54, Digimon 34, Bob Esponja 33, Shrek 31 (com Gato de Botas), Toy Story 30, Frozen 28, Looney Tunes 25 e Cavaleiros do Zodíaco 25. Nenhuma passa de 60.
- **Músicas:** 119 no total, das quais 99 da v1, 13 das reaproveitadas e 7 dos lotes (001.23, 001.26, 001.30, 001.88, 003.87, 003.88 e 005.27).

## Validações

- `validar-disney.mts ... Desenhos`: 2.000 válidas e 0 descartadas.
- As primeiras 1.000 são idênticas à v1, item por item.
- 0 enunciados duplicados (sem caixa e acento), e todas têm 4 alternativas distintas com a resposta entre elas.
- `entrega.mjs --arquivo`: 0 suspeitas.
- Arquivo: sem BOM, numa linha só, sem quebra no fim, NFC, minificado e sem travessão longo nas novas.
