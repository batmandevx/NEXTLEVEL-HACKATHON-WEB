'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('in'), i * 45);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.rv,.rvl,.rvr').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
