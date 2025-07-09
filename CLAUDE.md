# CLAUDE.md - Claude Operating Manifest

**Version**: 1.0.0  
**Last Updated**: 2025-01-09  
**Purpose**: Autonomous AI Assistant Operating Guidelines for Portfolio Project

---

## 📁 Project Structure

```txt
.
├── .claude/
│   └── commands/
│       └── pipeline.md      → AI pipeline orchestration framework
├── src/
│   ├── app/
│   │   ├── layout.tsx       → Next.js App Router root layout
│   │   └── page.tsx         → Main portfolio page
│   ├── components/
│   │   ├── ui/              → Base UI components (Button, Card, etc.)
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Typography.tsx
│   │   │   └── index.ts
│   │   ├── About.tsx        → Portfolio section components
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── ThemeProvider.tsx → MUI theme integration
│   ├── content/
│   │   ├── data/            → Frontend-friendly structured data
│   │   │   ├── experience.ts
│   │   │   ├── profile.ts
│   │   │   ├── projects.ts
│   │   │   ├── skills.ts
│   │   │   └── utils/
│   │   │       └── profile-calculator.ts
│   │   └── schemas/         → Zod validation schemas
│   │       ├── experience.ts
│   │       ├── metadata.ts
│   │       ├── profile.ts
│   │       ├── project.ts
│   │       └── skill.ts
│   ├── lib/
│   │   └── utils.ts         → Utility functions
│   ├── styles/
│   │   └── globals.css      → Global CSS + Tailwind imports
│   ├── theme/
│   │   └── index.ts         → MUI theme configuration
│   ├── tokens/              → Design system tokens
│   │   ├── animations.ts
│   │   ├── breakpoints.ts
│   │   ├── colors.ts
│   │   ├── shadows.ts
│   │   ├── spacing.ts
│   │   └── typography.ts
│   └── types/
│       ├── index.ts         → Exported types
│       └── portfolio.ts     → Portfolio-specific types
├── public/
│   ├── images/              → Static image assets
│   └── data/                → Static data files (if any)
├── package.json             → Dependencies and scripts
├── next.config.ts           → Next.js configuration
├── tsconfig.json            → TypeScript configuration
├── eslint.config.mjs        → ESLint configuration
├── postcss.config.mjs       → PostCSS configuration
├── README.md                → Project documentation
└── CLAUDE.md                → This file
```

### Key Directory Purposes
- **`/src/components/ui/`** → Base UI components that wrap/extend MUI components
- **`/src/components/`** → Page-specific sections using MUI layout components
- **`/src/content/data/`** → All dynamic content as TypeScript objects
- **`/src/content/schemas/`** → Zod validation schemas for data integrity
- **`/src/theme/`** → MUI theme configuration with custom design tokens
- **`/src/tokens/`** → Design system foundations (colors, spacing, typography)

---

## 🧠 AI Memory & Behavior Expectations

### Core Responsibilities
When invoked via `/pipeline`, Claude must:

1. **Always follow the 6-phase SDLC lifecycle** defined in `.claude/commands/pipeline.md`
2. **Update documentation** (`CLAUDE.md`, `pipeline.md`) if structural changes are made
3. **Maintain type safety** with strict TypeScript compliance
4. **Preserve existing patterns** and coding conventions
5. **Provide thorough validation** in Phase 5 (Automated Validation Suite)
6. **Output professional summaries** in Phase 6 (Presentation)

### Behavioral Rules
- **Never modify** files in `node_modules/` or third-party dependencies
- **Always read context** before making changes (relevant files, data structures, etc.)
- **Prefer functional components** with TypeScript interfaces
- **Use existing utilities** and patterns before creating new ones
- **Validate data integrity** with Zod schemas when adding new content
- **Test build compatibility** by running `npm run build` and `npm run lint`

### Memory Patterns
- **Component Organization**: UI components extend MUI, section components use MUI layouts
- **Data Flow**: Content lives in `/content/data/` → validated by schemas → consumed by components
- **Styling**: MUI theme system with custom tokens, no direct CSS-in-JS
- **Architecture**: Frontend-only, data-driven, statically generated

---

## 📐 UI/UX Design Philosophy

### Design System Foundation
- **Primary Framework**: Material-UI (MUI) v7+ with custom theme
- **CSS Framework**: Tailwind CSS v4 for utility classes
- **Typography**: Roboto font family (Google Fonts)
- **Animation**: Framer Motion for complex animations, MUI transitions for simple ones

### Component Architecture
- **Atomic Design**: Base components in `/ui/`, composed sections in `/components/`
- **Responsive-First**: Mobile-first approach using MUI breakpoint system
- **Accessibility**: WCAG 2.1 AA compliance where applicable
- **Performance**: Tree-shaking optimized, lazy loading for images

### Visual Guidelines
```typescript
// Color Palette (from /src/tokens/colors.ts)
primary: '#0ea5e9'      // Sky blue
secondary: '#64748b'    // Slate gray
accent: '#f59e0b'       // Amber
background: '#ffffff'   // White
text: '#1f2937'        // Dark gray

// Spacing Scale (8px base)
spacing: [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128]

// Typography Scale
display: 3.5rem         // Hero headings
h1: 2.5rem             // Section headings
h2: 2rem               // Subsection headings
h3: 1.5rem             // Component headings
body: 1rem             // Default text
small: 0.875rem        // Secondary text
```

### Layout Patterns
- **Grid Systems**: CSS Grid via MUI Box (avoid MUI Grid component)
- **Flexbox**: MUI Stack for vertical/horizontal layouts
- **Containers**: MUI Container with custom maxWidth variants
- **Spacing**: Consistent spacing using theme values

---

## 📚 Data Handling Practices

### Content Management
- **All dynamic content** lives in `/src/content/data/` as TypeScript objects
- **Schema validation** via Zod schemas in `/src/content/schemas/`
- **Type safety** with auto-generated TypeScript interfaces
- **Naming convention**: kebab-case for keys, camelCase for object properties

### Data Structure Examples
```typescript
// Profile data structure
export const profile = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  location: 'San Francisco, CA',
  bio: 'Passionate about creating amazing web experiences.',
  social: {
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    email: 'john@example.com'
  }
}

// Project data structure  
export const projects = [
  {
    id: 'project-1',
    title: 'Portfolio Website',
    description: 'Modern portfolio built with Next.js and TypeScript',
    technologies: ['Next.js', 'TypeScript', 'MUI'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/user/project'
    },
    featured: true
  }
]
```

### Data Validation
- **Zod schemas** define structure and validation rules
- **Runtime validation** ensures data integrity
- **Type inference** provides compile-time type checking
- **Optional fields** clearly marked in schemas

---

## 🚦 Claude Pipeline Reference

### Command Structure
```bash
/pipeline #argument [user_prompt]
```

### Available Arguments
- **`#feature`** → Add a new feature or module
- **`#ui`** → Improve/refactor UI/UX components  
- **`#data`** → Add/update structured data in `content/data/`
- **`#bugfix`** → Resolve an existing known issue
- **`#infra`** → Apply infrastructure changes (build, deploy, settings)
- **`#doc`** → Maintain/update internal documentation

### Pipeline Execution Flow
1. **🟦 Phase 1: Planning** → Context analysis and scope definition
2. **🟨 Phase 2: Requirement Analysis** → Technical specifications
3. **🟩 Phase 3: Design** → Architecture and component design
4. **🟧 Phase 4: Development** → Code implementation
5. **🟥 Phase 5: Automated Validation Suite** → Quality assurance
6. **🎨 Phase 6: Presentation** → Summary and documentation

### Quality Gate Requirements
Each pipeline execution must pass all validation subphases:
- **5.1**: Lint & Formatting (ESLint + Prettier)
- **5.2**: Type Safety (TypeScript strict mode)
- **5.3**: Logical Consistency & Edge Cases
- **5.4**: Refactoring Opportunities
- **5.5**: Documentation Sync

---

## 🧪 Quality Gate Criteria

### Build Requirements
- **✅ `npm run build`** → Production build must succeed
- **✅ `npm run lint`** → ESLint validation must pass
- **✅ TypeScript compilation** → No type errors in strict mode
- **✅ Component rendering** → All components must render without errors

### Code Quality Standards
- **No `any` types** unless absolutely justified with comment
- **Prefer functional components** with proper TypeScript interfaces
- **Use existing patterns** before creating new abstractions
- **Maintain consistent naming** (camelCase variables, PascalCase components)
- **Include JSDoc comments** for complex functions and components

### Documentation Standards
- **Update `CLAUDE.md`** if project structure changes
- **Update `pipeline.md`** if workflow processes change
- **Include inline comments** for complex logic
- **Maintain schema documentation** for data structures

---

## 📦 Deployment Notes

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Material-UI + Tailwind CSS
- **Build**: Static Site Generation (SSG)
- **Package Manager**: npm

### Build Process
```bash
npm run dev        # Development server with Turbopack
npm run build      # Production build
npm run start      # Production server
npm run lint       # ESLint validation
```

### Environment Requirements
- **Node.js**: 18+ required
- **TypeScript**: 5+ required
- **React**: 19+ required

---

## 🛑 Forbidden Patterns

### Code Anti-Patterns
- **❌ Anonymous default exports** → Use named exports with proper interfaces
- **❌ `any` types** → Use proper TypeScript types or `unknown` with type guards
- **❌ Hardcoded strings in JSX** → Use data files or constants
- **❌ Overly nested component trees** → Keep components flat and composable
- **❌ MUI Grid component** → Use CSS Grid with MUI Box instead
- **❌ Inline styles** → Use MUI sx prop or theme system
- **❌ Direct DOM manipulation** → Use React patterns and refs

### File Organization Anti-Patterns
- **❌ Deeply nested folders** → Keep structure flat and organized
- **❌ Mixed concerns** → Separate UI, data, and logic appropriately
- **❌ Circular dependencies** → Maintain clear import hierarchies
- **❌ Unused imports** → Clean up imports regularly

### Data Management Anti-Patterns
- **❌ Untyped data** → Always use Zod schemas for validation
- **❌ Hardcoded content** → Move content to `/content/data/`
- **❌ Missing validation** → Validate all external data sources
- **❌ Inconsistent naming** → Follow established naming conventions

---

## 📌 Changelog Policy

### Pipeline Execution Tracking
Each pipeline run should generate a summary with:
- **What was changed**: Files modified, features added, bugs fixed
- **Confidence score**: 0-100% assessment of correctness
- **Unresolved issues**: Any remaining tasks or concerns
- **File references**: Links to updated files with line numbers

### Change Documentation Format
```markdown
## 🧾 Pipeline Summary
🔧 Feature Added: `CollapsibleFAQ` component
📂 Files Updated: `components/FAQ.tsx`, `content/data/faq.ts`, `CLAUDE.md`
📊 Confidence: 95%
🚧 Notes: Please manually verify FAQ data structure for edge cases

✅ Ready for commit.
```

---

## 🤖 CLAUDE.md Maintenance

### Auto-Update Triggers
Claude should update this file when:
- **Project structure changes** (new folders, moved files)
- **New patterns emerge** (coding conventions, best practices)
- **Technology updates** (dependency changes, new tools)
- **Workflow improvements** (pipeline enhancements, quality gates)

### Maintenance Guidelines
- **Version increment** on structural changes
- **Update timestamp** on any modification
- **Preserve historical context** in relevant sections
- **Validate accuracy** against current codebase state

### Verification Process
At the start of every major `/pipeline` call:
1. **Read current `CLAUDE.md`** to understand context
2. **Verify project structure** matches documented structure
3. **Check for new patterns** that should be documented
4. **Update if necessary** and note changes in pipeline output

---

## 📊 Project Health Metrics

### Current Status
- **✅ Build Status**: Passing (`npm run build`)
- **✅ Lint Status**: Passing (`npm run lint`)
- **✅ Type Safety**: Strict TypeScript compliance
- **✅ Bundle Size**: Optimized for production
- **✅ Mobile Responsive**: All components tested

### Key Performance Indicators
- **First Load**: ~176KB (reasonable for MUI-based app)
- **Build Time**: <30 seconds for production build
- **Type Check**: <10 seconds for full project scan
- **Component Count**: Manageable complexity

---

**End of CLAUDE.md**

> This document serves as the operational contract between human developers and AI assistants working on this portfolio project. It should be treated as the authoritative source for project standards, practices, and expectations.

> Last verified: 2025-01-09 by Claude (Sonnet 4)