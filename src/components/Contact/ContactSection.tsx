"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  IconButton
} from "@mui/material"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "contact@amadeusslim.dev",
      color: "#7c3aed"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      value: "+65 9123 4567",
      color: "#10b981"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      value: "Singapore",
      color: "#ef4444"
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: '#24292e' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0077b5' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: '#1da1f2' }
  ]

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
            Let&apos;s <span style={{ color: '#a855f7' }}>Connect</span>
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
            Have a project in mind or just want to say hello? I&apos;d love to hear from you
          </Typography>
        </Box>

        <Grid container spacing={8}>
          {/* Left side - Contact Info */}
          <Grid item xs={12} lg={5}>
            <Box data-aos="fade-right" data-aos-duration="800">
              <Typography 
                variant="h3" 
                sx={{ 
                  fontSize: { xs: '1.875rem', md: '2.25rem' },
                  fontWeight: 700,
                  color: 'white',
                  mb: 4
                }}
              >
                Get in Touch
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '1.125rem',
                  lineHeight: 1.7,
                  color: '#d1d5db',
                  mb: 8
                }}
              >
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a friendly chat about technology and design.
              </Typography>

              {/* Contact Methods */}
              <Box sx={{ mb: 8 }}>
                {contactMethods.map((method, index) => (
                  <Card
                    key={method.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                    sx={{
                      mb: 3,
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: method.color,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 10px 25px ${method.color}20`
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 2,
                            backgroundColor: method.color + '20',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 3,
                            color: method.color
                          }}
                        >
                          {method.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: 'white',
                              fontWeight: 600,
                              mb: 0.5,
                              fontSize: '1.125rem'
                            }}
                          >
                            {method.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#d1d5db',
                              fontSize: '1rem'
                            }}
                          >
                            {method.value}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              {/* Social Links */}
              <Box data-aos="fade-up" data-aos-delay="600">
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'white',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: '1.25rem'
                  }}
                >
                  Follow Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <IconButton
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: 56,
                        height: 56,
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                        color: '#9ca3af',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: color,
                          borderColor: color,
                          color: 'white',
                          transform: 'translateY(-2px)',
                          boxShadow: `0 8px 20px ${color}40`
                        }
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right side - Contact Form */}
          <Grid item xs={12} lg={7}>
            <Card
              data-aos="fade-left"
              data-aos-duration="800"
              sx={{
                backgroundColor: '#1f2937',
                border: '1px solid #374151',
                borderRadius: 4,
                overflow: 'hidden'
              }}
            >
              <CardContent sx={{ p: 6 }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 700,
                    color: 'white',
                    mb: 6,
                    textAlign: 'center'
                  }}
                >
                  Send Message
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    {/* Name & Email */}
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#374151',
                            color: 'white',
                            '& fieldset': {
                              borderColor: '#4b5563'
                            },
                            '&:hover fieldset': {
                              borderColor: '#a855f7'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#a855f7'
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: '#d1d5db',
                            '&.Mui-focused': {
                              color: '#a855f7'
                            }
                          }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#374151',
                            color: 'white',
                            '& fieldset': {
                              borderColor: '#4b5563'
                            },
                            '&:hover fieldset': {
                              borderColor: '#a855f7'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#a855f7'
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: '#d1d5db',
                            '&.Mui-focused': {
                              color: '#a855f7'
                            }
                          }
                        }}
                      />
                    </Grid>

                    {/* Subject */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#374151',
                            color: 'white',
                            '& fieldset': {
                              borderColor: '#4b5563'
                            },
                            '&:hover fieldset': {
                              borderColor: '#a855f7'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#a855f7'
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: '#d1d5db',
                            '&.Mui-focused': {
                              color: '#a855f7'
                            }
                          }
                        }}
                      />
                    </Grid>

                    {/* Message */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={6}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#374151',
                            color: 'white',
                            '& fieldset': {
                              borderColor: '#4b5563'
                            },
                            '&:hover fieldset': {
                              borderColor: '#a855f7'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#a855f7'
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: '#d1d5db',
                            '&.Mui-focused': {
                              color: '#a855f7'
                            }
                          }
                        }}
                      />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        sx={{
                          background: 'linear-gradient(45deg, #a855f7, #ec4899)',
                          py: 2,
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          borderRadius: 3,
                          textTransform: 'none',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #9333ea, #db2777)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 15px 30px rgba(168, 85, 247, 0.4)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box 
          data-aos="fade-up"
          data-aos-delay="800"
          sx={{ 
            mt: 16, 
            pt: 8, 
            borderTop: '1px solid #374151',
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#9ca3af',
              fontSize: '1rem'
            }}
          >
            © 2024 Amadeus Lim. Built with Next.js and lots of ☕
          </Typography>
        </Box>
      </Container>
    </section>
  )
}