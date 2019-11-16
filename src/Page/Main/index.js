import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCourse, fetchTeacher} from '../../Redux/Action/exam';
import Drawer from '../../Component/Drawer';
import Table from '../../Component/Table';
import { ToastWrapper } from '../../Component/Toast';

export const COURSE_TYPES = ['大一', '大二', '大三', '大四', '研究所', '資工其他','非資工科目', '考資工研究所'];

const Main = () => {
  const dispatch = useDispatch();
  const exam = useSelector(state => state.main.exam);
  const course = useSelector(state => (
    COURSE_TYPES.map((group, index) => ({
      type: group,
      course: state.main.allCourse.filter(course => course.type - 1 === index).map(course => ({
        ...course,
        type: course.type - 1
      }))
    }))
  ));

  useEffect(() => {
    dispatch(fetchCourse());
    dispatch(fetchTeacher());
  }, []);

  return (
    <>
      <Drawer data={course} />
      <Table data={exam} />
      <ToastWrapper/>
    </>
  );
};

export default Main;
