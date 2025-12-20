import './Skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Vite", "Node.js", "Nuxt.js"]
    },
    {
      title: "Data & AI",
      skills: ["Machine Learning", "Data Analysis", "TensorFlow", "NLP"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Vercel", "Hostinger", "API Integration"]
    },
    {
      title: "Design & Marketing",
      skills: ["Figma", "CapCut", "UI/UX", "Google Ads", "SEO"]
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Wireshark", "Google Analytics"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div key={index} className="skill-group">
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
