// Portfolio Constants — Khadeeja Asif

import {
  Code,
  Database,
  Mail,
  Linkedin,
  Github,
  Cpu,
  Globe,
  Zap,
  Brain,
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
    title: 'Frontend Development',
    highlight: 'React, Next.js, Modern UI',
    description:
      'Building responsive, component-driven interfaces with React, Next.js, and Tailwind — focused on performance, accessibility, and polished user experiences.',
    icon: Code,
    technologies: [
      'React.js',
      'Next.js',
      'Remix.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'ShadCN UI',
      'Material UI',
      'React Bootstrap',
      'Framer Motion',
      'Responsive Design',
      'SSR / SSG / ISR',
    ],
  },
  {
    title: 'State & Data Fetching',
    highlight: 'Redux, TanStack Query, SWR',
    description:
      'Managing client and server state with predictable patterns, caching, and optimistic updates for fast, reliable UIs.',
    icon: Layers,
    technologies: [
      'Redux Toolkit',
      'React Query (TanStack Query)',
      'SWR',
      'Zustand',
      'API Integration',
      'REST APIs',
    ],
  },
  {
    title: 'Backend & APIs',
    highlight: 'Node.js, NestJS, Express',
    description:
      'Integrating REST APIs and backend services with Node.js, NestJS, and Express for full-stack delivery.',
    icon: Database,
    technologies: [
      'Node.js',
      'NestJS',
      'Express.js',
      'FastAPI',
      'REST APIs',
      'Socket.io',
      'Prisma ORM',
      'Postman',
      'Swagger',
      'Insomnia',
    ],
  },
  {
    title: 'Databases & DevOps',
    highlight: 'MongoDB, PostgreSQL, Docker',
    description:
      'Working with relational and document databases, ORMs, and deployment workflows on Vercel, Netlify, and containerized environments.',
    icon: Globe,
    technologies: [
      'MongoDB',
      'PostgreSQL',
      'Supabase',
      'Prisma ORM',
      'Docker',
      'Vercel',
      'Netlify',
      'Git & GitHub',
    ],
  },
  {
    title: 'AI & Emerging Tech',
    highlight: 'Gen AI, RAG, Prompt Engineering',
    description:
      'Exploring generative AI, agentic workflows, and RAG to build smarter product features and automate workflows.',
    icon: Brain,
    technologies: [
      'Generative AI',
      'Agentic AI',
      'AI Basics',
      'Prompt Engineering',
      'RAG',
    ],
  },
  {
    title: 'Performance & Architecture',
    highlight: 'Optimization, Clean Components',
    description:
      'Delivering maintainable, component-based architectures with bundle optimization, lazy loading, and Core Web Vitals in mind.',
    icon: Zap,
    technologies: [
      'Performance Optimization',
      'Component-Based Architecture',
      'Core Web Vitals',
      'Code Splitting',
      'Memoization',
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
      'A rehabilitation platform offering personalized physical therapy and recovery programs — holistic care through a user-friendly interface and streamlined patient experience.',
    image: '/p1.png',
    tech: ['React', 'Next.js', 'TypeScript', 'REST APIs'],
    featured: true,
  },
  {
    id: 'hiredroid',
    featured: false,
    name: 'HireDroid',
    category: 'Job Portal · HR',
    description:
      'Skill-focused job portal connecting employers with candidates — explore opportunities, build profiles, and manage hiring workflows efficiently.',
    image: '/p3.png',
    tech: ['Next.js', 'React', 'TypeScript', 'SWR'],
  },
  {
    id: 'scrumdroid',
    featured: false,
    name: 'ScrumDroid',
    category: 'Management Platform',
    description:
      'Web-based platform streamlining internal workflows — centralized interface for tasks, activity monitoring, and data across modules.',
    image: '/p2.png',
    tech: ['React.js', 'SWR', 'Performance', 'Caching'],
  },
  {
    id: 'akredcenter',
    featured: false,
    name: 'AkredCenter',
    category: 'Accreditation Management',
    description:
      'Secure dashboard to track, manage, and organize accreditation data — simplifying submission, approval, and status tracking workflows.',
    image: '/p4.jpeg',
    tech: ['React', 'Next.js', 'Dashboard', 'Secure APIs'],
  },
  {
    id: 'tickato',
    featured: false,
    name: 'Tickato',
    category: 'Event Ticketing',
    description:
      'Ticket management platform for event ticketing and user interactions — intuitive browsing and scalable ticket workflows.',
    image: '/p5.jpeg',
    tech: ['React', 'Next.js', 'TypeScript', 'Scalable UI'],
  },
  {
    id: 'dmg',
    featured: false,
    name: 'DMG',
    category: 'AI · Email Automation',
    description:
      'Intelligent system using a Vision-Language Model to categorize emails and extract structured JSON for workflow automation.',
    image: '/p6.jpeg',
    tech: ['VLM', 'AI', 'JSON Extraction', 'Automation'],
  },
] as const;

export const CONTACT_INFO = {
  email: 'khadeejaasif323@gmail.com',
  phone: '+92 333 4304342',
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
