import React from 'react';

export default function ProjectCard({ p }) {
  const tagsHtml = Array.isArray(p.tags) ? p.tags : [];
  return React.createElement(
    'li',
    { className: 'project-card reveal', 'data-project': p.id, 'data-animate': 'fade-up' },
    p.highlight
      ? React.createElement('span', { className: 'project-card__badge' }, 'Destacado')
      : null,
    React.createElement(
      'figure',
      { className: 'project-card__media' },
      React.createElement('img', {
        className: 'project-card__image',
        src: p.img,
        alt: `Imagen representativa de ${p.title}`,
        loading: 'eager',
        fetchpriority: 'high',
        decoding: 'sync',
      }),
      React.createElement('figcaption', { className: 'visually-hidden' }, p.title)
    ),
    React.createElement(
      'div',
      { className: 'project-card__content' },
      React.createElement(
        'div',
        { className: 'project-card__tags' },
        tagsHtml.map(t =>
          React.createElement('span', { className: 'project-card__tag', key: t }, t)
        )
      ),
      React.createElement('h3', { className: 'project-card__title' }, p.title),
      React.createElement('p', { className: 'project-card__description' }, p.description)
    ),
    React.createElement(
      'div',
      { className: 'project-card__overlay', tabIndex: '0', 'aria-hidden': 'true' },
      React.createElement(
        'div',
        { className: 'project-card__overlayInner' },
        React.createElement(
          'button',
          {
            'data-open': p.site,
            className: 'project-card__actionButton project-card__action--visit',
            type: 'button',
            'aria-label': `Visitar sitio de ${p.title}`,
            onClick: () => window.open(p.site, '_blank'),
          },
          React.createElement(
            'svg',
            {
              width: 20,
              height: 20,
              viewBox: '0 0 24 24',
              fill: 'none',
              'aria-hidden': 'true',
              focusable: 'false',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            React.createElement('path', {
              d: 'M14 3h7v7',
              stroke: 'currentColor',
              strokeWidth: 2,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }),
            React.createElement('path', {
              d: 'M10 14L21 3',
              stroke: 'currentColor',
              strokeWidth: 2,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }),
            React.createElement('path', {
              d: 'M21 21H3V3',
              stroke: 'currentColor',
              strokeWidth: 2,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            })
          ),
          React.createElement('span', { className: 'visually-hidden' }, `Visitar ${p.title}`)
        ),
        React.createElement(
          'button',
          {
            'data-open': p.repo,
            className: 'project-card__actionButton project-card__action--repo',
            type: 'button',
            'aria-label': `Ver repositorio de ${p.title}`,
          },
          React.createElement(
            'svg',
            {
              width: 20,
              height: 20,
              viewBox: '0 0 24 24',
              fill: 'currentColor',
              'aria-hidden': 'true',
              focusable: 'false',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            React.createElement('path', {
              d: 'M12 .5C5.73.5.99 5.24.99 11.5c0 4.66 3.03 8.62 7.24 10.02.53.1.72-.23.72-.51 0-.25-.01-.92-.01-1.8-2.94.64-3.56-1.42-3.56-1.42-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.65.07-.65 1.06.08 1.62 1.09 1.62 1.09.94 1.6 2.47 1.14 3.07.87.09-.68.37-1.14.67-1.4-2.35-.27-4.82-1.17-4.82-5.22 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.36.1-2.84 0 0 .88-.28 2.88 1.08a9.9 9.9 0 0 1 2.62-.35c.89 0 1.79.12 2.62.35 2-.36 2.88-1.08 2.88-1.08.57 1.48.21 2.57.1 2.84.67.74 1.08 1.68 1.08 2.83 0 4.06-2.48 4.95-4.84 5.21.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.93 0 .28.19.61.73.5C20.98 20.12 24 16.16 24 11.5 24 5.24 19.26.5 12 .5z',
            })
          ),
          React.createElement('span', { className: 'visually-hidden' }, `Repositorio de ${p.title}`)
        )
      )
    )
  );
}
