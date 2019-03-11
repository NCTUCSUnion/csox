const initialState = {
  allCourse: [
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
  toggles: [false, false, false, false, false, false, false, false],
  chooseType: null,
  chooseCourse: null,
  exam: [],
  chaos: true
}

export default (state = initialState, action) => {
  const {course, category, id, exam} = action
  let tmp
  switch (action.type) {
    case 'RECEIVE_COURSE':
      let updatedCourse = state.allCourse
      course.forEach(course =>
        updatedCourse[course.type - 1].course
          .push({
            type: course.type - 1,
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
      tmp = [false, false, false, false, false, false, false, false]
      tmp[category] = true
      return {
        ...state,
        chooseType: category,
        chooseCourse: id,
        chaos: false,
        toggles: [...tmp]
      }
    case 'RECEIVE_EXAM':
      return {
        ...state,
        exam: [...exam]
      }
    case 'TOGGLE':
      tmp = state.toggles
      tmp[category] = !tmp[category]
      return {
        ...state,
        chaos: true,
        toggles: [...tmp]
      }
    default:
      return state
  }
}
