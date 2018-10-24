import React from 'react'
import axios from 'axios'

import Drawer from '../../Component/Drawer'
import injectSheet from 'react-jss'
import style from './style'

let baseURL = 'http://localhost:8080/_api'

const allCos = [
  {
    type: '大一',
    course: []
  },
  {
    type: '大二',
    course: []
  },
  {
    type: '大三',
    course: []
  },
  {
    type: '大四',
    course: []
  },
  {
    type: '研究所',
    course: []
  },
  {
    type: '資工其他',
    course: []
  },
  {
    type: '非資工科目',
    course: []
  },
  {
    type: '考資工研究所',
    course: []
  }
]

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      select_id: null
    }
    this.updateData = this.updateData.bind(this)
    this.updateSelect = this.updateSelect.bind(this)
  }
  componentDidMount () {
    axios.get(`${baseURL}/course`).then(
      res => res.data
    ).then(
      courses => courses.forEach(
        course => allCos[course.type - 1].course.push({id: course.id, zh: course.zh, en: course.en})
      )
    )
  }
  componentDidUpdate () {
    window.scrollTo(0, 0)
  }
  updateData (data) {
    this.setState({data: [...data]})
  }

  updateSelect (id) {
    this.setState({select_id: id})
  }

  render () {
    const {classes} = this.props
    return (
      <React.Fragment>
        <Drawer data={allCos} update={this.updateData} select={this.updateSelect} selectID={this.state.select_id} />
        <div className={classes.container}>
          <table>
            <tbody>
              <tr>
                <th>年份</th>
                <th>類型</th>
                <th>檔名</th>
                <th>提供者</th>
              </tr>
              {this.state.data.length > 0 &&
              this.state.data.map(
                e =>
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
        </div>
      </React.Fragment>
    )
  }
}

export default injectSheet(style)(Main)
