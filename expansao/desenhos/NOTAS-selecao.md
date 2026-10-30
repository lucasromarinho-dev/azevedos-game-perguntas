# Seleção Disney+Pixar do modo "Desenhos" (450 de 1.000)

Seletor: agente seletor-desenhos, 30/10/2026, branch `expansao`. Nada publicado; `main`, `perguntas.json`, README raiz, `metricas.json` e a pasta `disney/` intocados (só um parâmetro opcional novo em `disney/scripts/validar-disney.mts`, ver abaixo). A parte de outras animações (550) é de outro agente, em `desenhos/lotes/`.

## Arquivos

- `selecao-disney-450.json`: arquivo do jogo, 450 perguntas, 5 campos na ordem (categoria, dificuldade, pergunta, resposta, alternativas), categoria **"Desenhos"** em todas, uma linha, UTF-8 sem BOM, NFC, sem quebra no fim. Ordem: fáceis, médias, difíceis; dentro de cada uma, a ordem dos lotes de origem.
- `selecao-disney-450-ref.json`: uma ficha por pergunta, na mesma ordem: `id` e `lote` de origem, `filme`, `grupo`, `era`, `musica`, categoria e dificuldade originais, `correcao` (feita nesta seleção) e `correcao_conferente` (a que já vinha da conferência).
- `cortes-cruzamento-v12.json`: as 145 perguntas cortadas por repetir fato do banco principal v12, com a pergunta do v12 que repete.
- `decisoes-selecao.json`: rejeitadas pela régua (72, das quais 20 em `rejeitadas_por_v12`), grupos exclusivos (no máximo uma pergunta de cada), correções e ajustes de dificuldade.
- `scripts/cruzar-v12.mjs` (detector de entidades contra o v12) e `scripts/selecionar-disney.mjs` (monta os dois JSON a partir das decisões; determinístico, pode rodar de novo).

## Números

- **Dificuldade:** 158 fáceis, 180 médias, 112 difíceis (meta exata). Nenhum ajuste de dificuldade foi necessário: as quotas fecharam com a dificuldade da conferência.
- **Músicas:** 70 (25 fáceis, 28 médias, 17 difíceis), todas do tema original Músicas; só título, filme ou personagem que canta, nenhum trecho de letra.
- **Variedade:** 74 filmes. Maior filme: A Pequena Sereia 17 (3,8%). Top 10: A Pequena Sereia 17, Frozen 16, Enrolados 16, Aladdin 15, O Rei Leão 15, Cinderela 14, Mulan 14, Moana 14, Tarzan 13, Encanto 12. Por franquia, a maior é Frozen (Frozen 16 + Frozen 2 9 = 25, 5,6%), abaixo do teto de 36. Tetos usados: 20 por filme muito conhecido, 10 por filme médio, 4 por filme pouco lembrado (Atlantis, Bolt, Planeta do Tesouro etc.), 30 por franquia.
- **Eras:** Clássicos (até 1988) 108, Renascença (1989-1999) 106, Modernos (2000 em diante) 132, Pixar 104.
- **Temas de origem:** Princesas 102, Pixar 79, Vilões 71, Músicas 70, Disney Moderno e Bichos 70, Clássicos Disney 58.

## Cruzamento com o banco principal (v12)

- `cruzar-v12.mjs` rodou o detector de entidades (`scripts/cruzamento.mjs`) das 1.000 conferidas contra as 13.986 do v12: 313 marcadas (270 "certa", 43 "suspeita"), lidas uma a uma.
- **Cortadas: 165 no total.** 145 em `cortes-cruzamento-v12.json` (mesmo fato, pergunta invertida, ou enunciado do v12 que dá a resposta: Terra do Nunca, Coelho Branco, Quasímodo, Meeko, Pascal, Olaf, Mushu, Hades "cabelo de fogo", Cruella e o casaco, Experimento 626, Edna Moda, Remy etc.) e mais 20 achadas na leitura da lista de perguntas Disney/Pixar do v12 (259 de Entretenimento), em `rejeitadas_por_v12`: Abu macaco, Motunui, Hei Hei, Balu, Havaí (v12 cita a "menina havaiana"), Woody de Andy, Sulley, Ernesto de la Cruz, nave espacial do WALL-E (Buy n Large), Dug, Crush, a bota com "Andy", os três olhos dos alienígenas, a casa com balões, Merida ruiva/escocesa/arqueira (3), Judy policial, "Rainha de Copas" e "buraco de coelho".
- Ficaram as que só citam o nome do personagem sem dar o fato perguntado (ex.: v12 "mordomo do rei Mufasa" x Desenhos "pai de Simba").
- **McQueen 95:** não está no v12 (a versão do banco principal foi descartada no lote 123 justamente por repetir o banco Disney), então a pergunta do Disney (03fc375c59) pode entrar e entrou. Se a do lote 123 voltar ao banco principal, esta sai.

## Régua e cortes internos

- **Rejeitadas pela régua (52 fora as do v12):** ano de lançamento e "qual saiu primeiro" (bastidor, 16), "complete o título" que se responde sozinho (Dama e o..., Espada Era a..., Frozen: Uma Aventura..., Hakuna..., Se..., Lobo, Sapo), triviais demais (Pongo é cachorro, Simba é leão, Cruella dirige um carro), resposta dada pelo nome (prefeito Leãonzalez = leão), bastidor de elenco (Shakira dá voz a Gazelle, Aurora Miranda, livro de Stevenson) e números de decoreba (idade do Carl, 100 acres).
- **Grupos exclusivos (148):** perguntas que se entregam (o enunciado de uma traz a resposta da outra: "De que filme é Um Mundo Ideal?" x "Que dupla canta Um Mundo Ideal?") ou repetem o mesmo fato. Além disso, o seletor não deixa entrar duas perguntas com a mesma resposta na mesma franquia (evita três "O Gênio" ou três "Scar"). Uma passada final do detector dentro das 450 sobrou só com pares que citam o nome de um personagem principal (Elsa, Anna, Gênio), sem entregar o fato.
- **Preferência:** filmes mais conhecidos das famílias brasileiras primeiro, depois desempate fixo pelo id (semente "desenhos-2026").

## Correção feita

- **fbe674b8ca** (Procurando Nemo, líder do aquário do dentista): resposta "Guelra" trocada por **"Gil"**. Guelra é o nome na dublagem de Portugal; no Brasil o personagem (Gill no original, dublado por Márcio Simões) se chama Gil. Fonte: pt.wikipedia, verbete Finding Nemo, tabela de dublagem (linha `|Gill||Márcio Simões||Gil||`), lida pelo texto bruto em 30/10/2026. Erradas mantidas (Crush, Nigel, Bruce). O lote `disney/lotes/disney-001.json` não foi mexido; a troca está só na seleção e registrada em `correcao` na ficha.

## Validação

- `npx tsx expansao/disney/scripts/validar-disney.mts expansao/desenhos/selecao-disney-450.json "Desenhos"`: cópia do montarBanco com a categoria Desenhos = 450 válidas, 0 descartadas (Desenhos|facil 158, medio 180, dificil 112); 0 enunciados duplicados. O montarBanco real do jogo recusa as 450 ("categoria desconhecida: Desenhos"), como esperado: o jogo ainda não conhece a categoria.
- O `validar-disney.mts` ganhou um 2º parâmetro opcional com a lista de categorias separada por vírgula; sem ele continua usando as 6 categorias Disney (o resultado do `perguntas-disney.json` não muda).
- `node expansao/scripts/entrega.mjs --arquivo expansao/desenhos/selecao-disney-450.json`: 0 suspeitas.
- Checagem própria: 4 alternativas distintas (sem acento e caixa) com a resposta entre elas, 5 campos na ordem, NFC, nenhum travessão, nenhum enunciado repetido.

## Para quem juntar com as 550

- Cruzar as 550 novas contra estas 450 (e contra o v12) antes de fechar o banco de 1.000; os nomes da Disney aparecem muito nas erradas de outras animações.
- Reserva: 333 candidatas boas ficaram de fora só por quota ou teto (rodar o seletor com `--relatorio` mostra as sobras por dificuldade).
