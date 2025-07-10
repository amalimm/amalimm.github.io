import { z } from 'zod'

export const HighlightSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  title: z.string().min(1, 'Title is required'),
  url: z.string().url('Must be a valid URL'),
  description: z.string().min(1, 'Description is required'),
  type: z.enum(['project', 'publication', 'portfolio', 'research', 'other'], {
    errorMap: () => ({ message: 'Type must be one of: project, publication, portfolio, research, other' })
  }),
  platform: z.string().optional(),
  order: z.number().min(1, 'Order must be a positive number'),
  featured: z.boolean()
})

export type Highlight = z.infer<typeof HighlightSchema>

export const validateHighlight = (data: unknown): Highlight => {
  return HighlightSchema.parse(data)
}

export const safeValidateHighlight = (data: unknown) => {
  return HighlightSchema.safeParse(data)
}