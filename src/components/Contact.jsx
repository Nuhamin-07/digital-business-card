import NuhaminImg from "../images/Nuhamin1.JPG";

export default function Contact() {
  return (
    <>
      <img className="contact-img" src={NuhaminImg} alt="Contact Image" />
      <section className="section">
        <div className="contact-section">
          <h1>Nuhamin Gulilat</h1>
          <h2>Frontend Developer</h2>
          <div className="link-container">
            <a className="email-link" href="mailto:nuhamin.gulilat.7@gmail.com">
              <i className="fa-solid fa-envelope"></i>Email
            </a>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/nuhamin-gulilat-66635318b/"
            >
              <i className="fa-brands fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
