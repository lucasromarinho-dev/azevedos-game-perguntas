# Expansão do banco de perguntas

Pipeline para crescer o banco (`perguntas.json`, 4.580 perguntas) sem perder qualidade. Tudo acontece na branch `expansao`. **Nada aqui altera `perguntas.json` nem a branch `main`**, que o jogo e o app de TV leem em produção.

## Publicação (24/10/2026)

As rodadas 1 a 4 (lotes 001 a 045) foram publicadas na `main` em 24/10/2026, commit `8fbf0a3` ("Banco v4: +4402 perguntas da expansão conferida (8982 no total)"), com autorização do Lucas. As 4.402 `conferida` viraram `aprovada` (`aprovado_em: "2026-10-24"`, commit `73bfbf5` nesta branch) e entraram depois das 4.580 da `main` (base com a auditoria `d18a698`), na ordem dos lotes, só com os campos do jogo. Validador do jogo (`montarBanco`): 8.982 válidas, 0 descartadas; nenhum enunciado repetido; as 4.580 antigas idênticas byte a byte. A pasta `expansao/` não foi para a `main`.

Atenção para a próxima rodada: o `perguntas.json` desta branch ainda é o banco antigo (4.580). Antes de gerar lotes novos, trazer o da `main` (`git checkout origin/main -- perguntas.json`) para o detector de duplicadas comparar com as 8.982, e não reaproveitar status `aprovada` dos lotes 001 a 045 (já estão publicadas).

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
- Conferência da rodada 3 (conferente-v3, independente do gerador): 1.000 perguntas dos lotes 026 a 035, 955 sem mudança, 41 corrigidas (quase todas errada defensável trocada ou enunciado que entregava a resposta) e 4 descartadas por duplicidade; detalhes por lote em `metricas.json` (`conferencia.lotes`) e amostra de 30 em `amostra-lucas-r3.md`.

## Rodada 4 (lotes 036 a 045, branch `expansao-r4`)

- 1.002 válidas (status `gerada`, falta conferir) de 1.070 escritas; descarte do detector de 6,4%. Composição igual à da rodada 3 (`plano-r4.json`): 366 fáceis, 356 médias, 280 difíceis; resumo completo em `metricas.json` (`rodada4`).
- `faltam.mjs` passou a ler `plano-r4.json` para os lotes 036+ (antes só conhecia até a rodada 3). `variedade.mjs` só ganhou a nota de uso `36 45` no comentário; a lógica não mudou. O detector não foi alterado.
- Sondas largas com `fatos.mjs --curto` (4.976 termos, 41% com zero perguntas) e listas `candidatas/r4-0NN*.txt`: cerca de 18% das candidatas sem citação ainda existiam com outra grafia ou invertidas.
- Microtemas que renderam: comidas de padaria e de restaurante, sons e coletivos de animais, especialidades médicas, instrumentos de medida, narradores e TV esportiva, futebol de rua, fandoms, lugares fictícios de séries e games, Orkut e MSN, brincadeiras e cantigas, Velho Oeste.
- Régua de difícil mais rígida (aviso da conferência r3): conceito conhecido pelo nome não é difícil. Pipe (036) e Cavaquinho (038) rebaixadas e repostas; no 043, nove gentílicos derivados do nome da cidade foram retirados antes da entrega.
- Aviso de DC com 4 no `variedade.mjs` é falso positivo (Beco do Batman, bairro de São Paulo).

## Rodada 5 (lotes 046 a 055, branch `expansao`)

- 1.003 válidas (status `gerada`, falta conferir) de 1.135 escritas; descarte do detector de 11,4% (129), mais 3 retiradas pelo próprio gerador. Composição igual à das rodadas 3 e 4 (`plano-r5.json`): 365 fáceis, 355 médias, 283 difíceis; resumo completo em `metricas.json` (`resumo_r5`).
- `faltam.mjs` passou a ler `plano-r5.json` para os lotes 046+; `variedade.mjs` só ganhou a nota de uso `46 55`. Detector sem mudanças. As excedentes de cada lote foram passadas ao seguinte com `mover-excedentes.mjs` (por isso os lotes alternam 107 e 93; o 055 ficou com 96).
- Filtro: `fatos.mjs --curto` só acha o termo exato, e cerca de 1 em 7 termos com zero citações já existia no plural ou com outra grafia (Monges copistas, Cookies). Nos lotes 053 a 055 a sonda foi feita direto com `candidatas.mjs`, que pega essas variações.
- Renderam: português de Portugal e falsos cognatos do espanhol, regionalismos, comidas do mundo, plantas e frutas brasileiras, termos de cinema, empresas e veículos fictícios, vilões de animação, folclore e festas, música lusófona, tokusatsu e animes, profissões e objetos antigos, latim do dia a dia, filosofia, mitologia nórdica e egípcia, academia, golfe e esportes americanos, gíria e itens de games, mascotes de marcas e de software.
- Saturaram: games de luta e retrô, banda larga e apps brasileiros, Império e República de segunda linha, ventos e clima, vacinas e nutrição, mascotes e bolas de Copa, sitcoms, Nintendo de segunda linha. Fáceis de História, Esportes e Tecnologia seguem sendo o gargalo.
- 10 buscas na web, 9 fatos confirmados; os 2 sem confirmação ou que entregavam a resposta ficaram de fora. No 055, o enunciado do Canarinho Pistola foi reescrito direto no lote (a fonte guarda o original para o `montar-lote.mjs` não duplicar).

### Conferência da rodada 5 (conferente-v5, 29/10/2026)

- 1.003 perguntas dos lotes 046 a 055: **977 conferidas** (855 sem mudança, 122 com alguma mudança) e **26 descartadas** (13 duplicadas do banco publicado, 12 espelhos, 1 que entregava a resposta de outra). Detalhes por lote em `metricas.json` (`conferencia.lotes`, conferente-v5) e amostra de 30 em `amostra-lucas-r5.md`.
- Por lote (ok / com mudança / descartadas): 046 83/21/3, 047 82/9/2, 048 94/8/5, 049 85/6/2, 050 90/17/0, 051 80/11/2, 052 96/8/3, 053 74/16/3, 054 90/13/4, 055 81/13/2.
- Dificuldade: 30 rebaixadas (27 de difícil para médio, 3 de médio para fácil) e 2 subidas de fácil para médio por serem decoreba (Orlando Silva, Dólmã). Distribuição final das 977: 355 fáceis, 371 médias, 251 difíceis.
- Tipos de erro mais achados: enunciado que entregava a resposta de outra pergunta do banco ou da própria rodada (35, quase sempre um título ou termo que é resposta de outra: "1984", "planeta Pandora", "cavadinha", "Avatar: A Lenda de Aang"); dificuldade (32); espelho ou duplicada que a grafia escondeu do detector (30, incluindo 4 pares com as respostas cruzadas nas alternativas, como Gondwana x Laurásia e Fino x Imperial); errada defensável (26: Atalanta também é "Nerazzurri", Acampamento Júpiter também é refúgio de semideuses); fato impreciso (21: o Hi-Top Game era da Milmar e não da CCE, ossobuco é de vitela, o Everton saiu de Goodison Park em 2025).
- Suspeitas do detector: 112, das quais 95 mantidas (falso positivo, resposta igual com fato diferente é permitida), 11 reescritas e 6 descartadas.
- Checagem na web: 218 perguntas checadas (`verificado_web`), com 189 buscas e algumas leituras diretas na Wikipedia. **A cota de 200 buscas por sessão acabou** no meio dos lotes 051 a 055, que ficaram com menos checagem (15 a 22 por lote). As 196 conferidas sem `verificado_web` que têm número, superlativo ou são difíceis foram revisadas de memória pelo coordenador (daí a Valfenda rebaixada e os 4 pares de alternativas cruzadas), mas não passaram por busca. Para uma checagem complementar numa sessão nova, filtre nos lotes 046-055: `status` "conferida", sem `verificado_web`, com dígito, "primeiro/maior/único" no enunciado ou dificuldade "dificil".

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
- Conferência da rodada 4 (conferente-v4, independente do gerador, com verificação na web): 1.002 perguntas dos lotes 036 a 045, 913 sem mudança, 46 corrigidas (errada defensável trocada, fato impreciso ou enunciado que entregava a resposta), 31 rebaixadas de difícil e 13 descartadas (7 duplicadas ou espelhos que a variação de grafia escondeu do detector, 3 sem confirmação em fonte ou ambíguas); 373 checadas na web. Detalhes em `metricas.json` (`conferencia.lotes`, conferente-v4) e amostra de 30 em `amostra-lucas-r4.md`.
