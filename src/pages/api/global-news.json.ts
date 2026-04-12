import type { APIRoute } from 'astro';
import { getGlobalNews } from '../../lib/global-news';

export const prerender = true;

export const GET: APIRoute = async () => {
  const items = await getGlobalNews();

  return new Response(JSON.stringify({ items }), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
};
