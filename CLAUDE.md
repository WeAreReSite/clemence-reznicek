# Bien-Être Website Template

## Purpose
This is a **template** for French wellness (bien-être) businesses. It is NOT a specific business - it's a customizable foundation for:
- Spas and massage centers
- Yoga and meditation studios
- Fitness coaches and gyms
- Nutritionists and dietitians
- Wellness coaches
- Naturopaths
- Wellness retreats
- Any other bien-être business

## How It Works
1. **Client provides data** (business name, services, location, etc.)
2. **Template is customized** with client-specific content
3. **Components are data-driven** - they render whatever data is provided
4. **SEO adapts** to client's business type and location

## Stack
- Next.js 15+ (App Router)
- TypeScript (strict mode)
- TailwindCSS 4
- shadcn/ui components
- Zustand for state management
- React Hook Form + Zod for forms
- GSAP for animations

## Directory Structure
- `app/` - App Router pages and layouts
- `components/` - React components
  - `ui/` - shadcn/ui base components
  - `layout/` - Header, Footer (data-driven)
  - `sections/` - Page sections (data-driven)
  - `forms/` - Form components
- `lib/` - Utilities, data, store
  - `lib/data.ts` - **CLIENT DATA GOES HERE**
  - `lib/store.ts` - Zustand store
  - `lib/utils.ts` - Utility functions
- `hooks/` - Custom React hooks
- `public/` - Static assets

## CRITICAL: Template Rules
- **NEVER hardcode business-specific content in components**
- **ALWAYS use data from `lib/data.ts` or props**
- **Components must work for ANY wellness business type**
- **Colors/fonts come from CSS variables (customizable)**
- **SEO must adapt to client's actual business**

## Quality Gates (MANDATORY)
- Run `npm run lint` after every file edit
- Run `npm run build` before commits
- All images MUST use next/image with dimensions
- No `any` types in TypeScript
- No hardcoded business content in components

## SEO Requirements
- Every page has generateMetadata (populated from client data)
- Structured data schema matches client's business type:
  - Spa → DaySpa
  - Yoga → SportsActivityLocation
  - Fitness → ExerciseGym
  - Nutrition → MedicalBusiness
- sitemap.ts generates from client's services
- robots.ts configures AI crawlers
- llms.txt updated with client's business summary

## Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- `npm run start` - Start production server

## Code Style
- Server Components by default
- Mark client components with 'use client'
- Use @/ import alias for all imports
- French for user-facing content
- English for code/comments

## Frontend Tools

### MCP Servers
- `playwright` - Browser automation, screenshots, visual testing
- `lighthouse` - Performance, accessibility, SEO audits
- `context7` - Up-to-date documentation for any library
- `figma` - Design-to-code translation (global)

### Slash Commands (`/frontend/*`)
- `/frontend/design` - Create distinctive UI with frontend-design skill
- `/frontend/from-figma` - Implement designs from Figma URL
- `/frontend/component` - Generate new components
- `/frontend/animate` - Add GSAP animations
- `/frontend/visual-test` - Run visual testing workflow
- `/frontend/screenshot` - Capture screenshots
- `/frontend/docs` - Look up library documentation
- `/frontend/design-system` - Generate design system rules

### Built-in Skills
- `frontend-design` - Create production-grade interfaces
- `figma:implement-design` - Translate Figma to code
- `figma:code-connect-components` - Map Figma to code components

See `.claude/FRONTEND-TOOLS.md` for complete documentation.

## Agent Delegation

### Context & Discovery (Use FIRST)
- `codebase-locator` - Find files by topic, identify customization points
- `codebase-analyzer` - Understand how code works, trace data flow

### Implementation (Read client data first!)
- `seo-specialist` - Adapt SEO to client's business type
- `design-implementer` - Create data-driven, flexible components
- `content-writer` - Generate French content from client data

### Quality Assurance
- `qa-reviewer` - Verify code quality and template compliance

## Customization Workflow
1. Receive client data (business info, services, location)
2. Use `codebase-locator` to find files to customize
3. Update `lib/data.ts` with client's actual data
4. Use `seo-specialist` to adapt SEO to their business
5. Use `content-writer` to generate French content
6. Use `qa-reviewer` to verify no hardcoded content

---

# Client Feedback Autopilot

## Multi-Agent System
This project uses autonomous agents for feedback implementation:
- **feedback-orchestrator**: Parses feedback, manages dependencies
- **visual-engineer**: Tailwind/Shadcn theming only
- **content-strategist**: Copy editing + fact verification (has web search)
- **react-architect**: Component structure only

### Shared State
- `.claude/memory/state/task_ledger.json` - Master task registry
- `.claude/memory/outputs/` - Agent output files

## Validation Workflow
**CRITICAL**: Run validation after EVERY file change:
```bash
npx tsc --noEmit && npm run lint && npm run build
```

## Tech Stack Rules
### React/Next.js
- Use 'use client' directive for client components
- Hooks MUST be at top level (never conditional)
- Use dynamic import with `ssr: false` for browser-only code
- Avoid direct window/document access in component body

### TailwindCSS v4
- Theme variables in globals.css @theme block
- Use CSS variables for all themeable values
- Prefer oklch() color space for better interpolation

### ShadcnUI
- Extend via composition, don't modify /ui/ base files
- Use CVA for custom variants
- CSS variables for theming (--primary, --secondary, etc.)

## Git Workflow
- Create feature branch before changes
- Small, atomic commits with clear messages
- Run validation before every commit
- Never force push to main

## Custom Commands
- `/project:implement-feedback` - Trigger autonomous feedback implementation workflow
