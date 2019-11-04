const initialState = {
  allCourse: [],
  teachers: [],
  toggles: [false, false, false, false, false, false, false, false],
  chooseType: null,
  chooseCourse: null,
  exam: [],
  chaos: true
}

export default (state = initialState, action) => {
  const {course, category, id, exam, teacher } = action
  let tmp
  switch (action.type) {
  case 'RECEIVE_COURSE':
    return {
      ...state,
      allCourse: course
    }
  case 'RECEIVE_TEACHER':
    return {
      ...state,
      teachers: teacher
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
