import { createContext, useState } from 'react'

// 1. Crear contexto
export const CartContext = createContext()

// 2. Crear provider
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // Forma sencilla
    // setCart([...cart, product])

    // Check if product is already in cart
    const productCartIndex = cart.findIndex(item => item.id === product.id)

    if (productCartIndex >= 0) {
      // Una forma seria usando structuredClone
      const newCart = structuredClone(cart)
      newCart[productCartIndex].quantity++
      return setCart(newCart)
    }

    // Producto no está en el carrito
    setCart(prevState => ([...prevState, { ...product, quantity: 1 }]))
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
