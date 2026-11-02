// Confere que a recalibração só mexeu no campo "dificuldade".
// Uso: node esportes/confere-recalibracao.js [commit-base]   (padrão: bcc1e97, a main antes da recalibração)
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const base = process.argv[2] || 'bcc1e97';
const arquivo = path.join(__dirname, 'perguntas.json');
const antes = JSON.parse(execSync(`git show ${base}:esportes/perguntas.json`, { encoding: 'utf8', maxBuffer: 50e6 }));
const brutoDepois = fs.readFileSync(arquivo, 'utf8');
const depois = JSON.parse(brutoDepois);

const falhas = [];
const niveis = ['facil', 'medio', 'dificil'];
if (antes.length !== depois.length) falhas.push(`tamanho mudou: ${antes.length} -> ${depois.length}`);
if (JSON.stringify(depois) !== brutoDepois) falhas.push('formato do arquivo mudou (esperado JSON numa linha, como antes)');

let mudaram = 0;
const contagem = (lista) => Object.fromEntries(niveis.map((n) => [n, lista.filter((q) => q.dificuldade === n).length]));
antes.forEach((a, i) => {
  const d = depois[i];
  if (!d) return;
  if (JSON.stringify(Object.keys(a)) !== JSON.stringify(Object.keys(d))) falhas.push(`#${i}: campos mudaram`);
  for (const campo of Object.keys(a)) {
    if (campo === 'dificuldade') continue;
    if (JSON.stringify(a[campo]) !== JSON.stringify(d[campo])) falhas.push(`#${i}: campo "${campo}" mudou`);
  }
  if (!niveis.includes(d.dificuldade)) falhas.push(`#${i}: nível inválido "${d.dificuldade}"`);
  if (a.dificuldade !== d.dificuldade) mudaram++;
});

console.log('antes ', contagem(antes));
console.log('depois', contagem(depois));
console.log('mudaram', mudaram, 'de', antes.length);
if (falhas.length) {
  console.log('FALHOU:\n' + falhas.slice(0, 50).join('\n'));
  process.exit(1);
}
console.log('OK: só o campo dificuldade mudou; mesma ordem, mesmo texto, JSON válido.');
