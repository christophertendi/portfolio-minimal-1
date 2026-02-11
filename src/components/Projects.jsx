import { ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
        {
      title: "Safeguard AI",
      company: "Personal Project",
      description: " Real-time content moderation platform using Cloudflare Workers AI for text toxicity and image NSFW detection, with fallback classifiers. 100 - 200ms latency, $0 cost. Document upload, firebase integration and toggle dark/light mode soon.",
      link: "https://safeguard-dashboard-three.vercel.app/",
        tech: [
        "Cloudflare Workers AI",
        "React.js",
        "Vercel",
        "Supabase"
      ]
    },
    
    {
      title: "Insurance Chatbot",
      // company: "Asuransi Sinarmas",
      description:
        "An conversational AI system built using Dialogflow CX that functions as both a chatbot and voice-enabled talkbot, allowing users to interact via text or phone call. The project includes an internal Node.js server and HTML-based interface to run, test, and display the bot locally, with exploratory WhatsApp integration via Twilio. Toggle dark/light mode soon.",
      link: "https://drive.google.com/file/d/17Z3jMj5EC5EFAMprPcS4Tqae29qXs-f4/view?usp=sharing",
        tech: [
        "Dialogflow CX",
        "Node.js",
        "Chatbot/Talkbot",
        "Ngrok",
        "Twilio"
      ]
    },
    {
      title: "Memory Books - Digital Scrapbook",
      company: "Personal Project",
      description:
        "A minimalist web application for couples to store and cherish shared memories, featuring Firebase authentication, drag-and-drop polaroid-style photo cards, a custom book cover designer, real-time cloud sync, and secure data handling.",
      link: "https://memory-books.vercel.app",
      tech: ["React.js", "Vite", "Firebase", "Firestore", "Vercel"]
    },
    {
      title: "MPAS Corporate Website",
      company: "PT. Mitra Prana Abadi Sentosa",
      description:
        "A corporate website for an oil & gas well testing company, built with React.js and featuring structured product catalogs, service showcases, and interactive project modals for improved client engagement.",
      link: "https://ptmpas.co.id",
      tech: ["React.js", "Vite", "Vercel", "Hostinger"]
    },
    {
      title: "Artex Business Website",
      company: "PT. Artex Maju Sentosa",
      description:
        "A complete end-to-end website redesign for a textile manufacturing company, covering UI/UX design, frontend development, deployment, and performance optimization.",
      link: "https://artex.co.id",
      tech: ["React.js", "Figma", "Hosting"]
    },
    {
      title: "Fake News Detection with RNN",
      company: "BINUS International",
      description:
        "An academic research project published at ICASTE 2022 that implemented a Recurrent Neural Network (RNN) model to detect fake news articles with strong classification accuracy.",
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
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
