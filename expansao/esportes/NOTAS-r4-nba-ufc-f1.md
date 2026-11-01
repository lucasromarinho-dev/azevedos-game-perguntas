# Notas - rodada 4 do banco Esportes: NBA, UFC e F1

Arquivos (status `gerada`, mesmo formato das rodadas anteriores):
- `lotes/esportes-016.json`: NBA, 110;
- `lotes/esportes-017.json`: NBA, 100;
- `lotes/esportes-018.json`: UFC, 105;
- `lotes/esportes-019.json`: F1, 95.

## Totais

| Esporte | Fácil | Médio | Difícil | Total | Pedido (F/M/D) |
|---|---|---|---|---|---|
| NBA | 13 | 29 | 168 | 210 | 95/25/90 |
| UFC | 9 | 26 | 70 | 105 | 45/10/50 |
| F1 | 6 | 13 | 76 | 95 | 40/10/45 |
| **Total** | **28** | **68** | **314** | **410** | 180/45/185 |

- Posição da resposta certa equilibrada em cada lote (de 23 a 28 por posição).
- **O fácil ficou muito abaixo do pedido.** Os fatos famosos de verdade (Jordan, Kobe, LeBron, Curry, Shaq, Dream Team, Space Jam, Senna, Piquet, Schumacher, Hamilton, Interlagos, Anderson, Minotauro, Poatan, Charles, Amanda, Aldo, McGregor, Khabib) já estão quase todos no v12, nas reaproveitadas ou nos lotes 001-015. As ideias novas de fácil caíam em fato repetido ou entregavam a resposta de outra pergunta (lista abaixo). Para não inventar fácil falso, a sobra foi para o difícil, que também era meta desta rodada.
- O médio passou da cota (68 contra 45) pelo mesmo motivo: vários fatos novos de astro famoso são prêmio, vice ou adversário de cinturão, que a régua chama de médio.

## Do que é feito o difícil
- **NBA:** posição de draft (cerca de 60, inclusive os brasileiros Nenê, Varejão, Leandrinho, Splitter, Caboclo, Raulzinho e Gui Santos), recordes numéricos (55 rebotes do Wilt, 32.292 pontos do Jordan, 15.806 assistências do Stockton, 3.830 tocos do Hakeem, 181 triplos-duplos do Oscar Robertson), vice de finais antigas (1971 a 2014), MVP das finais e da temporada antigos, anos de mudança de franquia.
- **UFC:** número do evento de lutas famosas (UFC 162, 126, 194, 205, 207, 232 etc.), round ou tempo de luta (48 s de Amanda x Ronda, 51 s x Cyborg, 40 s de McGregor x Cerrone, 10º round do Mayweather x McGregor), adversário de estreia no UFC (McGregor, Khabib, Poatan, Charles, Amanda, Jones, Minotauro, Cigano, Lyoto, Shogun, Aldo), primeiros campeões de categoria e despedidas.
- **F1:** GP da primeira vitória de 30 pilotos, vencedor de GP do Brasil não decisivo (1973 a 2023), vitórias e poles de carreira de pilotos já aposentados (nada que a temporada 2026 em aberto possa mudar), campeões dos anos 1960 e 1970.

## Checagem web
- **415 checagens**, todas na API da Wikipédia (en; pt para Minotauro, Hélio Gracie, San Antonio Spurs e Jacarepaguá), com User-Agent genérico de navegador e cache local. Cada pergunta tem pelo menos uma, com o trecho lido em `verificado_web`.
- Cada trecho foi lido. Quando o trecho só citava o nome sem confirmar o fato, o regex foi trocado por um que pega a frase certa, ou a pergunta saiu. Exemplos do que a leitura pegou:
  - páginas de evento do UFC não trazem o resultado: os rounds e tempos foram conferidos na página do lutador;
  - o primeiro "bilionário" de Jordan, segundo a fonte, é "o primeiro jogador da NBA", e não "o primeiro atleta"; o texto foi corrigido e LeBron saiu das alternativas;
  - Minotauro estreou no UFC contra Heath Herring no UFC 73 (o primeiro trecho achado era do Pride 17);
  - "Russell Westbrook 42 triplos-duplos", "Ray Allen 2.973", "Tim Duncan 19,0 pontos", "GPs de Senna e de Barrichello", "pole de Senna no Estoril", "Poatan e o arco e flecha", "Hamilton com a bandeira em 2021", "Khabib The Eagle", "cartel do GSP" e as categorias de peso em kg saíram por falta de trecho que confirmasse.
- Fatos recentes, todos com data no texto: NBA Cup de 2024, Novato do Ano de 2024/25, 4.000 bolas de três do Curry (março de 2025), venda dos Hornets por Jordan (2023), UFC 317 e UFC 320 (2025), TKO Group (2023), processo de Massa (2023), Hamilton com a McLaren de Senna (2024), GP de Las Vegas (2023). Nada da temporada 2026 da F1.

## Cruzamento
- `cruzamento.mjs` e `semelhanca.mjs` contra o v12 inteiro, as reaproveitadas, o piloto, os lotes 001-015 e os próprios lotes 016-019. Todas as marcadas foram lidas.
- **Cortadas por fato repetido:** MVP das finais de 2019, 2021, 2023, 2025, 2011 e 2016; MVP de 2016/17 e 2022/23; Novato do Ano de 2018/19 (v12:3038, 3040, 3055, 3056, 3061, 2915-2917, 2912); "Greek Freak" (v12:2711); títulos do Spurs (= títulos do Duncan); LeBron e os 50 mil pontos (perto do 004:37); Kyrie 1ª escolha (v12:3062); 1997 x Jazz (004:59 e v12:2913); safety car (v12:5394); Flechas de Prata (v12:2489); Copersucar (rodada 3); muay thai (v12:4959); Ronda em "Os Mercenários" (010:37); Lyoto campeão em 2009 (v12:3085); Pantoja no UFC 290 (v12:2963); Glover campeão em 2021 (reaproveitada); campeão de 1997 (010:84).
- **Reescritas para não entregar a resposta de outra pergunta** (o `entrega.mjs` não pega): Gianna sem "helicóptero" (004:11); Air Jordan sem "Nike" (009:0); final de 2020 sem "LeBron e Anthony Davis" (reaproveitada); Rockets de 1995 sem Shaq (Orlando, v12:3063); Spalding sem "Wilson" (009:63); Jerry West sem "logotipo"; filmes de 1996 sem "Space Jam" (v12:2698); seleção de 2008 sem "Redeem Team" (009:47); lutas de Ronda, Amanda, Weidman, Diaz, Chandler, Cigano, Khabib x McGregor e Poatan x Procházka sem o nome do rival que é resposta em outro lote; Werdum sem "México" (v12:3081); Mayweather sem "McGregor" (v12:2714); Jos Verstappen sem "Benetton" (v12:12471); Jacarepaguá sem o nome do autódromo; GP de Las Vegas sem "cassinos" (v12:8176).
- **Falsos alarmes que ficaram:** mesma pessoa, outro fato (draft x MVP, estreia x título), e o molde repetido das minhas perguntas (vários "Em qual posição X foi escolhido no draft", "Em qual GP X venceu pela primeira vez", "Quem venceu o GP do Brasil de ano"). Respostas iguais nesse molde foram reduzidas (saíram Vettel 2010 e 2013, Schumacher 2000, Verstappen 2023, Celtics 1987, Rockets 1981, Duncan 2003, Brasil 1997).

## Detector de entrega
`node expansao/scripts/entrega.mjs --arquivo` deu **0 suspeitas** nos quatro lotes. Na primeira passada foram 5 (NBA 2K, Tune Squad, ginásio dos Lakers, Nina Nunes e a McLaren de Senna), todas reescritas.

## Pontos para o conferente olhar
- **Muitas perguntas no mesmo molde** (draft, primeira vitória, vencedor do GP do Brasil, número do evento do UFC). São difíceis por natureza, mas podem cansar se caírem juntas no jogo.
- **"GP do Brasil de 2019 e 2023"**: oficialmente o de 2023 se chamou GP de São Paulo. O texto usa "GP do Brasil" para não entregar a resposta da pergunta que pede justamente o nome novo.
- **Fáceis com regra ou termo:** UFC 6 (decisão unânime, três juízes, pesagem, sigla MMA, montada, guarda) e F1 1 (champanhe no pódio). Vale ver se cabem na cota de regra.
- **Jordan** é resposta de 3 fáceis no lote 016-017 (camisa do LeBron, primeiro bilionário da NBA, estátua do United Center), no limite da regra.
- **Os ids seguem o `gerarId` do `lib.mjs`.**
