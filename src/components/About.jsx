import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About</h2>
        
        <div className="about-content">
          <p>
            I'm a Computer Science graduate currently pursuing a Master's in Data Science 
            at Monash University. With over 3 years of professional experience, I've worked 
            across diverse industries including oil & gas, e-commerce, logistics, and fintech.
          </p>
          
          <p>
            My expertise spans full-stack web development using React.js and modern tools, 
            combined with a strong foundation in AI/ML, data analysis, and product management. 
            I'm passionate about creating scalable, user-centric solutions that drive real 
            business impact.
          </p>
        </div>

        <div className="education">
          <h3>Education</h3>
          
          <div className="edu-item">
            <div className="edu-header">
              <h4>Master of Data Science</h4>
              <span className="edu-period">Oct 2024 – Present</span>
            </div>
            <p className="edu-school">Monash University, Indonesia</p>
          </div>

          <div className="edu-item">
            <div className="edu-header">
              <h4>Bachelor of Computer Science</h4>
              <span className="edu-period">Sep 2020 – Aug 2024</span>
            </div>
            <p className="edu-school">BINUS International, Indonesia</p>
            <p className="edu-gpa">GPA: 3.71/4.0</p>
          </div>

          <div className="edu-item">
            <div className="edu-header">
              <h4>International Baccalaureate Diploma</h4>
              <span className="edu-period">Jul 2018 – Jun 2020</span>
            </div>
            <p className="edu-school">Singapore International School Kelapa Gading</p>
          </div>
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <ul>
            <li>AWS Academy Graduate - AWS Academy Cloud Foundations</li>
            <li>Digital Forensics Essentials (DFE) v1 - EC-Council</li>
          </ul>
        </div>

        <div className="languages">
          <h3>Languages</h3>
          <p>English (Native), Bahasa Indonesia (Native), Chinese (Basic Fluency)</p>
        </div>
      </div>
    </section>
  );
};

export default About;