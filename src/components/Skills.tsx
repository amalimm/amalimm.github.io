'use client'

import { Box, Chip, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { skills, skillGroups } from '@/content/data'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function Skills() {
  const featuredSkills = skills.filter(skill => skill.featured).slice(0, 12)
  const featuredGroups = skillGroups.filter(group => group.category.featured)

  return (
    <Section id="skills" spacing="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Skills & Expertise
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            sx={{ mb: 6, opacity: 0.8 }}
          >
            Technologies and tools I work with
          </Typography>
        </motion.div>

        {/* Featured Skills Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 4 }}>
            Featured Skills
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)'
              },
              gap: 3
            }}
          >
            {featuredSkills.map((skill, index) => (
              <Box key={skill.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 3
                      }
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: '2rem',
                        mb: 2,
                        color: skill.color
                      }}
                    >
                      {skill.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      component="h4" 
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 2, flexGrow: 1 }}
                    >
                      {skill.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                      <Chip 
                        label={skill.proficiency} 
                        size="small" 
                        color="primary"
                        sx={{ textTransform: 'capitalize' }}
                      />
                      {skill.yearsOfExperience && (
                        <Chip 
                          label={`${skill.yearsOfExperience}+ years`} 
                          size="small" 
                          variant="outlined"
                        />
                      )}
                    </Box>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Skills by Category */}
        <Box>
          <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 4 }}>
            Skills by Category
          </Typography>
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
            {featuredGroups.map((group, groupIndex) => (
              <Box key={group.category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ p: 3, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          fontSize: '1.5rem',
                          mr: 2,
                          color: group.category.color
                        }}
                      >
                        {group.category.icon}
                      </Box>
                      <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                        {group.category.name}
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 3 }}
                    >
                      {group.category.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {group.skills
                        .filter(skill => skill.featured)
                        .slice(0, 8)
                        .map((skill) => (
                          <Chip
                            key={skill.id}
                            label={skill.name}
                            size="small"
                            variant="outlined"
                            sx={{
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                color: 'white'
                              }
                            }}
                          />
                        ))}
                    </Box>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Section>
  )
}