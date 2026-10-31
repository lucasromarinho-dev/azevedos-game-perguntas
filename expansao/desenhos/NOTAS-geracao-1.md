# Desenhos - geração 1 (DreamWorks/Illumination/Sony/Blue Sky + Cartoon/Nick)

Lotes: `lotes/desenhos-001.json` (84), `desenhos-002.json` (83), `desenhos-003.json` (83). Total 250, status `gerada`, categoria "Desenhos".

## Totais
- Grupo: filmes (DreamWorks, Illumination, Sony, Blue Sky) 110; TV (Cartoon Network, Nickelodeon, Disney Channel para Phineas e Ferb, Peppa Pig) 140.
- Dificuldade: 87 fáceis, 100 médias, 63 difíceis (filmes 40/48/22; TV 47/52/41).
- Músicas e aberturas (`musica: true`): 15, só título, filme ou personagem, nenhuma letra.
- Maior obra: Bob Esponja com 18 (nenhuma passa de 20). Depois vêm Shrek 15, Meu Malvado Favorito 12, Avatar 12, Madagascar 11, Como Treinar o Seu Dragão 10, Meninas Superpoderosas 10, Hora de Aventura 10, Phineas e Ferb 10 e Kung Fu Panda 9.

## Checagem web
- As 250 têm `verificado_web` preenchido com a fonte curta.
- Fontes: verbetes da Wikipédia en e pt de cada obra, baixados pela API com User-Agent genérico (35 obras, cerca de 70 verbetes), e Fandom pt-br: wikiesponja, powerpuff, ben10, horadeaventura, apenasumshow, gumball, fairlyoddparents, avatar, jimmyneutron, coragem, phineaseferb, patrulhacanina, shrek, madagascar, dragonpedia-brasil, peppapedia e stevenuniverso. Foram 283 chamadas de API registradas, mais 5 buscas web para confirmar nomes da dublagem (Vetor, Liga Anti-Vilões, músicas de Sing).
- Regra automática: o nome em pt-br da resposta precisa aparecer na Wikipédia pt ou no Fandom pt-br, e o termo-chave do fato (em inglês) precisa aparecer no verbete da obra. 35 perguntas foram conferidas uma a uma, com o trecho lido, e a fonte foi anotada à mão.
- Nomes de dublagem corrigidos na checagem: a secretária do prefeito é "Srta. Sara Belo" (Fandom pt-br), e não "Sara Bellum". Como o Fandom e a Wikipédia não concordam ("Princesa MaisGrana" x "Princesa Ronco Grana"), a pergunta da Princesa saiu. O "Ultra Lord" ficou como está na Wikipédia pt. A música do Boliche de Bolhas ficou "Sweet Victory", nome usado no Fandom pt-br, no episódio "Doidos Pela Banda".

## Cruzamento com o banco principal (expansao/correcoes/perguntas-v12.json)
- Rodei semelhança e cruzamento (o `semelhanca.mjs` e o `cruzamento.mjs` que o `duplicadas.mjs` usa) com o v12 inteiro e também das perguntas entre si.
- Fatos repetidos que saíram ou foram trocados: o Blu ser arara-azul, o Nigel ser cacatua, a Amazônia em Rio 2, o Balde de Lixo, a Karen, a Sandy ser do Texas e ser esquilo, a torre do dragão da Fiona, o Gato de Botas, o Banguela pelo nome, a idade do Ben 10, a Omnitrix, a identidade da Peppa e do George, o Timmy pelo nome e o Perry ser ornitorrinco.
- Ainda há 11 marcas "certa" e cerca de 40 "suspeita", todas falso alarme: a resposta é a mesma, mas o fato é outro. Exemplos: Marty é zebra e Melman é girafa, contra a pergunta do ocapi; a banana dos Minions, contra Bananas de Pijama; o Homem-Aranha Noir, contra o Venom; o pastor-alemão do Chase, contra o border collie; o quartzo rosa, contra a ametista; o Músculo, contra O Rei do Show; a Azula, contra o fogo de santelmo; o quebra-queixo, contra o uppercut.
- Nada usa como resposta um personagem que já é resposta no v12 (Shifu, Rei Julien, Scrat, Manny, Gru, Lula Molusco, Gary, Siriguejo, Pérola, Lindinha, Zuko, Appa e outros).

## Entrega e alternativas
- `entrega.mjs --arquivo` nos 3 lotes deu 0 suspeitas. As 5 entregas encontradas antes (Kung Fu Fighting, Cinto, padrinhos, Azula, Galinheta) foram reescritas.
- Alternativas espelho: conferi de um jeito mais rígido que o `alternativas.mjs`. Nenhuma alternativa errada é resposta de outra pergunta destes 3 lotes, nem do mesmo lote nem de outro. Cerca de 60 alternativas foram trocadas.
- Também conferi: 4 alternativas diferentes, nenhum travessão, todo enunciado termina com "?".

## Descartes durante a geração (não ficaram nos lotes)
Ao todo foram 27 perguntas escritas e tiradas antes de gravar:
- 13 difíceis de filmes, para fechar 110 e equilibrar a dificuldade: Mongo, taberna Maçã Envenenada, Estrela dos Desejos, Capitã DuBois, Zuba, Kai, Li Shan, Grimmel, Morte Vermelha, El Macho, ursinho Tim, Buck e Tibério.
- Fato repetido do v12 ou duplicata: Blu, Nigel, Amazônia, Balde de Lixo, Karen, Texas, Teddy, Danny Dog e Ben com 10 anos.
- Fonte fraca ou nome pt-br incerto: Cebola, bolinhos do Shifu, Prancha (o nome "Jonas" não foi confirmado), Cinto (a Wikipédia pt diz "Braço") e Princesa.
- Alternativas que se cruzavam: XLR8, Diamante, Kevin, Ciborgue, Estelar e Steve.

## Observação
Os scripts da geração (baixar, checar, montar) ficaram fora do repositório, na pasta temporária da sessão, como foi pedido.
