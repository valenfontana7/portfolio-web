// Controla la visibilidad del header al hacer scroll
import { throttle } from './dom.js';

let lastScrollTop = 0;
export function initHeaderVisibility(headerSelector = 'header', threshold = 50) {
  const header = document.querySelector(headerSelector);
  if (!header) return;
  header.classList.add('header--hide-transition');
  const handle = throttle(() => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const goingDown = st > lastScrollTop;
    if (goingDown && st > threshold) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }, 100);
  window.addEventListener('scroll', handle, { passive: true });
}
