import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Navbar = React.lazy(() => import('./Component/Navbar'));
const Footer = React.lazy(() => import('./Component/Footer'));
const Home = React.lazy(() => import('./Page/Home'));
const Main = React.lazy(() => import('./Page/Main'));

const Router = () => (
  <React.Suspense fallback={null}>
    <BrowserRouter>
      <>
        {/* Navbar */}
        <Route path='/main' render={() => <Navbar/>} />
        {/* Footer */}
        <Route exact path='/' render={() => <Footer/>} />
        <Switch>
          <Route exact path='/' render={() => <Home/>}/>
          <Route path='/main' render={() => <Main/>}/>
        </Switch>
      </>
    </BrowserRouter>
  </React.Suspense>
);

export default Router;
