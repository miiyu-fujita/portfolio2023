import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';

import './ProjectPage.css';

function ProjectPage() {
  return (
    <div className="project-page-body">
      <div className="project-page-text">
        <h2 className="project-page-heading">Some projects I've worked on</h2>
      </div>
      <div className="project-cards-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectPage;
