# Worksheet Generator — SheetGenie

An AI-powered worksheet generation tool for K-12 students. Teachers configure parameters (board, grade, subject, topics, difficulty, question type), and the app generates curriculum-aligned worksheets using OpenAI. Worksheets can be previewed, answered, and downloaded as PDFs.

---

## OLD Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser (User)                       │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │            Angular 18 Frontend (Vercel)             │   │
│   │                                                     │   │
│   │  WorksheetConfigComponent  WorksheetDisplayComponent │   │
│   │       (8-step form)          (preview + PDF)        │   │
│   │                                                     │   │
│   │  CurriculumService  WorksheetService  PdfService    │   │
│   │  (HTTP calls)       (HTTP calls)      (jsPDF, local)│   │
│   └─────────────────────────────────────────────────────┘   │
│                           │  HTTP/JSON                       │
└───────────────────────────┼─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              Node.js + Express Backend (Render)             │
│                                                             │
│   /api/curriculum/*         /api/worksheet/*                │
│   (static data lookup)      (AI generation + validation)    │
│                                                             │
│   curriculum-data.js        OpenAI Responses API            │
│   (in-memory, hierarchical) (gpt-4.1 / gpt-4.1-mini)       │
└─────────────────────────────────────────────────────────────┘
```

**Key design decisions:**
- Stateless backend — no database; curriculum data is static in-memory, worksheets are generated on demand.
- PDF generation happens entirely client-side (jsPDF) to avoid server load.
- Answer keys are fetched lazily (only when the user requests them).
- Two-pass AI generation: if the first OpenAI response fails type validation, the backend sends a correction prompt and retries once before returning an error.

---

## OLD Project Structure

```
Worksheet-generator/
├── backend/
│   ├── src/
│   │   ├── server.js               # Express entry point, middleware, global error handler
│   │   ├── routes/
│   │   │   ├── curriculum.js       # GET /boards, /grades, /subjects, /topics
│   │   │   └── worksheet.js        # POST /generate, POST /answers
│   │   └── data/
│   │       └── curriculum-data.js  # Hierarchical board → grade → subject → topics map
│   ├── .env                        # PORT, OPENAI_API_KEY
│   └── package.json
│
└── frontend/
    ├── src/app/
    │   ├── components/
    │   │   ├── worksheet-config/   # Multi-step configuration form
    │   │   └── worksheet-display/  # Preview, answer key, PDF download
    │   ├── services/
    │   │   ├── curriculum.service.ts
    │   │   ├── worksheet.service.ts
    │   │   └── pdf.service.ts
    │   ├── models/
    │   │   └── worksheet.model.ts  # TypeScript interfaces
    │   └── environments/           # API URL per environment
    ├── vercel.json                 # SPA rewrite: all routes → index.html
    └── angular.json
```

## Key Data Models

## AI Integration

The backend uses the **OpenAI Responses API** with `json_object` structured output:

```javascript
const response = await openai.responses.create({
  model: 'gpt-4.1',           // or gpt-4.1-mini / gpt-5.4
  input: [{ role: 'user', content: prompt }],
  max_output_tokens: 4000,
  text: { format: { type: 'json_object' } }
});
const result = JSON.parse(response.output_text);
```

**Model selection:**

| Mode | Provider | Model | Notes |
|------|----------|-------|-------|
| Standard | OpenAI | `gpt-4.1` | Default quality, includes retry on validation failure |
| Fast | Google Gemini | `gemini-2.0-flash` | Free tier (1,500 req/day); falls back needed if quota 0 |
| Premium | OpenAI | `gpt-5.4` | Highest quality |
| Answer key | OpenAI | `gpt-4.1` | Always OpenAI, called lazily |

**Prompt engineering:** Each request includes board/grade/subject context, difficulty and purpose constraints, question type rules (option counts, placeholder formats, match column structure), and explicit JSON schema expectations. The backend validates the response against the requested question type before returning it to the client.

### Future: Free provider alternatives

Gemini's free tier (`gemini-2.0-flash`, 1,500 req/day) is **not available in India** — Google sets the free tier quota to 0 for that region. If Gemini free tier doesn't work, these are the alternatives:

**Groq (recommended — truly free, globally available)**
- Free tier: ~6,000 tokens/min, Llama 3 models
- API is OpenAI-compatible — swap base URL + model name in `lib/gemini.ts`
- Sign up at [console.groq.com](https://console.groq.com), get `GROQ_API_KEY`

```ts
// lib/groq.ts — drop-in replacement for callGemini
import OpenAI from 'openai';
const groq = new OpenAI({ apiKey: process.env.GROQ_API_KEY, baseURL: 'https://api.groq.com/openai/v1' });
export async function callGroq(prompt: string, maxTokens: number) {
  const res = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: maxTokens,
    response_format: { type: 'json_object' },
  });
  return JSON.parse(res.choices[0].message.content ?? '{}');
}
```

Then in `app/api/worksheet/generate/route.ts`, replace `callGemini` import with `callGroq` — no other changes needed.

**Gemini with billing**
Enable billing on the Google Cloud project. Cost is ~$0.075/M tokens (~$0.00015 per worksheet). Still far cheaper than OpenAI.

---

## Frontend

- **Framework**: Angular 18 standalone components (no NgModules)
- **UI**: Angular Material 18 (expansion panels, chips, form fields, dialogs)
- **State**: Reactive Forms (`FormGroup` / `FormBuilder`) + RxJS
- **Routing**: Lazy-loaded routes; worksheet data passed via router state
  - `/` → `WorksheetConfigComponent`
  - `/worksheet` → `WorksheetDisplayComponent`
- **PDF**: jsPDF (client-side, no server involvement)
- **API URL**: Switched via Angular environment files (`environment.ts` / `environment.prod.ts`)

---

## Deployment

| Layer | Platform | Notes |
|-------|----------|-------|
| Frontend | Vercel | `ng build` → `dist/frontend/browser`; SPA rewrites via `vercel.json` |
| Backend | Render | `node src/server.js`; `OPENAI_API_KEY` set as env var |

**Local development:**

```bash
# Backend (port 3000)
cd backend && npm install && npm start

# Frontend (port 4200)
cd frontend && npm install && npm start
```

The frontend dev server calls `http://localhost:3000/api` automatically.

---

## Current Next.js Migration (React + Next.js)

A complete migration scaffold lives in [`nextjs/`](nextjs/). It replaces the separate Angular frontend and Express backend with a single Next.js 15 app.

### What changed

| | Angular + Express (current) | Next.js (migration) |
|---|---|---|
| Frontend | Angular 18, Angular Material, RxJS | React 19, Tailwind CSS |
| Backend | Express on Render (separate deploy) | Next.js API routes (same app) |
| Routing | Angular Router + router state | Next.js App Router + React Context |
| Forms | Angular Reactive Forms | Controlled components + useState |
| HTTP client | Angular HttpClient + RxJS | fetch + useEffect |
| Deployment | Vercel (FE) + Render (BE) | Vercel only |

### Scaffold structure

```
nextjs/
├── app/
│   ├── layout.tsx                  # Root shell: header, footer, WorksheetProvider
│   ├── page.tsx                    # → WorksheetConfig component
│   ├── worksheet/page.tsx          # → WorksheetDisplay component
│   └── api/
│       ├── health/route.ts
│       ├── curriculum/{boards,grades,subjects,topics}/route.ts
│       └── worksheet/{generate,answers}/route.ts
├── components/
│   ├── WorksheetConfig.tsx         # 8-step form (replaces Angular config component)
│   └── WorksheetDisplay.tsx        # Preview + PDF + answer key
├── context/
│   └── WorksheetContext.tsx        # Replaces Angular router state
├── lib/
│   ├── curriculum-data.ts          # Full TypeScript port of backend data file
│   ├── openai.ts                   # Shared OpenAI client
│   ├── question-rules.ts           # TypeScript port of validation logic
│   └── pdf.ts                      # jsPDF generation (same as Angular PdfService)
├── types/worksheet.ts              # TypeScript interfaces (same models)
├── package.json
└── .env.local.example              # Only OPENAI_API_KEY needed
```

### Run locally

```bash
cd nextjs
npm install
cp .env.local.example .env.local    # add your OPENAI_API_KEY
npm run dev                          # http://localhost:3000
```

No separate backend process — API routes are part of the same Next.js dev server.

---

## Curriculum Data

Boards and topics are defined statically in [`backend/src/data/curriculum-data.js`](backend/src/data/curriculum-data.js):

- **CBSE**: Grades 1–12, ~5–6 subjects per grade, topics grouped by publisher
- **Cambridge**: Grades 1–12 (IGCSE / A-Level labels), similar structure

No database is required — the full curriculum tree is loaded into memory when the server starts.
