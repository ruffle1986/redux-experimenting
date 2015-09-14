import debugFactory from 'debug'
import Perf from 'react-addons-perf'

const debug = debugFactory('logger')

export default store => next => action => {
  const result = next(action)
  debug('State has been changed: ', action, store.getState())
  debug('React Perf: ', Perf.getLastMeasurements())
  return result
}
