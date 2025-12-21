import { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:chris.samuelten@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
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
              {/* <div className="contact-item">
                <Phone size={18} />
                <a href="https://wa.me/6281290399539" target="_blank" rel="noopener noreferrer">
                  +62 812-9039-9539
                </a>
              </div> */}
              <div className="contact-item">
                <MapPin size={18} />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <p className="form-subtitle">
              Fill out the form and your email client will open with your message
            </p>

            {showSuccess && (
              <div className="success-message">
                <span className="success-icon">✓</span>
                <div>
                  <strong>Form submitted!</strong><br />
                  Your email client should open. If not, please email me directly.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;