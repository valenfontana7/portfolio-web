// Observa elementos con la clase .reveal y aplica animación según data-animate
import { qsa, createObserver } from './dom.js';

const ANIMATE_CLASS_VISIBLE = 'reveal--visible';

function applyReveal(entry) {
  entry.target.classList.add(ANIMATE_CLASS_VISIBLE);
}

export function initAnimations({
  selector = '.reveal',
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.15,
} = {}) {
  const elements = qsa(selector).filter(el => !el.classList.contains(ANIMATE_CLASS_VISIBLE));
  if (!elements.length) return;
  const observer = createObserver({ root: null, rootMargin, threshold }, entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        applyReveal(entry);
        observer.unobserve(entry.target); // Sólo una vez
      }
    });
  });
  elements.forEach(el => observer.observe(el));
}

// Permite re-scan después de render dinámico (ej: proyectos)
export function refreshAnimations() {
  initAnimations();
}
