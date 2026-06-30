const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // stop watching once shown
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

elements.forEach(el => observer.observe(el));