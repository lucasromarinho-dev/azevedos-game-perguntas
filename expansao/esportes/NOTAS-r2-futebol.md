# Notas - rodada 2 do banco Esportes (futebol)

Arquivos: `expansao/esportes/lotes/esportes-006.json`, `007` e `008` (100 perguntas cada, status `gerada`, categoria `Esportes`, subtema `futebol`). Mesmo formato dos lotes 001-003.

## Totais

| Assunto (`obra_tema`) | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| Brasileirão | 16 | 19 | 20 | 55 |
| Clubes do Brasil | 14 | 22 | 9 | 45 |
| Copa do Brasil | 6 | 6 | 13 | 25 |
| Libertadores e Sul-Americana | 10 | 20 | 15 | 45 |
| Champions e ligas europeias | 15 | 20 | 15 | 50 |
| Copa do Mundo | 12 | 11 | 7 | 30 |
| Seleção, Copa América e Eliminatórias | 8 | 12 | 10 | 30 |
| Craques, ídolos e Bola de Ouro | 5 | 9 | 6 | 20 |
| **Total** | **86** | **119** | **95** | **300** |

- Cada lote tem 28 ou 29 fáceis, 39 ou 40 médias e 31 ou 32 difíceis, com os assuntos misturados. A resposta certa fica 75 vezes em cada posição (A, B, C e D).
- Fáceis ficaram em 86, abaixo das 95 pedidas. Os momentos marcantes (campeão, gol do título, adversário da final) de quase todas as edições já estão no v12, no piloto ou nos lotes 001-003. Preferi não forçar fácil repetida nem rebaixar média para fácil sem motivo.
- Copa do Mundo de 2026: nenhuma pergunta nesta rodada (o piloto e a r1 já têm 15). Outros 40 enunciados citam 2025 ou 2026 (Bola de Ouro 2026, Champions 2025/26, ligas 2025/26, estaduais de 2025 e 2026, Série B 2025, semifinais da Libertadores e da Sul-Americana 2026, Recopa e Supercopa 2026, Intercontinental 2025, Eliminatórias 2025).
- Épocas: de 1938 a 2026.

## Régua usada

A do `calibracao-lucas.md`, com a lição da r1 (o conferente rebaixou 20 difíceis):

- **Fácil**: campeão, gol do título, adversário da decisão, eliminação muito comentada, transferência ou prêmio que todo mundo viu.
- **Médio**: vice de final antiga ou estrangeira, artilheiro, técnico campeão, prêmio individual, semifinal, sede de final, autor de gol que decidiu jogo do título em pontos corridos.
- **Difícil** só com o que a galera não guarda: número exato (pontos, gols, público, placar de jogo não decisivo, minuto), terceiro colocado, autor de gol que não decidiu, artilheiro antigo ou de torneio menos visto, técnico de título antigo, recorde numérico.
- Exemplos de difícil: 100 pontos do campeão de 2003, 90 pontos de 2019 (28 vitórias e 6 empates), 79 do campeão de 2024, 23 jogos invicto do Palmeiras em 2018, público de 155.523 em 1983 e 194.603 em 1963, 6 a 2 da Taça Brasil de 1966, 3º lugar no Brasileirão de 2019, 2023 e 2025, 3º lugar da Copa de 1974, 1978, 1998 e 2018, gols de Pedro Rocha, Gustavo Gómez, Eduardo Vargas, Nestor, Plata e Cícero em finais, Fernandão e Tinga em 2006, Riedle, Boli, Rakitić, Campbell, Rooney e Mandžukić em finais de Champions.

## Checagem web

- **315 checagens** registradas em `verificado_web`, todas com o trecho lido (texto bruto da página, `action=raw`, User-Agent genérico de navegador, nunca e-mail). 166 na Wikipédia em português e 149 em inglês. Toda pergunta tem pelo menos uma, e 15 têm duas.
- Não usei ogol nem Transfermarkt: a Wikipédia pt/en teve o trecho de todos os fatos. Quando a fonte tinha o placar só em tabela (vitórias e empates), o trecho mostra a linha da tabela (ex.: `win_FLA=28|draw_FLA=6` = 90 pontos).
- Fatos de 2025 e 2026 só entraram com página lida: Bola de Ouro 2026 (Kane 1º, Mbappé 2º, Yamal com o 3º Kopa), Champions 2025/26 (Mbappé artilheiro com 15, Kvaratskhelia melhor jogador), Italiano e Português 2025/26, Supercopa 2026 (Corinthians 2 x 0 Flamengo), Recopa 2026 (Lanús), semifinais da Libertadores 2026 (Palmeiras e Estudiantes) e da Sul-Americana 2026 (final Atlético-MG x Boca em Barranquilla, em 21/11), Paulistão, Carioca, Mineiro e Gauchão de 2025 e 2026, Série B 2025, 3º e rebaixados do Brasileirão 2025, Copa do Nordeste 2024 e 2025, Intercontinental 2025 (Cruz Azul e Pyramids), Xabi Alonso no Real Madrid.
- **Correções que a leitura obrigou:**
  - Bola de Ouro da Placar de 2014 foi de **Ricardo Goulart**, não de Éverton Ribeiro (ele ganhou o prêmio da CBF em 2013 e 2014). Virou duas perguntas, uma de cada prêmio.
  - Bola de Ouro da Placar de 2008 foi de **Rogério Ceni**, não de Hernanes.
  - Artilharia do Mundial de 2000 foi dividida (Romário e Anelka, 3 gols). Pergunta cortada depois por repetir resposta.
  - Gabigol fez **dois** gols na final da Copa do Brasil 2024, não três (Plata fez o da volta).
  - O gol de cabeça do Messi em 2009 foi o segundo, não o da vitória. O enunciado mudou.
  - Taça Brasil 1966: a fonte diz "em São Paulo", não Pacaembu. 1978: a fonte confirma o 3º lugar, não o placar. Ambos saíram do enunciado.
  - Túlio x Argentina em 1995: a fonte não fala do braço. A pergunta virou "gol de empate aos 81 minutos".
  - Barcelona 2009: a fonte diz "seis títulos num ano civil", e não "todos os que disputou".
  - Saíram do enunciado detalhes que a fonte não trazia: "gol iluminado" (1975), "Mineirão" (virou "Belo Horizonte" em 2014 e 2023), "ano de estreia" (Carille).
- Saíram por falta de trecho: 7 vitórias do Brasil em 2002, 140 gols do CR7 na Champions, 4 a 0 da final do Paulistão 2023, São Paulo x River em 2005 e posição do Brasil nas Eliminatórias para 2026.

## Cruzamento

Ferramentas: `expansao/scripts/cruzamento.mjs` (procurarE, entidades nos dois sentidos) contra as 2.433 de Esportes do v12, o piloto, os lotes 001-005 (sem as descartadas) e os meus próprios rascunhos, rodado seis vezes até o fim. Também busquei por palavra-chave antes de cada assunto.

- **Cerca de 385 rascunhos, 85 cortes.**
  - **45 por repetir fato do v12, do piloto ou da r1**, quase todos achados pelo detector. Exemplos: Alex em 2003, 20 clubes desde 2006, Ronaldo dono do Cruzeiro, Fábio recordista do Cruzeiro, tragédia da Chapecoense, Robben 2013, Inzaghi 2007, voleio do Zidane, 4 a 0 do Liverpool no Barcelona, City quatro vezes seguidas, Kluivert, Mijatović, Koeman, Milan 4 x 0 Barcelona, Bayern 11 seguidos, Gento, Adriano em 2004, Uruguai na Copa América 2024, México em Londres 2012, Neymar passando Pelé, 4 a 1 da Argentina em 2025, Ruidíaz, Confederações de 1997, 2005 e 2009, Paraguai em 2011, Camarões em Sydney, Cafu em três finais, Taffarel, Dunga e Parreira no tetra, transferências de Messi, CR7, Neymar, Thiago Silva, Coutinho, Gabigol e Casemiro, Arthur Elias, Flamengo x Grêmio em 2009 (a 002 tem o Ronaldo Angelim).
  - **10 por repetição ou entrega entre os meus**: dois jogos da Taça Brasil 1966, Hernane artilheiro e autor de gol na mesma final, Reinaldo duas vezes, Romário em excesso, Croácia 3ª em 2022 e 1998, Carioca 2023 x 2026 (pergunta invertida), duas semifinais com Uruguai, Messi citado em quatro enunciados, Boca x Vasco e a final da Sul-Americana 2026.
  - **Cerca de 15 para fechar a distribuição** (excedentes de Brasileirão, Europa e Copa) e **15 antes da montagem** (sem trecho, formato ruim ou resposta repetida).
- **Enunciados reescritos para não entregar outra pergunta** (exemplos): Luan 2017 sem "Grêmio" (o v12 tem o Grêmio campeão), Córdoba sem "São Paulo" (vice da 001), Tijuana sem "Victor" (resposta do v12), "clássico" no lugar de "Superclássico" (resposta do v12), Milito sem "Inter" e "Bayern" (001), Rooney e o Estádio Olímpico de 2009 sem "Manchester United" (001), Doué sem "PSG" e sem "5 a 0" (v12 e piloto), Rakitić sem "Juventus" (001), Riedle sem "Dortmund" (v12), Pichichi sem a palavra "Pichichi" (resposta do v12), Kane sem "Bayern" (002), Ferguson sem o nome (v12), Vitinha sem "Dembélé" (v12), 3º lugar de 2024 sem "Palmeiras" (vice do v12), Júlio Baptista e Maracaibo sem "Argentina" (v12), Ponte Preta sem "Lanús" (resposta da Recopa 2026), Racing, Goiás e Adrián Martínez sem o clube (respostas de outras minhas).
- Marcas que sobraram e conferi como **falso alarme** (mesma resposta, fato diferente): Rogério Ceni técnico x goleiro artilheiro, Deyverson 2018 x Libertadores 2021, Renato Gaúcho na Copa do Brasil 2016 x Libertadores 2017, Calleri artilheiro de 2016 x Copa do Brasil 2023, Washington 2001 x 2004, Gabigol na Copa do Brasil 2024 x Libertadores 2019, Pedro na final de 2022 x artilheiro da Libertadores, Cuca expulso x campeão de 2013, Vélez na Libertadores x no Mundial de 1994, Estudiantes 2026 x tri de 1968-70, Maldini gol rápido x camisa 3, Neuer Luva de Ouro x goleiro-líbero, Alisson Yashin x Copa América 2019, Lewandowski The Best x 41 gols, Haaland 2º em 2023 x 36 gols, Marta melhor da Copa América 2025 x seis vezes melhor do mundo, Zico Bola de Prata x maior artilheiro.

## Detector de entrega e alternativas

- `node expansao/scripts/entrega.mjs --arquivo expansao/esportes/lotes/esportes-00N.json`: **0 suspeitas** nos três lotes. Antes disso, troquei a resposta do Brasil x Argentina de 2021 ("argentinos" estava no enunciado) e o enunciado do Mineiro 2025 ("Mineiro" no enunciado e na resposta).
- Alternativas: troquei as que eram autores de outro gol do mesmo jogo, para não deixar a pergunta ambígua: Plata (final da Copa do Brasil 2024), Luan (final da Libertadores 2017), Salah (final da Champions 2019) e Goulart (pergunta do prêmio da CBF de 2014).
- Validador do jogo (`motivoInvalida`): 0 inválidas. Ids únicos, sem colisão com piloto e 001-005. Sem travessão longo nem meia-risca em nenhum campo (os placares dos trechos usam hífen).

## Para o dono olhar

- Fáceis em 86. Se a conferência subir médias para fácil, o candidato natural são os vices de finais recentes (Novorizontino 2026, América-MG 2025, Ponte Preta 2013, Goiás 2010).
- Pares de mesmo assunto que não se entregam e deixei: 3º lugar no Brasileirão em três anos, pontos do Brasil nas Eliminatórias de 2018 e 2022, 3º lugar da Copa em 1974 e 1978, pódio da Bola de Ouro 2024 (2º e 3º), Pelé 12 gols em Copas e 77 pela Seleção, Paulistão de 1993 e 2025 com o Corinthians como resposta.
- O piloto cita "Croácia" nas quartas de 2022 e eu pergunto quem a Argentina goleou na semifinal de 2022 (Croácia). Não entrega o fato, mas ajuda.
- Sul-Americana 2026: a final ainda não foi jogada (21/11). As perguntas falam de "está na final" e "está marcada". Depois da final, dá para trocar por "quem foi campeão".
