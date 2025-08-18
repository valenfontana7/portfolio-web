import { useEffect } from 'react';

// Small mount component that sets up the existing DOM-based navigation behaviors
// and the header visibility (throttled scroll handler). This keeps both concerns
// in a single React mount to avoid creating multiple roots on the same container.
export default function NavigationMount() {
  useEffect(() => {
    function qs(sel) {
      return document.querySelector(sel);
    }
    function qsa(sel) {
      return Array.from(document.querySelectorAll(sel));
    }
    function smoothScrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function scrollToEl(el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const cleanup = [];

    // Logo click
    const logo = qs('.header__logo');
    if (logo) {
      const fn = () => smoothScrollTop();
      logo.addEventListener('click', fn);
      cleanup.push(() => logo.removeEventListener('click', fn));
    }

    // data-scroll
    qsa('[data-scroll]').forEach(btn => {
      const targetSelector = btn.getAttribute('data-scroll');
      const target = qs(targetSelector);
      if (target) {
        const fn = () => scrollToEl(target);
        btn.addEventListener('click', fn);
        cleanup.push(() => btn.removeEventListener('click', fn));
      }
    });

    // data-open
    qsa('[data-open]').forEach(btn => {
      const url = btn.getAttribute('data-open');
      if (url) {
        const fn = () => window.open(url, '_blank');
        btn.addEventListener('click', fn);
        cleanup.push(() => btn.removeEventListener('click', fn));
      }
    });

    // Header visibility (throttled)
    const header = qs('header');
    let lastScrollTop = 0;
    if (header) {
      header.classList.add('header--hide-transition');
      const throttle = (fn, wait = 100) => {
        let last = 0;
        return (...args) => {
          const now = Date.now();
          if (now - last >= wait) {
            last = now;
            fn(...args);
          }
        };
      };

      const handle = throttle(() => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        const goingDown = st > lastScrollTop;
        if (goingDown && st > 50) {
          header.classList.add('header--hidden');
        } else {
          header.classList.remove('header--hidden');
        }
        lastScrollTop = st <= 0 ? 0 : st;
      }, 100);

      window.addEventListener('scroll', handle, { passive: true });
      cleanup.push(() => window.removeEventListener('scroll', handle));
    }

    return () => cleanup.forEach(fn => fn());
  }, []);

  return null;
}
