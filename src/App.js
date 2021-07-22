import React from 'react';
import './App.css';
import ButtonOutline from './components/button-outline';
import HomeTitle from './components/home-title';
import Navbar from './components/navbar';
import Projects from './components/projects';
import arrowDown from './images/arrow-down.png';

function App() {
  return (
    <div className="bg-sky-stars bg-fixed bg-cover  h-full">
      <Navbar/>
      <div className="flex mt-40">
        <HomeTitle/>
      </div>
      <ButtonOutline/>
      <div className="mt-10">
        <img src={arrowDown} alt="arrow down" className="m-auto w-10"/>
      </div>
      <Projects/>
    </div>
  );
}

export default App;
