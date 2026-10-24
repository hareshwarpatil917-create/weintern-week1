import Hero from "../components/Hero/Hero"
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer/Footer";
function Home(){
  return(
    <>
    <Hero/>
     <About />
      <Projects />
      <Contact />
      <Footer/>

      </>
  );
}
export default Home