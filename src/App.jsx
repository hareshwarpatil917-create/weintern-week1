import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { FaDeaf } from "react-icons/fa";
import Navbar from "./components/Navbar/Navbar";

function App(){
  return(
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
    
    </BrowserRouter>
  );
}
export default App