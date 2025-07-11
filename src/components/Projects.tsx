"use client"

import { Button } from '@/components/ui/Button'
import { Box, Stack, Chip, Container, Typography, Card, CardContent, CardActions } from '@mui/material'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { projects } from '@/content/data/projects'
import { useRef, useState } from 'react'
import { 
  OpenInNew, 
  GitHub, 
  RocketLaunch, 
  Star, 
  Code, 
  Visibility,
  AutoAwesome,
  Bolt,
  AssignmentOutlined
} from '@mui/icons-material'
import { useInView } from 'react-intersection-observer'

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const containerRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const backgroundX = useTransform(mouseX, [0, 1], [-50, 50])
  const backgroundY = useTransform(mouseY, [0, 1], [-50, 50])
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mouseX.set(x)
    mouseY.set(y)
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }
  
  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 0.8,
      rotateX: -30
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }
  
  const getProjectIcon = (index: number) => {
    const icons = [RocketLaunch, Code, Star, Visibility, GitHub, Bolt]
    return icons[index % icons.length]
  }
  
  return (
    <Box 
      component={motion.section}
      ref={containerRef}
      id="projects"
      onMouseMove={handleMouseMove}
      sx={{
        py: { xs: 16, md: 20 },
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      {/* Dynamic Background Elements */}
      <motion.div
        style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          x: backgroundX,
          y: backgroundY,
          background: `
            radial-gradient(600px circle at 20% 30%, var(--glass-light), transparent 40%),
            radial-gradient(800px circle at 80% 70%, var(--glass-medium), transparent 50%),
            radial-gradient(400px circle at 60% 20%, var(--glass-dark), transparent 60%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      
      {/* Optimized Floating Geometric Shapes */}
      {[...Array(6)].map((_, i) => {
        const colors = ['var(--neon-cyan)', 'var(--neon-purple)', 'var(--neon-green)', 'var(--neon-orange)', 'var(--neon-pink)', 'var(--neon-yellow)'];
        const positions = [
          { x: 15, y: 20 },
          { x: 85, y: 30 },
          { x: 20, y: 75 },
          { x: 80, y: 80 },
          { x: 50, y: 15 },
          { x: 60, y: 65 }
        ];
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 180, 360],
              scale: [1, 1.15, 1],
              x: [0, 50, -50, 0],
              y: [0, 30, -30, 0],
            }}
            transition={{
              duration: 25 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
              repeatType: "loop"
            }}
            style={{
              position: 'absolute',
              left: `${positions[i].x}%`,
              top: `${positions[i].y}%`,
              width: 50,
              height: 50,
              background: colors[i],
              opacity: 0.05,
              borderRadius: i % 2 === 0 ? '50%' : '25%',
              filter: 'blur(2px)',
              zIndex: 1,
            }}
          />
        );
      })}
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Enhanced Header */}
          <motion.div
            variants={projectVariants}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  fontSize: '2.5rem',
                  boxShadow: 'var(--shadow-glow-cyan)',
                }}
              >
                <AssignmentOutlined sx={{ fontSize: '3rem', color: 'white' }} />
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
              Featured Projects
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: 'absolute',
                  top: -20,
                  right: -40,
                  fontSize: '2rem',
                  color: 'var(--neon-yellow)',
                }}
              >
                <AutoAwesome />
              </motion.div>
            </Typography>
            
            <Typography
              variant="body1"
              sx={{ 
                fontSize: '1.25rem', 
                maxWidth: '700px',
                lineHeight: 1.7,
                mx: 'auto',
                color: 'var(--text-secondary)',
              }}
            >
              Cutting-edge applications crafted with passion, precision, and the latest technologies
            </Typography>
          </motion.div>

          {/* Revolutionary Projects Grid */}
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                lg: 'repeat(3, 1fr)' 
              }, 
              gap: 4,
              perspective: '1000px',
            }}
          >
            <AnimatePresence>
              {projects.map((project, index) => {
                const IconComponent = getProjectIcon(index)
                const isHovered = hoveredProject === project.id
                const isSelected = selectedProject === project.id
                
                return (
                  <motion.div
                    key={project.id}
                    variants={projectVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    onClick={() => setSelectedProject(isSelected ? null : project.id)}
                    style={{
                      transformStyle: 'preserve-3d',
                      cursor: 'pointer',
                    }}
                  >
                    <Card 
                      className={isHovered ? 'card-neon' : 'card-glass'}
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 4,
                        overflow: 'hidden',
                        position: 'relative',
                        background: 'var(--glass-medium)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid var(--glass-border)',
                        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: 'var(--shadow-glow-cyan)',
                          background: 'rgba(255, 255, 255, 0.05)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 3,
                          background: 'var(--gradient-primary)',
                          opacity: 0.8,
                        }
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, p: 4, textAlign: 'center' }}>
                        <Stack spacing={3} alignItems="center">
                          {/* Centered Project Icon Above Title */}
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                          >
                            <Box
                              sx={{
                                width: 70,
                                height: 70,
                                background: `var(--gradient-${index % 2 === 0 ? 'primary' : 'secondary'})`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '1.8rem',
                                boxShadow: 'var(--shadow-soft)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  transform: 'scale(1.1) rotate(10deg)',
                                },
                                mb: 2,
                              }}
                            >
                              <IconComponent />
                            </Box>
                          </motion.div>
                          
                          <Typography
                            variant="h3"
                            sx={{
                              fontSize: { xs: '1.5rem', sm: '1.75rem' },
                              fontWeight: 700,
                              color: 'rgba(255, 255, 255, 0.95)',
                              lineHeight: 1.3,
                              mb: 2,
                            }}
                          >
                            {project.title}
                          </Typography>
                          
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: '1rem',
                              lineHeight: 1.7,
                              color: 'rgba(255, 255, 255, 0.75)',
                              display: '-webkit-box',
                              WebkitLineClamp: isSelected ? 'none' : 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {project.description}
                          </Typography>
                          
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                          >
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                              {project.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={techIndex}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.5 + techIndex * 0.05 }}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <Chip
                                    label={tech.name}
                                    size="small"
                                    sx={{
                                      background: isHovered 
                                        ? 'linear-gradient(90deg, #0ea5e9, #8b5cf6)' 
                                        : 'rgba(255, 255, 255, 0.08)',
                                      color: isHovered 
                                        ? 'white' 
                                        : 'rgba(255, 255, 255, 0.8)',
                                      fontSize: '0.75rem',
                                      fontWeight: 600,
                                      border: `1px solid ${isHovered ? 'transparent' : 'rgba(255, 255, 255, 0.1)'}`,
                                      transition: 'all 0.3s ease',
                                      '&:hover': {
                                        background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
                                        color: 'white',
                                        transform: 'translateY(-2px)',
                                      },
                                    }}
                                  />
                                </motion.div>
                              ))}
                            </Stack>
                          </motion.div>
                        </Stack>
                      </CardContent>
                      
                      <CardActions sx={{ p: 4, pt: 0 }}>
                        <Stack direction="row" spacing={2} width="100%">
                          {project.links.map((link, linkIndex) => (
                            <motion.div
                              key={linkIndex}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              style={{ flex: 1 }}
                            >
                              <Button
                                variant={link.type === 'website' ? 'primary' : 'outline'}
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(link.url, '_blank')
                                }}
                                style={{
                                  width: '100%',
                                  background: link.type === 'website' 
                                    ? 'var(--gradient-primary)' 
                                    : 'transparent',
                                  color: link.type === 'website' ? 'white' : 'var(--text-secondary)',
                                  border: link.type === 'website' ? 'none' : '1px solid var(--glass-border)',
                                  padding: '10px 20px',
                                  fontSize: '0.9rem',
                                  fontWeight: 600,
                                  borderRadius: '8px',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '8px',
                                }}
                              >
                                {link.type === 'website' ? <OpenInNew /> : <GitHub />}
                                {link.label}
                              </Button>
                            </motion.div>
                          ))}
                        </Stack>
                      </CardActions>
                    </Card>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </Box>

          {/* Enhanced Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.8 }}
            style={{ textAlign: 'center', marginTop: '4rem' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                style={{
                  background: 'var(--glass-glow)',
                  border: '2px solid var(--neon-cyan)',
                  color: 'var(--neon-cyan)',
                  padding: '16px 32px',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
                onClick={() => window.open('https://github.com/amalimm', '_blank')}
              >
                <RocketLaunch />
                <span>Explore More Projects</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}