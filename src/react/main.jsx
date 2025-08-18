import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import ProjectsToolbar from './components/ProjectsToolbar.jsx';
import Metrics from './components/Metrics.jsx';
import NavigationMount from './components/NavigationMount.jsx';

const rootEl = document.getElementById('react-root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(<App />);
}

// Mount skills island into existing DOM container if present
const skillsContainer = document.querySelector('#habilidades .skills-grid');
if (skillsContainer) {
  // create a detached root inside the container
  const skillsRoot = createRoot(skillsContainer);
  skillsRoot.render(<Skills />);
}

const projectsContainer = document.querySelector('#proyectos .projects-list');
if (projectsContainer) {
  const projectsRoot = createRoot(projectsContainer);
  projectsRoot.render(<Projects />);
}
const toolbarContainer = document.querySelector('#proyectos .projects-toolbar');
if (toolbarContainer) {
  const toolbarRoot = createRoot(toolbarContainer);
  toolbarRoot.render(<ProjectsToolbar />);
}

const metricsContainer = document.querySelector('.hero-metrics');
if (metricsContainer) {
  const metricsRoot = createRoot(metricsContainer);
  metricsRoot.render(<Metrics />);
}

// Mount navigation behaviors so existing data- attributes still work
const navMount = document.getElementById('react-root');
if (navMount) {
  const navRoot = createRoot(navMount);
  navRoot.render(<NavigationMount />);
}
