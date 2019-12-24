import React from 'react';
import { useSelector } from 'react-redux';

import { COURSE_TYPES } from '../../constant';
import ListGroup from './ListGroup';

const Drawer = () => {
  const course = useSelector(state => (
    COURSE_TYPES.map((group, index) => ({
      type: group,
      course: state.main.allCourse.filter(course => course.type - 1 === index).map(course => ({
        ...course,
        type: course.type - 1
      }))
    }))
  ));

  return (
    <>
      {course.map(
        (value, index) => (
          <ListGroup
            label={value.type}
            list={value.course}
            key={index}
            order={index}/>
        )
      )}
    </>
  );
};

export default Drawer;
