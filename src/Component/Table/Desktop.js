import React from 'react';
import Header from './header';
import { TD } from './style';
import { download } from '../../Redux/Action/exam';
import { useSelector } from 'react-redux';
import { toast } from '../Toast';

const ExamTable = ({ exam }) => {
  const isAvailable = useSelector(state => state.auth.available);

  return (
    <table>
      <Header/>
      <tbody>
        {exam.map(e =>
          <tr key={e.id} onClick={() => {
            if (!isAvailable) {
              toast('請點擊右上方登入', {type: 'Info'});
              return;
            }
            download(e);
          }}>
            <TD>{e.semester}</TD>
            <TD>{e.type}</TD>
            <TD>{e.instructor}</TD>
            <TD>{e.filename}</TD>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ExamTable;
