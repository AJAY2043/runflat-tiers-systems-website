import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
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
    <div className="about-section" ref={aboutRef} style={{background:'orange'}}>
      {/* Header Section */}
      <div className={`about-header ${isVisible ? 'fade-in' : ''}`}>
        <h1><i className="fas fa-cogs"></i> Why Choose Runflat Tire Systems</h1>
        <p>Premium, reliable, and designed for your safety and cost-efficiency.</p>
      </div>

      {/* Steps Section */}
      <div className="about-steps">
        {/* Step 1 */}
        <div className={`step-card ${isVisible ? 'slide-in-left' : ''}`}>
          <i className="fas fa-road"></i>
          <h2>Step 01: Seamless Mobility</h2>
          <p>
            Runflat tire systems ensure you can keep moving even after a tire puncture.
            This feature eliminates the need for immediate stops, reducing downtime and 
            enhancing safety.
          </p>
        </div>

        {/* Step 2 */}
        <div className={`step-card ${isVisible ? 'slide-in-right' : ''}`}>
          <i className="fas fa-dollar-sign"></i>
          <h2>Step 02: Cost-Efficiency</h2>
          <p>
            While the initial investment might be higher, Runflat Systems save money in the
            long term by reducing maintenance and repair costs.
          </p>
        </div>

        {/* Step 3 */}
        <div className={`step-card ${isVisible ? 'slide-in-left' : ''}`}>
          <i className="fas fa-shield-alt"></i>
          <h2>Step 03: Enhanced Safety</h2>
          <p>
            Runflat Systems provide an extra layer of safety by allowing you to drive even after 
            a tire puncture, ensuring your journey is never compromised.
          </p>
        </div>
      </div>

      {/* Signature Section
      <div className={`about-signature ${isVisible ? 'fade-in' : ''}`}>
        <img src={vivek_sign} alt="Vivek Japala Signature" />
        <h3>Vivek Japala</h3>
        <p>Manager</p>
      </div> */}
    </div>
  );
};

export default About;
