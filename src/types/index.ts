export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  level: number
  icon: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
}

export interface Social {
  name: string
  url: string
  icon: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface Theme {
  isDark: boolean
}