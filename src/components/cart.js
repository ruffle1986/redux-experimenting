import React from 'react'
import { connect } from 'react-redux'

const Cart = ({ products, error }) => {
  if (error) {
    return (
      <p className="error">{ error }</p>
    )
  } else {
    return (
      <div className="cart">
        Cart ({ products.length })
      </div>
    )
  }
}

export default connect(props => ({
  products: props.cart.products,
  error: props.cart.error
}))(Cart)
