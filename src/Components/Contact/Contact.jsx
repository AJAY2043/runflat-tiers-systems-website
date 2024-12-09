import React, { useEffect, useState } from 'react';
import './Contact.css'; // Make sure you create the corresponding CSS file for styling
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver to trigger animations when the section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    const element = document.querySelector('.contact-section');
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className={`contact-section ${isVisible ? 'fade-in' : ''}`} style={{background:'red'}}> 
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Please reach out with any inquiries or feedback.</p>
        
        {/* {/* <div className="contact-details">
          <div className="contact-item">
            <FaMapMarkerAlt size={24} />
            <span>123 Main Street, City, Country</span>
          </div>
          <div className="contact-item">
            <FaPhone size={24} />
            <span>(+123) 456-7890</span>
          </div>
          <div className="contact-item">
            <FaEnvelope size={24} />
            <span>info@runflat.com</span>
          </div>
        </div> */}
      </div>

      <div className="contact-form">
        <h3>Get in Touch</h3>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
