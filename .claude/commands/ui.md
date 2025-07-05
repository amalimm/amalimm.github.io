# UI Command - Portfolio Development Context

## Project Context
**Production Portfolio**: Next.js 15 + TypeScript + Tailwind CSS v4 + Framer Motion  
**Architecture**: Frontend-only, data-driven, no backend/CMS  
**Goal**: Professional, scalable, maintainable UI system

## Current Architecture Issues

### **Critical Problems to Fix**
1. **Flat data structure** - `/src/data/` doesn't scale
2. **Hardcoded values** - Colors, spacing scattered throughout
3. **Missing design system** - No tokens, inconsistent patterns
4. **No content validation** - Untyped data structures
5. **Poor component organization** - Mixed concerns

### **Required Structure Enhancement**
```
src/
├── design-system/
│   ├── tokens/           # All design primitives
│   ├── components/       # Reusable UI components
│   └── styles/          # Global styles & tokens
├── content/
│   ├── schemas/         # TypeScript content schemas
│   ├── data/            # Structured content by type
│   └── collections/     # Repeatable content (projects, etc.)
├── lib/
│   ├── animations/      # Motion variants & presets
│   └── utils/          # Utilities & validation
```

## Design System Requirements

### **Design Tokens (Mandatory)**
- **Colors**: Brand palette with semantic tokens
- **Typography**: Font scales, weights, line heights
- **Spacing**: 8px base scale with semantic naming
- **Shadows**: Elevation system with z-index scale
- **Animation**: Duration, easing, and motion presets

### **Component Architecture**
- **Primitives**: Button, Input, Card (atomic components)
- **Compositions**: Complex components built from primitives
- **Layouts**: Container, Grid, Section wrappers
- **Variants**: Use class-variance-authority for consistency

### **Content Management**
- **Schemas**: Zod validation for all content types
- **Collections**: Projects, experiences, skills
- **Metadata**: SEO, OG tags, structured data
- **Type Safety**: Full TypeScript coverage

## Development Standards

### **Code Quality (Non-Negotiable)**
- **TypeScript Strict**: No `any` types, explicit interfaces
- **Accessibility**: WCAG 2.1 AA compliance, semantic HTML
- **Performance**: Lighthouse score > 90, Core Web Vitals
- **Mobile-First**: Responsive by default, touch targets 44px+

### **File Organization**
- **PascalCase**: Components (`Button.tsx`)
- **camelCase**: Utilities (`formatDate.ts`) 
- **kebab-case**: CSS files (`design-tokens.css`)
- **Absolute imports**: `@/design-system/...`

### **Animation Standards**
- **Framer Motion**: Consistent variants
- **Performance**: `transform` and `opacity` only
- **Reduced motion**: Respect user preferences
- **Easing**: `ease-out` for most transitions

## When UI Command is Used

### **Priority Actions**
1. **Implement design tokens** - Replace all hardcoded values
2. **Create component variants** - Use CVA for consistency
3. **Structure content** - Separate schemas from data
4. **Add validation** - Zod schemas for type safety
5. **Optimize performance** - Image optimization, code splitting

### **Always Enforce**
- Use design tokens instead of hardcoded values
- Follow TypeScript strict typing
- Implement proper accessibility
- Use semantic HTML structure
- Mobile-first responsive design
- Consistent animation patterns

## Key Patterns

### **Design Token Usage**
```typescript
// ❌ Wrong
const button = 'bg-purple-500 text-white px-4 py-2'

// ✅ Correct
const button = 'bg-primary-500 text-primary-foreground px-token-4 py-token-2'
```

### **Component Structure**
```typescript
// ✅ Required pattern
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(...)
```

### **Content Schema**
```typescript
// ✅ Required validation
export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(100),
  technologies: z.array(TechnologySchema),
  // ... rest of schema
})
```

## Missing Components (Build These)

### **Design Tokens**
- Color system with semantic meanings
- Typography scale with line heights
- Spacing system (8px base)
- Shadow elevation system
- Z-index scale for layering

### **Core Components**
- Button with variants (primary, secondary, ghost)
- Card with consistent styling
- Container with responsive padding
- Grid system with consistent gaps
- Typography components (H1-H6, Body, Caption)

### **Content System**
- Project schema with validation
- Experience/work history schema
- Skills/technologies schema
- Page metadata schema
- SEO optimization utilities

## Performance Requirements

### **Core Web Vitals**
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)  
- **CLS**: < 0.1 (Cumulative Layout Shift)

### **Optimization**
- Next.js Image component required
- Dynamic imports for heavy components
- Bundle size monitoring
- Accessibility audit automation

## Accessibility Checklist

- [ ] Semantic HTML structure
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Focus indicators visible
- [ ] Color contrast 4.5:1+ for text
- [ ] Touch targets 44px minimum
- [ ] Screen reader compatibility

## Tech Stack Context
- **Next.js 15**: App Router, SSG for performance
- **TypeScript**: Strict mode, no compromises
- **Tailwind CSS v4**: With custom design tokens
- **Framer Motion**: Consistent animation system
- **Zod**: Content validation and type safety

---

**Context Summary**: This is a professional portfolio requiring enterprise-grade architecture while staying frontend-only. Focus on design systems, type safety, performance, and accessibility. Challenge any hardcoded values or poor organization patterns.