import React from 'react'
import injectSheet from 'react-jss'
import style from './style'

import { ToastWrapper } from '../Toast'
import { download } from '../../Redux/Action/exam'

class Table extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '點選左方課程尋找考古題'
    }
  }
  render () {
    const {data, classes} = this.props
    return (
      <div className={classes.container}>
        <ToastWrapper />
        {data.length > 0
          ? (
            <table>
              <tbody>
                <tr>
                  <th>年份</th>
                  <th>類型</th>
                  <th>檔名</th>
                  <th>提供者</th>
                </tr>
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
