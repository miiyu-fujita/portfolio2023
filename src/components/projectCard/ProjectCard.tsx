import React from 'react';
import './ProjectCard.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface IProjectCard {
  projectTitle: string;
  projectImgName: string;
  projectDescription: string;
  projectTech: string;
}

function ProjectCard(props: IProjectCard) {
  return (
    <div className="project-card-glassy">
      <h3 className="project-card-title">{props.projectTitle}</h3>
      <div className="project-card-line"></div>
      <div className="project-card-img-container">
        <img
          className="project-card-img"
          src={require(`../../images/${props.projectImgName}`)}
        />
      </div>
      <div className="project-description-container">
        <p className="project-card-description">{props.projectDescription}</p>
      </div>
      <div className="project-card-tech">
        <p>{props.projectTech}</p>
      </div>
      <div className="project-card-line"></div>
      <div className="project-card-links">
        <a
          href="https://github.com/miiyu-fujita/create-your-golf"
          target="_blank"
          className="project-link"
        >
          <GitHubIcon fontSize="large" />
        </a>

        <YouTubeIcon fontSize="large" />
      </div>
    </div>
  );
}

export default ProjectCard;
