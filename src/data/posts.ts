import { getCollection } from "astro:content";

/** published posts, newest first. drafts show up in dev only. */
export async function getPosts() {
  const posts = await getCollection("blog", (p) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** 2026-11-21, the only date format anyone needs */
export const ymd = (d: Date) => d.toISOString().slice(0, 10);
