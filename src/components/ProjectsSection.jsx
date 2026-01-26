import React, { memo, useMemo } from 'react';
import projectsData from '../data/projects-updated.js';

// Memoized project card component
const ProjectCard = memo(({ project }) => (
  <div className="project-card">
    <h3 className="project-title">{project.title}</h3>
    <div className="project-description">
      {project.description.map((paragraph, pIndex) => (
        <p key={pIndex}>{paragraph}</p>
      ))}
    </div>
    {project.links && project.links.length > 0 && (
      <div className="project-links">
        {project.links.map((link, lIndex) => (
          <a
            key={lIndex}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {link.text}
          </a>
        ))}
      </div>
    )}
    {project.image && (
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
        />
      </div>
    )}
  </div>
));

ProjectCard.displayName = 'ProjectCard';

const ProjectsSection = () => {
  // Memoize the data to prevent unnecessary re-renders
  const projects = useMemo(() => projectsData, []);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">projects</h2>
        <div className="projects-content">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ProjectsSection);