import React from 'react'

import injectSheet from 'react-jss'
import style from './style'
import ListGroup from './ListGroup'

const Drawer = ({classes, data}) => (
  <>
    <div className={classes.drawer}>
      {data.map(
        (value, index) => (
          <ListGroup
            label={value.type}
            list={value.course}
            key={index}
            order={index}
          />
        )
      )}
    </div>
  </>
)

export default injectSheet(style)(Drawer)
