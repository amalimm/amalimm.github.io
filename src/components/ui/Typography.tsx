"use client"

import React, { HTMLAttributes } from 'react'
import { Typography as MUITypography } from '@mui/material'
// import { styled } from '@mui/material/styles'

// const StyledTypography = styled(MUITypography)({
//   '&.gradient': {
//     background: 'linear-gradient(45deg, #0ea5e9 30%, #64748b 90%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//   },
// })

export interface TypographyProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-large' | 'body-small' | 'caption' | 'overline' | 'lead' | 'muted' | 'small' | 'large'
  color?: 'default' | 'muted' | 'subtle' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'white' | 'gradient'
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
  align?: 'left' | 'center' | 'right' | 'justify'
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'strong' | 'em' | 'small'
}

const Typography = ({ 
  variant = 'body', 
  color = 'default', 
  weight, 
  align = 'left', 
  transform = 'none',
  children, 
  as, 
  className,
  ...props 
}: TypographyProps) => {
  const getMUIVariant = (variant: string) => {
    switch (variant) {
      case 'display':
        return 'h1'
      case 'h1':
        return 'h1'
      case 'h2':
        return 'h2'
      case 'h3':
        return 'h3'
      case 'h4':
        return 'h4'
      case 'h5':
        return 'h5'
      case 'h6':
        return 'h6'
      case 'body':
        return 'body1'
      case 'body-large':
        return 'body1'
      case 'body-small':
        return 'body2'
      case 'caption':
        return 'caption'
      case 'overline':
        return 'overline'
      case 'lead':
        return 'subtitle1'
      case 'muted':
        return 'body2'
      case 'small':
        return 'caption'
      case 'large':
        return 'h6'
      default:
        return 'body1'
    }
  }

  const getMUIColor = (color: string) => {
    switch (color) {
      case 'default':
        return 'text.primary'
      case 'muted':
        return 'text.secondary'
      case 'subtle':
        return 'text.secondary'
      case 'primary':
        return 'primary.main'
      case 'secondary':
        return 'secondary.main'
      case 'success':
        return 'success.main'
      case 'error':
        return 'error.main'
      case 'warning':
        return 'warning.main'
      case 'white':
        return 'common.white'
      case 'gradient':
        return 'inherit'
      default:
        return 'text.primary'
    }
  }

  const getDefaultComponent = (variant: string) => {
    switch (variant) {
      case 'display':
      case 'h1':
        return 'h1'
      case 'h2':
        return 'h2'
      case 'h3':
        return 'h3'
      case 'h4':
        return 'h4'
      case 'h5':
        return 'h5'
      case 'h6':
        return 'h6'
      case 'body':
      case 'body-large':
      case 'body-small':
      case 'lead':
        return 'p'
      case 'caption':
      case 'overline':
      case 'muted':
      case 'small':
      case 'large':
        return 'span'
      default:
        return 'p'
    }
  }

  const component = as || getDefaultComponent(variant)

  const sx = {
    textAlign: align,
    textTransform: transform,
    color: getMUIColor(color),
    ...(weight && { fontWeight: weight }),
    ...(variant === 'display' && {
      fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
    }),
    ...(variant === 'body-large' && {
      fontSize: '1.125rem',
      lineHeight: 1.7,
    }),
    ...(variant === 'lead' && {
      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
      lineHeight: 1.6,
      color: 'text.secondary',
    }),
  }

  return (
    <MUITypography
      variant={getMUIVariant(variant)}
      component={component}
      className={color === 'gradient' ? `gradient ${className || ''}` : className}
      sx={sx}
      {...props}
    >
      {children}
    </MUITypography>
  )
}

Typography.displayName = 'Typography'

// Convenience components for common use cases
const H1 = (props: Omit<TypographyProps, 'as' | 'variant'>) => <Typography {...props} as="h1" variant="h1" />
H1.displayName = 'H1'

const H2 = (props: Omit<TypographyProps, 'as' | 'variant'>) => <Typography {...props} as="h2" variant="h2" />
H2.displayName = 'H2'

const H3 = (props: Omit<TypographyProps, 'as' | 'variant'>) => <Typography {...props} as="h3" variant="h3" />
H3.displayName = 'H3'

const H4 = (props: Omit<TypographyProps, 'as' | 'variant'>) => <Typography {...props} as="h4" variant="h4" />
H4.displayName = 'H4'

const H5 = (props: Omit<TypographyProps, 'as' | 'variant'>) => <Typography {...props} as="h5" variant="h5" />
H5.displayName = 'H5'

const H6 = (props: Omit<TypographyProps, 'as' | 'variant'>) => <Typography {...props} as="h6" variant="h6" />
H6.displayName = 'H6'

const P = (props: Omit<TypographyProps, 'as' | 'variant'>) => <Typography {...props} as="p" variant="body" />
P.displayName = 'P'

const Lead = (props: Omit<TypographyProps, 'as' | 'variant'>) => <Typography {...props} as="p" variant="lead" />
Lead.displayName = 'Lead'

const Muted = (props: Omit<TypographyProps, 'as' | 'variant' | 'color'>) => <Typography {...props} as="p" variant="muted" color="muted" />
Muted.displayName = 'Muted'

const Small = (props: Omit<TypographyProps, 'as' | 'variant'>) => <Typography {...props} as="small" variant="small" />
Small.displayName = 'Small'

const Large = (props: Omit<TypographyProps, 'as' | 'variant'>) => <Typography {...props} as="div" variant="large" />
Large.displayName = 'Large'

export { 
  Typography, 
  H1, 
  H2, 
  H3, 
  H4, 
  H5, 
  H6, 
  P, 
  Lead, 
  Muted, 
  Small, 
  Large
}