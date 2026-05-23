'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectTapeCarousel from '@/components/ui/ProjectTapeCarousel';
import { SectionHeader } from '@/components/ui/SectionHeader';

const ProjectsShowcaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="showcase"
      className="py-16 sm:py-20 relative scroll-mt-24 overflow-hidden"
      style={{ backgroundColor: 'hsl(var(--muted) / 0.35)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            title="Project Showcase"
            description="A scroll through products I've helped build"
            indicator="WORK"
            isInView={isInView}
            className="text-center mb-10 sm:mb-12"
          />
          <ProjectTapeCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcaseSection;
