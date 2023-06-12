import './App.css';
import IntroPage from './components/introPage/IntroPage';
import AboutPage from './components/aboutPage/AboutPage';
import ProjectPage from './components/projectPage/ProjectPage';
import TestimonialPage from './components/testimonialPage/TestimonialPage';
import CTAPage from './components/ctaPage/CTAPage';
import NavBar from './components/navBar/NavBar';
import { useState } from 'react';

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const toggleWebsiteMode = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <div
      className={`background background-color ${
        isLightMode ? 'light' : 'dark'
      }`}
    >
      <NavBar handleModeToggle={toggleWebsiteMode} isLightMode={isLightMode} />

      <IntroPage />

      <AboutPage id="about" />

      <ProjectPage id="projects" />

      <TestimonialPage />
      <CTAPage id="contact" />
    </div>
  );
}

export default App;
