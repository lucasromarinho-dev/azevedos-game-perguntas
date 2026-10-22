# Expansão do banco de perguntas

Pipeline para crescer o banco (`perguntas.json`, 4.580 perguntas) sem perder qualidade. Tudo acontece na branch `expansao`. **Nada aqui altera `perguntas.json` nem a branch `main`**, que o jogo e o app de TV leem em produção.

## Arquivos

| Caminho | O que é |
|---|---|
| `GUIA-ESTILO.md` | O que faz uma pergunta boa aqui, régua de cada dificuldade, o que evitar |
| `subtemas.json` | Quantas perguntas atuais caem em cada subtema (estimativa por palavras-chave) |
| `plano.json` | Metas do piloto por categoria x dificuldade (500, proporcional ao banco) |
| `fontes/lote-NNN*.txt` | Texto compacto escrito pelo gerador, uma pergunta por linha (rodadas de reposição em `-r2`, `-r3`...) |
| `lotes/lote-NNN.json` | As fichas: cada pergunta com os campos do jogo + `id`, `subtema`, `status`, `motivo`, `dup`, `dup_ref`, `recente` |
| `PROBLEMAS-BANCO-ATUAL.md` | Problemas vistos no banco atual (só anotados, nada corrigido) |

## Scripts (Node puro, sem dependências, zero IA)

Rode da raiz do repo.

| Comando | Para quê |
|---|---|
| `node expansao/scripts/montar-lote.mjs expansao/fontes/lote-002.txt 2` | Converte a fonte em fichas no `lote-002.json`. Valida as regras do jogo e do piloto, gera o `id` e sorteia a posição da certa. Só acrescenta o que ainda não está no lote (pode rodar de novo sem duplicar). |
| `node expansao/scripts/duplicadas.mjs lote-002.json --descartar` | Compara com as 4.580 atuais e com as outras novas. Marca `dup` e `dup_ref`; com `--descartar`, duplicada "certa" vira `descartada`. |
| `node expansao/scripts/duplicadas.mjs --teste` | Casos de teste do detector, incluindo os 15 descartes do conferente-v1 (meta: 13 ou mais como "certa") |
| `node expansao/scripts/duplicadas.mjs --banco` | Procura duplicadas dentro do próprio banco atual (só relatório) |
| `node expansao/scripts/ver-dups.mjs lote-002.json [suspeita]` | Mostra lado a lado cada pergunta marcada e a parecida |
| `node expansao/scripts/descartar.mjs lote-002.json dup id1 id2` | Descarta à mão (com `dup`, o motivo vira "mesmo fato que ...") |
| `node expansao/scripts/faltam.mjs lote-002.json` | Quanto falta no lote para bater a cota de cada categoria x dificuldade |
| `node expansao/scripts/balancear.mjs lote-002.json` | Equilibra a posição da certa (A/B/C/D) no lote |
| `node expansao/scripts/status.mjs [--pendentes]` | Painel geral: status, metas, duplicidade, recentes, posição da certa, pendências |
| `node expansao/scripts/subtemas.mjs` | Recalcula `subtemas.json` |
| `node expansao/scripts/metrica-lote.mjs 6 "arquivos"` | Grava em `metricas.json` a linha do lote (escritas, válidas, descarte, caracteres, tokens) |

O detector (`scripts/semelhanca.mjs`, usado por `duplicadas.mjs` e `candidatas.mjs`) pesa as palavras pela raridade no banco (IDF) e cruza a resposta de uma pergunta com o enunciado da outra nos dois sentidos, para pegar pergunta invertida ("Manila é capital de qual país?" x "Qual a capital das Filipinas?") e resposta citada no banco ("A prensa de tipos móveis de Gutenberg..." x "Qual invenção de Gutenberg...?"). As regras e a calibração estão no topo do arquivo e em `metricas.json` (`detector_v2`).

## Método atual: respostas primeiro (aprovado pelo Lucas)

O banco já cobre quase toda trivia "clássica": no lote 1, 55% do que foi escrito de cabeça já existia. Por isso:

1. Escolha um subtema aberto em `arvore.json` (meta **3x**, banco total ~13.700, com `falta` e `cota_rodada` por subtema; microtemas já testados em `_microtemas`) e um **microtema estreito**.
2. `node expansao/scripts/contexto.mjs "Categoria" termo1 termo2 ...` mostra até 20 perguntas que já tocam no microtema ("já existe, não repetir").
3. Escreva só uma **lista curta** em `candidatas/<microtema>.txt`, uma linha por fato: `Categoria|Resposta - fato curto`.
4. `node expansao/scripts/candidatas.mjs candidatas/<arquivo>.txt --registrar` marca cada linha como EXISTE / RISCO / LIVRE e grava o resultado por microtema em `microtemas.json` (que o `arvore.mjs` copia para `arvore.json`). Descarte acima de 50% = microtema **saturado** (cota 0): troque de microtema.
   - **A "Resposta" da candidata tem que ser exatamente a resposta que a pergunta vai pedir.** Se a pergunta inverter (candidata "Gunners", pergunta pedindo "Arsenal"), o filtro não vale.
   - Escreva as perguntas só a partir da saída de `--livres`, nunca de memória.
5. Só para as LIVRES (e RISCO com ângulo novo) escreva as perguntas completas na fonte do lote e siga o fluxo abaixo.
6. Anote o lote em `metricas.json` (método, escritas, válidas, descarte).

| Comando | Para quê |
|---|---|
| `node expansao/scripts/arvore.mjs` | Recalcula `arvore.json` (meta, atual estimado, novas, falta), preservando status e microtemas |
| `node expansao/scripts/contexto.mjs "Esportes" "Libertadores" "1963"` | Perguntas vizinhas que já existem |
| `node expansao/scripts/candidatas.mjs arq.txt [--json] [--so-banco]` | Filtro de respostas candidatas, sem IA |
| `node expansao/scripts/grep-banco.mjs termo1 termo2` | Conta quantas perguntas citam cada termo (checagem rápida de assunto) |

## Rodada 3 (lotes 026 a 035): o que mudou

| Comando | Para quê |
|---|---|
| `node expansao/scripts/fatos.mjs candidatas/arq.txt --curto [--registrar]` | Para cada termo ou nome, quantas perguntas já o citam. `--curto` mostra só os que têm 0 ou 1 (os livres). É o filtro principal da rodada 3: checar o termo ANTES de escrever. |
| `node expansao/scripts/variedade.mjs [26 35]` | Variedade da rodada: no máximo 3 perguntas por universo ou franquia, música até 1/3 do Entretenimento, subtemas de Esportes, parte de fáceis |
| `node expansao/scripts/mover-excedentes.mjs lote-026.json lote-027.json` | Passa as válidas que sobram da cota de um lote aberto para o próximo (nunca mexe em lote já entregue) |

- Campo opcional `U=Universo` no fim da linha da fonte (ex.: `|U=Star Wars`) grava `universo` na ficha; o `variedade.mjs` também detecta universos conhecidos pelo texto.
- Detector v4 (`cruzamento.mjs`): tabela `ENTIDADES_TXT` de sinônimos (Riad = Riade, Yalta = Ialta, Polaris = Estrela Polar, Palm Pilot = Palm, Vila da Folha = Vila Oculta da Folha...). Para acrescentar um sinônimo, basta uma linha `forma canônica = variante | variante`.
- Lição da rodada: escrever de cabeça repete o banco (37% no lote 026). Termos e conceitos (sinuca, clave de sol, kernel, peneira) estão muito menos explorados que nomes famosos.

## Fluxo de um lote

1. Escrever `fontes/lote-NNN.txt` (formato no topo de `montar-lote.mjs`), seguindo o guia de estilo e priorizando subtemas com pouca cobertura.
2. `montar-lote.mjs` -> `duplicadas.mjs --descartar` -> `ver-dups.mjs` (suspeitas que são claramente o mesmo fato: `descartar.mjs ... dup`).
3. `faltam.mjs` mostra o que repor. Escrever `fontes/lote-NNN-r2.txt` e repetir o passo 2 até "faltam: 0".
4. `balancear.mjs`, depois commit + push na branch `expansao`.

Status de cada pergunta: `gerada` (saiu do gerador) -> `conferida` (outro agente checou o fato) -> `aprovada` (pronta para entrar no banco), ou `descartada` com `motivo`. **Quem gera não confere**: a conferência é feita por outro agente, independente.

## Como retomar depois de uma queda

1. `git checkout expansao && git pull`
2. `node expansao/scripts/status.mjs` mostra quantos lotes existem e quanto falta de cada meta.
3. Se o último lote não tem 100 válidas, rode `node expansao/scripts/faltam.mjs lote-NNN.json` e continue as reposições. Se a fonte (`fontes/`) tem linhas que ainda não viraram fichas, basta rodar `montar-lote.mjs` de novo: ele só acrescenta o que falta.
4. Commit + push a cada lote fechado: uma queda perde no máximo o lote em andamento.

## Regras que valem para toda pergunta nova

- Formato do jogo: categoria e dificuldade válidas, 4 alternativas distintas, a resposta entre elas (o `montar-lote.mjs` aplica o mesmo validador de `quest-online .../shared/perguntas.ts`).
- Uma resposta certa, verificável; erradas plausíveis e do mesmo tipo. Na dúvida, não cria.
- Fato de 2020 em diante: marcado `R`, no máximo "medio" e com o ano no texto. Ano no enunciado é permitido em todas as categorias.
- Nada de "atual", "hoje", "atualmente" (o script barra).
