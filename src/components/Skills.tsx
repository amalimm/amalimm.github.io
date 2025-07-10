"use client"

import { Box, Chip, Typography, Container } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaDatabase, FaServer, FaTools, FaCloud, FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiDocker, SiKubernetes } from 'react-icons/si'

// Enhanced skill data with icons and proficiency levels
const enhancedSkills = [
  { name: 'React', icon: FaReact, proficiency: 95, color: '#61DAFB', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, proficiency: 90, color: '#3178C6', category: 'Language' },
  { name: 'JavaScript', icon: SiJavascript, proficiency: 95, color: '#F7DF1E', category: 'Language' },
  { name: 'Node.js', icon: FaNodeJs, proficiency: 85, color: '#339933', category: 'Backend' },
  { name: 'Python', icon: FaPython, proficiency: 80, color: '#3776AB', category: 'Language' },
  { name: 'MongoDB', icon: SiMongodb, proficiency: 75, color: '#47A248', category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, proficiency: 80, color: '#336791', category: 'Database' },
  { name: 'Docker', icon: SiDocker, proficiency: 70, color: '#2496ED', category: 'DevOps' },
  { name: 'Kubernetes', icon: SiKubernetes, proficiency: 65, color: '#326CE5', category: 'DevOps' },
  { name: 'AWS', icon: FaCloud, proficiency: 75, color: '#FF9900', category: 'Cloud' },
]

const skillCategories = [
  { name: 'Frontend', icon: FaCode, color: '#61DAFB', description: 'Modern web interfaces' },
  { name: 'Backend', icon: FaServer, color: '#339933', description: 'Server-side development' },
  { name: 'Database', icon: FaDatabase, color: '#47A248', description: 'Data storage & management' },
  { name: 'DevOps', icon: FaTools, color: '#2496ED', description: 'Deployment & infrastructure' },
  { name: 'Cloud', icon: FaCloud, color: '#FF9900', description: 'Cloud platforms & services' },
  { name: 'Language', icon: FaCode, color: '#3178C6', description: 'Programming languages' },
]

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [animatedProficiency, setAnimatedProficiency] = useState<Record<string, number>>({})
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  
  useEffect(() => {
    if (inView) {
      enhancedSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedProficiency(prev => ({
            ...prev,
            [skill.name]: skill.proficiency
          }))
        }, index * 100)
      })
    }
  }, [inView])
  
  const filteredSkills = selectedCategory 
    ? enhancedSkills.filter(skill => skill.category === selectedCategory)
    : enhancedSkills
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }
  
  const categoryVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }
  
  return (
    <Box 
      component="section"
      id="skills"
      ref={ref}
      sx={{
        py: { xs: 16, md: 20 },
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.02) 0%, rgba(139, 92, 246, 0.02) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: 100,
          height: 100,
          background: 'linear-gradient(45deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1))',
          borderRadius: '50%',
          filter: 'blur(20px)',
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
          bottom: '20%',
          right: '15%',
          width: 80,
          height: 80,
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(100, 116, 139, 0.1))',
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
          {/* Header */}
          <motion.div
            variants={itemVariants}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
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
                ⚡
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
              Skills & Expertise
            </Typography>
            
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ 
                fontSize: '1.25rem', 
                maxWidth: '600px',
                lineHeight: 1.6,
                mx: 'auto',
              }}
            >
              Mastering the technologies that power modern applications
            </Typography>
          </motion.div>
          
          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            style={{ marginBottom: '3rem' }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Chip
                    label="All"
                    onClick={() => setSelectedCategory(null)}
                    variant={selectedCategory === null ? "filled" : "outlined"}
                    sx={{
                      background: selectedCategory === null 
                        ? 'linear-gradient(45deg, #0ea5e9, #8b5cf6)' 
                        : 'transparent',
                      color: selectedCategory === null ? 'white' : 'text.primary',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      '&:hover': {
                        background: selectedCategory === null 
                          ? 'linear-gradient(45deg, #0284c7, #7c3aed)' 
                          : 'rgba(14, 165, 233, 0.1)',
                      },
                    }}
                  />
                </motion.div>
                {skillCategories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <motion.div
                      key={category.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Chip
                        icon={<IconComponent />}
                        label={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        variant={selectedCategory === category.name ? "filled" : "outlined"}
                        sx={{
                          background: selectedCategory === category.name 
                            ? `linear-gradient(45deg, ${category.color}, #8b5cf6)` 
                            : 'transparent',
                          color: selectedCategory === category.name ? 'white' : 'text.primary',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          '&:hover': {
                            background: selectedCategory === category.name 
                              ? `linear-gradient(45deg, ${category.color}, #7c3aed)` 
                              : 'rgba(14, 165, 233, 0.1)',
                          },
                        }}
                      />
                    </motion.div>
                  )
                })}
              </Box>
            </Box>
          </motion.div>
          
          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
                  xl: 'repeat(5, 1fr)'
                },
                gap: 3,
                mb: 6
              }}
            >
              <AnimatePresence mode="wait">
                {filteredSkills.map((skill, index) => {
                  const IconComponent = skill.icon
                  const proficiency = animatedProficiency[skill.name] || 0
                  
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        z: 50
                      }}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <Card
                        sx={{
                          p: 3,
                          textAlign: 'center',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          cursor: 'pointer',
                          background: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          '&:hover': {
                            background: `linear-gradient(135deg, ${skill.color}15, rgba(139, 92, 246, 0.1))`,
                            border: `1px solid ${skill.color}40`,
                            boxShadow: `0 20px 40px ${skill.color}30`,
                          },
                        }}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: index * 0.2
                          }}
                        >
                          <Box
                            sx={{
                              fontSize: '3rem',
                              mb: 2,
                              color: skill.color,
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                            }}
                          >
                            <IconComponent />
                          </Box>
                        </motion.div>
                        
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: 'text.primary',
                          }}
                        >
                          {skill.name}
                        </Typography>
                        
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 2,
                            fontSize: '0.85rem',
                            opacity: 0.8,
                          }}
                        >
                          {skill.category}
                        </Typography>
                        
                        {/* Proficiency Bar */}
                        <Box sx={{ width: '100%', mb: 2 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="caption" color="text.secondary">
                              Proficiency
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {skill.proficiency}%
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              background: 'rgba(0, 0, 0, 0.1)',
                              overflow: 'hidden',
                              position: 'relative',
                            }}
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${proficiency}%` }}
                              transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                              style={{
                                height: '100%',
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
                                borderRadius: 4,
                                position: 'relative',
                              }}
                            >
                              <motion.div
                                animate={{
                                  opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                }}
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  right: 0,
                                  width: '30%',
                                  height: '100%',
                                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4))',
                                  borderRadius: 4,
                                }}
                              />
                            </motion.div>
                          </Box>
                        </Box>
                        
                        <Chip
                          label={`${skill.proficiency}%`}
                          size="small"
                          sx={{
                            background: `linear-gradient(45deg, ${skill.color}, ${skill.color}CC)`,
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                          }}
                        />
                      </Card>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </Box>
          </motion.div>
          
          {/* Skills by Category Overview */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                mb: 4,
                fontSize: { xs: '1.5rem', sm: '2rem' },
                fontWeight: 700,
                color: 'text.primary',
              }}
            >
              Technology Categories
            </Typography>
            
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                },
                gap: 3,
              }}
            >
              {skillCategories.map((category, index) => {
                const IconComponent = category.icon
                const categorySkills = enhancedSkills.filter(skill => skill.category === category.name)
                
                return (
                  <motion.div
                    key={category.name}
                    variants={categoryVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 2,
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <Card
                      sx={{
                        p: 3,
                        height: '100%',
                        cursor: 'pointer',
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        '&:hover': {
                          background: `linear-gradient(135deg, ${category.color}15, rgba(139, 92, 246, 0.1))`,
                          border: `1px solid ${category.color}40`,
                          boxShadow: `0 20px 40px ${category.color}30`,
                        },
                      }}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            fontSize: '2rem',
                            mr: 2,
                            color: category.color,
                            display: 'flex',
                            alignItems: 'center',
                            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                          }}
                        >
                          <IconComponent />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: 'text.primary',
                            }}
                          >
                            {category.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ fontSize: '0.75rem' }}
                          >
                            {categorySkills.length} skills
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          lineHeight: 1.6,
                        }}
                      >
                        {category.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {categorySkills.slice(0, 3).map((skill) => (
                          <Chip
                            key={skill.name}
                            label={skill.name}
                            size="small"
                            sx={{
                              background: `${category.color}20`,
                              color: category.color,
                              fontWeight: 600,
                              fontSize: '0.7rem',
                              '&:hover': {
                                background: `${category.color}30`,
                              },
                            }}
                          />
                        ))}
                        {categorySkills.length > 3 && (
                          <Chip
                            label={`+${categorySkills.length - 3}`}
                            size="small"
                            sx={{
                              background: 'rgba(0, 0, 0, 0.1)',
                              color: 'text.secondary',
                              fontSize: '0.7rem',
                            }}
                          />
                        )}
                      </Box>
                    </Card>
                  </motion.div>
                )
              })}
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}