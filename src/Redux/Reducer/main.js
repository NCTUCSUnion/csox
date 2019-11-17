const initialState = {
  allCourse: [],
  teachers: [],
  toggles: [false, false, false, false, false, false, false, false],
  chooseType: null,
  exam: {},
  chaos: true,
  loading: undefined,
};

export default (state = initialState, action) => {
  const {course, category, id, exam, teacher } = action;
  let tmp;
  switch (action.type) {
  case 'RECEIVE_COURSE':
    return {
      ...state,
      allCourse: course,
    };
  case 'RECEIVE_TEACHER':
    return {
      ...state,
      teachers: teacher
    };
  case 'CHOOSE_COURSE':
    tmp = [false, false, false, false, false, false, false, false];
    tmp[category] = true;
    return {
      ...state,
      chooseType: category,
      chaos: false,
      toggles: [...tmp],
      loading: true,
    };
  case 'RECEIVE_EXAM':
    return {
      ...state,
      exam: {
        ...state.exam,
        [id]: exam,
      },
      loading: false
    };
  case 'USE_CACHE_EXAM':
    return {
      ...state,
      loading: false,
    };
  case 'TOGGLE':
    tmp = state.toggles;
    tmp[category] = !tmp[category];
    return {
      ...state,
      chaos: true,
      toggles: [...tmp]
    };
  default:
    return state;
  }
};
