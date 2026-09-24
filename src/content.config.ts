import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file, glob } from 'astro/loaders';

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    date: z.coerce.date(),
    type: z.enum(['conference', 'workshop', 'preprint', 'journal', 'thesis', 'other']),
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
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    date: z.coerce.date(),
    links: z.object({
      code: z.string().optional(),
      blog: z.string().optional(),
    }),
  }),
});

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blogs' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { publications, projects, blogs };
