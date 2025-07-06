import "@/styles/globals.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { Metadata } from "next"
import { ReactNode } from "react"
import { siteMetadata } from "@/content/data/metadata"
import { ThemeProvider } from "@/components/ThemeProvider"

export const metadata: Metadata = {
	title: siteMetadata.title,
	description: siteMetadata.description,
	keywords: siteMetadata.seo.keywords,
	authors: [{ name: siteMetadata.author }],
	creator: siteMetadata.author,
	publisher: siteMetadata.author,
	robots: siteMetadata.seo.robots,
	openGraph: {
		type: 'website',
		locale: siteMetadata.locale,
		url: siteMetadata.siteUrl,
		title: siteMetadata.seo.ogTitle || siteMetadata.title,
		description: siteMetadata.seo.ogDescription || siteMetadata.description,
		siteName: siteMetadata.title,
		images: siteMetadata.seo.ogImage ? [
			{
				url: siteMetadata.seo.ogImage,
				width: 1200,
				height: 630,
				alt: siteMetadata.title,
			}
		] : undefined,
	},
	twitter: {
		card: siteMetadata.seo.twitterCard,
		title: siteMetadata.seo.ogTitle || siteMetadata.title,
		description: siteMetadata.seo.ogDescription || siteMetadata.description,
		creator: siteMetadata.seo.twitterCreator,
		images: siteMetadata.seo.ogImage ? [siteMetadata.seo.ogImage] : undefined,
	},
	alternates: {
		canonical: siteMetadata.seo.canonicalUrl || siteMetadata.siteUrl,
	},
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang={siteMetadata.language}>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(siteMetadata.seo.structuredData),
					}}
				/>
			</head>
			<body>
				<ThemeProvider>
					<main className="relative">
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	)
}