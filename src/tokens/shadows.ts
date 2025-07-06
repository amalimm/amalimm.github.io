export const shadows = {
  // Basic shadows
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  
  // Elevation system
  elevation: {
    0: 'none',
    1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    4: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    5: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  
  // Colored shadows
  colored: {
    primary: '0 10px 15px -3px rgba(124, 58, 237, 0.1), 0 4px 6px -2px rgba(124, 58, 237, 0.05)',
    secondary: '0 10px 15px -3px rgba(236, 72, 153, 0.1), 0 4px 6px -2px rgba(236, 72, 153, 0.05)',
    success: '0 10px 15px -3px rgba(16, 185, 129, 0.1), 0 4px 6px -2px rgba(16, 185, 129, 0.05)',
    error: '0 10px 15px -3px rgba(239, 68, 68, 0.1), 0 4px 6px -2px rgba(239, 68, 68, 0.05)',
    warning: '0 10px 15px -3px rgba(245, 158, 11, 0.1), 0 4px 6px -2px rgba(245, 158, 11, 0.05)',
  },
  
  // Inset shadows
  inset: {
    sm: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    md: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  
  // Glow effects
  glow: {
    sm: '0 0 5px rgba(124, 58, 237, 0.5)',
    base: '0 0 10px rgba(124, 58, 237, 0.5)',
    md: '0 0 20px rgba(124, 58, 237, 0.5)',
    lg: '0 0 40px rgba(124, 58, 237, 0.5)',
  },
} as const

export type ShadowKey = keyof typeof shadows