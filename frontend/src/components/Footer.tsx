import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__text">
            © {currentYear} Mauro Carlucci Professional Portfolio.
          </p>
          <p className="footer__text">
            Made using React and TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

