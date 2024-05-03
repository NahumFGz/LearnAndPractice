// ! Crear reducer
export const cartInitialState = []
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
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

    case 'REMOVE_FROM_CART':{
      return state.filter(item => item.id !== actionPayload.id)
    }

    case 'CLEAR_CART': {
      return cartInitialState
    }
  }

  return state
}
