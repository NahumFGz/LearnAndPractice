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

  let newState

  switch (actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productCartIndex = state.findIndex(item => item.id === id)

      if (productCartIndex >= 0) {
        newState = structuredClone(state)
        newState[productCartIndex].quantity++
      } else {
        newState = [
          ...state,
          {
            ...actionPayload,
            quantity: 1
          }
        ]
      }
      break
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART:{
      newState = state.filter(item => item.id !== actionPayload.id)
      break
    }

    case CART_ACTIONS_TYPES.CLEAR_CART: {
      newState = cartInitialState
      break
    }

    default:
      newState = state
      break
  }

  updateLocalStorage(newState)
  return newState
}
