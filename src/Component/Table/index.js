import React from 'react'
import injectSheet from 'react-jss'
import style from './style'

import { ToastWrapper } from '../Toast'
import { download } from '../../Redux/Action/exam'
import Header from './header'

class Table extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '點選左方課程尋找考古題'
    }
    this.ref = React.createRef()
  }
  render () {
    const {data, classes} = this.props
    return (
      <div className={classes.container} ref={this.ref}>
        <ToastWrapper />
        {data.length > 0
          ? (
            <table>
              <Header table={this.ref}/>
              <tbody>
                {
                  data.map(e =>
                    <tr key={e.id} onClick={() => download(e)}>
                      <td>{e.semester}</td>
                      <td>{e.type}</td>
                      <td>{e.filename}</td>
                      <td>{e.provider}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          )
          : <p />
        }
      </div>
    )
  }
}

export default injectSheet(style)(Table)
