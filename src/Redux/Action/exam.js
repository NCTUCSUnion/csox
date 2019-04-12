import axios from 'axios'
import { toast } from '../../Component/Toast'
const baseURL = 'https://csunion.nctu.me/_api/oldexam'
const storage = window.localStorage

export const fetchCourse = () => (dispatch) => {
  dispatch({type: 'FETCH_COURSE'})
  if (storage.hasOwnProperty('courses')) {
    dispatch({type: 'RECEIVE_COURSE', course: JSON.parse(storage.getItem('courses'))})
  } else {
    axios.get(`${baseURL}/course`).then(
      res => res.data
    ).then(
      course => {
        dispatch({type: 'RECEIVE_COURSE', course})
        storage.setItem('courses', JSON.stringify(course))
      }
    ).catch(
      err => console.error(err)
    )
  }
}

export const fetchExam = (cos) => (dispatch) => {
  dispatch({type: 'CHOOSE_COURSE', category: cos.type, id: cos.id})
  axios.get(`${baseURL}/exam?id=${cos.id}`).then(
    res => res.data
  ).then(
    exam => dispatch({type: 'RECEIVE_EXAM', exam})
  ).catch(
    err => console.error(err)
  )
}

export const download = (e) => {
  toast(`已下載 ${e.filename}`)
  window.open(`${baseURL}/download?eid=${e.id}&fn=${e.filename}`)
}
