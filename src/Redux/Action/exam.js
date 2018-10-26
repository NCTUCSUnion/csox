import axios from 'axios'

const baseURL = 'http://localhost:8080/_api'

export const fetchCourse = () => (dispatch) => {
  dispatch({type: 'FETCH_COURSE'})
  axios.get(`${baseURL}/course`).then(
    res => res.data
  ).then(
    course => dispatch({type: 'RECEIVE_COURSE', course})
  ).catch(
    err => console.error(err)
  )
}

export const fetchExam = (id) => (dispatch) => {
  dispatch({type: 'CHOOSE_COURSE', id})
  axios.get(`${baseURL}/exam?id=${id}`).then(
    res => res.data
  ).then(
    exam => dispatch({type: 'RECEIVE_EXAM', exam})
  ).catch(
    err => console.error(err)
  )
}
