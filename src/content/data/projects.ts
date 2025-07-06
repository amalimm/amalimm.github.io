import { Project } from '../schemas/project'

export const projects: Project[] = [
  {
    id: "anime-search-app",
    title: "Anime Search Application",
    description: "A modern anime search application built with React and TypeScript, featuring real-time search, detailed anime information, and responsive design.",
    longDescription: "This comprehensive anime search application provides users with an intuitive interface to discover and explore anime content. Built with modern web technologies, it features real-time search capabilities, detailed anime information pages, and a fully responsive design that works seamlessly across all devices.",
    category: "web",
    status: "completed",
    featured: true,
    startDate: "2024-01-15",
    endDate: "2024-03-20",
    
    thumbnail: "/images/projects/anime-search/thumbnail.jpg",
    images: [
      {
        url: "/images/projects/anime-search/screenshot1.jpg",
        alt: "Anime search interface",
        caption: "Clean and intuitive search interface"
      },
      {
        url: "/images/projects/anime-search/screenshot2.jpg",
        alt: "Anime details page",
        caption: "Detailed anime information page"
      }
    ],
    
    technologies: [
      { name: "React", category: "frontend", color: "#61DAFB" },
      { name: "TypeScript", category: "frontend", color: "#3178C6" },
      { name: "Tailwind CSS", category: "frontend", color: "#06B6D4" },
      { name: "Vite", category: "frontend", color: "#646CFF" },
      { name: "Anime API", category: "backend", color: "#FF6B6B" }
    ],
    
    links: [
      {
        type: "website",
        url: "https://anime-search-demo.vercel.app",
        label: "Live Demo"
      },
      {
        type: "github",
        url: "https://github.com/amalimm/anime-search",
        label: "Source Code"
      }
    ],
    
    tags: ["React", "TypeScript", "API Integration", "Responsive Design"],
    difficulty: "intermediate",
    role: "Full Stack Developer",
    order: 1
  },
  
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my work and skills, built with Next.js and featuring a comprehensive design system.",
    longDescription: "This portfolio website represents the culmination of my frontend development skills, featuring a custom design system, responsive layouts, and optimized performance. Built with Next.js 15 and TypeScript, it demonstrates modern web development practices.",
    category: "web",
    status: "completed",
    featured: true,
    startDate: "2024-11-01",
    endDate: "2024-12-15",
    
    thumbnail: "/images/projects/portfolio/thumbnail.jpg",
    images: [
      {
        url: "/images/projects/portfolio/screenshot1.jpg",
        alt: "Portfolio homepage",
        caption: "Modern homepage with hero section"
      },
      {
        url: "/images/projects/portfolio/screenshot2.jpg",
        alt: "Projects showcase",
        caption: "Interactive projects showcase"
      }
    ],
    
    technologies: [
      { name: "Next.js", category: "frontend", color: "#000000" },
      { name: "TypeScript", category: "frontend", color: "#3178C6" },
      { name: "Tailwind CSS", category: "frontend", color: "#06B6D4" },
      { name: "Framer Motion", category: "frontend", color: "#FF6B9D" },
      { name: "Zod", category: "backend", color: "#3E67B1" }
    ],
    
    links: [
      {
        type: "website",
        url: "https://amadeuslim.dev",
        label: "Live Website"
      },
      {
        type: "github",
        url: "https://github.com/amalimm/portfolio",
        label: "Source Code"
      }
    ],
    
    tags: ["Next.js", "Design System", "Performance", "SEO"],
    difficulty: "advanced",
    role: "Frontend Developer & Designer",
    order: 2
  },
  
  {
    id: "task-management-app",
    title: "Task Management Application",
    description: "A feature-rich task management application with real-time collaboration, built using React and Node.js with a focus on user experience.",
    longDescription: "This task management application provides teams with powerful tools to organize, track, and collaborate on projects. Features include real-time updates, drag-and-drop functionality, team management, and detailed analytics.",
    category: "web",
    status: "completed",
    featured: false,
    startDate: "2023-08-10",
    endDate: "2023-11-30",
    
    thumbnail: "/images/projects/task-app/thumbnail.jpg",
    
    technologies: [
      { name: "React", category: "frontend", color: "#61DAFB" },
      { name: "Node.js", category: "backend", color: "#339933" },
      { name: "Express", category: "backend", color: "#000000" },
      { name: "MongoDB", category: "database", color: "#47A248" },
      { name: "Socket.io", category: "backend", color: "#010101" }
    ],
    
    links: [
      {
        type: "github",
        url: "https://github.com/amalimm/task-management",
        label: "Source Code"
      },
      {
        type: "demo",
        url: "https://task-manager-demo.herokuapp.com",
        label: "Live Demo"
      }
    ],
    
    tags: ["Full Stack", "Real-time", "Collaboration", "MongoDB"],
    difficulty: "advanced",
    teamSize: 3,
    role: "Full Stack Developer",
    order: 3
  },
  
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard application that displays current conditions and forecasts using external weather APIs.",
    category: "web",
    status: "completed",
    featured: false,
    startDate: "2023-05-01",
    endDate: "2023-06-15",
    
    thumbnail: "/images/projects/weather/thumbnail.jpg",
    
    technologies: [
      { name: "JavaScript", category: "frontend", color: "#F7DF1E" },
      { name: "HTML5", category: "frontend", color: "#E34F26" },
      { name: "CSS3", category: "frontend", color: "#1572B6" },
      { name: "OpenWeather API", category: "backend", color: "#FF6B35" }
    ],
    
    links: [
      {
        type: "website",
        url: "https://weather-dashboard-demo.netlify.app",
        label: "Live Demo"
      },
      {
        type: "github",
        url: "https://github.com/amalimm/weather-dashboard",
        label: "Source Code"
      }
    ],
    
    tags: ["JavaScript", "API Integration", "Responsive", "Weather"],
    difficulty: "beginner",
    role: "Frontend Developer",
    order: 4
  },
  
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    category: "web",
    status: "in-progress",
    featured: false,
    startDate: "2024-09-01",
    
    thumbnail: "/images/projects/ecommerce/thumbnail.jpg",
    
    technologies: [
      { name: "Next.js", category: "frontend", color: "#000000" },
      { name: "TypeScript", category: "frontend", color: "#3178C6" },
      { name: "Prisma", category: "database", color: "#2D3748" },
      { name: "PostgreSQL", category: "database", color: "#336791" },
      { name: "Stripe", category: "backend", color: "#635BFF" }
    ],
    
    links: [
      {
        type: "github",
        url: "https://github.com/amalimm/ecommerce-platform",
        label: "Source Code"
      }
    ],
    
    tags: ["E-commerce", "Payment Integration", "Admin Dashboard", "Database"],
    difficulty: "advanced",
    role: "Full Stack Developer",
    order: 5
  }
]