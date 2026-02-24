import {useContext} from 'react'
import {CartContext} from '../context/CartContext'

function Header({restaurantName}) {
  const context = useContext(CartContext)
  const {totalItems = 0} = context || {}

  return (
    <div className="header">
      <h1>{restaurantName}</h1>

      <div className="cart-section">
        <p>My Orders</p>
        <div className="cart-icon">
          🛒
          {totalItems > 0 && <p className="cart-count">{totalItems}</p>}
        </div>
      </div>
    </div>
  )
}

export default Header
