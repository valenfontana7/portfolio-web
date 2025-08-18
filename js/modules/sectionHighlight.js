// Resalta el botón de navegación según sección visible
import { qsa, qs, clearAriaCurrent, setAriaCurrent, createObserver } from './dom.js';

export function initSectionHighlight({
  sectionsSelector = 'main section',
  navButtonAttr = 'data-scroll',
  rootMargin = '-40% 0px -40% 0px',
} = {}) {
  const sections = qsa(sectionsSelector).filter(s => s.id || s.className);
  const buttons = qsa(`[${navButtonAttr}]`);
  if (!sections.length || !buttons.length) return;

  const map = new Map();
  buttons.forEach(btn => {
    const sel = btn.getAttribute(navButtonAttr);
    const target = qs(sel);
    if (target) map.set(target, btn);
  });

  const observer = createObserver({ root: null, threshold: 0.25, rootMargin }, entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        clearAriaCurrent(buttons);
        const btn = map.get(entry.target);
        if (btn) setAriaCurrent(btn);
      }
    });
  });

  map.forEach((_, section) => observer.observe(section));
}
