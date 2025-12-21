import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
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
    <section id="hero" className="hero">
      <div className="container">
        <p className="greeting">Hi, I'm</p>
        
        <h1 className="name">Christopher Samuel Tendi</h1>
        
        <p className="tagline">Full-Stack Developer & Product Management</p>
        
        <p className="bio">
          Computer Science graduate pursuing Master's in Data Science with 3+ years of 
          software development and product management experience. Proven track record in 
          AI/ML implementation, content moderation systems, and full-stack web development.
        </p>
        
        <div className="hero-actions">
          <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
            View Projects
            <ArrowRight size={16} />
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
            Contact Me
          </button>
        </div>
        
        <div className="social-links">
          <a 
            href="https://github.com/christophertendi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/christophersamueltendi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <Linkedin size={20} />
          </a>
          {/* <a 
            href="https://wa.me/6281290399539"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </a> */}
          <a 
            href="mailto:chris.samuelten@gmail.com"
            className="social-link"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="stats">
          <div className="stat">
            <span className="stat-value">3+</span>
            <span className="stat-label">years</span>
          </div>
          <div className="stat">
            <span className="stat-value">9</span>
            <span className="stat-label">roles</span>
          </div>
          <div className="stat">
            <span className="stat-value">15+</span>
            <span className="stat-label">technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;