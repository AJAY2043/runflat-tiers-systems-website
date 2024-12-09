import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCog, faWeightHanging, faToolbox, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import './MilitaryWheels.css';  // Your custom CSS file for styling, animations, and responsiveness

const MilitaryWheels = () => {
  return (
    <div className="military-wheels-container">
      <Navbar />
      
      <div className="content">
        <h1 className="title">Military Wheels</h1>
        <div className="intro-text">
          <p><strong>Email:</strong> sales@runflat.in</p>
          <h3>Military Wheels</h3>
          <p>
            Military vehicles operate in some of the harshest and most demanding environments on the planet. To ensure their reliability and performance, every component must be designed and constructed to withstand extreme conditions. Among these components, the wheels play a crucial role in mobility, stability, and overall vehicle performance.
          </p>
          <p>
            The Military Wheels are Multi-Piece, enhancing the speed and ease of service in the field. These wheels are designed to handle vehicle loads ranging from 2000 Kilos to 5500 Kilos per wheel. We offer cost-effective solutions without compromising on quality and safety. Available in Aluminium or Steel, the steel wheel is more economical, while the aluminium wheel is lightweight yet strong.
          </p>
          
          <h3>Advantages</h3>
          <ul className="advantages-list">
            <li><FontAwesomeIcon icon={faShieldAlt} /> <strong>Durability:</strong> Built to withstand extreme environments.</li>
            <li><FontAwesomeIcon icon={faCog} /> <strong>Reliability:</strong> Designed for long-term, high-performance use.</li>
            <li><FontAwesomeIcon icon={faWeightHanging} /> <strong>Load Capacity:</strong> Handles vehicle loads between 2000 and 5500 kilos.</li>
            <li><FontAwesomeIcon icon={faToolbox} /> <strong>Serviceability:</strong> Easy to service in the field with multi-piece design.</li>
            <li><FontAwesomeIcon icon={faGlobeAmericas} /> <strong>Global Use:</strong> Ideal for military and heavy-duty operations worldwide.</li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MilitaryWheels;
