"use client"

import { Button } from '@/components/ui/Button'
import { Box, Stack, Chip, Container, Typography, Card, CardContent, CardActions } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import { projects } from '@/content/data/projects'
import { useRef, useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode, FaRocket, FaStar } from 'react-icons/fa'
import { useInView as useInViewHook } from 'react-intersection-observer'

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const { ref, inView } = useInViewHook({ threshold: 0.1, triggerOnce: true })
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Enhanced spring animation for the section
  const sectionSpring = useSpring({
    transform: inView ? 'translateY(0px)' : 'translateY(100px)',
    opacity: inView ? 1 : 0,
    config: { tension: 280, friction: 60 }
  })
  
  // Background pattern animation
  const backgroundPattern = useSpring({
    from: { backgroundPosition: '0% 0%' },
    to: { backgroundPosition: '100% 100%' },
    config: { duration: 20000 },
    loop: true
  })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }
  
  const getProjectIcon = (index: number) => {
    const icons = [FaRocket, FaCode, FaStar, FaEye, FaGithub]
    return icons[index % icons.length]
  }
  
  return (
    <Box 
      component={animated.section}
      ref={ref}
      id="projects"
      style={{
        ...sectionSpring,
        ...backgroundPattern,
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)
        `,
        backgroundSize: '600px 600px',
      }}
      sx={{
        py: { xs: 16, md: 20 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 60,
          height: 60,
          background: 'linear-gradient(45deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          zIndex: 1,
        }}
      />
      
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '60%',
          right: '8%',
          width: 80,
          height: 80,
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(100, 116, 139, 0.1))',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Stack spacing={8} alignItems="center">
            {/* Enhanced Header */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Box textAlign="center" sx={{ mb: 4 }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      fontSize: '2rem',
                      boxShadow: '0 10px 30px rgba(14, 165, 233, 0.3)',
                    }}
                  >
                    💼
                  </Box>
                </motion.div>
                
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                    fontWeight: 800,
                    mb: 2,
                    background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6, #f59e0b)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    position: 'relative',
                  }}
                >
                  Featured Projects
                  <motion.div
                    animate={{
                      scaleX: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      position: 'absolute',
                      bottom: -10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      height: 4,
                      background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6)',
                      borderRadius: 2,
                      width: '60%',
                    }}
                  />
                </Typography>
                
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    fontSize: '1.25rem', 
                    maxWidth: '600px',
                    lineHeight: 1.6,
                  }}
                >
                  Innovative solutions crafted with passion and precision
                </Typography>
              </Box>
            </motion.div>

            {/* Revolutionary Projects Grid */}
            <Box 
              ref={containerRef}
              sx={{ 
                display: 'grid', 
                gridTemplateColumns: { 
                  xs: '1fr', 
                  sm: 'repeat(2, 1fr)', 
                  lg: 'repeat(3, 1fr)' 
                }, 
                gap: 4,
                width: '100%',
                perspective: 1000,
              }}
            >
              <AnimatePresence>
                {projects.map((project, index) => {
                  const IconComponent = getProjectIcon(index)
                  return (
                    <motion.div
                      key={project.id}
                      variants={projectVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02, 
                        rotateY: 5,
                        z: 50,
                      }}
                      onHoverStart={() => setHoveredProject(project.id)}
                      onHoverEnd={() => setHoveredProject(null)}
                      style={{
                        transformStyle: 'preserve-3d',
                        height: '100%',
                      }}
                    >
                      <Card 
                        sx={{ 
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          background: hoveredProject === project.id 
                            ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.05), rgba(139, 92, 246, 0.05))'
                            : 'background.paper',
                          border: hoveredProject === project.id 
                            ? '2px solid rgba(14, 165, 233, 0.2)'
                            : '1px solid rgba(0, 0, 0, 0.1)',
                          cursor: 'pointer',
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          transformStyle: 'preserve-3d',
                          position: 'relative',
                          overflow: 'hidden',
                          '&:hover': {
                            boxShadow: hoveredProject === project.id 
                              ? '0 25px 50px rgba(14, 165, 233, 0.15)'
                              : '0 20px 40px rgba(0, 0, 0, 0.1)',
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 4,
                            background: hoveredProject === project.id 
                              ? 'linear-gradient(90deg, #0ea5e9, #8b5cf6, #f59e0b)'
                              : 'transparent',
                            transition: 'all 0.3s ease',
                          }
                        }}
                      >
                        {/* Project Icon */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                          style={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            zIndex: 10,
                          }}
                        >
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              background: `linear-gradient(135deg, ${index % 2 === 0 ? '#0ea5e9' : '#8b5cf6'}, ${index % 2 === 0 ? '#8b5cf6' : '#f59e0b'})`,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '1.2rem',
                              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                              transform: hoveredProject === project.id ? 'scale(1.1) rotate(10deg)' : 'scale(1)',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <IconComponent />
                          </Box>
                        </motion.div>
                        
                        <CardContent sx={{ flexGrow: 1, p: 3, pt: 5 }}>
                          <Stack spacing={3}>
                            <motion.div
                              animate={{
                                y: hoveredProject === project.id ? -2 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <Typography
                                variant="h3"
                                sx={{
                                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                  fontWeight: 700,
                                  color: 'text.primary',
                                  lineHeight: 1.3,
                                  mb: 2,
                                }}
                              >
                                {project.title}
                              </Typography>
                            </motion.div>
                            
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              }}
                            >
                              {project.description}
                            </Typography>
                            
                            <Box>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                              >
                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                  {project.technologies.map((tech, techIndex) => (
                                    <motion.div
                                      key={techIndex}
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: 0.4 + techIndex * 0.05 }}
                                      whileHover={{ scale: 1.05 }}
                                    >
                                      <Chip
                                        label={tech.name}
                                        size="small"
                                        sx={{
                                          background: hoveredProject === project.id 
                                            ? 'linear-gradient(45deg, rgba(14, 165, 233, 0.2), rgba(139, 92, 246, 0.2))'
                                            : 'rgba(14, 165, 233, 0.1)',
                                          color: hoveredProject === project.id 
                                            ? 'primary.main'
                                            : 'text.secondary',
                                          fontSize: '0.75rem',
                                          fontWeight: 600,
                                          border: hoveredProject === project.id 
                                            ? '1px solid rgba(14, 165, 233, 0.3)'
                                            : 'none',
                                          transition: 'all 0.3s ease',
                                        }}
                                      />
                                    </motion.div>
                                  ))}
                                </Stack>
                              </motion.div>
                            </Box>
                          </Stack>
                        </CardContent>
                        
                        <CardActions sx={{ p: 3, pt: 0 }}>
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
                                >
                                  {link.type === 'website' ? <FaExternalLinkAlt /> : <FaGithub />}
                                  <span style={{ marginLeft: '8px' }}>{link.label}</span>
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

            {/* Enhanced View More Button */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
              >
                <FaRocket style={{ marginRight: '8px' }} />
                View More Projects
              </Button>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  )
}