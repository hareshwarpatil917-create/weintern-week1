import "./About.css";

function About() {
  return (
    <section className="about">

      <h2>About Me</h2>

      <p className="about-text">
        I'm Hareshwar Patil, a B.Tech Information Technology student
        with a strong interest in frontend web development. I enjoy
        building responsive websites using HTML, CSS, JavaScript and
        React while continuously improving my problem-solving skills.
      </p>

      <div className="education">

        <h3>Education</h3>

        <p>
          <strong>B.Tech in Information Technology</strong>
        </p>

        <p>
          AISSMS Institute of Information Technology, Pune
        </p>

      </div>

      <h3 className="skills-heading">My Skills</h3>

      <div className="skills-container">

        <div className="skill-card">
          <h4>Frontend</h4>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>

        <div className="skill-card">
          <h4>Programming</h4>
          <p>Java</p>
          <p>Python</p>
          <p>C++</p>
        </div>

        <div className="skill-card">
          <h4>Database</h4>
          <p>MySQL</p>
          <p>SQL Server</p>
        </div>

        <div className="skill-card">
          <h4>Tools</h4>
          <p>Git</p>
          <p>GitHub</p>
          <p>VS Code</p>
        </div>

      </div>

    </section>
  );
}

export default About;