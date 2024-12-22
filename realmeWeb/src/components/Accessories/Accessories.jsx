import React from 'react';
import './Accessories.css';

const Accessories = () => {
  return (
    <div className="accessories-container">
      <div className="accessory">
        <img
          src="Buds.jpeg" 
          alt="Realme Buds T110"
          className="accessory-image"
        />
        <div className="accessory-info">
          <h3 className="accessory-name">Realme Buds T110</h3>
          <p className="accessory-price">Rs 499</p>
        </div>
      </div>

      <div className="accessory">
        <img
          src="Budsq.jpeg" 
          alt="Realme Buds Q"
          className="accessory-image"
        />
        <div className="accessory-info">
          <h3 className="accessory-name">Realme Buds Q</h3>
          <p className="accessory-price">$15.99</p>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
