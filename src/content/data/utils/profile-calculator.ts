import { projects } from '../projects'
import { experiences } from '../experience'
import { skills } from '../skills'

/**
 * Calculate years of experience from work experience data
 */
export function calculateYearsOfExperience(): number {
  const currentDate = new Date()
  let totalMonths = 0

  for (const exp of experiences) {
    const startDate = new Date(exp.startDate)
    const endDate = exp.current ? currentDate : new Date(exp.endDate!)
    
    const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                      (endDate.getMonth() - startDate.getMonth())
    totalMonths += monthsDiff
  }

  return Math.max(1, Math.floor(totalMonths / 12))
}

/**
 * Calculate total number of completed projects
 */
export function calculateCompletedProjects(): number {
  return projects.filter(project => project.status === 'completed').length
}

/**
 * Calculate number of technologies mastered (proficiency: advanced or expert)
 */
export function calculateTechnologiesMastered(): number {
  return skills.filter(skill => 
    skill.proficiency === 'advanced' || skill.proficiency === 'expert'
  ).length
}

/**
 * Calculate total number of skills across all categories
 */
export function calculateTotalSkills(): number {
  return skills.length
}

/**
 * Get the most recent project
 */
export function getLatestProject() {
  return projects
    .filter(project => project.endDate || project.status === 'in-progress')
    .sort((a, b) => {
      const dateA = new Date(a.endDate || a.startDate)
      const dateB = new Date(b.endDate || b.startDate)
      return dateB.getTime() - dateA.getTime()
    })[0]
}

/**
 * Get current work status
 */
export function getCurrentWorkStatus(): 'available' | 'busy' | 'unavailable' {
  const currentWork = experiences.find(exp => exp.current)
  if (currentWork?.type === 'freelance') return 'available'
  if (currentWork?.type === 'full-time') return 'busy'
  return 'available'
}

/**
 * Calculate featured technologies from skills and recent projects
 */
export function getFeaturedTechnologies(): string[] {
  const recentProjects = projects
    .filter(project => project.status === 'completed' || project.status === 'in-progress')
    .sort((a, b) => {
      const dateA = new Date(a.endDate || a.startDate)
      const dateB = new Date(b.endDate || b.startDate)
      return dateB.getTime() - dateA.getTime()
    })
    .slice(0, 3)

  const techCounts = new Map<string, number>()
  
  recentProjects.forEach(project => {
    project.technologies.forEach(tech => {
      techCounts.set(tech.name, (techCounts.get(tech.name) || 0) + 1)
    })
  })

  return Array.from(techCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tech]) => tech)
}

/**
 * Get formatted location from most recent experience
 */
export function getCurrentLocation(): string {
  const currentExp = experiences.find(exp => exp.current) || experiences[0]
  return currentExp?.remote ? 'Remote' : currentExp?.location || 'San Francisco, CA'
}

/**
 * Generate dynamic headline based on current role and technologies
 */
export function generateDynamicHeadline(): string {
  const topTechs = getFeaturedTechnologies().slice(0, 3).join(', ')
  const yearsExp = calculateYearsOfExperience()
  
  return `${yearsExp}+ years of experience building modern web applications with ${topTechs}. Passionate about creating exceptional user experiences and scalable solutions.`
}

/**
 * Calculate coffee cups consumed (fun metric based on years and projects)
 */
export function calculateCoffeeCups(): string {
  const years = calculateYearsOfExperience()
  const projects = calculateCompletedProjects()
  const estimate = (years * 365 * 2) + (projects * 50) // 2 cups per day + 50 per project
  
  if (estimate > 1000) return '∞'
  return `${Math.floor(estimate / 100) * 100}+`
}

/**
 * Get dynamic stats for profile
 */
export function getDynamicStats() {
  return [
    {
      label: "Years Experience",
      value: `${calculateYearsOfExperience()}+`,
      icon: "calendar"
    },
    {
      label: "Projects Completed",
      value: `${calculateCompletedProjects()}+`,
      icon: "code"
    },
    {
      label: "Technologies Mastered",
      value: `${calculateTechnologiesMastered()}+`,
      icon: "layers"
    },
    {
      label: "Coffee Cups",
      value: calculateCoffeeCups(),
      icon: "coffee"
    }
  ]
}