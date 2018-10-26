import React from 'react'
import {connect} from 'react-redux'
import {fetchCourse} from '../../Redux/Action/exam'
import Drawer from '../../Component/Drawer'
import Table from '../../Component/Table'

class Main extends React.Component {
  // componentDidUpdate () {
  //   window.scrollTo(0, 0)
  // }
  componentDidMount(){
    this.props.dispatch(fetchCourse())
  }
  render () {
    const {allCourse,chooseCourse,exam}  = this.props
    return (
      <React.Fragment>
        <Drawer data={allCourse} selectID={chooseCourse} />
        <Table data={exam}/>
      </React.Fragment>
    )
  }
}

const mapState2Prop = state => {
  const {allCourse,chooseCourse,exam} = state.main
  return {allCourse,chooseCourse,exam}
}

export default connect(mapState2Prop)(Main)
