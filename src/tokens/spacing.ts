export const spacing = {
  // Base spacing unit: 4px
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
  
  // Semantic spacing
  section: '128px', // 32 * 4px
  container: '80px', // 20 * 4px
  component: '48px', // 12 * 4px
  element: '24px', // 6 * 4px
  
  // Responsive spacing
  responsive: {
    xs: '16px',
    sm: '24px',
    md: '48px',
    lg: '80px',
    xl: '128px',
  },
} as const

// Semantic spacing tokens for better clarity
export const semanticSpacing = {
  // Component padding
  'component-xs': '8px',
  'component-sm': '12px',
  'component-md': '16px',
  'component-lg': '24px',
  'component-xl': '32px',
  
  // Section spacing
  'section-xs': '32px',
  'section-sm': '48px',
  'section-md': '64px',
  'section-lg': '96px',
  'section-xl': '128px',
  
  // Container spacing
  'container-xs': '16px',
  'container-sm': '24px',
  'container-md': '32px',
  'container-lg': '48px',
  'container-xl': '64px',
} as const

export type SpacingKey = keyof typeof spacing