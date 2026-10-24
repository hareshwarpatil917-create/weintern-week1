import "./Projects.css";

function Projects() {
  return (
    <section className="projects">

      <h2>My Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>Resume Builder</h3>
          <p>
            A web application to create professional resumes with multiple templates.
          </p>
      <h4>Technologies Used</h4>
<p>React, HTML, CSS, JavaScript,Flask</p>
          
        </div>

        <div className="project-card">
          <h3>Bag Store</h3>
          <p>
            An e-commerce website with product listing and shopping cart features.
          </p>
          <h4>Technologies Used</h4>
<p>React, HTML, CSS,JavaScript</p>

          
        </div>

        <div className="project-card">
          <h3>Personal Portfolio</h3>
          <p>
            A responsive portfolio website developed using React and Vite.
          </p>
          <h4>Technologies Used</h4>
<p>React, Vite, CSS</p>

         
        </div>

      </div>

    </section>
  );
}

export default Projects;