// Conferente Disney: chamadas à API da Wikipédia (UA genérico), com log de cada chamada.
import { appendFileSync } from 'node:fs';
const UA = { 'User-Agent': 'QuizConferente/1.0 (verificacao de quiz educativo)' };
export const LOG = process.env.LOGC;
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
export async function api(host, params, rotulo) {
  const url = `https://${host}/w/api.php?` + new URLSearchParams({ format: 'json', formatversion: '2', redirects: '1', ...params });
  for (let t = 0; t < 6; t++) {
    const r = await fetch(url, { headers: UA });
    if (r.status === 429 || r.status >= 500) { await espera(15000 * (t + 1)); continue; }
    const j = await r.json();
    appendFileSync(LOG, `${new Date().toISOString()} ${host} ${rotulo || params.titles || params.srsearch}\n`);
    await espera(700);
    return j;
  }
  throw new Error('falhou ' + url);
}
