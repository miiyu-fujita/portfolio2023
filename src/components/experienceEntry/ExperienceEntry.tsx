import React from 'react';
import './ExperienceEntry.css';
interface ExperienceEntry {
  companyName: string;
  experienceRole: string;
  experienceTime: string;
}
function ExperienceEntry(props: ExperienceEntry) {
  return (
    <div>
      <h4 className="experience-company">{props.companyName}</h4>
      <div className="experience-role-and-circle">
        <div className="circle"></div>
        <p className="experience-role">{props.experienceRole}</p>
      </div>
      <div className="experience-time-and-line">
        <div className="line"></div>
        <p className="experience-time">{props.experienceTime}</p>
      </div>
    </div>
  );
}

export default ExperienceEntry;
