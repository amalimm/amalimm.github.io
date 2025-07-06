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

export const EducationSchema = z.object({
  id: z.string().min(1, 'Education ID is required'),
  degree: z.string().min(1, 'Degree is required').max(100, 'Degree is too long'),
  field: z.string().min(1, 'Field of study is required').max(100, 'Field is too long'),
  institution: z.string().min(1, 'Institution is required').max(100, 'Institution is too long'),
  location: z.string().optional(),
  
  // Dates
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)').optional(),
  current: z.boolean().default(false),
  
  // Academic details
  gpa: z.number().min(0).max(4).optional(),
  honors: z.array(z.string()).optional(),
  activities: z.array(z.string()).optional(),
  coursework: z.array(z.string()).optional(),
  
  // Institution details
  logo: z.string().url('Invalid URL format').optional(),
  website: z.string().url('Invalid URL format').optional(),
  
  // Sorting
  order: z.number().default(0),
  
  // Timestamps
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
})

export const CertificationSchema = z.object({
  id: z.string().min(1, 'Certification ID is required'),
  name: z.string().min(1, 'Certification name is required').max(100, 'Name is too long'),
  issuer: z.string().min(1, 'Issuer is required').max(100, 'Issuer is too long'),
  credentialId: z.string().optional(),
  
  // Dates
  issueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  expirationDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)').optional(),
  
  // Links
  credentialUrl: z.string().url('Invalid URL format').optional(),
  verificationUrl: z.string().url('Invalid URL format').optional(),
  
  // Details
  description: z.string().optional(),
  skills: z.array(z.string()).optional(),
  
  // Issuer details
  issuerLogo: z.string().url('Invalid URL format').optional(),
  issuerWebsite: z.string().url('Invalid URL format').optional(),
  
  // Sorting
  order: z.number().default(0),
  featured: z.boolean().default(false),
  
  // Timestamps
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
})

export type Experience = z.infer<typeof ExperienceSchema>
export type Education = z.infer<typeof EducationSchema>
export type Certification = z.infer<typeof CertificationSchema>

// Validation functions
export const validateExperience = (data: unknown): Experience => {
  return ExperienceSchema.parse(data)
}

export const safeValidateExperience = (data: unknown) => {
  return ExperienceSchema.safeParse(data)
}

export const validateEducation = (data: unknown): Education => {
  return EducationSchema.parse(data)
}

export const safeValidateEducation = (data: unknown) => {
  return EducationSchema.safeParse(data)
}

export const validateCertification = (data: unknown): Certification => {
  return CertificationSchema.parse(data)
}

export const safeValidateCertification = (data: unknown) => {
  return CertificationSchema.safeParse(data)
}