import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'Conceptos clave',
      'Fotomultas',
      'Trámites',
      'Cobro y embargos',
    ]),
    order: z.number().default(0),
    updatedDate: z.coerce.date(),
  }),
});

export const collections = { blog };
