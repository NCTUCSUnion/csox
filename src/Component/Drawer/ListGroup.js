import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {fetchExam} from '../../Redux/Action/exam';
import { Label, List } from './style';

class ListGroup extends React.Component {
  constructor (props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle (type) {
    this.props.toggle(type);
  }

  render () {
    const {
      toggles,
      chaos,
      type,
      order,
      label,
      list,
      selectID,
      fetchExam } = this.props;
    return (
      <React.Fragment>
        <Label onClick={() => this.toggle(order)}>
          <i className={classNames('fas',(toggles[order] && (chaos || type === order)) ?'fa-caret-down':'fa-caret-right')}/>
        &nbsp;{label}
        </Label>
        {toggles[order] && (chaos || type === order) && list.map(
          (cos, index) => (
            <List
              key={index}
              active={selectID === cos.id}
              onClick={() => fetchExam(cos)}>
              {cos.zh}
            </List>
          )
        )}
      </React.Fragment>
    );
  }
}

const mapState2Prop = state => ({
  toggles: state.main.toggles,
  type: state.main.chooseType,
  selectID: state.main.chooseCourse,
  chaos: state.main.chaos
});

const mapDispatch2Prop = dispatch => ({
  fetchExam: (id) => dispatch(fetchExam(id)),
  toggle: (type) => dispatch({type: 'TOGGLE', category: type})
});

export default connect(mapState2Prop, mapDispatch2Prop)(ListGroup);
