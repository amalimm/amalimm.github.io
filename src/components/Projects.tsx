"use client"

import { Button } from '@/components/ui/Button'
import { Box, Stack, Fade, Chip, Container, Typography, Card, CardContent, CardActions } from '@mui/material'
// import { Launch as LaunchIcon, Code as CodeIcon } from '@mui/icons-material'
import { projects } from '@/content/data/projects'

export function Projects() {
  return (
    <Box 
      component="section"
      id="projects"
      sx={{
        py: { xs: 16, md: 20 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={8} alignItems="center">
          {/* Header */}
          <Fade in timeout={800}>
            <Box textAlign="center">
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: 'text.primary'
                }}
              >
                Featured Projects
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: '1.125rem', maxWidth: '500px' }}
              >
                Some of my recent work
              </Typography>
            </Box>
          </Fade>

          {/* Projects Grid */}
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
              gap: 4,
              width: '100%'
            }}
          >
            {projects.map((project, index) => (
              <Fade in timeout={1000 + index * 200} key={project.id}>
                <Box sx={{ height: '100%' }}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: (theme) => theme.shadows[12],
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Stack spacing={3}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontSize: { xs: '1.25rem', sm: '1.375rem' },
                            fontWeight: 600,
                            color: 'text.primary',
                            lineHeight: 1.3,
                          }}
                        >
                          {project.title}
                        </Typography>
                        
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {project.description}
                        </Typography>
                        
                        <Box>
                          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {project.technologies.map((tech, techIndex) => (
                              <Chip
                                key={techIndex}
                                label={tech.name}
                                size="small"
                                sx={{
                                  backgroundColor: 'primary.50',
                                  color: 'primary.700',
                                  fontSize: '0.75rem',
                                  fontWeight: 500,
                                  '&:hover': {
                                    backgroundColor: 'primary.100',
                                  },
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>
                      </Stack>
                    </CardContent>
                    
                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Stack direction="row" spacing={2} width="100%">
                        {project.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant={link.type === 'website' ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => window.open(link.url, '_blank')}
                          >
                            {link.label}
                          </Button>
                        ))}
                      </Stack>
                    </CardActions>
                  </Card>
                </Box>
              </Fade>
            ))}
          </Box>

          {/* Optional: View More Button */}
          <Fade in timeout={1600}>
            <Box>
              <Button
                variant="outline"
                size="lg"
              >
                View More Projects
              </Button>
            </Box>
          </Fade>
        </Stack>
      </Container>
    </Box>
  )
}