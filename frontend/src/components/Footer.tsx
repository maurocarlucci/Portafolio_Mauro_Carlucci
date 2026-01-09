import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__text">
            © {currentYear} Mi Portafolio. Todos los derechos reservados.
          </p>
          <p className="footer__text">
            Hecho con <span className="footer__heart">❤️</span> usando React y TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

