import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			tag: z.enum(['article', 'event-recap', 'policy', 'video']).default('article'),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			author: z.string().default('PauseAI Nigeria'),
			heroImage: z.optional(image()),
		}),
});

const events = defineCollection({
	loader: glob({ base: './src/content/events', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			city: z.string(),
			location: z.string(),
			description: z.string(),
			rsvpUrl: z.string().url().optional(),
			status: z.enum(['upcoming', 'past']),
			recapBody: z.string().optional(),
			photos: z.array(image()).optional(),
		}),
});

const policyTracker = defineCollection({
	loader: glob({ base: './src/content/policy-tracker', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		institution: z.string(),
		status: z.enum(['Active engagement', 'No public stance', 'Under review', 'Consulted PauseAI']),
		stance: z.string(),
		latestAction: z.string(),
		ask: z.string(),
		summary: z.string(),
		sourceUrl: z.string().url(),
		eventDate: z.coerce.date(),
	}),
});

const team = defineCollection({
	loader: glob({ base: './src/content/team', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			role: z.string(),
			bio: z.string(),
				email: z.string().email().optional(),
			linkedin: z.string().url(),
			order: z.number().int().nonnegative().default(0),
			photo: image().optional(),
		}),
});

export const collections = { blog, events, policyTracker, team };