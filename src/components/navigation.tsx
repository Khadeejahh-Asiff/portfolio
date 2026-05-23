'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '@/constants';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { scrollToSection } from '@/utils/scrollUtils';
import { ProfileAvatar } from '@/components/ui/ProfileAvatar';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <motion.div
        className="scroll-progress-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="h-full origin-left"
          style={{
            background:
              'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 50%, hsl(var(--accent)) 100%)',
            scaleX: scrollProgress / 100,
          }}
          transition={{ duration: 0.12, ease: 'linear' }}
        />
        <motion.div
          className="scroll-icon"
          style={{ left: `${scrollProgress}%` }}
          transition={{ duration: 0.12, ease: 'linear' }}
        >
          <ChevronDown
            className="w-2.5 h-2.5"
            style={{ transform: `rotate(${scrollProgress * 3.6}deg)` }}
          />
        </motion.div>
      </motion.div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-1 left-0 right-0 z-50 bg-[hsl(var(--background)/0.85)] backdrop-blur-xl border-b border-[hsl(var(--border)/0.2)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <motion.button
              type="button"
              whileHover={{ scale: 1.01 }}
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 min-w-0"
            >
              <ProfileAvatar size="sm" />
              <span className="navbar-logo text-sm sm:text-base font-medium text-[hsl(var(--foreground))] truncate hidden sm:block">
                {PERSONAL_INFO.name}
              </span>
            </motion.button>

            <motion.div className="hidden md:flex items-center gap-5">
              <nav
                className="flex items-center space-x-8"
                role="navigation"
                aria-label="Main navigation"
              >
                {NAV_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.name}
                    type="button"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -1 }}
                    onClick={() => handleNavClick(item.href)}
                    aria-label={`Navigate to ${item.name} section`}
                    className="relative text-sm font-mono transition-colors duration-300"
                    style={{
                      color:
                        activeSection === item.name
                          ? 'hsl(var(--primary))'
                          : 'hsl(var(--muted-foreground))',
                    }}
                  >
                    <span className="uppercase tracking-wide">{item.name}</span>
                    {activeSection === item.name && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full"
                        style={{ backgroundColor: 'hsl(var(--primary))' }}
                        initial={false}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </nav>
              <ThemeToggle />
            </motion.div>

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors duration-300"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </motion.button>
            </div>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden border-t border-[hsl(var(--border)/0.2)]"
            >
              <div className="py-3 sm:py-4 space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.name}
                    type="button"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    aria-label={`Navigate to ${item.name} section`}
                    className="block w-full text-left px-4 py-2.5 sm:py-3 text-sm font-mono transition-colors duration-300"
                    style={{
                      color:
                        activeSection === item.name
                          ? 'hsl(var(--primary))'
                          : 'hsl(var(--muted-foreground))',
                      backgroundColor:
                        activeSection === item.name
                          ? 'hsl(var(--primary) / 0.1)'
                          : 'transparent',
                    }}
                  >
                    <span className="uppercase tracking-wide">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
