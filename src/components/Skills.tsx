"use client"

import { Box, Container, lighten, Typography } from '@mui/material'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { useState, useRef, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { skills } from '@/content/data/skills'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaServer, FaTools, FaCloud, FaCode, FaAws } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiDocker, SiKubernetes, SiNextdotjs, SiTailwindcss, SiLaravel, SiPhp, SiMysql, SiRedux } from 'react-icons/si'
import { HiSparkles } from 'react-icons/hi'
import { LightbulbOutline } from '@mui/icons-material'

// Icon mapping for skills
const getSkillIcon = (skillId: string) => {
  const iconMap: { [key: string]: React.ComponentType<{ style?: React.CSSProperties }> } = {
    'react': FaReact,
    'typescript': SiTypescript,
    'javascript': SiJavascript,
    'laravel': SiLaravel,
    'php': SiPhp,
    'mysql': SiMysql,
    'redux': SiRedux,
    'nodejs': FaNodeJs,
    'python': FaPython,
    'aws': FaAws,
    'docker': SiDocker,
    'kubernetes': SiKubernetes,
    'nextjs': SiNextdotjs,
    'tailwindcss': SiTailwindcss,
    'mongodb': SiMongodb,
    'postgresql': SiPostgresql,
    'frontend-development': FaCode,
    'uix': FaCode,
    'full-stack-development': FaServer,
    'web-development': FaCloud,
    'software-development': FaTools,
    'devops': FaTools,
    'postman-api': FaTools,
    'asana': FaTools,
    'programming': FaCode,
    'cpp': FaCode,
    'mathematica': FaCode,
    'matlab': FaCode,
    'oracle-database': FaDatabase,
    'database-design': FaDatabase,
    'javascript-frameworks': FaReact,
    'rest-apis': FaServer,
    'agile-methodologies': FaTools,
    'sdlc': FaTools,
    'project-leadership': FaTools,
    'leadership': FaTools,
    'problem-solving': FaTools,
    'project-management': FaTools,
    'communication': FaTools,
    'teaching': FaTools,
  }
  return iconMap[skillId] || FaCode
}

// Generate constellation positions based on skill categories and proficiency
const generateSkillNodes = () => {
  const featuredSkills = skills.filter(skill => skill.featured).sort((a, b) => (b.endorsements || 0) - (a.endorsements || 0)).slice(0, 12)
  
  const categoryPositions = {
    'frontend': { base: { x: 0.2, y: 0.3 }, spread: 0.15 },
    'backend': { base: { x: 0.8, y: 0.4 }, spread: 0.15 },
    'database': { base: { x: 0.5, y: 0.7 }, spread: 0.1 },
    'devops': { base: { x: 0.7, y: 0.8 }, spread: 0.1 },
    'tools': { base: { x: 0.3, y: 0.8 }, spread: 0.1 },
    'languages': { base: { x: 0.5, y: 0.2 }, spread: 0.15 },
    'frameworks': { base: { x: 0.2, y: 0.6 }, spread: 0.1 },
    'design': { base: { x: 0.1, y: 0.4 }, spread: 0.1 },
    'methodology': { base: { x: 0.6, y: 0.6 }, spread: 0.1 },
    'soft-skills': { base: { x: 0.4, y: 0.9 }, spread: 0.1 },
    'other': { base: { x: 0.8, y: 0.2 }, spread: 0.1 },
  }
  
  return featuredSkills.map((skill, index) => {
    const categoryPos = categoryPositions[skill.category as keyof typeof categoryPositions] || categoryPositions.other
    const angle = (index * Math.PI * 2) / featuredSkills.length
    
    return {
      id: skill.id,
      name: skill.name,
      icon: getSkillIcon(skill.id),
      level: Math.round(((skill.yearsOfExperience || 1) / 3) * 100), // Convert years to percentage
      x: Math.max(0.1, Math.min(0.9, categoryPos.base.x + Math.cos(angle) * categoryPos.spread)),
      y: Math.max(0.1, Math.min(0.9, categoryPos.base.y + Math.sin(angle) * categoryPos.spread)),
      category: skill.category,
      color: skill.color,
      endorsements: skill.endorsements,
      yearsOfExperience: skill.yearsOfExperience || 1,
    }
  })
}

// Generate connections based on skill relationships
const generateConnections = (skillNodes: Array<{ id: string; endorsements: number | undefined; category?: string; name?: string; color?: string; yearsOfExperience?: number }>) => {
  const connections: Array<{ from: string; to: string; strength: number }> = []
  
  // Define relationship mappings
  const relationshipMap = {
    'react': ['typescript', 'javascript', 'redux', 'frontend-development'],
    'typescript': ['javascript', 'react', 'frontend-development'],
    'javascript': ['react', 'typescript', 'frontend-development', 'nodejs'],
    'laravel': ['php', 'mysql', 'backend', 'rest-apis'],
    'php': ['laravel', 'mysql', 'backend'],
    'mysql': ['laravel', 'php', 'database-design'],
    'redux': ['react', 'javascript', 'frontend-development'],
    'frontend-development': ['react', 'javascript', 'typescript', 'uix'],
    'uix': ['frontend-development', 'web-development'],
    'full-stack-development': ['frontend-development', 'laravel', 'web-development'],
    'web-development': ['frontend-development', 'full-stack-development', 'uix'],
    'aws': ['devops', 'full-stack-development'],
    'devops': ['aws', 'agile-methodologies'],
    'postman-api': ['rest-apis', 'laravel'],
    'asana': ['project-management', 'agile-methodologies'],
    'agile-methodologies': ['sdlc', 'project-leadership', 'asana'],
    'sdlc': ['agile-methodologies', 'project-leadership'],
    'project-leadership': ['leadership', 'project-management'],
    'leadership': ['project-management', 'communication', 'teaching'],
    'project-management': ['leadership', 'problem-solving'],
    'problem-solving': ['programming', 'project-management'],
    'communication': ['leadership', 'teaching'],
    'teaching': ['communication', 'leadership'],
    'programming': ['javascript', 'typescript', 'problem-solving'],
    'rest-apis': ['laravel', 'postman-api'],
  }
  
  skillNodes.forEach(fromSkill => {
    const relatedSkills = relationshipMap[fromSkill.id as keyof typeof relationshipMap] || []
    relatedSkills.forEach(toSkillId => {
      const toSkill = skillNodes.find(s => s.id === toSkillId)
      if (toSkill) {
        connections.push({
          from: fromSkill.id,
          to: toSkill.id,
          strength: Math.min(0.9, ((fromSkill.endorsements || 0) + (toSkill.endorsements || 0)) / 50)
        })
      }
    })
  })
  
  return connections
}

const categories = [
  { id: 'frontend', name: 'Frontend', color: 'var(--neon-cyan)', icon: FaCode },
  { id: 'backend', name: 'Backend', color: 'var(--neon-green)', icon: FaServer },
  { id: 'languages', name: 'Languages', color: 'var(--neon-yellow)', icon: FaCode },
  { id: 'database', name: 'Database', color: 'var(--neon-blue)', icon: FaDatabase },
  { id: 'devops', name: 'DevOps', color: 'var(--neon-purple)', icon: FaTools },
  { id: 'tools', name: 'Tools', color: 'var(--neon-orange)', icon: FaTools },
  { id: 'frameworks', name: 'Frameworks', color: 'var(--neon-pink)', icon: FaReact },
  { id: 'design', name: 'Design', color: 'var(--neon-teal)', icon: FaCode },
  { id: 'methodology', name: 'Methodology', color: 'var(--neon-indigo)', icon: FaTools },
  { id: 'soft-skills', name: 'Soft Skills', color: 'var(--neon-rose)', icon: FaTools },
  { id: 'other', name: 'Other', color: 'var(--neon-gray)', icon: FaCode },
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
  
  // Generate skill nodes and connections dynamically
  const skillNodes = useMemo(() => generateSkillNodes(), [])
  const connections = useMemo(() => generateConnections(skillNodes), [skillNodes])
  
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
            radial-gradient(800px circle at 45% 10%, var(--glass-light), transparent 50%),
            radial-gradient(600px circle at 70% 80%, var(--glass-medium), transparent 60%),
            radial-gradient(400px circle at 20% 90%, var(--glass-dark), transparent 40%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      
      {/* Optimized Floating Cosmic Dust */}
      {[...Array(12)].map((_, i) => {
        const colors = ['var(--neon-cyan)', 'var(--neon-purple)', 'var(--neon-green)', 'var(--neon-orange)', 'var(--neon-yellow)', 'var(--neon-pink)'];
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1.1, 0.5],
              x: [0, 60, -60, 0],
              y: [0, 40, -40, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
              repeatType: "loop"
            }}
            style={{
              position: 'absolute',
              left: `${10 + (i * 8)}%`,
              top: `${15 + (i * 7)}%`,
              width: 3,
              height: 3,
              borderRadius: '50%',
              background: colors[i % colors.length],
              filter: 'blur(0.5px)',
              boxShadow: `0 0 15px currentColor`,
              zIndex: 1,
            }}
          />
        );
      })}
      
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
                }}
              >
                <LightbulbOutline sx={{ fontSize: '3rem', color: 'white' }} />
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
                  top: '4.5%',
                  left: '3.3%',
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
                          backgroundColor: isSelected || isRelated ? `${skill.color}50` : 'transparent',
                        }}
                      >
                        <IconComponent 
                          style={{ 
                            fontSize: '2rem', 
                            color: isSelected || isRelated ? lighten(skill.color || '', 0.7) : skill.color,
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
                              left: '125%',
                              top: '125%',
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