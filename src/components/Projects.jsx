import { ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Memory Books - Digital Scrapbook",
      company: "Personal Project",
      description: "In progress - A minimalist web application for couples to store and cherish memories. Features Firebase authentication, drag-and-drop polaroid-style photo cards, custom book cover designer, and real-time cloud sync with comprehensive security.",
      link: "https://memory-books.vercel.app",
      tech: ["React.js", "Vite", "Firebase", "Firestore", "Vercel"]
    },
    {
      title: "MPAS Corporate Website",
      company: "PT. Mitra Prana Abadi Sentosa",
      description: "Corporate website for oil & gas well testing company. Built with React.js, featuring product catalogs, service showcases, and interactive project modals.",
      link: "https://ptmpas.co.id",
      tech: ["React.js", "Vite", "Vercel", "Hostinger"]
    },
    {
      title: "Artex Business Website",
      company: "PT. Artex Maju Sentosa",
      description: "Complete website redesign for textile manufacturing company. End-to-end solution including UI/UX design, development, and deployment.",
      link: "https://artex.co.id",
      tech: ["React.js", "Figma", "Hosting"]
    },
    {
      title: "Fake News Detection with RNN",
      company: "BINUS International",
      description: "Research paper published at ICASTE 2022. Implemented RNN model for detecting fake news articles with high accuracy.",
      link: "https://drive.google.com/drive/folders/1Wb6PXolnnflctcVRPtjM-Bf6XaqqG9vf",
      tech: ["Python", "TensorFlow", "RNN", "NLP"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              
              <p className="project-company">{project.company}</p>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;