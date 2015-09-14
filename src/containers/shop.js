import React, { Component } from 'react'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Cart from '../components/cart'
import ProductList from '../components/product-list'
import * as reducers from '../reducers'

import crashReporter from '../middlewares/crash-reporter'
import logger from '../middlewares/logger'

const createStoreWithMiddlewares = applyMiddleware(
  logger,
  crashReporter
)(createStore)
const store = createStoreWithMiddlewares(combineReducers(reducers), {
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
