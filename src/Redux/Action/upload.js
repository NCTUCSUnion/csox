import axios from 'axios';
import { toast } from '../../Component/Toast';
import { closeModal } from '../../Component/Modal';
import { API_URL } from '../../constant';

axios.defaults.withCredentials = true;

const config = {
  responseType: 'blob'
};
const options = (data) => ({
  method: 'POST',
  headers: { 'content-type': 'multipart/form-data' },
  data: data,
  url: `${API_URL}/upload`
});

export const uploadFile = ({ file, semester, type, course, instructor, category }) => (dispatch, getState) => {
  const uid = getState().auth.id;

  if (!uid) {
    toast('無效的使用者，請重新登入');
  }

  let { name, preview } = file;
  dispatch({ type: 'GET_BLOB' });

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
      data.append('category', category);
      data.append('uid', uid);

      dispatch({ type: 'UPLOAD/REQUEST' });

      axios(options(data)).then(res => {
        if (res.status === 200) {
          dispatch({ type: 'UPLOAD/SUCCESS' });
          toast('上傳成功');
          closeModal();
        } else {
          dispatch({ type: 'UPLOAD/FAILED' });
          toast('上傳失敗', { type: 'Danger' });
        }
      }).catch(() => {
        dispatch({ type: 'UPLOAD/FAILED' });
        toast('上傳失敗', { type: 'Danger' });
      });
    }).catch(err => console.log(err));
};
