const initialState = {
  allCourse :[
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
  ],
  chooseCourse: null,
  exam: []
}

export default (state = initialState, action) => {
  const {course, id, exam} = action
  switch(action.type){
    case 'RECEIVE_COURSE': 
      let updatedCourse = state.allCourse
      course.forEach(course =>
        updatedCourse[course.type - 1].course
        .push({
          id: course.id,
          zh: course.zh,
          en: course.en
        })
      )
      return {
        ...state,
        allCourse: updatedCourse
      }
    case 'CHOOSE_COURSE':
      return {
        ...state,
        chooseCourse: id
      }
    case 'RECEIVE_EXAM':
      return {
        ...state,
        exam: [...exam]
      }
    default:
      return state
  }
}