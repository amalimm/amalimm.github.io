import { Language } from '../schemas/language'

export const languages: Language[] = [
  {
    id: "chinese",
    name: "Chinese",
    proficiency: "native",
    proficiencyDescription: "Native or bilingual proficiency",
    icon: "🇨🇳",
    order: 1,
    featured: true
  },
  {
    id: "english",
    name: "English",
    proficiency: "professional",
    proficiencyDescription: "Professional working proficiency",
    icon: "EN",
    order: 2,
    featured: true
  },
  {
    id: "malay",
    name: "Malay",
    proficiency: "professional",
    proficiencyDescription: "Professional working proficiency",
    icon: "🇲🇾",
    order: 3,
    featured: true
  },
  {
    id: "spanish",
    name: "Spanish",
    proficiency: "elementary",
    proficiencyDescription: "Elementary proficiency",
    icon: "🇪🇸",
    order: 4,
    featured: false
  }
]