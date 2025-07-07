import { Profile } from '../schemas/profile'
import { 
  calculateYearsOfExperience,
  calculateCompletedProjects,
  calculateTechnologiesMastered,
  getCurrentWorkStatus,
  getFeaturedTechnologies,
  getCurrentLocation,
  generateDynamicHeadline,
  getDynamicStats,
  getLatestProject
} from './utils/profile-calculator'

// Base profile data (static information)
const baseProfile = {
  name: "Amadeus Lim",
  email: "amadeus@example.com",
  website: "https://amadeuslim.dev",
  
  social: {
    github: "https://github.com/amalimm",
    linkedin: "https://linkedin.com/in/amadeuslim",
    twitter: "https://twitter.com/amadeuslim",
    instagram: "https://instagram.com/amadeuslim",
  },
  
  cta: {
    primary: {
      text: "View My Work",
      href: "#projects",
      external: false
    },
    secondary: {
      text: "Get In Touch",
      href: "#contact",
      external: false
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
    const currentRole = "Frontend Developer"
    return featuredTechs.length > 0 
      ? `${currentRole} specializing in ${featuredTechs.join(' & ')}`
      : `${currentRole} & UI/UX Enthusiast`
  })(),
  
  headline: generateDynamicHeadline(),
  
  description: (() => {
    const years = calculateYearsOfExperience()
    const topTechs = getFeaturedTechnologies().slice(0, 4).join(', ')
    const completedProjects = calculateCompletedProjects()
    
    return `With ${years}+ years of experience and ${completedProjects}+ completed projects, I specialize in ${topTechs}. Passionate about clean code, intuitive design, and cutting-edge technologies that solve real-world problems.`
  })(),
  
  location: getCurrentLocation(),
  
  // Dynamic stats calculated from actual data
  stats: getDynamicStats(),
  
  // Additional dynamic fields
  availability: getCurrentWorkStatus(),
  featuredTechnologies: getFeaturedTechnologies(),
  latestProject: getLatestProject(),
  lastUpdated: new Date().toISOString().split('T')[0]
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