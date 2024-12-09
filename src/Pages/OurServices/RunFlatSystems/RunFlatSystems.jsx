import React, { useEffect, useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCogs, faDollarSign, faCheckCircle, faToolbox } from '@fortawesome/free-solid-svg-icons';
import './RunFlatSystems.css';  // Make sure to create or update your CSS file to include the styles

const RunFlatSystems = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Simulate delayed loading for better UX
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`runflat-container ${isLoaded ? 'loaded' : 'loading'}`}>
      <Navbar />
      
      <div className="runflat-content">
        <h1 className="section-title">RUNFLAT Systems</h1>
        
        <div className="features-container">
          <div className="feature">
            <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
            <h3>Peace of Mind</h3>
            <p>Our RUNFLAT Systems have been rigorously tested for performance, ensuring you're always safe on the road.</p>
          </div>
          
          <div className="feature">
            <FontAwesomeIcon icon={faCogs} className="feature-icon" />
            <h3>Material Superiority</h3>
            <p>Years of innovation in ballistic composite technology ensure our RUNFLATS last longer and don't degrade over time.</p>
          </div>
          
          <div className="feature">
            <FontAwesomeIcon icon={faDollarSign} className="feature-icon" />
            <h3>Cost Efficiency</h3>
            <p>Enjoy the best prices in the market without compromising on quality—more savings for you!</p>
          </div>
          
          <div className="feature">
            <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
            <h3>Easy Installation</h3>
            <p>Our systems are easy to install without complex tools or prior training, getting you back on the road quickly.</p>
          </div>
          
          <div className="feature">
            <FontAwesomeIcon icon={faToolbox} className="feature-icon" />
            <h3>Versatility</h3>
            <p>Our 2 or 3 segment systems are compatible with a wide range of vehicles, providing flexibility to meet your needs.</p>
          </div>
        </div>
        
        <div className="quote-section">
          <button className="quote-button">Request A Quote</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RunFlatSystems;
