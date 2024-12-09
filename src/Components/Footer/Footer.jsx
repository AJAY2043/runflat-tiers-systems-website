import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3>Runflat Tire Systems</h3>
          <p>Industry-leading specialist in custom RUNFLAT tires based out of Hyderabad, India.</p>
          <p>Delivering safety and durability with every drive.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <Link to='/'><p><strong>Home</strong></p></Link>
            <Link to='/company'><p><strong>About Us</strong></p></Link>
            <Link to='/resources'><p><strong>Our Services</strong></p></Link>
            <Link to='/contactus'><p><strong>Contact Us</strong></p></Link>
          </ul>
        </div>

        {/* Services Links */}
        <div className="footer-section services-links">
          <h4>Our Services</h4>
          <ul>
             <Link to='/runflatsystems'><p><strong>RUNFLAT Systems</strong></p></Link>
             <Link to='/militaryrunflatsystem'><p><strong>Military Runflat System</strong></p></Link>
             <Link to='/beadlocksystem'><p><strong>Beadlock System</strong></p></Link>
             <Link to='/heavydutywheels'><p><strong>Heavy Duty Wheels</strong></p></Link>
             <Link to='/militarywheels'><p><strong>Military Wheels</strong></p></Link>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.linkedin.com/company/runflat-tire-systems/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Runflat Tire Systems . All rights reserved.</p>
        <p>Privacy Policy | Terms & Conditions | Site Map</p>
      </div>

      {/* Scroll to Top Button */}
      <div className="scroll-to-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </footer>
  );
};

export default Footer;
  