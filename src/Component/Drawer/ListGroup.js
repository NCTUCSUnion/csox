import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {fetchExam} from '../../Redux/Action/exam';
import { Label, List } from './style';

const ListGroup = ({ order, label, list }) => {
  const { toggles, chooseType, chooseCourse, chaos } = useSelector(state => state.main);
  const dispatch = useDispatch();
  const toggle = type => () => {
    dispatch({type: 'TOGGLE', category: type});
  };
  const fetch = cos => () => {
    dispatch(fetchExam(cos));
  };

  return (
    <>
      <Label onClick={toggle(order)}>
        <i className={classNames('fas', (toggles[order] && (chaos || chooseType === order)) ?'fa-caret-down':'fa-caret-right')}/>
      &nbsp;{label}
      </Label>
      {toggles[order] && (chaos || chooseType === order) && list.map(
        (cos, index) => (
          <List
            key={index}
            active={chooseCourse === cos.id}
            onClick={fetch(cos)}>
            {cos.zh}
          </List>
        )
      )}
    </>
  );
};

export default ListGroup;
