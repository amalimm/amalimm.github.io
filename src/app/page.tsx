import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Education } from '@/components/Education'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Certifications } from '@/components/Certifications'
import { Highlights } from '@/components/Highlights'
import { Languages } from '@/components/Languages'
import { Contact } from '@/components/Contact'

export default function HomePage() {
	return (
		<main className="relative">
			<Hero />
			<About />
			<Experience />
			<Education />
			<Skills />
			<Projects />
			<Certifications />
			<Highlights />
			<Languages />
			<Contact />
		</main>
	)
}