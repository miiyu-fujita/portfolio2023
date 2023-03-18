import React from 'react';
import './ProjectCard.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

function ProjectCard() {
  return (
    <div className="project-card-glassy">
      <h3 className="project-card-title">
        Automated Storage and Delivery System
      </h3>
      <div className="project-card-line"></div>
      <div className="project-card-img-container">
        <img
          className="project-card-img"
          src={require('../../images/dpm.png')}
          alt="dpm"
        />
      </div>
      <div className="project-description-container">
        <p className="project-card-description">
          Prototype system to automatically store and deliver requested items,
          implemented using Rasberry Pi, LegoEV3 tools, and the Python
          programming language.
        </p>
      </div>
      <div className="project-card-line"></div>
      <div className="project-card-tech">
        <GitHubIcon fontSize="large" />
        <YouTubeIcon fontSize="large" />
      </div>
    </div>
  );
}

export default ProjectCard;
