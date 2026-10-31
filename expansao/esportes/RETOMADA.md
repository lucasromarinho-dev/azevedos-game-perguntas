# Esportes: ponto de retomada (parada geral em 31/10/2026, uso a 99%)

## Estado
- Conferidas (status `conferida`): piloto, 001-005 (rodada 1, 545) e 006-010 (rodada 2, 489). Total: 1.034.
- Pendentes, geradas e sem conferência (status `gerada`):
  - 011-013: futebol, 300.
  - 014-015: NBA 100, UFC 50 e F1 50.
  - Os dois conferentes da rodada 3 foram parados antes de gravar qualquer alteração. Os lotes estão intactos.
- Reaproveitadas da v12 (`reaproveitadas-v12.json`, status `reaproveitada`): 1.019 perguntas, já reclassificadas pela régua nova.
  - Futebol 817, NBA 99, UFC 48, F1 55.
  - Por dificuldade: 401 fáceis, 492 médias e 126 difíceis.

## Quanto falta para 3.000
- Conta: 1.034 conferidas + 1.019 reaproveitadas = 2.053. Com a rodada 3 conferida, devem entrar cerca de 490, e o total chega perto de 2.540.
- Faltam cerca de 470, numa rodada 4:
  - futebol: cerca de 80;
  - NBA: cerca de 200;
  - UFC: cerca de 100;
  - F1: cerca de 90.
  - Puxar para as difíceis, porque as reaproveitadas trazem só 126.

## Por onde retomar
1. Conferente novo para 014-015, com atenção especial aos "83 pontos do Bam Adebayo", Paramount/UFC, UFC 313 e 314. Deixar no máximo 8 fáceis de regra de basquete.
2. Conferente novo para 011-013, comparando também com `reaproveitadas-v12.json`.
3. Rodada 4 (cerca de 470).
4. Montagem de `esportes/perguntas.json`:
   - categoria "Esportes";
   - mínimo de 900 perguntas e de 150 por nível (regra do Loter Brain).
   - Avisar o Loter Brain com o caminho local antes de publicar na main.

## Outros pendentes
- v13 do banco principal: em v12:7565, a Marta aparece como "maior artilheira das Copas", o que ficou errado depois de 2026. Trocar para "Copa feminina".
