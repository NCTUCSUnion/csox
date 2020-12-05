import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar as Main, Item, Banner as BannerWrapper, Upload, Menu, Wrapper, Header, Close, Login, XmasBanner, Gap } from './style';

import { ModalWrapper, modal } from '../Modal';
import UploadModal from '../Upload';
import Drawer from '../Drawer';
import { closeModal } from '../Modal';

import IsMobileContext from '../../Theme/IsMobileContext';
import { API_URL } from '../../constant';
import { useSelector } from 'react-redux';
import isXmas from '../../Component/Utils/isXmas2020'
const xmas = isXmas();

const goToOauth = () => {
  window.location.href = (`${API_URL}/login`);
};

const Banner = () => {
  const history = useHistory();
  const goToLadingPage = () => history.push('/');

  return <BannerWrapper onClick={goToLadingPage}>交大資工考古題系統</BannerWrapper>;
};

const DrawerModal = () => (
  <>
    <Header>
      <Close onClick={closeModal} />
      課程列表
    </Header>
    <Wrapper>
      <Drawer />
    </Wrapper>
  </>
);

const Navbar = () => {
  const isMobile = useContext(IsMobileContext);
  const isAvailable = useSelector(state => state.auth.available);

  return (
    <Main>
      <ModalWrapper />
      <Banner />
      {isMobile && <Gap />}
      {xmas && !isMobile && <XmasBanner />}
      {!isAvailable
        ? isMobile
          ? <Login onClick={goToOauth} />
          : <Item onClick={goToOauth}>登入</Item>
        : isMobile
          ? <Upload onClick={() => modal(<UploadModal />)} />
          : <Item onClick={() => modal(<UploadModal />)}>上傳</Item>
      }
      {isMobile && <Menu onClick={() => modal(<DrawerModal />)} />}
    </Main>
  );
};

export default Navbar;
