// Scroll utility functions

const NAV_OFFSET = 88;

const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const scrollToSection = (href: string): void => {
  const element = document.querySelector(href);
  if (!element) return;

  const targetTop =
    element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    window.scrollTo({ top: targetTop, behavior: 'auto' });
    return;
  }

  const start = window.scrollY;
  const distance = targetTop - start;
  const duration = Math.min(1000, Math.max(450, Math.abs(distance) * 0.55));
  let startTime: number | null = null;
  let frameId = 0;

  const step = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) {
      frameId = requestAnimationFrame(step);
    }
  };

  cancelAnimationFrame(frameId);
  frameId = requestAnimationFrame(step);
};

export const getScrollProgress = (): number => {
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  if (documentHeight <= 0) return 0;
  const currentProgress = (window.scrollY / documentHeight) * 100;
  return Math.min(100, Math.max(0, currentProgress));
};
