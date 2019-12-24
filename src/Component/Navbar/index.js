import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar as Main, Item, Banner as BannerWrapper, Upload, Menu, Wrapper, Header, Close } from './style';

import {ModalWrapper, modal} from '../Modal';
import UploadModal from '../Upload';
import Drawer from '../Drawer';
import { closeModal } from '../Modal';

import IsMobileContext from '../../Theme/IsMobileContext';

const Banner = () => {
  const history = useHistory();
  const goToLadingPage = () => history.push('/');

  return <BannerWrapper onClick={goToLadingPage}>交大資工考古題系統</BannerWrapper>;
};

const DrawerModal = () => (
  <>
    <Header>
      <Close onClick={closeModal}/>
      課程列表
    </Header>
    <Wrapper>
      <Drawer/>
    </Wrapper>
  </>
);

const Navbar = () => {
  const isMobile = useContext(IsMobileContext);

  return (
    <Main>
      <ModalWrapper />
      <Banner/>
      {isMobile
        ? <Upload onClick={() => modal(<UploadModal />)}/>
        : <Item onClick={() => modal(<UploadModal />)}>上傳</Item>}
      {isMobile && <Menu onClick={() => modal(<DrawerModal/>)}/>}
    </Main>
  );
};

export default Navbar;
