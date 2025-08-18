import React, { useEffect, useState } from 'react';
import { projects } from '../../../js/modules/projectsData.js';

const FILTERS = [
  { key: 'all', label: 'Todos' },
  { key: 'ecommerce', label: 'Ecommerce' },
  { key: 'ui', label: 'UI' },
  { key: 'experimentos', label: 'Experimentos' },
];

export default function ProjectsToolbar() {
  const [active, setActive] = useState('all');

  useEffect(() => {
    // emit initial filter to populate projects (matches previous behavior)
    applyFilter(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function applyFilter(filter) {
    const normFilter = (filter || '').toString().toLowerCase().trim();
    let result = projects;
    if (!(normFilter === 'all' || !normFilter)) {
      result = projects.filter(
        p =>
          Array.isArray(p.tags) &&
          p.tags.map(t => t.toString().toLowerCase().trim()).includes(normFilter)
      );
    }

    window.dispatchEvent(
      new CustomEvent('projects:filter', { detail: { filter: normFilter, items: result } })
    );
  }

  function onClick(key) {
    setActive(key);
    applyFilter(key);
  }

  return (
    <div className="projects-filters" aria-label="Filtros de proyectos">
      {FILTERS.map(f => (
        <button
          key={f.key}
          className="filter-btn"
          data-filter={f.key}
          aria-pressed={active === f.key}
          onClick={() => onClick(f.key)}
          type="button"
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
