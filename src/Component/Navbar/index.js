import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar as Main, Item, Banner as BannerWrapper, Upload, Menu, Wrapper, Header, Close, Login, Gap } from './style';

import { ModalWrapper, modal } from '../Modal';
import UploadModal from '../Upload';
import Drawer from '../Drawer';
import { closeModal } from '../Modal';

import IsMobileContext from '../../Theme/IsMobileContext';
import { API_URL } from '../../constant';
import { useSelector } from 'react-redux';
import OAuthModal from '../../Component/Event/oauth';

const onLogin = () => {
  if ((new Date() >= new Date(2021, 6, 15)) || (window.localStorage && window.localStorage.hasOwnProperty('new_oauth_notified')))
    window.location.href = (`${API_URL}/login`);
  else
    modal(<OAuthModal />);
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
      {!isAvailable
        ? isMobile
          ? <Login onClick={onLogin} />
          : <Item onClick={onLogin}>登入</Item>
        : isMobile
          ? <Upload onClick={() => modal(<UploadModal />)} />
          : <Item onClick={() => modal(<UploadModal />)}>上傳</Item>
      }
      {isMobile && <Menu onClick={() => modal(<DrawerModal />)} />}
    </Main>
  );
};

export default Navbar;
