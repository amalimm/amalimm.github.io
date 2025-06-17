// app/about/page.tsx
"use client";

import { aboutData } from "@/data/about";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";

export default function AboutPage() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {aboutData.bio}
            </Typography>
            <Typography variant="h6" sx={{ mt: 3 }}>
                Highlights
            </Typography>
            <List>
                {aboutData.highlights.map((point, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText primary={`• ${point}`} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}