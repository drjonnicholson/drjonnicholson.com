import { defineCollection } from "astro:content"
import { file, glob } from "astro/loaders"
import { z } from "astro/zod"

import { ProjectTypeSchema } from "@/schemas"

import { createLocalDate } from "@/lib/date-utils"
import { dedupPreserveCase } from "@/lib/string-manipulation"

const yearMonthDateSchema = z.union([z.date(), z.string().transform(createLocalDate)]).describe("Should be valid YYYY-MM format.")

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/!(*README).md" }),
  schema: z
    .object({
      title: z.string().max(75),
      selected: z.boolean().default(false),
      fromDate: yearMonthDateSchema.optional(),
      toDate: yearMonthDateSchema.optional(),
      code: z.url().optional(),
      doc: z.url().optional(),
      paper: z.url().optional(),
      url: z.url().optional(),
      release: z.url().optional(),
      types: z.array(ProjectTypeSchema).default([]),
      skills: z
        .array(z.string().trim().min(1))
        .default([])
        .transform((arr) => dedupPreserveCase(arr)),
      description: z.string().max(200).optional(),
    })
    .refine((data) => !data.fromDate || !data.toDate || data.toDate >= data.fromDate, {
      error: "End date must be on or after start date",
    }),
})

const experience = defineCollection({
  loader: file("./src/content/experience.json"),
  schema: z.object({
    category: z.enum(["career", "research", "education", "teaching"]),
    title: z.string(),
    org: z.string(),
    orgUrl: z.url().optional(),
    startDate: yearMonthDateSchema,
    endDate: yearMonthDateSchema.optional(),
    location: z.string().optional(),
    description: z.string().optional(),
  }),
})

export const collections = { experience, projects }
