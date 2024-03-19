export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_BSpm17O3.mjs').then(n => n.r);

export { page };
