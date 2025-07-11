'use client'

import { Box, Chip, Typography, LinearProgress, Container } from '@mui/material'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { languages } from '@/content/data'
import { Card } from '@/components/ui/Card'
import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { HiGlobeAlt } from 'react-icons/hi'
import { LanguageOutlined } from '@mui/icons-material'

export function Languages() {
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
  
  const sortedLanguages = languages.sort((a, b) => a.order - b.order)

  const getProficiencyValue = (proficiency: string) => {
    switch (proficiency) {
      case 'native':
        return 100
      case 'bilingual':
        return 95
      case 'professional':
        return 85
      case 'conversational':
        return 70
      case 'elementary':
        return 50
      default:
        return 0
    }
  }

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'native':
        return 'var(--neon-green)'
      case 'bilingual':
        return 'var(--neon-cyan)'
      case 'professional':
        return 'var(--neon-purple)'
      case 'conversational':
        return 'var(--neon-blue)'
      case 'elementary':
        return 'var(--neon-orange)'
      default:
        return 'var(--text-secondary)'
    }
  }

  return (
    <Box 
      component={motion.section}
      ref={containerRef}
      id="languages"
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
            radial-gradient(600px circle at 40% 30%, rgba(34, 197, 94, 0.05), transparent 50%),
            radial-gradient(800px circle at 60% 70%, rgba(14, 165, 233, 0.05), transparent 60%),
            radial-gradient(400px circle at 20% 80%, rgba(139, 92, 246, 0.05), transparent 40%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      
      {/* Floating Elements */}
      {[...Array(10)].map((_, i) => {
        const colors = ['rgba(34, 197, 94, 0.05)', 'rgba(14, 165, 233, 0.05)', 'rgba(139, 92, 246, 0.05)', 'rgba(245, 158, 11, 0.05)'];
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
              x: [0, 50, -50, 0],
              y: [0, 30, -30, 0],
            }}
            transition={{
              duration: 18 + i * 2,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
              repeatType: "loop"
            }}
            style={{
              position: 'absolute',
              left: `${10 + (i * 9)}%`,
              top: `${12 + (i * 8)}%`,
              width: 30,
              height: 30,
              background: colors[i % colors.length],
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
          {/* Enhanced Header */}
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
                  background: 'var(--gradient-tertiary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  fontSize: '2.5rem',
                  boxShadow: 'var(--shadow-glow-green)',
                }}
              >
                <LanguageOutlined sx={{ fontSize: '3rem', color: 'white' }} />
              </Box>
            </motion.div>
            
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
                fontWeight: 800,
                mb: 2,
                position: 'relative',
                background: 'var(--gradient-tertiary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Languages
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
                  color: 'var(--neon-green)',
                }}
              >
                <HiGlobeAlt />
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
              Languages I speak and my proficiency levels
            </Typography>
          </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)'
            },
            gap: 4
          }}
        >
          {sortedLanguages.map((language, index) => (
            <Box key={language.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: 4,
                    background: 'var(--glass-medium)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-glow-green)',
                      background: 'rgba(255, 255, 255, 0.05)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: 'var(--gradient-tertiary)',
                      opacity: 0.8,
                    }
                  }}
                >
                  <Box
                    sx={{
                      fontSize: '3rem',
                      mb: 2,
                      filter: 'drop-shadow(0 0 10px var(--neon-green))',
                      color: 'var(--neon-green)',
                    }}
                  >
                    {language.icon}
                  </Box>

                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1, color: 'var(--text-primary)' }}>
                    {language.name}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 2, color: 'var(--text-secondary)' }}>
                    {language.proficiencyDescription}
                  </Typography>

                  <Box sx={{ width: '100%', mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>
                        Proficiency
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>
                        {getProficiencyValue(language.proficiency)}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={getProficiencyValue(language.proficiency)} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        bgcolor: 'var(--glass-dark)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          background: getProficiencyColor(language.proficiency)
                        }
                      }}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Chip 
                      label={language.proficiency} 
                      size="small" 
                      sx={{ 
                        textTransform: 'capitalize',
                        background: getProficiencyColor(language.proficiency),
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                    {language.featured && (
                      <Chip 
                        label="Featured" 
                        size="small" 
                        sx={{
                          background: 'var(--gradient-tertiary)',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    )}
                  </Box>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
        </motion.div>
      </Container>
    </Box>
  )
}