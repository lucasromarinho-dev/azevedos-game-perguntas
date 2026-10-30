# Expansão do banco de perguntas

Pipeline para crescer o banco (`perguntas.json`, 4.580 perguntas) sem perder qualidade. Tudo acontece na branch `expansao`. **Nada aqui altera `perguntas.json` nem a branch `main`**, que o jogo e o app de TV leem em produção.

## Publicação (24/10/2026)

As rodadas 1 a 4 (lotes 001 a 045) foram publicadas na `main` em 24/10/2026, commit `8fbf0a3` ("Banco v4: +4402 perguntas da expansão conferida (8982 no total)"), com autorização do Lucas. As 4.402 `conferida` viraram `aprovada` (`aprovado_em: "2026-10-24"`, commit `73bfbf5` nesta branch) e entraram depois das 4.580 da `main` (base com a auditoria `d18a698`), na ordem dos lotes, só com os campos do jogo. Validador do jogo (`montarBanco`): 8.982 válidas, 0 descartadas; nenhum enunciado repetido; as 4.580 antigas idênticas byte a byte. A pasta `expansao/` não foi para a `main`.

Atenção para a próxima rodada: o `perguntas.json` desta branch ainda é o banco antigo (4.580). Antes de gerar lotes novos, trazer o da `main` (`git checkout origin/main -- perguntas.json`) para o detector de duplicadas comparar com as 8.982, e não reaproveitar status `aprovada` dos lotes 001 a 045 (já estão publicadas).

## Publicação da rodada 7 (30/10/2026)

A rodada 7 (lotes 066 a 075) foi publicada na `main` em 30/10/2026, commit `db476d1` ("Banco v7: +972 perguntas da rodada 7 (total 11.905)"), com autorização do Lucas. Antes, as 22 que tinham ficado fora da checagem web complementar foram confirmadas (commit `71396c7`). As 972 `conferida` viraram `aprovada` (`aprovado_em: "2026-10-30"`, commit `e73ef51` nesta branch) e entraram depois das 10.933 da `main` (banco v6, base `68ff1de`), na ordem dos lotes, só com os campos do jogo. Validador do jogo (`montarBanco`): 11.905 válidas, 0 descartadas; nenhum enunciado repetido (nem sem maiúsculas e espaços); as 10.933 antigas idênticas byte a byte. A pasta `expansao/` não foi para a `main`.

Atenção para a próxima rodada: trazer o `perguntas.json` da `main` (11.905) antes de gerar lotes novos, e não reaproveitar status `aprovada` dos lotes 001 a 075 (já estão publicadas).

## Publicação da rodada 6 (30/10/2026)

A rodada 6 (lotes 056 a 065) foi publicada na `main` em 30/10/2026, commit `68ff1de` ("Banco v6: +974 perguntas da rodada 6 (total 10.933)"), com autorização do Lucas. Antes, as 8 do lote 063 que tinham ficado fora da checagem web complementar foram confirmadas (commit `385bc69`). As 974 `conferida` viraram `aprovada` (`aprovado_em: "2026-10-30"`, commit `818fab9` nesta branch) e entraram depois das 9.959 da `main` (banco v5, base `8d5a863`), na ordem dos lotes, só com os campos do jogo. Validador do jogo (`montarBanco`): 10.933 válidas, 0 descartadas; nenhum enunciado repetido; as 9.959 antigas idênticas byte a byte. A pasta `expansao/` não foi para a `main`.

Atenção para a próxima rodada: trazer o `perguntas.json` da `main` (10.933) antes de gerar lotes novos, e não reaproveitar status `aprovada` dos lotes 001 a 065 (já estão publicadas).

## Publicação da rodada 5 (30/10/2026)

A rodada 5 (lotes 046 a 055) foi publicada na `main` em 30/10/2026, commit `8d5a863` ("Banco v5: +977 perguntas da rodada 5 (total 9.959)"), com autorização do Lucas. As 977 `conferida` viraram `aprovada` (`aprovado_em: "2026-10-30"`, commit `224b206` nesta branch) e entraram depois das 8.982 da `main` (banco v4, base `04f928c`), na ordem dos lotes, só com os campos do jogo. Validador do jogo (`montarBanco`): 9.959 válidas, 0 descartadas; nenhum enunciado repetido; as 8.982 antigas idênticas byte a byte. A pasta `expansao/` não foi para a `main`.

Atenção para a próxima rodada: trazer o `perguntas.json` da `main` (9.959) antes de gerar lotes novos, e não reaproveitar status `aprovada` dos lotes 001 a 055 (já estão publicadas).

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
| `node expansao/scripts/checa-resposta.mjs --lote lote-NNN.json` | Resposta já existente no banco ou citada em outro enunciado (também lê linhas de candidatas pelo stdin) |

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

## Rodada 6 (lotes 056 a 065, branch `expansao`)

- Antes de gerar, o `perguntas.json` da `main` (banco v5, 9.959) foi trazido para esta branch (commit `be97f5f`), para os detectores enxergarem o banco publicado inteiro.
- 1.000 válidas (status `gerada`, falta conferir) de 1.132 escritas; descarte de 11,5% (130, detector mais duplicadas confirmadas à mão), mais 2 retiradas pelo gerador na checagem web. Composição igual à das rodadas 3 a 5 (`plano-r6.json`): 365 fáceis, 355 médias, 280 difíceis; 6 recentes (com ano e no máximo médio). Resumo completo em `metricas.json` (`resumo_r6`).
- `faltam.mjs` passou a ler `plano-r6.json` para os lotes 056+; `variedade.mjs` só ganhou a nota de uso `56 65`. Detector sem mudanças. Excedentes passados ao lote seguinte com `mover-excedentes.mjs` (os lotes alternam 107 e 93).
- Sonda: `candidatas.mjs --registrar` em todos os lotes (`candidatas/r6-0NN*.txt`). A partir do 064, as LIVRES passaram também por um checador simples da resposta no banco (resposta igual ou citada em outro enunciado), que pegou duplicadas que o detector deixava passar (Vicente Feola, Copa do Rei, Mariah Carey, padel). Vale usar esse filtro desde o primeiro lote na próxima rodada.
- Renderam: domínios de internet, peças do carro, raças de cães e gatos, festas do mundo e de fim de ano, arquitetura, cultura lusófona, gentílicos e nomes nativos de países, trajes típicos, moda, aviões e transportes, siglas de estados e DDD, hinos de clubes, signos, marcas que viraram nome de produto, significado de expressões populares, Bíblia como cultura geral, obrigado e olá em outras línguas, tribos urbanas, Natal e carnaval de rua, poetas e versos, técnicos campeões do mundo, potências por esporte, palácios de governo, bairros do mundo, eletrodomésticos e relógios.
- Saturaram: esportes de nicho (rúgbi, críquete, curling, esgrima), automobilismo, esportes criados no Brasil, apelidos de clubes sul-americanos, circuitos da F1, cinema brasileiro, games de franquias variadas, museus do mundo, hormônios, vitaminas, história da medicina, apelidos de reis, filosofia clássica, mal-estares do corpo, novelas mexicanas do SBT, companheiros da Disney, atletas brasileiros de segunda linha, Japão feudal, sete maravilhas. Fáceis de Esportes, História, Ciências e Tecnologia seguem o gargalo; o descarte subiu nos lotes 061 a 065 (14% a 19%).
- 11 buscas na web: confirmados Padre Azevedo (1861), Sissi e Sun Wen (1999), Tramontina (1911), Magazine Luiza (1957), Petrúcio Ferreira e o handebol francês; corrigidos no lote o enunciado do Santos (marchinha "Leão do Mar", hino popular) e o do Stereobelt (sem "em São Paulo"); retirados o gentílico "burquinense" (057) e a origem de "Jingle Bells" no Dia de Ação de Graças (065), sem fonte.
- Edições feitas direto no lote (a fonte guarda o original, com nota): BYD sem "chinesa" (059), teia com resposta "Seda" (060), alternativas de Washington e Lincoln sem respostas cruzadas (057 e 060), erradas dos poetas e do ditado de Roma (064).
- Para o conferente: muitos moldes repetidos de propósito (domínios, DDD, "obrigado em qual língua", signos), sempre com resposta e fato diferentes; vale olhar se alguma partida fica repetitiva.

### Conferência da rodada 6 (conferente-v6, 30/10/2026)

- 1.000 perguntas dos lotes 056 a 065: **975 conferidas** (875 sem mudança, 100 com alguma mudança) e **25 descartadas** (15 por excesso de molde repetido, 8 espelhos do banco ou da rodada, 1 cadeia, 1 fato que pode mudar). Detalhes por lote em `metricas.json` (`conferencia.lotes`, conferente-v6), resumo em `conferencia.resumo_r6` e amostra de 30 em `amostra-lucas-r6.md`.
- Por lote (ok / com mudança / descartadas): 056 102/4/1, 057 87/6/0, 058 102/3/2, 059 84/9/0, 060 89/18/0, 061 79/13/1, 062 92/13/2, 063 83/7/3, 064 90/16/1, 065 67/11/15.
- Moldes repetidos: as perguntas de domínio de internet eram 30 (15 só no 065) e ficaram 18; o DDD passou de 20 para 18; no molde "palavra X em qual língua" saíram Sayonara (quarta resposta Japonês) e Hola (repetia Adiós). Signos, siglas de estado, gentílicos e raças ficaram (respostas e fatos diferentes, espalhados pela rodada). O `.io` saiu também por risco de mudar (acordo de Chagos).
- Dificuldade: 13 rebaixadas de difícil para médio (Maine Coon, Border collie, Cecília Meireles, Gonçalves Dias, panetone de Milão, entre outras). Distribuição final das 975: 354 fáceis, 360 médias, 261 difíceis.
- Tipos de erro mais achados: respostas cruzadas e espelhos (52: Wallabies x Springboks, Ribalta x Coxia x Rotunda x Bambolina, óperas de Rossini, Puccini e Verdi, Hiragana x Hangul, moedas antes do euro cruzadas com o banco); errada defensável (21: Almofariz é o próprio pilão, Concertino é sinônimo de spalla, Jai-alai é pelota basca); enunciado que entregava a resposta (19: "originária do Maine", "sigla de Build Your Dreams", "representado por um escorpião"); fato impreciso (10: guarda-chuva dobrável chinês, Disque-Denúncia 181 não é nacional, Karakorum só virou capital com Ögedei); dificuldade (7 sem outra mudança).
- Suspeitas do detector: 166, das quais 144 mantidas (molde parecido com fato diferente), 8 reescritas e 14 descartadas.
- `scripts/checa-resposta.mjs` (novo): além da sonda por stdin usada pelo gerador, `--lote lote-NNN.json [--status gerada]` lista, para cada pergunta, outras do banco e dos lotes com a mesma resposta ou que citam essa resposta no enunciado (R) e respostas de outras citadas no enunciado dela (E). Foi o que achou a maior parte dos espelhos desta conferência (Woodstock, Positivo, Paulistão, Sísifo, cartões perfurados).
- Checagem na web: 126 buscas (24 durante os lotes e 102 num passe final, muitas agrupadas por tema: lista de DDD, técnicos campeões, sedes do Pan, nomes de elementos), com 213 perguntas marcadas `verificado_web`. Ficaram **210 conferidas de risco sem `verificado_web`** (dígito, superlativo ou difícil), conferidas de conhecimento consolidado; a lista de ids por lote está em `metricas.json` (`conferencia.resumo_r6.risco_sem_verificado_web`) para uma checagem complementar.
- Checagem web complementar (30/10/2026, 200 buscas e leituras): das 210 de risco, 189 confirmadas sem mudança, 9 corrigidas (errada defensável: Quirguistanês, Ligadura, Boto-cinza; fato impreciso: canastra, amárico, CNPJ alfanumérico desde julho de 2026, língua do pica-pau, sepak takraw; resposta Beatniks virou Geração Beat), 3 rebaixadas para médio (sem eira nem beira, onde Judas perdeu as botas, clean sheet) e 1 descartada (game do badminton até 21: a BWF aprovou o 3x15 a partir de janeiro de 2027). As 8 que ficaram sem checar por cota (lote 063: yuppies, orégano, trufa, amanita, endro, punks, Linguado, soneca) foram checadas numa sessão seguinte com 9 buscas: todas confirmadas, nenhuma errada defensável (`checagem_web_complementar.checagem_final_063`).
- Correções feitas depois do lote fechado (para desfazer respostas cruzadas com lotes seguintes) ficam na própria ficha (`correcao`) e na linha do lote em `conferencia.lotes`.

## Rodada 7 (lotes 066 a 075, branch `expansao-r7`)

- Gerada em paralelo com a rodada 6, numa worktree própria (`azevedos-game-perguntas-r7`, branch `expansao-r7`, criada de `origin/expansao`). A cada lote: `git fetch` + `git merge origin/expansao`; os conflitos de `microtemas.json` e `metricas.json` foram resolvidos por união das chaves (as linhas de lote das duas rodadas ficam). Nada foi enviado para `expansao` nem para a `main`.
- 995 válidas (status `gerada`, falta conferir) de 1.096 escritas; descarte de 9,2% (101), dos quais 48 por sobreposição com lotes novos, quase todos da rodada 6 (as duas rodadas escolheram os mesmos microtemas: dança, circo, tirinhas, óperas, laboratório, bairros do mundo, técnicos campeões, Kentucky Derby, nau Victoria). Composição (`plano-r7.json`, igual às rodadas 3 a 6): 361 fáceis, 356 médias, 278 difíceis. Por lote: 066 107, 067 93, 068 107, 069 93, 070 106, 071 93, 072 107, 073 93, 074 106, 075 90 (faltaram fáceis e difíceis de Esportes no 075). Resumo em `metricas.json` (`resumo_r7`).
- `faltam.mjs` lê `plano-r7.json` para os lotes 066+ (`n >= 66 ? ['plano-r7.json', 10, n - 65] : n >= 56 ? ...`); `variedade.mjs` ganhou a nota de uso `66 75`. Detector sem mudanças.
- Sonda: `candidatas.mjs --registrar` em todos os lotes (`candidatas/r7-0NN*.txt`, 36 arquivos). Antes de montar cada lote, as respostas foram cruzadas com o checkout da rodada 6, inclusive com o trabalho ainda não commitado (fontes e candidatas), e no fim com `checa-resposta.mjs --lote` contra tudo.
- Válidas que o detector marca como `certa` mas são falso positivo (mesma resposta ou termo, fato diferente: Arnaldo Cezar Coelho árbitro da final de 1982 x bordão "a regra é clara"; Zico técnico do Japão x artilheiro do Flamengo) ficaram com `dup: "suspeita"` e o campo `dup_revisado`. Rodar `duplicadas.mjs --descartar` de novo nesses lotes descartaria essas 35; para conferir, use sem `--descartar`.
- Edições feitas direto no lote (a fonte guarda o original para o `montar-lote.mjs` não duplicar): enunciados de Pixote, Aardman, B-boy, Serra da Estrela, Emmeline Pankhurst, Eurotúnel, Exército de terracota, Bigode, Estame, Pistilo, Colleen Hoover, Cyber Monday, Minas Tênis Clube e manchego (para não entregar a resposta de outra pergunta); alternativas de Asante e Bicho (sem respostas cruzadas).
- Renderam: falsos cognatos e expressões do inglês, francês e italiano no português, saudações e brindes pelo mundo, coquetéis, queijos e vinhos, epônimos, origem de expressões, trabalho, direitos e finanças do dia a dia, economistas e pensadores brasileiros, ONU e Nobel da Paz, "-culturas" e "-logias", dieta dos animais, Excel, Word, e-mail, SQL e Git, máquinas e obra, fotógrafos, escultura, teatro brasileiro, literatura latino-americana e contemporânea, trilhas de cinema, Shakespeare, jogos de tabuleiro modernos, mágica e dublagem, termos de livros e cinema, sedes de eventos esportivos de 2024 em diante.
- Saturaram: hormônios, prêmios de cinema e livros, jogos de cartas clássicos, esportes de inverno, turfe, natação e xadrez, vôlei de praia, tênis brasileiro, dentes, sono, olhos e digestão, pedras preciosas, aparelhos médicos, cinema brasileiro antigo, reprodução animal, IA, nuvem, criptomoedas e telecom, línguas inventadas, guerras menos lembradas. Fáceis de Esportes e de Tecnologia e difíceis de Esportes seguem sendo o gargalo.
- 3 buscas na web, os 3 fatos confirmados (Dimba artilheiro de 2003 com 31 gols, Topper nas camisas da seleção em 1982, Bulgária no euro em 1º de janeiro de 2026). Os demais fatos com número ou data são de conhecimento consolidado; recentes (2020+) têm o ano no enunciado e no máximo "medio".

### Conferência da rodada 7 (conferente-v7, 30/10/2026)

- 995 perguntas dos lotes 066 a 075 (já na branch `expansao`): **972 conferidas** (554 sem mudança, 418 com alguma mudança) e **23 descartadas** (12 por molde repetido, 5 duplicadas do banco ou da rodada 6, 5 espelhos, 1 cadeia). Detalhes por lote em `metricas.json` (`conferencia.lotes`, conferente-v7), resumo em `conferencia.resumo_r7` e amostra de 30 em `amostra-lucas-r7.md` (semente 20261031).
- Por lote (ok / com mudança / descartadas): 066 68/37/2, 067 59/34/0, 068 67/35/5, 069 43/45/5, 070 53/50/3, 071 48/44/1, 072 52/54/1, 073 55/35/3, 074 59/47/0, 075 50/37/3.
- O erro dominante foi o espelho de alternativas (378 fichas): a r7 trabalhou em blocos de molde igual (compositores, fotógrafos, duplas sertanejas, -culturas, -logias, máquinas de obra, símbolos do teclado, fortes, escritores, componentes eletrônicos, jogos de tabuleiro) e quase toda errada era a resposta de outra pergunta do mesmo molde, muitas vezes com as respostas cruzadas (Hans Zimmer x John Williams x Danny Elfman, Cerquilha x Arroba x E comercial, Kombucha x Kefir). As erradas foram trocadas por nomes que não são resposta de nada no banco nem nos lotes (conferido com um script de checagem de resposta). Depois de fechar os lotes, um passe de cruzamento achou 11 trocas que tinham criado novos cruzamentos com o banco; corrigidas na ficha (`correcao`) e na linha do lote (`correcoes_pos`).
- Duplicadas que escaparam do gerador: "Marcelo, Marmelo, Martelo" (já no lote 061), primeira série original da Netflix (3%, lote 063), Shopee laranja (banco:5050), power bank (banco:5224), Luditas (banco:8408); espelhos: relógio a quartzo (063), Hipnose (banco:8507), Hugo Calderano (banco:5024), duplas Henrique e Juliano e Bruno e Marrone (respostas do banco).
- Moldes cortados: duplas sertanejas (15 para 9), alimentação dos animais (8 para 6), palavra latina do símbolo químico (8 para 5), -cultura (13 para 12), símbolos do teclado no lote 069 (7 para 6), obrigado em outras línguas (Gracias). Ficaram, com respostas e fatos diferentes: falsos cognatos do inglês (24), expressões francesas e italianas, fobias, goleiros, Shakespeare, Excel.
- Outros erros: errada defensável (21: Alexandre Barros Filho é o próprio Alex Barros, Teaser também é prévia, Oligarquia é governo dos ricos, Capeto inclui os Bourbon, Los Angeles para a final de 1994 em Pasadena), enunciado que entregava a resposta (Minerva, besouro/Escaravelho, Magritte e o cachimbo, Bayer Leverkusen, Cidade de Deus, Tintim), fato impreciso (Etiene Medeiros foi a primeira campeã mundial em piscina longa, não a primeira campeã mundial; "põe na conta" de Thiago Ventura sem fonte, trocado pela "pose de quebrada"; Pedro Rocha no Brasileiro de 1977 sem confirmação; Forte de Coimbra resistiu dois dias; Cacilda Becker sem fonte para os teatros; final da Copa de 2026 já disputada; centenário da Copa de 2030 decidido em 2023).
- Dificuldade: 26 rebaixadas (Ritmo circadiano, Daguerreótipo, Mise en place, Plié, VBA, CDI, Rotativo, Saturno V, E. coli, Gerontocracia, Malthus, Terroir, Diodo, Membro fantasma, entre outras) e 2 subidas de fácil para médio (marcha atlética, Capitão Haddock). Distribuição final das 972: 343 fáceis, 378 médias, 251 difíceis.
- Suspeitas do detector (incluindo as 35 com `dup_revisado`): 109, das quais 93 mantidas, 6 reescritas e 10 descartadas.
- Checagem na web: 115 buscas (63 durante os lotes e 52 num passe final, incluindo 6 leituras diretas de listas da Wikipedia e da Goal), com 145 perguntas marcadas `verificado_web`. Ficaram **320 conferidas de risco sem `verificado_web`** (dígito, superlativo ou difícil), quase todas de conhecimento consolidado; a lista de ids por lote está em `metricas.json` (`conferencia.resumo_r7.risco_sem_verificado_web`) para a checagem complementar.
- Checagem web complementar (30/10/2026, 200 buscas e leituras): das 320 de risco, 290 confirmadas sem mudança, 8 corrigidas (fato impreciso: Calleri voltou ao São Paulo em 2021, não 2022; o sen foi abolido em 1953; a Zona Franca de Manaus é de 1957 e ganhou o modelo atual em 1967; nunca houve "telefone vermelho", a linha usava teletipo; RAW guarda o sensor sem processamento, mas pode ter compressão; a Cabify saiu do Brasil em 2021; Armando Marques sem fonte para o "estilo teatral", enunciado refeito com Copas de 1966 e 1974 e a Comissão de Arbitragem; errada defensável: Gorgulho, porque o bicudo é um gorgulho, trocada por Serra-pau, conferida com `checa-resposta.mjs`), nenhuma rebaixada nem descartada. As 22 que ficaram sem checar por cota, todas definições de baixo risco deixadas para o fim (Bokeh, Cumeeira, Sapata, Coletânea, Pipe, Luvas, Chave estrangeira, EP, DOM, VMA, Dessecador, Câmara escura, Praça de São Marcos, Jira, Scrum, R, Protoboard, Relé, Novela das nove, Estreia, Pipoca, Pentacampeão), foram checadas numa sessão seguinte com 21 buscas: todas confirmadas, nenhuma errada defensável (`checagem_web_complementar.checagem_final_r7`).

## Rodada 8 (lotes 076 a 085, branch )

- Gerada numa worktree própria (, branch , criada de ), com  +  antes de cada lote (conflitos de  resolvidos sozinhos pelo merge). Nada foi enviado para  nem para a .
- **857 válidas** (status , falta conferir) de 992 escritas; descarte de 13,6% (135). A meta de ~1.000 não foi batida: a partir do lote 081 o rendimento das sondas caiu (40% a 60% de descarte nas listas) e as fáceis de Esportes, História e Ciências quase não passavam no detector. Por lote: 076 100, 077 92, 078 105, 079 92, 080 108, 081 85, 082 98, 083 72, 084 61, 085 44. Composição: 253 fáceis, 347 médias, 257 difíceis (faltaram fáceis); Entretenimento 240, Esportes 151, Tecnologia 119, História 119, Geografia 121, Ciências 107; 33 recentes (ano no texto, no máximo médio). Resumo em  ().
-  e  leem  para os lotes 076+ (o  ainda usava o plano da r3);  ganhou a nota . Novo : lista as erradas que são resposta de outra pergunta do mesmo lote, ou resposta rara (até 3 perguntas) da mesma categoria no banco e nos lotes.
- **Alternativas cruzadas** (aviso do coordenador a partir da lição da conferência r7): os lotes 076 a 082 foram revistos com esse script e cerca de 560 erradas foram trocadas (registro no campo  de cada ficha); 083 a 085 já foram escritos com o filtro. Ficaram só 9 casos de estados, capitais e países usados como erradas (076/077 Aracaju, 080 Paraíba e Sergipe, 081 Camboja, Nevada, Etiópia, Wyoming, São Paulo).
- Sonda:  +  em todas as listas (, 31 arquivos) e  antes de cada commit; enunciados que citavam a resposta de outra pergunta (Pão de Açúcar, Capitais, Xerox PARC, Windows XP, Carmen Miranda, Instituto Butantan, Superliga) foram reescritos direto no lote ou descartados.
- Falsos positivos mantidos com  (8, em 077, 082, 083 e 085): não rode  de novo nesses lotes.
- Renderam: literatura brasileira contemporânea e do século XX, canções da MPB por compositor, TV, rádios, podcasts e revistas brasileiras, reality shows e memes, publicidade e mascotes de marcas, inventores do cotidiano, imprensa e TV antigas, imigrantes, matemática da escola e curiosa, química da cozinha, objetos e profissões antigas, carros antigos, codinomes de sistemas, vírus, Word/Excel, programação e orientação a objetos, internet brasileira dos anos 2000, aeroportos, pontes, parques, cachoeiras, cortes de carne, doces de festa, técnicos e árbitros, futebol feminino, paralímpicos, siglas de entidades esportivas, mascotes olímpicos.
- Saturaram: personagens históricos brasileiros, astronomia básica, corpo humano, termos de celular, estádios e apelidos de clubes brasileiros, lances e dribles, esportes de aventura, gíria de arquibancada, termos de relevo e litoral, Primeira República, ditadura (siglas), apelidos de lutadores, gadgets que fracassaram, rios de capitais do mundo, termos de Idade Média e Grécia/Roma, personagens secundários de animação.
- **17 buscas na web** (bem abaixo da cota; o resto foi conferido de memória): confirmados Príncipe Etíope (Nelson Rodrigues), Valisère 1987, Clube do Bolinha, Primeiros Erros 1985, Bom Dia & Cia 1993, Carequinha e o Circo Bombril, Mayrink Veiga 1965, Ruth Lemos 2004, ace de Marcelo Negrão em 1992, Simca Chambord no Vigilante Rodoviário, Dembélé Bola de Ouro 2025, Kerolin MVP da NWSL 2023, Pâmela Rosa 2019 e 2021, Fernando Reis tri pan-americano, Joelho de Porco e A Cor do Som, Os Donos do Jogo (2025), Andressa Alves no Barcelona; corrigidos antes de entrar: Manoel Tobias é pernambucano, Aparados da Serra não tem o cânion Fortaleza, Casa no Campo não é do trio Sá, Rodrix & Guarabyra (retirada). Para o conferente: priorizar na checagem web as fichas com número, data ou nome pouco conhecido.

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
