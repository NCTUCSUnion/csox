import axios from 'axios'
const baseURL = 'https://csunion.nctu.me/_api/oldexam'

export const checkIsAvailable = () => (dispatch) => {
  dispatch({type: 'CHECKING'});
  axios.get(`${baseURL}/check`,{
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
    }).catch(err => {
        dispatch({type: 'NO_ALLOW'});
    })
}
