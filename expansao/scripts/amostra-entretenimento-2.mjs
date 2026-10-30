// Sorteio da amostra da segunda limpeza de Entretenimento (semente 20261109).
// mulberry32 + Fisher-Yates na ordem do arquivo classificacao/entretenimento-v11.json. Zero IA.
// Uso: node expansao/scripts/amostra-entretenimento-2.mjs  -> imprime as 25 que saem e as 15 estrangeiras que ficam.
import { readFileSync } from 'node:fs';
export function mulberry32(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
export function sortear(lista, n, r) { const a = lista.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, n); }
const cls = JSON.parse(readFileSync(new URL('../classificacao/entretenimento-v11.json', import.meta.url), 'utf8'));
const r = mulberry32(20261109);
const sai = sortear(cls.itens.filter(x => x.decisao === 'sai'), 25, r);
const fica = sortear(cls.itens.filter(x => x.decisao === 'fica' && x.origem === 'estrangeira'), 15, r);
for (const x of sai) console.log(['SAI', x.ref, x.dificuldade, x.motivo, x.pergunta, '=>', x.resposta].join(' | '));
for (const x of fica) console.log(['FICA', x.ref, x.dificuldade, x.tema, x.pergunta, '=>', x.resposta].join(' | '));
