"use client"

import React, { forwardRef, HTMLAttributes } from 'react'
import { Container as MUIContainer, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledContainer = styled(MUIContainer)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'none'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  center?: boolean
  children: React.ReactNode
  as?: 'div' | 'section' | 'main' | 'article' | 'aside' | 'header' | 'footer'
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxWidth = 'xl', padding = 'lg', children, as = 'div', className }, ref) => {
    const getMUIMaxWidth = (maxWidth: string): 'sm' | 'md' | 'lg' | 'xl' | false => {
      switch (maxWidth) {
        case 'sm':
          return 'sm'
        case 'md':
          return 'md'
        case 'lg':
          return 'lg'
        case 'xl':
          return 'xl'
        case '2xl':
        case '3xl':
        case '4xl':
        case '5xl':
        case '6xl':
        case '7xl':
          return 'xl'
        case 'full':
          return false
        case 'none':
          return false
        default:
          return 'xl'
      }
    }

    const getPaddingX = (padding: string) => {
      switch (padding) {
        case 'none':
          return 0
        case 'sm':
          return 2
        case 'md':
          return 3
        case 'lg':
          return 4
        case 'xl':
          return 6
        default:
          return 3
      }
    }

    const containerProps = {
      maxWidth: getMUIMaxWidth(maxWidth),
      disableGutters: padding === 'none',
      ref,
      className,
    }

    if (as === 'section') {
      return (
        <Box component="section" sx={{ px: getPaddingX(padding) }}>
          <MUIContainer {...containerProps}>
            {children}
          </MUIContainer>
        </Box>
      )
    }
    
    if (as === 'main') {
      return (
        <Box component="main" sx={{ px: getPaddingX(padding) }}>
          <MUIContainer {...containerProps}>
            {children}
          </MUIContainer>
        </Box>
      )
    }
    
    if (as === 'article') {
      return (
        <Box component="article" sx={{ px: getPaddingX(padding) }}>
          <MUIContainer {...containerProps}>
            {children}
          </MUIContainer>
        </Box>
      )
    }
    
    if (as === 'aside') {
      return (
        <Box component="aside" sx={{ px: getPaddingX(padding) }}>
          <MUIContainer {...containerProps}>
            {children}
          </MUIContainer>
        </Box>
      )
    }
    
    if (as === 'header') {
      return (
        <Box component="header" sx={{ px: getPaddingX(padding) }}>
          <MUIContainer {...containerProps}>
            {children}
          </MUIContainer>
        </Box>
      )
    }
    
    if (as === 'footer') {
      return (
        <Box component="footer" sx={{ px: getPaddingX(padding) }}>
          <MUIContainer {...containerProps}>
            {children}
          </MUIContainer>
        </Box>
      )
    }
    
    return (
      <StyledContainer {...containerProps}>
        {children}
      </StyledContainer>
    )
  }
)

Container.displayName = 'Container'

export { Container }