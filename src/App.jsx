import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contacts from "./sections/Contacts";
import Footer from "./sections/Footer";
//import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";
import React from "react";






export default function App(){
  const [introDone,setIntroDone]=React.useState(false);
  return(
<>
{!introDone && <IntroAnimation onFinish={()=>setIntroDone(true)}/>}
{introDone && (
    <div className="relative gradient text-white">
          
          
          <CustomCursor/>
        {/*  <ParticlesBackground/> */}
          
          <NavBar/>
          <Home/>
          <About/>
          <Skills/>
          <Projects/>

          <Experience/>
          <Testimonials/>
          <Contacts/>
          <Footer/>




    </div>
  )
}
