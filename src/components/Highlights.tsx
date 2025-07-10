'use client'

import { Box, Chip, Typography, Link } from '@mui/material'
import { motion } from 'framer-motion'
import { OpenInNew, Article, Code, School, Star } from '@mui/icons-material'
import { highlights } from '@/content/data'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function Highlights() {
  const sortedHighlights = highlights.sort((a, b) => a.order - b.order)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'project':
        return <Code sx={{ color: 'primary.main' }} />
      case 'publication':
        return <Article sx={{ color: 'secondary.main' }} />
      case 'portfolio':
        return <Star sx={{ color: 'warning.main' }} />
      case 'research':
        return <School sx={{ color: 'info.main' }} />
      default:
        return <Article sx={{ color: 'text.secondary' }} />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'project':
        return 'primary'
      case 'publication':
        return 'secondary'
      case 'portfolio':
        return 'warning'
      case 'research':
        return 'info'
      default:
        return 'default'
    }
  }

  return (
    <Section id="highlights" sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Highlights
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            sx={{ mb: 6, opacity: 0.8 }}
          >
            Notable achievements and featured work
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)'
            },
            gap: 4
          }}
        >
          {sortedHighlights.map((highlight, index) => (
            <Box key={highlight.id}>
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
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3
                    }
                  }}
                  onClick={() => window.open(highlight.url, '_blank')}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 2 }}>
                      {getTypeIcon(highlight.type)}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                        {highlight.title}
                      </Typography>
                      {highlight.platform && (
                        <Typography variant="body2" color="text.secondary">
                          {highlight.platform}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  <Typography variant="body1" sx={{ mb: 3, flexGrow: 1 }}>
                    {highlight.description}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center', mb: 2 }}>
                    <Chip 
                      label={highlight.type} 
                      size="small" 
                      color={getTypeColor(highlight.type) as 'primary' | 'secondary' | 'warning' | 'info' | 'default'}
                      sx={{ textTransform: 'capitalize' }}
                    />
                    {highlight.featured && (
                      <Chip 
                        label="Featured" 
                        size="small" 
                        color="primary"
                      />
                    )}
                  </Box>

                  <Link
                    href={highlight.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      textDecoration: 'none',
                      color: 'primary.main',
                      alignSelf: 'flex-start',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    View {highlight.type === 'project' ? 'Project' : 
                           highlight.type === 'publication' ? 'Publication' : 
                           highlight.type === 'portfolio' ? 'Portfolio' : 
                           highlight.type === 'research' ? 'Research' : 'More'}
                    <OpenInNew sx={{ fontSize: 16 }} />
                  </Link>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  )
}