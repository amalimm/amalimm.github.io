"use client"

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
import { ScrollProgress } from '@/components/ScrollProgress'
import { FloatingElements } from '@/components/FloatingElements'
import { motion } from 'framer-motion'

export default function HomePage() {
	return (
		<main className="relative overflow-hidden">
			{/* Background Effects */}
			<FloatingElements />
			<ScrollProgress />
			
			{/* Main Content with Staggered Animations */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Hero />
				
				{/* Creative Layout Grid */}
				<div className="relative z-10">
					<About />
					<Experience />
					<Education />
					<Skills />
					<Projects />
					<Certifications />
					<Highlights />
					<Languages />
					<Contact />
				</div>
			</motion.div>
		</main>
	)
}