import React, { useState } from 'react';
import './Navbar.css';
import Runflat_logo from '../Assets/run-flat-logo.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAboutUsDropdown = () => setIsAboutUsOpen(!isAboutUsOpen);
  const toggleServicesDropdown = () => setIsServicesOpen(!isServicesOpen);

  return (
    <div>
      <div className="main-nav">
        {/* Marquee Section */}
        <div className="nav-scroll-marquee">
  <p className="scroll-text">🚗 Welcome To Run Flat Tire Systems! 🚗</p>
</div>


        {/* Navbar Section */}
        <div className="navbar">
          <div className="nav-logo">
            <Link to="/">
              <img src={Runflat_logo} alt="Runflat Logo" width="120" />
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="nav-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
          </div>

          {/* Menu Links */}
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-item">
              <span onClick={toggleAboutUsDropdown}>
                About Us <FontAwesomeIcon icon={faChevronDown} />
              </span>
              {isAboutUsOpen && (
                <div className="dropdown">
                  <Link to="/company" style={{color:'blue'}}>Company</Link>
                  <Link to="/ourteam" style={{color:'blue'}}>Our Team</Link>
                  <Link to="/news" style={{color:'orange'}}>News</Link>
                  <Link to="/markets" style={{color:'orange'}}>Market</Link>
                  <Link to="/material" style={{color:'green'}}>Material</Link>
                  <Link to="/strengths" style={{color:'green'}}>Strength</Link>
                </div>
              )}
            </div>

            <div className="nav-item">
              <span onClick={toggleServicesDropdown}>
                Our Services <FontAwesomeIcon icon={faChevronDown} />
              </span>
              {isServicesOpen && (
                <div className="dropdown">
                  <Link to="/runflat-tires" style={{color:'blue'}}>Runflat Tires Systems</Link>
                  <Link to="/military-runflat-tires" style={{color:'blue'}}>Military Runflat Tires Systems</Link>
                  <Link to="/beadlock-systems" style={{color:'orange'}}>Beadlock Systems</Link>
                  <Link to="/heavy-duty-wheels" style={{color:'green'}}>Heavy-duty Wheels</Link>
                  <Link to="/military-wheels" style={{color:'green'}}>Military Wheels</Link>
                </div>
              )}
            </div>

            <div className="nav-item">
              <Link to="/credentials" style={{color:'orange'}}>Credentials</Link>
            </div>
            <div className="nav-item">
              <Link to="/resources" style={{color:'orange'}}>Resources</Link>
            </div>
            <div className="nav-item">
              <Link to="/contactus" style={{color:'green'}}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
