import React from 'react';

const Header = ({ width }) => (
  <thead>
    <tr>
      <th>年份</th>
      <th>類型</th>
      {width >= 976 && <th>老師</th>}
      {width >= 576 && <th>檔名</th>}
    </tr>
  </thead>
);

export default Header;