"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
]

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsOpen(false)
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/20"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex-shrink-0"
                    >
                        <button
                            onClick={() => scrollToSection("#home")}
                            className={cn(
                                "text-2xl font-bold transition-colors",
                                scrolled ? "text-gray-900" : "text-white"
                            )}
                        >
                            Amadeus<span className="text-purple-500">.</span>
                        </button>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex items-center space-x-12">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className={cn(
                                        "px-4 py-2 text-base font-medium transition-all duration-200 hover:scale-105 rounded-lg",
                                        scrolled
                                            ? "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                                            : "text-gray-300 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Theme Toggle & Mobile Menu Button */}
                    <div className="flex items-center space-x-6">
                        <motion.button
                            onClick={() => setIsDark(!isDark)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={cn(
                                "p-3 rounded-full transition-all duration-200 border",
                                scrolled
                                    ? "text-gray-700 hover:bg-purple-50 border-gray-200 hover:border-purple-300"
                                    : "text-white hover:bg-white/10 border-white/20 hover:border-white/40"
                            )}
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </motion.button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "md:hidden p-2 rounded-md transition-colors",
                                scrolled
                                    ? "text-gray-700 hover:bg-gray-100"
                                    : "text-white hover:bg-white/10"
                            )}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}