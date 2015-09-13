import React from 'react'
import { connect } from 'react-redux'

const Product = ({ products }) => (
  <div className="cart">
    Cart ({ products.length })
  </div>
)

export default connect(props => ({
  products: props.cart.products
}))(Product)
