import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, TD, Link } from './style';

import { fetchExam, download } from '../../Redux/Action/exam';
import Header from './header';
import { modal } from '../Modal';
import UploadModal from '../Upload';
import Loading from '../Loading';

const Table = () => {
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
        ? (
          <table>
            <Header/>
            <tbody>
              {exam.map(e =>
                <tr key={e.id} onClick={() => download(e)}>
                  <TD>{e.semester}</TD>
                  <TD>{e.type}</TD>
                  <TD>{e.instructor}</TD>
                  <TD>{e.filename}</TD>
                </tr>
              )}
            </tbody>
          </table>
        )
        : (loading === undefined || !id)
          ? <p>請點選左方課程列表</p>
          : !loading && <p>目前尚無考古題，<Link onClick={() => modal(<UploadModal />)}>歡迎上傳</Link></p>
      }
    </Container>
  );
};

export default Table;
