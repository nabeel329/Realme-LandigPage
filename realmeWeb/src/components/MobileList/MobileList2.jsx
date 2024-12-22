import React from 'react'

const MobileList2 = () => {
  return (
    <div className="mobile-list">
    {/* Card 1 */}
    <div className="card">
      <img src="c61.jpeg" alt="RealMe C25" className="card-image" />
      <div className="card-details">
        <h3 className="card-title">realme C61</h3>
        <p className="card-price">Rs 32,999</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="card">
      <img src="C65.jpeg" alt="iPhone 14" className="card-image" />
      <div className="card-details">
        <h3 className="card-title">realme C65</h3>
        <p className="card-price">Rs 40,999</p>
      </div>
    </div>
  </div>
  )
}

export default MobileList2