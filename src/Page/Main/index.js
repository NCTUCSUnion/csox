import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import {fetchCourse, fetchTeacher} from '../../Redux/Action/exam';
import Drawer from '../../Component/Drawer';
import Table from '../../Component/Table';
import { ToastWrapper } from '../../Component/Toast';
import IsMobileContext from '../../Theme/IsMobileContext';


const Main = () => {
  const isMobile = useContext(IsMobileContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
    dispatch(fetchTeacher());
  }, [ dispatch ]);

  return (
    <>
      {!isMobile && <Drawer/>}
      <Table/>
      <ToastWrapper/>
    </>
  );
};

export default Main;
