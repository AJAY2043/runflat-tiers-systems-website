import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import { FaShieldAlt, FaCar, FaCogs, FaThumbsUp, FaUsers } from 'react-icons/fa';
import vivek_sign from '../Assets/vivek-sign.jpg';

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="about-section" ref={aboutRef} style={{background:'skyblue'}}>
      {/* Header Section */}
      <div className={`about-header ${isVisible ? 'fade-in' : ''}`}>
        <h1>Custom Runflat Solutions</h1>
        <p>Each Runflat System is custom-made to match client specifications and requirements.</p>
      </div>

      {/* Features Section */}
      <div className={`features ${isVisible ? 'slide-up' : ''}`}>
        <div className="feature">
          <FaShieldAlt className="feature-icon" />
          <h2>Seamless Mobility</h2>
          <p>Runflat tire systems ensure that drivers can keep moving safely even after a tire puncture...</p>
        </div>
        <div className="feature">
          <FaCar className="feature-icon" />
          <h2>Cost-Efficiency</h2>
          <p>While Runflat Systems may have a higher upfront cost, they offer long-term cost savings...</p>
        </div>
        <div className="feature">
          <FaCogs className="feature-icon" />
          <h2>Exceptional Performance</h2>
          <p>Our Runflat systems perform exceptionally well in challenging conditions, ensuring durability...</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className={`why-choose-us ${isVisible ? 'zoom-in' : ''}`}>
        <h2>Why Choose Runflat Tire Systems?</h2>
        <div className="steps">
          <div className="step">
            <FaThumbsUp className="step-icon" />
            <h3>Step: 01</h3>
            <p>Seamless Mobility ensures that your journey is uninterrupted, even in challenging circumstances.</p>
          </div>
          <div className="step">
            <FaUsers className="step-icon" />
            <h3>Step: 02</h3>
            <p>Cost-Efficiency allows for long-term savings by eliminating frequent tire changes and damage.</p>
          </div>
        </div>
      </div>

      {/* Signature Section */}
      <div className="signature">
        <img src={vivek_sign} alt="Vivek Japala" />
        <p>Vivek Japala - Manager</p>
      </div>
    </div>
  );
};

export default About;
