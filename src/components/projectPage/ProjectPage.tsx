import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';

import './ProjectPage.css';

interface IProjectPage {
  id: string;
}
function ProjectPage(props: IProjectPage) {
  return (
    <div id={props.id} className="project-page-body">
      <div className="project-page-text">
        <h2 className="project-page-heading">Some projects I've worked on</h2>
      </div>
      <div className="project-cards-container">
        <ProjectCard
          projectTitle="Create-Your-Golf"
          projectImgName="create-your-golf.png"
          projectDescription="Golf ball customization service landing page"
          projectTech=" ThreeJS • ReactJS "
          githubLink="https://github.com/miiyu-fujita/create-your-golf"
          previewLink="https://create-your-golf.netlify.app/"
        />
        <ProjectCard
          projectTitle="ThreeJS floating objects"
          projectImgName="threejsfloat.png"
          projectDescription="Interactive website with floating shapes"
          projectTech="ThreeJS • React Fiber • Drei"
          githubLink="https://github.com/miiyu-fujita/react-floating-objects"
          previewLink="https://react-floating-objects.netlify.app/"
        />
        <ProjectCard
          projectTitle="My Portfolio Website :)"
          projectImgName="portfolio.png"
          projectDescription="The webpage you're visiting right now. Thanks for visiting!"
          projectTech="React • Typescript • CSS"
          githubLink="https://github.com/miiyu-fujita/portfolio2023"
          previewLink="https://miiyu-fujita.netlify.app/"
        />
        <ProjectCard
          projectTitle="Dynamic Ground Station Rocket Telemetry Application"
          projectImgName="MRT.png"
          projectDescription="Rocket telemetry data visualization dashboard"
          projectTech="Java • FXML"
          githubLink="https://github.com/McGillRocketTeam/ground-station-2021"
          previewLink="https://www.youtube.com/watch?v=p7dvAqTqIT0&ab_channel=MiiyuFujita"
        />
        <ProjectCard
          projectTitle="Automated Storage and Delivery System"
          projectImgName="dpm.png"
          projectDescription="A robot that sorts and delivers things"
          projectTech="Rasberry Pi • LegoEV3 • Python"
          githubLink="https://github.com/miiyu-fujita/Automated-Cube-Sorting-and-Storing-System"
          previewLink="https://www.youtube.com/watch?v=IlhDPOigXRw&ab_channel=MiiyuFujita"
        />
        <ProjectCard
          projectTitle="DERs on the Grid"
          projectImgName="SURE2022.png"
          projectDescription="Easier data processing with Python :) "
          projectTech="Python • NumPy • pandas"
          githubLink="https://github.com/miiyu-fujita/sure2022"
          previewLink="https://github.com/miiyu-fujita/sure2022/blob/main/SURE2022_Final_Poster.pdf"
        />
        <ProjectCard
          projectTitle="Cryptocurrency Tracker"
          projectImgName="crypto.png"
          projectDescription="Using the CoinGecko API"
          projectTech="ReactJS • CoinGecko API"
          githubLink="https://github.com/miiyu-fujita/crypto-tracker-react-app/tree/main"
          previewLink="https://basic-crypto-tracker-mf.netlify.app/"
        />
      </div>
    </div>
  );
}

export default ProjectPage;
