import test from 'ava'
import * as actions from '../../src/actions/cart'
import { ADD, REMOVE } from '../../src/action-types/cart'
import sinon from 'sinon'
import Promise from 'native-or-bluebird'
import proxyquire from 'proxyquire'

test('add to cart', t => {
  t.same(actions.addToCart(2), {
    type: ADD,
    id: 2
  })
  t.end()
})

test('remove from cart', t => {
  t.same(actions.removeFromCart(2), {
    type: REMOVE,
    id: 2
  })
  t.end()
})

test('`fetch cart` succeeds', t => {
  const _ = proxyquire('../../src/actions/cart', {
    '../utils/fetch': () => Promise.resolve({ products: [123] })
  })
  const run = _.fetchCartData('cart.json')
  const spy = sinon.spy()

  return run(spy).then(() => {
    t.true(spy.calledOnce)
    t.same(spy.args[0][0], _.setCartData([123]))
    t.end()
  }).catch(() => {
    t.fail('test must pass')
    t.end()
  })
})

test('`fetch cart` fails', t => {
  const err = new Error('error error')
  const _ = proxyquire('../../src/actions/cart', {
    '../utils/fetch': () => Promise.reject(err)
  })
  const run = _.fetchCartData('cart.json')
  const spy = sinon.spy()

  return run(spy).then(() => {
    t.true(spy.calledOnce)
    t.same(spy.args[0][0], _.displayError(err))
    t.end()
  })
})
