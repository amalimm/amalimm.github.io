import { z } from 'zod'

export const TechnologySchema = z.object({
  name: z.string().min(1, 'Technology name is required'),
  color: z.string().optional(),
  icon: z.string().optional(),
  category: z.enum(['frontend', 'backend', 'database', 'devops', 'mobile', 'ai/ml', 'design', 'other']).optional(),
})

export const ProjectLinkSchema = z.object({
  type: z.enum(['website', 'github', 'demo', 'documentation', 'video', 'article', 'other']),
  url: z.string().url('Invalid URL format'),
  label: z.string().min(1, 'Link label is required'),
})

export const ProjectImageSchema = z.object({
  url: z.string().url('Invalid URL format'),
  alt: z.string().min(1, 'Alt text is required'),
  caption: z.string().optional(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
})

export const ProjectSchema = z.object({
  id: z.string().min(1, 'Project ID is required'),
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  description: z.string().min(1, 'Description is required').max(500, 'Description is too long'),
  longDescription: z.string().optional(),
  category: z.enum(['web', 'mobile', 'desktop', 'ai/ml', 'design', 'other']),
  status: z.enum(['completed', 'in-progress', 'planned', 'archived']).default('completed'),
  featured: z.boolean().default(false),
  
  // Dates
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)').optional(),
  
  // Media
  thumbnail: z.string().url('Invalid URL format'),
  images: z.array(ProjectImageSchema).optional(),
  video: z.string().url('Invalid URL format').optional(),
  
  // Technical details
  technologies: z.array(TechnologySchema).min(1, 'At least one technology is required'),
  links: z.array(ProjectLinkSchema).min(1, 'At least one link is required'),
  
  // Metadata
  tags: z.array(z.string()).optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  teamSize: z.number().positive().optional(),
  role: z.string().optional(),
  
  // SEO
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional(),
  }).optional(),
  
  // Sorting
  order: z.number().default(0),
  
  // Timestamps
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
})

export type Technology = z.infer<typeof TechnologySchema>
export type ProjectLink = z.infer<typeof ProjectLinkSchema>
export type ProjectImage = z.infer<typeof ProjectImageSchema>
export type Project = z.infer<typeof ProjectSchema>

// Validation functions
export const validateProject = (data: unknown): Project => {
  return ProjectSchema.parse(data)
}

export const safeValidateProject = (data: unknown) => {
  return ProjectSchema.safeParse(data)
}

export const validateTechnology = (data: unknown): Technology => {
  return TechnologySchema.parse(data)
}

export const safeValidateTechnology = (data: unknown) => {
  return TechnologySchema.safeParse(data)
}