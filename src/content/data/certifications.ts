export interface Certification {
  id: string
  name: string
  issuer: string
  credentialId: string
  issueDate: string
  expirationDate?: string | null
  credentialUrl?: string
  verificationUrl?: string
  description: string
  skills: string[]
  order: number
  featured: boolean
}

export const certifications: Certification[] = [
  {
    id: "python-for-beginners",
    name: "Python For Beginners",
    issuer: "OpenCV University",
    credentialId: "e9348bf5ce6a45688900023f803c1736",
    issueDate: "2024-08-01",
    expirationDate: null,
    
    credentialUrl: "https://opencv.org/university/",
    verificationUrl: null,
    
    description: "Self-paced learning Python programming fundamentals and basic programming concepts",
    
    skills: [
      "Python (Programming Language)"
    ],
    
    order: 1,
    featured: true
  }
]