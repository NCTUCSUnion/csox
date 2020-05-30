import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import {fetchCourse, fetchTeacher} from '../../Redux/Action/exam';
import Drawer from '../../Component/Drawer';
import Table from '../../Component/Table';
import { ToastWrapper } from '../../Component/Toast';
import IsMobileContext from '../../Theme/IsMobileContext';
import { DrawerWrapper } from './style';
import { checkIsAvailable } from '../../Redux/Action/auth';


const Main = () => {
  const isMobile = useContext(IsMobileContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkIsAvailable());
    dispatch(fetchCourse());
    dispatch(fetchTeacher());
  }, [ dispatch ]);

  return (
    <>
      {!isMobile && <DrawerWrapper><Drawer/></DrawerWrapper>}
      <Table/>
      <ToastWrapper/>
    </>
  );
};

export default Main;
