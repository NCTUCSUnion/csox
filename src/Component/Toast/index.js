/*
  toast(content,[type,autoHide,static])
  Usage:
    Put <ToastWrapper/> before you call toast()
    Just simply call toast() when you want to toast a notification.
  Option details
    type    [success,info,warning,danger] the default style is success
    autoHide[number] the duration(unit:sec) until auto removing, default value is 5sec
    static  [boolean] if set true, disable auto hidden
*/
import React from 'react';
import { Wrapper, Item } from './style';

const palette = {
  Success: ['rgba(91, 200, 165,1)', '#fff'],
  Info: ['#17a2b8', '#fff'],
  Warning: ['#ffc107', '#fff'],
  Danger: ['#dc3545', '#fff']
};

const getter = {
  func: [],
  add (callback) {
    this.func.push(callback);
    return this;
  },
  remove () {
    this.func = [...[]];
    return this;
  }
};

class Toast extends React.Component {
  constructor (props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount () {
    if (!this.props.static) {
      let autoHideDuration = this.props.autoHide * 1000;
      setTimeout(this.handleClose, autoHideDuration);
    }
  }
  handleClose () {
    this.props.close(this.props.id);
  }
  render () {
    return (
      <Item
        colors={palette[this.props.type]}
        onClick={this.handleClose}>
        {this.props.children}
      </Item>
    );
  }
}

class ToastWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      seq: 0,
      notifyList: []
    };
    this.addToast = this.addToast.bind(this);
    this.removeToast = this.removeToast.bind(this);
  }
  componentDidMount () {
    getter
      .add(notification => this.addToast(notification))
      .add(id => this.removeToast(id));
  }
  componentWillUnmount () {
    this.setState = () => {};
    getter.remove();
  }
  addToast (notification) {
    let updatedList = this.state.notifyList;
    updatedList.push({ ...notification, id: this.state.seq });
    this.setState({ seq: this.state.seq + 1, notifyList: [...updatedList] });
  }
  removeToast (id) {
    let updatedList = this.state.notifyList.filter(notification => notification.id !== id);
    this.setState({ notifyList: [...updatedList] });
  }
  render () {
    return (
      <Wrapper>
        {
          this.state.notifyList.length > 0 &&
        this.state.notifyList.sort((a, b) => a.id < b.id)
          .map(
            notification =>
              <Toast
                key={notification.id}
                id={notification.id}
                close={this.removeToast}
                type={notification.type || 'Success'}
                autoHide={notification.autoHide || 5}
                static={notification.static}>
                {notification.content}
              </Toast>
          )
        }
      </Wrapper>
    );
  }
}


const toast = (content, options) => {
  getter.func[0]({ content: content, ...options });
};

export { ToastWrapper, Toast, toast };
