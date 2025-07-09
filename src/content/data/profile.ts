import { Profile } from '../schemas/profile'
import { 
  calculateYearsOfExperience,
  calculateCompletedProjects,
  calculateTechnologiesMastered,
  getCurrentWorkStatus,
  getFeaturedTechnologies,
  getCurrentLocation,
  getDynamicStats,
  getLatestProject
} from './utils/profile-calculator'

const baseProfile = {
  name: "Amadeus Lim Min Chern",
  email: "minchern1274@gmail.com",
  website: "https://amalimm.github.io/",
  
  professionalSummary: "Frontend Engineer @ YoPrint | Full-Stack Developer | React | Laravel | SaaS | Remote | Agile Problem Solver",
  
  industry: "Information Technology & Services",
  specialization: "Frontend Development & UI/UX Design",
  
  // Professional interests
  interests: [
    "Web Development",
    "User Experience Design",
    "Open Source Contributing",
    "Tech Innovation",
    "Continuous Learning"
  ],
  
  // Languages spoken
  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Mandarin", proficiency: "Conversational" },
    { name: "Spanish", proficiency: "Basic" }
  ],
  
  social: {
    github: "https://github.com/amalimm",
    linkedin: "https://linkedin.com/in/amadeuslim",
    twitter: "https://twitter.com/amadeuslim",
    instagram: "https://instagram.com/amadeuslim",
    medium: "https://medium.com/@amadeuslim",
    dev: "https://dev.to/amadeuslim"
  },
  
  cta: {
    primary: {
      text: "View My Work",
      href: "#projects",
      external: false
    },
    secondary: {
      text: "Connect on LinkedIn",
      href: "https://linkedin.com/in/amadeuslim",
      external: true
    }
  }
}

// Dynamic profile data that updates based on other data sources
export const profile: Profile = {
  // Static base data
  ...baseProfile,
  
  // Dynamic data calculated from other sources
  title: (() => {
    const featuredTechs = getFeaturedTechnologies().slice(0, 2)
    const currentRole = "Senior Frontend Developer"
    return featuredTechs.length > 0 
      ? `${currentRole} specializing in ${featuredTechs.join(' & ')}`
      : `${currentRole} & UI/UX Enthusiast`
  })(),
  
  headline: "Building exceptional web experiences with React, TypeScript, and modern development practices. Open to new opportunities and collaborations.",
  
  description: (() => {
    const years = calculateYearsOfExperience()
    const topTechs = getFeaturedTechnologies().slice(0, 4).join(', ')
    const completedProjects = calculateCompletedProjects()
    
    return `Experienced Frontend Developer with ${years}+ years in the industry and ${completedProjects}+ successful projects delivered. Specialized in ${topTechs} with a strong focus on performance optimization, accessibility, and scalable architecture. Currently seeking new challenges in innovative tech companies.`
  })(),
  
  location: getCurrentLocation(),
  
  // Dynamic stats calculated from actual data
  stats: getDynamicStats(),
  
  // Additional dynamic fields
  availability: getCurrentWorkStatus(),
  featuredTechnologies: getFeaturedTechnologies(),
  latestProject: getLatestProject(),
  lastUpdated: new Date().toISOString().split('T')[0],
  
  // LinkedIn-style additional fields
  professionalSummary: baseProfile.professionalSummary,
  industry: baseProfile.industry,
  specialization: baseProfile.specialization,
  interests: baseProfile.interests,
  languages: baseProfile.languages,
  
  // Professional metrics
  connectionCount: 500,
  profileViews: 1250,
  searchAppearances: 89
}

// Helper function to get formatted experience summary
export function getExperienceSummary() {
  const years = calculateYearsOfExperience()
  const projects = calculateCompletedProjects()
  const technologies = calculateTechnologiesMastered()
  
  return {
    years,
    projects,
    technologies,
    summary: `${years}+ years • ${projects}+ projects • ${technologies}+ technologies mastered`
  }
}

// Helper function to get quick stats for components
export function getQuickStats() {
  return {
    experience: `${calculateYearsOfExperience()}+ years`,
    projects: `${calculateCompletedProjects()}+ projects`,
    technologies: getFeaturedTechnologies(),
    availability: getCurrentWorkStatus()
  }
}