import React from 'react';
import LoadingPage from './components/loadingPage/LoadingPage';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import logo from './logo.svg';
import './App.css';
import IntroPage from './components/introPage/IntroPage';
import AboutPage from './components/aboutPage/AboutPage';
import ProjectPage from './components/projectPage/ProjectPage';
import TestimonialPage from './components/testimonialPage/TestimonialPage';
import CTAPage from './components/ctaPage/CTAPage';

function App() {
  return (
    <div className="background background-color">
      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={1}>
          <IntroPage />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <AboutPage />
        </ParallaxLayer>
        <ParallaxLayer factor={3} offset={2} speed={1}>
          <ProjectPage />
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={1}>
          <TestimonialPage />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1}>
          <CTAPage />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
