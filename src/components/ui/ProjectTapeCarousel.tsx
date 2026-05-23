'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/constants';

const ProjectTapeCarousel = () => {
  const cards = [...PROJECTS_DATA, ...PROJECTS_DATA];

  return (
    <motion.div
      className="w-full min-w-0 -mx-4 sm:-mx-6 lg:-mx-8"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="showcase-rail">
        <div className="showcase-track" aria-label="Project showcase carousel">
          {cards.map((project, index) => (
            <article
              key={`${project.id}-${index}`}
              className="showcase-card"
            >
              <div className="showcase-card-image">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top"
                  sizes="380px"
                />
                <div className="showcase-card-image-fade" aria-hidden />
              </div>
              <div className="showcase-card-body">
                <h3 className="showcase-card-title">{project.name}</h3>
                <p className="showcase-card-meta">{project.category}</p>
                <p className="showcase-card-desc">{project.description}</p>
                {project.tech.length > 0 && (
                  <div className="showcase-card-tech">
                    <span className="showcase-tech-label">Tech stack</span>
                    <ul className="showcase-tech-pills">
                      {project.tech.map(tech => (
                        <li key={tech}>
                          <span className="showcase-pill">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectTapeCarousel;
