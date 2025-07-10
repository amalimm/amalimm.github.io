"use client"

import { motion, useSpring } from 'framer-motion'
import { useCallback, useState } from 'react'

interface SpotlightEffectProps {
  children: React.ReactNode
}

export function SpotlightEffect({ children }: SpotlightEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  
  const mouseX = useSpring(0.5, { damping: 25, stiffness: 400 })
  const mouseY = useSpring(0.5, { damping: 25, stiffness: 400 })
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    setMousePosition({ x, y })
    mouseX.set(x)
    mouseY.set(y)
  }, [mouseX, mouseY])
  
  const handleMouseLeave = useCallback(() => {
    setMousePosition({ x: 0.5, y: 0.5 })
    mouseX.set(0.5)
    mouseY.set(0.5)
  }, [mouseX, mouseY])
  
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Multiple spotlight layers for depth */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(800px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(14, 165, 233, 0.15), rgba(14, 165, 233, 0.05) 40%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 3,
          transition: 'background 0.3s ease',
        }}
      />
      
      {/* Secondary glow */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(400px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(139, 92, 246, 0.1), transparent 60%)`,
          pointerEvents: 'none',
          zIndex: 2,
          transition: 'background 0.4s ease',
        }}
      />
      
      {/* Tertiary ambient light */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(1200px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(245, 158, 11, 0.03), transparent 80%)`,
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'background 0.5s ease',
        }}
      />
      
      {/* Grid pattern revealed by spotlight */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, black 20%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, black 20%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 4,
          transition: 'mask-image 0.3s ease, -webkit-mask-image 0.3s ease',
        }}
      />
      
      {/* Dot pattern for extra detail */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(14, 165, 233, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          maskImage: `radial-gradient(400px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, black 10%, transparent 60%)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, black 10%, transparent 60%)`,
          pointerEvents: 'none',
          zIndex: 5,
          transition: 'mask-image 0.3s ease, -webkit-mask-image 0.3s ease',
        }}
      />
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </div>
  )
}