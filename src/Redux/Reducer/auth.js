
const initialState = {
  loading: false,
  id: '',
  available: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKING':
      return {
        ...state,
        loading: true
      }
    case 'NO_ALLOW':
      return {
        id: '',
        available: false,
        loading: false
      }
    case 'PLEASE_COME_IN':
      return {
        id: action.id,
        available: true,
        loading: false
      }
    default:
      return state;
  }
}
