import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['conference', 'workshop', 'preprint', 'journal', 'thesis']),
    selected: z.boolean().default(false),
    links: z.object({
      pdf: z.string().optional(),
      arxiv: z.string().optional(),
      code: z.string().optional(),
      page: z.string().optional(),
      bib: z.string().optional(),
    }),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/contents/projects' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    date: z.coerce.date(),
    stack: z.array(z.string()).optional(),
  }),
});

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/contents/blogs' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.coerce.date(),
    content: z.string(),
  }),
})

export const collections = { publications, projects, blogs };
