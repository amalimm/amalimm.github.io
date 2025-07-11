"use client"

import { Button } from '@/components/ui/Button'
import { 
  Box, 
  Stack, 
  TextField, 
  Container,
  Typography,
  IconButton,
  Chip,
} from '@mui/material'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { profile } from '@/content/data/profile'
import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGlobe, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaRocket,
  FaHeart
} from 'react-icons/fa'
import { HiSparkles, HiMail } from 'react-icons/hi'
import { BiSend } from 'react-icons/bi'
import { ChatBubbleOutline } from '@mui/icons-material'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const backgroundX = useTransform(mouseX, [0, 1], [-40, 40])
  const backgroundY = useTransform(mouseY, [0, 1], [-40, 40])
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mouseX.set(x)
    mouseY.set(y)
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    // Reset success state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
  }

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return FaGithub
      case 'linkedin':
        return FaLinkedin
      case 'twitter':
        return FaTwitter
      default:
        return FaGlobe
    }
  }

  const getSocialColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return 'var(--neon-purple)'
      case 'linkedin':
        return 'var(--neon-blue)'
      case 'twitter':
        return 'var(--neon-cyan)'
      default:
        return 'var(--neon-green)'
    }
  }

  return (
    <Box 
      component={motion.section}
      ref={containerRef}
      id="contact"
      onMouseMove={handleMouseMove}
      sx={{
        py: { xs: 16, md: 20 },
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
        minHeight: '100vh',
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
            radial-gradient(700px circle at 20% 40%, var(--glass-light), transparent 50%),
            radial-gradient(500px circle at 80% 20%, var(--glass-medium), transparent 60%),
            radial-gradient(600px circle at 60% 90%, var(--glass-dark), transparent 40%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      
      {/* Optimized Floating Contact Elements */}
      {[...Array(8)].map((_, i) => {
        const colors = ['var(--neon-cyan)', 'var(--neon-purple)', 'var(--neon-green)', 'var(--neon-orange)', 'var(--neon-pink)', 'var(--neon-yellow)', 'var(--neon-blue)', 'var(--neon-teal)'];
        const positions = [
          { x: 20, y: 15 },
          { x: 80, y: 25 },
          { x: 15, y: 60 },
          { x: 85, y: 70 },
          { x: 40, y: 20 },
          { x: 60, y: 80 },
          { x: 30, y: 85 },
          { x: 70, y: 40 }
        ];
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.2, 0.05],
              rotate: [0, 180, 360],
              scale: [0.8, 1.3, 0.8],
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
              left: `${positions[i].x}%`,
              top: `${positions[i].y}%`,
              width: 25,
              height: 25,
              background: colors[i],
              opacity: 0.05,
              borderRadius: i % 2 === 0 ? '50%' : '30%',
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
                  width: 110,
                  height: 110,
                  background: 'var(--gradient-warm)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  fontSize: '2.8rem',
                  boxShadow: 'var(--shadow-glow-orange)',
                }}
              >
                <ChatBubbleOutline sx={{ fontSize: '3rem', color: 'white' }} />
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
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              Let&apos;s Connect
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
                  fontSize: '2.2rem',
                  color: 'var(--neon-pink)',
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
              Ready to bring your next project to life? Let&apos;s create something amazing together.
            </Typography>
          </motion.div>

          {/* Main Contact Layout */}
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1fr 1.2fr' },
              gap: 6,
              mb: 6
            }}
          >
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box
                className="card-glass"
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: 'var(--glass-glow)',
                  border: '1px solid var(--glass-border)',
                  backdropFilter: 'blur(25px)',
                  boxShadow: 'var(--shadow-soft)',
                  height: '100%',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 'var(--shadow-glow-cyan)',
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                    fontWeight: 700,
                    mb: 4,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <HiMail style={{ color: 'var(--neon-cyan)' }} />
                  Get In Touch
                </Typography>
                
                <Stack spacing={4}>
                  {/* Contact Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          background: 'linear-gradient(135deg, var(--neon-cyan)20, var(--neon-cyan)10)',
                          border: '2px solid var(--neon-cyan)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <FaEnvelope style={{ fontSize: '1.5rem', color: 'var(--neon-cyan)' }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            display: 'block',
                            mb: 0.5,
                          }}
                        >
                          Email
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'var(--text-primary)',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                          }}
                        >
                          {profile.contactInfo.email}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          background: 'linear-gradient(135deg, var(--neon-green)20, var(--neon-green)10)',
                          border: '2px solid var(--neon-green)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <FaMapMarkerAlt style={{ fontSize: '1.5rem', color: 'var(--neon-green)' }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            display: 'block',
                            mb: 0.5,
                          }}
                        >
                          Location
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'var(--text-primary)',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                          }}
                        >
                          {`${profile.location.city}, ${profile.location.state}`}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          background: 'linear-gradient(135deg, var(--neon-purple)20, var(--neon-purple)10)',
                          border: '2px solid var(--neon-purple)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <FaGlobe style={{ fontSize: '1.5rem', color: 'var(--neon-purple)' }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            display: 'block',
                            mb: 0.5,
                          }}
                        >
                          Website
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'var(--text-primary)',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                          }}
                        >
                          {profile.contactInfo.website}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>

                  {/* Social Links */}
                  <Box sx={{ mt: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'var(--text-primary)',
                        fontWeight: 600,
                        mb: 3,
                        fontSize: '1.1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <FaHeart style={{ color: 'var(--neon-pink)' }} />
                      Follow Me
                    </Typography>
                    
                    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                      {Object.entries(profile.contactInfo)
                        .filter(([key]) => key !== 'email' && key !== 'website')
                        .map(([platform, url], index) => {
                          const IconComponent = getSocialIcon(platform)
                          const socialColor = getSocialColor(platform)
                          
                          return (
                            <motion.div
                              key={platform}
                              initial={{ scale: 0 }}
                              animate={inView ? { scale: 1 } : {}}
                              transition={{ delay: 0.9 + index * 0.1, type: 'spring' }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <IconButton
                                onClick={() => window.open(url, '_blank')}
                                sx={{
                                  width: 50,
                                  height: 50,
                                  background: `linear-gradient(135deg, ${socialColor}15, ${socialColor}05)`,
                                  border: `2px solid ${socialColor}30`,
                                  color: socialColor,
                                  backdropFilter: 'blur(10px)',
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    background: `linear-gradient(135deg, ${socialColor}25, ${socialColor}15)`,
                                    borderColor: socialColor,
                                    boxShadow: `0 8px 25px ${socialColor}30`,
                                    transform: 'translateY(-4px)',
                                  },
                                }}
                              >
                                <IconComponent style={{ fontSize: '1.5rem' }} />
                              </IconButton>
                            </motion.div>
                          )
                        })}
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </motion.div>
            
            {/* Floating Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                className="card-glass"
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: 'var(--glass-glow)',
                  border: '1px solid var(--glass-border)',
                  backdropFilter: 'blur(25px)',
                  boxShadow: 'var(--shadow-soft)',
                  height: '100%',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 'var(--shadow-glow-purple)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: 'var(--gradient-warm)',
                  }
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                    fontWeight: 700,
                    mb: 4,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <FaRocket style={{ color: 'var(--neon-orange)' }} />
                  Send Message
                </Typography>
                
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      style={{ textAlign: 'center', padding: '3rem 0' }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        style={{ fontSize: '4rem', marginBottom: '1rem' }}
                      >
                        🎉
                      </motion.div>
                      <Typography
                        variant="h4"
                        sx={{
                          color: 'var(--neon-green)',
                          fontWeight: 700,
                          mb: 2,
                        }}
                      >
                        Message Sent!
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: 'var(--text-secondary)' }}
                      >
                        Thank you for reaching out. I&apos;ll get back to you soon!
                      </Typography>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Stack spacing={3}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.8 }}
                        >
                          <TextField
                            fullWidth
                            label="Name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleInputChange('name')}
                            variant="outlined"
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 3,
                                background: 'var(--glass-medium)',
                                backdropFilter: 'blur(10px)',
                                '&:hover': {
                                  borderColor: 'var(--neon-cyan)',
                                },
                                '&.Mui-focused': {
                                  borderColor: 'var(--neon-cyan)',
                                  boxShadow: '0 0 20px var(--neon-cyan)30',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: 'var(--text-secondary)',
                              },
                              '& .MuiOutlinedInput-input': {
                                color: 'var(--text-primary)',
                              },
                            }}
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.9 }}
                        >
                          <TextField
                            fullWidth
                            label="Email"
                            placeholder="your@email.com"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange('email')}
                            variant="outlined"
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 3,
                                background: 'var(--glass-medium)',
                                backdropFilter: 'blur(10px)',
                                '&:hover': {
                                  borderColor: 'var(--neon-cyan)',
                                },
                                '&.Mui-focused': {
                                  borderColor: 'var(--neon-cyan)',
                                  boxShadow: '0 0 20px var(--neon-cyan)30',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: 'var(--text-secondary)',
                              },
                              '& .MuiOutlinedInput-input': {
                                color: 'var(--text-primary)',
                              },
                            }}
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 1.0 }}
                        >
                          <TextField
                            fullWidth
                            label="Message"
                            placeholder="Tell me about your project..."
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange('message')}
                            variant="outlined"
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 3,
                                background: 'var(--glass-medium)',
                                backdropFilter: 'blur(10px)',
                                '&:hover': {
                                  borderColor: 'var(--neon-cyan)',
                                },
                                '&.Mui-focused': {
                                  borderColor: 'var(--neon-cyan)',
                                  boxShadow: '0 0 20px var(--neon-cyan)30',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: 'var(--text-secondary)',
                              },
                              '& .MuiOutlinedInput-input': {
                                color: 'var(--text-primary)',
                              },
                            }}
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 1.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            type="submit"
                            disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                            fullWidth 
                            size="lg"
                            style={{
                              background: isSubmitting 
                                ? 'var(--glass-medium)' 
                                : 'var(--gradient-primary)',
                              color: 'white',
                              border: 'none',
                              padding: '16px 32px',
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              borderRadius: '12px',
                              cursor: isSubmitting ? 'not-allowed' : 'pointer',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              boxShadow: isSubmitting 
                                ? 'none' 
                                : '0 8px 25px var(--neon-cyan)30',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '12px',
                            }}
                          >
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                  ⏳
                                </motion.div>
                                Sending...
                              </>
                            ) : (
                              <>
                                <BiSend />
                                Send Message
                                <motion.div
                                  animate={{ x: [0, 4, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  →
                                </motion.div>
                              </>
                            )}
                          </Button>
                        </motion.div>
                      </Stack>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </motion.div>
          </Box>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
            style={{ textAlign: 'center' }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                maxWidth: '600px',
                mx: 'auto',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              Whether you have a project in mind, want to collaborate, or just want to say hello, I&apos;d love to hear from you.
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
              <Chip
                label="Available for hire"
                sx={{
                  background: 'var(--gradient-accent)',
                  color: 'white',
                  fontWeight: 600,
                }}
              />
              <Chip
                label="Remote work"
                sx={{
                  background: 'var(--glass-medium)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--glass-border)',
                }}
              />
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}