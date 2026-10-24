import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out if you'd like to collaborate or have any
        opportunities.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />

        <textarea
          rows="5"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;