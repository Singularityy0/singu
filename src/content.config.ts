import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * blog posts are markdown files in src/content/blog.
 * the file name is the url: src/content/blog/hello.md -> /blog/hello
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** drafts build locally with `npm run dev` but never ship */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
