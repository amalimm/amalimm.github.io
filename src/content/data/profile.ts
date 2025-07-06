import { Profile } from '../schemas/profile'

export const profile: Profile = {
  name: "Amadeus Lim",
  title: "Frontend Developer & UI/UX Enthusiast",
  headline: "I craft beautiful, performant web experiences that delight users and solve real problems.",
  description: "Passionate about clean code, intuitive design, and cutting-edge technologies. I specialize in building scalable frontend applications with React, TypeScript, and modern web technologies.",
  location: "San Francisco, CA",
  email: "amadeus@example.com",
  website: "https://amadeuslim.dev",
  
  social: {
    github: "https://github.com/amalimm",
    linkedin: "https://linkedin.com/in/amadeuslim",
    twitter: "https://twitter.com/amadeuslim",
    instagram: "https://instagram.com/amadeuslim",
  },
  
  stats: [
    {
      label: "Years Experience",
      value: "2+",
      icon: "calendar"
    },
    {
      label: "Projects Completed",
      value: "15+",
      icon: "code"
    },
    {
      label: "Technologies Mastered",
      value: "10+",
      icon: "layers"
    },
    {
      label: "Coffee Cups",
      value: "∞",
      icon: "coffee"
    }
  ],
  
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