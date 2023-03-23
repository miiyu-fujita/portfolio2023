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
      <IntroPage />

      <AboutPage />

      <ProjectPage />

      <TestimonialPage />
      <CTAPage />
    </div>
  );
}

export default App;
