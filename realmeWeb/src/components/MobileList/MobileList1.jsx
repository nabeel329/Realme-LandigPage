import React from 'react'

const MobileList1 = () => {
  return (  <div className="mobile-list">
    {/* Card 1 */}
    <div className="card">
      <img src="RealmeGt6.jpeg" alt="RealMe C25" className="card-image" />
      <div className="card-details">
        <h3 className="card-title">realme Gt6</h3>
        <p className="card-price">Rs 149,999</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="card">
      <img src="RealmeNote60.jpeg" alt="iPhone 14" className="card-image" />
      <div className="card-details">
        <h3 className="card-title">realme Note 60</h3>
        <p className="card-price">Rs 26,999</p>
      </div>
    </div>
  </div>
  )
}

export default MobileList1