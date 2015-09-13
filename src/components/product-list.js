import React from 'react'
import Product from './product'
import { connect } from 'react-redux'

const ProductList = ({ items }) => (
  <div className="product-list">{
    items.map((product, i) => (
      <Product key={ `product-${i}` } { ...product } />
    ))
  }</div>
)

export default connect(
  state => ({
    items: state.products
  })
)(ProductList)
