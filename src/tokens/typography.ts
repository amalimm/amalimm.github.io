export const typography = {
  // Font families
  fontFamily: {
    sans: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ],
    mono: [
      'JetBrains Mono',
      'Fira Code',
      'Consolas',
      'Liberation Mono',
      'Menlo',
      'Courier New',
      'monospace',
    ],
  },
  
  // Font sizes with line heights
  fontSize: {
    xs: ['12px', '16px'],
    sm: ['14px', '20px'],
    base: ['16px', '24px'],
    lg: ['18px', '28px'],
    xl: ['20px', '28px'],
    '2xl': ['24px', '32px'],
    '3xl': ['30px', '36px'],
    '4xl': ['36px', '40px'],
    '5xl': ['48px', '1'],
    '6xl': ['60px', '1'],
    '7xl': ['72px', '1'],
    '8xl': ['96px', '1'],
    '9xl': ['128px', '1'],
  },
  
  // Font weights
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Semantic typography variants
  variants: {
    display: {
      fontSize: ['72px', '80px'],
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1,
    },
    h1: {
      fontSize: ['48px', '56px'],
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
    },
    h2: {
      fontSize: ['36px', '42px'],
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: ['28px', '34px'],
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.3,
    },
    h4: {
      fontSize: ['24px', '30px'],
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.4,
    },
    h5: {
      fontSize: ['20px', '26px'],
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.4,
    },
    h6: {
      fontSize: ['18px', '24px'],
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.5,
    },
    body: {
      fontSize: ['16px', '24px'],
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    'body-large': {
      fontSize: ['18px', '28px'],
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.6,
    },
    'body-small': {
      fontSize: ['14px', '20px'],
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.4,
    },
    caption: {
      fontSize: ['12px', '16px'],
      fontWeight: 400,
      letterSpacing: '0.025em',
      lineHeight: 1.3,
    },
    overline: {
      fontSize: ['12px', '16px'],
      fontWeight: 500,
      letterSpacing: '0.1em',
      lineHeight: 1.3,
      textTransform: 'uppercase' as const,
    },
  },
} as const

export type TypographyVariant = keyof typeof typography.variants