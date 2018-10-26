import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Page/Home'
import Main from './Page/Main'

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      {/* Navbar */}
      <Route path='/main' component={Navbar} />
      <Route path='/upload' component={Navbar} />
      {/* Footer */}
      <Route path='/' component={Footer} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/main' component={Main} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default Router
