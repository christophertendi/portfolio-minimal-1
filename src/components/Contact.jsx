import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:chris.samuelten@gmail.com?subject=Contact from Portfolio&body=Hi Christopher,%0D%0A%0D%0A';
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              Feel free to reach out for opportunities, collaborations, or just to say hi!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:chris.samuelten@gmail.com">chris.samuelten@gmail.com</a>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <p className="cta-text">
              Ready to start a conversation? Click the button below to send me an email directly.
            </p>
            <button onClick={handleEmailClick} className="btn btn-primary">
              Send Email
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;