import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Container, TD, Link } from './style';

import { download } from '../../Redux/Action/exam';
import Header from './header';
import { modal } from '../Modal';
import UploadModal from '../Upload';
import Loading from '../Loading';

const Table = ({ data }) => {
  const loading = useSelector(state => state.main.loading);
  const tableEl = useRef();

  useEffect(() => {
    if(tableEl.current) {
      tableEl.current.scrollTo(0, 0);
    }
  }, [ data ]);

  return (
    <Container ref={tableEl}>
      {loading && <Loading/>}
      {data.length > 0
        ? (
          <table>
            <Header/>
            <tbody>
              {
                data.map(e =>
                  <tr key={e.id} onClick={() => download(e)}>
                    <TD>{e.semester}</TD>
                    <TD>{e.type}</TD>
                    <TD>{e.instructor}</TD>
                    <TD>{e.filename}</TD>
                  </tr>
                )
              }
            </tbody>
          </table>
        )
        : loading === undefined
          ? <p>請點選左方課程列表</p>
          : !loading && <p>目前尚無考古題，<Link onClick={() => modal(<UploadModal />)}>歡迎上傳</Link></p>
      }
    </Container>
  );
};

export default Table;
