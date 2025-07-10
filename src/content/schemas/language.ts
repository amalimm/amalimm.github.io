import { z } from 'zod'

export const LanguageSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  name: z.string().min(1, 'Name is required'),
  proficiency: z.enum(['native', 'bilingual', 'professional', 'conversational', 'elementary'], {
    errorMap: () => ({ message: 'Proficiency must be one of: native, bilingual, professional, conversational, elementary' })
  }),
  proficiencyDescription: z.string().min(1, 'Proficiency description is required'),
  icon: z.string().min(1, 'Icon is required'),
  order: z.number().min(1, 'Order must be a positive number'),
  featured: z.boolean()
})

export type Language = z.infer<typeof LanguageSchema>

export const validateLanguage = (data: unknown): Language => {
  return LanguageSchema.parse(data)
}

export const safeValidateLanguage = (data: unknown) => {
  return LanguageSchema.safeParse(data)
}