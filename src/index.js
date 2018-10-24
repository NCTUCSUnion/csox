import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import './Asset/scss/reset.scss'

const App = () => (
  <Router />
)

ReactDOM.render(<App />, document.getElementById('root'))
