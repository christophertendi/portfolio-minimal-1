import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const experiences = [
    {
      title: "Freelance Full-Stack Web Developer",
      company: "PT. Mitra Prana Abadi Sentosa (MPAS)",
      period: "Dec 2024 – Present",
      website: "https://ptmpas.co.id",
      tech: ["React.js", "Vite", "Vercel", "Hostinger"],
      current: true,
      details: [
        "Developed corporate website for oil & gas well testing company",
        "Managed complete technology stack with Vercel deployment",
        "Designed responsive UI with product catalogs and project modals",
        "Implemented Google Drive integration and SEO optimization"
      ]
    },
    {
      title: "Business Development",
      company: "PT. Artex Maju Sentosa",
      period: "Oct 2025 – Present",
      website: "https://artex.co.id",
      tech: ["Google Ads", "GTM", "Figma", "CapCut"],
      current: true,
      details: [
        "Implemented Google Tag Manager for conversion tracking",
        "Monitor website performance achieving 4.7% average CTR",
        "Create social media content across Instagram, LinkedIn, RedNote",
        "Manage Google Ads campaigns with 336K impressions"
      ]
    },
    {
      title: "Freelance AI Trainer",
      company: "Softage AI",
      period: "Jun 2025 – Present",
      tech: ["AI Training", "Data Curation"],
      current: true,
      details: [
        "Curate training data for AI models",
        "Develop screen recording solutions for model training"
      ]
    },
    {
      title: "IT Product Specialist",
      company: "J&T Cargo",
      period: "Mar – Jun 2025",
      tech: ["Logistics", "API Integration"],
      details: [
        "Migrated 150+ workflow approvals to in-house applications",
        "Contributed to API integration for logistics features"
      ]
    },
    {
      title: "Data Annotator",
      company: "WIZ AI",
      period: "Nov 2024 – Feb 2025",
      tech: ["AI", "Quality Control"],
      details: [
        "Translation and error annotation for AI training data",
        "Managed AI translation quality control processes",
        "Developed SOPs for data annotation"
      ]
    },
    {
      title: "Regional PM Intern",
      company: "Sea Labs Indonesia (Shopee)",
      period: "Jun – Sep 2024",
      tech: ["Content Moderation", "Data Query"],
      details: [
        "Content Trust and Safety across Southeast Asia",
        "Managed quality control for Shopee Live across 5 regions",
        "Reviewed 5,000+ violations for platform compliance"
      ]
    },
    {
      title: "Full-Stack Web Developer",
      company: "PT. Artex Maju Sentosa",
      period: "Sep 2023 – Oct 2024",
      website: "https://artex.co.id",
      tech: ["React.js", "Figma"],
      details: [
        "End-to-end website development and deployment",
        "Implemented responsive design principles",
        "Optimized site performance"
      ]
    },
    {
      title: "Technical Consultant Intern",
      company: "PT. Phincon",
      period: "Feb 2023 – Feb 2024",
      tech: ["Genesys", "Wireshark"],
      details: [
        "CIMB Contact Center Solutions team",
        "Testing of agent calls in Genesys Workspace",
        "VOIP file integrity testing"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Digiasia Bios",
      period: "Aug – Sep 2022",
      tech: ["Nuxt.js"],
      details: [
        "Kaspro payment platform frontend team",
        "Developed account management features"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-item">
              <div className="exp-main">
                <div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-company">
                    {exp.company}
                    {exp.website && (
                      <>
                        {' '}
                        <a href={exp.website} target="_blank" rel="noopener noreferrer" className="exp-link">
                          <ExternalLink size={14} />
                        </a>
                      </>
                    )}
                  </p>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              
              <div className="exp-tech">
                {exp.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

              {exp.details && (
                <>
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="exp-toggle"
                  >
                    {expanded[index] ? 'Show less' : 'Show more'}
                  </button>
                  
                  {expanded[index] && (
                    <ul className="exp-details">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
