import React from 'react'
import classNames from 'classnames'
import {withRouter, Link} from 'react-router-dom'
import './style.scss'

const NavItem = withRouter((props) => (
  <Link to={props.link}
    className={classNames('nav-item', props.link === props.location.pathname && 'active')}>
    {props.name}
  </Link>
))

const Navbar = withRouter((props) => (
  <nav className='nav-navbar'>
    <Link to={'/main'}>
      <div className='nav-banner'>交大資工考古題系統</div>
    </Link>
    <NavItem link='/upload' name='上傳' />
  </nav>
))

export default Navbar
