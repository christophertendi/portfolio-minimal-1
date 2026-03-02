import './Skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frontend & Backend Development",
      skills: ["React.js", "Vite", "Node.js", "Express.js", "Nuxt.js"]
    },
    {
      title: "AI & Conversational Systems",
      skills: ["Dialogflow CX", "Chatbot Architecture", "Webhook Integration"]
    },
    {
      title: "Cloud & Deployment",
      skills: ["Vercel", "Hostinger", "Ngrok"]
    },
    {
      title: "Tools & Testing",
      skills: ["Git", "VS Code", "Wireshark", "Postman", "Google Analytics"]
    },
    {
      title: "Design",
      skills: ["Figma", "UI/UX"]
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
