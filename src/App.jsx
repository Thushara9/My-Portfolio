import About from "./components/About";
import Contact from "./components/Contact";
import FallingStarsBackground from "./components/FallingStarsBackground ";
import Footer from "./components/Footer";



import Hero from "./components/Hero";
import Logo from "./components/Logo";
import LogoMarquee from "./components/LogoMarquee";
import Main from "./components/Main";


import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechnicalProficiency from "./components/TechnicalProficiency";
import Timeline from "./components/timelineData";
import Work from "./components/Work";

export default function App() {
  return (
   
   <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar/>
    <Hero/>
    <About/>
    {/* <Timeline/> */}
    <LogoMarquee/>
    {/* <Logo/> */}
    <TechnicalProficiency/>

    {/* <div className="container mx-auto px-4 w-[1250px]">
    <Projects/>
</div> */}

<Work/>
    
    <Contact/>

 
    {/* <FallingStarsBackground/> */}
    {/* <Main/> */}
<Footer/>
   
   </div>
   
  )
}