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
          Computer Science graduate pursuing Master's in Data Science. I build 
          scalable web applications with React and modern tools, while exploring 
          AI/ML and data-driven solutions.
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
