import React from 'react';
import { Link } from 'react-router-dom';
import { FaCogs, FaShieldAlt, FaTools, FaTruck, FaWrench } from 'react-icons/fa';
import './Products.css';

const servicesData = [
  {
    id: 1,
    title: 'RUNFLAT Systems',
    description: 'Reliable and durable RunFlat systems for all-terrain support and safety.',
    icon: <FaCogs />,
    link: '/runflatsystems',
  },
  {
    id: 2,
    title: 'Military Runflat System',
    description: 'Specialized RunFlat systems for military vehicles, ensuring performance under extreme conditions.',
    icon: <FaShieldAlt />,
    link: '/militaryrunflatsystem',
  },
  {
    id: 3,
    title: 'Beadlock System',
    description: 'Beadlock systems for secure, high-performance tire mounting solutions.',
    icon: <FaTools />,
    link: '/beadlocksystem',
  },
  {
    id: 4,
    title: 'Heavy Duty Wheels',
    description: 'Rugged and durable heavy-duty wheels designed for maximum strength and longevity.',
    icon: <FaTruck />,
    link: '/heavydutywheels',
  },
  {
    id: 5,
    title: 'Military Wheels',
    description: 'Military-grade wheels engineered to withstand the toughest terrains and conditions.',
    icon: <FaWrench />,
    link: '/militarywheels',
  },
];

const OurProducts = () => {
  return (
    <section className="services-section" style={{background:'lightgreen'}}>
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={service.link} className="service-button">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
