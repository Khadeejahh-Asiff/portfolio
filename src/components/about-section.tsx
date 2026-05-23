'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { EXPERTISE_DATA, ABOUT, PERSONAL_INFO } from '@/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TechStack } from '@/components/ui/TechStack';

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="expertise"
      className="py-24 relative scroll-mt-24"
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px),
            linear-gradient(hsl(var(--accent)) 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 sm:space-y-16"
        >
          <SectionHeader
            title="My Expertise"
            description="Stacks and tools I use to ship reliable products"
            indicator="EXPERTISE"
            isInView={isInView}
            className="text-center"
          />

          {/* Expertise cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {EXPERTISE_DATA.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="expertise-card group relative p-6 sm:p-8 lg:p-12"
                  whileHover={{ y: -2 }}
                >
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-hsl(var(--accent)) opacity-20 group-hover:opacity-40 transition-opacity"></div>

                  <div className="flex items-start mb-6 sm:mb-8">
                    <div className="expertise-icon relative">
                      <IconComponent
                        className="h-8 w-8 sm:h-10 sm:w-10"
                        style={{ color: 'hsl(var(--accent))' }}
                      />
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-hsl(var(--accent)) opacity-10 rounded-full blur-sm group-hover:opacity-20 transition-opacity"></div>
                    </div>
                    <div className="ml-4 sm:ml-6 text-left">
                      <h3
                        className="text-xl sm:text-2xl font-semibold"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        {item.title.split(' ')[0]}
                        {item.title
                          .split(' ')
                          .slice(1)
                          .map((word, i) => (
                            <span key={i}>
                              {' '}
                              <span style={{ color: 'hsl(var(--accent))' }}>
                                {word}
                              </span>
                            </span>
                          ))}
                      </h3>
                      <p
                        className="text-sm sm:text-base font-medium font-mono"
                        style={{ color: 'hsl(var(--accent))' }}
                      >
                        {item.highlight}
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-justify"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {item.description}
                  </p>

                  <TechStack
                    technologies={item.technologies.map(tech => ({
                      name: tech,
                      level: 85,
                      icon: item.icon,
                    }))}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Code snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 sm:mt-16 relative"
          >
            {/* Terminal-style header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="font-mono text-xs text-hsl(var(--muted-foreground))">
                portfolio.html
              </span>
            </div>

            <div
              className="p-4 sm:p-6 rounded-lg border relative overflow-hidden"
              style={{
                borderColor: 'hsl(var(--border))',
                backgroundColor: 'hsl(var(--card-bg))',
              }}
            >
              {/* Subtle line numbers - hidden on mobile */}
              <div className="hidden sm:block absolute left-2 top-6 font-mono text-xs text-hsl(var(--muted-foreground)) opacity-30 select-none">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div>
              </div>

              <div className="font-mono text-xs sm:text-sm sm:ml-8">
                <div className="mb-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>
                    &lt;head&gt;
                  </span>
                </div>
                <div className="ml-4 mb-1">
                  <span style={{ color: 'hsl(var(--primary))' }}>&lt;meta</span>
                  <span style={{ color: 'hsl(var(--foreground))' }}>
                    {' '}
                    name=
                  </span>
                  <span style={{ color: 'hsl(var(--gold-accent))' }}>
                    &quot;viewport&quot;
                  </span>
                  <span style={{ color: 'hsl(var(--foreground))' }}>
                    {' '}
                    content=
                  </span>
                  <span style={{ color: 'hsl(var(--gold-accent))' }}>
                    &quot;width=device-width, initial-scale=1.0&quot;
                  </span>
                  <span style={{ color: 'hsl(var(--primary))' }}>&gt;</span>
                </div>
                <div className="ml-4 mb-1">
                  <span style={{ color: 'hsl(var(--primary))' }}>
                    &lt;title&gt;
                  </span>
                  <span style={{ color: 'hsl(var(--foreground))' }}>
                    {PERSONAL_INFO.name} - Portfolio
                  </span>
                  <span style={{ color: 'hsl(var(--primary))' }}>
                    &lt;/title&gt;
                  </span>
                </div>
                <div className="mb-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>
                    &lt;/head&gt;
                  </span>
                </div>
                <div className="mb-2">
                  <span style={{ color: 'hsl(var(--primary))' }}>
                    &lt;body&gt;
                  </span>
                </div>
                <div className="ml-4 mb-1">
                  <span style={{ color: 'hsl(var(--primary))' }}>
                    &lt;h1&gt;
                  </span>
                  <span style={{ color: 'hsl(var(--foreground))' }}>
                    Building responsive MERN applications
                  </span>
                  <span style={{ color: 'hsl(var(--primary))' }}>
                    &lt;/h1&gt;
                  </span>
                </div>
                <div className="ml-4 mb-1">
                  <span style={{ color: 'hsl(var(--primary))' }}>
                    &lt;p&gt;
                  </span>
                  <span style={{ color: 'hsl(var(--foreground))' }}>
                    {ABOUT.paragraphs[0]}
                  </span>
                  <span style={{ color: 'hsl(var(--primary))' }}>
                    &lt;/p&gt;
                  </span>
                </div>
                <div className="ml-4 mb-1">
                  <span style={{ color: 'hsl(var(--primary))' }}>
                    &lt;span&gt;
                  </span>
                  <span style={{ color: 'hsl(var(--foreground))' }}>
                    {ABOUT.paragraphs[2]}
                  </span>
                  <span style={{ color: 'hsl(var(--primary))' }}>
                    &lt;/span&gt;
                  </span>
                </div>
                <div>
                  <span style={{ color: 'hsl(var(--primary))' }}>
                    &lt;/body&gt;
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
