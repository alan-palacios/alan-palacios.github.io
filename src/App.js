import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import ButtonIcon from './components/button-icon';
import ButtonOutline from './components/button-outline';
import Contact from './components/contact';
import Footer from './components/footer';
import HomeTitle from './components/home-title';
import Navbar from './components/navbar';
import Projects from './components/projects';
import arrowDown from './images/arrow-down.png';

function App() {
  const particlesParams ={
    particles:{
      number:{
        value:250,
        density:{
          enable: true,
          value_area:800
        }
      },
      move:{
        direction:"bottom-right",
        speed:1,
        random:true,
        bounce:false,
        straight:true,
        out_mode: "out"
      },
      color: {
        value: "#e5e5e5"
      },
      line_linked:{
        enable:false
      },
      opacity:{
        value:1
      },
      size:{
        value:1,
        random:true
      }
    }
  }
  return (
    <div id="Home">
      <Navbar/>
      <Particles params={particlesParams} className="fixed top-0 h-screen -z-10 min-h-full min-w-full bg-cover bg-no-repeat"/>
      <div className="bg-gradient-to-tl from-black to-blue-dark bg-fixed bg-cover  h-full w-full -z-20 fixed top-0" ></div>
      <div className="flex mt-40" >
        <HomeTitle/>
      </div>
      <ButtonOutline linkTo="Projects"/>
      <div className="mt-10">
        <ButtonIcon classes="m-auto p-5" src={arrowDown} linkTo="Projects"/>
      </div>
      <div id="Projects" className="flex mt-20">
        <Projects />
      </div>
      <div id="Contact" className="flex mt-20">
        <Contact/>
      </div>
      <div className="mt-36 mb-5">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
