# Notas - piloto do banco especial Esportes

Arquivo: `expansao/esportes/lotes/esportes-piloto.json` (60 perguntas, status `gerada`, categoria `Esportes`).

## Totais

| Esporte | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| Futebol | 12 | 12 | 12 | 36 |
| NBA | 4 | 4 | 4 | 12 |
| UFC | 2 | 2 | 2 | 6 |
| Fórmula 1 | 2 | 2 | 2 | 6 |
| **Total** | **20** | **20** | **20** | **60** |

Futebol por `obra_tema`: Copa do Mundo 8, Champions 7, Europa 5, Libertadores 5, Mundial de Clubes 4, Clubes do Brasil 3, Seleção 3, Sul-Americana 1.

## Régua usada

- **fácil** (equivale ao médio do banco principal): campeão ou fato de grande repercussão dos últimos anos, que o torcedor comum viu no noticiário. Ex.: campeã da Copa de 2026, quem eliminou o Brasil, para onde Neymar ou Gabigol foram, troca de Dončić.
- **médio**: autor de gol de final, artilheiro de competição, técnico campeão, sede de final, MVP de finais, primeira escolha de draft recente. Pede ter visto o jogo ou acompanhado a temporada.
- **difícil**: placar exato, número de recorde, autor do gol do time derrotado, expulso ou pênalti perdido em jogo decisivo, round exato de nocaute, posição de largada.
- Cada ficha tem o motivo em `motivo_dificuldade`.
- Todo fato recente leva o ano ou a temporada no enunciado.

## Checagem web

- 60 de 60 checadas na Wikipédia (en), lendo o texto bruto da página com User-Agent genérico de navegador. O trecho lido e a página estão em `verificado_web`.
- Cuidado que fez diferença: vários fatos de 2025 e 2026 só foram confirmados na leitura (Copa de 2026 com Espanha campeã e Brasil eliminado pela Noruega; Knicks campeões em 2026; PSG bicampeão da Champions em 2025/26; Arsenal campeão inglês em 2025/26; Cadillac estreante em 2026).
- Ajustes por causa da checagem: Charles do Bronx tem **17** finalizações no UFC (não 16, que eu tinha de memória); a artilharia do Brasileirão 2024 teve empate com 15 gols, então a pergunta saiu; Flamengo 2019 com 90 pontos não teve trecho explícito na página, então saiu.

## Cruzamento com o banco principal (v12, 2.433 de Esportes)

Usei o cruzamento de entidades (`scripts/cruzamento.mjs`, como em `desenhos/scripts/cruzar-v12.mjs`) e a semelhança (`scripts/semelhanca.mjs`), mais uma busca por palavras-chave nas 2.433 de Esportes.

- **Primeira rodada: 67 rascunhos, 27 cortados por repetir fato do v12.** Exemplos: gols do Gabigol em 2019, Fluminense campeão em 2023, Breno Lopes, Croácia em 2022, Botafogo campeão brasileiro e da Libertadores em 2024 (sobre o Atlético-MG), PSG campeão em 2025, Ancelotti, Chelsea no Mundial, Jorge Jesus, John Kennedy, Danilo em 2025, Deyverson, Paulinho e Kaio Jorge artilheiros, Rodri na Bola de Ouro 2024, Espanha na Euro, Flamengo campeão em 2025, Copa do Brasil 2024 e Copa América 2024 (campeões), Celtics e Thunder campeões, Jaylen Brown, Poatan, Topuria x Volkanovski, Hamilton na Ferrari, Bortoleto na Sauber.
- Também cortei por proximidade: número de gols do Kaio Jorge (o v12 já tem ele artilheiro), gols de Cristiano na Champions (o v12 tem ele maior artilheiro), MVP de 2024/25 do Shai (o v12 tem ele MVP das finais do mesmo ano) e a dupla da Ferrari em 2025 (enunciado entregava a resposta de uma pergunta do v12).
- Marcas que sobraram no detector e que conferi uma a uma como **falso alarme** (fato diferente, só a entidade em comum): Vinícius x Liverpool (o v12 fala do Bale em 2018), Neymar no Santos em 2025 (o v12 fala do clube que o revelou), PSG campeão em 2025/26 (o v12 fala do título de 2025), Gabigol no Cruzeiro, Flamengo x Chelsea, Rodri melhor da Copa 2026, Carvajal e Vinícius, Buenos Aires como sede, João Pedro x Fluminense, Advíncula, Knicks, Dončić nos Lakers, França em Paris 2024, Jon Jones, Pereira em 2025, Makhachev, Topuria x Charles, round do Pereira x Adesanya, Norris, McLaren, recorde do Verstappen, largada em Interlagos.
- Dentro do piloto: nenhuma repetição de fato. Troquei o enunciado do gol do Havertz para não citar o PSG (entregava a outra pergunta da mesma final).

## Detector de entrega

`node expansao/scripts/entrega.mjs --arquivo expansao/esportes/lotes/esportes-piloto.json`: 60 perguntas, **0 suspeitas**.

## Pontos para o dono olhar

- A Copa de 2026 tem 7 das 36 de futebol. É o assunto mais quente do ano, mas dá para diluir na produção.
- Perguntas numéricas difíceis (placar, recorde, round) usam alternativas próximas de propósito. Vale ver na amostra se isso ficou difícil demais ou "chute".
- Amostra cega: `amostra-lucas-esportes-cega.md` (10 perguntas: 3 fáceis, 4 médias e 3 difíceis, de futebol, NBA, UFC e F1). Gabarito em `amostra-lucas-esportes-gabarito.md`.
