import React, { useEffect, useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCog, faCheckCircle, faBolt, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import './MilitaryRunFlatSystems.css';  // Custom CSS file for animations and responsiveness

const MilitaryRunFlatSystems = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Add delay for smooth loading animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`container ${isLoaded ? 'loaded' : ''}`}>
      <Navbar />
      <div className="hero-section">
        <h1>Military Runflat System</h1>
        <p>
          Military Runflat Systems are critical components for vehicles operating in demanding environments, such as military, law enforcement, and special operations. These systems are designed to maintain vehicle mobility and safety even after tire deflation or severe damage.
        </p>
        <p>
          When the success of your mission is on the line, trust in our Military RunFlat Systems to deliver the reliability, durability, and performance that you need to accomplish your objectives. Gain the confidence to traverse any terrain and overcome any obstacle with our battle-tested solutions.
        </p>
      </div>
      <div className="advantages">
        <h2>Advantages</h2>
        <div className="advantage-item">
          <FontAwesomeIcon icon={faShieldAlt} size="2x" />
          <h3>Operational Continuity</h3>
          <p>
            These systems allow vehicles to continue moving after a tire is damaged, which is crucial in high-risk environments where stopping could lead to vulnerability or mission failure.
          </p>
        </div>
        <div className="advantage-item">
          <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          <h3>Enhanced Safety</h3>
          <p>
            They provide a critical safety margin, allowing vehicles to escape from dangerous situations, such as combat zones or areas with explosive threats, even with damaged tires.
          </p>
        </div>
        <div className="advantage-item">
          <FontAwesomeIcon icon={faBolt} size="2x" />
          <h3>Weight Optimized</h3>
          <p>
            The Runflat System weighs less so that you can carry more payload without the risk of overloading.
          </p>
        </div>
        <div className="advantage-item">
          <FontAwesomeIcon icon={faCog} size="2x" />
          <h3>Finabel Compliant</h3>
          <p>
            Our Runflats comply with Finabel standards, ensuring high-performance and safety in various military operations.
          </p>
        </div>
        <div className="advantage-item">
          <FontAwesomeIcon icon={faWeightHanging} size="2x" />
          <h3>Durability</h3>
          <p>
            Battle-tested and designed to last, our Runflat Systems ensure durability under extreme conditions and continuous use.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MilitaryRunFlatSystems;
