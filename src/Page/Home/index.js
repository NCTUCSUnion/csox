import React from 'react'
import injectSheet from 'react-jss'
import style from './style'

const Home = ({classes}) => (
  <div>
    <div className={classes.title}>
      <h1 className={classes.en}>past exam papers</h1>
      <h1 className={classes.zh}>交大資工系考古題系統</h1>
    </div>
    <div className={classes.login}>
      登入
    </div>
  </div>
)

export default injectSheet(style)(Home)
