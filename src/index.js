import React from 'react'
import ReactDOM from 'react-dom'
import Shop from './containers/shop'
import Perf from 'react-addons-perf'

Perf.start()
ReactDOM.render(
  <Shop />,
  document.getElementById('mount')
)
