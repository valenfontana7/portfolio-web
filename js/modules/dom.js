// utilidades DOM reutilizables
export const qs = (sel, scope = document) => scope.querySelector(sel);
export const qsa = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));
export const on = (el, evt, handler, opts) => el.addEventListener(evt, handler, opts);
export const scrollToEl = (el, behavior = 'smooth') => {
  if (!el) return;
  el.scrollIntoView({ behavior });
};
export const smoothScrollTop = (behavior = 'smooth') => window.scrollTo({ top: 0, behavior });

// Utilidades de rendimiento y observers
export const debounce = (fn, wait = 100) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(null, args), wait);
  };
};

export const throttle = (fn, limit = 100) => {
  let inThrottle = false;
  let lastArgs;
  return function (...args) {
    lastArgs = args;
    if (!inThrottle) {
      fn.apply(null, lastArgs);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
        if (lastArgs !== args) fn.apply(null, lastArgs);
      }, limit);
    }
  };
};

export const createObserver = (options, callback) => new IntersectionObserver(callback, options);

// Accesibilidad helpers
export const setAriaCurrent = el => {
  if (!el) return;
  el.setAttribute('aria-current', 'true');
};
export const clearAriaCurrent = elements => {
  elements.forEach(e => e.removeAttribute('aria-current'));
};
