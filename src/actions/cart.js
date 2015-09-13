import {
  ADD,
  REMOVE
} from '../action-types/cart'

export function addToCart(productId) {
  return {
    type: ADD,
    id: productId
  }
}

export function removeFromCart(productId) {
  return {
    type: REMOVE,
    id: productId
  }
}
