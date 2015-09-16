import React, { Component } from 'react'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Cart from '../components/cart'
import ProductList from '../components/product-list'
import * as reducers from '../reducers'
import * as cartActions from '../actions/cart'

import crashReporter from '../middlewares/crash-reporter'
import logger from '../middlewares/logger'
import thunk from 'redux-thunk'

const createStoreWithMiddlewares = applyMiddleware(
  crashReporter,
  logger,
  thunk
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

  componentDidMount() {
    store.dispatch(cartActions.fetchCartData('cart.json'))
  }

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
