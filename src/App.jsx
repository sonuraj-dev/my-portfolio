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






export default function App(){
  return(


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
