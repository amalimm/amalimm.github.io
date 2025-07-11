'use client'

import { Box, Chip, Typography, Link, Container } from '@mui/material'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { OpenInNew, Article, Code, School, Star, StarOutline } from '@mui/icons-material'
import { highlights } from '@/content/data'
import { Card } from '@/components/ui/Card'
import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { HiSparkles } from 'react-icons/hi'

export function Highlights() {
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
  
  const sortedHighlights = highlights.sort((a, b) => a.order - b.order)

  const getGridLayout = (length: number, maxColumns: { xs?: number, sm?: number, md?: number, lg?: number } = { xs: 1, sm: 2, md: 2, lg: 3 }) => {
    return {
      gridTemplateColumns: {
        xs: length > (maxColumns.xs || 1) ? `repeat(${maxColumns.xs || 1}, 1fr)` : `repeat(${length}, 1fr)`,
        sm: length > (maxColumns.sm || 2) ? `repeat(${maxColumns.sm || 2}, 1fr)` : `repeat(${length}, 1fr)`,
        md: length > (maxColumns.md || 2) ? `repeat(${maxColumns.md || 2}, 1fr)` : `repeat(${length}, 1fr)`,
        lg: length > (maxColumns.lg || 3) ? `repeat(${maxColumns.lg || 3}, 1fr)` : `repeat(${length}, 1fr)`,
      },
      justifyContent: 'center',
      justifyItems: 'center',
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'project':
        return <Code sx={{ color: 'var(--neon-cyan)' }} />
      case 'publication':
        return <Article sx={{ color: 'var(--neon-purple)' }} />
      case 'portfolio':
        return <Star sx={{ color: 'var(--neon-orange)' }} />
      case 'research':
        return <School sx={{ color: 'var(--neon-green)' }} />
      default:
        return <Article sx={{ color: 'var(--text-secondary)' }} />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'project':
        return 'var(--neon-cyan)'
      case 'publication':
        return 'var(--neon-purple)'
      case 'portfolio':
        return 'var(--neon-orange)'
      case 'research':
        return 'var(--neon-green)'
      default:
        return 'var(--text-secondary)'
    }
  }

  return (
    <Box 
      component={motion.section}
      ref={containerRef}
      id="highlights"
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
            radial-gradient(600px circle at 30% 20%, rgba(245, 158, 11, 0.05), transparent 50%),
            radial-gradient(800px circle at 70% 80%, rgba(139, 92, 246, 0.05), transparent 60%),
            radial-gradient(400px circle at 20% 70%, rgba(14, 165, 233, 0.05), transparent 40%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      
      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => {
        const colors = ['rgba(245, 158, 11, 0.05)', 'rgba(139, 92, 246, 0.05)', 'rgba(14, 165, 233, 0.05)', 'rgba(34, 197, 94, 0.05)'];
        
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
              duration: 25 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
              repeatType: "loop"
            }}
            style={{
              position: 'absolute',
              left: `${20 + (i * 12)}%`,
              top: `${15 + (i * 10)}%`,
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
                  background: 'var(--gradient-warm)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  fontSize: '2.5rem',
                  boxShadow: 'var(--shadow-glow-orange)',
                }}
              >
                <StarOutline sx={{ fontSize: '3rem', color: 'white' }} />
              </Box>
            </motion.div>
            
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
                fontWeight: 800,
                mb: 2,
                position: 'relative',
                background: 'var(--gradient-warm)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Highlights
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
                  color: 'var(--neon-orange)',
                }}
              >
                <HiSparkles />
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
              Notable achievements and featured work
            </Typography>
          </motion.div>

        <Box
          sx={{
            display: 'grid',
            ...getGridLayout(sortedHighlights.length, { xs: 1, sm: 1, md: 2, lg: 2 }),
            gap: 4
          }}
        >
          {sortedHighlights.map((highlight, index) => (
            <Box key={highlight.id}>
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
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-glow-orange)',
                      background: 'rgba(255, 255, 255, 0.05)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: 'var(--gradient-warm)',
                      opacity: 0.8,
                    }
                  }}
                  onClick={() => window.open(highlight.url, '_blank')}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 2 }}>
                      {getTypeIcon(highlight.type)}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                        {highlight.title}
                      </Typography>
                      {highlight.platform && (
                        <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>
                          {highlight.platform}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  <Typography variant="body1" sx={{ mb: 3, flexGrow: 1, color: 'var(--text-primary)' }}>
                    {highlight.description}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center', mb: 2 }}>
                    <Chip 
                      label={highlight.type} 
                      size="small" 
                      sx={{ 
                        background: getTypeColor(highlight.type),
                        color: 'white',
                        fontWeight: 600,
                        textTransform: 'capitalize' 
                      }}
                    />
                    {highlight.featured && (
                      <Chip 
                        label="Featured" 
                        size="small" 
                        sx={{
                          background: 'var(--gradient-warm)',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    )}
                  </Box>

                  <Link
                    href={highlight.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      textDecoration: 'none',
                      color: 'var(--neon-orange)',
                      alignSelf: 'flex-start',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    View {highlight.type === 'project' ? 'Project' : 
                           highlight.type === 'publication' ? 'Publication' : 
                           highlight.type === 'portfolio' ? 'Portfolio' : 
                           highlight.type === 'research' ? 'Research' : 'More'}
                    <OpenInNew sx={{ fontSize: 16 }} />
                  </Link>
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