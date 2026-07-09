import { useEffect } from 'react';

export default function useScrollReveal(dependency) {
  useEffect(() => {
    const root = document.documentElement;
    const revealTargets = document.querySelectorAll([
      '.page-intro',
      '.portfolio-app main .editorial-card',
      '.portfolio-app main article',
      '.portfolio-app main section',
      '.portfolio-app main header',
      '.portfolio-app main table',
      '.portfolio-app main img',
    ].join(','));

    revealTargets.forEach((element) => {
      element.classList.add('reveal');
      if (element.classList.contains('editorial-card')) element.classList.add('hover-lift');
    });

    if (dependency === 'evidence') {
      document.querySelector('.portfolio-main main .editorial-card')?.classList.add('soft-peach-glow');
    }

    const elements = [...document.querySelectorAll('.reveal:not(.is-visible)')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    root.classList.add('reveal-ready');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [dependency]);
}
