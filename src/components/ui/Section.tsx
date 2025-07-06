"use client"

import React, { HTMLAttributes } from 'react'
import { Box, Theme } from '@mui/material'
// import { styled } from '@mui/material/styles'
import { Container } from './Container'

// const StyledSection = styled(Box)({
//   position: 'relative',
// })

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'none' | 'white' | 'gray' | 'dark' | 'gradient' | 'gradient-dark'
  position?: 'relative' | 'sticky' | 'fixed'
  overflow?: 'visible' | 'hidden' | 'clip'
  children: React.ReactNode
  as?: 'section' | 'div' | 'main' | 'article' | 'aside' | 'header' | 'footer'
  container?: boolean
  containerProps?: React.ComponentProps<typeof Container>
}

const Section = ({ 
    className, 
    spacing = 'lg', 
    background = 'none', 
    position = 'relative', 
    overflow = 'visible', 
    children, 
    as = 'section', 
    container = true,
    containerProps,
    ...props 
}: SectionProps) => {
    const getSpacing = (spacing: string) => {
      switch (spacing) {
        case 'none':
          return { py: 0 }
        case 'sm':
          return { py: { xs: 8, md: 10 } }
        case 'md':
          return { py: { xs: 10, md: 12 } }
        case 'lg':
          return { py: { xs: 12, md: 16 } }
        case 'xl':
          return { py: { xs: 16, md: 20 } }
        default:
          return { py: { xs: 12, md: 16 } }
      }
    }

    const getBackground = (background: string) => {
      switch (background) {
        case 'none':
          return 'transparent'
        case 'white':
          return 'background.paper'
        case 'gray':
          return 'background.default'
        case 'dark':
          return 'grey.900'
        case 'gradient':
          return (theme: Theme) => `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`
        case 'gradient-dark':
          return (theme: Theme) => `linear-gradient(135deg, ${theme.palette.grey[800]} 0%, ${theme.palette.grey[700]} 100%)`
        default:
          return 'transparent'
      }
    }

    const getPosition = (position: string) => {
      switch (position) {
        case 'sticky':
          return 'sticky'
        case 'fixed':
          return 'fixed'
        default:
          return 'relative'
      }
    }

    const getOverflow = (overflow: string) => {
      switch (overflow) {
        case 'hidden':
          return 'hidden'
        case 'clip':
          return 'clip'
        default:
          return 'visible'
      }
    }

    const sx = {
      position: getPosition(position),
      overflow: getOverflow(overflow),
      backgroundColor: getBackground(background),
      ...(background === 'gradient' && {
        background: getBackground(background),
      }),
      ...(background === 'gradient-dark' && {
        background: getBackground(background),
      }),
      ...getSpacing(spacing),
      ...(position === 'sticky' && { top: 0, zIndex: 10 }),
      ...(position === 'fixed' && { top: 0, left: 0, right: 0, zIndex: 1300 }),
    }

    const content = container ? (
      <Container {...containerProps}>
        {children}
      </Container>
    ) : children
    
    return (
      <Box
        component={as}
        className={className}
        sx={sx}
        {...props}
      >
        {content}
      </Box>
    )
}

Section.displayName = 'Section'

// Convenience components for common section types
const HeroSection = (props: Omit<SectionProps, 'as'>) => (
  <Section 
    {...props} 
    as="section" 
    spacing="xl" 
    background="gradient"
    overflow="hidden"
  />
)
HeroSection.displayName = 'HeroSection'

const ContentSection = (props: Omit<SectionProps, 'as'>) => (
  <Section 
    {...props} 
    as="section" 
    spacing="lg" 
    background="white"
  />
)
ContentSection.displayName = 'ContentSection'

const FeatureSection = (props: Omit<SectionProps, 'as'>) => (
  <Section 
    {...props} 
    as="section" 
    spacing="lg" 
    background="gray"
  />
)
FeatureSection.displayName = 'FeatureSection'

const FooterSection = (props: Omit<SectionProps, 'as'>) => (
  <Section 
    {...props} 
    as="footer" 
    spacing="lg" 
    background="dark"
  />
)
FooterSection.displayName = 'FooterSection'

export { 
  Section, 
  HeroSection, 
  ContentSection, 
  FeatureSection, 
  FooterSection
}