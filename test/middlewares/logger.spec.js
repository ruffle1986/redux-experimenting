import sinon from 'sinon'
import proxyquire from 'proxyquire'
import test from 'ava'

const measurements = {}
const getLastMeasurementsSpy = sinon.stub().returns(measurements)
const debugSpy = sinon.spy()
const logger = proxyquire('../../src/middlewares/logger', {
  'react-addons-perf': {
    getLastMeasurements: getLastMeasurementsSpy
  },
  'debug': () => debugSpy
})
const nextStubResult = {}
const action = {}
const nextStub = () => nextStubResult
const state = {}
const storeMock = {
  getState: sinon.stub().returns(state)
}

test('logger middleware', t => {
  t.is(logger(storeMock)(nextStub)(action), nextStubResult)
  t.is(debugSpy.args.length, 2)
  t.is(debugSpy.args[0][0], 'State has been changed: ')
  t.is(debugSpy.args[0][1], action)
  t.is(debugSpy.args[0][2], state)
  t.is(debugSpy.args[1][0], 'React Perf: ')
  t.is(debugSpy.args[1][1], measurements)
  t.is(storeMock.getState.calledOnce, true)
  t.is(getLastMeasurementsSpy.calledOnce, true)
  t.end()
})
