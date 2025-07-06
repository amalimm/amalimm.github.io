import { SiteMetadata } from '../schemas/metadata'

export const siteMetadata: SiteMetadata = {
  title: "Amadeus Lim - Frontend Developer & UI/UX Enthusiast",
  description: "Frontend Developer specializing in React, TypeScript, and modern web technologies. Building beautiful, performant web experiences that delight users.",
  author: "Amadeus Lim",
  siteUrl: "https://amadeuslim.dev",
  language: "en",
  locale: "en_US",
  
  seo: {
    title: "Amadeus Lim - Frontend Developer & UI/UX Enthusiast",
    description: "Frontend Developer specializing in React, TypeScript, and modern web technologies. Building beautiful, performant web experiences that delight users.",
    keywords: [
      "frontend developer",
      "react developer",
      "typescript",
      "web development",
      "ui/ux design",
      "javascript",
      "next.js",
      "tailwind css",
      "portfolio"
    ],
    ogTitle: "Amadeus Lim - Frontend Developer & UI/UX Enthusiast",
    ogDescription: "Frontend Developer specializing in React, TypeScript, and modern web technologies. Building beautiful, performant web experiences that delight users.",
    ogImage: "https://amadeuslim.dev/images/og-image.jpg",
    ogUrl: "https://amadeuslim.dev",
    twitterCard: "summary_large_image",
    twitterSite: "@amadeuslim",
    twitterCreator: "@amadeuslim",
    canonicalUrl: "https://amadeuslim.dev",
    robots: "index, follow",
    
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Amadeus Lim",
      jobTitle: "Frontend Developer",
      url: "https://amadeuslim.dev",
      sameAs: [
        "https://github.com/amalimm",
        "https://linkedin.com/in/amadeuslim",
        "https://twitter.com/amadeuslim"
      ],
      knowsAbout: [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Web Development",
        "UI/UX Design",
        "Frontend Development"
      ],
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
        url: "https://amadeuslim.dev"
      }
    }
  },
  
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX",
    googleTagManagerId: "GTM-XXXXXXX"
  },
  
  social: {
    github: "https://github.com/amalimm",
    linkedin: "https://linkedin.com/in/amadeuslim",
    twitter: "https://twitter.com/amadeuslim",
    instagram: "https://instagram.com/amadeuslim"
  },
  
  features: {
    darkMode: true,
    animations: true,
    blog: false,
    contact: true,
    resume: true
  },
  
  contact: {
    email: "amadeus@example.com",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA, USA",
    calendly: "https://calendly.com/amadeuslim"
  },
  
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: new Date().toISOString()
}