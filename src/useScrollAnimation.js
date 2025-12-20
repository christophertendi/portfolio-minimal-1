import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections and key elements
    const animatedElements = document.querySelectorAll('.section, .exp-item, .project-item, .skill-group, .edu-item');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};