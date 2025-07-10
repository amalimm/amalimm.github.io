'use client'

import { Box, Chip, Typography, LinearProgress } from '@mui/material'
import { motion } from 'framer-motion'
import { languages } from '@/content/data'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function Languages() {
  const sortedLanguages = languages.sort((a, b) => a.order - b.order)

  const getProficiencyValue = (proficiency: string) => {
    switch (proficiency) {
      case 'native':
        return 100
      case 'bilingual':
        return 95
      case 'professional':
        return 85
      case 'conversational':
        return 70
      case 'elementary':
        return 50
      default:
        return 0
    }
  }

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'native':
        return 'success'
      case 'bilingual':
        return 'success'
      case 'professional':
        return 'primary'
      case 'conversational':
        return 'info'
      case 'elementary':
        return 'warning'
      default:
        return 'default'
    }
  }

  return (
    <Section id="languages" sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Languages
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            sx={{ mb: 6, opacity: 0.8 }}
          >
            Languages I speak and my proficiency levels
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)'
            },
            gap: 4
          }}
        >
          {sortedLanguages.map((language, index) => (
            <Box key={language.id}>
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
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Box
                    sx={{
                      fontSize: '3rem',
                      mb: 2,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                  >
                    {language.icon}
                  </Box>

                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    {language.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {language.proficiencyDescription}
                  </Typography>

                  <Box sx={{ width: '100%', mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Proficiency
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {getProficiencyValue(language.proficiency)}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={getProficiencyValue(language.proficiency)} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        bgcolor: 'rgba(0,0,0,0.1)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          bgcolor: `${getProficiencyColor(language.proficiency)}.main`
                        }
                      }}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Chip 
                      label={language.proficiency} 
                      size="small" 
                      color={getProficiencyColor(language.proficiency) as 'success' | 'primary' | 'info' | 'warning' | 'default'}
                      sx={{ textTransform: 'capitalize' }}
                    />
                    {language.featured && (
                      <Chip 
                        label="Featured" 
                        size="small" 
                        color="primary"
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