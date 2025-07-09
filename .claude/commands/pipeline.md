# AI Automated Development Workflow - Pipeline Orchestration Framework

## Overview
This document defines the structured SDLC pipeline framework for AI-automated development workflows in the portfolio project.

## Pipeline Command Structure

### Command Format
```bash
/pipeline #argument [user_prompt]
```

### Arguments
- `feature` — Add a new feature or module
- `ui` — Improve/refactor UI/UX components  
- `data` — Add/update structured data inside the frontend `content/data` directory
- `bugfix` — Resolve an existing known issue
- `infra` — Apply infrastructure changes (build, deploy, settings)
- `doc` — Maintain/update internal documentation (`ui.md`, etc.)

---

## 🎯 SDLC Pipeline Phases

### 🟦 Phase 1: Planning
**Objective**: Establish context and scope
- Read and interpret all related files in context (`ui.md`, `*.tsx`, `data/`, etc.)
- Summarize the high-level objective of the pipeline command
- Identify the scope, impacted modules, and constraints
- Outline goals and success criteria

### 🟨 Phase 2: Requirement Analysis
**Objective**: Define clear specifications
- Break down the user prompt into clear, verifiable functional and technical requirements
- If edge cases or ambiguities exist, raise and address them
- Define the expected input/output, affected types, or component behaviors

### 🟩 Phase 3: Design
**Objective**: Architect the solution
- Propose or adjust component architecture, props/state, or data structures
- Provide visual hierarchy or tree (markdown if possible)
- Show types/interfaces (for TypeScript)
- Add documentation blocks or schema if new data is introduced

### 🟧 Phase 4: Development
**Objective**: Implement the solution
- Generate or modify code as needed to fulfill the above plan
- Maintain consistency with existing patterns
- Keep code clean, idiomatic, and readable
- Output only relevant diff blocks or files as markdown if long

### 🟥 Phase 5: Automated Validation Suite
**Objective**: Ensure quality and reliability

#### 5.1: Lint & Formatting
- Check or simulate ESLint + Prettier compliance
- Flag and suggest corrections if not

#### 5.2: Type Safety
- Ensure strict TypeScript typing
- Identify any type mismatches or any vs unknown issues

#### 5.3: Logical Consistency & Edge Case Coverage
- Analyze function/component logic
- Identify possible runtime bugs, edge case failures, or misuse of props/state
- Simulate interaction between components if applicable

#### 5.4: Refactoring Opportunity
- Identify areas for code simplification or reusability
- Recommend better naming, folder structure, or shared hook/utils

#### 5.5: Documentation Sync
- Automatically update `pipeline.md`, `CLAUDE.md` or code comments if the structure/design changed
- Maintain clarity and format in markdown

**Validation Report Format**:
```md
## ✅ Validation Report
- [x] ESLint: Passed
- [x] TypeScript: No errors
- [x] Logical consistency: Verified
- [ ] Edge case: Missing validation for empty array ❗
- [x] Code refactoring: Applied
- [x] `ui.md`: Updated
```

### 🎨 Phase 6: Presentation
**Objective**: Summarize and document results
- Output a high-level summary of what was done, like a changelog
- Include a confidence score (0–100%) of correctness and coverage
- Use clean CLI-style formatting in markdown (e.g., boxes, bullets, emojis)
- Highlight next steps if any manual intervention is required

**Summary Format**:
```md
## 🧾 Pipeline Summary
🔧 Feature Added: `CollapsibleFAQ` component
📂 Files Updated: `components/FAQ.tsx`, `content/faq.json`, `ui.md`
📊 Confidence: 95%
🚧 Notes: Please manually verify FAQ JSON structure in multilingual use case

✅ Ready for commit.
```

---

## Pipeline Execution Guidelines

### Phase Separation
- Each SDLC phase must be shown and separated clearly
- Use consistent emoji headers for visual organization
- Maintain professional formatting throughout

### Code Output Standards
- All code or markdown outputs must be properly fenced
- Be concise but rigorous in analysis
- Output only relevant diff blocks or files as markdown if long

### Quality Assurance
- Simulate rigorous quality assurance in Phase 5
- Address all subphases systematically
- Provide actionable feedback and recommendations

### Documentation Standards
- Automatically update relevant documentation
- Maintain consistency with existing patterns
- Keep documentation current with implementation changes

---

## Project Context Integration

### Current Tech Stack
- **Frontend**: Next.js 15 + TypeScript + Material-UI (MUI)
- **Architecture**: Frontend-only, data-driven
- **Styling**: MUI theme system with custom tokens
- **Validation**: Zod schemas for content data

### Key File Locations
- **Components**: `/src/components/` and `/src/components/ui/`
- **Data**: `/src/content/data/`
- **Theme**: `/src/theme/`
- **Documentation**: `.claude/commands/`

### Build & Quality Commands
- `npm run build` - Production build
- `npm run lint` - ESLint validation
- `npm run dev` - Development server

---

## AI Agent Instructions

As an AI agent in this automated development workflow:

1. **Always follow the structured SDLC lifecycle**
2. **Show each phase clearly with proper formatting**
3. **Provide thorough validation in Phase 5**
4. **Maintain professional, consistent documentation**
5. **Output actionable summaries in Phase 6**

The goal is to create a reliable, repeatable development process that ensures high code quality while maintaining clear documentation and traceability.