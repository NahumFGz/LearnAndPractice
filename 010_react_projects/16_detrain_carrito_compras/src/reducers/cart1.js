export const cartInitialState = []

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
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
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART:{
      return state.filter(item => item.id !== actionPayload.id)
    }

    case CART_ACTIONS_TYPES.CLEAR_CART: {
      return cartInitialState
    }
  }

  return state
}
