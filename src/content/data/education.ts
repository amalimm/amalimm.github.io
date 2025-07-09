export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  gpa?: number
  grade?: string
  honors?: string[]
  activities?: string[]
  description?: string
  order: number
  featured: boolean
}

export const education: Education[] = [
  {
    id: "universiti-sains-malaysia",
    institution: "Universiti Sains Malaysia",
    degree: "Bachelor of Science - BS",
    field: "Mathematics and Computer Science",
    location: "Malaysia",
    startDate: "2020-10-01",
    endDate: "2024-10-31",
    current: false,
    
    grade: "CGPA 3.93 CGPA-AT 3.98",
    
    activities: [
      "Served in St John Ambulance Committee as a Training Secretary for 2 years"
    ],
    
    description: "Throughout my university studies, I consistently took on leadership roles in group projects, both within my major in Pure Mathematics and my minor in Computer Science. My focus was on fostering effective team communication and collaboration, emphasizing collective achievement over individual contributions. Under my guidance, our teams consistently delivered high-quality work and exceeded expectations. These experiences have equipped me with valuable skills in leadership, problem-solving, and conflict resolution.",
    
    order: 1,
    featured: true
  },
  
  {
    id: "kolej-matrikulasi-labuan",
    institution: "Kolej Matrikulasi Labuan",
    degree: "Matriculation",
    field: "Science",
    location: "Labuan, Malaysia",
    startDate: "2019-05-01",
    endDate: "2020-06-30",
    current: false,
    
    grade: "PNGK 4.0 MUET Band 5",
    
    activities: [
      "Served in Peer Assisted Learning (PAL) Committee"
    ],
    
    description: "As a committee member of the Peer Assisted Learning (PAL) program, I actively contributed to promoting peer-to-peer learning among students. Working collaboratively with my team, I played a key role in planning and executing initiatives that effectively achieved our program goals. Notably, our efforts were instrumental in reviving the PAL program at Kolej Matrikulasi Labuan (KML), making us the pioneering group to reintroduce this valuable initiative. Additionally, I partnered with a fellow student to represent KML at a symposium held in Selangor. Our team's exceptional performance led to a Gold Medal win for KML, a feat that garnered significant media attention.",
    
    order: 2,
    featured: true
  },
  
  {
    id: "smjk-kuching-high",
    institution: "SMJK Kuching High",
    degree: "Secondary Education",
    field: "General Studies",
    location: "Kuching, Sarawak, Malaysia",
    startDate: "2014-01-01",
    endDate: "2018-12-31",
    current: false,
    
    grade: "SPM Straight A's - 8A+ 1A 1A-",
    
    activities: [
      "Served in Prefectorial Board Committee",
      "St John Ambulance",
      "Robotics Club"
    ],
    
    description: "Completed secondary education with excellent academic performance, achieving straight A's in SPM examinations. Actively participated in leadership roles and extracurricular activities.",
    
    order: 3,
    featured: false
  }
]