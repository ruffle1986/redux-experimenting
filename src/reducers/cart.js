import {
  ADD, REMOVE
} from '../action-types/cart'

const initialState = {
  products: []
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        products: state.products.indexOf(action.id) === -1 ? [...state.products, action.id] : state.products
      }
    case REMOVE:

      const i = state.products.indexOf(action.id)
      if (i === -1) {
        throw new Error(`Couldn't find product with id ${action.id}`)
      }

      return {
        products: state.products.filter(id => action.id !== id)
      }
    default:
      return state
  }
}
