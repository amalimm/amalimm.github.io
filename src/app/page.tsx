"use client"

import HeroSection from "@/components/Hero/HeroSection"
import AboutSection from "@/components/About/AboutSection"
import ProjectsSection from "@/components/Projects/ProjectsSection"
import SkillsSection from "@/components/Skills/SkillsSection"
import ContactSection from "@/components/Contact/ContactSection"

export default function HomePage() {
	return (
		<main className="overflow-hidden">
			<section id="home">
				<HeroSection />
			</section>
			<section id="about">
				<AboutSection />
			</section>
			<section id="projects">
				<ProjectsSection />
			</section>
			<section id="skills">
				<SkillsSection />
			</section>
			<section id="contact">
				<ContactSection />
			</section>
		</main>
	)
}