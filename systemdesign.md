# System Design — SheetGenie

This document captures the system design decisions behind SheetGenie, explained using the app itself as the example. Written as a learning reference.

---

## The Core Mental Model

Every system design decision is a trade-off between four things:

```
Performance  ←→  Cost
Simplicity   ←→  Flexibility
```

When someone says "we put PDF generation on the client side" — that's a trade-off: **simplicity + cost savings** (no server needed) over **flexibility** (can't control output centrally). Once you see decisions as trade-offs instead of "right vs wrong", system design clicks.

---

## Decision 1: Why is there no database?

**Question:** Why doesn't the backend save worksheets to a database?

**Answer:** Ask what you would even save. A worksheet is generated for one teacher, used once, printed or downloaded. Nobody needs to retrieve it later — there's no "log in and see your old worksheets" feature.

Adding a database would mean:
- Picking one (Postgres? MongoDB?)
- Writing schema and models
- Hosting it (costs money)
- Handling connections, timeouts, migrations
- Securing it (who can read whose worksheets?)

The payoff: nothing, because no feature needs stored data.

**The principle:** Don't add infrastructure for data you have no reason to store.

This pattern is called a **stateless** backend — each request comes in, gets processed, and goes out. The server has no memory between requests. This is actually a superpower: you can shut it down and restart it anytime, scale it to 10 instances without them stepping on each other, and there's nothing to back up or lose.

---

## Decision 2: Why is curriculum data hardcoded?

**Question:** Why is the CBSE/Cambridge topic data in a TypeScript file instead of a database?

**Answer:** Ask how often it changes. CBSE Grade 8 Science syllabus changes maybe once a year, by a developer, via a code deploy. That's not "runtime" — that's just updating a file.

If it were in a database:
- Every page load hits the database just to get "what subjects exist for Grade 6?"
- You need admin tools to update it
- You need to handle "what if the DB is down when someone loads the form?"

Hardcoded in a file:
- Loads instantly (it's already in memory when the server starts)
- Never fails — no network call
- Version-controlled — you can see exactly what changed and when in git history
- Zero maintenance

**The principle:** Put data in a database only when it changes at runtime (user-generated content, live inventory, etc.). Curriculum data changes at deploy time — a file handles that better.

---

## Decision 3: What happens if OpenAI goes down?

**Question:** If OpenAI's API is unavailable or the API key expires, what breaks?

**The failure map:**

```
User submits form → /api/worksheet/generate → OpenAI ← FAILS HERE
User clicks "Get answer key" → /api/worksheet/answers → OpenAI ← FAILS HERE

PDF download → browser only → still works ✓
Form loading → curriculum data in memory → still works ✓
```

**The system design term:** OpenAI is a **Single Point of Failure (SPOF)** — one component goes down, the core product stops working.

Every system has SPOFs. The question isn't "how do I eliminate them" — it's "do I accept this risk given what the app is?"

For SheetGenie: yes, we accept it. Because:
- Downtime doesn't hurt anyone seriously (it's not a hospital or bank)
- Building redundancy costs real money and engineering time
- OpenAI's uptime is ~99.9%, meaning ~9 hours of downtime per year

**Three strategies real systems use (in order of complexity):**

1. **Graceful degradation** — fail with a helpful message, not a crash. SheetGenie already does this.
2. **Retry with backoff** — if a request fails, wait 2 seconds and try again automatically.
3. **Fallback provider** — if OpenAI fails, try Gemini or Groq. Only worth building if downtime costs more than the engineering time.

**Key/credits expired:** Returns `401 Unauthorized` or `429 Too Many Requests`. Same failure mode — worksheet generation shows an error, user retries when fixed. See README for free provider alternatives (Groq).

---

## Decision 4: What breaks first under heavy load?

**Question:** If 1,000 people use the app at the same time, what happens?

**Tracing one request:**
```
Browser → Next.js server → OpenAI API
```

Multiply by 1,000 simultaneous users:

| What breaks | Why | Breaks at |
|-------------|-----|-----------|
| OpenAI rate limit | Free/low tier: ~500 req/min. 1,000 users = 1,000 simultaneous requests | First |
| Render free tier | Single instance, limited RAM. 1,000 connections pile up, server crashes | Second |
| Your OpenAI bill | 1,000 worksheets × ~2,000 tokens = ~$8-10 in one minute | Doesn't crash, just hurts |

**The system design term:** The slowest component is the **bottleneck**. Real scaling work is just finding and moving bottlenecks.

For SheetGenie the bottleneck chain is:
```
1,000 users → OpenAI rate limit (fix first) → Render capacity (fix second) → bill (accept)
```

**What real apps do:**
- **Rate limiting per user** — only allow 5 worksheets per IP per hour. Protects OpenAI quota from one person hammering the API.
- **Queue** — line up requests instead of sending them all at once. User sees "position 4 in queue."
- **Caching** — return the same result for identical requests. Doesn't apply here because worksheets are intentionally unique.

**Honest answer for SheetGenie:** You will never have 1,000 simultaneous users. But knowing *where* the bottleneck is means if you ever did get real traffic, you'd add per-user rate limiting first — not upgrade the server.

---

## Decision 5: Why is PDF generation in the browser?

**Question:** Why does PDF generation happen on the client side instead of the server?

**What client-side means:** The jsPDF library runs inside the user's browser. No server is involved — the PDF is generated and downloaded entirely on the user's machine.

**The trade-off:**

| | Client-side (current) | Server-side |
|--|--|--|
| Server cost | $0 | CPU + memory per request |
| Works offline | Yes (once page loads) | No |
| Custom fonts/styling | Limited | Full control |
| Large worksheets | Depends on user's device | Consistent |
| Complexity | Low | High (file streaming, cleanup) |

For a free app generating simple A4 worksheets, client-side wins clearly — zero server cost, zero complexity, works on any device.

**The principle:** Push computation to the client when the output is personal (one user needs it, nobody else does) and the data is already there. Pull it to the server when the output needs to be stored, shared, or requires resources the client doesn't have.

---

## Decision 6: Why is the answer key fetched separately (lazily)?

**Question:** Why doesn't the generate endpoint return the answer key along with the worksheet?

**The pattern is called lazy loading** — don't fetch/compute something until the user actually needs it.

Most teachers who generate a worksheet won't click "Get Answer Key" in the same session. They print the worksheet, use it in class, and look up answers later (or already know them). Bundling the answer key into every generate response would:
- Make every request ~2x slower (two AI calls instead of one)
- Cost ~2x more in API tokens
- Send data the user probably won't use

By making it a separate button that calls a separate endpoint, you only pay the cost when someone actually wants it.

**The principle:** Defer expensive operations until they're needed. Measure what users actually do, not what they might do.

---

## Architecture Summary

```
                    ┌─────────────────────────────┐
                    │         Browser              │
                    │                              │
                    │  React UI (Next.js)          │
                    │  WorksheetConfig             │
                    │  WorksheetDisplay            │
                    │  PDF generation (jsPDF) ──── │──→ Downloads to device
                    └──────────┬───────────────────┘
                               │ HTTP (same origin)
                    ┌──────────▼───────────────────┐
                    │      Next.js Server           │
                    │      (Render free tier)       │
                    │                              │
                    │  /api/curriculum/*  ←── static data in memory
                    │  /api/worksheet/generate ────│──→ OpenAI gpt-4.1
                    │  /api/worksheet/answers  ────│──→ OpenAI gpt-4.1
                    └──────────────────────────────┘
```

**What this architecture optimises for:** Simplicity and zero cost. One deployment, no database, no separate backend, no CORS, PDF stays on the client. The trade-off accepted: OpenAI is a SPOF, and heavy load would hit rate limits before anything else.

---

## Key Terms Quick Reference

| Term | What it means | Example in SheetGenie |
|------|--------------|----------------------|
| Stateless | Server has no memory between requests | No database, no sessions |
| SPOF (Single Point of Failure) | One thing goes down, everything stops | OpenAI API |
| Bottleneck | The slowest part of the system | OpenAI rate limit under load |
| Lazy loading | Don't fetch until needed | Answer key on demand |
| Graceful degradation | Fail with a helpful message, not a crash | "Failed to generate worksheet" error |
| Rate limiting | Cap how many requests a user can make | Future: 5 worksheets/hour/IP |
| Fallback provider | Use a backup service if primary fails | Groq if OpenAI is down |
| Client-side rendering | Computation runs in the browser | PDF generation via jsPDF |
