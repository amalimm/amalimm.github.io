"use client"

import { Button } from '@/components/ui/Button'
import { 
  Box, 
  Stack, 
  Fade, 
  Slide, 
  TextField, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Avatar,
  Container,
  Typography,
  Card,
  CardContent
} from '@mui/material'
import { 
  Email as EmailIcon, 
  LocationOn as LocationOnIcon, 
  Public as PublicIcon, 
  // GitHub as GitHubIcon, 
  // LinkedIn as LinkedInIcon,
  // Twitter as TwitterIcon
} from '@mui/icons-material'
import { profile } from '@/content/data/profile'

export function Contact() {
  // const getSocialIcon = (platform: string) => {
  //   switch (platform.toLowerCase()) {
  //     case 'github':
  //       return <GitHubIcon />
  //     case 'linkedin':
  //       return <LinkedInIcon />
  //     case 'twitter':
  //       return <TwitterIcon />
  //     default:
  //       return <PublicIcon />
  //   }
  // }

  return (
    <Box 
      component="section"
      id="contact"
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
                Get In Touch
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: '1.125rem', maxWidth: '500px' }}
              >
                Let&apos;s work together on your next project
              </Typography>
            </Box>
          </Fade>

          {/* Contact Content */}
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              gap: 6,
              width: '100%' 
            }}
          >
            {/* Contact Information */}
            <Box sx={{ flex: 1 }}>
              <Slide direction="right" in timeout={1000}>
                <Box>
                  <Card 
                    sx={{ 
                      height: '100%',
                      background: (theme) => `linear-gradient(135deg, ${theme.palette.background.paper}e6 0%, ${theme.palette.background.paper}cc 100%)`,
                      backdropFilter: 'blur(10px)',
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: '1.25rem', sm: '1.5rem' },
                          fontWeight: 600,
                          mb: 4,
                          color: 'text.primary'
                        }}
                      >
                        Contact Information
                      </Typography>
                      
                      <Stack spacing={3}>
                        <List sx={{ p: 0 }}>
                          <ListItem sx={{ px: 0, py: 2 }}>
                            <ListItemIcon>
                              <Avatar sx={{ bgcolor: 'primary.100', color: 'primary.600', width: 48, height: 48 }}>
                                <EmailIcon />
                              </Avatar>
                            </ListItemIcon>
                            <ListItemText 
                              primary="Email"
                              secondary={profile.contactInfo.email}
                              primaryTypographyProps={{
                                variant: 'caption',
                                color: 'text.secondary',
                                sx: { fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }
                              }}
                              secondaryTypographyProps={{
                                variant: 'body1',
                                color: 'text.primary',
                                sx: { fontSize: '1rem', fontWeight: 500 }
                              }}
                              sx={{ ml: 2 }}
                            />
                          </ListItem>
                          
                          <ListItem sx={{ px: 0, py: 2 }}>
                            <ListItemIcon>
                              <Avatar sx={{ bgcolor: 'primary.100', color: 'primary.600', width: 48, height: 48 }}>
                                <LocationOnIcon />
                              </Avatar>
                            </ListItemIcon>
                            <ListItemText 
                              primary="Location"
                              secondary={`${profile.location.city}, ${profile.location.state}, ${profile.location.country}`}
                              primaryTypographyProps={{
                                variant: 'caption',
                                color: 'text.secondary',
                                sx: { fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }
                              }}
                              secondaryTypographyProps={{
                                variant: 'body1',
                                color: 'text.primary',
                                sx: { fontSize: '1rem', fontWeight: 500 }
                              }}
                              sx={{ ml: 2 }}
                            />
                          </ListItem>
                          
                          <ListItem sx={{ px: 0, py: 2 }}>
                            <ListItemIcon>
                              <Avatar sx={{ bgcolor: 'primary.100', color: 'primary.600', width: 48, height: 48 }}>
                                <PublicIcon />
                              </Avatar>
                            </ListItemIcon>
                            <ListItemText 
                              primary="Website"
                              secondary={profile.contactInfo.website}
                              primaryTypographyProps={{
                                variant: 'caption',
                                color: 'text.secondary',
                                sx: { fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }
                              }}
                              secondaryTypographyProps={{
                                variant: 'body1',
                                color: 'text.primary',
                                sx: { fontSize: '1rem', fontWeight: 500 }
                              }}
                              sx={{ ml: 2 }}
                            />
                          </ListItem>
                        </List>
                        
                        <Box sx={{ mt: 4 }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontSize: '1.125rem',
                              fontWeight: 600,
                              mb: 3,
                              color: 'text.primary'
                            }}
                          >
                            Follow Me
                          </Typography>
                          
                          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                            {Object.entries(profile.contactInfo).filter(([key]) => key !== 'email' && key !== 'website').map(([platform, url]) => (
                              <Button
                                key={platform}
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(url, '_blank')}
                              >
                                {platform}
                              </Button>
                            ))}
                          </Stack>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Box>
              </Slide>
            </Box>
            
            {/* Contact Form */}
            <Box sx={{ flex: 1 }}>
              <Slide direction="left" in timeout={1200}>
                <Box>
                  <Card 
                    sx={{ 
                      height: '100%',
                      background: (theme) => `linear-gradient(135deg, ${theme.palette.background.paper}e6 0%, ${theme.palette.background.paper}cc 100%)`,
                      backdropFilter: 'blur(10px)',
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: '1.25rem', sm: '1.5rem' },
                          fontWeight: 600,
                          mb: 4,
                          color: 'text.primary'
                        }}
                      >
                        Send Message
                      </Typography>
                      
                      <Stack spacing={3}>
                        <TextField
                          fullWidth
                          label="Name"
                          placeholder="Your name"
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            },
                          }}
                        />
                        
                        <TextField
                          fullWidth
                          label="Email"
                          placeholder="your@email.com"
                          type="email"
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            },
                          }}
                        />
                        
                        <TextField
                          fullWidth
                          label="Message"
                          placeholder="Your message..."
                          multiline
                          rows={4}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            },
                          }}
                        />
                        
                        <Button 
                          variant="primary" 
                          fullWidth 
                          size="lg"
                        >
                          Send Message
                        </Button>
                      </Stack>
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