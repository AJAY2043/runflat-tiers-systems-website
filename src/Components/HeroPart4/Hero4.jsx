import React from 'react';
import hero_img4 from '../Assets/hero-img4.jpg'; // Ensure this path is correct
import './Hero4.css';

const Hero4 = () => {
  return (
    <div className="hero-container-section4">
      <div className="hero-box">
        <img src={hero_img4} alt="Hero 4" className="hero-img" />
      </div>
      <div className="hero-text-section4">
        <strong><p className="section4-text1">Experience the Future of Tires</p></strong>
      </div>
    </div>
  );
};

export default Hero4;
