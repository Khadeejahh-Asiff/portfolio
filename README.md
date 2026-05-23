# Khadeeja Asif — Portfolio

Personal portfolio website for **Khadeeja Asif**, a Software Engineer and MERN Stack Developer based in Lahore, Pakistan.

**Live site:** [khadeeja-portfolio.vercel.app](https://khadeeja-portfolio.vercel.app)

## Overview

A single-page portfolio built with Next.js and TypeScript. It showcases technical expertise, production projects, and contact links — with light/dark themes, smooth animations, and a wave-pattern background.

## Features

- **Hero** — intro, tech stack pills, contact links, and profile photo
- **Expertise** — four skill pillars (Frontend, Backend & APIs, Data & State, Delivery & Tools)
- **Project showcase** — auto-scrolling carousel with full descriptions and tech stacks
- **Contact** — email, GitHub, and LinkedIn cards
- **Themes** — light (wheaty white + nude brown surfaces) and dark (grey-black)
- **Wave background** — fixed animated wallpaper behind all sections
- **Custom cursor** — desktop-only pointer with smooth follow animation
- **Responsive layout** — mobile navigation, scroll progress bar, and section-aware nav

## Tech Stack

| Category  | Tools                                                                      |
| --------- | ---------------------------------------------------------------------------| 
| Framework | [Next.js 15](https://nextjs.org/) (App Router)                             |
| Language  | [TypeScript](https://www.typescriptlang.org/)                              |
| UI        | [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/)                            |
| Icons     | [Lucide React](https://lucide.dev/)                                        |
| Theming   | [next-themes](https://github.com/pacocoursey/next-themes)                  |

## Featured Projects

- **Heartland Rehab** — Healthcare · Physical Therapy
- **ScrumDroid** — Internal workflow management platform
- **HireDroid** — Skill-focused job portal
- **AkredCenter** — Accreditation management dashboard
- **DMG** — AI email automation with VLM
- **Vorpix** — AI image, video, audio & text generation
- **Tickato** — Event ticketing platform

Project content lives in `src/constants/index.ts` (`PROJECTS_DATA`).

## Project Structure

```
src/
├── app/                  # Layout, globals, page
├── components/           # Section components + UI primitives
├── constants/            # Portfolio content (projects, expertise, contact)
├── hooks/                # Scroll progress, active section
├── types/                # Shared TypeScript interfaces
└── utils/                # Scroll helpers, accessibility utilities
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

## Customization

Most site content is centralized in `src/constants/index.ts`:

| Constant        | Purpose                           |
| --------------- | ----------------------------------|
| `PERSONAL_INFO` | Name, title, tagline              |
| `ABOUT`         | Hero bio paragraphs               |
| `EXPERTISE_DATA`| Expertise section cards           |
| `PROJECTS_DATA` | Showcase carousel projects        |
| `CONTACT_INFO`  | Email, GitHub, LinkedIn, location |

Replace `public/me.jpeg` for the profile photo. Project screenshots go in `public/`.

## Contact

- **Email:** [khadeejaasif323@gmail.com](mailto:khadeejaasif323@gmail.com)
- **GitHub:** [github.com/Khadeejahh-Asiff](https://github.com/Khadeejahh-Asiff)
- **LinkedIn:** [linkedin.com/in/khadeejah-asif](https://linkedin.com/in/khadeejah-asif)
- **Location:** Lahore, Pakistan

## Deployment

Deploy on [Vercel](https://vercel.com) or any platform that supports Next.js:

```bash
npm run build
```

---

Built by **Khadeeja Asif**
