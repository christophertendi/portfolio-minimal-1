import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-name">Christopher Tendi</p>
            <p className="footer-tagline">Full-Stack Developer & Data Scientist</p>
          </div>

          <div className="footer-links">
            <button onClick={() => scrollToSection('hero')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('experience')}>Experience</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>

          <div className="footer-social">
            <a href="https://github.com/christophertendi" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/christophersamueltendi/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://wa.me/6281290399539" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
            <a href="mailto:chris.samuelten@gmail.com">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Christopher Tendi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;