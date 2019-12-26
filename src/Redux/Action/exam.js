import axios from 'axios';
import { toast } from '../../Component/Toast';
import { API_URL, LOCALSTORAGE_EXPIRATION } from '../../constant';

const storage = window.localStorage;

export const fetchCourse = () => async (dispatch) => {
  const now = new Date().getTime();
  dispatch({type: 'FETCH_COURSE'});
  if (storage.hasOwnProperty('courses')) { // eslint-disable-line no-prototype-builtins
    const { data, expiration } = JSON.parse(storage.getItem('courses'));
    if (expiration && Number(expiration) > now) {
      dispatch({type: 'RECEIVE_COURSE', course: data});
      return;
    }
  }

  axios.get(`${API_URL}/course`).then(
    res => res.data
  ).then(
    course => {
      dispatch({type: 'RECEIVE_COURSE', course});
      storage.setItem('courses', JSON.stringify({
        data: course,
        expiration: now + LOCALSTORAGE_EXPIRATION,
      }));
    }
  ).catch(
    err => console.error(err)
  );
};

export const fetchTeacher = () => (dispatch) => {
  const now = new Date().getTime();
  dispatch({type: 'FETCH_TEACHER'});
  if (storage.hasOwnProperty('teachers')) { // eslint-disable-line no-prototype-builtins
    const { data, expiration } = JSON.parse(storage.getItem('teachers'));
    if (expiration && Number(expiration) > now) {
      dispatch({type: 'RECEIVE_TEACHER', teacher: data});
      return;
    }
  }
  axios.get(`${API_URL}/teacher`).then(
    res => res.data
  ).then(
    teacher => {
      dispatch({type: 'RECEIVE_TEACHER', teacher});
      storage.setItem('teachers', JSON.stringify({
        data: teacher,
        expiration: now + LOCALSTORAGE_EXPIRATION,
      }));
    }
  ).catch(
    err => console.error(err)
  );
};

export const fetchExam = id => async (dispatch, getState) => {
  await dispatch(fetchCourse());

  const target = getState().main.allCourse.filter(course => String(course.id) === id)[0];
  if (target) {
    dispatch({type: 'CHOOSE_COURSE', category: target.type - 1, id});
  }

  if(getState().main.exam[id]){
    dispatch({type: 'USE_CACHE_EXAM'});
    return;
  }

  axios.get(`${API_URL}/exam?id=${id}`).then(
    res => res.data
  ).then(
    exam => dispatch({type: 'RECEIVE_EXAM', exam, id})
  ).catch(
    err => console.error(err)
  );
};

export const download = (e) => {
  toast(`已下載 ${e.filename}`);
  window.open(`${API_URL}/download?eid=${e.id}&fn=${e.filename}`);
};
