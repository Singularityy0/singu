import type { APIContext } from "astro";
import { getPosts } from "../data/posts";

/** every public page, so search engines don't have to guess */
export async function GET({ site }: APIContext) {
  const pages = ["/", "/builds", "/proof", "/human", "/blog", "/contact"];
  const posts = (await getPosts()).map((p) => `/blog/${p.id}`);

  const urls = [...pages, ...posts]
    .map((path) => `<url><loc>${new URL(path, site).href}</loc></url>`)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
