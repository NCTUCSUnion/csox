import React from 'react'
import injectSheet from 'react-jss'
import style from './style'

const Footer = ({classes}) => (
    <div className={classes.footer}>
    資工系09系學會 &copy; 2018
    </div>
)

export default injectSheet(style)(Footer)
