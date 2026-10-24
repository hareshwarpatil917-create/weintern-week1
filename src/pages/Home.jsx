import Hero from "../components/Hero/Hero"
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
function Home(){
  return(
    <>
    <Hero/>
     <About />
      <Projects />
      <Contact />
      </>
  );
}
export default Home