import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './Redux/Reducer';
import { ThemeProvider } from 'styled-components';
import theme from './Theme/default';
import GlobalStyle from './Theme/globalStyle';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware)
));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router/>
    </ThemeProvider>
  </Provider>
  , document.getElementById('root')
);
