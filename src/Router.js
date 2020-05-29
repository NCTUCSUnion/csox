import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { ReactComponent as Loading } from './Svg/loading.svg';
import Home from './Page/Home';
import Main from './Page/Main';
import { checkIsAvailable } from './Redux/Action/auth';
import styled from 'styled-components';

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
