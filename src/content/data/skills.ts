import { Skill, SkillGroup } from '../schemas/skill'

export const skills: Skill[] = [
  // Frontend Technologies
  {
    id: "react",
    name: "React",
    category: "frontend",
    proficiency: "advanced",
    icon: "⚛️",
    color: "#61DAFB",
    description: "Building complex user interfaces with hooks, context, and modern patterns",
    yearsOfExperience: 2,
    featured: true,
    order: 1
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    proficiency: "advanced",
    icon: "🔷",
    color: "#3178C6",
    description: "Type-safe JavaScript development with advanced type patterns",
    yearsOfExperience: 2,
    featured: true,
    order: 2
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    proficiency: "advanced",
    icon: "▲",
    color: "#000000",
    description: "Full-stack React framework with SSR, SSG, and API routes",
    yearsOfExperience: 1,
    featured: true,
    order: 3
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: "advanced",
    icon: "🎨",
    color: "#06B6D4",
    description: "Utility-first CSS framework for rapid UI development",
    yearsOfExperience: 2,
    featured: true,
    order: 4
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    proficiency: "advanced",
    icon: "🟨",
    color: "#F7DF1E",
    description: "ES6+ features, async/await, and modern JavaScript patterns",
    yearsOfExperience: 3,
    featured: true,
    order: 5
  },
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    proficiency: "expert",
    icon: "📄",
    color: "#E34F26",
    description: "Semantic HTML, accessibility, and modern web standards",
    yearsOfExperience: 3,
    featured: false,
    order: 6
  },
  {
    id: "css3",
    name: "CSS3",
    category: "frontend",
    proficiency: "advanced",
    icon: "🎨",
    color: "#1572B6",
    description: "Modern CSS features, Grid, Flexbox, and animations",
    yearsOfExperience: 3,
    featured: false,
    order: 7
  },
  
  // Backend Technologies
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    proficiency: "intermediate",
    icon: "🟢",
    color: "#339933",
    description: "Server-side JavaScript runtime for building scalable applications",
    yearsOfExperience: 1,
    featured: true,
    order: 8
  },
  {
    id: "express",
    name: "Express.js",
    category: "backend",
    proficiency: "intermediate",
    icon: "🚀",
    color: "#000000",
    description: "Fast, unopinionated web framework for Node.js",
    yearsOfExperience: 1,
    featured: false,
    order: 9
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "backend",
    proficiency: "intermediate",
    icon: "🔴",
    color: "#FF2D20",
    description: "PHP web framework with elegant syntax and powerful features",
    yearsOfExperience: 1,
    featured: true,
    order: 10
  },
  {
    id: "php",
    name: "PHP",
    category: "backend",
    proficiency: "intermediate",
    icon: "🐘",
    color: "#777BB4",
    description: "Server-side scripting language for web development",
    yearsOfExperience: 1,
    featured: false,
    order: 11
  },
  
  // Database Technologies
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    proficiency: "intermediate",
    icon: "🍃",
    color: "#47A248",
    description: "NoSQL document database with flexible schema",
    yearsOfExperience: 1,
    featured: true,
    order: 12
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    proficiency: "intermediate",
    icon: "🐬",
    color: "#4479A1",
    description: "Relational database management system",
    yearsOfExperience: 1,
    featured: false,
    order: 13
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    proficiency: "beginner",
    icon: "🐘",
    color: "#336791",
    description: "Advanced open-source relational database",
    yearsOfExperience: 0.5,
    featured: false,
    order: 14
  },
  
  // DevOps & Tools
  {
    id: "git",
    name: "Git",
    category: "devops",
    proficiency: "advanced",
    icon: "📝",
    color: "#F05032",
    description: "Version control system for tracking changes",
    yearsOfExperience: 2,
    featured: true,
    order: 15
  },
  {
    id: "docker",
    name: "Docker",
    category: "devops",
    proficiency: "intermediate",
    icon: "🐳",
    color: "#2496ED",
    description: "Containerization platform for consistent deployments",
    yearsOfExperience: 1,
    featured: false,
    order: 16
  },
  {
    id: "aws",
    name: "AWS",
    category: "devops",
    proficiency: "beginner",
    icon: "☁️",
    color: "#FF9900",
    description: "Cloud computing platform and services",
    yearsOfExperience: 0.5,
    featured: false,
    order: 17
  },
  
  // Design & Tools
  {
    id: "figma",
    name: "Figma",
    category: "design",
    proficiency: "intermediate",
    icon: "🎨",
    color: "#F24E1E",
    description: "UI/UX design tool for creating prototypes and designs",
    yearsOfExperience: 1,
    featured: true,
    order: 18
  },
  {
    id: "photoshop",
    name: "Photoshop",
    category: "design",
    proficiency: "intermediate",
    icon: "🖼️",
    color: "#31A8FF",
    description: "Image editing and graphic design software",
    yearsOfExperience: 2,
    featured: false,
    order: 19
  },
  
  // Frameworks & Libraries
  {
    id: "framer-motion",
    name: "Framer Motion",
    category: "frameworks",
    proficiency: "intermediate",
    icon: "🎬",
    color: "#FF6B9D",
    description: "Animation library for React applications",
    yearsOfExperience: 1,
    featured: false,
    order: 20
  },
  {
    id: "redux",
    name: "Redux",
    category: "frameworks",
    proficiency: "intermediate",
    icon: "🔄",
    color: "#764ABC",
    description: "State management library for JavaScript applications",
    yearsOfExperience: 1,
    featured: false,
    order: 21
  },
  
  // Soft Skills
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "soft-skills",
    proficiency: "advanced",
    icon: "🧩",
    color: "#4CAF50",
    description: "Analytical thinking and creative problem-solving approaches",
    yearsOfExperience: 3,
    featured: true,
    order: 22
  },
  {
    id: "communication",
    name: "Communication",
    category: "soft-skills",
    proficiency: "advanced",
    icon: "💬",
    color: "#2196F3",
    description: "Clear communication with team members and stakeholders",
    yearsOfExperience: 3,
    featured: true,
    order: 23
  },
  {
    id: "team-collaboration",
    name: "Team Collaboration",
    category: "soft-skills",
    proficiency: "advanced",
    icon: "🤝",
    color: "#FF9800",
    description: "Working effectively in team environments",
    yearsOfExperience: 2,
    featured: true,
    order: 24
  }
]

export const skillGroups: SkillGroup[] = [
  {
    category: {
      id: "frontend",
      name: "Frontend Development",
      description: "Client-side technologies and frameworks",
      icon: "💻",
      color: "#61DAFB",
      order: 1,
      featured: true
    },
    skills: skills.filter(skill => skill.category === "frontend")
  },
  {
    category: {
      id: "backend",
      name: "Backend Development",
      description: "Server-side technologies and frameworks",
      icon: "⚙️",
      color: "#339933",
      order: 2,
      featured: true
    },
    skills: skills.filter(skill => skill.category === "backend")
  },
  {
    category: {
      id: "database",
      name: "Database Technologies",
      description: "Data storage and management systems",
      icon: "🗄️",
      color: "#47A248",
      order: 3,
      featured: true
    },
    skills: skills.filter(skill => skill.category === "database")
  },
  {
    category: {
      id: "devops",
      name: "DevOps & Tools",
      description: "Development operations and tooling",
      icon: "🔧",
      color: "#F05032",
      order: 4,
      featured: true
    },
    skills: skills.filter(skill => skill.category === "devops")
  },
  {
    category: {
      id: "design",
      name: "Design & UX",
      description: "User experience and visual design",
      icon: "🎨",
      color: "#F24E1E",
      order: 5,
      featured: true
    },
    skills: skills.filter(skill => skill.category === "design")
  },
  {
    category: {
      id: "soft-skills",
      name: "Soft Skills",
      description: "Communication and collaboration abilities",
      icon: "🤝",
      color: "#4CAF50",
      order: 6,
      featured: true
    },
    skills: skills.filter(skill => skill.category === "soft-skills")
  }
]