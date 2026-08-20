import { useEffect } from 'react';

// Fades every [data-reveal] element in as it scrolls into view, then stops
// watching it. Pass a value that changes per route so a newly mounted view
// gets observers attached to its own elements.
export function useReveal(routeKey) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [routeKey]);
}
