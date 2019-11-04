import axios from 'axios'
import { toast } from '../../Component/Toast'
const baseURL = 'https://csunion.nctu.me/_api/oldexam'
const storage = window.localStorage

export const fetchCourse = () => (dispatch) => {
    dispatch({type: 'FETCH_COURSE'})
    if (storage.hasOwnProperty('courses')) { // eslint-disable-line no-prototype-builtins
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

export const fetchTeacher = () => (dispatch) => {
    dispatch({type: 'FETCH_TEACHER'})
    if (storage.hasOwnProperty('teachers')) { // eslint-disable-line no-prototype-builtins
        dispatch({type: 'RECEIVE_TEACHER', teacher: JSON.parse(storage.getItem('teachers'))})
    } else {
        axios.get(`${baseURL}/teacher`).then(
            res => res.data
        ).then(
            teacher => {
                dispatch({type: 'RECEIVE_TEACHER', teacher})
                storage.setItem('teachers', JSON.stringify(teacher))
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
