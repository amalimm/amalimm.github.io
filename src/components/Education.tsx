'use client'

import { Box, Chip, Typography, Container } from '@mui/material'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { education } from '@/content/data'
import { Card } from '@/components/ui/Card'
import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap } from 'react-icons/hi'
import { School, SchoolOutlined } from '@mui/icons-material'

export function Education() {
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
  
  const sortedEducation = education.sort((a, b) => a.order - b.order)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short'
    })
  }

  return (
    <Box 
      component={motion.section}
      ref={containerRef}
      id="education"
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
            radial-gradient(600px circle at 30% 20%, rgba(139, 92, 246, 0.05), transparent 50%),
            radial-gradient(800px circle at 70% 80%, rgba(14, 165, 233, 0.05), transparent 60%),
            radial-gradient(400px circle at 20% 70%, rgba(245, 158, 11, 0.05), transparent 40%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      
      {/* Optimized Floating Academic Elements */}
      {[...Array(8)].map((_, i) => {
        const colors = ['rgba(139, 92, 246, 0.05)', 'rgba(14, 165, 233, 0.05)', 'rgba(245, 158, 11, 0.05)', 'rgba(34, 197, 94, 0.05)'];
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
              x: [0, 40, -40, 0],
              y: [0, 30, -30, 0],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
              repeatType: "loop"
            }}
            style={{
              position: 'absolute',
              left: `${15 + (i * 10)}%`,
              top: `${10 + (i * 8)}%`,
              width: 40,
              height: 40,
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
                <SchoolOutlined sx={{ fontSize: '3rem', color: 'white' }}/>
              </Box>
            </motion.div>
            
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
                fontWeight: 800,
                mb: 2,
                position: 'relative',
                background: 'var(--gradient-secondary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Education
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
                  color: 'var(--neon-cyan)',
                }}
              >
                <HiAcademicCap />
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
              Academic journey and qualifications that shaped my expertise
            </Typography>
          </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: 4
          }}
        >
          {sortedEducation.map((edu, index) => (
            <Box key={edu.id}>
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
                    borderRadius: 4,
                    background: 'var(--glass-medium)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-glow-purple)',
                      background: 'rgba(255, 255, 255, 0.05)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: 'var(--gradient-secondary)',
                      opacity: 0.8,
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        fontSize: '2rem',
                        mr: 2,
                        color: 'primary.main'
                      }}
                    >
                      <School sx={{ fontSize: '2rem', color: 'white' }}/>
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>
                        {edu.field}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{ mb: 1, color: 'var(--neon-cyan)', fontWeight: 600 }}>
                    {edu.institution}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ mb: 2, color: 'var(--text-secondary)' }}>
                    {edu.location}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 2, color: 'var(--text-secondary)' }}>
                    {formatDate(edu.startDate)} - {
                      edu.current ? 'Present' : formatDate(edu.endDate)
                    }
                  </Typography>

                  {edu.grade && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                        Grade: {edu.grade}
                      </Typography>
                    </Box>
                  )}

                  {edu.description && (
                    <Typography variant="body2" sx={{ mb: 2, flexGrow: 1, color: 'var(--text-primary)' }}>
                      {edu.description}
                    </Typography>
                  )}

                  {edu.activities && edu.activities.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: 'var(--text-primary)' }}>
                        Activities
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 3 }}>
                        {edu.activities.map((activity, idx) => (
                          <Typography 
                            key={idx} 
                            component="li" 
                            variant="body2" 
                            sx={{ mb: 0.5, color: 'var(--text-secondary)' }}
                          >
                            {activity}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  )}

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 'auto' }}>
                    {edu.featured && (
                      <Chip 
                        label="Featured" 
                        size="small" 
                        sx={{
                          background: 'var(--gradient-secondary)',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    )}
                    {edu.current && (
                      <Chip 
                        label="Current" 
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