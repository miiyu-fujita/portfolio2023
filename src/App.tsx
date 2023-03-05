import React from 'react';
import LoadingPage from './components/loadingPage/LoadingPage';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import logo from './logo.svg';
import './App.css';
import IntroPage from './components/introPage/IntroPage';
import AboutPage from './components/aboutPage/AboutPage';

function App() {
  return (
    <div className="background background-color">
      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5}>
          <IntroPage />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <AboutPage />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
