export const setupScrollAnimation = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  const initializeObserver = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => observer.observe(element));
  };

  initializeObserver();

  return () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => observer.unobserve(element));
  };
};
