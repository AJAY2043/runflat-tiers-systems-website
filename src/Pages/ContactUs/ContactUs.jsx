import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import page_hero_img from '../../Components/Assets/page-hero-img1.jpg';
import './ContactUs.css';  // Custom CSS file for animations, styling, and responsiveness

const ContactUs = () => {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="contact-us-container">
      <Navbar />

      {/* Hero Section with Animation */}
      <div className="hero-section">
        <img src={page_hero_img} alt="Contact Us" className="hero-img" />
        <div className="hero-text animate__animated animate__fadeIn">
          <h1>Get In Touch</h1>
          <p>We’d love to hear your thoughts and answer any questions you may have!</p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info">
        <div className="info-box animate__animated animate__fadeInLeft">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
          <h3>Address</h3>
          <p>Plot No. 9/6/A, Road No. 5, Industrial Park Nacharam, Hyderabad, 500020.</p>
        </div>

        <div className="info-box animate__animated animate__fadeInRight">
          <FontAwesomeIcon icon={faPhoneAlt} className="info-icon" />
          <h3>Call Us</h3>
          <p>+91 9959902433 <br /> +91 9704622433</p>
        </div>

        <div className="info-box animate__animated animate__fadeInLeft">
          <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
          <h3>Mail Us</h3>
          <p>sales@runflat.in <br /> tech@runflat.in</p>
        </div>
      </div>

      {/* Contact Form with Animation */}
      <div className="contact-form">
        <h2 className="form-title">Send Your Message to Us</h2>
        <form onSubmit={handleSubmit} className="form-container animate__animated animate__fadeInUp">
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Phone" required />
          </div>
          <textarea name="message" placeholder="Message goes here" rows="4" required></textarea>
          <button type="submit" className="submit-btn">SEND MESSAGE</button>
        </form>

        {formSent && <div className="success-message animate__animated animate__fadeIn">Your message has been sent successfully!</div>}
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
