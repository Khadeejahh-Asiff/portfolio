import { useState, useEffect } from 'react';
import { getScrollProgress } from '@/utils/scrollUtils';

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateScrollProgress = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrollProgress(getScrollProgress());
      });
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return scrollProgress;
};
