import React from 'react';
import LoadingPage from './components/loadingPage/LoadingPage';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="background background-color">
      <Parallax pages={5}>
        <ParallaxLayer></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
