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
        label: "Code"
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
        label: "Website"
      },
      {
        type: "github",
        url: "https://github.com/amalimm/portfolio",
        label: "Code"
      }
    ],
    
    tags: ["Next.js", "Design System", "Performance", "SEO"],
    difficulty: "advanced",
    role: "Frontend Developer & Designer",
    order: 2
  },
]