import React from 'react';
import ExperienceEntry from '../experienceEntry/ExperienceEntry';
import './ExperienceBox.css';

function ExperienceBox() {
  return (
    <div className="experience-box-glassy">
      <ExperienceEntry
        companyName="Haivision"
        experienceRole="Software Development Intern"
        experienceTime="May 2023 - Sep. 2023"
      />
      <ExperienceEntry
        companyName="Pomerleau"
        experienceRole="Software Developer Intern"
        experienceTime="Jan. 2023 - Apr. 2022"
      />
      <ExperienceEntry
        companyName="McGill University"
        experienceRole="Summer Research Intern"
        experienceTime="May 2022 - Aug. 2022"
      />
      <ExperienceEntry
        companyName="Business Development Bank of Canada"
        experienceRole="Cyber Risk Analyst Intern"
        experienceTime="Jun. 2021 - Aug. 2021"
      />
    </div>
  );
}

export default ExperienceBox;
