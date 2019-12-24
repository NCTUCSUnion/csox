import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar as Main, Item, Banner as BannerWrapper, Upload } from './style';

import {ModalWrapper, modal} from '../Modal';
import UploadModal from '../Upload';

import IsMobileContext from '../../Theme/IsMobileContext';

const Banner = () => {
  const history = useHistory();
  const goToLadingPage = () => history.push('/');

  return <BannerWrapper onClick={goToLadingPage}>交大資工考古題系統</BannerWrapper>;
};

const Navbar = () => {
  const isMobile = useContext(IsMobileContext);

  return (
    <Main>
      <ModalWrapper />
      <Banner/>
      {isMobile
        ? <Upload onClick={() => modal(<UploadModal />)}/>
        : <Item onClick={() => modal(<UploadModal />)}>上傳</Item>}
    </Main>
  );
};

export default Navbar;
