"use client"

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { Button as MUIButton, CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(MUIButton)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 8,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: theme.shadows[4],
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}))

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'warning'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'icon'
  fullWidth?: boolean
  loading?: boolean
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, loading = false, children, disabled, ...props }, ref) => {
    const getMUIVariant = (variant: string) => {
      switch (variant) {
        case 'primary':
        case 'destructive':
        case 'success':
        case 'warning':
          return 'contained'
        case 'outline':
          return 'outlined'
        case 'secondary':
        case 'ghost':
          return 'text'
        default:
          return 'contained'
      }
    }

    const getMUISize = (size: string) => {
      switch (size) {
        case 'sm':
          return 'small'
        case 'md':
          return 'medium'
        case 'lg':
        case 'xl':
          return 'large'
        default:
          return 'medium'
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { color, ...buttonProps } = props
    
    return (
      <StyledButton
        ref={ref}
        variant={getMUIVariant(variant)}
        size={getMUISize(size)}
        fullWidth={fullWidth}
        disabled={loading || disabled}
        startIcon={loading ? <CircularProgress size={16} /> : undefined}
        {...buttonProps}
      >
        {children}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'

export { Button }