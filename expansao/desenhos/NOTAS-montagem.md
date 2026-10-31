# Desenhos: conferência do lote 007 e montagem das 1.000

Conferente independente (conferente-desenhos-3), 30/10/2026, branch `expansao`. Nada publicado na `main`.

## Lote desenhos-007 (35)

| Status | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| conferida | 5 | 6 | 15 | 26 |
| reserva | 2 | 3 | 3 | 8 |
| descartada | 1 | 0 | 0 | 1 |

- Checagem própria das 35 pela API das wikis (User-Agent genérico), com o trecho lido: Dublagem Wiki em 24, Fandom pt-br (stevenuniverso, avatar, saintseiya, turmadamonica, irmaodojorel, powerpuff), wiki pt e wiki en. Fica em `verificado_web_conferente`.
- **Samurai Jack:** "Abu" confirmado. A Dublagem Wiki traz na sinopse "Abu (no original, Aku)" e na tabela de elenco "Abu (Aku)", dublado por Mauro Ramos (1ª a 4ª temporada). A ficha do dublador na Anime News Network também lista Abu em Samurai Jack. A pergunta ficou.
- **Descartada:** 007.8, Elemento X das Meninas Superpoderosas. Repete o v12:3417 (o ingrediente que caiu na fórmula, "Substância X"). O detector não marcou; achei na busca por obra no v12.
- **Correção:** 007.0, "Gloria" virou "Glória" (nome no elenco da Dublagem Wiki). Ficou de reserva.
- **Reservas:** Glória e Margo (quota de fáceis; Madagascar e Meu Malvado Favorito já cheios), Steve (o enunciado cita Flint, resposta de outra), Linus (quota), Hyoga (o v12:13802 liga Hyoga ao mestre de Aquário, do gelo), Angelica (a Susie também fala com bebês e adultos, segundo a wiki en), Máquina do Mal (Corrida Maluca já tem 4 no v12), Vó Dita (teto: Turma da Mônica chega a 20).
- Entraram 25 conferidas na escolha inicial (5/5/15, que fecha 192/220/138 com as 525). Na montagem a Batatinha (007.19) também entrou, no lugar da 004.92 (ver abaixo). Resultado: 26 do 007 e 524 dos lotes 001-006.

## Montagem

- `scripts/montar-desenhos.mjs`: 450 da seleção Disney + as `conferida` dos lotes 001-007, nessa ordem. Uma linha, UTF-8 sem BOM, NFC, sem quebra no fim, 5 campos na ordem.
- Total 1.000: 350 fáceis, 400 médias, 250 difíceis. As 550 de fora da Disney: 192/220/138.

## Cruzamento das 1.000 entre si

O detector (`cruzamento.mjs` + `semelhanca.mjs`) achou pares em que o enunciado de uma pergunta dava a resposta de outra do mesmo banco (ex.: "De que país é a dona Muriel" x "Como se chama a dona do Coragem"). Os conferentes anteriores tinham cruzado cada lote contra os outros bancos, mas não as 1.000 juntas.

- **Lotes:** 42 enunciados reescritos para tirar o nome que entregava a outra (registro em `correcao_montagem` em cada ficha). O fato perguntado e a resposta não mudaram. Na 003.29 a errada "Vlad" virou "Bobby", porque Vlad agora é resposta da 007.5.
- **004.92** (as avós do Irmão do Jorel) foi para `reserva`: três outras perguntas citam Vovó Gigi e Vovó Juju no enunciado. A Batatinha entrou no lugar (mesma dificuldade).
- **Disney:** 11 enunciados ajustados só na montagem (mapa `AJUSTES_DISNEY` no script, com o texto de origem conferido). `selecao-disney-450.json` não foi mexido. Exemplos: "capangas de Scar" (Scar é resposta de outra), "rosa encantada" (Uma rosa é resposta de outra), "parte do Olaf" (Olaf é resposta de outra).
- **Marcas que ficaram** (94 internas "certa", 138 "suspeita"): perguntas da mesma obra que só citam um personagem principal sem dar o fato (Elsa, Anna, Woody, Gênio, Esmeralda, Narizinho, Mirabel), respostas iguais em obras diferentes (Penny, Ralph, Caranguejo, cores e bichos) e perguntas cuja resposta, e não o enunciado, lembra outra (Seiya/Pégaso, Shiryu/Dragão). É a mesma régua da seleção Disney.
- **Contra o v12:** 145 "certa" e 93 "suspeita", todas já lidas nas conferências anteriores ou nesta. Fato diferente (Mufasa x Zazu, Gru x Margo, Dick Vigarista x Irmãos Rocha, Camus x Hyoga fora, Time 7 x Kakashi).
