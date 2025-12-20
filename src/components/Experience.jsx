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
      period: "Nov 2025 – Present",
      website: "https://ptmpas.co.id",
      tech: ["React.js", "Vite", "Vercel", "Hostinger", "Google Search Console"],
      current: true,
      details: [
        "Developed and deployed comprehensive corporate website for oil & gas well testing company",
        "Managed complete technology stack with Vercel deployment and Hostinger for custom domain",
        "Designed responsive UI with product catalogs, service pages, and interactive project modals",
        "Implemented Google Drive integration and SEO optimization using Google Search Console",
        "Created mobile-responsive navigation with social media integration"
      ]
    },
    {
      title: "Business Development",
      company: "PT. Artex Maju Sentosa",
      period: "Oct 2025 – Present",
      website: "https://artex.co.id",
      tech: ["Sales", "Google Ads", "Meta Ads", "Google Tag Manager", "Google Search Console", "Figma", "CapCut"],
      current: true,
      details: [
        "Implemented Google Tag Manager for comprehensive conversion tracking",
        "Monitor website performance achieving 746 impressions and 35 clicks with 4.7% average CTR",
        "Conduct traditional sales outreach and lead generation across Jakarta",
        "Create and manage social media content across Instagram, LinkedIn, and RedNote",
        "Manage Google Ads campaigns achieving 58% absolute top of page rate with 336K impressions",
        "Optimize ad performance with average CPC of Rp190 and Rp2.16M budget"
      ]
    },
    {
      title: "Freelance AI Trainer",
      company: "Softage AI",
      period: "Jun – Oct 2025",
      tech: ["AI Training", "Data Curation"],
      details: [
        "Curate high-quality training data for AI models across VS Code and Canva",
        "Develop screen recording solutions for model training optimization"
      ]
    },
    {
      title: "IT Product Specialist",
      company: "J&T Cargo (PT. Global Jet Cargo)",
      period: "Mar – Jun 2025",
      tech: ["Logistics", "IT Product", "API Integration"],
      details: [
        "Assisted in migrating over 150 workflow approvals to in-house applications",
        "Contributed to API integration coding for new internal logistics features"
      ]
    },
    {
      title: "Data Annotator (AI Enabling CX)",
      company: "WIZ AI (PT. Wiz Technology Indonesia)",
      period: "Nov 2024 – Feb 2025",
      tech: ["AI Interpretation", "Quality Control", "Translation"],
      details: [
        "MenuSifu Regional Team supporting AI-enabled customer experience",
        "Translation and error annotation from Bahasa Indonesia to English",
        "Managed AI translation quality control processes",
        "Conducted AI audio translation testing with comprehensive test calls",
        "Developed SOPs and trained external teams on data annotation"
      ]
    },
    {
      title: "Regional Product Management Intern",
      company: "Sea Labs Indonesia (Shopee)",
      period: "Jun – Sep 2024",
      tech: ["Content Moderation", "Quality Control", "Data Query"],
      details: [
        "Content Trust and Safety Regional Team overseeing Southeast Asia",
        "Managed daily moderation quality control for Shopee Live across 5 regions",
        "Reviewed over 5,000 Shopee Live sticker violations for platform compliance",
        "Executed data queries for pre-recorded violations (Malaysia and Thailand)",
        "Formulated strategic improvements for manual QC moderation systems",
        "Conducted manual QC for Top Video Evaluation across Indonesia, Thailand, Vietnam"
      ]
    },
    {
      title: "Full-Stack Web Developer",
      company: "PT. Artex Maju Sentosa",
      period: "Sep 2023 – Oct 2024",
      website: "https://artex.co.id",
      tech: ["Figma", "React.js", "Hostinger", "Google Search Console"],
      details: [
        "End-to-end website development: designed (Figma), programmed (React.js), deployed",
        "Implemented responsive design principles",
        "Optimized site performance using Google Search Console",
        "Delivered project within timeline improving online presence"
      ]
    },
    {
      title: "Technical Consultant Intern",
      company: "PT. Phincon",
      period: "Feb 2023 – Feb 2024",
      tech: ["Genesys Framework", "Wireshark", "Testing"],
      details: [
        "CIMB Contact Center Solutions team",
        "Tested agent inbound and outbound calls in Genesys Workspace Development",
        "Tested VOIP file integrity using Wireshark for newly deployed systems",
        "Performed comprehensive testing of IVR flows and voice files",
        "Tested CIMB online and WhatsApp chatbot functionality"
      ]
    },
    {
      title: "Frontend Web Developer Intern",
      company: "Digiasia Bios (PT. Solusi Pasti Indonesia)",
      period: "Aug – Sep 2022",
      tech: ["Nuxt.js"],
      details: [
        "Kaspro (digital payment platform) frontend programming team",
        "Developed customer account management features with 4 core actions: lock, unlock, suspend, unsuspend"
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