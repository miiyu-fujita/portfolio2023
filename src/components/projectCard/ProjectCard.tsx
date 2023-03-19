import React from 'react';
import './ProjectCard.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';

interface IProjectCard {
  projectTitle: string;
  projectImgName: string;
  projectDescription: string;
  projectTech: string;
  githubLink: string;
  previewLink: string;
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
          className="project-link"
          href={`${props.githubLink}`}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          className="project-link"
          href={`${props.previewLink}`}
          target="_blank"
          rel="noreferrer"
        >
          <PreviewIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
