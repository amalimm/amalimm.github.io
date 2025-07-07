# Dynamic Profile System

This portfolio uses a dynamic data system where the profile information automatically updates based on other data sources like projects, experience, and skills. This ensures consistency and reduces manual maintenance.

## 🚀 How It Works

### Core Concept
Instead of hardcoding values like "2+ years experience" or "15+ projects", the system:
1. **Calculates** these values from actual data
2. **Updates automatically** when you add new projects/experience
3. **Maintains consistency** across all components

### File Structure
```
src/content/data/
├── utils/
│   └── profile-calculator.ts    # Dynamic calculation functions
├── profile.ts                   # Main profile with dynamic data
├── projects.ts                  # Project data (source)
├── experience.ts                # Experience data (source)
├── skills.ts                    # Skills data (source)
└── index.ts                     # Unified exports
```

## 📊 Dynamic Calculations

### Years of Experience
```typescript
// Automatically calculated from experience.ts
calculateYearsOfExperience() // Returns: 2+ (from actual work history)
```

### Projects Completed
```typescript
// Counts completed projects from projects.ts
calculateCompletedProjects() // Returns: 5 (actual count)
```

### Technologies Mastered
```typescript
// Counts advanced/expert skills from skills.ts
calculateTechnologiesMastered() // Returns: 12 (actual count)
```

### Featured Technologies
```typescript
// Gets most used technologies from recent projects
getFeaturedTechnologies() // Returns: ["React", "TypeScript", "Next.js", ...]
```

### Dynamic Title
```typescript
// Updates based on top technologies
"Frontend Developer specializing in React & TypeScript"
```

### Dynamic Headline
```typescript
// Generated from experience and technologies
"2+ years of experience building modern web applications with React, TypeScript, Next.js..."
```

### Work Availability
```typescript
getCurrentWorkStatus() // Returns: "available" | "busy" | "unavailable"
```

## 🔄 Auto-Updating Examples

### Adding a New Project
When you add a project to `projects.ts`:
```typescript
{
  id: "new-project",
  title: "Amazing App",
  status: "completed",
  technologies: [
    { name: "Vue.js", category: "frontend" },
    { name: "Python", category: "backend" }
  ]
  // ...
}
```

**Automatically updates:**
- ✅ Projects count: `5` → `6`
- ✅ Featured technologies: May include "Vue.js" and "Python"
- ✅ Profile description updates with new tech stack
- ✅ Stats section reflects new numbers

### Adding Work Experience
When you add experience to `experience.ts`:
```typescript
{
  id: "senior-developer",
  title: "Senior Frontend Developer",
  startDate: "2024-01-01",
  current: true,
  // ...
}
```

**Automatically updates:**
- ✅ Years of experience calculation
- ✅ Current location (if remote/location changes)
- ✅ Work availability status
- ✅ Dynamic title and headlines

### Adding Skills
When you add skills to `skills.ts`:
```typescript
{
  id: "svelte",
  name: "Svelte",
  proficiency: "advanced",
  // ...
}
```

**Automatically updates:**
- ✅ Technologies mastered count
- ✅ Skill categories and groupings
- ✅ Featured technologies (if used in recent projects)

## 🛠️ Usage in Components

### Basic Usage
```typescript
import { profile } from '@/content/data/profile'

// Profile now contains all dynamic data
console.log(profile.stats) // Auto-calculated stats
console.log(profile.title) // Dynamic title
console.log(profile.featuredTechnologies) // Latest tech stack
```

### Advanced Usage
```typescript
import { 
  getQuickStats,
  getExperienceSummary,
  calculateYearsOfExperience,
  getFeaturedTechnologies
} from '@/content/data/profile'

// Get quick stats for components
const stats = getQuickStats()
// {
//   experience: "2+ years",
//   projects: "5+ projects", 
//   technologies: ["React", "TypeScript", ...],
//   availability: "available"
// }

// Get detailed experience summary
const summary = getExperienceSummary()
// {
//   years: 2,
//   projects: 5,
//   technologies: 12,
//   summary: "2+ years • 5+ projects • 12+ technologies mastered"
// }
```

### Real-time Components
```typescript
// Hero.tsx example
export function Hero() {
  const quickStats = getQuickStats()
  
  return (
    <div>
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2> {/* Auto-updates with tech stack */}
      <p>{profile.headline}</p> {/* Auto-updates with experience */}
      
      {/* Availability indicator */}
      {profile.availability === 'available' && (
        <Badge color="green">Available for work</Badge>
      )}
      
      {/* Dynamic stats */}
      {profile.stats.map(stat => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  )
}
```

## 🎯 Benefits

### 1. **Consistency**
- No more manual syncing between sections
- Single source of truth for all metrics
- Automatic updates across all components

### 2. **Maintenance**
- Add project → Stats update automatically
- Change job → Availability updates automatically  
- Learn technology → Featured tech updates automatically

### 3. **Accuracy**
- Real calculations, not estimates
- Always up-to-date information
- No forgotten manual updates

### 4. **Scalability**
- Easy to add new calculation functions
- Components automatically get new data
- System grows with your portfolio

## 🔧 Customization

### Adding New Calculations
```typescript
// In profile-calculator.ts
export function calculateNewMetric(): number {
  // Your calculation logic
  return result
}

// In profile.ts
stats: [
  // existing stats...
  {
    label: "New Metric",
    value: calculateNewMetric().toString(),
    icon: "icon-name"
  }
]
```

### Custom Formatters
```typescript
export function formatExperience(years: number): string {
  if (years < 1) return "< 1 year"
  if (years === 1) return "1 year"
  return `${years}+ years`
}
```

### Conditional Logic
```typescript
title: (() => {
  const experience = calculateYearsOfExperience()
  const techs = getFeaturedTechnologies()
  
  if (experience < 2) {
    return "Junior Frontend Developer"
  } else if (experience < 5) {
    return `Frontend Developer specializing in ${techs[0]}`
  } else {
    return `Senior Frontend Developer & ${techs[0]} Expert`
  }
})()
```

## 🎨 Future Enhancements

### Planned Features
- **Blog post integration**: Update stats with article counts
- **GitHub API integration**: Real-time repository statistics  
- **Analytics integration**: Visitor and engagement metrics
- **Certification tracking**: Auto-expire old certifications
- **Project complexity scoring**: Advanced project difficulty metrics

### Extensibility
The system is designed to be easily extended with:
- New data sources (APIs, databases)
- Complex calculation algorithms
- Conditional display logic
- Internationalization support
- Real-time data updates

## 🚨 Important Notes

### Performance
- All calculations happen at build time
- No runtime performance impact
- Static generation compatible

### Data Validation
- All data is validated with Zod schemas
- Type-safe throughout the system
- Build-time error checking

### Maintenance
- Add new data to source files (projects, experience, skills)
- Profile updates automatically
- No manual profile editing needed

---

**Summary**: This dynamic system transforms your portfolio from a static site to an intelligent, self-updating showcase that grows with your career. Simply add your latest work, and watch your profile statistics and descriptions update automatically! 🚀