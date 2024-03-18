export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_domNbcec.mjs').then(n => n.s);

export { page };
