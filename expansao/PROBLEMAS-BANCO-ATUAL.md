# Problemas observados no banco atual (`perguntas.json`)

Só anotações, **nada foi corrigido**. Números entre `#` são a posição (índice) na lista do `perguntas.json`. Fonte: leitura de amostra + `node expansao/scripts/duplicadas.mjs --banco` + checagens com Node.

## 1. Posição da resposta certa enviesada para a letra A

| A | B | C | D |
|---|---|---|---|
| 1.333 (29,1%) | 1.149 (25,1%) | 1.068 (23,3%) | 1.030 (22,5%) |

Quem chuta "A" acerta acima do acaso. Se o jogo não embaralha as alternativas na hora de mostrar, vale embaralhar (no app ou num script único sobre o banco). As 500 novas estão equilibradas (127/125/124/124).

## 2. Resposta certa muito mais longa que as erradas (pista visual)

126 perguntas em que a certa tem pelo menos 1,7 vez o tamanho de todas as erradas (Tecnologia 30, Ciências 27, Esportes 23, Geografia 21, História 13, Entretenimento 12). Exemplos:

- #20 "Qual estado brasileiro tem o município de Natal como capital?" -> **Rio Grande do Norte** / Paraíba / Ceará / Pernambuco
- #182 "Qual é a capital do Panamá?" -> **Cidade do Panamá** / Colón / San José / Manágua
- #189 Punta Cana -> **República Dominicana** / Cuba / Jamaica / México
- #209 -> **Rosa dos ventos** / Legenda / Escala / Bússola
- #210 -> **Crosta terrestre** / Manto / Núcleo / Atmosfera

Nem toda é problema (às vezes o nome certo é longo mesmo), mas as erradas podem ganhar o mesmo "peso" (ex.: Rio Grande do Norte x Mato Grosso do Sul x Espírito Santo...).

## 3. Quase-duplicadas e moldes repetidos

- **Mesmo fato, duas perguntas**: #487 "Em qual estado fica a cidade de Chapecó?" x #2659 "A Chapecoense é um clube de qual estado?" (ambas Santa Catarina).
- **Mesmo fato invertido**: #2012 "unidade de pressão no SI" (Pascal) x #2125 "qual cientista dá nome à unidade de pressão" (Blaise Pascal).
- **Seis atalhos de teclado no mesmo molde, com as mesmas alternativas "Ctrl + letra"**: #3692 (Ctrl+S), #3718 (Ctrl+Z), #3719 (Ctrl+X), #3720 (Ctrl+A), #3722 (Ctrl+F), #3827 (Ctrl+P). Numa mesma partida soam repetitivas.
- **Cadeia sobre o mesmo tema**: #0 maior oceano, #431 menor oceano, #432 segundo maior oceano; #1 maior estado x #228 menor estado.
- O relatório completo (15 "certas" e 224 "suspeitas", a maioria falso alarme por molde parecido) sai com `node expansao/scripts/duplicadas.mjs --banco`.

## 4. Fatos recentes em "difícil"

16 perguntas de 2020 em diante estão em "dificil" (a regra nova do piloto limita recentes a "medio"). Não é erro de fato, só de régua. Ex.: #3005 (artilheiro 2023), #3006 (artilheiro 2025), #3012 e #3014 (vices 2022 e 2023), #3017 a #3019 (Copa do Brasil 2020-2022), #3028 a #3031 (Libertadores 2020, 2021, 2025, técnico de 2024), #3041, #3042, #3045, #3058 (MVPs da NBA 2022-2025), #3068.

Os fatos do fim de 2025 (#3006, #3030, #3042, #2844) estão na borda do que o gerador conhece com segurança: vale a conferência independente olhar com atenção.

## 5. Palavras que envelhecem

20 enunciados usam "atual", "atualmente" ou "hoje". Quase todos são seguros ("em qual país atual ficam as ruínas de Troia?"). Os dois que podem envelhecer: #811 "...criou a moeda atual do Brasil?" e #1167 "...a Constituição atual?".

## 6. Observação de cobertura (não é defeito, é contexto para a expansão)

O banco já cobre quase todo fato "clássico" de trivia. No piloto, 55% das primeiras 221 perguntas geradas "de cabeça" já existiam (às vezes com o texto quase idêntico). Depois de checar cada assunto contra o banco antes de escrever (`scripts/grep-banco.mjs`), a perda caiu para 1% a 6% por lote. Detalhes no relatório do piloto.
