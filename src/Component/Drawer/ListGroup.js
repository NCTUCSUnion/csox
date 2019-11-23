import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FaCaretRight, FaCaretDown } from 'react-icons/fa';
import { Label, List } from './style';

const ListGroup = ({ order, label, list }) => {
  const history = useHistory();
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const { toggles, chooseType, chaos } = useSelector(state => state.main);
  const dispatch = useDispatch();
  const toggle = type => () => {
    dispatch({type: 'TOGGLE', category: type});
  };
  const goToExamPage = id => () => {
    history.push(`/main/${id}`);
  };

  return (
    <>
      <Label onClick={toggle(order)}>
        {toggles[order] && (chaos || chooseType === order) ? <FaCaretDown/> : <FaCaretRight/>}
      &nbsp;{label}
      </Label>
      {toggles[order] && (chaos || chooseType === order) && list.map(
        (cos, index) => (
          <List
            key={index}
            active={id === `${cos.id}`}
            onClick={goToExamPage(cos.id)}>
            {cos.zh}
          </List>
        )
      )}
    </>
  );
};

export default ListGroup;
