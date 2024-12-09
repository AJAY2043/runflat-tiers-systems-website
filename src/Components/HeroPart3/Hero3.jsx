import React from 'react';
import hero_img3 from '../Assets/hero-img3.jpg'; // Ensure this path is correct
import './Hero3.css';

const Hero3 = () => {
  return (
    <div className="hero-container-section3">
      <div className="hero-box">
        <img src={hero_img3} alt="Hero 3" className="hero-img" />
      </div>
      <div className="hero-text-section3">
        <strong><p className="section3-text1" style={{ color: 'gold' }}>Quality That You Can Trust</p></strong>
      </div>
    </div>
  );
};

export default Hero3;
