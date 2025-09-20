import { file } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const currentFilms = defineCollection({
  loader: file('./src/content/2025-films.json'),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    synopsis: z.string(),
    showTime: z.coerce.date(),
    tags: z.array(z.string()),
    trailerUrl: z.string(),
    webUrl: z.string(),
  }),
});

export const collections = { currentFilms };
