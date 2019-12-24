import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Label, List, Caret, Item } from './style';
import IsMobileContext from '../../Theme/IsMobileContext';
import { closeModal } from '../Modal';

const ListGroup = ({ order, label, list }) => {
  const isMobile = useContext(IsMobileContext);
  const history = useHistory();
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const { toggles, chooseType, chaos } = useSelector(state => state.main);
  const dispatch = useDispatch();
  const toggle = type => () => {
    dispatch({type: 'TOGGLE', category: type});
  };
  const goToExamPage = id => () => {
    isMobile && closeModal();
    history.push(`/main/${id}`);
  };

  return (
    <>
      <Label onClick={toggle(order)}>
        <Caret open={toggles[order] && (chaos || chooseType === order)}/>{label}
      </Label>
      {toggles[order] && (chaos || chooseType === order) && list.map(
        (cos, index) => (
          <List
            key={index}
            active={id === `${cos.id}`}
            onClick={goToExamPage(cos.id)}>
            <Item>{cos.zh}</Item>
          </List>
        )
      )}
    </>
  );
};

export default ListGroup;
