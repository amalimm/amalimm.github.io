"use client"

import { Box, Stack, Fade, Slide, List, ListItem, ListItemIcon, ListItemText, Container, Typography, Card, CardContent } from '@mui/material'
import { FiberManualRecord as CircleIcon } from '@mui/icons-material'
import { profile } from '@/content/data/profile'

export function About() {
  return (
    <Box 
      component="section"
      id="about"
      sx={{
        py: { xs: 16, md: 20 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
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
                About Me
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: '1.125rem', maxWidth: '500px' }}
              >
                Get to know me better
              </Typography>
            </Box>
          </Fade>

          {/* Main Content */}
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              gap: 6,
              width: '100%' 
            }}
          >
            {/* Left Column - About Text */}
            <Box sx={{ flex: 1 }}>
              <Slide direction="right" in timeout={1000}>
                <Stack spacing={4} sx={{ height: '100%' }}>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                      lineHeight: 1.8,
                      textAlign: 'justify'
                    }}
                  >
                    {profile.about}
                  </Typography>
                  
                  <Box>
                    <List sx={{ p: 0 }}>
                      <ListItem sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={`Based in ${profile.location.city}, ${profile.location.state}, ${profile.location.country}`}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                            sx: { fontSize: '0.95rem' }
                          }}
                        />
                      </ListItem>
                      
                      <ListItem sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={`Currently: ${profile.availability}`}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                            sx: { fontSize: '0.95rem' }
                          }}
                        />
                      </ListItem>
                      
                      <ListItem sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={profile.currentPosition.title + ' @ ' + profile.currentPosition.company}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                            sx: { fontSize: '0.95rem' }
                          }}
                        />
                      </ListItem>
                    </List>
                  </Box>
                </Stack>
              </Slide>
            </Box>
            
            {/* Right Column - Quick Facts */}
            <Box sx={{ flex: 1 }}>
              <Slide direction="left" in timeout={1200}>
                <Box sx={{ height: '100%' }}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      background: (theme) => `linear-gradient(135deg, ${theme.palette.background.paper}e6 0%, ${theme.palette.background.paper}cc 100%)`,
                      backdropFilter: 'blur(10px)',
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <CardContent sx={{ p: 4, height: '100%' }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: '1.25rem', sm: '1.5rem' },
                          fontWeight: 600,
                          mb: 4,
                          color: 'text.primary'
                        }}
                      >
                        Quick Facts
                      </Typography>
                      
                      <Box 
                        sx={{ 
                          display: 'grid', 
                          gridTemplateColumns: 'repeat(2, 1fr)', 
                          gap: 3 
                        }}
                      >
                        {profile.topSkills?.slice(0, 4).map((skill, index) => (
                          <Fade in timeout={1400 + index * 200} key={index}>
                            <Card 
                              sx={{ 
                                textAlign: 'center', 
                                p: 3,
                                backgroundColor: 'background.paper',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  transform: 'translateY(-4px)',
                                  boxShadow: (theme) => theme.shadows[8],
                                },
                              }}
                            >
                              <Typography
                                variant="h4"
                                color="primary.main"
                                sx={{
                                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                  fontWeight: 700,
                                  mb: 1,
                                }}
                              >
                                {skill.endorsements}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{
                                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                                  fontWeight: 500,
                                  lineHeight: 1.4,
                                }}
                              >
                                {skill.name}
                              </Typography>
                            </Card>
                          </Fade>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Slide>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}