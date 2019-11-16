const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'UPLOAD/REQUEST':
    return {
      ...state,
      loading: true,
    };
  case 'UPLOAD/SUCCESS':
    return {
      ...state,
      loading: false,
    };
  case 'UPLOAD/FAILED':
    return {
      ...state,
      loading: false,
    };
  default:
    return state;
  }
};
