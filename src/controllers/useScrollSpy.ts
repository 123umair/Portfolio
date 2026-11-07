import { useEffect, useState } from 'react';

/**
 * CONTROLLER: tracks which page section is currently in view.
 * Returns the active section id (for navbar highlighting).
 */
export const useScrollSpy = (sectionIds: string[]) => {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // middle band of the viewport decides the active section
      { rootMargin: '-30% 0px -50% 0px' },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')]);

  return active;
};
