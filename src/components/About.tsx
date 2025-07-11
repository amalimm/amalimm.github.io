"use client"

import { Box, Stack, Container, Typography, Card, Avatar, Chip } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import { profile } from '@/content/data/profile'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  LocationOn,
  Work,
  CalendarMonth,
  Favorite,
  RocketLaunch,
  EmojiObjects,
  Star,
  AutoAwesome,
  Code,
  WorkspacePremium,
  TrendingUp,
  School,
  SelfImprovement,
  PersonOutline
} from '@mui/icons-material'

export function About() {
  const [selectedFact, setSelectedFact] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  // Interactive background animation
  const backgroundSpring = useSpring({
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    opacity: inView ? 1 : 0,
    config: { tension: 280, friction: 60 }
  })

  // Mouse follower animation
  const mouseSpring = useSpring({
    to: {
      x: mousePosition.x,
      y: mousePosition.y
    },
    config: { tension: 300, friction: 30 }
  })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) * 0.1,
      y: (e.clientY - rect.top) * 0.1
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const personalFacts = [
    {
      icon: LocationOn,
      label: 'Location',
      value: `${profile.location.city}, ${profile.location.state}`,
      color: 'var(--neon-pink)',
      description: 'Based in beautiful Malaysia'
    },
    {
      icon: Work,
      label: 'Current Role',
      value: profile.currentPosition.title,
      color: 'var(--neon-blue)',
      description: 'Building amazing experiences'
    },
    {
      icon: CalendarMonth,
      label: 'Experience',
      value: '~ 1 Year',
      color: 'var(--neon-green)',
      description: 'Continuous learning journey'
    },
    {
      icon: RocketLaunch,
      label: 'Status',
      value: profile.availability === 'available' ? 'Available' : 'Busy',
      color: 'var(--neon-orange)',
      description: 'Ready for new challenges'
    }
  ]

  const coreValues = [
    { icon: EmojiObjects, label: 'Innovation', color: 'var(--neon-purple)' },
    { icon: Favorite, label: 'Passion', color: 'var(--neon-pink)' },
    { icon: Code, label: 'Quality', color: 'var(--neon-cyan)' },
    { icon: WorkspacePremium, label: 'Excellence', color: 'var(--neon-orange)' }
  ]

  return (
    <Box
      component={animated.section}
      ref={ref}
      id="about"
      style={backgroundSpring}
      onMouseMove={handleMouseMove}
      sx={{
        py: { xs: 16, md: 20 },
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating mouse-following element */}
      <animated.div
        style={{
          ...mouseSpring,
          position: 'absolute',
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, var(--glass-light) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1,
          filter: 'blur(20px)',
        }}
      />

      {/* Animated background shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 120,
          height: 120,
          background: 'var(--gradient-warm)',
          borderRadius: '30%',
          zIndex: 1,
        }}
      />

      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: 80,
          height: 80,
          background: 'var(--gradient-accent)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header with Avatar */}
          <motion.div
            variants={itemVariants}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
            >
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 3,
                  background: 'var(--gradient-primary)',
                  fontSize: '3rem',
                  boxShadow: 'var(--shadow-glow-cyan)',
                }}
              >
                <PersonOutline sx={{ fontSize: '3rem', color: 'white' }} />
              </Avatar>
            </motion.div>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                fontWeight: 800,
                mb: 2,
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative',
              }}
            >
              About Me
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  top: -10,
                  right: -30,
                  fontSize: '1.5rem',
                }}
              >
                <AutoAwesome sx={{ color: 'var(--neon-yellow)' }} />
              </motion.div>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1.25rem',
                maxWidth: '600px',
                lineHeight: 1.6,
                mx: 'auto',
                color: 'var(--text-secondary)',
              }}
            >
              Passionate developer crafting digital experiences with code and creativity
            </Typography>
          </motion.div>

          {/* Main Content Layout */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1.2fr 0.8fr' },
              gap: 6,
              mb: 6
            }}
          >
            {/* Left Column - About Story */}
            <motion.div variants={itemVariants}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  className: 'card-glass hover-lift',
                  background: 'var(--glass-glow)',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: 'var(--shadow-glow-cyan)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'var(--gradient-primary)',
                  }
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                    fontWeight: 700,
                    mb: 3,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <EmojiObjects sx={{ color: 'var(--neon-orange)' }} />
                  My Story
                </Typography>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {/* Introduction Section */}
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <RocketLaunch sx={{ color: 'var(--neon-cyan)', fontSize: '1.2rem' }} />
                      <Typography variant="h6" sx={{ color: 'var(--neon-cyan)', fontWeight: 600 }}>
                        Who I Am
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.125rem' },
                        lineHeight: 1.8,
                        color: 'var(--text-primary)',
                        mb: 2,
                      }}
                    >
                      Passionate and adaptable Software Developer with hands-on experience in full-stack development,
                      system integration, and cloud deployment. I specialize in transforming ideas into scalable,
                      secure, and reliable solutions — while continuously sharpening both technical and analytical skills.
                    </Typography>
                  </Box>

                  {/* Professional Highlights */}
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <School sx={{ color: 'var(--neon-purple)', fontSize: '1.2rem' }} />
                      <Typography variant="h6" sx={{ color: 'var(--neon-purple)', fontWeight: 600 }}>
                        Professional Highlights
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.125rem' },
                        lineHeight: 1.8,
                        color: 'var(--text-primary)',
                        mb: 2,
                      }}
                    >
                      Strong problem-solving mindset backed by a Pure Mathematics degree and a Computer Science minor —
                      giving me a structured, analytical approach to complex challenges.
                    </Typography>
                  </Box>

                  {/* Growth & Learning */}
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <SelfImprovement sx={{ color: 'var(--neon-orange)', fontSize: '1.2rem' }} />
                      <Typography variant="h6" sx={{ color: 'var(--neon-orange)', fontWeight: 600 }}>
                        Always Growing
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.125rem' },
                        lineHeight: 1.8,
                        color: 'var(--text-primary)',
                        mb: 2,
                      }}
                    >
                      I&apos;m always excited to connect, collaborate, and contribute to innovative projects that
                      challenge me to grow as a developer and as a teammate. Currently expanding my knowledge
                      in cloud-native development, AI & Computer Vision, and modern software engineering practices.
                    </Typography>
                  </Box>
                </motion.div>

                {/* Core Competencies Section */}
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <TrendingUp sx={{ color: 'var(--neon-green)', fontSize: '1.2rem' }} />
                    <Typography variant="h6" sx={{ color: 'var(--neon-green)', fontWeight: 600 }}>
                      Core Competencies
                    </Typography>
                  </Box>
                  <Box component="div" sx={{ m: 0, pl: 3, mb: 2 }}>
                    <Typography component="li" variant="body1" sx={{ color: 'var(--text-primary)', mb: 1, lineHeight: 1.6 }}>
                      Full-stack development: from crafting user-friendly interfaces to designing robust backend systems
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ color: 'var(--text-primary)', mb: 1, lineHeight: 1.6 }}>
                      Proficient in RESTful API design and secure authentication mechanisms
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ color: 'var(--text-primary)', mb: 1, lineHeight: 1.6 }}>
                      Experience with cloud deployment and basic server configuration
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ color: 'var(--text-primary)', mb: 1, lineHeight: 1.6 }}>
                      Collaborative team player in Agile environments (Sprint Planning, Product Reviews)
                    </Typography>
                  </Box>
                </Box>

                {/* Core Values */}
                <Box sx={{ mt: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: 'var(--text-primary)',
                    }}
                  >
                    Core Values
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {coreValues.map((value, index) => {
                      const IconComponent = value.icon
                      return (
                        <motion.div
                          key={value.label}
                          initial={{ scale: 0, rotate: -90 }}
                          animate={inView ? { scale: 1, rotate: 0 } : {}}
                          transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Chip
                            icon={<IconComponent />}
                            label={value.label}
                            sx={{
                              background: `linear-gradient(45deg, ${value.color}20, ${value.color}10)`,
                              color: value.color,
                              fontWeight: 600,
                              fontSize: '0.85rem',
                              border: `1px solid ${value.color}30`,
                              '&:hover': {
                                background: `linear-gradient(45deg, ${value.color}30, ${value.color}20)`,
                                boxShadow: `0 4px 12px ${value.color}40`,
                              },
                            }}
                          />
                        </motion.div>
                      )
                    })}
                  </Box>
                </Box>
              </Card>
            </motion.div>

            {/* Right Column - Personal Facts */}
            <motion.div variants={itemVariants}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'var(--glass-glow)',
                  backdropFilter: 'blur(25px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                    fontWeight: 700,
                    mb: 3,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Star sx={{ color: 'var(--neon-cyan)' }} />
                  Quick Facts
                </Typography>

                <Stack spacing={3}>
                  {personalFacts.map((fact, index) => {
                    const IconComponent = fact.icon
                    const isSelected = selectedFact === index

                    return (
                      <motion.div
                        key={fact.label}
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        onHoverStart={() => setSelectedFact(index)}
                        onHoverEnd={() => setSelectedFact(null)}
                      >
                        <Card
                          sx={{
                            p: 3,
                            background: isSelected
                              ? `linear-gradient(135deg, ${fact.color}15, ${fact.color}05)`
                              : 'rgba(255, 255, 255, 0.5)',
                            border: isSelected
                              ? `2px solid ${fact.color}40`
                              : '1px solid rgba(255, 255, 255, 0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            transform: isSelected ? 'translateY(-2px)' : 'translateY(0)',
                            boxShadow: isSelected
                              ? `0 10px 25px ${fact.color}30`
                              : '0 2px 8px rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                              sx={{
                                width: 50,
                                height: 50,
                                background: `linear-gradient(135deg, ${fact.color}, ${fact.color}CC)`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '1.2rem',
                                boxShadow: `0 4px 12px ${fact.color}40`,
                                transform: isSelected ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                                transition: 'all 0.3s ease',
                              }}
                            >
                              <IconComponent />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'rgba(255, 255, 255, 0.7)',
                                  fontSize: '0.85rem',
                                  fontWeight: 500,
                                  textTransform: 'uppercase',
                                  letterSpacing: 1,
                                }}
                              >
                                {fact.label}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 700,
                                  color: 'var(--text-primary)',
                                  fontSize: '1.1rem',
                                }}
                              >
                                {fact.value}
                              </Typography>
                              <AnimatePresence>
                                {isSelected && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Typography
                                      variant="caption"
                                      sx={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        fontSize: '0.8rem',
                                        fontStyle: 'italic',
                                        mt: 0.5,
                                        display: 'block',
                                      }}
                                    >
                                      {fact.description}
                                    </Typography>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </Box>
                          </Box>
                        </Card>
                      </motion.div>
                    )
                  })}
                </Stack>

                {/* Top Skills */}
                <Box sx={{ mt: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: 'var(--text-primary)',
                    }}
                  >
                    Top Skills
                  </Typography>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: 2
                    }}
                  >
                    {profile.topSkills?.slice(0, 4).map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ scale: 0, rotate: -45 }}
                        animate={inView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                      >
                        <Card
                          sx={{
                            p: 2,
                            textAlign: 'center',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(14, 165, 233, 0.2)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1))',
                              border: '1px solid rgba(14, 165, 233, 0.4)',
                              boxShadow: '0 8px 25px rgba(14, 165, 233, 0.2)',
                            },
                          }}
                        >
                          <Typography
                            variant="h4"
                            sx={{
                              fontSize: { xs: '1.5rem', sm: '2rem' },
                              fontWeight: 800,
                              mb: 0.5,
                              background: 'linear-gradient(45deg, #0ea5e9, #8b5cf6)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }}
                          >
                            {skill.endorsements}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: 0.5,
                            }}
                          >
                            {skill.name}
                          </Typography>
                        </Card>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </Card>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}