"use client"

import { motion } from "framer-motion"
import { Box } from "@mui/material"

export function FloatingElements() {

  const floatingElements = [
    {
      id: 1,
      size: 60,
      color: "rgba(14, 165, 233, 0.1)",
      initialX: "10%",
      initialY: "20%",
      duration: 20,
    },
    {
      id: 2,
      size: 40,
      color: "rgba(139, 92, 246, 0.1)",
      initialX: "85%",
      initialY: "60%",
      duration: 25,
    },
    {
      id: 3,
      size: 80,
      color: "rgba(245, 158, 11, 0.1)",
      initialX: "60%",
      initialY: "80%",
      duration: 30,
    },
    {
      id: 4,
      size: 35,
      color: "rgba(100, 116, 139, 0.1)",
      initialX: "20%",
      initialY: "90%",
      duration: 18,
    },
    {
      id: 5,
      size: 50,
      color: "rgba(14, 165, 233, 0.08)",
      initialX: "90%",
      initialY: "15%",
      duration: 22,
    },
    {
      id: 6,
      size: 70,
      color: "rgba(139, 92, 246, 0.08)",
      initialX: "45%",
      initialY: "35%",
      duration: 28,
    },
  ]

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
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
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
          background: "linear-gradient(45deg, rgba(14, 165, 233, 0.05), rgba(139, 92, 246, 0.05))",
          filter: "blur(40px)",
        }}
        animate={{
          borderRadius: ["20%", "60%", "40%", "20%"],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.3, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
      
      <motion.div
        style={{
          position: "absolute",
          top: "60%",
          left: "10%",
          width: 150,
          height: 150,
          background: "linear-gradient(135deg, rgba(245, 158, 11, 0.05), rgba(100, 116, 139, 0.05))",
          filter: "blur(35px)",
        }}
        animate={{
          borderRadius: ["40%", "20%", "60%", "40%"],
          rotate: [360, 270, 180, 90, 0],
          scale: [1, 0.7, 1.4, 0.9, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </Box>
  )
}