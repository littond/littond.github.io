import React from 'react';
import '../../styles/Projects.css';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Website',
      description: 'A responsive personal website built with React, showcasing my projects and blog.',
      technologies: ['React', 'CSS', 'Vite'],
      demoLink: '#',
      codeLink: 'https://github.com/littond/littond.github.io'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A sample project description. Replace with your actual project details.',
      technologies: ['JavaScript', 'Node.js', 'Express'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Another sample project description. Replace with your actual project details.',
      technologies: ['React', 'TypeScript', 'Firebase'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="page-title">My Projects</h1>
      <p className="page-subtitle">Check out some of the projects I've been working on</p>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 