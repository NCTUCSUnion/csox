import React from 'react'
import injectSheet from 'react-jss'
import style from './style'

const Header = ({ classes, width }) => (
    <thead className={classes.fixedHeader}>
        <tr>
            <th>年份</th>
            <th>類型</th>
            {width >= 576 && <th>老師</th>}
            {width >= 976 && <th>檔名</th>}
        </tr>
    </thead>
)

export default injectSheet(style)(Header)