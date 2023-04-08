import './App.css';
import IntroPage from './components/introPage/IntroPage';
import AboutPage from './components/aboutPage/AboutPage';
import ProjectPage from './components/projectPage/ProjectPage';
import TestimonialPage from './components/testimonialPage/TestimonialPage';
import CTAPage from './components/ctaPage/CTAPage';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className="background background-color">
      <NavBar />

      <IntroPage />

      <AboutPage id="about"/>

      <ProjectPage id="projects" />

      <TestimonialPage />
      <CTAPage id="contact"/>
    </div>
  );
}

export default App;
