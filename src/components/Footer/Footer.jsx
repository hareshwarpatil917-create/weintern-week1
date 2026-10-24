import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h3>Hareshwar Patil</h3>

      <p>Frontend Developer</p>

      <div className="footer-links">

        <a
          href="https://github.com/hareshwarpatil917-create"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/hareshwar-patil-73a09535b"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:hareshwarpatil917@gmail.com">
          Email
        </a>

      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Hareshwar Patil. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;