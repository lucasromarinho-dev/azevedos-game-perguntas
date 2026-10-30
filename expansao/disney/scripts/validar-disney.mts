// Valida perguntas-disney.json de dois jeitos, sem mexer no jogo:
//  1) com o montarBanco REAL do jogo (mostra o que ele recusa: hoje ele só conhece as 6 categorias normais);
//  2) com uma cópia do montarBanco que recebe a lista de categorias como parâmetro (as 6 do banco Disney).
// A cópia repete as mesmas regras de motivoInvalida/montarBanco de quest-online .../shared/perguntas.ts
// e usa as DIFICULDADES reais de protocolo.ts.
// Uso: npx tsx expansao/disney/scripts/validar-disney.mts expansao/disney/perguntas-disney.json ["Cat1,Cat2"]
//  O 2º parâmetro (opcional) troca a lista de categorias da cópia; ex.: "Desenhos" para o modo Desenhos.
import { readFileSync } from 'node:fs';

const raiz = process.env.QUEST_SHARED ||
  'file:///C:/Users/lucas/Documents/Projetos%20Claude/quest-online-wt-juncao/src/jogos/quest/shared/';
const { montarBanco } = await import(raiz + 'perguntas.ts');
const { DIFICULDADES, CATEGORIAS } = await import(raiz + 'protocolo.ts');

export const CATEGORIAS_DISNEY = ['Clássicos Disney', 'Princesas', 'Pixar', 'Vilões', 'Músicas', 'Disney Moderno e Bichos'] as const;

/** Cópia de motivoInvalida com a lista de categorias como parâmetro. */
function motivoInvalidaCom(categorias: readonly string[], p: unknown): string | null {
  const q = p as Record<string, unknown> | null;
  if (!q || typeof q !== 'object') return 'não é um objeto';
  if (typeof q.categoria !== 'string' || !categorias.includes(q.categoria)) return `categoria desconhecida: ${String(q.categoria)}`;
  if (!(DIFICULDADES as readonly string[]).includes(q.dificuldade as string)) return `dificuldade inválida: ${String(q.dificuldade)}`;
  if (typeof q.pergunta !== 'string' || !q.pergunta.trim()) return 'enunciado vazio';
  if (typeof q.resposta !== 'string' || !q.resposta.trim()) return 'resposta vazia';
  const alts = q.alternativas as unknown;
  if (!Array.isArray(alts) || alts.length !== 4) return 'precisa ter exatamente 4 alternativas';
  if (alts.some((a) => typeof a !== 'string' || !a.trim())) return 'alternativa vazia';
  if (new Set(alts).size !== 4) return 'alternativas repetidas';
  if (!alts.includes(q.resposta)) return 'a resposta não está entre as alternativas';
  return null;
}

/** Cópia de montarBanco com a lista de categorias como parâmetro. */
export function montarBancoCom(categorias: readonly string[], cru: unknown) {
  if (!Array.isArray(cru)) throw new Error('O arquivo de perguntas precisa ser uma lista (array) JSON.');
  const descartadas: { indice: number; motivo: string }[] = [];
  const perguntas: unknown[] = [];
  cru.forEach((p, indice) => {
    const motivo = motivoInvalidaCom(categorias, p);
    if (motivo) descartadas.push({ indice, motivo });
    else perguntas.push(p);
  });
  const porChave = new Map<string, number>();
  for (const p of perguntas as { categoria: string; dificuldade: string }[]) {
    const k = `${p.categoria}|${p.dificuldade}`;
    porChave.set(k, (porChave.get(k) ?? 0) + 1);
  }
  return { relatorio: { validas: perguntas.length, descartadas }, porChave };
}

const bruto = readFileSync(process.argv[2]);
const cru = JSON.parse(bruto.toString('utf8'));
const real = montarBanco(cru).relatorio;
const motivosReal = new Map<string, number>();
for (const d of real.descartadas) motivosReal.set(d.motivo, (motivosReal.get(d.motivo) ?? 0) + 1);
const categoriasCopia: readonly string[] = process.argv[3] ? process.argv[3].split(",").map((s) => s.trim()) : CATEGORIAS_DISNEY;
const copia = montarBancoCom(categoriasCopia, cru);
const enunciados = new Set((cru as { pergunta: string }[]).map((p) => p.pergunta));
console.log(JSON.stringify({
  arquivo: { bytes: bruto.length, bom: bruto[0] === 0xef, quebraNoFim: bruto[bruto.length - 1] === 0x0a, linhas: bruto.toString('utf8').split('\n').length },
  montarBanco_real: { categorias_do_jogo: CATEGORIAS, validas: real.validas, descartadas: real.descartadas.length, motivos: Object.fromEntries(motivosReal) },
  montarBanco_copia_categorias_parametro: { categorias: categoriasCopia, validas: copia.relatorio.validas, descartadas: copia.relatorio.descartadas.length, exemplos: copia.relatorio.descartadas.slice(0, 5), porChave: Object.fromEntries(copia.porChave) },
  enunciados_duplicados: (cru as unknown[]).length - enunciados.size,
}, null, 1));
