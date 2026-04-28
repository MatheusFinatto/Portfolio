# Matheus Finatto — Developer Portfolio

Personal portfolio site showcasing 5+ years of production experience in React, TypeScript, Node.js, NestJS, and GraphQL.

**Live:** https://matheusfinatto.vercel.app

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** SCSS Modules
- **Animation:** react-type-animation
- **Icons:** react-icons
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

```
src/app/
├── components/
│   ├── page-components/   # Header, Footer, Nav, Homepage shell
│   └── page-sections/     # About, Curriculum, Projects
├── data/
│   └── projects.ts        # Curated featured projects — edit this
└── styles/                # Global SCSS variables and utilities
```

## Adding projects

Edit `src/app/data/projects.ts`. Add screenshots to `public/projects/<name>.png`.
