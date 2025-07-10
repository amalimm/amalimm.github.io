import { z } from 'zod'

export const EducationSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  institution: z.string().min(1, 'Institution is required'),
  degree: z.string().min(1, 'Degree is required'),
  field: z.string().min(1, 'Field is required'),
  location: z.string().min(1, 'Location is required'),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Start date must be in YYYY-MM-DD format'),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'End date must be in YYYY-MM-DD format'),
  current: z.boolean(),
  gpa: z.number().min(0).max(4).optional(),
  grade: z.string().optional(),
  honors: z.array(z.string()).optional(),
  activities: z.array(z.string()).optional(),
  description: z.string().optional(),
  order: z.number().min(1, 'Order must be a positive number'),
  featured: z.boolean()
})

export type Education = z.infer<typeof EducationSchema>

export const validateEducation = (data: unknown): Education => {
  return EducationSchema.parse(data)
}

export const safeValidateEducation = (data: unknown) => {
  return EducationSchema.safeParse(data)
}