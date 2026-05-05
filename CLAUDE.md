# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Backend
```bash
cd backend && npm install     # install dependencies
npm start                     # production (node src/server.js, port 3000)
npm run dev                   # development with hot reload (nodemon)
```

### Frontend
```bash
cd frontend && npm install    # install dependencies
npm start                     # dev server at localhost:4200 (calls localhost:3000/api)
npm run build                 # production build → dist/frontend/browser
npm test                      # Karma/Jasmine unit tests
```

No linting scripts are configured. TypeScript strict mode is on — `tsc --noEmit` inside `frontend/` will type-check without building.

---

## Architecture

This is a stateless, full-stack AI worksheet generator. The backend never persists data — curriculum data is static in-memory and worksheets are generated on demand via OpenAI.

### Request flow

```
Browser → Angular (Vercel) → Express API (Render) → OpenAI Responses API
```

**Curriculum loading** (form init): Frontend calls `GET /api/curriculum/{boards,grades,subjects,topics}` sequentially as the user steps through the form. All data is served from the static `backend/src/data/curriculum-data.js` map — no DB involved.

**Worksheet generation**: `POST /api/worksheet/generate` takes a `WorksheetConfig`, builds a prompt with curriculum alignment instructions + question type rules, calls OpenAI with `json_object` structured output, validates the response (question types, option counts, match columns), and retries once with a correction prompt if validation fails. `fastMode` skips the retry.

**Answer keys**: `POST /api/worksheet/answers` is called lazily — only when the user clicks "Get Answer Key". Separate OpenAI call using `gpt-4.1`.

**PDF export**: Entirely client-side via `PdfService` (jsPDF). No backend involvement.

### Model selection
| Config flag | Model | Notes |
|-------------|-------|-------|
| default | `gpt-4.1` | With validation retry |
| `fastMode: true` | `gpt-4.1-mini` | No retry on validation failure |
| `premiumMode: true` | `gpt-5.4` | With validation retry |
| answer key | `gpt-4.1` | Always, called lazily |

> Gemini free tier attempted for fastMode but unavailable in India (quota = 0). See README for Groq alternative when implementing free provider.

### Frontend routing
Worksheet data is passed between routes via **Angular router state** (not a store or URL params):
- `/` → `WorksheetConfigComponent` — 8-step reactive form
- `/worksheet` → `WorksheetDisplayComponent` — receives worksheet via `router.getCurrentNavigation().extras.state`

### Question type validation
`backend/src/routes/worksheet.js` defines a `QUESTION_TYPE_RULES` object with per-type validation functions (MCQ needs exactly 4 options, fill_blank needs `_____`, match needs `matchColumns.columnA/B`, etc.). The two-pass generation relies on this — first pass generates, second pass corrects if validation fails.

### Environment / API URLs
Frontend switches API base URL via Angular environment files:
- Dev: `frontend/src/environments/environment.ts` → `http://localhost:3000/api`
- Prod: `frontend/src/environments/environment.prod.ts` → `https://worksheet-generator-z4bj.onrender.com/api`

---

## Next.js migration (`nextjs/`)

A complete scaffold of the React + Next.js version lives in `nextjs/`. Run it with:

```bash
cd nextjs && npm install && cp .env.local.example .env.local && npm run dev
```

Key differences from the Angular+Express version:
- **No separate backend** — API routes live in `nextjs/app/api/` alongside the UI
- **No CORS** — everything is same-origin in one Next.js app
- **React Context** (`context/WorksheetContext.tsx`) replaces Angular router state for passing the worksheet between pages
- **`'use client'`** directive required on any component that uses hooks (`useState`, `useEffect`, router)
- App pages (`app/page.tsx`, `app/worksheet/page.tsx`) are thin Server Components that render Client Components
- Tailwind v4: config is in `globals.css` (`@import "tailwindcss"`), no `tailwind.config.ts` needed

## Key constraints

- **Standalone components only** — this project uses Angular 18 standalone architecture. Never suggest NgModules.
- **No database** — the backend is intentionally stateless. Do not suggest adding persistence.
- **PDF is always client-side** — do not move PDF generation to the backend.
- **Answer keys are lazy** — they are fetched separately from worksheet generation, not bundled into the generate response.
- Backend requires `OPENAI_API_KEY` in `backend/.env`.
