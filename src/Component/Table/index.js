import React, { useEffect, useRef, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Link } from './style';

import IsMobileContext from '../../Theme/IsMobileContext';
import { fetchExam } from '../../Redux/Action/exam';
import { modal } from '../Modal';
import UploadModal from '../Upload';
import Loading from '../Loading';
import DesktopExamTable from './Desktop';
import MobileExamTable from './Mobile';

const Table = () => {
  const isMobile = useContext(IsMobileContext);
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const exam = useSelector(state => state.main.exam[id] || []);
  const loading = useSelector(state => state.main.loading);
  const tableEl = useRef();

  useEffect(() => {
    dispatch(fetchExam(id));

    if(tableEl.current) {
      tableEl.current.scrollTo(0, 0);
    }
  }, [ id, dispatch ]);

  return (
    <Container ref={tableEl}>
      {loading && <Loading/>}
      {exam.length > 0
        ? isMobile
          ? <MobileExamTable exam={exam}/>
          : <DesktopExamTable exam={exam}/>
        : (loading === undefined || !id)
          ? <p>請點選{`${isMobile ? '上': '左'}`}方課程列表</p>
          : !loading && <p>目前尚無考古題，<Link onClick={() => modal(<UploadModal />)}>歡迎上傳</Link></p>
      }
    </Container>
  );
};

export default Table;
