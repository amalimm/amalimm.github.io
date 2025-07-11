/**
 * Text contrast utility for dynamic backgrounds
 * Calculates optimal text color based on background luminance
 */

export interface TextContrastOptions {
  threshold?: number // Luminance threshold (0-1, default: 0.5)
  lightColor?: string // Color for dark backgrounds
  darkColor?: string // Color for light backgrounds
}

/**
 * Calculate the relative luminance of a color
 * Based on WCAG guidelines
 */
export function calculateLuminance(color: string): number {
  // Remove # if present
  const hex = color.replace('#', '')
  
  // Convert to RGB
  const r = parseInt(hex.slice(0, 2), 16) / 255
  const g = parseInt(hex.slice(2, 4), 16) / 255
  const b = parseInt(hex.slice(4, 6), 16) / 255
  
  // Apply gamma correction
  const sRGB = [r, g, b].map(component => {
    return component <= 0.03928
      ? component / 12.92
      : Math.pow((component + 0.055) / 1.055, 2.4)
  })
  
  // Calculate luminance
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2]
}

/**
 * Determine if a background is light or dark
 */
export function isLightBackground(background: string, threshold: number = 0.5): boolean {
  // Handle CSS variables
  if (background.startsWith('var(')) {
    // For CSS variables, we'll make reasonable assumptions
    const varName = background.match(/var\(([^)]+)\)/)?.[1]
    if (varName?.includes('neon') || varName?.includes('bright')) {
      return true
    }
    return false
  }
  
  // Handle gradients - use first color
  if (background.includes('gradient')) {
    const colorMatch = background.match(/#[0-9a-fA-F]{6}/)?.[0]
    if (colorMatch) {
      return calculateLuminance(colorMatch) > threshold
    }
    return false
  }
  
  // Handle rgba/rgb
  if (background.startsWith('rgb')) {
    const values = background.match(/\d+/g)
    if (values && values.length >= 3) {
      const r = parseInt(values[0]) / 255
      const g = parseInt(values[1]) / 255
      const b = parseInt(values[2]) / 255
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
      return luminance > threshold
    }
    return false
  }
  
  // Handle hex colors
  if (background.startsWith('#')) {
    return calculateLuminance(background) > threshold
  }
  
  // Default to dark background
  return false
}

/**
 * Get the optimal text color for a given background
 */
export function getContrastColor(
  background: string,
  options: TextContrastOptions = {}
): string {
  const {
    threshold = 0.5,
    lightColor = 'var(--text-primary)',
    darkColor = 'var(--text-dark)'
  } = options
  
  const isLight = isLightBackground(background, threshold)
  return isLight ? darkColor : lightColor
}

/**
 * Get contrast color for neon/bright backgrounds
 */
export function getNeonContrastColor(neonColor: string): string {
  const neonColors = {
    'var(--neon-cyan)': 'var(--text-dark)',
    'var(--neon-yellow)': 'var(--text-dark)',
    'var(--neon-orange)': 'var(--text-dark)',
    'var(--neon-green)': 'var(--text-dark)',
    'var(--neon-purple)': 'var(--text-primary)',
    'var(--neon-pink)': 'var(--text-primary)',
    'var(--neon-blue)': 'var(--text-primary)',
  }
  
  return neonColors[neonColor as keyof typeof neonColors] || 'var(--text-primary)'
}

/**
 * Hook for using contrast colors in React components
 */
export function useContrastColor(background: string, options?: TextContrastOptions) {
  return getContrastColor(background, options)
}