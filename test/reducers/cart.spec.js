import test from 'ava'
import cart from '../../src/reducers/cart'
import { ADD, REMOVE } from '../../src/action-types/cart'

test('return witn initial state', t => {
  t.same(cart(undefined, {}), { products: [] })
  t.end()
})

test('return with the same state object by default', t => {
  const state = {}
  t.is(cart(state, {}), state)
  t.end()
})

test('add -> immutable', t => {
  const state = { products: [] }
  t.not(cart(state, { type: ADD, id: 3 }), state)
  t.end()
})

test('add properly', t => {
  const state = { products: [] }
  t.same(cart(state, { type: ADD, id: 2 }), { products: [2] })
  t.end()
})

test('remove -> immutable', t => {
  const state = { products: [2] }
  t.not(cart(state, { type: REMOVE, id: 2 }), state)
  t.end()
})

test('remove properly', t => {
  const state = { products: [3, 4] }
  t.same(cart(state, { type: REMOVE, id: 3 }), { products: [4] })
  t.end()
})

test('remove: throw if not in cart', t => {
  t.throws(() => {
    cart({ products: [3, 4] }, { type: REMOVE, id: 5 })
  }, Error, 'Couldn\'t find product with id 5')
  t.end()
})
