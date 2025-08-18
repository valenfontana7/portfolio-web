import '../src/styles/main.scss';
import { initHeaderVisibility } from './modules/headerVisibility.js';
import { initNavigation } from './modules/navigation.js';
// renderProjects handled by React island (src/react)
// filters handled by React ProjectsToolbar
import { initSectionHighlight } from './modules/sectionHighlight.js';
import { initAnimations } from './modules/animations.js';
import { initViewportHeight } from './modules/viewport.js';

// Punto de entrada
window.addEventListener('DOMContentLoaded', () => {
  initViewportHeight();
  initHeaderVisibility();
  // proyectos renderizados por la isla React (filtros manejados por React)
  // renderSkills(); // ahora manejado por la isla React en /src/react
  initNavigation();
  initSectionHighlight();
  initAnimations();
  // Si se re-renderizan proyectos dinámicamente en el futuro, llamar a refreshAnimations()
});
