# Guia de estilo - perguntas do LOTER QUIZ

Baseado na leitura de cerca de 330 perguntas do banco atual (18 por categoria x dificuldade). Público: adultos brasileiros competitivos (streamers e amigos).

## O que faz uma pergunta boa aqui

- **Curta e direta.** Média do banco: 67 caracteres. Uma frase, terminando em "?". Contexto só quando ajuda a reconhecer o assunto ("Arraial do Cabo, famosa pelas águas cristalinas, fica em qual estado?").
- **Uma resposta certa, sem discussão.** Nada de "o maior" quando a fonte varia, nada de "um dos".
- **Erradas do mesmo tipo e plausíveis.** Capital com capitais da mesma região, jogador com jogadores da mesma posição e época, clube com clubes do mesmo estado. Ex.: "Capital do Acre?" -> Rio Branco / Porto Velho / Cruzeiro do Sul / Boa Vista.
- **Alternativas com a mesma "cara".** Mesmo formato e tamanho parecido; a certa não pode ser a única longa, a única com artigo ou a única com detalhe.
- **Sem pista no enunciado.** O texto não entrega gênero, número ou palavra da resposta.
- **Brasil bem representado.** Estados, cidades, história, futebol, novelas, música e internet brasileira convivem com o conteúdo internacional.
- **Ano no enunciado só em Esportes** (regra do README do banco). Nas outras categorias a pergunta precisa funcionar sem data.

## A régua de cada dificuldade

| Nível | Quem acerta | Exemplos reais |
|---|---|---|
| facil | Quase todo adulto | "Qual é a capital do estado do Piauí?" (Teresina); "Em qual série um professor de química passa a fabricar metanfetamina?" (Breaking Bad); "Qual volante foi o capitão do Brasil no tetracampeonato?" (Dunga) |
| medio | Quem gosta do assunto ou tem boa cultura geral | "A ilha de Creta pertence a qual país?" (Grécia); "Qual faraó mandou construir a Grande Pirâmide de Gizé?" (Quéops); "Qual clube alemão tem uma arquibancada famosa chamada 'Muralha Amarela'?" (Borussia Dortmund) |
| dificil | Fã ou estudioso, mas **alcançável por raciocínio** ou cultura geral, não decoreba de almanaque | "Qual é a capital oficial da Tanzânia?" (Dodoma); "Qual elemento tem nome que significa 'portador de luz' em grego?" (Fósforo); "Qual foi o primeiro nome do buscador Google?" (BackRub) |

O nível difícil foi recalibrado no banco (907 reescritas) para ser desafiador sem ser obscuro: o jogador tem que poder pensar até a resposta ou ter ouvido falar dela.

## O que evitar

- Fato duvidoso, que mudou ou que tem fontes divergentes. **Na dúvida, não cria.**
- Palavras que envelhecem: "atual", "hoje", "atualmente", "recentemente", "o presidente atual".
- Fatos de 2020 em diante: só com o ano no texto, no máximo "medio" e, pela regra do banco, só em Esportes.
- Alternativa absurda, de outro tipo ou de piada, que ninguém marcaria.
- Pegadinha de grafia ou alternativas quase iguais ("World Web Wide" x "World Wide Web" é exceção, não regra).
- Política partidária, religião em tom polêmico, tragédias recentes, temas ofensivos.
- Perguntas em cadeia sobre o mesmo fato (o banco já tem "maior oceano" e "segundo maior oceano"; uma terceira vira repetição).
- Repetir o que já existe: rodar sempre `scripts/duplicadas.mjs`.
