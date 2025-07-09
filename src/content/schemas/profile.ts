import { z } from 'zod'

export const ProfileSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  title: z.string().min(1, 'Title is required').max(200, 'Title is too long'),
  headline: z.string().min(1, 'Headline is required').max(300, 'Headline is too long'),
  description: z.string().min(1, 'Description is required').max(500, 'Description is too long'),
  location: z.string().optional(),
  email: z.string().email('Invalid email format').optional(),
  phone: z.string().optional(),
  website: z.string().url('Invalid URL format').optional(),
  avatar: z.string().url('Invalid URL format').optional(),
  resume: z.string().url('Invalid URL format').optional(),
  
  // Social links
  social: z.object({
    github: z.string().url('Invalid URL format').optional(),
    linkedin: z.string().url('Invalid URL format').optional(),
    twitter: z.string().url('Invalid URL format').optional(),
    instagram: z.string().url('Invalid URL format').optional(),
    youtube: z.string().url('Invalid URL format').optional(),
    dribbble: z.string().url('Invalid URL format').optional(),
    behance: z.string().url('Invalid URL format').optional(),
    medium: z.string().url('Invalid URL format').optional(),
    dev: z.string().url('Invalid URL format').optional(),
  }).optional(),
  
  // Stats for hero section
  stats: z.array(z.object({
    label: z.string().min(1, 'Label is required'),
    value: z.string().min(1, 'Value is required'),
    icon: z.string().optional(),
  })).optional(),
  
  // Call to action buttons
  cta: z.object({
    primary: z.object({
      text: z.string().min(1, 'Primary CTA text is required'),
      href: z.string().min(1, 'Primary CTA href is required'),
      external: z.boolean().default(false),
    }),
    secondary: z.object({
      text: z.string().min(1, 'Secondary CTA text is required'),
      href: z.string().min(1, 'Secondary CTA href is required'),
      external: z.boolean().default(false),
    }).optional(),
  }).optional(),
  
  // Dynamic fields (calculated from other data)
  availability: z.enum(['available', 'busy', 'unavailable']).optional(),
  featuredTechnologies: z.array(z.string()).optional(),
  latestProject: z.any().optional(),
  lastUpdated: z.string().optional(),
  
  // LinkedIn-style fields
  professionalSummary: z.string().optional(),
  industry: z.string().optional(),
  specialization: z.string().optional(),
  interests: z.array(z.string()).optional(),
  languages: z.array(z.object({
    name: z.string(),
    proficiency: z.string()
  })).optional(),
  
  // Professional metrics
  connectionCount: z.number().optional(),
  profileViews: z.number().optional(),
  searchAppearances: z.number().optional(),
})

export type Profile = z.infer<typeof ProfileSchema>

// Default validation function
export const validateProfile = (data: unknown): Profile => {
  return ProfileSchema.parse(data)
}

// Safe validation function that returns errors
export const safeValidateProfile = (data: unknown) => {
  return ProfileSchema.safeParse(data)
}