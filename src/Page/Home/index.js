import React from 'react'
import injectSheet from 'react-jss'
import {withRouter} from 'react-router-dom'
import style from './style'

const Home = ({history, classes}) => (
  <div>
    <div className={classes.title}>
      <h1 className={classes.en}>past exam papers</h1>
      <h1 className={classes.zh}>交大資工系考古題系統</h1>
    </div>
    <div className={classes.login} onClick={() => { window.location.href = ('https://csunion.nctu.me/_api/oldexam/login')}} >
      登入
    </div>
  </div>
)

export default withRouter(injectSheet(style)(Home))
