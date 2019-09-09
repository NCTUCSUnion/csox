import axios from 'axios'
const baseURL = 'https://csunion.nctu.me/_api/oldexam'

export const checkIsAvailable = () => (dispatch) => {
  dispatch({type: 'PLEASE_COME_IN', id: '0516013'});
  return;
  dispatch({type: 'CHECKING'});
  axios.get(`${baseURL}/check`).then(
      res => res.data
    ).then(res => {
      const { id } = res;
      if(!id){
        dispatch({type: 'NO_ALLOW'});
      }
      else{
        dispatch({type: 'PLEASE_COME_IN', id});
      }
    }).catch(
      err => console.error(err)
    )
}
