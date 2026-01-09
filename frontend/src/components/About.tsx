import './About.css';

const About = () => {
  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
            I am a developer passionate about technology and innovation.
I specialize in creating modern, scalable, and user-centric web applications.
            </p>
            <p>
            With experience in full-stack development, I enjoy working on both frontend and backend, always seeking best practices and the most suitable technologies for each project. I have also recently been training in AI using Azure services.
            </p>
            <p>
            My goal is to create solutions that not only work well, but also provide an excellent user experience and are maintainable in the long term.
            </p>
          </div>
          <div className="about__stats">
            <div className="stat">
              <h3 className="stat__number">3+</h3>
              <p className="stat__label">Years of experience</p>
            </div>
            <div className="stat">
              <h3 className="stat__number">4+</h3>
              <p className="stat__label">Projects completed</p>
            </div>
            <div className="stat">
              <h3 className="stat__number">10+</h3>
              <p className="stat__label">Technologies worked with</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

