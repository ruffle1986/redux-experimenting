import fetch from '../utils/fetch'

import {
  ADD, REMOVE, SET, ERROR
} from '../action-types/cart'

export function displayError(err) {
  return {
    type: ERROR,
    error: err
  }
}

export function fetchCartData(url) {
  return dispatch => {
    return fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => (res && res.json && res.json()) || res)
      .then(cartData => {
        if (cartData && Array.isArray(cartData.products)) {
          dispatch(setCartData(cartData.products))
        } else {
          throw new Error(`Sorry. We couldn't load your cart. :(`)
        }
      })
      .catch(err => {
        dispatch(displayError(err))
      })
  }
}

export function setCartData(data) {
  return {
    type: SET,
    products: data
  }
}

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
