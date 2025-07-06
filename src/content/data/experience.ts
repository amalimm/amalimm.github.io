import { Experience, Education, Certification } from '../schemas/experience'

export const experiences: Experience[] = [
  {
    id: "freelance-developer",
    title: "Freelance Frontend Developer",
    company: "Self-Employed",
    location: "Remote",
    type: "freelance",
    remote: true,
    startDate: "2023-01-15",
    current: true,
    
    description: "Developing custom web applications and websites for clients across various industries, focusing on modern frontend technologies and user experience design.",
    
    achievements: [
      "Delivered 15+ successful projects with 100% client satisfaction",
      "Reduced client website load times by average of 40% through optimization",
      "Implemented responsive designs resulting in 60% increase in mobile engagement",
      "Built reusable component libraries saving clients 30% in development time"
    ],
    
    responsibilities: [
      "Collaborate with clients to understand requirements and deliver solutions",
      "Design and develop responsive web applications using React and TypeScript",
      "Implement modern UI/UX designs with attention to accessibility",
      "Optimize applications for performance and SEO",
      "Provide ongoing maintenance and support for client projects"
    ],
    
    technologies: [
      "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"
    ],
    
    skills: [
      "Frontend Development", "UI/UX Design", "Client Communication", "Project Management"
    ],
    
    companySize: "startup",
    industry: "Technology Services",
    
    order: 1,
    featured: true
  },
  
  {
    id: "web-developer-intern",
    title: "Web Developer Intern",
    company: "TechStart Solutions",
    location: "San Francisco, CA",
    type: "internship",
    remote: false,
    startDate: "2022-06-01",
    endDate: "2022-12-31",
    current: false,
    
    description: "Contributed to the development of web applications and gained hands-on experience with modern web technologies in a fast-paced startup environment.",
    
    achievements: [
      "Developed 5+ responsive web components used across multiple projects",
      "Improved application performance by 25% through code optimization",
      "Collaborated with senior developers on major feature implementations",
      "Received 'Outstanding Intern' recognition for exceptional contributions"
    ],
    
    responsibilities: [
      "Develop and maintain web applications using React and JavaScript",
      "Collaborate with design team to implement UI/UX mockups",
      "Write clean, maintainable code following best practices",
      "Participate in code reviews and team meetings",
      "Support testing and debugging of web applications"
    ],
    
    technologies: [
      "React", "JavaScript", "HTML5", "CSS3", "Git", "PHP", "MySQL"
    ],
    
    skills: [
      "Web Development", "Team Collaboration", "Code Review", "Problem Solving"
    ],
    
    companySize: "startup",
    industry: "Software Development",
    teamSize: 8,
    reportsTo: "Senior Frontend Developer",
    
    order: 2,
    featured: true
  },
  
  {
    id: "junior-developer",
    title: "Junior Web Developer",
    company: "Digital Creative Agency",
    location: "Los Angeles, CA",
    type: "part-time",
    remote: false,
    startDate: "2021-09-01",
    endDate: "2022-05-31",
    current: false,
    
    description: "Supported the development of client websites and marketing campaigns, focusing on frontend implementation and user interface design.",
    
    achievements: [
      "Built and deployed 10+ client websites with modern web technologies",
      "Reduced development time by 20% through creation of reusable templates",
      "Improved client satisfaction scores by implementing responsive designs",
      "Mentored 2 new junior developers joining the team"
    ],
    
    responsibilities: [
      "Develop responsive websites for agency clients",
      "Implement designs from PSD/Figma files",
      "Maintain and update existing client websites",
      "Support SEO optimization and performance improvements",
      "Collaborate with designers and project managers"
    ],
    
    technologies: [
      "HTML5", "CSS3", "JavaScript", "WordPress", "PHP", "jQuery"
    ],
    
    skills: [
      "Frontend Development", "WordPress", "Client Management", "SEO"
    ],
    
    companySize: "small",
    industry: "Digital Marketing",
    teamSize: 5,
    
    order: 3,
    featured: false
  }
]

export const education: Education[] = [
  {
    id: "computer-science-degree",
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    startDate: "2018-09-01",
    endDate: "2022-05-15",
    current: false,
    
    gpa: 3.7,
    honors: [
      "Dean's List (4 semesters)",
      "Computer Science Academic Excellence Award",
      "Outstanding Student in Web Development"
    ],
    
    activities: [
      "Web Development Club - Vice President",
      "ACM Student Chapter - Member",
      "Hackathon Team - Lead Developer"
    ],
    
    coursework: [
      "Data Structures and Algorithms",
      "Web Development",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
      "Human-Computer Interaction"
    ],
    
    order: 1
  },
  
  {
    id: "web-development-bootcamp",
    degree: "Certificate",
    field: "Full Stack Web Development",
    institution: "Coding Bootcamp Plus",
    location: "Online",
    startDate: "2021-01-15",
    endDate: "2021-07-30",
    current: false,
    
    activities: [
      "Peer Programming Sessions",
      "Open Source Contributions",
      "Final Project Presentation"
    ],
    
    coursework: [
      "React & Redux",
      "Node.js & Express",
      "MongoDB & Mongoose",
      "Authentication & Security",
      "Deployment & DevOps"
    ],
    
    order: 2
  }
]

export const certifications: Certification[] = [
  {
    id: "react-certification",
    name: "React Developer Certification",
    issuer: "Meta",
    credentialId: "REACT-2023-001",
    issueDate: "2023-08-15",
    expirationDate: "2025-08-15",
    
    credentialUrl: "https://www.credly.com/badges/react-developer-cert",
    verificationUrl: "https://verify.meta.com/certificates/REACT-2023-001",
    
    description: "Comprehensive certification covering React fundamentals, hooks, context, and advanced patterns",
    
    skills: [
      "React", "JavaScript", "JSX", "State Management", "Component Design"
    ],
    
    order: 1,
    featured: true
  },
  
  {
    id: "typescript-certification",
    name: "TypeScript Developer Certification",
    issuer: "Microsoft",
    credentialId: "TS-2023-456",
    issueDate: "2023-06-20",
    expirationDate: "2025-06-20",
    
    credentialUrl: "https://www.credly.com/badges/typescript-developer-cert",
    
    description: "Advanced TypeScript certification covering type systems, generics, and advanced patterns",
    
    skills: [
      "TypeScript", "Type Systems", "Generics", "Advanced Types"
    ],
    
    order: 2,
    featured: true
  },
  
  {
    id: "aws-cloud-practitioner",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    credentialId: "AWS-CCP-2023-789",
    issueDate: "2023-03-10",
    expirationDate: "2026-03-10",
    
    credentialUrl: "https://www.credly.com/badges/aws-cloud-practitioner",
    verificationUrl: "https://aws.amazon.com/verification/",
    
    description: "Foundational AWS certification covering cloud concepts, services, and pricing",
    
    skills: [
      "AWS", "Cloud Computing", "Infrastructure", "Security"
    ],
    
    order: 3,
    featured: false
  }
]