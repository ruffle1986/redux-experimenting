import React, { Component } from 'react'
import { addToCart } from '../actions/cart'
import { connect } from 'react-redux'

const Product = ({id, name, price, dispatch}) => (
  <div className="product">
    { id }<br />
    { name }<br />
    { price }<br />
    <button onClick={ () => dispatch(addToCart(id)) }>
      Add to cart
    </button>
  </div>
)

export default connect()(Product)
