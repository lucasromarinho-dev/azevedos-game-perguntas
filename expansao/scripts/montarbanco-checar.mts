// Roda o montarBanco real do jogo sobre um JSON de perguntas e imprime o relatório.
// Uso: QUEST_PERGUNTAS_TS=file:///.../perguntas.ts npx tsx montarbanco-checar.mts banco.json
import { readFileSync } from 'node:fs';

const alvo = process.env.QUEST_PERGUNTAS_TS ||
  'file:///C:/Users/lucas/Documents/Projetos%20Claude/quest-online-wt-juncao/src/jogos/quest/shared/perguntas.ts';
const { montarBanco } = await import(alvo);
const cru = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const { relatorio } = montarBanco(cru);
console.log(JSON.stringify({ validas: relatorio.validas, descartadas: relatorio.descartadas.length, exemplos: relatorio.descartadas.slice(0, 5) }));
