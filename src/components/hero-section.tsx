'use client';

import { motion } from 'framer-motion';
import { PERSONAL_INFO, CONTACT_INFO, ABOUT, HERO_TECH } from '@/constants';
import { scrollToSection } from '@/utils/scrollUtils';
import { MapPin, Mail, Linkedin, ArrowRight } from 'lucide-react';

const HERO_INITIALS = 'KA';
const HERO_ROLE_CHIP = 'Full Stack Developer';
const HERO_STACK_TEXT = 'React · Next · Node · Nest';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-section relative min-h-screen flex flex-col justify-center scroll-mt-24 overflow-x-clip"
    >
      <motion.div className="hero-mesh" aria-hidden />
      <motion.div className="hero-grid-lines" aria-hidden />
      <motion.div className="hero-portrait-glow" aria-hidden />

      <motion.div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 lg:pt-28 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="hero-shell"
        >
          <motion.div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-8 xl:gap-12 items-stretch">
            <motion.div className="flex flex-col justify-center order-2 lg:order-1 py-2 lg:py-6 text-center lg:text-left">
              <p className="hero-badge">
                <span className="hero-badge-dot" />
                Open to remote & freelance
              </p>

              <h1 className="hero-title mt-5">
                <span className="hero-title-line">{PERSONAL_INFO.name}</span>
              </h1>

              <motion.div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 justify-center lg:justify-start">
                <p className="text-lg sm:text-xl font-medium text-[hsl(var(--foreground))]">
                  {PERSONAL_INFO.title}
                </p>
                <span className="hidden sm:inline text-[hsl(var(--border))]">
                  /
                </span>
                <p className="text-base text-[hsl(var(--primary))]">
                  {PERSONAL_INFO.subtitle}
                </p>
              </motion.div>

              <p className="mt-5 text-sm sm:text-[15px] leading-relaxed max-w-xl mx-auto lg:mx-0 text-[hsl(var(--muted-foreground))] text-pretty text-justify">
                {ABOUT.paragraphs[0]}
              </p>
              <p className="mt-3 text-sm leading-relaxed max-w-xl mx-auto lg:mx-0 text-[hsl(var(--muted-foreground)/0.85)] text-pretty hidden sm:block text-justify">
                {ABOUT.paragraphs[1]}
              </p>
              <p className="mt-3 text-sm leading-relaxed max-w-xl mx-auto lg:mx-0 text-[hsl(var(--muted-foreground)/0.85)] text-pretty hidden sm:block text-justify">
                {ABOUT.paragraphs[2]}
              </p>

              <motion.div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
                {HERO_TECH.map(tech => (
                  <span key={tech} className="hero-tech-pill">
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div className="hero-meta-row">
                <span className="hero-meta-item">
                  <MapPin className="hero-meta-icon" aria-hidden />
                  {CONTACT_INFO.location}
                </span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hero-meta-link"
                  title={CONTACT_INFO.email}
                >
                  <Mail className="hero-meta-icon" aria-hidden />
                  <span className="hero-meta-link-text">
                    {CONTACT_INFO.email}
                  </span>
                </a>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-meta-link"
                >
                  <Linkedin className="hero-meta-icon" aria-hidden />
                  LinkedIn
                </a>
              </motion.div>

              <motion.div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-7">
                <button
                  type="button"
                  className="hero-cta hero-cta--primary"
                  onClick={() => scrollToSection('#showcase')}
                >
                  View projects
                  <ArrowRight className="hero-cta-arrow h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>

            <motion.div className="order-1 lg:order-2 flex flex-col items-center justify-center gap-4 py-4 lg:py-6">
              <motion.div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none flex justify-center">
                <div className="hero-initials-card w-full max-w-[300px] sm:max-w-[340px] aspect-[4/5] h-auto !w-full">
                  <span className="hero-initials-chip">{HERO_ROLE_CHIP}</span>
                  <span className="hero-initials-dot hero-initials-dot--one" />
                  <span className="hero-initials-dot hero-initials-dot--two" />
                  <span className="hero-initials-card-glow" />
                  <span className="hero-initials-card-ring" />
                  <span className="hero-initials-card-ring hero-initials-card-ring--inner" />
                  <span className="hero-initials-card-text">{HERO_INITIALS}</span>
                </div>
                <motion.div className="hero-float-card hero-float-card--stack">
                  <p className="text-[10px] uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-1">
                    Stack
                  </p>
                  <p className="text-xs font-mono text-[hsl(var(--foreground))]">
                    {HERO_STACK_TEXT}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
