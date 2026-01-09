import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS Configuration - Load from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your .env file.');
      }
      
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'mauro.carlucci.araya@gmail.com',
        },
        publicKey
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const email = 'mauro.carlucci.araya@gmail.com';

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowEmailModal(true);
    setEmailCopied(false);
  };

  const handleCloseModal = () => {
    setShowEmailModal(false);
    setEmailCopied(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      // Reset state after 2 seconds to allow animation again
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    });
  };

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  // Close modal with ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showEmailModal) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showEmailModal]);

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mauro-carlucci-araya-5a2795212', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/maurocarlucci', icon: '🐙' },
    { name: 'Email', url: 'mauro.carlucci.araya@gmail.com', icon: '✉️', isEmail: true },
  ];

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <div className="contact__content">
          <div className="contact__info">
            <h3>Let's Talk!</h3>
            <p>
            I'm always open to new opportunities and interesting projects.
            If you have any questions or would like to collaborate, please don't hesitate to contact me.
            </p>
            <div className="contact__social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.isEmail ? undefined : "_blank"}
                  rel={social.isEmail ? undefined : "noopener noreferrer"}
                  onClick={social.isEmail ? handleEmailClick : undefined}
                  className="contact__social-link"
                >
                  <span className="contact__social-icon">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="form__group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message..."
              ></textarea>
            </div>
            {submitStatus === 'success' && (
              <div className="form__success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="form__error">
                ✗ There was an error sending your message. Please try again or contact me directly via email.
              </div>
            )}
            <button 
              type="submit" 
              className={`btn btn--primary btn--full ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="email-modal-overlay" onClick={handleCloseModal}>
          <div className="email-modal" onClick={(e) => e.stopPropagation()}>
            <button className="email-modal__close" onClick={handleCloseModal} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="email-modal__content">
              <div className="email-modal__icon">✉️</div>
              <h3 className="email-modal__title">My Email</h3>
              <div className="email-modal__email-container">
                <input
                  type="text"
                  readOnly
                  value={email}
                  className="email-modal__email-input"
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                />
                <button
                  className={`email-modal__copy-btn ${emailCopied ? 'copied' : ''}`}
                  onClick={handleCopyEmail}
                >
                  {emailCopied ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;

