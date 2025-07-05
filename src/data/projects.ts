import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with React and Stripe integration",
    longDescription: "A full-featured e-commerce platform built with Next.js, featuring user authentication, product catalog, shopping cart, and secure payment processing with Stripe. Includes admin dashboard for inventory management.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/amadeus/ecommerce",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    longDescription: "A sophisticated task management application with real-time collaboration features, drag-and-drop interface, and team workspace management. Built with modern React patterns and WebSocket integration.",
    image: "/images/projects/taskapp.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://taskapp-demo.com",
    githubUrl: "https://github.com/amadeus/taskapp",
    featured: true
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts",
    longDescription: "An elegant weather dashboard featuring location-based forecasts, interactive maps, and detailed weather analytics. Includes dark mode and customizable widgets.",
    image: "/images/projects/weather.jpg",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Sass"],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/amadeus/weather-dashboard",
    featured: false
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Personal portfolio with modern animations and interactions",
    longDescription: "This very portfolio website showcasing modern web development techniques, smooth animations, and responsive design. Built with performance and accessibility in mind.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://amadeusslim.dev",
    githubUrl: "https://github.com/amadeus/portfolio",
    featured: true
  }
]