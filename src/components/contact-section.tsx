'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Mail, Github, Linkedin, ArrowUpRight, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';

const CONTACT_CHANNELS = [
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

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      className="contact-section py-20 sm:py-24 scroll-mt-24"
    >
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-10 sm:space-y-12"
        >
          <SectionHeader
            title="Get In Touch"
            indicator="CONTACT"
            isInView={isInView}
            className="text-center"
          />

          <div className="contact-grid">
            {CONTACT_CHANNELS.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.a
                  key={channel.id}
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.55, delay: 0.15 + index * 0.1 }}
                  className="contact-panel group"
                >
                  <div className="contact-panel-header">
                    <div className="contact-panel-icon">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="contact-panel-title">{channel.title}</h3>
                      <p className="contact-panel-subtitle">
                        {channel.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="contact-panel-desc">{channel.description}</p>

                  <span className="contact-panel-cta">
                    {channel.cta}
                    <ArrowUpRight aria-hidden />
                  </span>
                </motion.a>
              );
            })}
          </div>

          <p className="contact-footer-note">
            <MapPin
              className="inline h-3.5 w-3.5 -mt-0.5 mr-1 text-[hsl(var(--primary))]"
              aria-hidden
            />
            Based in <span>{CONTACT_INFO.location}</span>
            {' · '}
            Open to remote & freelance
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
