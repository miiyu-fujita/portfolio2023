import React from 'react';
import ExperienceBox from '../experienceBox/ExperienceBox';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page-body">
      <div className="about-page-text">
        <h2 className="about-page-heading">Where I've Been</h2>
      </div>
      <div className="experience-container">
        <ExperienceBox />
      </div>
    </div>
  );
}

export default AboutPage;
