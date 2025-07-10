"use client"

import { Button } from '@/components/ui/Button'
import { Box, Stack, Container, Typography, IconButton } from '@mui/material'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { SpotlightEffect } from './SpotlightEffect'
import { profile } from '@/content/data/profile'
import { useEffect, useState, useRef, useCallback } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'
import confetti from 'canvas-confetti'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  
  // Transform values for subtle parallax on background elements
  const backgroundX = useTransform(useMotionValue(0), [0, 1], [-10, 10])
  const backgroundY = useTransform(useMotionValue(0), [0, 1], [-10, 10])
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])
  
  
  const handleCelebration = useCallback(() => {
    const count = 200
    const defaults = {
      origin: { y: 0.7 }
    }
    
    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        scalar: 1.2,
        shapes: ['star', 'circle'],
        colors: ['#0ea5e9', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444']
      })
    }
    
    fire(0.25, { spread: 26, startVelocity: 55 })
    fire(0.2, { spread: 60 })
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
    fire(0.1, { spread: 120, startVelocity: 45 })
  }, [])
  
  const socialLinks = [
    { icon: FaGithub, href: profile.contactInfo.github, label: 'GitHub', color: '#333' },
    { icon: FaLinkedin, href: profile.contactInfo.linkedIn, label: 'LinkedIn', color: '#0077b5' },
    { icon: FaEnvelope, href: `mailto:${profile.contactInfo.email}`, label: 'Email', color: '#ea4335' },
  ]
  
  return (
    <Box 
      ref={containerRef}
      component={motion.section}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
      }}
    >
      <SpotlightEffect>
        {/* Floating Background Particles */}
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            x: backgroundX,
            y: backgroundY,
          }}
        >
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.4, 0.1],
                scale: [0.8, 1.5, 0.8],
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: 3,
                height: 3,
                borderRadius: '50%',
                background: i % 3 === 0 ? '#0ea5e9' : i % 3 === 1 ? '#8b5cf6' : '#f59e0b',
                filter: 'blur(0.5px)',
                boxShadow: `0 0 20px ${i % 3 === 0 ? '#0ea5e9' : i % 3 === 1 ? '#8b5cf6' : '#f59e0b'}`,
              }}
            />
          ))}
        </motion.div>
        
        {/* Content Layer */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Stack spacing={6} alignItems="center" textAlign="center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1,
                background: 'rgba(14, 165, 233, 0.1)',
                border: '1px solid rgba(14, 165, 233, 0.3)',
                borderRadius: '50px',
                mb: 4,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <HiSparkles style={{ color: '#0ea5e9', fontSize: '1.2rem' }} />
              </motion.div>
              <Typography
                variant="body2"
                sx={{
                  color: '#0ea5e9',
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  fontSize: '0.75rem',
                }}
              >
                Available for opportunities
              </Typography>
            </Box>
          </motion.div>
          
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: 2,
                  background: 'linear-gradient(90deg, transparent, #0ea5e9, transparent)',
                  opacity: 0.6,
                },
              }}
            >
              {profile.fullName}
            </Typography>
          </motion.div>
          
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                fontWeight: 500,
                mb: 3,
                color: '#64748b',
                letterSpacing: 2,
              }}
            >
              {profile.currentPosition.title}
            </Typography>
          </motion.div>
          
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                lineHeight: 1.8,
                mb: 6,
                color: '#94a3b8',
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              {profile.headline}
            </Typography>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Stack direction="row" spacing={3} sx={{ mb: 6 }}>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'rgba(14, 165, 233, 0.1)',
                      border: '1px solid rgba(14, 165, 233, 0.2)',
                      color: '#94a3b8',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        backgroundColor: 'rgba(14, 165, 233, 0.2)',
                        borderColor: social.color,
                        color: social.color,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 10px 25px ${social.color}40`,
                      },
                    }}
                  >
                    <social.icon size={22} />
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </motion.div>
          
          {/* CTA Buttons */}
          {profile.cta && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                justifyContent="center"
                sx={{ mb: 8 }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                      handleCelebration()
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)',
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <FaRocket />
                      <span>{profile.cta.primary.text}</span>
                    </Stack>
                  </Button>
                </motion.div>
                
                {profile.cta.secondary && (
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      style={{
                        background: 'transparent',
                        color: '#94a3b8',
                        border: '2px solid rgba(148, 163, 184, 0.3)',
                        padding: '12px 32px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      {profile.cta.secondary.text}
                    </Button>
                  </motion.div>
                )}
              </Stack>
            </motion.div>
          )}
          
          {/* Stats */}
          <AnimatePresence>
            {profile.stats && isVisible && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                style={{ width: '100%' }}
              >
                <Box 
                  sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, 
                    gap: 3,
                    mb: 8
                  }}
                >
                  {profile.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 1.0 + index * 0.1, 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Box
                        sx={{ 
                          textAlign: 'center',
                          p: 3,
                          borderRadius: 2,
                          backgroundColor: 'rgba(14, 165, 233, 0.05)',
                          border: '1px solid rgba(14, 165, 233, 0.2)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: 'rgba(14, 165, 233, 0.1)',
                            borderColor: 'rgba(14, 165, 233, 0.4)',
                            transform: 'translateY(-4px)',
                            boxShadow: '0 10px 25px rgba(14, 165, 233, 0.2)',
                          },
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            fontSize: { xs: '1.5rem', sm: '2rem' },
                            fontWeight: 700,
                            mb: 1,
                            color: '#0ea5e9',
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            fontWeight: 500,
                            color: '#64748b',
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 52,
                  border: '2px solid rgba(148, 163, 184, 0.4)',
                  borderRadius: 16,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  pt: 1.5,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#0ea5e9',
                    transform: 'scale(1.1)',
                  },
                }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  animate={{
                    y: [0, 6, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 4,
                    height: 8,
                    backgroundColor: '#0ea5e9',
                    borderRadius: 2,
                  }}
                />
              </Box>
            </motion.div>
          </motion.div>
        </Stack>
        </Container>
      
        {/* Ref for intersection observer */}
        <div ref={ref} style={{ position: 'absolute', top: '50%' }} />
      </SpotlightEffect>
    </Box>
  )
}