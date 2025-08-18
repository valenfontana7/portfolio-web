import React from 'react';
import { skillCategories } from '../../../js/modules/skillsData.js';

function getIconElement(name) {
  const key = String(name).toLowerCase();

  if (/html/.test(key)) {
    return React.createElement(
      'svg',
      { viewBox: '0 0 24 24', width: 24, height: 24, fill: 'none', 'aria-hidden': 'true' },
      React.createElement('path', {
        d: 'M3 3l2 18 7 2 7-2 2-18H3z',
        stroke: 'currentColor',
        strokeWidth: 0.8,
        fill: 'none',
      }),
      React.createElement('path', {
        d: 'M8.5 8.5h6M8 12h8',
        stroke: 'currentColor',
        strokeWidth: 1,
        strokeLinecap: 'round',
      })
    );
  }

  if (/css/.test(key)) {
    return React.createElement(
      'svg',
      { viewBox: '0 0 24 24', width: 24, height: 24, fill: 'none', 'aria-hidden': 'true' },
      React.createElement('path', {
        d: 'M3 3h18l-1.6 14.4L12 21l-7.4-3.6L3 3z',
        stroke: 'currentColor',
        strokeWidth: 0.8,
        fill: 'none',
      }),
      React.createElement('path', {
        d: 'M7 8h10l-.6 6L12 17l-4.4-3L7 8z',
        stroke: 'currentColor',
        strokeWidth: 1,
        strokeLinecap: 'round',
      })
    );
  }

  if (/javascript|js/.test(key)) {
    return React.createElement(
      'svg',
      { viewBox: '0 0 24 24', width: 24, height: 24, fill: 'none', 'aria-hidden': 'true' },
      React.createElement('rect', {
        x: 2,
        y: 3,
        width: 20,
        height: 18,
        stroke: 'currentColor',
        strokeWidth: 0.8,
        fill: 'none',
      }),
      React.createElement('path', {
        d: 'M9 8c1.2 0 1.8.6 2.2 1 .6.6 1.2 1.4 2.4 1.4 1.4 0 2-1.2 2-1.2',
        stroke: 'currentColor',
        strokeWidth: 1,
        strokeLinecap: 'round',
      })
    );
  }

  if (/react/.test(key)) {
    return React.createElement(
      'svg',
      { viewBox: '0 0 24 24', width: 24, height: 24, fill: 'none', 'aria-hidden': 'true' },
      React.createElement('ellipse', {
        cx: 12,
        cy: 12,
        rx: 6,
        ry: 2.6,
        stroke: 'currentColor',
        strokeWidth: 0.9,
        fill: 'none',
      }),
      React.createElement('ellipse', {
        cx: 12,
        cy: 12,
        rx: 6,
        ry: 2.6,
        stroke: 'currentColor',
        strokeWidth: 0.9,
        transform: 'rotate(60 12 12)',
        fill: 'none',
      }),
      React.createElement('ellipse', {
        cx: 12,
        cy: 12,
        rx: 6,
        ry: 2.6,
        stroke: 'currentColor',
        strokeWidth: 0.9,
        transform: 'rotate(120 12 12)',
        fill: 'none',
      }),
      React.createElement('circle', { cx: 12, cy: 12, r: 1.1, fill: 'currentColor' })
    );
  }

  if (/node/.test(key)) {
    return React.createElement(
      'svg',
      { viewBox: '0 0 24 24', width: 24, height: 24, fill: 'none', 'aria-hidden': 'true' },
      React.createElement('polygon', {
        points: '12,2 20,7 20,17 12,22 4,17 4,7',
        stroke: 'currentColor',
        strokeWidth: 0.9,
        fill: 'none',
      })
    );
  }

  if (/sql|postgres|database/.test(key)) {
    return React.createElement(
      'svg',
      { viewBox: '0 0 24 24', width: 24, height: 24, fill: 'none', 'aria-hidden': 'true' },
      React.createElement('ellipse', {
        cx: 12,
        cy: 6,
        rx: 7,
        ry: 3,
        stroke: 'currentColor',
        strokeWidth: 0.9,
        fill: 'none',
      }),
      React.createElement('path', {
        d: 'M5 6v6c0 1.6 3.1 3 7 3s7-1.4 7-3V6',
        stroke: 'currentColor',
        strokeWidth: 0.9,
        fill: 'none',
      })
    );
  }

  if (/git|github/.test(key)) {
    return React.createElement(
      'svg',
      { viewBox: '0 0 24 24', width: 24, height: 24, fill: 'none', 'aria-hidden': 'true' },
      React.createElement('circle', { cx: 12, cy: 4.5, r: 1.5, fill: 'currentColor' }),
      React.createElement('path', {
        d: 'M12 6v6',
        stroke: 'currentColor',
        strokeWidth: 0.9,
        strokeLinecap: 'round',
      }),
      React.createElement('circle', { cx: 6, cy: 16, r: 1.2, fill: 'currentColor' }),
      React.createElement('circle', { cx: 18, cy: 16, r: 1.2, fill: 'currentColor' })
    );
  }

  if (/access|accesibilidad/.test(key)) {
    return React.createElement(
      'svg',
      { viewBox: '0 0 24 24', width: 24, height: 24, fill: 'none', 'aria-hidden': 'true' },
      React.createElement('circle', {
        cx: 12,
        cy: 8,
        r: 2,
        stroke: 'currentColor',
        strokeWidth: 0.9,
        fill: 'none',
      }),
      React.createElement('path', {
        d: 'M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6',
        stroke: 'currentColor',
        strokeWidth: 0.9,
        fill: 'none',
      })
    );
  }

  // fallback: circular badge with letter
  return React.createElement(
    'svg',
    { viewBox: '0 0 24 24', width: 24, height: 24, fill: 'none', 'aria-hidden': 'true' },
    React.createElement('circle', {
      cx: 12,
      cy: 12,
      r: 9,
      stroke: 'currentColor',
      strokeWidth: 1,
      fill: 'none',
    }),
    React.createElement(
      'text',
      { x: 12, y: 16, fill: 'currentColor', textAnchor: 'middle', fontSize: 10 },
      String(name).charAt(0).toUpperCase()
    )
  );
}

function skillButtonElement(name) {
  return React.createElement(
    'button',
    { className: 'skill', type: 'button', 'aria-pressed': 'false', 'data-skill': name, key: name },
    React.createElement(
      'span',
      { className: 'skill__icon', 'aria-hidden': 'true' },
      getIconElement(name)
    ),
    React.createElement('span', { className: 'skill__label' }, name)
  );
}

export default function Skills() {
  const sections = skillCategories.map(cat => {
    const items = cat.skills.map(s => skillButtonElement(s));
    return React.createElement(
      'section',
      { className: 'skill-category', id: cat.id, key: cat.id },
      React.createElement('h3', { className: 'skill-category__title' }, cat.title),
      React.createElement('div', { className: 'skill-list' }, ...items)
    );
  });
  return React.createElement(React.Fragment, null, ...sections);
}
