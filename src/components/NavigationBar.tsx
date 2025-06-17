"use client";

import { AppBar, Toolbar, Typography, Box, Link as MuiLink } from "@mui/material";
import Link from "next/link";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export default function NavigationBar() {
    return (
        <AppBar position="sticky" color="default" elevation={1}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6" color="primary">
                    Amadeus Lim
                </Typography>
                <Box>
                    {navItems.map((item) => (
                        <MuiLink
                            key={item.href}
                            component={Link}
                            href={item.href}
                            underline="hover"
                            sx={{ mx: 1 }}
                        >
                            {item.label}
                        </MuiLink>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}