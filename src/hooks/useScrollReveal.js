import { useEffect } from 'react';

export default function useScrollReveal(dependency) {
  useEffect(() => {
    const root = document.documentElement;
    const revealTargets = document.querySelectorAll([
      '.page-intro',
      '.portfolio-main main .editorial-card',
      '.portfolio-main main article',
      '.portfolio-main > main > div > header',
      '.portfolio-main main main > section',
    ].join(','));

    revealTargets.forEach((element) => {
      element.classList.add('reveal');
      if (element.classList.contains('editorial-card')) element.classList.add('hover-lift');
    });

    if (dependency === 'evidence') {
      document.querySelector('.portfolio-main main .editorial-card')?.classList.add('soft-peach-glow');
    }

    if (dependency === 'rubric') {
      document.querySelector('.portfolio-main main .bg-obsidian.rounded-xl')?.classList.add('soft-peach-glow', 'reveal');
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
