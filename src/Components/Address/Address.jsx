import React, { useEffect, useState } from 'react';
import './Address.css';  // Ensure to create this CSS file for styling

const Address = () => {
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver to trigger animations when the section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    const element = document.querySelector('.address-section');
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className={`address-section ${isVisible ? 'fade-in' : ''}`} style={{background:'pink'}}>
      <div className="address-content">
        <h2>Our Address</h2>
        <p>Run Flat Tire Systems</p>
        <p>123 Main Street, Suite 100</p>
        <p>City, State, 12345</p>
        <p>Email: info@runflatsystem.com</p>
        <p>Phone: +123 456 789</p>
      </div>
    </div>
  );
};

export default Address;
