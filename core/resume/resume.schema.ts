import { z } from "zod";
import type { Resume } from "./resume.types";

const achievementsSchema = z.object({
  title: z.string(),
  items: z.array(z.string()),
});

export const resumeContactSchema = z.object({
  lastname: z.string(),
  firstname: z.string(),
  phone: z.string(),
  email: z.string(),
  location: z.string(),
  website: z.string(),
  photoUrl: z.string().optional(),
  photoBase64: z.string().optional(),
  birthdate: z.string().optional(),
});

export const resumeClientSchema = z.object({
  name: z.string(),
  date: z.string(),
  description: z.string(),
  links: z.array(z.string()).optional(),
  achievements: achievementsSchema,
});

export const resumeExperienceSchema = z.object({
  job: z.string(),
  company: z.string(),
  date: z.string(),
  current: z.boolean(),
  description: z.string(),
  achievements: achievementsSchema,
  link: z.string().optional(),
  clients: z.array(resumeClientSchema).optional(),
});

export const resumeFormationSchema = z.object({
  date: z.string(),
  school: z.string(),
  title: z.string(),
});

export const resumeSkillsSchema = z.object({
  title: z.string(),
  items: z.array(z.string()),
});

export const resumeLanguagesSchema = z.object({
  language: z.string(),
  level: z.string(),
});

export const resumeBioSchema = z.object({
  sentences: z.array(z.string()),
  skills: z.array(z.string()),
});

export const resumeProjectSchema = z.object({
  name: z.string(),
  status: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  achievements: z.array(z.string()),
});

export const sectionTitlesSchema = z.object({
  contact: z.string().optional(),
  formation: z.string().optional(),
  skills: z.string().optional(),
  languages: z.string().optional(),
  experiences: z.string().optional(),
  projects: z.string().optional(),
});

export const resumeSchema = z.object({
  title: z.string(),
  facts: z.array(z.string()).optional(),
  bio: resumeBioSchema,
  formations: z.array(resumeFormationSchema),
  contact: resumeContactSchema,
  experiences: z.array(resumeExperienceSchema),
  skills: z.array(resumeSkillsSchema),
  languages: z.array(resumeLanguagesSchema),
  projects: z.array(resumeProjectSchema).optional(),
  sectionTitles: sectionTitlesSchema.optional(),
});

// Compile-time lock: fails the build if the schema and the Resume type diverge.
type SchemaResume = z.infer<typeof resumeSchema>;
const _schemaMatchesType: Resume = {} as SchemaResume;
const _typeMatchesSchema: SchemaResume = {} as Resume;
void _schemaMatchesType;
void _typeMatchesSchema;
