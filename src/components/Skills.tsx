"use client"

import { Box, Container, Typography } from '@mui/material'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaServer, FaTools, FaCloud, FaCode } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiDocker, SiKubernetes, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { HiSparkles } from 'react-icons/hi'

// Revolutionary skill constellation data
const skillNodes = [
  { id: 'react', name: 'React', icon: FaReact, level: 95, x: 0.3, y: 0.2, category: 'frontend', color: 'var(--neon-cyan)' },
  { id: 'typescript', name: 'TypeScript', icon: SiTypescript, level: 90, x: 0.6, y: 0.15, category: 'language', color: 'var(--neon-blue)' },
  { id: 'nextjs', name: 'Next.js', icon: SiNextdotjs, level: 88, x: 0.2, y: 0.4, category: 'frontend', color: 'var(--neon-purple)' },
  { id: 'javascript', name: 'JavaScript', icon: SiJavascript, level: 95, x: 0.7, y: 0.3, category: 'language', color: 'var(--neon-yellow)' },
  { id: 'nodejs', name: 'Node.js', icon: FaNodeJs, level: 85, x: 0.1, y: 0.6, category: 'backend', color: 'var(--neon-green)' },
  { id: 'python', name: 'Python', icon: FaPython, level: 80, x: 0.8, y: 0.5, category: 'language', color: 'var(--neon-orange)' },
  { id: 'mongodb', name: 'MongoDB', icon: SiMongodb, level: 75, x: 0.4, y: 0.7, category: 'database', color: 'var(--neon-green)' },
  { id: 'postgresql', name: 'PostgreSQL', icon: SiPostgresql, level: 80, x: 0.6, y: 0.8, category: 'database', color: 'var(--neon-blue)' },
  { id: 'docker', name: 'Docker', icon: SiDocker, level: 70, x: 0.9, y: 0.7, category: 'devops', color: 'var(--neon-cyan)' },
  { id: 'kubernetes', name: 'Kubernetes', icon: SiKubernetes, level: 65, x: 0.15, y: 0.85, category: 'devops', color: 'var(--neon-purple)' },
  { id: 'tailwind', name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, x: 0.5, y: 0.45, category: 'frontend', color: 'var(--neon-cyan)' },
  { id: 'aws', name: 'AWS', icon: FaCloud, level: 75, x: 0.35, y: 0.9, category: 'cloud', color: 'var(--neon-orange)' },
]

// Constellation connections based on technology relationships
const connections = [
  { from: 'react', to: 'typescript', strength: 0.9 },
  { from: 'react', to: 'nextjs', strength: 0.95 },
  { from: 'nextjs', to: 'typescript', strength: 0.8 },
  { from: 'javascript', to: 'typescript', strength: 0.7 },
  { from: 'react', to: 'tailwind', strength: 0.8 },
  { from: 'nodejs', to: 'javascript', strength: 0.9 },
  { from: 'nodejs', to: 'typescript', strength: 0.8 },
  { from: 'mongodb', to: 'nodejs', strength: 0.7 },
  { from: 'postgresql', to: 'nodejs', strength: 0.7 },
  { from: 'docker', to: 'kubernetes', strength: 0.8 },
  { from: 'nodejs', to: 'docker', strength: 0.6 },
  { from: 'python', to: 'aws', strength: 0.6 },
]

const categories = [
  { id: 'frontend', name: 'Frontend', color: 'var(--neon-cyan)', icon: FaCode },
  { id: 'backend', name: 'Backend', color: 'var(--neon-green)', icon: FaServer },
  { id: 'language', name: 'Languages', color: 'var(--neon-yellow)', icon: FaCode },
  { id: 'database', name: 'Database', color: 'var(--neon-blue)', icon: FaDatabase },
  { id: 'devops', name: 'DevOps', color: 'var(--neon-purple)', icon: FaTools },
  { id: 'cloud', name: 'Cloud', color: 'var(--neon-orange)', icon: FaCloud },
]

export function Skills() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const backgroundX = useTransform(mouseX, [0, 1], [-30, 30])
  const backgroundY = useTransform(mouseY, [0, 1], [-30, 30])
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mouseX.set(x)
    mouseY.set(y)
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }
  
  const filteredNodes = selectedCategory 
    ? skillNodes.filter(node => node.category === selectedCategory)
    : skillNodes
  
  const filteredConnections = connections.filter(conn => 
    filteredNodes.some(node => node.id === conn.from) && 
    filteredNodes.some(node => node.id === conn.to)
  )
  
  return (
    <Box 
      component={motion.section}
      ref={containerRef}
      id="skills"
      onMouseMove={handleMouseMove}
      sx={{
        py: { xs: 16, md: 20 },
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
        minHeight: '100vh',
      }}
    >
      {/* Dynamic Background Constellation */}
      <motion.div
        style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          x: backgroundX,
          y: backgroundY,
          background: `
            radial-gradient(800px circle at 30% 40%, var(--glass-light), transparent 50%),
            radial-gradient(600px circle at 70% 80%, var(--glass-medium), transparent 60%),
            radial-gradient(400px circle at 20% 90%, var(--glass-dark), transparent 40%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      
      {/* Floating Cosmic Dust */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.6, 0.1],
            scale: [0.5, 1.2, 0.5],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 2,
            height: 2,
            borderRadius: '50%',
            background: i % 6 === 0 ? 'var(--neon-cyan)' : 
                       i % 6 === 1 ? 'var(--neon-purple)' : 
                       i % 6 === 2 ? 'var(--neon-green)' : 
                       i % 6 === 3 ? 'var(--neon-orange)' :
                       i % 6 === 4 ? 'var(--neon-yellow)' : 'var(--neon-pink)',
            filter: 'blur(0.5px)',
            boxShadow: `0 0 20px currentColor`,
            zIndex: 1,
          }}
        />
      ))}
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Revolutionary Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 }}
            >
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  fontSize: '3rem',
                  boxShadow: 'var(--shadow-glow-cyan)',
                  animation: 'pulse 3s ease-in-out infinite',
                }}
              >
                ⚡
              </Box>
            </motion.div>
            
            <Typography
              variant="h2"
              className="gradient-text"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
                fontWeight: 800,
                mb: 2,
                position: 'relative',
              }}
            >
              Skills Constellation
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: 'absolute',
                  top: -30,
                  right: -50,
                  fontSize: '2.5rem',
                  color: 'var(--neon-yellow)',
                }}
              >
                <HiSparkles />
              </motion.div>
            </Typography>
            
            <Typography
              variant="body1"
              sx={{ 
                fontSize: '1.25rem', 
                maxWidth: '800px',
                lineHeight: 1.7,
                mx: 'auto',
                color: 'var(--text-secondary)',
              }}
            >
              An interactive map of technologies that power modern digital experiences
            </Typography>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ marginBottom: '4rem' }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  onClick={() => setSelectedCategory(null)}
                  className={selectedCategory === null ? 'card-neon' : 'card-glass'}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: '25px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: selectedCategory === null ? 'var(--gradient-primary)' : 'var(--glass-medium)',
                    color: selectedCategory === null ? 'white' : 'var(--text-secondary)',
                    border: `1px solid ${selectedCategory === null ? 'var(--neon-cyan)' : 'var(--glass-border)'}`,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  All Skills
                </Box>
              </motion.div>
              
              {categories.map((category, index) => {
                const IconComponent = category.icon
                const isSelected = selectedCategory === category.id
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Box
                      onClick={() => setSelectedCategory(isSelected ? null : category.id)}
                      className={isSelected ? 'card-neon' : 'card-glass'}
                      sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: '25px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: isSelected ? 'var(--gradient-secondary)' : 'var(--glass-medium)',
                        color: isSelected ? 'white' : 'var(--text-secondary)',
                        border: `1px solid ${isSelected ? category.color : 'var(--glass-border)'}`,
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <IconComponent style={{ color: isSelected ? 'white' : category.color }} />
                      {category.name}
                    </Box>
                  </motion.div>
                )
              })}
            </Box>
          </motion.div>

          {/* Interactive Constellation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Box
              sx={{
                position: 'relative',
                height: '70vh',
                minHeight: '600px',
                borderRadius: 4,
                overflow: 'hidden',
                background: 'var(--glass-dark)',
                border: '1px solid var(--glass-border)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Constellation Connections */}
              <svg
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                }}
              >
                <AnimatePresence>
                  {filteredConnections.map((connection, index) => {
                    const fromNode = skillNodes.find(n => n.id === connection.from)
                    const toNode = skillNodes.find(n => n.id === connection.to)
                    
                    if (!fromNode || !toNode) return null
                    
                    return (
                      <motion.line
                        key={`${connection.from}-${connection.to}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: connection.strength * 0.6 }}
                        exit={{ pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        x1={`${fromNode.x * 100}%`}
                        y1={`${fromNode.y * 100}%`}
                        x2={`${toNode.x * 100}%`}
                        y2={`${toNode.y * 100}%`}
                        stroke="var(--neon-cyan)"
                        strokeWidth="1"
                        strokeOpacity={connection.strength * 0.5}
                        filter="url(#glow)"
                      />
                    )
                  })}
                </AnimatePresence>
                
                {/* SVG Filters */}
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>
              
              {/* Skill Nodes */}
              <AnimatePresence>
                {filteredNodes.map((skill, index) => {
                  const IconComponent = skill.icon
                  const isSelected = selectedNode === skill.id
                  const isRelated = selectedNode && connections.some(c => 
                    (c.from === selectedNode && c.to === skill.id) || 
                    (c.to === selectedNode && c.from === skill.id)
                  )
                  
                  return (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                      whileHover={{ scale: 1.2, z: 50 }}
                      onHoverStart={() => setSelectedNode(skill.id)}
                      onHoverEnd={() => setSelectedNode(null)}
                      style={{
                        position: 'absolute',
                        left: `${skill.x * 100}%`,
                        top: `${skill.y * 100}%`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: isSelected ? 10 : 5,
                        cursor: 'pointer',
                      }}
                    >
                      <motion.div
                        animate={{
                          boxShadow: isSelected || isRelated 
                            ? [`0 0 20px ${skill.color}`, `0 0 40px ${skill.color}`, `0 0 20px ${skill.color}`]
                            : [`0 0 10px ${skill.color}`, `0 0 15px ${skill.color}`, `0 0 10px ${skill.color}`],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                          border: `2px solid ${skill.color}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <IconComponent 
                          style={{ 
                            fontSize: '2rem', 
                            color: skill.color,
                            filter: 'drop-shadow(0 0 10px currentColor)'
                          }} 
                        />
                      </motion.div>
                      
                      {/* Skill Info Tooltip */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: -120, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              position: 'absolute',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              background: 'var(--bg-surface)',
                              border: `2px solid ${skill.color}`,
                              borderRadius: '12px',
                              padding: '12px 16px',
                              minWidth: '150px',
                              textAlign: 'center',
                              boxShadow: `0 10px 30px ${skill.color}30`,
                              backdropFilter: 'blur(20px)',
                            }}
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                color: skill.color,
                                fontWeight: 700,
                                fontSize: '1rem',
                                mb: 0.5,
                              }}
                            >
                              {skill.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: 1,
                                mb: 1,
                                display: 'block',
                              }}
                            >
                              {skill.category}
                            </Typography>
                            <Box
                              sx={{
                                width: '100%',
                                height: 4,
                                background: 'var(--glass-dark)',
                                borderRadius: 2,
                                overflow: 'hidden',
                              }}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                style={{
                                  height: '100%',
                                  background: skill.color,
                                  borderRadius: 2,
                                }}
                              />
                            </Box>
                            <Typography
                              variant="caption"
                              sx={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.7rem',
                                mt: 0.5,
                                display: 'block',
                              }}
                            >
                              {skill.level}% Proficiency
                            </Typography>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </Box>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ marginTop: '4rem', textAlign: 'center' }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                maxWidth: '600px',
                mx: 'auto',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              Each node represents a mastered technology. Connections show how these skills work together to create powerful, scalable solutions.
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}