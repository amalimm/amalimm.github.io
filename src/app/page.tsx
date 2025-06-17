"use client";

import { Box, Typography, Paper } from "@mui/material";
import { homeContent } from "@/data/home";

export default function HomePage() {
	return (
		<Paper elevation={1} sx={{ p: 4, bgcolor: "background.paper" }}>
			<Box>
				<Typography variant="h3" gutterBottom color="primary">
					{homeContent.introTitle}
				</Typography>
				<Typography variant="h4" gutterBottom>
					{homeContent.headline}
				</Typography>
				<Typography variant="subtitle1" sx={{ mb: 3, color: "text.secondary" }}>
					{homeContent.subline}
				</Typography>
				<Typography variant="body1" sx={{ maxWidth: "60ch", lineHeight: 1.7 }}>
					{homeContent.description}
				</Typography>
			</Box>
		</Paper>
	);
}