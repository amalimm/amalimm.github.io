"use client"

import { forwardRef, HTMLAttributes } from 'react'
import { Card as MUICard, CardContent as MUICardContent, CardHeader as MUICardHeader, CardActions, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledCard = styled(MUICard)(({ theme }) => ({
  borderRadius: 16,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[8],
  },
}))

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'filled' | 'ghost' | 'gradient' | 'glass'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  interactive?: boolean
  elevated?: boolean
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', interactive = false, elevated = false, children, className, ...props }, ref) => {
    const getElevation = () => {
      if (elevated) return 4
      if (variant === 'ghost') return 0
      return 1
    }

    const sx = {
      ...(variant === 'outline' && {
        border: 1,
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      }),
      ...(variant === 'filled' && {
        backgroundColor: 'background.default',
      }),
      ...(variant === 'ghost' && {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }),
      ...(variant === 'gradient' && {
        background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
      }),
      ...(variant === 'glass' && {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
      }),
      ...(interactive && {
        cursor: 'pointer',
        '&:active': {
          transform: 'scale(0.98)',
        },
      }),
    }

    return (
      <StyledCard
        ref={ref}
        elevation={getElevation()}
        className={className}
        sx={sx}
        {...props}
      >
        {children}
      </StyledCard>
    )
  }
)

Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <MUICardHeader
      ref={ref}
      className={className}
      title={children}
      {...props}
    />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <Typography
      ref={ref}
      variant="h6"
      component="h3"
      className={className}
      {...props}
    >
      {children}
    </Typography>
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <Typography
      ref={ref}
      variant="body2"
      color="text.secondary"
      className={className}
      {...props}
    >
      {children}
    </Typography>
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <MUICardContent
      ref={ref}
      className={className}
      {...props}
    >
      {children}
    </MUICardContent>
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <CardActions
      ref={ref}
      className={className}
      {...props}
    >
      {children}
    </CardActions>
  )
)
CardFooter.displayName = 'CardFooter'

export { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter
}