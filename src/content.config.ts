import { defineCollection, z } from "astro:content";

const essays = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    cluster: z.string(),
    projectProof: z.string(),
    featured: z.boolean().default(false),
    flagship: z.boolean().default(false),
    summary: z.string().optional(),
    legacySlugs: z.array(z.string()).default([]),
    relatedIdeas: z.array(z.string()).default([]),
    relatedProjects: z.array(z.string()).default([])
  })
});

export const collections = {
  essays
};
