"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { Box } from "@mui/material"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        zIndex: 1000,
        background: "linear-gradient(90deg, #0ea5e9, #8b5cf6, #f59e0b)",
        transformOrigin: "0%",
      }}
      component={motion.div}
      style={{ scaleX }}
    />
  )
}