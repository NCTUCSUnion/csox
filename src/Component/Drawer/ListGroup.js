import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import {connect} from 'react-redux'
import {fetchExam} from '../../Redux/Action/exam'
import style from './style'

class ListGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toggle: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({toggle: !this.state.toggle})
  }

  render () {
    const {label, list, selectID, classes,fetchExam} = this.props
    return (
      <React.Fragment>
        <div className={classes.label} onClick={this.toggle}>
          {label}
        </div>
        {this.state.toggle && list.map(
          (cos, index) => (
            <div 
              key={index} 
              className={classNames(classes.list, selectID === cos.id && 'active')} 
              onClick={() => fetchExam(cos.id)}>
              {cos.zh}
            </div>
          )
        )}
      </React.Fragment>
    )
  }
}

const mapDispatch2Prop = dispatch => ({
  fetchExam: (id) => dispatch(fetchExam(id))
})

export default connect(null,mapDispatch2Prop)(injectSheet(style)(ListGroup))
