'use client'

import { Box, Chip, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { experiences } from '@/content/data'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function Experience() {
  const featuredExperiences = experiences.filter(exp => exp.featured).sort((a, b) => a.order - b.order)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short'
    })
  }

  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'full-time':
        return '💼'
      case 'freelance':
        return '🚀'
      case 'part-time':
        return '⏰'
      default:
        return '🏢'
    }
  }

  return (
    <Section id="experience" sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Experience
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            sx={{ mb: 6, opacity: 0.8 }}
          >
            My professional journey and achievements
          </Typography>
        </motion.div>

        <Box sx={{ maxWidth: '100%' }}>
          {featuredExperiences.map((experience, index) => (
            <Box key={experience.id} sx={{ display: 'flex', mb: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3 }}>
                <Box
                  sx={{ 
                    bgcolor: 'primary.main',
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: 'white'
                  }}
                >
                  {getExperienceIcon(experience.type)}
                </Box>
                {index < featuredExperiences.length - 1 && (
                  <Box sx={{ 
                    width: 2, 
                    height: 60, 
                    bgcolor: 'divider', 
                    mt: 1 
                  }} />
                )}
              </Box>
              <Box sx={{ flex: 1 }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ p: 3, mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                          {experience.title}
                        </Typography>
                        <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                          {experience.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {experience.location} • {experience.remote ? 'Remote' : 'On-site'}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" color="text.secondary">
                          {formatDate(experience.startDate)} - {
                            experience.current ? 'Present' : formatDate(experience.endDate!)
                          }
                        </Typography>
                        <Chip 
                          label={experience.type.replace('-', ' ')} 
                          size="small" 
                          sx={{ mt: 1, textTransform: 'capitalize' }}
                        />
                      </Box>
                    </Box>

                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {experience.description}
                    </Typography>

                    {experience.achievements && experience.achievements.length > 0 && (
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                          Key Achievements
                        </Typography>
                        <Box component="ul" sx={{ m: 0, pl: 3 }}>
                          {experience.achievements.map((achievement, idx) => (
                            <Typography 
                              key={idx} 
                              component="li" 
                              variant="body2" 
                              sx={{ mb: 1 }}
                            >
                              {achievement}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    )}

                    {experience.technologies && experience.technologies.length > 0 && (
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                          Technologies Used
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {experience.technologies.map((tech, idx) => (
                            <Chip 
                              key={idx} 
                              label={tech} 
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
                      </Box>
                    )}

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                      <Chip 
                        label={experience.industry} 
                        size="small" 
                        color="secondary"
                      />
                      <Chip 
                        label={experience.companySize} 
                        size="small" 
                        variant="outlined"
                        sx={{ textTransform: 'capitalize' }}
                      />
                    </Box>
                  </Card>
                </motion.div>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  )
}