"use client"

import { Download, MapPin, Award, Code, Users, Zap } from "lucide-react"
import { Container, Grid, Typography, Box, Card, CardContent, Button, Chip, Avatar } from "@mui/material"
import { aboutData } from "@/data/about"

export default function AboutSection() {
  const achievements = [
    { icon: <Award className="w-8 h-8" />, number: "50+", label: "Projects Completed", color: "#7c3aed" },
    { icon: <Code className="w-8 h-8" />, number: "2+", label: "Years Experience", color: "#ec4899" },
    { icon: <Users className="w-8 h-8" />, number: "15+", label: "Happy Clients", color: "#06b6d4" },
    { icon: <Zap className="w-8 h-8" />, number: "24/7", label: "Support Available", color: "#10b981" }
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <Container maxWidth="xl" sx={{ px: { xs: 4, sm: 6, lg: 12 } }}>
        {/* Section Header */}
        <Box 
          data-aos="fade-up" 
          data-aos-duration="800"
          className="text-center mb-20"
        >
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 700,
              color: '#1f2937',
              mb: 3
            }}
          >
            About <span style={{ color: '#7c3aed' }}>Me</span>
          </Typography>
          <Box 
            sx={{ 
              width: 80, 
              height: 4, 
              background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
              borderRadius: 2,
              mx: 'auto',
              mb: 4
            }}
          />
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#6b7280',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.125rem', md: '1.25rem' }
            }}
          >
            Passionate developer crafting digital experiences that make a difference
          </Typography>
        </Box>

        <Grid container spacing={8} alignItems="center">
          {/* Left side - Content */}
          <Grid item xs={12} lg={6}>
            <Box data-aos="fade-right" data-aos-duration="800">
              {/* Profile Info */}
              <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <MapPin className="w-5 h-5 mr-2" style={{ color: '#7c3aed' }} />
                  <Typography variant="body1" sx={{ color: '#6b7280', fontSize: '1.1rem' }}>
                    Based in Singapore
                  </Typography>
                </Box>
                
                <Typography 
                  variant="h3" 
                  component="h3"
                  sx={{ 
                    fontSize: { xs: '1.875rem', md: '2.25rem' },
                    fontWeight: 600,
                    color: '#1f2937',
                    mb: 2
                  }}
                >
                  {aboutData.name}
                </Typography>
                
                <Chip 
                  label={aboutData.role}
                  sx={{ 
                    background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
                    color: 'white',
                    fontSize: '1rem',
                    px: 2,
                    py: 1,
                    height: 'auto'
                  }}
                />
              </Box>

              {/* Bio */}
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: '#4b5563',
                  mb: 6
                }}
              >
                {aboutData.bio}
              </Typography>

              {/* Highlights */}
              <Box sx={{ mb: 6 }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#1f2937',
                    mb: 3
                  }}
                >
                  Key Highlights
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {aboutData.highlights.map((highlight, index) => (
                    <Box 
                      key={index}
                      component="li" 
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      sx={{ 
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 2,
                        '&:last-child': { mb: 0 }
                      }}
                    >
                      <Box 
                        sx={{ 
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
                          mt: 1,
                          mr: 3,
                          flexShrink: 0
                        }}
                      />
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#4b5563',
                          fontSize: '1.1rem',
                          lineHeight: 1.6
                        }}
                      >
                        {highlight}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Action Buttons */}
              <Box 
                data-aos="fade-up"
                data-aos-delay="400"
                sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 3,
                  pt: 2
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  sx={{
                    background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 5,
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #6d28d9, #db2777)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 20px rgba(124, 58, 237, 0.3)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Download Resume
                </Button>
                
                <Button
                  variant="outlined"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 5,
                    textTransform: 'none',
                    borderColor: '#7c3aed',
                    color: '#7c3aed',
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: '#7c3aed',
                      backgroundColor: '#7c3aed',
                      color: 'white',
                      transform: 'translateY(-2px)',
                      borderWidth: 2
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Let&apos;s Connect
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right side - Image & Floating Elements */}
          <Grid item xs={12} lg={6}>
            <Box 
              data-aos="fade-left" 
              data-aos-duration="800"
              sx={{ 
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: { xs: 400, lg: 500 }
              }}
            >
              {/* Main Profile Circle */}
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 280, md: 350 },
                  height: { xs: 280, md: 350 },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4)',
                  p: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#f3f4f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 600,
                    color: '#4b5563'
                  }}
                >
                  Profile Photo
                </Box>
              </Box>

              {/* Floating Cards */}
              <Card
                data-aos="zoom-in"
                data-aos-delay="600"
                sx={{
                  position: 'absolute',
                  top: { xs: 20, md: 40 },
                  right: { xs: 10, md: -20 },
                  width: { xs: 100, md: 120 },
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  background: 'linear-gradient(135deg, #fff, #f8fafc)'
                }}
              >
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                  <Code style={{ color: '#7c3aed', marginBottom: '8px' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>
                    Clean Code
                  </Typography>
                </CardContent>
              </Card>

              <Card
                data-aos="zoom-in"
                data-aos-delay="800"
                sx={{
                  position: 'absolute',
                  bottom: { xs: 20, md: 60 },
                  left: { xs: 10, md: -20 },
                  width: { xs: 100, md: 120 },
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  background: 'linear-gradient(135deg, #fff, #f8fafc)'
                }}
              >
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                  <Users style={{ color: '#ec4899', marginBottom: '8px' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>
                    Team Player
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Achievement Stats */}
        <Box sx={{ mt: 12 }}>
          <Grid container spacing={4}>
            {achievements.map((achievement, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #fff, #f8fafc)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(124, 58, 237, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      borderColor: achievement.color
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                      backgroundColor: achievement.color + '20',
                      color: achievement.color
                    }}
                  >
                    {achievement.icon}
                  </Avatar>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                      fontWeight: 700,
                      color: achievement.color,
                      mb: 1
                    }}
                  >
                    {achievement.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#6b7280',
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      fontWeight: 500
                    }}
                  >
                    {achievement.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  )
}