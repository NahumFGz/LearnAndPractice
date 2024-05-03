export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// Update localStorage with state for cart
export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productCartIndex = state.findIndex(item => item.id === id)

      if (productCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productCartIndex].quantity++
        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
      updateLocalStorage(newState)

      return newState
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART:{
      const newState = state.filter(item => item.id !== actionPayload.id)
      updateLocalStorage(newState)

      return newState
    }

    case CART_ACTIONS_TYPES.CLEAR_CART: {
      const newState = cartInitialState
      updateLocalStorage(newState)

      return newState
    }
  }

  return state
}
