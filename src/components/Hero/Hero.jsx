import { Link } from "react-router-dom";
import profileImage from "../../assets/images/profile.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      
      <div className="hero-left">

        <p>Hi, I'm</p>

        <h1>Hareshwar Patil</h1>

        <h2>Frontend Developer</h2>

        <p>I enjoy creating responsive and user-friendly web applications while continuously improving my frontend development skills.</p>
        
        
        <div className="hero-buttons">

    <Link to="/projects" className="primary-btn">
        View Projects
    </Link>
    <Link to="/contact" className="secondary-btn">
        Contact Me
    </Link>

</div>
      </div>

      <div className="hero-right">
<img src={profileImage} alt="Hareshwar patil"/>
      </div>

    </section>
  );
}

export default Hero;