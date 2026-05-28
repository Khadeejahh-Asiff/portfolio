// Portfolio Constants — Khadeeja Asif

import {
  Code,
  Database,
  Mail,
  Linkedin,
  Github,
  Zap,
  Layers,
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: 'Khadeeja Asif',
  title: 'Software Engineer',
  subtitle: 'MERN Stack Developer',
  tagline:
    'Building fast, scalable web apps with React, Next.js, Node.js, NestJS, and MongoDB.',
} as const;

export const HERO_TECH = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'NestJS',
  'MongoDB',
] as const;

export const HERO_CARD = {
  initials: 'KA',
  role: 'Full Stack Developer',
  stack: 'React · Next · Node · Nest',
} as const;

export const ABOUT = {
  paragraphs: [
    'I build fast, scalable web apps using React, Next.js, Node.js, NestJS, and MongoDB. From job portals to internal workflow tools used by real teams.',
    "I've shipped production features across startup, agency, and freelance environments, working directly with clients to turn requirements into working products. I care about clean architecture, responsive UI, and code that's easy to maintain.",
    'Open to remote roles and freelance projects feel free to connect :)',
  ],
} as const;

export const NAV_ITEMS = [
  { name: 'home', href: '#home' },
  { name: 'expertise', href: '#expertise' },
  { name: 'work', href: '#showcase' },
  { name: 'contact', href: '#contact' },
] as const;

export const EXPERTISE_DATA = [
  {
    title: 'Frontend',
    highlight: 'React · Next.js · TypeScript',
    description:
      'Component-driven UIs with responsive layouts, SSR, and polished interactions.',
    icon: Code,
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'ShadCN UI',
    ],
  },
  {
    title: 'Backend & APIs',
    highlight: 'Node.js · NestJS · Express',
    description:
      'RESTful services, auth flows, and clean API integration from end to end.',
    icon: Database,
    technologies: [
      'Node.js',
      'NestJS',
      'Express',
      'REST APIs',
      'Socket.io',
      'Swagger',
    ],
  },
  {
    title: 'Data & State',
    highlight: 'MongoDB · PostgreSQL · Redux',
    description:
      'Relational and document databases with predictable state and data-fetching.',
    icon: Layers,
    technologies: [
      'MongoDB',
      'PostgreSQL',
      'Prisma',
      'Redux Toolkit',
      'TanStack Query',
      'SWR',
    ],
  },
  {
    title: 'Delivery & Tools',
    highlight: 'Git · Docker · Vercel',
    description:
      'Performance-focused builds, CI-friendly workflows, and production deployments.',
    icon: Zap,
    technologies: [
      'Git & GitHub',
      'Docker',
      'Vercel',
      'Core Web Vitals',
      'Figma',
    ],
  },
] as const;

/** Projects — unchanged */
export const PROJECTS_DATA = [
  {
    id: 'heartland',
    name: 'Heartland Rehab',
    category: 'Healthcare · Physical Therapy',
    description:
      'A rehabilitation platform offering personalized physical therapy and recovery programs, providing holistic care through a user-friendly interface and streamlined patient experience.',
    image: '/p1.png',
    tech: ['React', 'Next.js', 'TypeScript', 'REST APIs'],
    featured: true,
  },
  {
    id: 'scrumdroid',
    featured: false,
    name: 'ScrumDroid',
    category: 'Management Platform',
    description:
      'Web-based platform streamlining internal workflows, providing a centralized interface for tasks, activity monitoring, and data across modules.',
    image: '/p2.png',
    tech: ['React.js', 'SWR', 'Performance', 'Caching'],
  },
  {
    id: 'hiredroid',
    featured: false,
    name: 'HireDroid',
    category: 'Job Portal · HR',
    description:
      'Skill-focused job portal connecting employers with candidates, exploring opportunities, build profiles, and manage hiring workflows efficiently.',
    image: '/p3.png',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'SWR'],
  },
  {
    id: 'akredcenter',
    featured: false,
    name: 'AkredCenter',
    category: 'Accreditation Management',
    description:
      'Secure dashboard to track, manage, and organize accreditation data, simplifying submission, approval, and status tracking workflows.',
    image: '/p4.png',
    tech: ['Nest.js', 'Next.js', 'TypeScript', 'REST APIs'],
  },
  {
    id: 'dmg',
    featured: false,
    name: 'DMG',
    category: 'AI · Email Automation',
    description:
      'Intelligent system using a Vision-Language Model to categorize emails and extract structured JSON for workflow automation.',
    image: '/p5.png',
    tech: ['VLM', 'AI', 'JSON Extraction', 'Automation'],
  },
  {
    id: 'vorpix',
    featured: false,
    name: 'Vorpix',
    category: 'AI · Image, Video, Audio & Text Generation',
    description:
      'A platform for generating images, videos, audio, and text using AI, providing a comprehensive set of problems and solutions.',
    image: '/p6.png',
    tech: ['AI', 'LLM', 'FAST API', 'Voice Cloning', 'OpenAI'],
  },
  {
    id: 'tickato',
    featured: false,
    name: 'Tickato',
    category: 'Event Ticketing',
    description:
      'Ticket management platform for event ticketing and user interactions, providing intuitive browsing and scalable ticket workflows.',
    image: '/p7.png',
    tech: ['Node.js', 'Next.js', 'TypeScript', 'Scalable UI'],
  },
] as const;

export const CONTACT_INFO = {
  email: 'khadeejaasif323@gmail.com',
  location: 'Lahore, Pakistan',
  linkedin: 'https://linkedin.com/in/khadeejah-asif',
  github: 'https://github.com/Khadeejahh-Asiff',
} as const;

export const CONTACT_CHANNELS = [
  {
    id: 'email',
    icon: Mail,
    title: 'Email',
    subtitle: 'Project inquiries',
    description:
      'Reach out for collaborations, freelance work, or just to say hello.',
    href: `mailto:${CONTACT_INFO.email}?subject=Hello%20Khadeeja`,
    cta: CONTACT_INFO.email,
    external: false,
  },
  {
    id: 'github',
    icon: Github,
    title: 'GitHub',
    subtitle: 'Code & projects',
    description: 'Browse repositories, contributions, and open-source work.',
    href: CONTACT_INFO.github,
    cta: 'View profile',
    external: true,
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    title: 'LinkedIn',
    subtitle: 'Professional network',
    description:
      'Connect for opportunities, networking, and career conversations.',
    href: CONTACT_INFO.linkedin,
    cta: 'Connect on LinkedIn',
    external: true,
  },
] as const;

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: CONTACT_INFO.github,
    color: 'hsl(var(--accent))',
  },
  {
    icon: Linkedin,
    href: CONTACT_INFO.linkedin,
    color: 'hsl(var(--accent))',
  },
  {
    icon: Mail,
    href: `mailto:${CONTACT_INFO.email}`,
    color: 'hsl(var(--accent))',
  },
] as const;

