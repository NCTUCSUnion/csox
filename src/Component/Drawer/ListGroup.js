import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import axios from 'axios'
import style from './style'

let baseURL = 'http://localhost:8080/_api'

class ListGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toggle: false
    }
    this.toggle = this.toggle.bind(this)
    this.getList = this.getList.bind(this)
  }

  toggle () {
    this.setState({toggle: !this.state.toggle})
  }

  getList (id) {
    this.props.select(id)
    axios.get(`${baseURL}/exam?id=${id}`).then(
      res => res.data
    ).then(
      res => {
        this.props.update(res)
      }
    )
  }

  render () {
    const {label, list, selectID, classes} = this.props
    return (
      <React.Fragment>
        <div className={classes.label} onClick={this.toggle}>
          {label}
        </div>
        {this.state.toggle && list.map(
          (cos, index) => (
            <div className={classNames(classes.list, selectID === cos.id && 'active')}
              key={index}
              onClick={() => this.getList(cos.id)}>{cos.zh}
            </div>
          )
        )}
      </React.Fragment>
    )
  }
}

export default injectSheet(style)(ListGroup)
