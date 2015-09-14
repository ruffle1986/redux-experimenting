import React from 'react'
import { connect } from 'react-redux'

const Cart = ({ products }) => (
  <div className="cart">
    Cart ({ products.length })
  </div>
)

export default connect(props => ({
  products: props.cart.products
}))(Cart)
