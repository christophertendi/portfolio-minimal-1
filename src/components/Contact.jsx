import { useState, useRef } from 'react';
import { Mail, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import './Contact.css';
import {
  validateEmail,
  validateName,
  validateMessage,
  RateLimiter,
  secureFormSubmit
} from '../utils/security';
import { submitContactForm } from '../services/contactService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const rateLimiterRef = useRef(new RateLimiter(3, 60000)); // 3 attempts per minute

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear errors for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Clear submit error when user starts typing
    if (submitError) {
      setSubmitError('');
    }
    
    // Real-time validation
    let isValid = true;
    let errorMsg = '';
    
    if (name === 'name' && value.length > 0) {
      isValid = validateName(value);
      errorMsg = 'Only letters, spaces, hyphens, and apostrophes allowed';
    } else if (name === 'email' && value.length > 0) {
      isValid = validateEmail(value);
      errorMsg = 'Please enter a valid email address';
    } else if (name === 'message' && value.length > 0) {
      if (value.length < 10) {
        isValid = false;
        errorMsg = 'Message must be at least 10 characters';
      } else if (value.length > 5000) {
        isValid = false;
        errorMsg = 'Message must not exceed 5000 characters';
      }
    }
    
    // Show error if invalid
    if (!isValid && value.length > 0) {
      setErrors(prev => ({ ...prev, [name]: errorMsg }));
    }
    
    // Update form data (allow typing even if validation fails)
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    
    // Clear previous errors
    setErrors({});
    setSubmitError('');
    
    // Validate using secure form submit
    const validation = secureFormSubmit(formData, rateLimiterRef.current);
    
    if (!validation.success) {
      if (validation.error) {
        setSubmitError(validation.error);
      }
      if (validation.errors) {
        setErrors(validation.errors);
      }
      return;
    }
    
    // Use sanitized data
    const sanitizedData = validation.data;
    
    try {
      setIsSubmitting(true);
      
      // Submit to Firebase
      const result = await submitContactForm(sanitizedData);
      
      if (result.success) {
        // Show success message
        setShowSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Hide success message after 7 seconds
        setTimeout(() => setShowSuccess(false), 7000);
      } else {
        // Show error
        setSubmitError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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

          <div className="contact-form-container">
            <p className="form-subtitle">
              Send me a message and I'll get back to you as soon as possible
            </p>

            {showSuccess && (
              <div className="success-message">
                <CheckCircle size={20} />
                <div>
                  <strong>Message sent successfully!</strong><br />
                  Thank you for reaching out. I'll respond to your message soon.
                </div>
              </div>
            )}

            {submitError && (
              <div className="error-message">
                <AlertCircle size={20} />
                <span>{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  maxLength={100}
                  disabled={isSubmitting}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span className="field-error" id="name-error">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  maxLength={254}
                  disabled={isSubmitting}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span className="field-error" id="email-error">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project or inquiry..."
                  required
                  minLength={10}
                  maxLength={5000}
                  disabled={isSubmitting}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                <div className="char-count">
                  {formData.message.length} / 5000 characters
                </div>
                {errors.message && (
                  <span className="field-error" id="message-error">{errors.message}</span>
                )}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;