# Notas - rodada 1 do banco Esportes (futebol)

Arquivos: `expansao/esportes/lotes/esportes-001.json`, `002` e `003` (100 perguntas cada, status `gerada`, categoria `Esportes`, subtema `futebol`). Mesmo formato do piloto.

## Totais

| Assunto (`obra_tema`) | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| Brasileirão | 22 | 23 | 15 | 60 |
| Clubes do Brasil | 16 | 20 | 9 | 45 |
| Libertadores | 15 | 19 | 11 | 45 |
| Champions + Europa (ligas e copas) | 20 | 19 | 11 | 50 |
| Copa do Mundo | 12 | 17 | 11 | 40 |
| Seleção | 12 | 12 | 6 | 30 |
| Mundial de Clubes | 4 | 7 | 4 | 15 |
| Craques e recordes | 4 | 3 | 8 | 15 |
| **Total** | **105** | **120** | **75** | **300** |

- Champions tem 29 e Europa (ligas, Liga Europa, Conference) tem 21.
- Copa de 2026: 8 perguntas (semifinais, despedida do Neymar, melhor jovem, Bola de Prata, Luva de Ouro, disputa do 3º lugar e o recorde de gols do Mbappé).
- Cada lote tem 35 fáceis, 40 médias e 25 difíceis, com os assuntos misturados. A resposta certa fica 75 vezes em cada posição (A, B, C e D).
- Épocas: de 1976 a 2026, com peso maior em 1992-2026. Fato recente leva ano ou temporada no enunciado.

## Régua usada (a calibrada pelo Lucas)

- **Fácil**: campeão, gol do título, adversário na decisão, eliminação ou vexame muito comentado.
- **Médio**: vice de final, artilheiro, técnico campeão, sede de final, autor de gol que não foi o do título, detalhe de semifinal, prêmio individual.
- **Difícil**: placar exato, número de recorde, posição na tabela, vice de final antiga, autor de gol pouco lembrado, técnico de título que quase ninguém guarda.
- Na dúvida subi um degrau. Três vices de finais antigas (Brasileirão 1984 e 1991, Libertadores 1998) foram de médio para difícil.

## Checagem web

- **313 checagens** nas 300 perguntas, todas na Wikipédia (pt ou en), lendo o texto bruto da página (`action=raw`) com User-Agent genérico de navegador. Cada pergunta só entrou quando o trecho que confirma o fato foi achado e lido. O trecho está em `verificado_web`.
- Fatos de 2025 e 2026 foram todos conferidos na leitura (Copa de 2026, Liga Europa e Conference 2025/26, Serie A e La Liga 2025/26, Bola de Ouro 2025, Mundial de Clubes 2025, Intercontinental 2025, Eliminatórias).
- Correções por causa da leitura:
  - Marta deixou de ser a maior artilheira de Copas "somando homens e mulheres": em 2026 Mbappé (22) e Messi (21) passaram os 17 dela. A pergunta virou "maior artilheira da Copa feminina".
  - Klose perdeu o recorde em 2026. A pergunta dele ficou como "quem virou o recordista em 2014" e entrou uma nova sobre o Mbappé.
  - Vanderlei Luxemburgo divide com Lula o recorde de cinco Brasileirões; o enunciado cita o empate.
  - Jô empatou na artilharia de 2017 com Henrique Dourado; a pergunta virou "craque do Brasileirão".
  - Everton Cebolinha dividiu a artilharia da Copa América 2019 com Guerrero; o enunciado diz isso.
  - Ronaldo em 1998: a página fala que ele foi tirado e depois devolvido à escalação; o enunciado segue a página.
  - Müller em 1993: o "de calcanhar" não estava na página; saiu do enunciado.
- Saíram 10 rascunhos sem trecho confirmando: Flamengo 90 pontos em 2019, Botafogo 5º em 2023, Fred segundo maior artilheiro do Flu, placar agregado da Copa do Brasil 2012, autor do gol do Vasco em 2011, jogos de Messi em Copas (mudou com 2026), posição do Brasil nas Eliminatórias, final olímpica de 1988, estreia do Dorival em Wembley e o técnico do ouro de 2016.

## Cruzamento

Ferramentas: `expansao/scripts/cruzamento.mjs` (entidades, como em `desenhos/scripts/cruzar-v12.mjs`) e `semelhanca.mjs`, adaptados para comparar os rascunhos com as 2.433 de Esportes do v12, as 60 do piloto e entre si. Também busquei por palavra-chave no v12 antes de escrever cada assunto.

- **373 rascunhos, 73 cortes.**
  - **33 por repetir fato do v12 ou do piloto.** Exemplos: gols de Götze e Iniesta nas finais, Materazzi, Richarlison x Sérvia, hat-trick do Mbappé em 2022, Jairzinho em todos os jogos de 1970, Amarildo em 1962, 13 gols de Just Fontaine, Agüero x QPR, Xabi Alonso invicto, Dudek, Sevilla na Liga Europa, 36 gols do Haaland, Leicester 2016, Arne Slot (piloto), Copa das Confederações 2013, Guerrero e Renato Gaúcho nos Mundiais, Bolas de Ouro de Dembélé e Benzema, oito Bolas do Messi (piloto), Marta seis vezes melhor do mundo, cinco gols do Lewandowski, Rogério Ceni goleiro artilheiro, Inter primeiro brasileiro na Sul-Americana, Ronaldo no Corinthians, Mão de Deus (o v12 tem o Gol do Século no mesmo jogo), 190 gols do Dinamite no Brasileirão (o v12 tem ele maior artilheiro) e o Ganso no Santos de 2011.
  - **19 por fato repetido ou entregue entre os próprios rascunhos**: campeão e vice da mesma final (Copa do Brasil 2002, 2006, 2007, 2013, 1993 e 1998, Copa João Havelange, Libertadores 1981, 1995 e 1997), recorde e o número do mesmo recorde (Cafu, Neymar, Shearer, Gerd Müller, Dinamite no Vasco) e pares que se entregavam (Racing 2024 e Recopa 2025, Holanda 2010 e 2014, placar da final da Liga Europa 2025/26).
  - **10 por falta de trecho confirmando** (lista acima).
  - **11 para fechar a distribuição** (excedentes de Brasileirão, Europa, Copa, Seleção e Craques).
- Reescritos para não entregar a resposta de outra pergunta: Endrick (tirei "sobre o Botafogo"), Máfia do Apito (tirei o "11 jogos"), Quintero (tirei "em Madri"), Danilo 2011 (tirei "Peñarol"), Lucas Moura x Ajax (tirei "Tottenham"), Coman (tirei "contra o PSG"), Vinícius x Paraguai, placar da final de 2011 (tirei "Manchester United"), James Rodríguez (tirei "artilheiro da Copa de 2014", fato do v12), Klose e Mbappé, e as duas finais do Atlético de Madrid (tirei "Real Madrid", que o detector marcava como palavra entregue).
- Marcas que sobraram no detector e conferi uma a uma como **falso alarme** (mesma entidade, fato diferente): Felipão, Tite, Cuca, Abel Braga e Muricy em títulos diferentes dos do v12; Suárez no Grêmio; Fred artilheiro de 2014 (o v12 tem 2012); vices de outros anos (Palmeiras, Internacional, Santos, Flamengo); Marcelo voltando ao Fluminense (o v12 tem o clube que o revelou); Fábio recordista mundial (o v12 tem o recorde do Cruzeiro); Cássio contra o Vasco (o v12 tem o Mundial); Emerson Sheik, Lima, Guayaquil, Gabigol 2021 e Luiz Henrique em finais cujo campeão está no v12; Drogba, Terry e Courtois em finais com campeão no v12; Lookman (o v12 tem a Atalanta campeã); placar de 4 a 0 do City sobre o Fluminense (o v12 tem o vice); Aston Villa 2026 (o v12 tem 1982); Mbappé 22 gols (o piloto tem os 10 de 2026).

## Detector de entrega e alternativas

- `node expansao/scripts/entrega.mjs --arquivo expansao/esportes/lotes/esportes-00N.json`: **0 suspeitas** nos três lotes.
- Alternativas cruzadas (adaptação de `alternativas-cruzadas.mjs`): num banco só de futebol, clube e seleção aparecem como resposta de várias perguntas, então o detector marca muito. Conferi o caso que importa, a alternativa errada que é a resposta de outra pergunta **do mesmo ano ou do mesmo evento**, e troquei 16 alternativas (por exemplo, nas duas semifinais da Copa de 2026, nos placares da Copa América 2019, em Everton x Gabriel Jesus, no vice e no último jogo do Brasileirão 2020 e nas copas europeias de 2024/25 e 2025/26).
- Também troquei 5 alternativas que eram autores de outros gols da mesma final (Paulo Nunes em 1996, Zico em 1980, Mandžukić em 2013, David Braz em 2009, Valdano e Brown em 1986), para a pergunta "quem fez o gol do título" não ficar ambígua.

## Pontos para o dono olhar

- A Copa de 2026 entrou com 8 de 40. As outras 7 de 2026 do piloto não contam aqui.
- Copa do Brasil virou boa parte de "Clubes do Brasil" (campeões e vices de várias décadas). Se ficar repetitivo, dá para trocar por ídolos nas próximas rodadas.
- Perguntas que a régua do Lucas pode achar mais fáceis do que eu marquei: vices de finais de Copa do Brasil e de Sul-Americana (marquei médio ou difícil).
