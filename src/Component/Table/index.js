import React from 'react'
import injectSheet from 'react-jss'
import style from './style'

const Table = ({data, classes}) => (
  <div className={classes.container}>
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
                <tr key={e.id}>
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
      : <p>點選左方課程尋找考古題</p>
    }
  </div>
)

export default injectSheet(style)(Table)
