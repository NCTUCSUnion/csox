import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './Theme/default';
import GlobalStyle from './Theme/globalStyle';

const Navbar = React.lazy(() => import('./Component/Navbar'));
const Footer = React.lazy(() => import('./Component/Footer'));
const Home = React.lazy(() => import('./Page/Home'));
const Main = React.lazy(() => import('./Page/Main'));

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      dark: localStorage && localStorage.getItem('dark') === 'true'
    })
  }

  toggleDark() {
    const dark = !this.state.dark
    this.setState({
      dark: dark
    })
    if (localStorage)
      localStorage.setItem('dark', dark)
  }

  render() {
    const {isMobile} = this.props
    return (
      <React.Suspense fallback={null}>
        <BrowserRouter>
          <ThemeProvider theme={{ ...theme, isMobile, dark: this.state.dark }}>
            <GlobalStyle />
            {/* Navbar */}
            <Route path='/main' render={() => <Navbar />} />
            {/* Footer */}
            <Route exact path='/' render={() => <Footer />} />
            <Switch>
              <Route exact path='/' render={() => <Home dark={ this.state.dark } toggleDark={() => this.toggleDark()} />} />
              <Route path='/main' render={() => <Main />} />
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </React.Suspense>
    );
  }
}

export default Router;
