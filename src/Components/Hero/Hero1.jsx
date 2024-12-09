import React from 'react';
import hero_img1 from '../Assets/hero-img1.jpg';
import './Hero1.css';

const Hero1 = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={hero_img1} alt="Hero" />
      </div>
      <div className="hero-text">
        <h1 className="text1" style={{color:'red'}}>WelCome To RunFlat Tiers Systems Website</h1>
        <h2 className="text2" style={{color:'gold'}}>Experience Innovation and Excellence</h2>
      </div>
    </div>
  );
}

export default Hero1;
