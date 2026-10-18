import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        category: z.enum(['AI safety', 'Cybersecurity']),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().default(false),
        // Optional header image. When set, it replaces the header's contour strip.
        cover: image().optional(),
        coverAlt: z.string().optional(),
      })
      .refine((post) => !post.cover || post.coverAlt, {
        message: 'coverAlt is required when cover is set',
        path: ['coverAlt'],
      }),
});

export const collections = { blog };
