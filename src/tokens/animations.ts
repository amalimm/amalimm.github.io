export const animations = {
  // Durations
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
    slower: '600ms',
    slowest: '1000ms',
  },
  
  // Timing functions
  easing: {
    linear: 'linear',
    ease: 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
    
    // Custom easing functions
    'ease-in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    'ease-in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    'ease-out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    'ease-out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    'ease-in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    'ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    
    // Specialized easing
    'ease-in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    'ease-in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Keyframes
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    fadeOut: {
      '0%': { opacity: 1 },
      '100%': { opacity: 0 },
    },
    slideUp: {
      '0%': { transform: 'translateY(100%)', opacity: 0 },
      '100%': { transform: 'translateY(0)', opacity: 1 },
    },
    slideDown: {
      '0%': { transform: 'translateY(-100%)', opacity: 0 },
      '100%': { transform: 'translateY(0)', opacity: 1 },
    },
    slideLeft: {
      '0%': { transform: 'translateX(100%)', opacity: 0 },
      '100%': { transform: 'translateX(0)', opacity: 1 },
    },
    slideRight: {
      '0%': { transform: 'translateX(-100%)', opacity: 0 },
      '100%': { transform: 'translateX(0)', opacity: 1 },
    },
    scaleIn: {
      '0%': { transform: 'scale(0.8)', opacity: 0 },
      '100%': { transform: 'scale(1)', opacity: 1 },
    },
    scaleOut: {
      '0%': { transform: 'scale(1)', opacity: 1 },
      '100%': { transform: 'scale(0.8)', opacity: 0 },
    },
    bounce: {
      '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0, 0, 0)' },
      '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
      '70%': { transform: 'translate3d(0, -15px, 0)' },
      '90%': { transform: 'translate3d(0, -4px, 0)' },
    },
    pulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 },
    },
    spin: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' },
    },
    wiggle: {
      '0%, 100%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
    },
  },
  
  // Common animation combinations
  presets: {
    fadeIn: {
      animation: 'fadeIn 250ms ease-out',
    },
    fadeOut: {
      animation: 'fadeOut 250ms ease-in',
    },
    slideUp: {
      animation: 'slideUp 400ms ease-out',
    },
    slideDown: {
      animation: 'slideDown 400ms ease-out',
    },
    scaleIn: {
      animation: 'scaleIn 250ms ease-out',
    },
    float: {
      animation: 'float 3s ease-in-out infinite',
    },
    pulse: {
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    spin: {
      animation: 'spin 1s linear infinite',
    },
    bounce: {
      animation: 'bounce 1s infinite',
    },
    wiggle: {
      animation: 'wiggle 1s ease-in-out infinite',
    },
  },
} as const

export type AnimationDuration = keyof typeof animations.duration
export type AnimationEasing = keyof typeof animations.easing
export type AnimationKeyframe = keyof typeof animations.keyframes
export type AnimationPreset = keyof typeof animations.presets