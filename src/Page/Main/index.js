import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchCourse, fetchTeacher} from '../../Redux/Action/exam';
import Drawer from '../../Component/Drawer';
import Table from '../../Component/Table';
import { ToastWrapper } from '../../Component/Toast';


const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
    dispatch(fetchTeacher());
  }, [ dispatch ]);

  return (
    <>
      <Drawer/>
      <Table/>
      <ToastWrapper/>
    </>
  );
};

export default Main;
