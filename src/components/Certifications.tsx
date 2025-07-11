'use client'

import { Box, Chip, Typography, Link, Container } from '@mui/material'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { OpenInNew, Verified } from '@mui/icons-material'
import { certifications } from '@/content/data'
import { Card } from '@/components/ui/Card'
import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap } from 'react-icons/hi'

export function Certifications() {
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
  
  const sortedCertifications = certifications.sort((a, b) => a.order - b.order)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short'
    })
  }

  const isExpired = (expirationDate: string | null) => {
    if (!expirationDate) return false
    return new Date(expirationDate) < new Date()
  }

  const getCertificationIcon = (issuer: string) => {
    const issuerLower = issuer.toLowerCase()
    if (issuerLower.includes('google')) return '🏆'
    if (issuerLower.includes('microsoft')) return '🥇'
    if (issuerLower.includes('amazon') || issuerLower.includes('aws')) return '☁️'
    if (issuerLower.includes('meta')) return '📘'
    if (issuerLower.includes('oracle')) return '🔴'
    if (issuerLower.includes('cisco')) return '🔷'
    if (issuerLower.includes('opencv')) return '👁️'
    return '📜'
  }

  return (
    <Box 
      component={motion.section}
      ref={containerRef}
      id="certifications"
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
            radial-gradient(600px circle at 25% 30%, rgba(139, 92, 246, 0.05), transparent 50%),
            radial-gradient(800px circle at 75% 70%, rgba(14, 165, 233, 0.05), transparent 60%),
            radial-gradient(400px circle at 50% 90%, rgba(245, 158, 11, 0.05), transparent 40%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      
      {/* Floating Elements */}
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
              width: 35,
              height: 35,
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
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              >
                📜
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
              Certifications
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
                  color: 'var(--neon-purple)',
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
              Professional certifications and achievements
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
          {sortedCertifications.map((cert, index) => (
            <Box key={cert.id}>
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
                      {getCertificationIcon(cert.issuer)}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                        {cert.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'var(--neon-purple)' }}>
                        {cert.issuer}
                      </Typography>
                    </Box>
                    <Verified sx={{ color: 'var(--neon-green)' }} />
                  </Box>

                  <Typography variant="body2" sx={{ mb: 2, color: 'var(--text-secondary)' }}>
                    Issued: {formatDate(cert.issueDate)}
                    {cert.expirationDate && (
                      <>
                        <br />
                        Expires: {formatDate(cert.expirationDate)}
                      </>
                    )}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 3, flexGrow: 1, color: 'var(--text-primary)' }}>
                    {cert.description}
                  </Typography>

                  {cert.skills && cert.skills.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: 'var(--text-primary)' }}>
                        Skills Covered
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {cert.skills.map((skill, idx) => (
                          <Chip 
                            key={idx} 
                            label={skill} 
                            size="small" 
                            variant="outlined"
                            sx={{
                              background: 'var(--glass-light)',
                              color: 'var(--text-secondary)',
                              border: '1px solid var(--glass-border)',
                              '&:hover': {
                                background: 'var(--gradient-secondary)',
                                color: 'white'
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                    {cert.featured && (
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
                    {cert.expirationDate && !isExpired(cert.expirationDate) && (
                      <Chip 
                        label="Active" 
                        size="small" 
                        sx={{
                          background: 'var(--neon-green)',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    )}
                    {cert.expirationDate && isExpired(cert.expirationDate) && (
                      <Chip 
                        label="Expired" 
                        size="small" 
                        sx={{
                          background: 'var(--neon-orange)',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    )}
                    {!cert.expirationDate && (
                      <Chip 
                        label="No Expiration" 
                        size="small" 
                        sx={{
                          background: 'var(--neon-cyan)',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    )}
                  </Box>

                  {(cert.credentialUrl || cert.verificationUrl) && (
                    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                      {cert.credentialUrl && (
                        <Link
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            textDecoration: 'none',
                            color: 'var(--neon-purple)',
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          View Certificate
                          <OpenInNew sx={{ fontSize: 16 }} />
                        </Link>
                      )}
                      {cert.verificationUrl && (
                        <Link
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            textDecoration: 'none',
                            color: 'var(--neon-green)',
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          Verify
                          <OpenInNew sx={{ fontSize: 16 }} />
                        </Link>
                      )}
                    </Box>
                  )}
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