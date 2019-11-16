/*
  modal([react component])
  Usage:
    Put <ModalWrapper/> before you call modal()
    Just simply use onClick={() => modal(<jsx/>)}
*/
import React from 'react';
import { Main, Content, Dialog } from './style';

const getter = {
  func: [],
  add (callback) {
    this.func.push(callback);
    return this;
  },
  remove () {
    this.func = [];
    return this;
  }
};

const Modal = ({ children }) => (
  <Dialog>
    <Content onClick={e => e.stopPropagation()}>
      {children}
    </Content>
  </Dialog>
);

class ModalWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false,
      modal: null
    };
    this.addModal = this.addModal.bind(this);
    this.removeModal = this.removeModal.bind(this);
  }
  componentDidMount () {
    getter
      .add(this.addModal)
      .add(this.removeModal);
  }
  componentWillUnmount () {
    this.setState = () => {};
    getter.remove();
  }
  addModal (content) {
    document.body.style.overflowY = 'hidden';
    this.setState({ open: true, modal: content });
  }
  removeModal () {
    document.body.style.overflowY = 'auto';
    this.setState({ open: false });
  }
  render () {
    return (
      <Main open={this.state.open} onClick={this.removeModal}>
        {this.state.open &&
          <Modal>
            {this.state.modal}
          </Modal>}
      </Main>
    );
  }
}

const modal = (content) => {
  getter.func[0](content);
};

const closeModal = () => {
  getter.func[1]();
};


export { ModalWrapper, Modal, modal, closeModal };
