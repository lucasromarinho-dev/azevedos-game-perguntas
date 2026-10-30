# Banco Disney - amostra para o Lucas

Versão especial do LOTER QUIZ só com perguntas da Disney e da Pixar: **1.000 perguntas** em 6 temas novos. Nada foi publicado: o arquivo pronto fica em `expansao/disney/perguntas-disney.json` e só entra no jogo quando você mandar.

## Quadro final: quantas perguntas tem de cada tipo (depois da conferência do lote 011)

| Tema | Fácil | Média | Difícil | Total |
|---|---|---|---|---|
| Clássicos Disney | 80 | 62 | 25 | 167 |
| Princesas | 73 | 70 | 25 | 168 |
| Pixar | 82 | 66 | 25 | 173 |
| Vilões | 59 | 78 | 25 | 162 |
| Músicas | 73 | 72 | 25 | 170 |
| Disney Moderno e Bichos | 70 | 62 | 28 | 160 |
| **Total** | **437** (43,7%) | **410** (41,0%) | **153** (15,3%) | **1.000** |

Todos os temas agora têm pelo menos 25 difíceis. As 962 perguntas anteriores continuam iguais e na mesma ordem; as 38 novas entram no fim do arquivo.

- **Filmes diferentes:** 87. O que mais aparece é Frozen: Uma Aventura Congelante, com 35 perguntas (3,5% do banco); depois vêm O Rei Leão (34) e Aladdin (32).
- **"Difícil" aqui é pergunta de fã**: nome de personagem secundário ou detalhe da história. Nada de ano de lançamento, bilheteria ou diretor.
- **Nomes e títulos como no Brasil**: Mate, Linguini, Zezé, Gato Pilantra, "Livre Estou", "Vencer Distâncias", "Imagem" (a canção da Mulan)...
- **Jeitos diferentes de perguntar** (cada um abaixo de 10% do banco): "Qual destes NÃO é..." 40, "Quem disse..." 24, "O que vem primeiro..." 27, "Complete..." 21, perguntas de número 22.
- **Conferência:** um segundo agente, que não escreveu as perguntas, conferiu uma por uma. Ficaram **962 boas**; 38 foram jogadas fora agora (somadas às 32 que o gerador já tinha tirado). Para chegar de novo a 1.000 faltam 38 perguntas, mas nenhuma pergunta nova foi criada nesta etapa.
- **Checagem na internet:** 430 consultas à API da Wikipédia (português e inglês) e 42 buscas na web. Foram checadas todas as difíceis, todas as de Músicas (nome da canção no Brasil e quem canta), todas as de número e de "o que vem primeiro" e os nomes de personagens secundários. 150 perguntas fáceis e médias, de fatos muito conhecidos (exemplo: "o que Cinderela perde na escadaria do palácio?"), foram conferidas só pela história do filme, sem busca própria.

## O que a conferência mudou

**52 perguntas corrigidas.** Alguns exemplos:

- **Nomes da dublagem brasileira:** as duas enguias da Úrsula se chamam **Pedro e Juca** no Brasil (não "Flotsam e Jetsam"); a senhora que cria a raposinha em O Cão e a Raposa é a **Sra. Tita**; a cozinheira de 101 Dálmatas é a **Naná**; o programa antigo do Woody é **O Rodeio do Woody**; o vilão de A Família do Futuro é o **Bandido do Chapéu-Coco**.
- **Canções de A Bela e a Fera:** na trilha brasileira, "Be Our Guest" é **"Seja Nossa Convidada"** e "Something There" é **"Alguma Coisa Acontece"** (as perguntas diziam "À Vontade" e "Sentimentos São").
- **Errada que também era certa:** em Pocahontas, "John Rolfe" aparecia como errada, mas ele é o par dela no segundo filme; em Aladdin, Jafar também vira cobra gigante no fim; um "despertador" também é relógio. Essas alternativas foram trocadas.
- **Pergunta no tema errado:** a frigideira da Rapunzel estava em Vilões e foi para Princesas; uma fala do Gênio estava em Músicas e foi para Clássicos.
- **Régua das crianças:** 15 perguntas sobre personagens principais desceram de nível (exemplo: Flik, de Vida de Inseto, era "difícil" e virou fácil).
- **Cuidado com crianças:** a pergunta da Lagarta de Alice não fala mais de narguilé.

**38 perguntas jogadas fora:** 34 repetiam o mesmo fato de outra pergunta (exemplo: "que animal é o Dug?" e "qual é o nome do cachorro que fala por uma coleira?"), 2 não tinham confirmação segura (a raça da Nana e qual meia-irmã prova o sapatinho primeiro), 1 falava de uma fala que não achei na dublagem e 1 era bastidor (o compositor de O Aprendiz de Feiticeiro).

## Pontos de atenção

1. **1.000 fechadas.** As 38 que faltavam vieram do lote 011 (50 candidatas escritas por outro agente e conferidas uma por uma por mim). Detalhes na seção "Conferência do lote 011" logo abaixo.
2. **Difíceis por tema resolvidas.** Pixar, Músicas, Princesas, Clássicos e Vilões ficaram com 25 difíceis cada; Disney Moderno e Bichos com 28. Nenhuma média foi promovida só para fechar a conta.
3. **Nome de Procurando Nemo para você olhar.** Uma pergunta antiga (lote 001, fbe674b8ca) responde "Guelra" para o líder dos peixes do aquário. A Wikipédia em português diz que "Guelra" é o nome da dublagem de Portugal e que no Brasil ele se chama **Gil**. Não mexi nela (as 962 ficaram como estavam); vale decidir se troca.
4. **Duas versões de dublagem.** Alguns filmes antigos (como A Bela e a Fera e A Pequena Sereia) foram dublados de novo no Brasil. Usei os nomes da trilha brasileira que a Wikipédia registra; quem viu a versão antiga pode lembrar de outro nome.
5. **Nomes que ficaram em inglês.** Alguns nomes não têm versão brasileira confirmada (Sir Hiss, Spirit of Adventure, Extrator de Gritos). Ficaram como estão no filme.
6. **O jogo ainda não lê estes temas.** O arquivo está pronto e validado, mas o jogo de hoje só conhece os 6 temas normais. Nada foi publicado.

## Conferência do lote 011 (as 38 que fecharam as 1.000)

Das 50 candidatas, **38 entraram**, **12 ficaram de reserva** (boas, mas sobraram para a meta) e nenhuma foi jogada fora. Todas as 50 foram checadas na Wikipédia (87 consultas, português e inglês) e 3 em buscas na web.

- **Entraram:** Pixar 8 difíceis, Músicas 7 difíceis, Princesas 4 difíceis, Clássicos 3 difíceis, Vilões 1 difícil e Disney Moderno e Bichos 10 fáceis, 3 médias e 2 difíceis.
- **Corrigidas (2):** a colega polvo do Nemo se chama **Pearl** na dublagem brasileira ("Pérola" é o nome de Portugal); a canção da Mirabel em Encanto acontece **durante** a festa do dom do Antonio, não depois.
- **Reserva (12), por quê:** Ilha do Hóquei (Divertida Mente) e a abertura de Aladdin eram mais médias que difíceis; Hannah (irmã do Sid) e James (pai da Tiana) repetiam o molde de outra pergunta do lote; a boneca Scrump da Lilo não teve o nome confirmado na dublagem brasileira; Jolly Roger, Toulouse, a música da Sra. Jumbo, surfe, cenouras, café da tia Cass e Gideon Grey sobraram para não carregar o mesmo filme ou porque já havia candidata melhor.

**5 das novas difíceis** (a resposta certa está em **negrito**):

1. (Pixar, Procurando Dory) Em Procurando Dory, quais são os nomes dos pais de Dory?
   Marlin e Coral / Hank e Destiny / **Jenny e Charlie** / Bailey e Becky
2. (Músicas, Mogli) Em Mogli - O Menino Lobo (1967), que aves cantam em quarteto para o menino sobre amizade?
   Papagaios / Corvos / **Urubus** / Corujas
3. (Princesas, Aladdin) Em Aladdin (1992), qual pretendente sai do palácio furioso, com a calça rasgada pelo bichinho de estimação da princesa?
   Príncipe Ali / Príncipe Eric / **Príncipe Achmed** / Príncipe Naveen
4. (Clássicos Disney, Peter Pan) Em Peter Pan (1953), qual é o nome do irmão caçula de Wendy, que vive agarrado a um ursinho de pelúcia?
   João / Tiago / Pedro / **Miguel**
5. (Vilões, Bernardo e Bianca) Em Bernardo e Bianca, quais são os nomes dos dois répteis de estimação de Madame Medusa?
   Horácio e Gaspar / **Brutus e Nero** / Pedro e Juca / Agonia e Pânico

## 5 perguntas de cada tema (sorteio pela semente 20261107)

A resposta certa está em **negrito**.

### Clássicos Disney

1. (Média, Robin Hood) No Robin Hood da Disney, que animal é a Lady Marian?
   Coelha / Gata / Galinha / **Raposa**
2. (Fácil, Hércules) Em Hércules, de que mitologia vêm os personagens do filme?
   Nórdica / **Grega** / Egípcia / Romana
3. (Fácil, Dumbo) Em Dumbo, por que os outros elefantes riem do filhote?
   Porque ele não sabe andar / Por causa da tromba curta / **Por causa das orelhas enormes** / Porque ele é cor-de-rosa
4. (Média, O Corcunda de Notre Dame) Em O Corcunda de Notre Dame, quais são os nomes das três gárgulas amigas de Quasímodo?
   Tico, Teco e Pluto / **Victor, Hugo e Laverne** / Huguinho, Zezinho e Luisinho / Flora, Fauna e Primavera
5. (Fácil, Alice no País das Maravilhas) Em Alice no País das Maravilhas (1951), qual é o nome da gatinha de Alice?
   Duquesa / Marie / **Dinah** / Fígaro

### Princesas

1. (Média, Branca de Neve e os Sete Anões) Em Branca de Neve, qual personagem da corte recebe a ordem de levar a princesa para a floresta?
   **O caçador** / O príncipe / O espelho / O bobo da corte
2. (Média, Mulan) Em Mulan, qual é o nome do capitão que treina a heroína no Exército?
   Yao / Shan Yu / Chi-Fu / **Li Shang**
3. (Média, Moana 2) Em Moana 2 (2024), qual é o nome da irmãzinha de Moana?
   Pua / **Simea** / Tala / Sina
4. (Média, Enrolados) Em Enrolados, que símbolo do reino de Corona aparece nas lanternas e bandeiras?
   Uma lua / Uma estrela / **Um sol** / Uma rosa
5. (Média, Valente) Qual destes NÃO é personagem de Valente?
   Fergus / **Kristoff** / Elinor / Angus

### Pixar

1. (Média, Lightyear) Em Lightyear (2022), que animal é o robô Sox, companheiro de Buzz?
   Coruja / **Gato** / Rato / Cachorro
2. (Fácil, Divertida Mente) Em Divertida Mente, para qual cidade Riley se muda?
   **San Francisco** / Nova York / Toronto / Chicago
3. (Fácil, Divertida Mente) Em Divertida Mente, onde as emoções trabalham dentro da cabeça de Riley?
   **No Quartel-General** / No Porão / Na Biblioteca / No Sótão
4. (Fácil, Carros) Em Carros, em qual cidadezinha McQueen fica preso?
   Portorosso / Monstrópolis / **Radiator Springs** / Santa Cecilia
5. (Média, Carros) Em Carros, que modelo de carro é a advogada Sally?
   **Um Porsche** / Um Cadillac / Uma Ferrari / Um Fusca

### Vilões

1. (Difícil, Atlantis: O Reino Perdido) Em Atlantis: O Reino Perdido, qual é o nome do comandante que trai a expedição?
   **Rourke** / Clayton / McLeach / Sykes
2. (Média, Pinóquio) Em Pinóquio, que raposa malandra engana o boneco e o leva para o teatro?
   Tod / Gideão / **João Honesto** / Stromboli
3. (Difícil, A Espada Era a Lei) Em A Espada Era a Lei, qual bruxa enfrenta Merlin num duelo de magia?
   Yzma / **Madame Min** / Malévola / Madame Medusa
4. (Difícil, Tarzan) Em Tarzan, qual é o nome do leopardo que ataca os gorilas no início?
   Rajah / Bagheera / **Sabor** / Shere Khan
5. (Média, Zootopia: Essa Cidade é o Bicho) Em Zootopia, qual era o cargo de Bellwether no gabinete de Leãonzalez?
   Juíza / Secretária do prefeito / **Vice-prefeita** / Chefe de polícia

### Músicas

1. (Média, Red: Crescer é uma Fera) Em Red: Crescer é uma Fera, qual boy band canta "Nobody Like U"?
   Boy Band 5 / **4*Town** / BTS / Os Ursos
2. (Fácil, Encanto) De que filme é a canção "Não Falamos do Bruno"?
   Wish: O Poder dos Desejos / **Encanto** / Moana / Viva - A Vida é uma Festa
3. (Difícil, Você Já Foi à Bahia?) Em Você Já Foi à Bahia?, qual é o nome do galo mexicano que forma o trio com Donald e Zé Carioca?
   Pancho Villa / Pepito / Paco / **Panchito**
4. (Fácil, A Pequena Sereia) Que filme tem a canção "Parte do Seu Mundo"?
   Cinderela / **A Pequena Sereia** / Frozen / Moana
5. (Média, O Rei Leão) Em qual canção o pequeno Simba sonha com o dia em que vai mandar em tudo?
   Se Preparem / Ciclo Sem Fim / **O Que Eu Quero Mais É Ser Rei** / Hakuna Matata

### Disney Moderno e Bichos

1. (Fácil, Aladdin) Em Aladdin, quem guarda a Caverna das Maravilhas?
   Um gênio / Um esqueleto / **Uma cabeça de tigre de areia** / Um dragão
2. (Fácil, Lilo & Stitch) Em Lilo & Stitch, Stitch é um...?
   Cachorro / Coala / Robô / **Alienígena**
3. (Fácil, O Rei Leão) Que animal é o Pumba, amigo de Simba?
   **Javali** / Rinoceronte / Suricato / Hipopótamo
4. (Média, A Nova Onda do Imperador) Em A Nova Onda do Imperador, qual é o nome do camponês que ajuda Kuzco?
   Chicha / **Pacha** / Yzma / Kronk
5. (Fácil, Aladdin) Que animal é o Abu, amigo de Aladdin?
   Tigre / Papagaio / **Macaco** / Camelo
