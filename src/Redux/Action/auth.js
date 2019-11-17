import axios from 'axios';
import { API_URL } from '../../constant';

export const checkIsAvailable = () => (dispatch) => {
  dispatch({type: 'CHECKING'});
  axios.get(`${API_URL}/check`,{
    withCredentials: true
  }).then(
    res => res.data
  ).then(res => {
    const { id, email } = res;
    if(!id){
      dispatch({type: 'NO_ALLOW'});
    }
    else{
      dispatch({type: 'PLEASE_COME_IN', id, email});
    }
  }).catch(() => {
    dispatch({type: 'NO_ALLOW'});
  });
};
