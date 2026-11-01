# Desenhos v1.1, montagem e conferência

Conferente, 01/11/2026, branch `expansao`. Nada publicado na `main`. A v1 (`perguntas-desenhos.json`) e a v2 (`v2/`) não foram mexidas. A v1.1 tem 1.000 perguntas e vai substituir a v1 no ar.

## Arquivos

- `scripts/montar-v1_1.mjs`: monta a v1.1 (`--seco` só mostra a conta).
- `reescritas.json`: as 43 reescritas aprovadas, cada uma com `origem_posicao` (posição na revisão da régua), `verificado_web_conferente` (endereço e trecho lido) e `dublagem_br`.
- `perguntas-desenhos-v1_1.json`: o banco (5 campos, uma linha, UTF-8 sem BOM, NFC, sem quebra no fim).
- `perguntas-desenhos-v1_1-origem.json`: origem de cada posição (`fonte` v1, reescrita ou v2; `origem` igual à da v2; `posicao_revisao`; obra; grupo).
- `scripts/cruzar-v1_1.mjs`: cruzamento final (interno e contra Esportes).
- `scripts/amostra-v1_1.mjs` e `amostra-lucas.md`: amostra sorteada.

## Régua

Só entra desenho que um adulto brasileiro comum conhece, e pergunta que esse adulto tem chance real de acertar. Difícil é obra famosa com um detalhe que quem assistiu lembra, nunca trivia de fã.

## Composição

| Fonte | Fácil | Médio | Difícil | Total |
|---|---|---|---|---|
| v1 que fica (régua) | 259 | 270 | 93 | 622 |
| Reescritas aprovadas | 0 | 3 | 40 | 43 |
| Boas da v2 | 113 | 150 | 72 | 335 |
| **Total** | **372** | **423** | **205** | **1.000** |

- Dificuldade: a final registrada nas duas revisões (`dificuldade_final`); nas reescritas, a do conferente.
- Das 408 boas da v2 entraram 335: todas as 72 difíceis, 150 das 152 médias e 113 das 184 fáceis. Ficaram fora 73 (71 fáceis cortadas para fechar 1.000, sempre da obra com mais perguntas no conjunto, e as duas tiradas no cruzamento, abaixo). A lista sai no relatório do script.

### Por que a conta por nível não bate com 350/400/250

- Difícil: **205**, acima do mínimo de 200 e **45 abaixo do alvo de 250**. Todas as difíceis disponíveis entraram (93 da v1, 72 da v2 e 40 reescritas). Não forcei mais reescritas nem subi nível de pergunta para fechar a conta.
- **Faltam 45 difíceis novas** (obra famosa, detalhe que quem assistiu lembra) para chegar a 250. Ao entrarem, sairiam 22 fáceis e 23 médias (as fáceis e médias da v2 que entraram por último), e a conta ficaria 350/400/250.
- Fácil 372 (+22) e médio 423 (+23): com o difícil abaixo do alvo, o resto das 1.000 vem das fáceis e médias boas. A diferença fica em poucas dezenas, como a regra permite.

## Reescritas

- Universo: 280 perguntas que saíram por pergunta, em obra que ficou (151 da v1 e 129 da v2).
- Tentadas 48, **aprovadas 43**, **descartadas 5**:
  - Frozen, onde Anna conhece Kristoff (loja do Oaken): o trecho lido não diz onde.
  - Frozen, Anna dá um soco em Hans: o trecho lido não traz a cena.
  - Fantasia, Mickey enfeitiça a vassoura: as páginas lidas não descrevem a cena com clareza (o Disney Wiki recusou o acesso).
  - Toy Story, o nome de Andy na sola da bota de Woody: não achei o trecho.
  - Valente, os trigêmeos viram ursinhos: confirmado, mas outra pergunta do banco já diz que o bolo transforma a mãe em ursa.
- As outras 232 ficaram fora sem reescrita: Digimon além do Agumon, fases tardias de Pokémon, Naruto e Dragon Ball Super, parentes e personagens secundários da Turma da Mônica (que já está perto do teto), sequências pouco vistas, nomes de canção ou abertura, episódio específico, e casos em que o detalhe lembrado já existia no banco (Mulan e o cabelo, Cinderela e os ratinhos em cavalos, Enrolados e a frigideira, Up e a coleira do Dug, entre outros).
- Toda reescrita foi checada lendo o trecho (Wikipedia em português e inglês, pela API, com User-Agent genérico), com o nome da dublagem brasileira registrado. Exemplos:
  - "Em Frozen 2, que animal é o Bruni?" virou "Em Frozen 2, o espírito do fogo tem forma de que animal?" (Salamandra).
  - "Qual é o nome da cabrita de Esmeralda?" virou "que animal de estimação anda sempre com a cigana dançarina?" (Um cabrito; a pt.wikipedia diz "filhote de bode").
  - "Qual é o nome do cientista alemão vilão de Carros 2?" virou "com o que os espiões britânicos confundem o melhor amigo de McQueen?" (agente secreto americano).
  - Em 101 Dálmatas o enunciado diz "(1961)", porque no filme com atores, de 1996, Roger cria jogos e não canções.

## Correções aplicadas

- Piyomon na 002.66 e os três `AJUSTES_REA` do `montar-v2.mjs` já estão no arquivo da v2, e o script confere os quatro. A 002.66 (Digimon) e a rea:394 (Hoenn) não entram, porque a régua as tirou. As duas dos Simpsons (rea:382 e rea:390) entram com o texto ajustado.
- Dificuldade final das revisões: 93 corrigidas na v1 e 50 na v2.

## Validações

1. `npx tsx expansao/disney/scripts/validar-disney.mts expansao/desenhos/v1_1/perguntas-desenhos-v1_1.json Desenhos`: **1.000 válidas, 0 descartadas** (a cópia com a categoria "Desenhos"). O `montarBanco` real do jogo ainda recusa as 1.000, porque não conhece a categoria, igual à v2.
2. Enunciados duplicados (sem caixa e acento): **0**.
3. Todas com 4 alternativas distintas e a resposta entre elas.
4. `entrega.mjs --arquivo`: **0 suspeitas**. A primeira passada deu 5, todas nas reescritas, e as respostas foram ajustadas: Névoa ("terra mágica" x "névoa mágica"), Vanellope ("jogo"), Vida de Inseto ("insetos"), Diego ("tigres") e Macaco Louco ("macaco").
5. Cruzamento (`cruzar-v1_1.mjs`: `compararE` nos dois sentidos e `comparar`, em todos os pares, e contra as 3.000 de Esportes):
   - Primeira passada: 488 marcas, 486 internas (205 só entre perguntas da v1, já lidas na montagem da v1) e 2 com Esportes. Li as 283 que envolvem reescrita, v2 ou Esportes.
   - **Casos reais tratados:**
     - 18 reescritas citavam a resposta de outra pergunta e foram reformuladas: Malévola, Esmeralda, Pongo, Eric, baleia (Pinóquio), Shere Khan, Vanellope, Flik, Mate, Russell, Anton Ego, Vetor, Johnny e Drácula, Professor Utônio, bebê humano (Era do Gelo) e Floresta Encantada/represa (Frozen 2).
     - v2 tiradas (`EXCLUIR_V2`): 1073 (o Agumon, porque a v1:756 já cita o nome; as duas revisões tinham guardado uma pergunta do Agumon cada) e 1181 (Madame Samovar, cujo nome é a resposta da v1:215).
     - v2 com enunciado ajustado na montagem (`AJUSTES_V2`; o arquivo da v2 não muda): 1401 ("a pequena Saori" virou "Atena ainda bebê", porque Saori é a resposta da v1:932), e 1219 e 1620 ("Shun" virou "Cavaleiro de Andrômeda", porque Shun é a resposta da v1:746).
   - Segunda e terceira passadas: 470 marcas. As novas são os mesmos pares com o texto novo, ou falso alarme.
   - **Marcas que ficaram, todas falso alarme pela régua da v2:** pergunta de título com o título citado noutro enunciado (Aristogatas, Naruto, Sailor Moon, Corcunda, Smurfs, Laboratório de Dexter); personagem principal citado sem o fato (Woody, Bulma, Misty, Florzinha, Burro, Gargamel, Muntz, Sebastião, Mike Wazowski, Kristoff); mesma resposta genérica em obra diferente (cores, javali, porco, cobra, burro); fatos diferentes da mesma obra (Tia Nastácia, Frozen 2 e o quinto espírito, Gohan e Pan).
   - **Esportes:** 2 marcas, só palavra comum (Urso/Grizzlies, perna/fadeaway). Nenhum caso real.
6. Contagens:
   - Por nível: fácil 372, médio 423, difícil 205.
   - Por grupo: Disney 363, clássicos 173, DreamWorks e similares 134, Pixar 117, anime 111, Cartoon/Nick 59, Brasil 43. **Disney + Pixar = 480 (48%)**, abaixo do teto de 55%.
   - Por grupo e nível: Disney 156/144/63; Pixar 41/50/26; DreamWorks 42/65/27; clássicos 69/72/32; anime 27/50/34; Cartoon/Nick 23/22/14; Brasil 14/20/9.
   - 10 obras com mais perguntas (franquia junta): Dragon Ball 34, Turma da Mônica 29, Pokémon 27, Shrek 25 (com Gato de Botas), Bob Esponja 25, Frozen 23, Toy Story 21, Cavaleiros do Zodíaco 21, Looney Tunes 19, Os Simpsons 17. Nenhuma passa de 45.
7. Formato: sem BOM, numa linha só, sem quebra no fim, NFC, minificado, 5 campos na ordem, sem travessão longo.
   - sha256 de `perguntas-desenhos-v1_1.json`: `dfd8794814904855158a809f3dcdbfbd34ce02fee72235d3e9cd1b7885547e1d`

## Amostra

`amostra-lucas.md`: 10 perguntas (4 fáceis, 3 médias e 3 difíceis) sorteadas por script com a semente 20261101 (mulberry32), com o nível e a resposta. Não foi enviada a ninguém.
