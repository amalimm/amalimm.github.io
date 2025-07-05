"use client"

import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Container, Grid, Typography, Box, Card, CardContent, Button, Chip, IconButton } from "@mui/material"
import { projects } from "@/data/projects"

export default function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section className="py-32 bg-gray-900">
      <Container maxWidth="xl" sx={{ px: { xs: 4, sm: 6, lg: 12 } }}>
        {/* Section Header */}
        <Box 
          data-aos="fade-up" 
          data-aos-duration="800"
          sx={{ textAlign: 'center', mb: 12 }}
        >
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 700,
              color: 'white',
              mb: 3
            }}
          >
            Featured <span style={{ color: '#a855f7' }}>Projects</span>
          </Typography>
          <Box 
            sx={{ 
              width: 80, 
              height: 4, 
              background: 'linear-gradient(45deg, #a855f7, #ec4899)',
              borderRadius: 2,
              mx: 'auto',
              mb: 4
            }}
          />
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#d1d5db',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.125rem', md: '1.25rem' }
            }}
          >
            Here are some of my recent projects that showcase my skills and passion for creating amazing user experiences
          </Typography>
        </Box>

        {/* Featured Projects */}
        <Box sx={{ mb: 16 }}>
          <Grid container spacing={6}>
            {featuredProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.id}>
                <Card
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  sx={{
                    height: '100%',
                    backgroundColor: '#1f2937',
                    borderRadius: 4,
                    overflow: 'hidden',
                    border: '1px solid #374151',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                      borderColor: '#a855f7'
                    }
                  }}
                >
                  {/* Project Image */}
                  <Box
                    sx={{
                      position: 'relative',
                      height: 250,
                      background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        textAlign: 'center'
                      }}
                    >
                      Project Image
                    </Typography>
                    
                    {/* Hover Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        '&:hover': {
                          opacity: 1
                        }
                      }}
                      className="hover-overlay"
                    >
                      {project.liveUrl && (
                        <IconButton
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            backdropFilter: 'blur(10px)',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.3)',
                              transform: 'scale(1.1)'
                            }
                          }}
                        >
                          <ExternalLink />
                        </IconButton>
                      )}
                      {project.githubUrl && (
                        <IconButton
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            backdropFilter: 'blur(10px)',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.3)',
                              transform: 'scale(1.1)'
                            }
                          }}
                        >
                          <Github />
                        </IconButton>
                      )}
                    </Box>
                  </Box>

                  {/* Project Content */}
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        mb: 2,
                        fontSize: { xs: '1.25rem', md: '1.5rem' }
                      }}
                    >
                      {project.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#d1d5db',
                        mb: 3,
                        lineHeight: 1.6,
                        fontSize: '1rem'
                      }}
                    >
                      {project.longDescription}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(168, 85, 247, 0.2)',
                              color: '#c084fc',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              border: '1px solid rgba(168, 85, 247, 0.3)'
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Learn More Button */}
                    <Button
                      endIcon={<ArrowRight />}
                      sx={{
                        color: '#a855f7',
                        fontWeight: 600,
                        textTransform: 'none',
                        p: 0,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: '#c084fc',
                          '& .MuiButton-endIcon': {
                            transform: 'translateX(4px)'
                          }
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Other Projects */}
        <Box>
          <Typography 
            variant="h3" 
            data-aos="fade-up"
            sx={{ 
              textAlign: 'center',
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              fontWeight: 700,
              color: 'white',
              mb: 8
            }}
          >
            Other Notable Projects
          </Typography>

          <Grid container spacing={4}>
            {otherProjects.map((project, index) => (
              <Grid item xs={12} sm={6} lg={4} key={project.id}>
                <Card
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  sx={{
                    height: '100%',
                    backgroundColor: '#1f2937',
                    borderRadius: 3,
                    border: '1px solid #374151',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: '#a855f7',
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Project Icon */}
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'white'
                      }}
                    >
                      {project.title.charAt(0)}
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '1.125rem'
                        }}
                      >
                        {project.title}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        {project.githubUrl && (
                          <IconButton
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{
                              color: '#9ca3af',
                              '&:hover': {
                                color: '#a855f7',
                                transform: 'scale(1.1)'
                              }
                            }}
                          >
                            <Github size={18} />
                          </IconButton>
                        )}
                        {project.liveUrl && (
                          <IconButton
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{
                              color: '#9ca3af',
                              '&:hover': {
                                color: '#a855f7',
                                transform: 'scale(1.1)'
                              }
                            }}
                          >
                            <ExternalLink size={18} />
                          </IconButton>
                        )}
                      </Box>
                    </Box>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#d1d5db',
                        mb: 3,
                        lineHeight: 1.5,
                        fontSize: '0.875rem'
                      }}
                    >
                      {project.description}
                    </Typography>
                    
                    {/* Technologies */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: '#374151',
                            color: '#d1d5db',
                            fontSize: '0.6875rem',
                            height: 24
                          }}
                        />
                      ))}
                      {project.technologies.length > 3 && (
                        <Chip
                          label={`+${project.technologies.length - 3}`}
                          size="small"
                          sx={{
                            backgroundColor: '#4b5563',
                            color: '#d1d5db',
                            fontSize: '0.6875rem',
                            height: 24
                          }}
                        />
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Button */}
        <Box 
          data-aos="fade-up"
          data-aos-delay="400"
          sx={{ textAlign: 'center', mt: 12 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #a855f7, #ec4899)',
              px: 6,
              py: 2,
              fontSize: '1.125rem',
              fontWeight: 600,
              borderRadius: 5,
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(45deg, #9333ea, #db2777)',
                transform: 'translateY(-2px)',
                boxShadow: '0 15px 30px rgba(168, 85, 247, 0.4)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </section>
  )
}