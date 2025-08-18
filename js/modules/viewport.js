// Calcula y actualiza la variable CSS --vh para evitar problemas con la barra de direcciones en iOS Safari
let _lastVhHeight = null;
// Cuando el usuario está interactuando (tocando/scroll), evitamos actualizar
// --vh por cambios pequeños para prevenir jitter/shift en secciones como '#sobre-mi'.
let _isUserInteracting = false;
// Timestamp of last user interaction (ms). Used to ignore resize events that
// fire immediately after a scroll/touch to prevent layout jumps.
let _lastInteractionAt = 0;

export function setCssVh() {
  // Preferir visualViewport.height; en iOS Safari puede variar al mostrar/ocultar barras.
  const vv = window.visualViewport;
  let height = (vv && vv.height) || window.innerHeight;
  // Corrección: en algunos iPhones el valor puede incluir fracciones -> redondear ligero evita jitter.
  height = Math.round(height * 100) / 100;
  // Si el usuario está en medio de una interacción (scroll/touch) y el cambio
  // en altura es pequeño, no actualizamos para no provocar reflows que muevan
  // el layout mientras el usuario desplaza la página.
  if (_isUserInteracting && _lastVhHeight !== null && Math.abs(height - _lastVhHeight) < 20) {
    return;
  }
  // Evitar escrituras innecesarias que causan reflow: solo actualizamos si hay un cambio real.
  if (_lastVhHeight === height) return;
  _lastVhHeight = height;
  // Escritura de --vh eliminada intencionalmente. El CSS debe usar svh/vh
  // o fallbacks en lugar de depender de esta variable JS.
  // document.documentElement.style.setProperty('--vh', `${height * 0.01}px`);
}

function debounce(fn, wait = 80) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

export function initViewportHeight() {
  setCssVh();
  const onResize = debounce(setCssVh, 60);
  // Wrapper that ignores resizes fired shortly after user interaction.
  function handleResize() {
    const now = Date.now();
    if (now - _lastInteractionAt < 300) return;
    onResize();
  }
  window.addEventListener('resize', handleResize, { passive: true });
  window.addEventListener('orientationchange', () => {
    // Recalcular después de giro; pequeño timeout para esperar layout stable.
    setTimeout(setCssVh, 120);
  });
  // Recalcular cuando se enfoca un input (teclado iOS modifica altura disponible)
  window.addEventListener('focusin', () => setTimeout(setCssVh, 80));
  // Detectar gestos de usuario: durante touch/pointer interactions no escribir --vh
  // por cambios pequeños. Reservamos actualizaciones para events explícitos.
  window.addEventListener(
    'touchstart',
    () => {
      _isUserInteracting = true;
      _lastInteractionAt = Date.now();
    },
    { passive: true }
  );
  window.addEventListener(
    'pointerdown',
    () => {
      _isUserInteracting = true;
      _lastInteractionAt = Date.now();
    },
    { passive: true }
  );
  window.addEventListener(
    'touchend',
    () => {
      _lastInteractionAt = Date.now();
      setTimeout(() => {
        _isUserInteracting = false;
      }, 160);
    },
    { passive: true }
  );
  window.addEventListener(
    'pointerup',
    () => {
      _lastInteractionAt = Date.now();
      setTimeout(() => {
        _isUserInteracting = false;
      }, 160);
    },
    { passive: true }
  );
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', handleResize, { passive: true });
    // IMPORTANT: don't update --vh during scroll events to avoid any
    // change in size/positioning of sections (e.g. '#sobre-mi') while the
    // user scrolls. We keep updates on resize/orientation/focusin only.
  }
}
