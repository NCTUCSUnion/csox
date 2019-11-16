import React from 'react';

import { Drawer as Wrapper } from './style';
import ListGroup from './ListGroup';

const Drawer = ({ data }) => (
  <Wrapper>
    {data.map(
      (value, index) => (
        <ListGroup
          label={value.type}
          list={value.course}
          key={index}
          order={index}
        />
      )
    )}
  </Wrapper>
);

export default Drawer;
