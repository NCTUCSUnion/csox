import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import {connect} from 'react-redux'
import {fetchExam} from '../../Redux/Action/exam'
import style from './style'

class ListGroup extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle (type) {
    this.props.toggle(type)
  }

  render () {
    const {
      toggles,
      chaos,
      type,
      order,
      label,
      list,
      selectID,
      classes,
      fetchExam } = this.props
    return (
      <React.Fragment>
        <div className={classes.label} onClick={() => this.toggle(order)}>
          {label}
        </div>
        {toggles[order] && (chaos || type === order) && list.map(
          (cos, index) => (
            <div
              key={index}
              className={classNames(classes.list, selectID === cos.id && 'active')}
              onClick={() => fetchExam(cos)}>
              {cos.zh}
            </div>
          )
        )}
      </React.Fragment>
    )
  }
}

const mapState2Prop = state => ({
  toggles: state.main.toggles,
  type: state.main.chooseType,
  selectID: state.main.chooseCourse,
  chaos: state.main.chaos
})

const mapDispatch2Prop = dispatch => ({
  fetchExam: (id) => dispatch(fetchExam(id)),
  toggle: (type) => dispatch({type: 'TOGGLE', category: type})
})

export default connect(mapState2Prop, mapDispatch2Prop)(injectSheet(style)(ListGroup))
