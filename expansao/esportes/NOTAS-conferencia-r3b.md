# Esportes - conferência r3b (lotes 014 e 015)

Conferente independente, que não escreveu as perguntas. As 200 perguntas `gerada` foram lidas uma a uma:
- `esportes-014.json`: 100 de NBA;
- `esportes-015.json`: 50 de UFC e 50 de F1.

Cada pergunta ganhou `status`, `verificado_web_conferente` (fonte e trecho lido) e `conferido_por: conferente-esportes-r3b`. Quando foi o caso, ganhou também `correcao`, `dificuldade_ajuste` (direção e motivo) e `motivo` (descarte ou reserva). O `id` não foi alterado nas reescritas.

## Resultado

| Esporte | Status | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|---|
| NBA | conferida | 17 | 50 | 20 | 87 |
| NBA | reserva | 12 | 0 | 0 | 12 |
| NBA | descartada | 1 | 0 | 0 | 1 |
| UFC | conferida | 12 | 23 | 13 | 48 |
| UFC | descartada | 2 | 0 | 0 | 2 |
| F1 | conferida | 16 | 22 | 12 | 50 |
| **Total conferidas** | | **45** | **95** | **45** | **185** |

**185 conferidas, 3 descartadas, 12 reservas.** A dificuldade da tabela já é a ajustada.

Posição da resposta certa nas conferidas: NBA 22/21/19/25; UFC 14/12/9/13; F1 9/13/16/12.

## Checagem web própria

- **250 checagens** anotadas, todas com o trecho lido. Cada conferida tem pelo menos uma.
- **Fontes:** o gerador usou a Wikipédia en. Aqui a base foi a Wikipédia es e pt (verbetes de jogadores, times, temporadas da F1), mais UFC.com (cartel dos atletas e páginas dos eventos), NBA.com, NBC Sports e Fox (notícias de 2025 e 2026). A Wikipédia en entrou quando as outras não traziam o fato, quase sempre em verbete diferente do gerador (ex.: final de 2008 para o Pierce, UFC 147 para os campeões do TUF Brasil, ficha do FW14 para a suspensão ativa).
- User-Agent genérico de navegador. A API da Wikipédia limitou o acesso no começo; daí em diante as páginas foram lidas em HTML, com pausa e cache.

### Os quatro fatos de fonte única (todos confirmados em 2 fontes independentes)

- **Bam Adebayo, 83 pontos (014.71):** NBA.com ("Bam! 83-point historic night for Adebayo in win over Wizards") e NBC Sports ("passed Kobe Bryant for the second-most points scored in an NBA game"). A busca também traz CBS, theScore e ABC: 10/03/2026, Heat 150 x 129 Wizards. Só um blog dá outra data (01/03), e está errado.
- **Paramount e o UFC (015.31):** Wikipédia en (acordo de 11/08/2025, "stream exclusively on Paramount+ in the United States") e Fox 5 NY ("exclusive home for all UFC events starting in 2026").
- **Diego Lopes no UFC 314 (015.34):** página do evento no UFC.com (Volkanovski x Lopes, disputa de cinturão dos penas, decisão unânime em 5 rounds), página do atleta no UFC.com ("perdeu para Alexander Volkanovski por decisão unânime, em duelo válido pelo cinturão vago") e Wikipédia en.
- **Ruffy no UFC 313 (015.49):** página do atleta no UFC.com ("Ruffy venceu King Green por nocaute aos 2m07s do 1° round") e Wikipédia en ("spinning wheel kick"). O "que viralizou" saiu do enunciado, porque nenhuma fonte lida confirmava.

## Régua do dono

### Cota de regras de basquete (NBA fácil)
Havia 20 fáceis de regra ou termo básico. Ficaram 8, as mais ligadas à NBA ou as mais conhecidas: aro a 3,05 m (014.2), 5 em quadra (014.3), 82 jogos (014.9), three-peat (014.13), Leste e Oeste (014.17), GOAT (014.18), varrida (014.24) e and-one (014.34).

Foram para **reserva (12):** sigla MVP (014.10), cesta de 2 (014.11, também colada nos v12:7022 e 7023), Sexto Homem (014.15), Novato do Ano (014.16), tabela (014.29), jump shot (014.30), dois dribles (014.32), falta de ataque (014.33), armador (014.35), pivô (014.36), defesa individual (014.37) e full-court press (014.38).

### Ajustes de dificuldade (15)

**NBA (10).**
- De fácil para médio (8): Rodman de noiva (014.1, e Rodman já é resposta de outras 4 perguntas), óculos do Kareem (014.8), LeBron no futebol americano (014.14), série "Starting 5" (014.22), rodada de Natal (014.23), apelido "The Worm" (014.25), Kobe direto do colégio (014.26), cervo do Bucks (014.27).
- De difícil para médio (2): Sam Bowie (014.78) e Greg Oden (014.80), os dois "erros de draft" mais citados da NBA, famosos justamente por causa de Jordan e Durant.

**UFC (3).** De fácil para médio: Joe Rogan (015.5), faixa vermelha (015.10), Gina Carano em The Mandalorian (015.13).

**F1 (2).** De fácil para médio: bandeira preta (015.65). De difícil para médio: estreia de Massa pela Sauber (015.99).

## Descartes (3)

- **014.28 (Pelicans):** o enunciado entrega a resposta ("pelicano" no texto, "Pelicans" na resposta).
- **015.11 (Wanderlei "Cachorro Louco"):** mesmo tipo de fato do v12:3151 (apelido do Wanderlei, "The Axe Murderer").
- **015.12 (Volkanovski peso-pena):** o v12:3157 entrega a resposta ("ganhou o cinturão dos penas nocauteando Alexander Volkanovski").

## Correções de fato (6)

- **014.54:** Horford não é bicampeão da NBA. Tem um título só (2024, Celtics) e foi para o Warriors em 2025.
- **014.94:** os 52 pontos de Anthony Davis não são mais o recorde do All-Star Game. O recorde é de Jayson Tatum, 55 em 2023. A pergunta ficou pelos 52 pontos e pelo MVP de 2017.
- **014.98:** Larry Bird nasceu em West Baden Springs e cresceu em French Lick. "É natural de" virou "cresceu em".
- **015.49:** saiu "que viralizou" (sem fonte).
- **015.60:** a alternativa errada "Toro Rosso" tinha o nome oficial "Scuderia Toro Rosso", o que dava duas certas. Entrou "Williams".
- **015.91:** "a última vitória da Williams" é fato em aberto, porque a temporada 2026 ainda não acabou. A pergunta virou "venceu o GP da Espanha de 2012 pela Williams".

## Enunciados reescritos por pista de outra pergunta (5)

O `entrega.mjs` não pega estes casos, porque a resposta entregue é de **outra** pergunta.
- **014.57 (Pat Riley):** saiu "Showtime", que é a resposta do v12:2927.
- **014.64 (série da HBO):** saíram "Showtime" (v12:2927) e "Magic Johnson" (ligava a 014.6). Agora a pista é John C. Reilly no papel de Jerry Buss (elenco conferido na Wikipédia en).
- **014.78 (Sam Bowie):** saiu "a 2ª escolha", que entregava a 004:76 (Jordan foi a 3ª). Também não cita Portland, que é a resposta da 004:92.
- **015.1 (Belfort):** saiu "a Feiticeira da TV", que é o assunto do v12:13182 (resposta Joana Prado).
- **015.73 (suspensão ativa):** saiu "e 1993". Junto com "Williams", entregava a 015.70 (Prost campeão de 1993 pela Williams).

## Repetição e entrega

- **Cruzamento:** cada pergunta foi comparada, por peso de palavras raras, com o v12 inteiro, as reaproveitadas, o piloto e os lotes 001-013 (e os próprios 014-015). As 4 mais parecidas de cada uma foram lidas. Depois, busca por termo nos casos de regra (Pirelli, 25 pontos, bandeiras, cores das equipes, MVP, conferências, Natal, varrida etc.).
- **Fora os casos acima, nenhum fato repetido.** Os parecidos são outro fato: rounds de luta comum (3) x luta de cinturão (5, v12:2959); Wilt nunca eliminado x 100 pontos; Bill Russell técnico x troféu com o nome dele; Piquet e BMW x Piquet e Brabham (v12:12470); Curva do Sol x Junção (v12:9170); Coulthard em 2001 x Montoya em 2001 (010:76); Ímola (país) x Tamburello e Ratzenberger.
- **Detector de entrega:** `node expansao/scripts/entrega.mjs --arquivo` deu **0 suspeitas** nos dois lotes, depois das reescritas.

## Pontos para o dono olhar

- **NBA fácil ficou com 17 conferidas, e 8 delas são regra ou termo.** Para a montagem, a NBA vai precisar de mais fáceis de astro famoso na rodada 4.
- **Recordes que a temporada 2026 da F1 não muda na prática:** Hamilton nas poles (015.59) e Schumacher nas voltas mais rápidas (015.75, 77 contra 69 do Hamilton). Ficaram.
- **Rodman** é resposta de 3 perguntas no banco além das 2 deste lote (v12:2908, 009:2, 009:21). As duas daqui ficaram médias.
- **Glover no UFC 283 (015.24):** "se despediu do MMA" está confirmado na Wikipédia pt (anunciou a aposentadoria na entrevista depois da luta).
- **Os ids não foram recalculados** nas perguntas com texto alterado, para não quebrar referências.
