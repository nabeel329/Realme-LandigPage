import React from 'react'

const MobileList3 = () => {
  return (
    <div className="mobile-list">
    {/* Card 1 */}
    <div className="card">
      <img src="12.jpeg" alt="RealMe C25" className="card-image" />
      <div className="card-details">
        <h3 className="card-title">realme 12</h3>
        <p className="card-price">Rs 59,999</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="card">
      <img src="12+5G.jpeg" alt="iPhone 14" className="card-image" />
      <div className="card-details">
        <h3 className="card-title">realme 12+5G</h3>
        <p className="card-price">Rs 74,999</p>
      </div>
    </div>
  </div>
  )
}

export default MobileList3