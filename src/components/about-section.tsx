'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { EXPERTISE_DATA } from '@/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';

const ExpertiseSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="expertise" className="expertise-section py-24 relative scroll-mt-24">
      <div className="expertise-section-glow" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 sm:space-y-14"
        >
          <SectionHeader
            title="My Expertise"
            indicator="EXPERTISE"
            isInView={isInView}
            className="text-center"
          />

          <div className="expertise-grid">
            {EXPERTISE_DATA.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                  }
                  transition={{ duration: 0.55, delay: 0.2 + index * 0.1 }}
                  className="expertise-panel group"
                >
                  <span className="expertise-panel-index" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="expertise-panel-header">
                    <div className="expertise-panel-icon">
                      <IconComponent className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="expertise-panel-title">{item.title}</h3>
                      <p className="expertise-panel-highlight">
                        {item.highlight}
                      </p>
                    </div>
                  </div>

                  <p className="expertise-panel-desc">{item.description}</p>

                  <ul className="expertise-pills">
                    {item.technologies.map(tech => (
                      <li key={tech}>
                        <span className="expertise-pill">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
