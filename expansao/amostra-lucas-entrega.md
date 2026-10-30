# Perguntas que entregavam a resposta (para o Lucas avaliar)

Revisão feita em 30/10/2026 na branch `expansao`. **Nada foi publicado**: o banco do jogo continua igual. As correções estão numa cópia do banco, esperando a sua aprovação.

O problema: algumas perguntas tinham no enunciado uma palavra que só aparecia na resposta certa. Exemplo: "Qual cantor de forró ganhou o apelido de **Safadão**?", com a alternativa "Wesley **Safadão**". Quem não sabe nada acerta só de ler.

## Quadro geral

| | Banco publicado | Piloto (lotes 106 a 110) | Total |
|---|---|---|---|
| Perguntas suspeitas (o programa achou e eu li uma a uma) | 598 | 4 | 602 |
| Entregavam a resposta de verdade | 560 | 3 | 563 |
| Falso alarme (a palavra não ajudava) | 38 | 1 | 39 |
| Corrigidas reescrevendo a pergunta | 538 | 3 | 541 |
| Corrigidas trocando alternativas erradas | 14 | 0 | 14 |
| Propostas para remover | 8 | 0 | 8 |

Como ler o quadro:

- **Reescrever** foi o caminho preferido: a pergunta continua sobre o mesmo fato, só que sem a palavra que dava a dica.
- **Trocar alternativas** foi usado quando a palavra não tinha como sair da pergunta. Aí as erradas passaram a ter a mesma palavra. Exemplo: "Qual cidade americana se chamava Nova Amsterdã?" agora tem "Nova Orleans" como errada, ao lado de "Nova York".
- **Remover** só quando não havia conserto bom: as siglas de estado (ES, DF, SC), que se respondem pelas próprias letras, e duas perguntas que, reescritas, ficariam iguais a outra que já existe no banco.
- **Falso alarme** são casos em que a palavra é parte natural do nome e não ajuda, como "capital do Panamá: Cidade do Panamá", siglas em que todas as alternativas formam as mesmas letras, ou gentílicos em que todas as opções vêm da mesma cidade.
- A dificuldade foi revista depois de tirar a dica: 5 fáceis viraram médias (sem a dica, já não eram tão óbvias) e 18 difíceis viraram médias (pela régua: assunto conhecido pelo nome não é difícil). Nada recente ficou difícil.
- Fatos novos que entraram nos enunciados (anos, nomes, lugares) foram conferidos na Wikipédia: 147 perguntas têm essa marca.

## 25 exemplos de antes e depois

Sorteio fixo (semente 20261105) entre as 563 que entregavam a resposta, com o Safadão incluído de propósito. A resposta certa está em **negrito**.

### 1. Esportes, fácil

- **Antes:** Qual brincadeira de futebol de rua tem um goleiro e um rodízio a cada três gols?
  - Alternativas: Bobinho / Paredão / Gol a gol / **Três dentro, três fora**
- **Depois:** Qual brincadeira de futebol de rua tem um goleiro que só sai do gol depois de levar alguns gols?
- Por quê: o enunciado trazia "três", que apontava a resposta.

### 2. Ciências, fácil

- **Antes:** Como se chama o plantio feito sobre a palha da safra anterior, sem arar a terra?
  - Alternativas: Aração / Queimada / Terraceamento / **Plantio direto**
- **Depois:** Como se chama a técnica de semear sobre a palha da safra anterior, sem arar a terra?
- Por quê: o enunciado trazia "plantio", que apontava a resposta.

### 3. Geografia, médio

- **Antes:** Como se chama a praça do Recife Antigo que marca o ponto de onde se contam as distâncias da cidade?
  - Alternativas: Praça do Diário / Cais da Aurora / Pátio de São Pedro / **Marco Zero**
- **Depois:** Como se chama a praça do Recife Antigo de onde se contam as distâncias da cidade?
- Por quê: o enunciado trazia "marca", que apontava a resposta.

### 4. Ciências, médio

- **Antes:** Como se chama a temperatura em que um óleo começa a soltar fumaça e se degradar na frigideira?
  - Alternativas: Ponto de fusão / **Ponto de fumaça** / Ponto de orvalho / Ponto de ebulição
- **Depois:** Como se chama a temperatura em que um óleo começa a soltar vapores visíveis e se degradar na frigideira?
- Por quê: o enunciado trazia "fumaça", que apontava a resposta.

### 5. História, fácil

- **Antes:** Como se chamava a cabine fechada, com porta, onde ficava o telefone público nas ruas de Londres e de outras cidades?
  - Alternativas: Quiosque / Guarita / **Cabine telefônica** / Banca
- **Depois:** Como se chamava o compartimento fechado, com porta, onde ficava o aparelho público nas ruas de Londres e de outras cidades?
- Por quê: o enunciado trazia "cabine", "telefone", que apontavam a resposta.

### 6. Ciências, médio

- **Antes:** Como se chama a faixa rasa do fundo do mar que continua o continente antes do talude?
  - Alternativas: Fossa oceânica / Dorsal oceânica / **Plataforma continental** / Planície abissal
- **Depois:** Como se chama a faixa rasa do fundo do mar que prolonga a terra firme antes do talude?
- Por quê: o enunciado trazia "continente", que apontava a resposta.

### 7. Geografia, médio

- **Antes:** O Rio Ganges deságua em qual baía do Oceano Índico?
  - Alternativas: **Baía de Bengala** / Golfo de Mannar / Mar de Andamão / Golfo de Omã
- **Depois:** O Rio Ganges deságua em qual parte do Oceano Índico?
- Por quê: o enunciado trazia "baía", que apontava a resposta.

### 8. Entretenimento, fácil

- **Antes:** Qual série de 2020 da Netflix mostra uma americana do marketing que vai trabalhar em Paris?
  - Alternativas: **Emily em Paris** / Ginny & Georgia / Dix pour cent / Gossip Girl
- **Depois:** Qual série de 2020 da Netflix mostra uma americana do marketing que vai trabalhar na capital francesa?
- Por quê: o enunciado trazia "Paris", que apontava a resposta.

### 9. História, médio

- **Antes:** Como ficou conhecido o período de quinze anos em que Getúlio Vargas governou o Brasil sem interrupção?
  - Alternativas: Estado Novo / **Era Vargas** / República Velha / Segundo Reinado
- **Depois:** Como ficou conhecido o período de 1930 a 1945 em que o Brasil teve o mesmo governante sem interrupção?
- Por quê: o enunciado trazia "Vargas", que apontava a resposta.

### 10. Entretenimento, fácil

- **Antes:** Qual live-action da Disney, de 2017, tem Emma Watson no papel de Bela?
  - Alternativas: Mulan / Encantada / Cinderela / **A Bela e a Fera**
- **Depois:** Qual live-action da Disney, de 2017, tem Emma Watson como protagonista?
- Por quê: o enunciado trazia "Bela", que apontava a resposta.

### 11. Ciências, médio

- **Antes:** Como se chama o vírus que infecta e destrói bactérias, estudado como alternativa aos antibióticos?
  - Alternativas: Adenovírus / **Bacteriófago** / Retrovírus / Viroide
- **Depois:** Como se chama o vírus que infecta e destrói micróbios unicelulares, estudado como alternativa aos antibióticos?
- Por quê: o enunciado trazia "bactérias", que apontava a resposta.

### 12. Ciências, difícil

- **Antes:** De qual planta de flores em forma de dedal vem a digitalina, remédio para o coração?
  - Alternativas: Cicuta / Losna / **Dedaleira** / Mandrágora
- **Depois:** De qual planta de flores roxas em forma de sino vem a digitalina, remédio para o coração?
- Por quê: o enunciado trazia "dedal", que apontava a resposta.

### 13. Ciências, médio

- **Antes:** Qual acordo internacional tem como meta limitar o aquecimento global a bem menos de 2 °C?
  - Alternativas: Protocolo de Kyoto / Agenda 21 / **Acordo de Paris** / Protocolo de Montreal
- **Depois:** Qual tratado internacional de 2015 tem como meta limitar o aquecimento global a bem menos de 2 °C?
- Por quê: o enunciado trazia "acordo", que apontava a resposta. Conferido na Wikipédia.

### 14. Tecnologia, fácil

- **Antes:** Qual empresa publica The Sims e os jogos de futebol da série EA Sports FC?
  - Alternativas: Konami / Activision / **Electronic Arts** / Take-Two
- **Depois:** Qual empresa publica The Sims e a série de futebol que substituiu o FIFA?
- Por quê: o enunciado trazia "EA", que apontava a resposta. Conferido na Wikipédia.

### 15. Ciências, médio

- **Antes:** Qual mamífero marinho dorme de mãos dadas com outros para não ser levado pela correnteza?
  - Alternativas: Foca / Peixe-boi / Morsa / **Lontra-marinha**
- **Depois:** Qual mamífero do Pacífico Norte dorme de mãos dadas com outros para não ser levado pela correnteza?
- Por quê: o enunciado trazia "marinho", que apontava a resposta. Conferido na Wikipédia.

### 16. Entretenimento, fácil

- **Antes:** Qual é o urubu vilão que vive enganando o Pica-Pau?
  - Alternativas: Leôncio / Frajola / Patolino / **Zeca Urubu**
- **Depois:** Qual ave vilã vive enganando o Pica-Pau?
- Por quê: o enunciado trazia "urubu", que apontava a resposta.

### 17. Entretenimento, fácil (passa a médio)

- **Antes:** Qual cantor de forró gravou "Camarote" e ganhou o apelido de "Safadão"?
  - Alternativas: Zé Vaqueiro / Xand Avião / **Wesley Safadão** / Tarcísio do Acordeon
- **Depois:** Qual cantor de forró gravou o sucesso "Camarote", em 2014?
- Por quê: o enunciado trazia "Safadão", que apontava a resposta; dificuldade revista de fácil para médio. Conferido na Wikipédia.

### 18. Entretenimento, fácil

- **Antes:** Qual desenho brasileiro mostra a menina Luna, apaixonada pelo céu, com o irmão Júpiter?
  - Alternativas: Peixonauta / Galinha Pintadinha / **O Show da Luna** / Meu Amigãozão
- **Depois:** Qual desenho brasileiro mostra uma menina apaixonada pelo céu, que vive com o irmão Júpiter e o furão Cláudio?
- Por quê: o enunciado trazia "Luna", que apontava a resposta. Conferido na Wikipédia.

### 19. Entretenimento, médio

- **Antes:** Qual desenho tem o gato azul Gumball e o peixinho Darwin?
  - Alternativas: Apenas um Show / Steven Universo / **O Incrível Mundo de Gumball** / Hora de Aventura
- **Depois:** Qual desenho tem um gato azul e um peixinho com pernas chamado Darwin?
- Por quê: o enunciado trazia "Gumball", que apontava a resposta.

### 20. Geografia, médio

- **Antes:** Qual mar, disputado por vários países, fica entre o Vietnã, as Filipinas e a China?
  - Alternativas: Mar do Japão / **Mar da China Meridional** / Mar de Andamão / Mar Amarelo
- **Depois:** Qual mar, disputado por vários países, fica entre o Vietnã, as Filipinas e a ilha de Bornéu?
- Por quê: o enunciado trazia "China", que apontava a resposta. Conferido na Wikipédia.

### 21. Entretenimento, difícil

- **Antes:** Qual poema dramático de João Cabral de Melo Neto acompanha o retirante Severino?
  - Alternativas: O Quinze / Vidas Secas / Grande Sertão: Veredas / **Morte e Vida Severina**
- **Depois:** Qual poema dramático de João Cabral de Melo Neto acompanha um retirante do sertão até o Recife?
- Por quê: o enunciado trazia "Severino", que apontava a resposta. Conferido na Wikipédia.

### 22. Tecnologia, médio

- **Antes:** Qual aparelho, vendido em camelôs, transforma a TV em smart TV e muitas vezes vem com canais piratas?
  - Alternativas: Antena digital / Home theater / Chromecast / **TV box**
- **Depois:** Qual aparelho, vendido em camelôs, deixa o televisor inteligente e muitas vezes vem com canais piratas?
- Por quê: o enunciado trazia "TV", que apontava a resposta.

### 23. História, fácil

- **Antes:** Qual prática comum na Revolução Industrial colocava crianças pequenas para trabalhar em fábricas e minas?
  - Alternativas: Corveia / Escravidão / Servidão / **Trabalho infantil**
- **Depois:** Qual prática comum na Revolução Industrial colocava crianças pequenas em fábricas e minas?
- Por quê: o enunciado trazia "trabalhar", que apontava a resposta.

### 24. Esportes, difícil

- **Antes:** Qual piloto, filho de Chico Serra, foi tricampeão da Stock Car de 2017 a 2019?
  - Alternativas: Rubens Barrichello / Cacá Bueno / Thiago Camilo / **Daniel Serra**
- **Depois:** Qual piloto, filho de um ex-piloto de Fórmula 1, foi tricampeão da Stock Car de 2017 a 2019?
- Por quê: o enunciado trazia "Serra", que apontava a resposta. Conferido na Wikipédia.

### 25. História, médio

- **Antes:** Qual expressão latina quer dizer "único no seu gênero", algo sem igual?
  - Alternativas: Status quo / **Sui generis** / In loco / Ad hoc
- **Depois:** Qual expressão latina quer dizer algo sem igual, único na sua espécie?
- Por quê: o enunciado trazia "gênero", que apontava a resposta.

## O que falta você decidir

1. Se as reescritas estão boas para o público do jogo (a amostra acima é sorteada, não escolhida).
2. Se as 8 remoções podem sair.
3. Só depois disso a cópia corrigida vai para o jogo.
