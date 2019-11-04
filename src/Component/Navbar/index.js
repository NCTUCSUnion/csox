import React from 'react'
import {withRouter} from 'react-router-dom'
import injectSheet from 'react-jss'
import style from './style'

import {ModalWrapper, modal} from '../Modal'
import UploadModal from '../Upload'

// const NavItem = withRouter(injectSheet(style)(({link, name, location, classes}) => (
//   <Link to={link}
//     className={classNames(classes.navItem, link === location.pathname && classes.active)}>
//     {name}
//   </Link>
// )))

const Banner = withRouter(injectSheet(style)(({history, classes}) => (
  <div className={classes.banner} onClick={() => history.push('/')}>
    交大資工考古題系統
  </div>
)))

const Navbar = injectSheet(style)(({classes}) => (
  <nav className={classes.navbar}>
    <ModalWrapper />
    <Banner/>
    <div className={classes.navItem} onClick={() => modal(<UploadModal />)}>上傳</div>
  </nav>
))

export default Navbar
