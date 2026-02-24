import {useContext} from 'react'
import {CartContext} from '../context/CartContext'

function DishCard({dish}) {
  const context = useContext(CartContext)
  const {cart = {}, addItem = () => {}, removeItem = () => {}} = context || {}

  const quantity = cart[dish.dish_id] || 0
  const hasCustomization = dish.addonCat && dish.addonCat.length > 0

  return (
    <div className="dish-card">
      <div className="dish-info">
        <h3>{dish.dish_name}</h3>

        <p>
          {dish.dish_currency} {dish.dish_price}
        </p>

        <p>{dish.dish_description}</p>

        <p>{dish.dish_calories} calories</p>

        {/* COUNTER SECTION */}
        <div className="counter">
          {dish.dish_Availability && (
            <button type="button" onClick={() => removeItem(dish)}>
              -
            </button>
          )}

          {/* Quantity ALWAYS present */}
          <p>{quantity}</p>

          {dish.dish_Availability && (
            <button type="button" onClick={() => addItem(dish)}>
              +
            </button>
          )}
        </div>

        {!dish.dish_Availability && <p>Not available</p>}

        {hasCustomization && <p>Customizations available</p>}
      </div>

      <img src={dish.dish_image} alt={dish.dish_name} />
    </div>
  )
}

export default DishCard
