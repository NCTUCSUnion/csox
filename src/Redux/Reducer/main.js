const initialState = {
  allCourse: [],
  teachers: [],
  toggles: [false, false, false, false, false, false, false, false],
  chooseType: null,
  exam: {},
  chaos: true,
  loading: undefined,
};

const parseType = type => {
  switch(type) {
  case 'midterm':
    return '期中考';
  case 'midterm1':
    return '第一次期中考';
  case 'midterm2':
    return '第二次期中考';
  case 'final':
    return '期末考';
  case 'test':
    return '小考';
  case 'other':
    return '其他';
  default:
    return type;
  }
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
        [id]: exam.map(paper => ({...paper, type: parseType(paper.type)})),
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
