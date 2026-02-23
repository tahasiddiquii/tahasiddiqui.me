# tahasiddiqui.dev

Personal portfolio website — AI Engineer & Product Builder.

## About

A single-page portfolio with case study detail pages, built to showcase projects, writing, and product thinking.

**Live at:** [tahasiddiqui.dev](https://tahasiddiqui.dev) *(deployment pending)*

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (scroll-triggered, respects `prefers-reduced-motion`)
- **Fonts:** Inter + Geist Mono via `next/font`
- **Deployment:** Vercel

## Features

- Dark theme with orange accent system
- Responsive design (mobile-first)
- Smooth scroll navigation with anchor links
- Dynamic case study pages (`/case-studies/[slug]`)
- Custom 404 and error pages
- SEO: sitemap, robots.txt, OpenGraph metadata
- Accessibility: focus styles, semantic HTML, keyboard navigation
- Zero client-side JavaScript except for navigation and animations

## Project Structure

```
app/
  layout.tsx                    # Root layout, fonts, metadata
  page.tsx                      # Home (assembles all sections)
  case-studies/[slug]/page.tsx  # Case study detail pages
  not-found.tsx                 # Custom 404
  error.tsx                     # Error boundary
  robots.ts                     # SEO
  sitemap.ts                    # SEO
components/
  layout/                       # Navbar, Footer
  sections/                     # Hero, About, Projects, Case Studies, Writing, Contact
  ui/                           # Badge, Button, FadeIn, Cards, SectionHeading
  icons/                        # Social SVG icons
lib/
  data.ts                       # All content (projects, case studies, blog posts)
  constants.ts                  # Nav links, social URLs, site config
```

## Running Locally

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## License

MIT
