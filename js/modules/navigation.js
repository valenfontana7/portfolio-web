// Inicializa navegación de botones laterales y acciones landing
import { qs, qsa, on, scrollToEl, smoothScrollTop } from './dom.js';

export function initNavigation() {
  // Logo al top
  const logo = qs('.header__logo');
  if (logo) on(logo, 'click', () => smoothScrollTop());

  // Mapeo de data-target
  qsa('[data-scroll]').forEach(btn => {
    const targetSelector = btn.getAttribute('data-scroll');
    const target = qs(targetSelector);
    if (target) on(btn, 'click', () => scrollToEl(target));
  });

  // Mapeo de enlaces repositorios externos
  qsa('[data-open]').forEach(btn => {
    const url = btn.getAttribute('data-open');
    if (url) on(btn, 'click', () => window.open(url, '_blank'));
  });
}
