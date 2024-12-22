import React from 'react'

const MobileList4 = () => {
  return (
    <div className="mobile-list">
    {/* Card 1 */}
    <div className="card">
      <img src="C63.jpeg" alt="RealMe C25" className="card-image" />
      <div className="card-details">
        <h3 className="card-title">realme C63</h3>
        <p className="card-price">Rs 39,999</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="card">
      <img src="Note50.jpeg" alt="iPhone 14" className="card-image" />
      <div className="card-details">
        <h3 className="card-title">Realme Note 50</h3>
        <p className="card-price">44,999</p>
      </div>
    </div>
  </div>
  )
}

export default MobileList4