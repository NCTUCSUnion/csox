import React from 'react';
import Header from './header';
import { TD } from './style';
import { download } from '../../Redux/Action/exam';

const ExamTable = ({ exam }) => (
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
);

export default ExamTable;
