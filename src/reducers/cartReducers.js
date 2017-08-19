"use strict"

// Cart Reducers
export function cartReducers(state = {cart:[]}, action) {
  switch(action.type) {
    case "ADD_TO_CART":
      return {...state, cart:action.payload}
      break;

    case "UPDATE_CART":
      const currentBookToUpdate = [...state.cart]
      const indexToUpdate = currentBookToUpdate.findIndex(
        (book) => {
          return book._id === action._id;
        }
      )
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
      }

      let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]
      return {...state, 
        cart:cartUpdate
      }
      break;
      
    case "DELETE_CART_ITEM":
      return {...state, cart:action.payload}
      break;
  }
  return state
}
