'use client'

import { Box, Chip, Typography, Link } from '@mui/material'
import { motion } from 'framer-motion'
import { OpenInNew, Verified } from '@mui/icons-material'
import { certifications } from '@/content/data'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export function Certifications() {
  const sortedCertifications = certifications.sort((a, b) => a.order - b.order)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short'
    })
  }

  const isExpired = (expirationDate: string | null) => {
    if (!expirationDate) return false
    return new Date(expirationDate) < new Date()
  }

  const getCertificationIcon = (issuer: string) => {
    const issuerLower = issuer.toLowerCase()
    if (issuerLower.includes('google')) return '🏆'
    if (issuerLower.includes('microsoft')) return '🥇'
    if (issuerLower.includes('amazon') || issuerLower.includes('aws')) return '☁️'
    if (issuerLower.includes('meta')) return '📘'
    if (issuerLower.includes('oracle')) return '🔴'
    if (issuerLower.includes('cisco')) return '🔷'
    if (issuerLower.includes('opencv')) return '👁️'
    return '📜'
  }

  return (
    <Section id="certifications" sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Certifications
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            sx={{ mb: 6, opacity: 0.8 }}
          >
            Professional certifications and achievements
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: 4
          }}
        >
          {sortedCertifications.map((cert, index) => (
            <Box key={cert.id}>
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
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        fontSize: '2rem',
                        mr: 2,
                        color: 'primary.main'
                      }}
                    >
                      {getCertificationIcon(cert.issuer)}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                        {cert.name}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        {cert.issuer}
                      </Typography>
                    </Box>
                    <Verified sx={{ color: 'success.main' }} />
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Issued: {formatDate(cert.issueDate)}
                    {cert.expirationDate && (
                      <>
                        <br />
                        Expires: {formatDate(cert.expirationDate)}
                      </>
                    )}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 3, flexGrow: 1 }}>
                    {cert.description}
                  </Typography>

                  {cert.skills && cert.skills.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                        Skills Covered
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {cert.skills.map((skill, idx) => (
                          <Chip 
                            key={idx} 
                            label={skill} 
                            size="small" 
                            variant="outlined"
                            sx={{
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                color: 'white'
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                    {cert.featured && (
                      <Chip 
                        label="Featured" 
                        size="small" 
                        color="primary"
                      />
                    )}
                    {cert.expirationDate && !isExpired(cert.expirationDate) && (
                      <Chip 
                        label="Active" 
                        size="small" 
                        color="success"
                      />
                    )}
                    {cert.expirationDate && isExpired(cert.expirationDate) && (
                      <Chip 
                        label="Expired" 
                        size="small" 
                        color="error"
                      />
                    )}
                    {!cert.expirationDate && (
                      <Chip 
                        label="No Expiration" 
                        size="small" 
                        color="info"
                      />
                    )}
                  </Box>

                  {(cert.credentialUrl || cert.verificationUrl) && (
                    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                      {cert.credentialUrl && (
                        <Link
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            textDecoration: 'none',
                            color: 'primary.main',
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          View Certificate
                          <OpenInNew sx={{ fontSize: 16 }} />
                        </Link>
                      )}
                      {cert.verificationUrl && (
                        <Link
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            textDecoration: 'none',
                            color: 'success.main',
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          Verify
                          <OpenInNew sx={{ fontSize: 16 }} />
                        </Link>
                      )}
                    </Box>
                  )}
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  )
}