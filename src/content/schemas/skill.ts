import { z } from 'zod'

export const SkillSchema = z.object({
  id: z.string().min(1, 'Skill ID is required'),
  name: z.string().min(1, 'Skill name is required').max(50, 'Skill name is too long'),
  category: z.enum([
    'frontend',
    'backend',
    'database',
    'devops',
    'mobile',
    'ai/ml',
    'design',
    'soft-skills',
    'tools',
    'languages',
    'frameworks',
    'other'
  ]),
  proficiency: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).default('intermediate'),
  
  // Visual
  icon: z.string().optional(),
  color: z.string().optional(),
  logo: z.string().url('Invalid URL format').optional(),
  
  // Details
  description: z.string().optional(),
  yearsOfExperience: z.number().min(0).max(50).optional(),
  
  // Evidence
  projects: z.array(z.string()).optional(), // Project IDs
  certifications: z.array(z.string()).optional(), // Certification IDs
  
  // Links
  documentationUrl: z.string().url('Invalid URL format').optional(),
  learningResource: z.string().url('Invalid URL format').optional(),
  
  // Metadata
  featured: z.boolean().default(false),
  order: z.number().default(0),
  tags: z.array(z.string()).optional(),
  
  // Timestamps
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
})

export const SkillCategorySchema = z.object({
  id: z.string().min(1, 'Category ID is required'),
  name: z.string().min(1, 'Category name is required').max(50, 'Category name is too long'),
  description: z.string().optional(),
  icon: z.string().optional(),
  color: z.string().optional(),
  order: z.number().default(0),
  featured: z.boolean().default(false),
})

export const SkillGroupSchema = z.object({
  category: SkillCategorySchema,
  skills: z.array(SkillSchema).min(1, 'At least one skill is required'),
})

export type Skill = z.infer<typeof SkillSchema>
export type SkillCategory = z.infer<typeof SkillCategorySchema>
export type SkillGroup = z.infer<typeof SkillGroupSchema>

// Validation functions
export const validateSkill = (data: unknown): Skill => {
  return SkillSchema.parse(data)
}

export const safeValidateSkill = (data: unknown) => {
  return SkillSchema.safeParse(data)
}

export const validateSkillCategory = (data: unknown): SkillCategory => {
  return SkillCategorySchema.parse(data)
}

export const safeValidateSkillCategory = (data: unknown) => {
  return SkillCategorySchema.safeParse(data)
}

export const validateSkillGroup = (data: unknown): SkillGroup => {
  return SkillGroupSchema.parse(data)
}