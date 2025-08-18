import React, { useEffect, useState } from 'react';
import { projects as allProjects } from '../../../js/modules/projectsData.js';
import ProjectCard from './ProjectCard.jsx';
import { refreshAnimations } from '../../../js/modules/animations.js';

export default function Projects() {
  const [items, setItems] = useState(allProjects);

  useEffect(() => {
    const handler = e => {
      try {
        const detail = e.detail || {};
        setItems(detail.items && Array.isArray(detail.items) ? detail.items : allProjects);
      } catch (err) {
        setItems(allProjects);
      }
    };

    window.addEventListener('projects:filter', handler);
    return () => window.removeEventListener('projects:filter', handler);
  }, []);

  // Re-run reveal animation scan after items change so elements become visible
  useEffect(() => {
    try {
      refreshAnimations();
    } catch (err) {
      // noop
    }
  }, [items]);

  return (
    <>
      {items.map(p => (
        <ProjectCard p={p} key={p.id} />
      ))}
    </>
  );
}
