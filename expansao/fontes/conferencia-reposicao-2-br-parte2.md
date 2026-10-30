# Conferência da reposição 2 (pop BR), parte 2: lotes 118 e 119

Conferente independente: `conferente-reposicao-2-br-parte2` (30/10/2026). Lotes 115 a 117 ficam com o outro conferente. Nada publicado; `main`, `perguntas.json`, `README.md`, `metricas.json` e `expansao/correcoes/` não foram tocados.

## Resultado

178 `gerada` conferidas (87 no 118, 91 no 119):

| Status | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| `conferida` | 3 | 95 | 68 | **166** |
| `reserva` | 0 | 2 | 10 | **12** |
| `descartada` | 0 | 0 | 0 | **0** |

Os números de médio já contam os 7 ajustes de dificuldade (difícil -> médio). Toda ficha tem `conferido_por` e `verificado_web_conferente`; `dup_revisado` foi mantido.

## Checagem web

- **198 páginas da Wikipédia** lidas pelo texto bruto (API MediaWiki, até 20 títulos por chamada, com redirecionamento, User-Agent genérico de navegador), em **11 chamadas** (log em `fontes/conferencia-reposicao-2-br-parte2-chamadas.log`). Para cada pergunta procurei a resposta junto de um termo do enunciado no mesmo trecho e li o trecho. Sempre que deu, usei uma página diferente da do gerador (verbete do ator, da música ou do programa em vez do da novela).
- **21 WebSearch** para os memes, bordões, slogans e fatos que a Wikipédia não traz: jingle do frio (Pernambucanas), Gelol, Choquei (duas buscas), Philco, "Você está demitido", Muricy, Perfil, Pião da Casa Própria, Shaolin do Sertão (padeiro), Bettina, Vampeta, Mico, Zap, Neymar challenge, Falcon.
- **219 checagens próprias**; 178 de 178 com `verificado_web_conferente` (fonte curta).

## Correções (36 fichas com `correcao`)

Fato errado ou impreciso:
- **62758dcdf0** Toma Lá, Dá Cá: Arlete Salles vivia Copélia; a síndica Dona Álvara era de **Stella Miranda**. Enunciado corrigido.
- **98af515659** Philco: o slogan é "Tem coisas que só a Philco faz **pra** você" (não "por você").
- **d1b9f951a1** "Sorte Grande" saiu em agosto de 2003, então não foi "sucesso do carnaval de 2003"; virou "lançada em 2003".
- **fa40fc6c3b** Choquei: o "URGENTE" no começo dos posts não foi confirmado; refeita com o emoji de sirene (en.wikipedia); errada "Hugo Gloss" (perfil real de fofoca) trocada por "Fofoquei".
- **51f276ef4b** Minha Mãe É uma Peça 3: "mais de 11 milhões" não confirmado; refeita com "ultrapassou o público de Tropa de Elite 2" (verbete, O Globo).
- **e1c30afefa** Saulo na Banda Eva: "mais de dez anos" virou os onze anos do verbete.

Errada defensável trocada:
- **0854f42fab** "A Praça da Alegria" era o programa original de Manoel de Nóbrega -> "Escolinha do Barulho".
- **20599c6253** "Disney Cruj" era o mesmo Disney Club do SBT renomeado em 2001 -> "Disney Kids".
- **bdcdaaf7ee** "Nenê" estava no enunciado como a mãe -> "Lurdinha".

Enunciado que citava a resposta de outra pergunta (banco ou lotes) junto com a pista dela (28, um deles o do Saulo já citado acima, todos reescritos e conferidos de novo com `checa-resposta.mjs`): Senna e Xuxa ("Além de Pelé", agora "Qual piloto brasileiro de F1", errada Zico -> Rubens Barrichello), Os Caras de Pau, Tino e Danielle Winits (Leandro Hassum), Paulinho Gogó (Carlos Alberto), Ultraje no The Noite (Danilo Gentili), Saulo (Banda Eva com Ivete), Luana (O Rei do Gado com Bruno Mezenga), Mussum, o Filmis ("cacildis"; agora Aílton Graça), Péricles (Exaltasamba), Nina e Agatha (Avenida Brasil com Carminha), César, Paloma e Pilar (Amor à Vida com Félix), Dona Hermínia (Paulo Gustavo), Zé Vampir e Dona Morte (Penadinho), Renata Vasconcellos (Bonner), Minha Vida em Marte (Monica Martelli), Glamurosa (funk melody), Parafernalha (Porta dos Fundos), O Palhaço (Selton Mello), Vai que Cola (pensão), Que Horas Ela Volta? (empregada Val), No Limite (2000), Ídolos (SBT) e Tropa de Elite 2 (milícias). O texto anterior ficou no campo `correcao`.

## Dificuldade (7, difícil -> médio)

Drauzio e Carandiru, Gisele e DiCaprio, Senna e Xuxa, Gisele na abertura da Rio 2016, Giovanna Ewbank e Bruno Gagliasso, Fernanda Montenegro como a Compadecida, "Gol da Alemanha" (todo mundo sabe).

## Reserva (12)

Pela régua do adulto comum, ou fato não confirmado:
- 118 **Allejo** (nicho gamer dos anos 1990), **Pião da Casa Própria** (quadro antigo), **Milena** (personagem recente pouco conhecida; e "família de veterinários" é impreciso, só a mãe é veterinária), **Ciência Todo Dia** e **Inteligência Ltda.** (apresentadores de nicho).
- 119 **Pelé: O Nascimento de uma Lenda** (filme pouco visto), **Giulia Benite** (atriz mirim), **Falcon** (antigo, e barba e cicatriz não confirmadas), **Camisa 10 da Gávea** (canção pouco conhecida; Jorge Ben Jor já é resposta de outra do lote), **Perfil, 20 dicas** (decoreba de número e cita a resposta de banco:8259 com a pista), **Márvio Lúcio** (o público conhece o Carioca, não o nome real), **Milhem Cortaz** (ator coadjuvante).

## Confirmados (o gerador estava certo)

Prior no paredão do Guinness (1.532.944.337 votos), Celeste, Dudu, faca na caveira do Bope, Grande Rio 2022, Inshallah (verbete Insha'Allah cita O Clone), Allejo, Fedora, Fortunato (André Mattos), Pangaré, Professor Tibúrcio (verbete Marcelo Tas), Senor Abravanel, Lequetreque, Paredão falso (BBB 22), "É uma Partida de Futebol" no disco oficial da Copa de 1998, "Hoje é dia de rock, bebê" (verbete Christiane Torloni), Carreta Furacão, Milhem Cortaz como Fábio, Encontros e Despedidas na abertura de Senhora do Destino, Paolla e Diogo Nogueira (namoro de 2021 a 2025), Bettina (Empiricus, 2019), Vampeta na rampa do Planalto, Muricy, Gelol, jingle do frio.

## Checagens (todas sem `--descartar`)

- `entrega.mjs --lotes 118-119`: **0 suspeitas** (também depois das reescritas).
- `duplicadas.mjs` nos dois lotes: 118 com 14 `certa` e 20 `suspeita`, 119 com 17 `certa` e 22 `suspeita`; todas já tinham `dup_revisado`, e as `certa` foram relidas uma a uma com `ver-dups.mjs` (fato diferente). Dessa leitura saíram as reescritas acima. **Não rode `--descartar` nesses lotes.**
- `alternativas.mjs` nos dois lotes juntos: 0 erradas que são resposta de outra do lote; só a `RARA` "Formiga" (jogadora, já conhecida do gerador). As erradas novas (Lurdinha, Escolinha do Barulho, Disney Kids, Fofoquei, Rubens Barrichello) não acendem nada.
- `checa-resposta.mjs --lote`: as citações restantes são nomes sem a pista da outra pergunta (Félix goleiro, Selton Mello, Ivete Sangalo, Tropa de Elite 2 sem milícia).
