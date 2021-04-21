import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './Redux/Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import IsMobileContext from './Theme/IsMobileContext';
import isMobileChecker from './Component/Utils/isMobile';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware)
));

const isMobile = isMobileChecker();

ReactDOM.render(
  <Provider store={store}>
    <IsMobileContext.Provider value={isMobile}>
      <Router isMobile={isMobile}/>
    </IsMobileContext.Provider>
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();