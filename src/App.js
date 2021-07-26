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
        speed:0.5,
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
      <div className="min-h-screen">
        <div className="absolute inset-0 flex" >
          <HomeTitle/>
        </div>
        <div className="m-auto mb-5 absolute inset-x-0 bottom-0.5 flex">
          <div className="m-auto">
            <ButtonOutline linkTo="Projects" classes="hidden
                            "/>
            <ButtonIcon classes="m-auto p-5" src={arrowDown} linkTo="Projects" width="md:w-12"/>
          </div>
        </div>
      </div>

      <div id="Projects" className="flex pt-20  min-h-screen lg:pt-24 2xl:pt-24">
        <Projects />
      </div>

      <div id="Contact" className="flex pt-20 min-h-screen relative lg:pt-24 2xl:pt-24">
        <Contact/>
        <div className="absolute bottom-0 inset-x-0 pb-5">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
