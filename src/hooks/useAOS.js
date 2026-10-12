import { useEffect } from 'react';

export function useAOS() {
  useEffect(() => {
    // If user prefers reduced motion, trigger immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-aos]').forEach((el) => {
        el.classList.add('aos-animate');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((el) => observer.observe(el));

    // Handle any dynamic children added later
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            if (node.hasAttribute('data-aos')) {
              observer.observe(node);
            }
            node.querySelectorAll?.('[data-aos]').forEach((child) => {
              observer.observe(child);
            });
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
