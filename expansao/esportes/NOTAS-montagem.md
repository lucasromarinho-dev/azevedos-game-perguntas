# Esportes: montagem das 3.000 (1/11/2026)

Montador final, branch `expansao`. Nada publicado na `main`.

## Resultado

- Script: `scripts/montar-esportes.mjs`. Saída: `perguntas-esportes.json`.
  - Uma linha, UTF-8 sem BOM, NFC, sem quebra no fim.
  - Os 5 campos na ordem: categoria, dificuldade, pergunta, resposta, alternativas.
- Lotes e `reaproveitadas-v12.json` não foram alterados. Reservas, correções e remoções ficam em três mapas no script (`RESERVAS`, `CORRECOES`, `REMOVIDAS`), cada um conferindo o texto de origem.
- Origem das 3.000:
  - 1.943 conferidas dos lotes, menos 3 removidas;
  - 42 reservas;
  - 1.019 reaproveitadas, menos 1 removida.
- Por esporte: futebol 1.832, NBA 575, UFC 294, F1 299.
- Por dificuldade: 856 fáceis, 1.313 médias e 831 difíceis.
- Dificuldade final: vale `dificuldade_ajuste` quando existe. O campo vem em três formatos: "x->y: motivo", "x: motivo" ou objeto {de, para}. Em todas as fichas, o resultado bateu com o campo `dificuldade`.

## Reservas que entraram (42)

Todas trazem o fato conferido na web pelo conferente (trecho em `verificado_web_conferente`). Ficaram de fora dos lotes só por variedade.

- **NBA, posição no draft (27):**
  - Chris Paul, Haliburton, Paul Pierce, Jamal Murray, Harden, Ja Morant, Raulzinho, Jaylen Brown e Oladipo;
  - Tatum, Pau Gasol, Garnett, Wade, Ray Allen, Chet Holmgren, Scottie Barnes, Siakam e Donovan Mitchell;
  - Embiid, Westbrook, Nash, Bosh, Kevin Love, Trae Young, Booker, Klay Thompson e Jimmy Butler.
- **NBA, 1ª escolha do draft (6):** John Wall, Anthony Edwards, Banchero, Cade Cunningham, Blake Griffin e Karl-Anthony Towns.
- **NBA, outras (5):**
  - Jordan no torneio de enterradas de 1988 (confirmado na wiki en "NBA Slam Dunk Contest");
  - Jordan, 63 pontos contra o Celtics em 1986. O enunciado foi corrigido: "astro dos Bulls" entregava, porque Jordan era o único dos Bulls entre as alternativas;
  - Kobe e a infância na Itália;
  - Iverson, 1ª escolha de 1996;
  - Gobert, 27ª escolha. O enunciado perdeu "o francês", que entregava a 004#73.
- **F1 (3):** primeira vitória de Button (Hungria), Webber (Alemanha) e Ocon (Hungria). O molde "GP da primeira vitória" foi a 23 perguntas, com 5 Hungrias.
- **UFC (1):** 018#60, Cigano perde o cinturão no UFC 155.

Ficaram de fora:
- reservas por nicho ("obscuro", "sem graça");
- reservas por entrega ou fato repetido, como Carmelo (a 014#79 diz que Darko foi a 2ª escolha "à frente de Carmelo"), Kawhi e Dirk (o mesmo draft já está na 016#109 e na 016#96);
- regras básicas acima da cota de 8 (NBA) e de 3 (UFC);
- Magic (já tem 10 perguntas).

## Varredura de fatos que envelheceram

Procurei por "atual", "até hoje", "recorde", "maior", "único", "último", "-campeão", "detém", "ainda", "joga", "defende", "casado", "namora", nomes de estádio e por tudo com 2025 ou 2026 (455 + 60 enunciados lidos). Os casos sensíveis foram conferidos na wiki (API, User-Agent genérico, revisões de 24 a 31/10/2026):

| Pergunta | Achado | Ação |
|---|---|---|
| 004#62, recorde de triplos-duplos | Westbrook 209, Jokić 200 (30/10/2026); vai mudar na temporada | "terminou a temporada 2025/26 como recordista" |
| 014#54, Horford "defende" a seleção dominicana | jogou de 2008 a 2012 | "defendeu" |
| 015#16, Makhachev "campeão do UFC" | título atual pode mudar | "campeão do UFC em duas categorias" |
| piloto#53, 17 finalizações de Charles "até 2026" | 17 confirmado (wiki en e List of UFC records); 2026 não acabou | "até outubro de 2026" |
| 003#23, Klose "maior artilheiro das Copas" (2014) | Mbappé passou em 2026 | "até então" |
| 014#68, Wade "astro do Miami Heat" | aposentado desde 2019 | "ídolo" |

Conferidos e mantidos:
- Gobert com 4 prêmios de Defensor do Ano, empatado com Mutombo e Wallace;
- Curry com 62 pontos como recorde da carreira;
- Kobe com 4 MVPs do All-Star;
- Shearer com 260 gols na Premier League;
- Miocic ainda bombeiro;
- Verstappen e Kelly Piquet juntos desde 2020;
- Raphinha no Barcelona;
- Calleri ainda o 2º estrangeiro, atrás de Pedro Rocha;
- Corinthians com 31 Paulistas (o Palmeiras ganhou em 2026);
- Fred com 37 gols na Copa do Brasil;
- Lamine Yamal com 3 Troféus Kopa (cerimônia de 2026 feita);
- Spa ainda no calendário de 2026;
- Colo-Colo ainda o único chileno campeão da Libertadores (a final de 2026 é Palmeiras x Estudiantes);
- 30 times na NBA;
- Nubank Parque, Du Plessis e Merab "ex-campeões" e Volkanovski já estavam certos.

## Cruzamento final

Usei `cruzamento.mjs` e `semelhanca.mjs` nas 3.000 entre si e contra as 1.000 de `perguntas-desenhos.json`. Na primeira passada saíram 1.461 pares. Os 800 "certa" e os 661 "suspeita" foram todos lidos.

- **Desenhos:** dois fatos repetidos, Monstars e Lola (Space Jam). As duas do Esportes (009#45 e 016#0) foram tiradas. As outras marcas contra Desenhos são respostas iguais com fatos diferentes (Vermelho, Polvo, Leão, Baleia, Urso).
- **Removidas por entrega (2):**
  - piloto#49: Poatan recupera o cinturão "de qual categoria", que três enunciados dizem ser o dos meio-pesados;
  - v12:2791: "Cigano foi campeão dos pesados", que três enunciados entregam.
- **72 enunciados reescritos no total (contando as passadas seguintes),** sem mudar o fato nem a resposta. O motivo de cada um está em comentário no script. Exemplos:
  - "com Felipão e o goleiro Marcos" (Marcos é resposta de outra);
  - "Milão" e "Atlético de Madrid" na final de 2016;
  - "suportes de aço" (Aço é resposta de outra);
  - "Nike" nas perguntas da linha Jordan;
  - "em 2003" nas perguntas do LeBron, que entregava a 1ª escolha de 2003;
  - "Tottenham", "Turim", "Abu Dhabi", "Fortaleza" e "Gana" em textos de outras perguntas.
  - A 003#7 (Grêmio rebaixado em 2021) perdeu "pela terceira vez", que somado à 020#120 entregava.
- **Segunda e terceira passadas:** os pares novos que as reescritas criaram foram lidos. Saíram mais 6 ajustes (já contados nos 72), por exemplo "levando o Tottenham à final" e "com Dorival Júnior", porque Tottenham e Dorival são respostas de outras.
- **Detector `entrega.mjs`:** marcou a v12 do Clássico dos Clássicos ("clássico" no texto casava com a resposta). Virou "confronto". Agora dá 0 suspeitas.

Marcas que ficaram (1.727 registros) e por que ficaram:

1. **Mesma resposta, fatos diferentes.** É a maior parte: clubes campeões em anos diferentes (Palmeiras, Flamengo, Santos), placares iguais (2 a 0, 3 a 1), posições de draft iguais (3ª, 27ª), "Hungria" no molde da primeira vitória e o mesmo astro em fatos diferentes (Jordan, LeBron, Shaq, Cuca).
2. **Nome de jogador citado sem o fato pedido.** As perguntas de draft citam Westbrook, Bosh, Gobert, Wade e Booker, que são respostas de outras perguntas. O texto não diz o recorde, o apelido nem o time. É a régua dos lotes (já existiam Kobe, Curry, Jordan e Jokić no mesmo molde).
3. **Finais em anos seguidos com os mesmos times** (Lakers x Celtics em 1984 e 1985; Lakers x Pistons em 1988 e 1989) e revanches (Heat x Spurs em 2013 e 2014). São fatos diferentes, de rivalidades famosas.
4. **Pistas que levam ao erro,** e não à resposta:
   - Massa venceu em casa em 2006, mas a primeira vitória foi na Turquia;
   - Webber venceu o GP do Brasil de 2009, mas a primeira vitória foi na Alemanha.
5. **Números que coincidem com o texto de outra** (70 pontos de Booker e de Embiid, 61 de Shaq e de Baylor, 1977 de Lauda e da lista de Paisley). Não dão o fato pedido.
6. **Clusters de draft:**
   - 2003: LeBron 1ª, Darko 2ª, Bosh 4ª e Wade 5ª;
   - 1996: Iverson 1ª, Ray Allen 5ª, Kobe 13ª e Nash 15ª;
   - 2022: Banchero 1ª e Chet 2ª.
   - Uma pergunta só tira a alternativa "1ª" da outra; não entrega a resposta.

## Validações

- `validar-disney.mts` com categoria "Esportes": 3.000 válidas e 0 descartadas, tanto no `montarBanco` real quanto na cópia. 0 enunciados duplicados.
- 0 duplicados sem contar caixa e acento. Todas têm 4 alternativas distintas, com a resposta entre elas, e os 5 campos na ordem.
- `entrega.mjs --arquivo`: 0 suspeitas.
- Regra do Loter Brain (mínimo de 900 e de 150 por nível): ok.
- Sem BOM, uma linha, 711.322 bytes. sha256 `f77dd97608ca97e2fcf1870bc1552b469d0927bea652469416f6150371b95581`.
