'use client'

import { Box, Chip, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { education } from '@/content/data'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function Education() {
  const sortedEducation = education.sort((a, b) => a.order - b.order)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short'
    })
  }

  const getEducationIcon = (degree: string) => {
    if (degree.toLowerCase().includes('bachelor')) return '🎓'
    if (degree.toLowerCase().includes('master')) return '🏆'
    if (degree.toLowerCase().includes('phd') || degree.toLowerCase().includes('doctorate')) return '👨‍🎓'
    if (degree.toLowerCase().includes('certificate')) return '📜'
    if (degree.toLowerCase().includes('matriculation')) return '📚'
    return '🎓'
  }

  return (
    <Section id="education" sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Education
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            sx={{ mb: 6, opacity: 0.8 }}
          >
            My academic journey and qualifications
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
                    p: 3, 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3
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
                      {getEducationIcon(edu.degree)}
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {edu.field}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                    {edu.institution}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {edu.location}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {formatDate(edu.startDate)} - {
                      edu.current ? 'Present' : formatDate(edu.endDate)
                    }
                  </Typography>

                  {edu.grade && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Grade: {edu.grade}
                      </Typography>
                    </Box>
                  )}

                  {edu.description && (
                    <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }}>
                      {edu.description}
                    </Typography>
                  )}

                  {edu.activities && edu.activities.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                        Activities
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 3 }}>
                        {edu.activities.map((activity, idx) => (
                          <Typography 
                            key={idx} 
                            component="li" 
                            variant="body2" 
                            sx={{ mb: 0.5 }}
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
                        color="primary"
                      />
                    )}
                    {edu.current && (
                      <Chip 
                        label="Current" 
                        size="small" 
                        color="success"
                      />
                    )}
                  </Box>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  )
}