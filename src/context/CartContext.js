import {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState({})

  const addItem = dish => {
    setCart(prevCart => ({
      ...prevCart,
      [dish.dish_id]: (prevCart[dish.dish_id] || 0) + 1,
    }))
  }

  const removeItem = dish => {
    setCart(prevCart => {
      const currentQty = prevCart[dish.dish_id] || 0

      // DO NOTHING if quantity is 0
      if (currentQty === 0) {
        return prevCart
      }

      // If quantity becomes 0, keep key with value 0
      return {
        ...prevCart,
        [dish.dish_id]: currentQty - 1,
      }
    })
  }

  const totalItems = Object.values(cart).reduce((acc, value) => acc + value, 0)

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, totalItems}}>
      {children}
    </CartContext.Provider>
  )
}
