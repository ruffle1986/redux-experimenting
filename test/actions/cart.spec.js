import test from 'ava'
import * as actions from '../../src/actions/cart'
import { ADD, REMOVE } from '../../src/action-types/cart'

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
