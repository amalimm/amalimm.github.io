"use client"

import { Button } from '@/components/ui/Button'
import { Box, Stack, Container, Typography, IconButton } from '@mui/material'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { useSpring as useReactSpring, animated } from '@react-spring/web'
import { profile } from '@/content/data/profile'
import { useEffect, useState, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import confetti from 'canvas-confetti'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"])
  
  
  // Interactive background gradient
  const bgSpring = useReactSpring({
    background: isHovered 
      ? 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #f59e0b 100%)'
      : 'linear-gradient(135deg, #0ea5e9 30%, #64748b 100%)',
    config: { tension: 300, friction: 30 }
  })
  
  // Floating animation for profile elements
  const floatingAnimation = useReactSpring({
    from: { transform: 'translateY(0px) rotate(0deg)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-10px) rotate(2deg)' })
        await next({ transform: 'translateY(10px) rotate(-2deg)' })
        await next({ transform: 'translateY(0px) rotate(0deg)' })
      }
    },
    config: { tension: 100, friction: 10 }
  })
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    
    mouseX.set(x)
    mouseY.set(y)
  }
  
  const handleCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0ea5e9', '#8b5cf6', '#f59e0b']
    })
  }
  
  const socialLinks = [
    { icon: FaGithub, href: profile.contactInfo.github, label: 'GitHub' },
    { icon: FaLinkedin, href: profile.contactInfo.linkedIn, label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${profile.contactInfo.email}`, label: 'Email' },
  ]
  
  return (
    <Box 
      ref={containerRef}
      component={animated.section}
      style={bgSpring}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        perspective: 1000,
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 100,
          height: 100,
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          rotateX,
          rotateY,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: 80,
          height: 80,
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '30%',
          filter: 'blur(3px)',
          rotateX,
          rotateY,
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          ref={ref}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          <Stack spacing={6} alignItems="center" textAlign="center">
            {/* Profile Image/Avatar Placeholder */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isVisible ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
            >
              <animated.div style={floatingAnimation}>
                <Box
                  sx={{
                    width: 160,
                    height: 160,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                    backdropFilter: 'blur(10px)',
                    border: '3px solid rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    },
                  }}
                  onClick={handleCelebration}
                >
                  🚀
                </Box>
              </animated.div>
            </motion.div>
            
            {/* Name with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '6rem' },
                  fontWeight: 800,
                  mb: 2,
                  color: 'white',
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {profile.fullName}
              </Typography>
            </motion.div>
            
            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                  fontWeight: 500,
                  mb: 3,
                  color: 'rgba(255, 255, 255, 0.9)',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #fff, #0ea5e9, #8b5cf6, #fff)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {profile.currentPosition.title}
                </motion.span>
              </Typography>
            </motion.div>
            
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  lineHeight: 1.7,
                  mb: 6,
                  color: 'rgba(255, 255, 255, 0.85)',
                  maxWidth: '600px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                {profile.headline}
              </Typography>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.1 + index * 0.1 }}
                  >
                    <IconButton
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                        },
                      }}
                    >
                      <social.icon size={20} />
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
            
            {/* CTA Buttons */}
            {profile.cta && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3} 
                  justifyContent="center"
                  sx={{ mb: 8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => {
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                        handleCelebration()
                      }}
                    >
                      {profile.cta.primary.text}
                    </Button>
                  </motion.div>
                  
                  {profile.cta.secondary && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        {profile.cta.secondary.text}
                      </Button>
                    </motion.div>
                  )}
                </Stack>
              </motion.div>
            )}
            
            {/* Animated Stats */}
            <AnimatePresence>
              {profile.stats && isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  style={{ width: '100%' }}
                >
                  <Box 
                    sx={{ 
                      display: 'grid', 
                      gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, 
                      gap: 3
                    }}
                  >
                    {profile.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                        whileHover={{ 
                          scale: 1.05, 
                          rotateY: 5,
                          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        }}
                      >
                        <Box
                          sx={{ 
                            textAlign: 'center',
                            p: 3,
                            borderRadius: 3,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          <Typography
                            variant="h3"
                            sx={{
                              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                              fontWeight: 700,
                              mb: 1,
                              color: 'white',
                              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                            }}
                          >
                            {stat.icon} {stat.value}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: { xs: '0.8rem', sm: '0.875rem' },
                              fontWeight: 500,
                              color: 'rgba(255, 255, 255, 0.8)',
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
              transition={{ delay: 2, duration: 1 }}
              style={{ marginTop: '4rem' }}
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Box
                  sx={{
                    width: 30,
                    height: 50,
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: 15,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    pt: 1,
                    cursor: 'pointer',
                  }}
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Box
                    sx={{
                      width: 4,
                      height: 8,
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      borderRadius: 2,
                    }}
                  />
                </Box>
              </motion.div>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  )
}