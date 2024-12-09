import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCogs, faWrench, faBolt } from '@fortawesome/free-solid-svg-icons';
import './BeadLockSystems.css'; // Custom CSS file for styling, animations, and responsiveness

const BeadLockSystems = () => {
  return (
    <div className="beadlock-container">
      <Navbar />
      
      <div className="beadlock-content">
        <h1 className="title">Beadlock System</h1>
        <div className="intro-text">
          <p><strong>Email:</strong> sales@runflat.in</p>
          <p><strong>Logo:</strong> [Insert Logo Here]</p>
        </div>
        
        <h2 className="section-title">Introduction to Beadlock Systems</h2>
        <p className="section-description">
          A Beadlock system is a crucial component in military vehicles, designed to ensure that the tire remains securely attached to the wheel, even when operating under extreme conditions. This technology is vital for maintaining mobility, enhancing safety, and providing operational efficiency in diverse and challenging terrains.
        </p>

        <h2 className="section-title">How Beadlock Works:</h2>
        <p className="section-description">
          Beadlocks are devices that clamp the tire’s bead (the edge of the tire that sits on the wheel) to the wheel, preventing it from becoming detached or “unseated.” This is particularly important when operating at low tire pressures, which is common in off-road and tactical situations to increase traction and improve ride quality.
        </p>

        <h2 className="section-title">Applications in Military Vehicles</h2>
        <p className="section-description">
          Beadlock systems are essential for military vehicles operating in rough terrains where tire deflation is common. These systems allow vehicles to continue functioning optimally in harsh conditions, including combat zones, off-road operations, and extreme weather environments.
        </p>
        
        <div className="advantages">
          <h2 className="section-title">Advantages of Beadlock Systems</h2>
          <ul className="advantages-list">
            <li><FontAwesomeIcon icon={faShieldAlt} /> <strong>Enhanced Safety:</strong> Prevents tire detachment in extreme conditions.</li>
            <li><FontAwesomeIcon icon={faCogs} /> <strong>Operational Efficiency:</strong> Improves mobility in challenging terrains.</li>
            <li><FontAwesomeIcon icon={faBolt} /> <strong>Increased Traction:</strong> Allows for lower tire pressures, improving grip.</li>
            <li><FontAwesomeIcon icon={faWrench} /> <strong>Durability:</strong> Provides long-lasting performance in tough conditions.</li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BeadLockSystems;
