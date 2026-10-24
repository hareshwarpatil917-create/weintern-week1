import "./Projects.css";

function Projects() {
  return (
    <section className="projects">

      <h2>Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>Resume Builder</h3>
          <p>
            A web application to create professional resumes with multiple templates.
          </p>

          <a href="#">View Project</a>
        </div>

        <div className="project-card">
          <h3>Bag Store</h3>
          <p>
            An e-commerce website with product listing and shopping cart features.
          </p>

          <a href="#">View Project</a>
        </div>

        <div className="project-card">
          <h3>Personal Portfolio</h3>
          <p>
            A responsive portfolio website developed using React and Vite.
          </p>

          <a href="#">View Project</a>
        </div>

      </div>

    </section>
  );
}

export default Projects;