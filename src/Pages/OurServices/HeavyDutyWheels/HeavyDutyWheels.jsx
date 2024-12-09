import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCog, faHammer, faTruck, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import './HeavyDutyWheels.css';  // Make sure this CSS file includes necessary styles for responsiveness, animations, and general layout

const HeavyDutyWheels = () => {
  return (
    <div className="heavy-duty-wheels">
      <Navbar />

      <div className="content">
        <header className="header">
          <h1 className="title">Heavy Duty Wheels</h1>
          <p className="description">
            Heavy duty wheels are built to withstand significant weight, ensuring stability and safety of armored vehicles. 
            They are engineered with reinforced structures to handle high load capacities without compromising performance.
          </p>
        </header>

        <section className="product-details">
          <div className="details-text">
            <p>
              Heavy Duty Wheels are available for all the popular armored vehicles on the market, and can be customized based on the customer's requirements.
            </p>
            <p>
              All our heavy duty wheels are designed to enhance the compatibility of our Runflat Systems with maximum load ratings possible per wheel 
              without compromising the structural safety of the wheel drum & disc. The load rating of 2000 Kilos per wheel is provided for the requirements of our customers.
            </p>
          </div>

          <div className="features">
            <div className="feature-item">
              <FontAwesomeIcon icon={faShieldAlt} className="icon" />
              <h3>Durability</h3>
              <p>Made from robust materials, heavy duty wheels are resistant to wear and tear, impact, and extreme conditions, ensuring long-term performance.</p>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faCog} className="icon" />
              <h3>Customization</h3>
              <p>Our wheels are customizable to fit various armored vehicles, providing the perfect solution for different operational needs.</p>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faHammer} className="icon" />
              <h3>High Load Capacity</h3>
              <p>Designed for heavy loads, our wheels are engineered to carry up to 2000 kilos per wheel, providing stability even under extreme weight.</p>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faTruck} className="icon" />
              <h3>Enhanced Mobility</h3>
              <p>The rugged design ensures that vehicles maintain superior mobility and safety, even in the most challenging terrains.</p>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faWeightHanging} className="icon" />
              <h3>Weight Optimized</h3>
              <p>We focus on creating lightweight wheels that do not compromise on strength, allowing for efficient performance while reducing the overall weight of the vehicle.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HeavyDutyWheels;
