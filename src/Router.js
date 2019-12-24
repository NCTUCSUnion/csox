import React, { useEffect } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Loading from './Component/Loading';
import Home from './Page/Home';
import Main from './Page/Main';
import { checkIsAvailable } from './Redux/Action/auth';

const AuthedRoute = ({ component, authed, location, ...rest }) => {
  if(authed){
    return <Route component={component} {...rest}/>;
  }
  else {
    return <Redirect to={{
      pathname: '/',
      state: {
        isRedirect: true,
        redirectUrl: location.pathname,
      }
    }}/>;
  }
};

const ProxyRoute = ({ component: Component, authed, location, ...rest }) => {
  if(authed){
    return <Redirect to={location.state ? location.state.redirectUrl || '/main' : '/main'}/>;
  }
  return <Route component={() => <Component isRedirect={true}/>} {...rest}/>;
};

const Router = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const isAvailable = useSelector(state => state.auth.available);

  useEffect(() => {
    dispatch(checkIsAvailable());
  }, [ dispatch ]);

  if(loading){
    return <Loading/>;
  }

  return(
    <BrowserRouter>
      <React.Fragment>
        {/* Navbar */}
        <Route path='/main' component={Navbar} />
        {/* Footer */}
        <Route exact path='/' component={Footer} />
        <Switch>
          <ProxyRoute exact path='/' component={Home} authed={isAvailable}/>
          <AuthedRoute path='/main' component={Main} authed={isAvailable}/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};
export default Router;
