import debugFactory from 'debug'

const debug = debugFactory('crash-reporter')

export default store => next => action => {
  try {
    return next(action)
  } catch (err) {
    debug(`Caught exception: ${err.message}`)
  }
}
