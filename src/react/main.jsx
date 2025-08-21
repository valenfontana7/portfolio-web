import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import ProjectsToolbar from './components/ProjectsToolbar.jsx';
import Metrics from './components/Metrics.jsx';
import NavigationMount from './components/NavigationMount.jsx';

const rootEl = document.getElementById('react-root');
let appRoot = null;
if (rootEl) {
  appRoot = createRoot(rootEl);
  // Render App and any small mount components that should live in the same
  // root. Avoid calling createRoot multiple times on the same container.
  appRoot.render(
    React.createElement(
      React.Fragment,
      null,
      React.createElement(App, null),
      React.createElement(NavigationMount, null)
    )
  );
}

// Mount skills island into existing DOM container if present
const skillsContainer = document.querySelector('#habilidades .skills-grid');
if (skillsContainer) {
  // create a detached root inside the container
  const skillsRoot = createRoot(skillsContainer);
  skillsRoot.render(React.createElement(Skills, null));
}

const projectsContainer = document.querySelector('#proyectos .projects-list');
if (projectsContainer) {
  const projectsRoot = createRoot(projectsContainer);
  projectsRoot.render(React.createElement(Projects, null));
}
const toolbarContainer = document.querySelector('#proyectos .projects-toolbar');
if (toolbarContainer) {
  const toolbarRoot = createRoot(toolbarContainer);
  toolbarRoot.render(React.createElement(ProjectsToolbar, null));
}

const metricsContainer = document.querySelector('.hero-metrics');
if (metricsContainer) {
  const metricsRoot = createRoot(metricsContainer);
  metricsRoot.render(React.createElement(Metrics, null));
}

// NavigationMount is rendered above inside the same root as App when
// `react-root` exists. If for some reason App was not mounted but we still
// want NavigationMount, ensure we mount it only once.
// (Handled by the block above.)
