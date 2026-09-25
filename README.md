# Personal Portfolio — Data Analyst & Web

A one-page personal portfolio built with Next.js, TypeScript, Tailwind CSS and shadcn-style UI primitives. Editorial, minimal design with light/dark themes.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/            # layout, page, SEO metadata, generated favicon & OG image
components/     # page sections (hero, about, projects, ...)
components/ui/  # reusable primitives (button, badge, input, dialog, ...)
data/           # ALL editable content: profile, projects, skills, experience, site
lib/            # utils and contact form stub
```

## Replace your data

All content lives in `data/` — no need to touch components.

**Already filled in:** name, email, GitHub, LinkedIn, Telegram and six real projects (`data/site.ts`, `data/projects.ts`).

**Still placeholder:**

| Placeholder | Where | Meaning |
| --- | --- | --- |
| `[YOUR_CV_LINK]` | `data/site.ts` | Link to your CV (PDF) |
| `site.url` | `data/site.ts` | Production URL for SEO/Open Graph |
| `[PERIOD]`, `[COMPANY / DEPARTMENT]` | `data/experience.ts` | Timeline placeholders |

Also update the hero/about copy in `data/profile.ts` if needed.

## Contact form

The form is currently a frontend-only stub (`lib/contact.ts`). To connect a real backend, replace `submitContactForm` with a call to Formspree, Resend, Supabase or your own API route — the function signature stays the same.

## Deploy to Vercel

1. Push the repository to GitHub.
2. In [Vercel](https://vercel.com), click **Add New → Project** and import the repo.
3. Vercel auto-detects Next.js — no settings changes needed. Click **Deploy**.
4. After deploying, set `site.url` in `data/site.ts` to your final domain and redeploy so SEO/Open Graph metadata points to the right address.
