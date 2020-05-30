import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loadable from 'react-loadable';

import { ReactComponent as Loading } from './Svg/loading.svg';
import { checkIsAvailable } from './Redux/Action/auth';
import styled from 'styled-components';

const Navbar = Loadable({
  loader: () => import('./Component/Navbar'),
  loading: () => null,
});

const Footer = Loadable({
  loader: () => import('./Component/Footer'),
  loading: () => null,
});

const Home = Loadable({
  loader: () => import('./Page/Home'),
  loading: () => null,
});

const Main = Loadable({
  loader: () => import('./Page/Main'),
  loading: () => null,
});

const StyledLoading = styled(Loading)`
  display: block;
  margin: 20px auto;
  width: 50px;
  fill: ${props => props.theme.colorPrimary};
`;

const Router = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    dispatch(checkIsAvailable());
  }, [ dispatch ]);

  if(loading){
    return <StyledLoading/>;
  }

  return(
    <BrowserRouter>
      <>
        {/* Navbar */}
        <Route path='/main' component={Navbar} />
        {/* Footer */}
        <Route exact path='/' component={Footer} />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/main' component={Main}/>
        </Switch>
      </>
    </BrowserRouter>
  );
};
export default Router;
