export * from './colors'
export * from './spacing'
export * from './typography'
export * from './shadows'
export * from './animations'
export * from './breakpoints'

// Combined design tokens
export const tokens = {
  colors: import('./colors').then(m => m.colors),
  spacing: import('./spacing').then(m => m.spacing),
  typography: import('./typography').then(m => m.typography),
  shadows: import('./shadows').then(m => m.shadows),
  animations: import('./animations').then(m => m.animations),
  breakpoints: import('./breakpoints').then(m => m.breakpoints),
} as const