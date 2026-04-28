# Portfolio Review — Mid/Senior React + Node Positioning

Mark `[x]` on ones you like. Grouped by priority.

---

## 🔴 Critical (hurts credibility for mid-senior pitch)

- [ ] **Remove skill-level % bars** (`Curriculum/index.tsx` L14-31). Self-rated "React 95% / Node 75%" reads junior, unverifiable, and *undermines* your React+Node pitch (why is Node only 75%?). Replace with grouped tag chips (no levels). Seniors list tools they ship with, not scores.
- [ ] **Projects fetches *starred* repos, not yours** (`Projects/index.tsx` L36: `/users/.../starred`). Starred = repos you liked. Change to `/users/MatheusFinatto/repos?sort=updated` OR curate 3-6 featured projects in a typed array (recommended — control narrative).
- [ ] **`NEXT_PUBLIC_GITHUB_TOKEN` leaks PAT to browser**. Any `NEXT_PUBLIC_*` ships to client bundle. Move fetch to a server component / Route Handler (`app/api/repos/route.ts`) and use `GITHUB_TOKEN` (no prefix). Or drop token entirely — public repo list works unauth'd at 60 req/hr/IP.
- [ ] **Rewrite About copy** (`About/index.tsx` L16-23). Current: "I enjoy bringing creative ideas to life … passionate about React … excited to learn new technologies" = junior trope. Mid-senior version should lead with outcome + scale:
  > "Full-stack developer (React + Node, 4 yrs) building internal tooling on a production ERP used by [N] businesses. I focus on developer ergonomics, GraphQL schema design, and shipping features that survive real users."
- [ ] **Curate featured projects with case-study cards** instead of raw GitHub dump. Each card: name, one-line problem solved, stack chips, metric if any ("cut query time 40%", "used by X team"), code + demo links. 3-4 deep > 20 shallow.
- [ ] **Footer © 2023** (`Footer/index.tsx` L31). Use `new Date().getFullYear()`.

## 🟡 High-impact (positioning + UX)

- [ ] **Add impact metrics to Wonder Sistemas role** (`Curriculum/index.tsx` L81-100). Current description = tech list. Recruiters scan for verbs + numbers. Example:
  > "Led migration of [module] from X to Apollo GraphQL, reducing N+1 queries by Y%. Built shared component library used across N internal tools. Mentored 2 junior devs."
- [ ] **Drop Instagram from Contact** (`Contact/index.tsx` L38). Noise for hiring context. Keep GitHub, LinkedIn, email, optionally WhatsApp.
- [ ] **Make email visible, not just icon**. Hiring managers copy-paste; icon + `alert()` popup is friction. Render `matheusfinatto2@gmail.com` as text link with `mailto:` alongside copy button.
- [ ] **Replace `alert()` calls** (Contact email, Projects "already on portfolio"). Use toast or inline feedback. `alert` blocks thread + looks amateur.
- [ ] **Add hero CTA buttons** next to/under typewriter: `[Download CV]` `[Contact me]` `[View projects]`. Current header is pure info, no action.
- [ ] **Add "Open to work" / availability badge** in header if true. Signals intent to recruiters.
- [ ] **Replace typewriter CV facts** (`TypeWritter/index.tsx` L7-14). "I hold a Bachelor's in..." belongs on CV, not above-fold. Try positioning statements:
  > "React + Node developer" / "Building internal tools at scale" / "Open to remote roles (Europe / NA)"
- [ ] **Add project tech tags per card** (languages from GitHub API or hardcoded per featured project).
- [ ] **Screenshot fallback** (`Projects/index.tsx` L124). `raw.githubusercontent.com/.../Screenshot.png` 404s for many repos → broken image. Add `onError` fallback or curated `featuredProjects[]` with local `/public/projects/*.png`.

## 🟢 Polish + SEO + Stack

- [ ] **Upgrade stack**: Next 13.4 → 16, React 18 → 19, ESLint 8 → 9. Next 13→15/16 codemod is fast. Mid-senior portfolio on Next 13 = signals stale.
- [ ] **Add OG + Twitter meta** (`layout.tsx` L9-12). Currently only title/desc. Add `openGraph`, `twitter`, canonical, `metadataBase`. LinkedIn/Twitter preview cards matter for sharing.
- [ ] **SEO title**: `"Matheus' Portfolio"` → `"Matheus Finatto — React + Node Developer"`. Include keywords.
- [ ] **Add `robots.txt` + `sitemap.ts`** (Next metadata API).
- [ ] **Add Vercel Analytics** (`@vercel/analytics`) — free, 2 lines, shows you care about data.
- [ ] **Favicon + apple-touch-icon**: currently only default Next favicon.
- [ ] **Replace `any` in Nav** (`Nav/index.tsx` L7): `(event: React.MouseEvent<HTMLAnchorElement>, sectionId: string)`.
- [ ] **Simplify scroll nav**: `globals.scss` already has `scroll-behavior: smooth` — drop `scrollToSection`, use plain `href="#id"`. Less code.
- [ ] **Fragile ref index** (`Curriculum/index.tsx` L164: `categoryIndex * 10 + skillIndex`). Breaks if category has ≥10 skills. If keeping bars (don't), use `useRef<Map>` or flatten skills.
- [ ] **Loading state = skeleton**, not `<p>Loading projects...</p>`. Use shimmer cards matching final layout.
- [ ] **README is default Next boilerplate**. Rewrite: what the project is, stack, how to run, deploy URL. Recruiters read GitHub READMEs.
- [ ] **`"use client"` audit**: `Projects` fetches data client-side + exposes token → should be RSC + Route Handler. `Curriculum` uses IntersectionObserver for skill bars — if bars removed, drop `"use client"` + `useEffect`.
- [ ] **Accessibility**: `<a onClick>` with no `href` in Contact email (L52) isn't keyboard-focusable. Use `<button>`. Also `<a>` wrapping `<button>` (Projects L73, 80, 148) is invalid HTML — use `<a className="button">` styled as button.
- [ ] **Viewport meta `maximum-scale=1.0`** (`layout.tsx` L24) blocks zoom → a11y issue. Remove.
- [ ] **Date locale hardcoded `pt-BR`** (`Projects/index.tsx` L144). Use user locale or ISO.

## 💡 Nice-to-have (differentiation)

- [ ] **Add a blog / writing section** (even 2-3 MDX posts on technical decisions at Wonder). Writing = seniority signal.
- [ ] **Add testimonials** — 2-3 quotes from LinkedIn recommendations with attribution.
- [ ] **Add "Uses" page** — editor, setup, tools. Small but developer-audience loves them.
- [ ] **Light/dark toggle** — current dark is fine, but toggle shows polish.
- [ ] **Smooth entrance animations** (Framer Motion or `@react-spring/web`) on section scroll-in.
- [ ] **Consider a landing metric strip**: "4 yrs shipping", "N repos", "N commits last year" — auto-pulled from GitHub.
- [ ] **Custom domain** if not already (`matheusfinatto.dev` / `.com`). `.vercel.app` reads student-project.

---

## File-by-file quick hits

| File | Issue | Line |
|---|---|---|
| `Projects/index.tsx` | `/starred` endpoint wrong | 36 |
| `Projects/index.tsx` | Token exposed client-side | 9, 31 |
| `Projects/index.tsx` | Broken `<a><button>` nesting | 73, 80, 148 |
| `Curriculum/index.tsx` | Skill % anti-pattern | 14-31 |
| `About/index.tsx` | Junior-tone copy | 16-23 |
| `Footer/index.tsx` | Hardcoded `© 2023` | 31 |
| `Contact/index.tsx` | `alert()` + non-focusable email | 18, 52 |
| `Nav/index.tsx` | `any, any` types | 7 |
| `layout.tsx` | Missing OG/Twitter, weak title | 9-12 |
| `layout.tsx` | `maximum-scale=1.0` blocks zoom | 24 |
| `package.json` | Stack 2+ yrs outdated | all deps |

---

Mark picks, then say go — I'll implement in order.
