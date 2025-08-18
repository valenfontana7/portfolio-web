// ARCHIVE: original projectsFilter preserved for reference
import { projects } from '../../js/modules/projectsData.js';

export function initProjectsFilter(filterContainer = '.projects-filters') {
  const container = document.querySelector(filterContainer);
  if (!container) return;

  const buttons = Array.from(container.querySelectorAll('.filter-btn'));

  function applyFilter(filter) {
    const normFilter = (filter || '').toString().toLowerCase().trim();
    console.debug('[projectsFilter] applyFilter ->', { filter, normFilter });
    // actualizar estado aria-pressed
    buttons.forEach(btn => {
      const bf = (btn.dataset.filter || '').toString().toLowerCase().trim();
      btn.setAttribute('aria-pressed', bf === normFilter ? 'true' : 'false');
    });

    // Emitir evento con el filtro aplicado para que las vistas (vanilla o React) lo consuman
    let result = projects;
    if (!(normFilter === 'all' || !normFilter)) {
      result = projects.filter(
        p =>
          Array.isArray(p.tags) &&
          p.tags.map(t => t.toString().toLowerCase().trim()).includes(normFilter)
      );
    }
    console.debug('[projectsFilter] emitting projects:filter ->', {
      filter: normFilter,
      count: result.length,
    });
    window.dispatchEvent(
      new CustomEvent('projects:filter', { detail: { filter: normFilter, items: result } })
    );
    // consumers should refresh animations if needed
  }

  // inicializar eventos
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      applyFilter(f);
    });
  });
}
