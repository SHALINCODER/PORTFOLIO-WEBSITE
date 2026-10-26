'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-scroll-reveal]');
    if (
      targets.length === 0 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return;
    }

    const root = document.documentElement;
    root.dataset.scrollRevealReady = 'true';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      delete root.dataset.scrollRevealReady;
    };
  }, []);

  return null;
}
