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
import React, { useEffect, useState } from 'react';
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

const Toast = ({ id, type, isStatic, autoHide, close, children }) => {
  const handleClose = () => close(id);
  useEffect(() => {
    if (!isStatic) {
      let autoHideDuration = autoHide * 1000;
      setTimeout(handleClose, autoHideDuration);
    }
  }, []); // eslint-disable-line

  return (
    <Item colors={palette[type]} onClick={handleClose}>
      {children}
    </Item>
  );
};

const ToastWrapper = () => {
  const [ notifyList, setNotifyList ] = useState({ data: [], seq: 0 });

  const addToast = notification => {
    setNotifyList(({data, seq}) => ({
      data: [...data, { ...notification, id: seq }],
      seq: seq + 1,
    }));
  };

  const removeToast = id => {
    setNotifyList(notifyList => ({
      ...notifyList,
      data: notifyList.data.filter(notification => notification.id !== id),
    }));
  };

  useEffect(() => {
    getter
      .add(notification => addToast(notification))
      .add(id => removeToast(id));
    return () => {
      // setNotifyList = () => {};
      getter.remove();
    };
  }, []);

  return (
    <Wrapper>
      {notifyList.data.length > 0 && notifyList.data.sort((a, b) => a.id < b.id)
        .map(notification =>
          <Toast
            key={notification.id}
            id={notification.id}
            close={removeToast}
            type={notification.type || 'Success'}
            autoHide={notification.autoHide || 5}
            static={notification.static}>
            {notification.content}
          </Toast>
        )}
    </Wrapper>
  );
};

const toast = (content, options) => {
  getter.func[0]({ content: content, ...options });
};

export { ToastWrapper, Toast, toast };
