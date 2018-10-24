import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import injectSheet, {ThemeProvider} from 'react-jss'
import theme from './Theme/default'
import style from './Theme/globalStyle'

const App = injectSheet(style)(() => (
  <Router />
))

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('root'))
