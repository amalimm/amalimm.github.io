import "../styles/globals.css"
import "aos/dist/aos.css"
import type { Metadata } from "next"
import { ReactNode } from "react"
import { siteMeta } from "../data/meta"
import NavigationBar from "@/components/NavigationBar"
import AOSInit from "@/components/AOSInit"

export const metadata: Metadata = {
	title: siteMeta.title,
	description: siteMeta.description,
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="font-sans antialiased">
				<AOSInit />
				<NavigationBar />
				{children}
			</body>
		</html>
	)
}