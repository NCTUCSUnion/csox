import React from 'react'
import axios from 'axios'

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
    return (
      <React.Fragment>
        <div className='label' onClick={this.toggle}>
          {this.props.label}
        </div>
        {this.state.toggle && this.props.list.map(
          (cos, index) => (<div className={`list ${this.props.select_id === cos.id && 'active'}`} key={index} onClick={() => this.getList(cos.id)}>{cos.zh}</div>)
        )}
      </React.Fragment>
    )
  }
}

const Aside = (props) => (
  <div className='aside'>
    {props.data.map(
      (value, index) => (
        <ListGroup
          label={value.type}
          list={value.course}
          key={index}
          update={props.update}
          select={props.select}
          select_id={props.select_id}
        />
      )
    )}
  </div>
)

export default Aside
