'use client'

import { Box, Typography, Container, Chip } from '@mui/material'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { experiences } from '@/content/data'
import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { 
  Schedule, 
  Business, 
  LocationOn, 
  CalendarMonth,
  Bolt,
  TrendingUp,
  Person,
  WorkOutline
} from '@mui/icons-material'

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null)
  const [, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const backgroundX = useTransform(mouseX, [0, 1], [-20, 20])
  const backgroundY = useTransform(mouseY, [0, 1], [-20, 20])
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mouseX.set(x)
    mouseY.set(y)
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }
  
  const featuredExperiences = experiences.filter(exp => exp.featured).sort((a, b) => a.order - b.order)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short'
    })
  }

  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'freelance':
        return Person
      case 'part-time':
        return Schedule
      default:
        return Business
    }
  }

  const getExperienceColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'var(--neon-cyan)'
      case 'freelance':
        return 'var(--neon-purple)'
      case 'part-time':
        return 'var(--neon-green)'
      default:
        return 'var(--neon-orange)'
    }
  }

  return (
    <Box 
      component={motion.section}
      ref={containerRef}
      id="experience"
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
            radial-gradient(600px circle at 25% 30%, var(--glass-light), transparent 45%),
            radial-gradient(800px circle at 75% 70%, var(--glass-medium), transparent 55%),
            radial-gradient(400px circle at 50% 90%, var(--glass-dark), transparent 35%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      
      {/* Optimized Floating Timeline Elements */}
      {[...Array(6)].map((_, i) => {
        const colors = ['var(--neon-cyan)', 'var(--neon-purple)', 'var(--neon-green)', 'var(--neon-orange)', 'var(--neon-pink)', 'var(--neon-yellow)'];
        const positions = [
          { x: 15, y: 20 },
          { x: 85, y: 30 },
          { x: 25, y: 70 },
          { x: 75, y: 80 },
          { x: 45, y: 15 },
          { x: 65, y: 60 }
        ];
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 180, 360],
              scale: [0.9, 1.2, 0.9],
              x: [0, 30, -30, 0],
              y: [0, 20, -20, 0],
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
              width: 35,
              height: 35,
              background: colors[i],
              opacity: 0.05,
              borderRadius: '50%',
              filter: 'blur(1px)',
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
          {/* Header */}
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
                  width: 100,
                  height: 100,
                  background: 'var(--gradient-secondary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  fontSize: '2.5rem',
                  boxShadow: 'var(--shadow-glow-purple)',
                }}
              >
                <WorkOutline sx={{ fontSize: '3rem', color: 'white' }} />
              </Box>
            </motion.div>
            
            <Typography
              variant="h2"
              className="gradient-text-secondary"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
                fontWeight: 800,
                mb: 2,
                position: 'relative',
              }}
            >
              Experience Timeline
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: 'absolute',
                  top: -25,
                  right: -45,
                  fontSize: '2rem',
                  color: 'var(--neon-orange)',
                }}
              >
                <Bolt />
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
              A journey through professional milestones and achievements
            </Typography>
          </motion.div>

          {/* Animated Timeline */}
          <Box sx={{ position: 'relative', maxWidth: '1000px', mx: 'auto' }}>
            {/* Central Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 4, delay: 1.5 }}
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: 4,
                background: 'var(--gradient-primary)',
                transformOrigin: 'top',
                borderRadius: 2,
                boxShadow: 'var(--shadow-glow-cyan)',
                zIndex: 2,
              }}
            />
            
            {featuredExperiences.map((experience, index) => {
              const IconComponent = getExperienceIcon(experience.type)
              const experienceColor = getExperienceColor(experience.type)
              const isLeft = index % 2 === 0
              const isSelected = selectedExperience === experience.id
              
              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.7 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  style={{
                    position: 'relative',
                    marginBottom: '4rem',
                    zIndex: 5,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: isLeft ? 'flex-end' : 'flex-start',
                      position: 'relative',
                    }}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={() => setSelectedExperience(experience.id)}
                      onHoverEnd={() => setSelectedExperience(null)}
                      style={{
                        position: 'absolute',
                        left: '46%',
                        top: '50%',
                        zIndex: 10,
                        cursor: 'pointer',
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          background: `linear-gradient(135deg, ${experienceColor}15, ${experienceColor}05)`,
                          border: `3px solid ${experienceColor}`,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(15px)',
                          boxShadow: `0 0 25px ${experienceColor}30`,
                        }}
                      >
                        <IconComponent 
                          style={{ 
                            fontSize: '2rem', 
                            color: experienceColor,
                            filter: 'drop-shadow(0 0 8px currentColor)'
                          }} 
                        />
                      </Box>
                    </motion.div>
                    
                    {/* Experience Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -8 }}
                      style={{
                        width: '45%',
                        marginLeft: isLeft ? 0 : '55%',
                        marginRight: isLeft ? '55%' : 0,
                      }}
                    >
                      <Box
                        className={isSelected ? 'card-neon' : 'card-glass'}
                        sx={{
                          p: 4,
                          borderRadius: 3,
                          background: isSelected ? 'var(--glass-glow)' : 'var(--glass-medium)',
                          border: `1px solid ${isSelected ? experienceColor : 'var(--glass-border)'}`,
                          backdropFilter: 'blur(20px)',
                          boxShadow: isSelected 
                            ? `0 20px 60px ${experienceColor}30` 
                            : 'var(--shadow-soft)',
                          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 3,
                            background: `linear-gradient(90deg, ${experienceColor}, transparent, ${experienceColor})`,
                            opacity: isSelected ? 1 : 0.6,
                          }
                        }}
                      >
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              color: 'var(--text-primary)',
                              mb: 1,
                              fontSize: { xs: '1.25rem', sm: '1.5rem' },
                            }}
                          >
                            {experience.title}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <Business sx={{ color: experienceColor, fontSize: '1rem' }} />
                            <Typography
                              variant="h6"
                              sx={{
                                color: experienceColor,
                                fontWeight: 600,
                                fontSize: '1.1rem',
                              }}
                            >
                              {experience.company}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <LocationOn sx={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }} />
                              <Typography
                                variant="body2"
                                sx={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
                              >
                                {experience.location}
                              </Typography>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <CalendarMonth sx={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }} />
                              <Typography
                                variant="body2"
                                sx={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
                              >
                                {formatDate(experience.startDate)} - {
                                  experience.current ? 'Present' : formatDate(experience.endDate!)
                                }
                              </Typography>
                            </Box>
                          </Box>
                        </Box>

                        <Typography
                          variant="body1"
                          sx={{
                            color: 'var(--text-primary)',
                            lineHeight: 1.7,
                            mb: 3,
                            fontSize: '1rem',
                          }}
                        >
                          {experience.description}
                        </Typography>

                        {experience.achievements && experience.achievements.length > 0 && (
                          <Box sx={{ mb: 3 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                color: 'var(--text-primary)',
                                fontWeight: 600,
                                mb: 2,
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                              }}
                            >
                              <TrendingUp sx={{ color: experienceColor }} />
                              Key Achievements
                            </Typography>
                            <Box component="ul" sx={{ m: 0, pl: 3 }}>
                              {experience.achievements.map((achievement, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={inView ? { opacity: 1, x: 0 } : {}}
                                  transition={{ delay: 1 + index * 0.2 + idx * 0.1 }}
                                >
                                  <Typography 
                                    variant="body2" 
                                    sx={{ 
                                      mb: 1, 
                                      color: 'var(--text-secondary)',
                                      lineHeight: 1.6,
                                    }}
                                  >
                                    {achievement}
                                  </Typography>
                                </motion.li>
                              ))}
                            </Box>
                          </Box>
                        )}

                        {experience.technologies && experience.technologies.length > 0 && (
                          <Box sx={{ mb: 3 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: 'var(--text-primary)',
                                fontWeight: 600,
                                mb: 2,
                                fontSize: '0.9rem',
                              }}
                            >
                              Technologies Used
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {experience.technologies.map((tech, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ scale: 0 }}
                                  animate={inView ? { scale: 1 } : {}}
                                  transition={{ delay: 1.2 + index * 0.2 + idx * 0.05 }}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <Chip 
                                    label={tech} 
                                    size="small" 
                                    sx={{
                                      background: `${experienceColor}15`,
                                      color: experienceColor,
                                      border: `1px solid ${experienceColor}30`,
                                      fontWeight: 600,
                                      fontSize: '0.75rem',
                                      '&:hover': {
                                        background: `${experienceColor}25`,
                                        boxShadow: `0 4px 12px ${experienceColor}30`,
                                      }
                                    }}
                                  />
                                </motion.div>
                              ))}
                            </Box>
                          </Box>
                        )}

                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip 
                            label={experience.type.replace('-', ' ')} 
                            size="small" 
                            sx={{
                              background: 'var(--gradient-accent)',
                              color: 'white',
                              fontWeight: 600,
                              textTransform: 'capitalize',
                            }}
                          />
                          <Chip 
                            label={experience.industry} 
                            size="small" 
                            sx={{
                              background: 'var(--glass-medium)',
                              color: 'var(--text-secondary)',
                              border: '1px solid var(--glass-border)',
                            }}
                          />
                          <Chip 
                            label={experience.companySize} 
                            size="small" 
                            sx={{
                              background: 'var(--glass-medium)',
                              color: 'var(--text-secondary)',
                              border: '1px solid var(--glass-border)',
                              textTransform: 'capitalize',
                            }}
                          />
                        </Box>
                      </Box>
                    </motion.div>
                    
                    {/* Connection Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.9 + index * 0.2 }}
                      style={{
                        position: 'absolute',
                        left: isLeft ? 'calc(50% - 2px)' : 'calc(50% - 38px)',
                        top: '50%',
                        width: 40,
                        height: 3,
                        background: `linear-gradient(90deg, ${experienceColor}, ${experienceColor}50)`,
                        transformOrigin: isLeft ? 'right' : 'left',
                        transform: 'translateY(-50%)',
                        borderRadius: '2px',
                        zIndex: 3,
                      }}
                    />
                  </Box>
                </motion.div>
              )
            })}
          </Box>

          {/* Timeline Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
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
              Each milestone represents growth, learning, and the continuous pursuit of excellence in technology and innovation.
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}