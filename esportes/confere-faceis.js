// Confere a entrada das fáceis novas e as 5 correções do banco Esportes.
// Uso: node esportes/confere-faceis.js [commit-base]   (padrão: 3331073, a main antes desta entrega)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const base = process.argv[2] || '3331073';
const antes = JSON.parse(execSync(`git show ${base}:esportes/perguntas.json`, { encoding: 'utf8', maxBuffer: 50e6 }));
const bruto = fs.readFileSync(path.join(__dirname, 'perguntas.json'), 'utf8');
const depois = JSON.parse(bruto);

// Únicos itens antigos que podem mudar (as correções do relatório), e só nestes campos
const CORRIGIDOS = { 52: ['pergunta', 'resposta', 'alternativas'], 1079: ['pergunta'], 2272: ['pergunta'] };
const CAMPOS = ['categoria', 'dificuldade', 'pergunta', 'resposta', 'alternativas'];
const falhas = [];
const avisos = [];

if (JSON.stringify(depois) !== bruto) falhas.push('formato do arquivo mudou (esperado JSON numa linha, como antes)');
if (depois.length < antes.length) falhas.push(`banco encolheu: ${antes.length} -> ${depois.length}`);

// 1) antigos: mesma ordem e mesmo conteúdo, salvo as correções
antes.forEach((a, i) => {
  const d = depois[i];
  for (const campo of CAMPOS) {
    if (JSON.stringify(a[campo]) === JSON.stringify(d[campo])) continue;
    if (!(CORRIGIDOS[i] || []).includes(campo)) falhas.push(`#${i}: campo "${campo}" mudou sem estar na lista de correções`);
  }
});

// 2) formato de cada item (antigos corrigidos e novos)
const novos = depois.slice(antes.length);
const validar = (q, rot) => {
  if (JSON.stringify(Object.keys(q)) !== JSON.stringify(CAMPOS)) falhas.push(`${rot}: campos fora do formato`);
  if (q.categoria !== 'Esportes') falhas.push(`${rot}: categoria "${q.categoria}"`);
  if (!Array.isArray(q.alternativas) || q.alternativas.length !== 4) falhas.push(`${rot}: precisa de 4 alternativas`);
  else {
    if (new Set(q.alternativas).size !== 4) falhas.push(`${rot}: alternativas repetidas`);
    if (!q.alternativas.includes(q.resposta)) falhas.push(`${rot}: resposta fora das alternativas`);
  }
  const texto = [q.pergunta, q.resposta, ...(q.alternativas || [])].join(' ');
  if (/[\u2013\u2014]/.test(texto)) falhas.push(`${rot}: travessão longo`);
  if (!q.pergunta.trim().endsWith('?')) avisos.push(`${rot}: pergunta sem "?"`);
};
Object.keys(CORRIGIDOS).forEach((i) => validar(depois[i], `#${i}`));
novos.forEach((q, k) => {
  validar(q, `nova #${antes.length + k}`);
  if (q.dificuldade !== 'facil') falhas.push(`nova #${antes.length + k}: dificuldade "${q.dificuldade}" (esperado facil)`);
});

// 3) duplicatas: texto normalizado igual, ou mesma resposta com pergunta muito parecida
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const PARADAS = new Set('a o as os de da do das dos e em no na nos nas um uma qual quais que quem com por para foi era sao como quantos quantas pelo pela ao se seu sua mais'.split(' '));
const palavras = (s) => new Set(norm(s).split(' ').filter((w) => w.length > 2 && !PARADAS.has(w)));
const jaccard = (x, y) => { let c = 0; x.forEach((w) => y.has(w) && c++); return c / (x.size + y.size - c || 1); };
// Pares que o critério marca mas foram conferidos à mão e são fatos diferentes (nova -> antiga), por texto
const NAO_DUPLICA = [
  ['Qual seleção foi campeã da Copa do Mundo de 2010, na África do Sul?', 'Qual seleção foi campeã da Copa do Mundo de 2026?'],
  ['Quantos títulos mundiais de Fórmula 1 Ayrton Senna conquistou?', 'Quantos títulos mundiais Nelson Piquet conquistou na Fórmula 1?'],
];
const liberado = (x, y) => NAO_DUPLICA.some(([a, b]) => (a === x && b === y) || (a === y && b === x));
const todos = depois.map((q, i) => ({ i, t: norm(q.pergunta), r: norm(q.resposta), w: palavras(q.pergunta) }));
for (let k = antes.length; k < todos.length; k++) {
  const n = todos[k];
  for (let j = 0; j < k; j++) {
    const o = todos[j];
    if (n.t === o.t) falhas.push(`nova #${k}: texto igual ao #${j}`);
    else if (n.r === o.r && jaccard(n.w, o.w) >= 0.5 && !liberado(depois[k].pergunta, depois[j].pergunta)) falhas.push(`nova #${k}: mesmo tema e resposta do #${j}`);
    else if (n.r === o.r && jaccard(n.w, o.w) >= 0.3) avisos.push(`nova #${k}: parecida com #${j} (mesma resposta)`);
  }
}

// 4) contagem
const niveis = ['facil', 'medio', 'dificil'];
const cont = Object.fromEntries(niveis.map((n) => [n, depois.filter((q) => q.dificuldade === n).length]));
const pct = (x) => (100 * x / depois.length).toFixed(1) + '%';
console.log('total', depois.length, '| novas', novos.length);
console.log(niveis.map((n) => `${n} ${cont[n]} (${pct(cont[n])})`).join(' | '));
if (cont.facil < 0.2 * depois.length) falhas.push(`fácil abaixo de 20%: ${pct(cont.facil)}`);
if (avisos.length) console.log(`AVISOS (${avisos.length}), conferir à mão:\n` + avisos.join('\n'));
if (falhas.length) {
  console.log(`FALHOU (${falhas.length}):\n` + falhas.slice(0, 60).join('\n'));
  process.exit(1);
}
console.log('OK: antigos intactos (fora as correções listadas), novas no formato, sem duplicata, fácil >= 20%.');
