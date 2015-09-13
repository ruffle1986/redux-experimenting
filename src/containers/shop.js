import React, { Component } from 'react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Cart from '../components/cart'
import ProductList from '../components/product-list'
import * as reducers from '../reducers'

const store = createStore(combineReducers(reducers), {
  cart: {
    products: []
  },
  products: [
    {
      id: 1,
      name: 'T-shirt',
      price: 123
    }, {
      id: 2,
      name: 'Pants',
      price: 456
    }
  ]
})

class Shop extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="main">
          <Cart />
          <hr />
          <ProductList />
        </div>
      </Provider>
    )
  }
}

export default Shop
