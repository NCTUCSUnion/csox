import React from 'react'
import injectSheet from 'react-jss'
import style from './style'

const Input = ({classes, label}) => (
  <div className={classes.container}>
    <input type='text' required className={classes.input} />
    <label className={classes.label}>{label}</label>
  </div>
)

export default injectSheet(style)(Input)
