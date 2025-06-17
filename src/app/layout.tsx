// app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { siteMeta } from "../data/meta";
import NavigationBar from "@/components/NavigationBar";
import { Container, Box } from "@mui/material";

export const metadata: Metadata = {
	title: siteMeta.title,
	description: siteMeta.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<NavigationBar />

				<Container maxWidth="md" sx={{ my: 4 }}>
					{children}
				</Container>

				<Box component="footer" sx={{ textAlign: "center", py: 4, color: "gray" }}>
					© {new Date().getFullYear()} Amadeus Lim
				</Box>
			</body>
		</html>
	);
}