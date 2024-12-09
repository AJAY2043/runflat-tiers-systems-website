import React from 'react';
import hero_img2 from '../Assets/hero-img2.jpg'; // Ensure this path is correct
import './Hero2.css';

const Hero2 = () => {
  return (
    <div className="hero-container-section2">
      <div className="hero-image2">
        <img src={hero_img2} alt="Hero 2"/>
      </div>
      <div className="hero-text-section2">
        <strong><h3 className="section2-text1" style={{color:'orange'}}>Driving Innovation Forward</h3></strong>
      </div>
    </div>
  );
};

export default Hero2;
