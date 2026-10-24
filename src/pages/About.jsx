import "./About.css";
function About() {
  return (
    <section className="about">
      <h1>About Me</h1>

      <div className="about-content">

        <div className="about-item">
          <h3>Name</h3>
          <p>Hareshwar Patil</p>
        </div>

        <div className="about-item">
          <h3>Education</h3>
          <p>B.Tech in Information Technology</p>
          <p>AISSMS Institute of Information Technology, Pune</p>
        </div>

        <div className="about-item">
          <h3>Location</h3>
          <p>Bhusawal, Maharashtra</p>
        </div>

        <div className="about-item">
          <h3>Skills</h3>
          <p>HTML, CSS, JavaScript, React, Git, GitHub</p>
        </div>

        <div className="about-item">
          <h3>Career Goal</h3>
          <p>
            I enjoy building responsive and user-friendly web
            applications while continuously improving my frontend
            development skills.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;