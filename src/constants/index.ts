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

export const PROFILE_IMAGE = '/me.jpeg' as const;

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

export const ABOUT = {
  paragraphs: [
    'I build fast, scalable web apps using React, Next.js, Node.js, NestJS, and MongoDB. From job portals to internal workflow tools used by real teams.',
    "I've shipped production features across startup, agency, and freelance environments, working directly with clients to turn requirements into working products. I care about clean architecture, responsive UI, and code that's easy to maintain.",
    'Currently building at Techverx. Open to remote roles and freelance projects feel free to connect :)',
  ],
} as const;

export const EDUCATION = {
  degree: 'Bachelor of Science in Software Engineering',
  school: 'University of Central Punjab',
  location: 'Lahore, Pakistan',
  period: '07/2020 – 07/2024',
  gpa: '3.61 / 4.00',
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

export const CONTACT_METHODS = [
  {
    icon: Mail,
    href: `mailto:${CONTACT_INFO.email}`,
    color: 'hsl(var(--accent))',
  },
  {
    icon: Linkedin,
    href: CONTACT_INFO.linkedin,
    color: 'hsl(var(--accent))',
  },
  {
    icon: Github,
    href: CONTACT_INFO.github,
    color: 'hsl(var(--accent))',
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

export const ANIMATION_DELAYS = {
  STAGGER: 0.1,
  INITIAL: 0.2,
  HEADER: 0.4,
  CONTENT: 0.6,
  CARDS: 0.8,
} as const;

export const BREAKPOINTS = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
