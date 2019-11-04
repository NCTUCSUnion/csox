import React from 'react'
import {connect} from 'react-redux'
import {fetchCourse, fetchTeacher} from '../../Redux/Action/exam'
import Drawer from '../../Component/Drawer'
import Table from '../../Component/Table'
import { ToastWrapper } from '../../Component/Toast'

export const COURSE_TYPES = ['大一', '大二', '大三', '大四', '研究所', '非資工科目', '考資工研究所']

class Main extends React.Component {
  componentDidUpdate () {
    window.scrollTo(0, 0)
  }
  componentDidMount () {
    const { fetchCourse, fetchTeacher } = this.props
    fetchCourse()
    fetchTeacher()
  }
  render () {
    const {course, exam} = this.props
    return (
      <React.Fragment>
        <Drawer data={course} />
        <Table data={exam} />
        <ToastWrapper/>
      </React.Fragment>
    )
  }
}

export default connect((state) => {
  const {allCourse, exam} = state.main
  return {
    course: COURSE_TYPES.map((group, index) => ({
      type: group,
      course: allCourse.filter(course => course.type - 1 === index).map(course => ({
        ...course,
        type: course.type - 1
      }))
    })),
    exam
  }
},(dispatch) => {
  return {
    fetchCourse: () => dispatch(fetchCourse()),
    fetchTeacher: () => dispatch(fetchTeacher())
  }
})(Main)
