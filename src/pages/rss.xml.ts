import type { APIContext } from "astro";
import { getPosts } from "../data/posts";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function GET({ site }: APIContext) {
  const posts = await getPosts();
  const items = posts
    .map((p) => {
      const url = new URL(`/blog/${p.id}`, site).href;
      return `<item><title>${esc(p.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${p.data.date.toUTCString()}</pubDate></item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>singu's blog</title><link>${new URL("/blog", site).href}</link><description>defi, rust, math, and whatever else.</description>${items}</channel></rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
