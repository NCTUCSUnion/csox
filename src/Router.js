import React, { useEffect } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Page/Home';
import Main from './Page/Main';
import { checkIsAvailable } from './Redux/Action/auth';

const AuthedRoute = ({ component, authed, ...rest }) => {
  if(authed){
    return <Route component={component} {...rest}/>;
  }
  else {
    return <Redirect to={{
      pathname: '/',
      state: {
        isRedirect: true
      }
    }}/>;
  }
};

const ProxyRoute = ({ component: Component, authed, ...rest }) => {
  if(authed){
    return <Redirect to='/main'/>;
  }
  return <Route component={() => <Component isRedirect={true}/>} {...rest}/>;
};

const Router = ({ loading, isAvailable }) => {
  useEffect(() => {
    checkIsAvailable();
  });

  if(loading){
    return <div>Loading</div>;
  }

  return(
    <BrowserRouter>
      <React.Fragment>
        {/* Navbar */}
        <Route path='/main' component={Navbar} />
        {/* Footer */}
        <Route path='/' component={Footer} />
        <Switch>
          <ProxyRoute exact path='/' component={Home} authed={isAvailable}/>
          <AuthedRoute path='/main' component={Main} authed={isAvailable}/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};
export default connect((state) => ({
  loading: state.auth.loading,
  isAvailable: state.auth.available
}),(dispatch) => ({
  checkIsAvailable: dispatch(checkIsAvailable())
}))(Router);
