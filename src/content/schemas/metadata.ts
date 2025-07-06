import { z } from 'zod'

export const SEOSchema = z.object({
  title: z.string().min(1, 'SEO title is required').max(60, 'SEO title is too long'),
  description: z.string().min(1, 'SEO description is required').max(160, 'SEO description is too long'),
  keywords: z.array(z.string()).optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().url('Invalid URL format').optional(),
  ogUrl: z.string().url('Invalid URL format').optional(),
  twitterCard: z.enum(['summary', 'summary_large_image', 'app', 'player']).default('summary_large_image'),
  twitterSite: z.string().optional(),
  twitterCreator: z.string().optional(),
  canonicalUrl: z.string().url('Invalid URL format').optional(),
  robots: z.string().default('index, follow'),
  structuredData: z.object({
    '@context': z.string().default('https://schema.org'),
    '@type': z.string().default('Person'),
    name: z.string().optional(),
    jobTitle: z.string().optional(),
    url: z.string().url('Invalid URL format').optional(),
    sameAs: z.array(z.string().url('Invalid URL format')).optional(),
    knowsAbout: z.array(z.string()).optional(),
    worksFor: z.object({
      '@type': z.string().default('Organization'),
      name: z.string().optional(),
      url: z.string().url('Invalid URL format').optional(),
    }).optional(),
  }).optional(),
})

export const SiteMetadataSchema = z.object({
  // Basic site information
  title: z.string().min(1, 'Site title is required').max(60, 'Site title is too long'),
  description: z.string().min(1, 'Site description is required').max(160, 'Site description is too long'),
  author: z.string().min(1, 'Author is required'),
  siteUrl: z.string().url('Invalid URL format'),
  
  // Languages and localization
  language: z.string().default('en'),
  locale: z.string().default('en_US'),
  
  // SEO
  seo: SEOSchema,
  
  // Analytics
  analytics: z.object({
    googleAnalyticsId: z.string().optional(),
    googleTagManagerId: z.string().optional(),
    hotjarId: z.string().optional(),
    mixpanelId: z.string().optional(),
  }).optional(),
  
  // Social media
  social: z.object({
    github: z.string().url('Invalid URL format').optional(),
    linkedin: z.string().url('Invalid URL format').optional(),
    twitter: z.string().url('Invalid URL format').optional(),
    instagram: z.string().url('Invalid URL format').optional(),
    youtube: z.string().url('Invalid URL format').optional(),
  }).optional(),
  
  // Features
  features: z.object({
    darkMode: z.boolean().default(false),
    animations: z.boolean().default(true),
    blog: z.boolean().default(false),
    contact: z.boolean().default(true),
    resume: z.boolean().default(true),
  }).optional(),
  
  // Contact information
  contact: z.object({
    email: z.string().email('Invalid email format').optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    calendly: z.string().url('Invalid URL format').optional(),
  }).optional(),
  
  // Timestamps
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
})

export const PageMetadataSchema = z.object({
  title: z.string().min(1, 'Page title is required').max(60, 'Page title is too long'),
  description: z.string().min(1, 'Page description is required').max(160, 'Page description is too long'),
  path: z.string().min(1, 'Page path is required'),
  
  // SEO
  seo: SEOSchema.optional(),
  
  // Page-specific settings
  showInNavigation: z.boolean().default(true),
  navigationOrder: z.number().default(0),
  
  // Access control
  protected: z.boolean().default(false),
  
  // Timestamps
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
})

export type SEO = z.infer<typeof SEOSchema>
export type SiteMetadata = z.infer<typeof SiteMetadataSchema>
export type PageMetadata = z.infer<typeof PageMetadataSchema>

// Validation functions
export const validateSEO = (data: unknown): SEO => {
  return SEOSchema.parse(data)
}

export const safeValidateSEO = (data: unknown) => {
  return SEOSchema.safeParse(data)
}

export const validateSiteMetadata = (data: unknown): SiteMetadata => {
  return SiteMetadataSchema.parse(data)
}

export const safeValidateSiteMetadata = (data: unknown) => {
  return SiteMetadataSchema.safeParse(data)
}

export const validatePageMetadata = (data: unknown): PageMetadata => {
  return PageMetadataSchema.parse(data)
}

export const safeValidatePageMetadata = (data: unknown) => {
  return PageMetadataSchema.safeParse(data)
}