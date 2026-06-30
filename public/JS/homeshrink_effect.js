const heroInner = document.querySelector(".hero-content");

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      let scale = 1 - window.scrollY / 3000;
      if (scale < 0.9) scale = 0.9;
      heroInner.style.transform = `scale(${scale})`;
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });