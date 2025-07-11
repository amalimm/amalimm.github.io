"use client"

import { motion } from "framer-motion"
import { Box } from "@mui/material"
import { useMemo } from "react"

export function FloatingElements() {
  // Optimized particle system with reduced count for better performance
  const floatingElements = useMemo(() => [
    {
      id: 1,
      size: 60,
      color: "rgba(14, 165, 233, 0.05)",
      initialX: "10%",
      initialY: "20%",
      duration: 25,
    },
    {
      id: 2,
      size: 40,
      color: "rgba(139, 92, 246, 0.05)",
      initialX: "85%",
      initialY: "60%",
      duration: 30,
    },
    {
      id: 3,
      size: 80,
      color: "rgba(245, 158, 11, 0.05)",
      initialX: "60%",
      initialY: "80%",
      duration: 35,
    },
    {
      id: 4,
      size: 35,
      color: "rgba(100, 116, 139, 0.05)",
      initialX: "20%",
      initialY: "90%",
      duration: 28,
    },
    {
      id: 5,
      size: 50,
      color: "rgba(14, 165, 233, 0.04)",
      initialX: "90%",
      initialY: "15%",
      duration: 32,
    },
    {
      id: 6,
      size: 70,
      color: "rgba(139, 92, 246, 0.04)",
      initialX: "45%",
      initialY: "35%",
      duration: 38,
    },
  ], [])

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          style={{
            position: "absolute",
            left: element.initialX,
            top: element.initialY,
            width: element.size,
            height: element.size,
            borderRadius: "50%",
            background: element.color,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      ))}
      
      {/* Morphing Background Shapes */}
      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          left: "70%",
          width: 200,
          height: 200,
          background: "linear-gradient(45deg, rgba(14, 165, 233, 0.03), rgba(139, 92, 246, 0.03))",
          filter: "blur(50px)",
        }}
        animate={{
          borderRadius: ["20%", "60%", "40%", "20%"],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      />
      
      <motion.div
        style={{
          position: "absolute",
          top: "60%",
          left: "10%",
          width: 150,
          height: 150,
          background: "linear-gradient(135deg, rgba(245, 158, 11, 0.03), rgba(100, 116, 139, 0.03))",
          filter: "blur(45px)",
        }}
        animate={{
          borderRadius: ["40%", "20%", "60%", "40%"],
          rotate: [360, 180, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      />
    </Box>
  )
}