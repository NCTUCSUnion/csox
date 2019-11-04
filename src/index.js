import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './Redux/Reducer'
import injectSheet, {ThemeProvider} from 'react-jss'
import theme from './Theme/default'
import style from './Theme/globalStyle'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware)
))

const App = injectSheet(style)(() => (
  <Router />
))

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  , document.getElementById('root')
)
