import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar as Main, Item, Banner as BannerWrapper } from './style';

import {ModalWrapper, modal} from '../Modal';
import UploadModal from '../Upload';

const Banner = () => {
  const history = useHistory();
  const goToLadingPage = () => history.push('/');

  return <BannerWrapper onClick={goToLadingPage}>交大資工考古題系統</BannerWrapper>;
};

const Navbar = () => (
  <Main>
    <ModalWrapper />
    <Banner/>
    <Item onClick={() => modal(<UploadModal />)}>上傳</Item>
  </Main>
);

export default Navbar;
