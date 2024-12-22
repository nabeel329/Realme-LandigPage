import React from 'react';
import './MobileList.css'; 
const MobileList = () => {
  return (
    <div className="mobile-list">
      {/* Card 1 */}
      <div className="card">
        <img src="/RealMeC25(3).jpeg" alt="RealMe C25" className="card-image" />
        <div className="card-details">
          <h3 className="card-title">realme C75</h3>
          <p className="card-price">New</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card">
        <img src="Realme13+5G.jpg" alt="iPhone 14" className="card-image" />
        <div className="card-details">
          <h3 className="card-title">realme 13+5G</h3>
          <p className="card-price">Rs 89,999</p>
        </div>
      </div>
    </div>
  );
};

export default MobileList;
