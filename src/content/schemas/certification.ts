import { z } from 'zod'

export const CertificationSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  name: z.string().min(1, 'Name is required'),
  issuer: z.string().min(1, 'Issuer is required'),
  credentialId: z.string().min(1, 'Credential ID is required'),
  issueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Issue date must be in YYYY-MM-DD format'),
  expirationDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Expiration date must be in YYYY-MM-DD format').nullable(),
  credentialUrl: z.string().url('Must be a valid URL').optional(),
  verificationUrl: z.string().url('Must be a valid URL').nullable(),
  description: z.string().min(1, 'Description is required'),
  skills: z.array(z.string()).min(1, 'At least one skill is required'),
  order: z.number().min(1, 'Order must be a positive number'),
  featured: z.boolean()
})

export type Certification = z.infer<typeof CertificationSchema>

export const validateCertification = (data: unknown): Certification => {
  return CertificationSchema.parse(data)
}

export const safeValidateCertification = (data: unknown) => {
  return CertificationSchema.safeParse(data)
}