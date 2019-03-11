import React from 'react'
import {connect} from 'react-redux'
import {fetchCourse} from '../../Redux/Action/exam'
import Drawer from '../../Component/Drawer'
import Table from '../../Component/Table'

class Main extends React.Component {
  // componentDidUpdate () {
  //   window.scrollTo(0, 0)
  // }
  componentDidMount () {
    this.props.dispatch(fetchCourse())
  }
  render () {
    const {allCourse, exam} = this.props
    return (
      <React.Fragment>
        <Drawer data={allCourse} />
        <Table data={exam} />
      </React.Fragment>
    )
  }
}

const mapState2Prop = state => {
  const {allCourse, exam} = state.main
  return {allCourse, exam}
}

export default connect(mapState2Prop)(Main)
