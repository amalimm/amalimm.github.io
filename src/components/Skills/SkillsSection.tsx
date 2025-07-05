"use client"

import { Container, Grid, Typography, Box, Card, CardContent, LinearProgress, Chip } from "@mui/material"
import { skills } from "@/data/skills"

export default function SkillsSection() {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    other: skills.filter(skill => skill.category === 'other')
  }

  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development', 
    tools: 'Tools & Technologies',
    other: 'Other Skills'
  }

  const categoryColors = {
    frontend: '#7c3aed',
    backend: '#ec4899', 
    tools: '#06b6d4',
    other: '#10b981'
  }

  const allTechnologies = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js',
    'Express', 'Laravel', 'PHP', 'Python', 'PostgreSQL', 'MongoDB',
    'Tailwind CSS', 'Sass', 'Git', 'Docker', 'AWS', 'Vercel',
    'Figma', 'Adobe XD', 'Photoshop', 'REST APIs', 'GraphQL', 'Socket.io'
  ]

  const currentlyLearning = ['Computer Vision', 'Machine Learning', 'Three.js', 'React Native', 'Blockchain']

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
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
              color: '#1f2937',
              mb: 3
            }}
          >
            Skills & <span style={{ color: '#7c3aed' }}>Technologies</span>
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
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.125rem', md: '1.25rem' }
            }}
          >
            I enjoy working with a variety of technologies and I&apos;m always eager to learn new ones
          </Typography>
        </Box>

        {/* Skills Categories */}
        <Grid container spacing={6} sx={{ mb: 12 }}>
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
            categorySkills.length > 0 && (
              <Grid item xs={12} md={6} lg={6} key={category}>
                <Card
                  data-aos="fade-up"
                  data-aos-delay={categoryIndex * 200}
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #fff, #f8fafc)',
                    borderRadius: 4,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    border: `2px solid ${categoryColors[category as keyof typeof categoryColors]}20`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                      borderColor: categoryColors[category as keyof typeof categoryColors] + '40'
                    }
                  }}
                >
                  <CardContent sx={{ p: 5 }}>
                    {/* Category Header */}
                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box 
                          sx={{ 
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: categoryColors[category as keyof typeof categoryColors],
                            mr: 2
                          }}
                        />
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            fontWeight: 700,
                            color: '#1f2937',
                            fontSize: { xs: '1.25rem', md: '1.5rem' }
                          }}
                        >
                          {categoryTitles[category as keyof typeof categoryTitles]}
                        </Typography>
                      </Box>
                    </Box>
                    
                    {/* Skills List */}
                    <Box sx={{ space: 4 }}>
                      {categorySkills.map((skill, index) => (
                        <Box 
                          key={skill.name}
                          data-aos="fade-right"
                          data-aos-delay={categoryIndex * 200 + index * 100}
                          sx={{ mb: 4, '&:last-child': { mb: 0 } }}
                        >
                          {/* Skill Header */}
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Typography 
                                variant="h6" 
                                sx={{ 
                                  fontSize: '1.5rem',
                                  mr: 2
                                }}
                              >
                                {skill.icon}
                              </Typography>
                              <Typography 
                                variant="h6" 
                                sx={{ 
                                  fontWeight: 600,
                                  color: '#1f2937',
                                  fontSize: { xs: '1rem', md: '1.125rem' }
                                }}
                              >
                                {skill.name}
                              </Typography>
                            </Box>
                            <Chip
                              label={`${skill.level}%`}
                              size="small"
                              sx={{
                                backgroundColor: categoryColors[category as keyof typeof categoryColors] + '20',
                                color: categoryColors[category as keyof typeof categoryColors],
                                fontWeight: 700,
                                fontSize: '0.875rem'
                              }}
                            />
                          </Box>
                          
                          {/* Progress Bar */}
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: '#f3f4f6',
                              '& .MuiLinearProgress-bar': {
                                background: `linear-gradient(45deg, ${categoryColors[category as keyof typeof categoryColors]}, ${categoryColors[category as keyof typeof categoryColors]}cc)`,
                                borderRadius: 4,
                                transition: 'transform 1.5s ease-in-out'
                              }
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          ))}
        </Grid>

        {/* Technologies Cloud */}
        <Box 
          data-aos="fade-up"
          data-aos-delay="600"
          sx={{ mb: 12 }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center',
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              fontWeight: 700,
              color: '#1f2937',
              mb: 6
            }}
          >
            Technologies I&apos;ve Worked With
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: 2,
            maxWidth: '900px',
            mx: 'auto'
          }}>
            {allTechnologies.map((tech, index) => (
              <Chip
                key={tech}
                label={tech}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                sx={{
                  px: 2,
                  py: 1,
                  backgroundColor: '#f8fafc',
                  color: '#4b5563',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  fontWeight: 500,
                  border: '1px solid #e5e7eb',
                  borderRadius: 5,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#7c3aed',
                    color: 'white',
                    borderColor: '#7c3aed',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3)'
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Currently Learning Section */}
        <Card
          data-aos="fade-up"
          data-aos-delay="800"
          sx={{
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            color: 'white',
            borderRadius: 6,
            overflow: 'hidden'
          }}
        >
          <CardContent sx={{ p: 8, textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontSize: { xs: '1.875rem', md: '2.25rem' },
                fontWeight: 700,
                mb: 3
              }}
            >
              Currently Learning
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                mb: 6,
                opacity: 0.9,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              I&apos;m always expanding my skillset. Currently diving deeper into:
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              gap: 2
            }}>
              {currentlyLearning.map((tech, index) => (
                <Chip
                  key={tech}
                  label={tech}
                  data-aos="zoom-in"
                  data-aos-delay={800 + index * 100}
                  sx={{
                    px: 3,
                    py: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    fontWeight: 600,
                    borderRadius: 5,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                    }
                  }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </section>
  )
}