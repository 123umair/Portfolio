import { useEffect, type RefObject } from 'react';

/**
 * Assigns each direct child of a bento grid a `data-side` (“left” / “right” /
 * “center”) and a stagger index `--i`, then plays the bento entrance animation
 * (defined in index.css) when the grid scrolls into view.
 */
export const useBentoAnimation = (ref: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    const vw = window.innerWidth;
    const middle = vw / 2;

    children.forEach((child, i) => {
      const rect = child.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      child.style.setProperty('--i', String(i));
      child.dataset.side =
        Math.abs(center - middle) < vw * 0.15 ? 'center' : center < middle ? 'left' : 'right';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('bento-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    const targets = [el, ...children];
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [ref]);
};
