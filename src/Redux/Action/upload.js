import axios from 'axios';
import { toast } from '../../Component/Toast';
import { closeModal } from '../../Component/Modal';

const baseURL = 'https://csunion.nctu.me/_api/oldexam';
const config = {
  responseType: 'blob'
};
const options = (data) => ({
  method: 'POST',
  headers: { 'content-type': 'multipart/form-data' },
  data: data,
  url: `${baseURL}/upload`
});

export const uploadFile = ({ file, semester, type, course, instructor, category }, uid) => (dispatch) => {
  let {name, preview} = file;
  dispatch({type: 'GET_BLOB'});

  axios.get(preview, config)
    .then(res => res.data)
    .then(file => {
      let data = new FormData();
      data.append('file', file);
      data.append('filename', name);
      data.append('semester', semester);
      data.append('type', type);
      data.append('course', course);
      data.append('instructor', instructor);
      data.append('type', category);
      data.append('uid', uid);

      dispatch({type: 'UPLOAD/REQUEST'});

      axios(options(data)).then(res => {
        if (res.statusText === 'OK') {
          dispatch({type: 'UPLOAD/SUCCESS'});
          toast('上傳成功');
          closeModal();
        } else {
          dispatch({type: 'UPLOAD/FAILED'});
          toast('上傳失敗', {type: 'Danger'});
        }
      }).catch(() => {
        dispatch({type: 'UPLOAD/FAILED'});
        toast('上傳失敗', {type: 'Danger'});
      });
    }).catch(err => console.log(err));
};
