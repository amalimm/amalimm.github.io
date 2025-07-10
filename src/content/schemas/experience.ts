import { z } from 'zod'

export const ExperienceSchema = z.object({
  id: z.string().min(1, 'Experience ID is required'),
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  company: z.string().min(1, 'Company is required').max(100, 'Company is too long'),
  location: z.string().optional(),
  type: z.enum(['full-time', 'part-time', 'contract', 'internship', 'freelance', 'volunteer']),
  remote: z.boolean().default(false),
  
  // Dates
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)').optional(),
  current: z.boolean().default(false),
  
  // Content
  description: z.string().min(1, 'Description is required').max(500, 'Description is too long'),
  achievements: z.array(z.string()).optional(),
  responsibilities: z.array(z.string()).optional(),
  
  // Technical details
  technologies: z.array(z.string()).optional(),
  skills: z.array(z.string()).optional(),
  
  // Company details
  companyLogo: z.string().url('Invalid URL format').optional(),
  companyWebsite: z.string().url('Invalid URL format').optional(),
  companySize: z.enum(['startup', 'small', 'medium', 'large', 'enterprise']).optional(),
  industry: z.string().optional(),
  
  // Metrics
  teamSize: z.number().positive().optional(),
  reportsTo: z.string().optional(),
  
  // Sorting
  order: z.number().default(0),
  featured: z.boolean().default(false),
  
  // Timestamps
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
})


export type Experience = z.infer<typeof ExperienceSchema>

// Validation functions
export const validateExperience = (data: unknown): Experience => {
  return ExperienceSchema.parse(data)
}

export const safeValidateExperience = (data: unknown) => {
  return ExperienceSchema.safeParse(data)
}