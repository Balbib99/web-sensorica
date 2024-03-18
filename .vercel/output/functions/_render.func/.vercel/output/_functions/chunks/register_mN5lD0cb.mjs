export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_domNbcec.mjs').then(n => n.c);

export { page };
