import React from 'react'
import classNames from 'classnames'
import {withRouter, Link} from 'react-router-dom'
import injectSheet from 'react-jss'
import style from './style'

const NavItem = withRouter(injectSheet(style)(({link, name, location, classes}) => (
  <Link to={link}
    className={classNames(classes.navItem, link === location.pathname && classes.active)}>
    {name}
  </Link>
)))

const Banner = withRouter(injectSheet(style)(({classes}) => (
  <div className={classes.banner}>交大資工考古題系統</div>
)))

const Navbar = injectSheet(style)(({classes}) => (
  <nav className={classes.navbar}>
    <Banner />
    <NavItem link='/upload' name='上傳' />
  </nav>
))

export default Navbar
