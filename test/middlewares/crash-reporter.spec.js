import sinon from 'sinon'
import proxyquire from 'proxyquire'
import test from 'ava'

const debugSpy = sinon.spy()
const crashReporter = proxyquire('../../src/middlewares/crash-reporter', {
  debug: () => debugSpy
})
const nextStubResult = {}
const nextStub = () => nextStubResult
const state = {}
const storeMock = {
  getState: sinon.stub().returns(state)
}

test('crash-reporter middleware', t => {
  t.is(crashReporter(storeMock)(nextStub)(), nextStubResult)

  crashReporter(storeMock)(() => {
    throw new Error('error happened')
  })()

  t.is(debugSpy.args.length, 1)
  t.is(debugSpy.args[0][0], 'Caught exception: error happened')
  t.end()
})
