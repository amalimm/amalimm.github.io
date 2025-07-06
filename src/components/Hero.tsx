"use client"

import { Button } from '@/components/ui/Button'
import { Box, Stack, Fade, Slide, Container, Typography } from '@mui/material'
import { profile } from '@/content/data/profile'

export function Hero() {
  return (
    <Box 
      component="section"
      sx={{
        py: { xs: 16, md: 20 },
        background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center" textAlign="center">
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {profile.name}
              </Typography>
            </Box>
          </Fade>
          
          <Slide direction="up" in timeout={1200}>
            <Box>
              <Typography
                variant="h2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                  fontWeight: 500,
                  mb: 3,
                }}
              >
                {profile.title}
              </Typography>
            </Box>
          </Slide>
          
          <Fade in timeout={1400}>
            <Box sx={{ maxWidth: '42rem' }}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  lineHeight: 1.7,
                  mb: 6,
                }}
              >
                {profile.headline}
              </Typography>
            </Box>
          </Fade>
          
          {profile.cta && (
            <Slide direction="up" in timeout={1600}>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                justifyContent="center"
                sx={{ mb: 8 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {profile.cta.primary.text}
                </Button>
                
                {profile.cta.secondary && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {profile.cta.secondary.text}
                  </Button>
                )}
              </Stack>
            </Slide>
          )}
          
          {profile.stats && (
            <Fade in timeout={1800}>
              <Box sx={{ width: '100%', mt: 8 }}>
                <Box 
                  sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, 
                    gap: 4 
                  }}
                >
                  {profile.stats.map((stat, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 2,
                        backgroundColor: (theme) => theme.palette.background.paper,
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: (theme) => theme.shadows[8],
                        },
                      }}
                    >
                      <Typography
                        variant="h3"
                        color="primary.main"
                        sx={{
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: '0.8rem', sm: '0.875rem' },
                          fontWeight: 500,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Fade>
          )}
        </Stack>
      </Container>
    </Box>
  )
}