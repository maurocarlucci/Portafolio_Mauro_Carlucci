import './Hero.css';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const profileImageSrc = profileImage;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__name">Mauro Carlucci Araya</span>
          </h1>
          <h2 className="hero__subtitle">Computer Engineer
          </h2>
          <p className="hero__description">
          Experienced Computer Engineer with
a strong background in web
application development, Skilled in
building scalable solutions using
modern technologies. Recently
focused on developing AI-powered
applications, including LLM-based
platforms for data analysis and
workflow automation.

          </p>
          <div className="hero__buttons">
            <button 
              className="btn btn--primary"
              onClick={() => scrollToSection('proyectos')}
            >
              Projects
            </button>
            <button 
              className="btn btn--secondary"
              onClick={() => scrollToSection('contacto')}
            >
              Contact
            </button>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__avatar">
            {profileImageSrc ? (
              <div 
                className="hero__avatar-image"
                style={{ backgroundImage: `url(${profileImageSrc})` }}
              />
            ) : (
              <div className="hero__avatar-placeholder">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="100" fill="#e5e7eb"/>
                  <circle cx="100" cy="80" r="30" fill="#9ca3af"/>
                  <path d="M100 120 C70 120, 50 140, 50 170 L150 170 C150 140, 130 120, 100 120 Z" fill="#9ca3af"/>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-indicator"></div>
      </div>
    </section>
  );
};

export default Hero;

