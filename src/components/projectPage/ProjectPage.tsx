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
        <ProjectCard
          projectTitle="Create-Your-Golf"
          projectImgName="create-your-golf.png"
          projectDescription="Golf ball customization service landing page"
          projectTech=" ThreeJS • ReactJS "
        />
        <ProjectCard
          projectTitle="ThreeJS floating objects"
          projectImgName="threejsfloat.png"
          projectDescription="Interactive website with floating shapes"
          projectTech="ThreeJS • React Fiber • Drei"
        />
        <ProjectCard
          projectTitle="Dynamic Ground Station Rocket Telemetry Application"
          projectImgName="MRT.png"
          projectDescription="Rocket telemetry data visualization dashboard"
          projectTech="Java • FXML"
        />
        <ProjectCard
          projectTitle="Automated Storage and Delivery System"
          projectImgName="dpm.png"
          projectDescription="A robot that sorts and delivers things"
          projectTech="Rasberry Pi • LegoEV3 • Python"
        />
        <ProjectCard
          projectTitle="DERs on the Grid"
          projectImgName="SURE2022.png"
          projectDescription="Easier data processing with Python :) "
          projectTech="Python • NumPy • pandas"
        />
      </div>
    </div>
  );
}

export default ProjectPage;
