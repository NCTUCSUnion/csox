import React from 'react';
import { Link } from 'react-router-dom';
import { Title, EN, ZH, Login, ButtonWrapper, Guest, ToggleTheme, ToggleIcon } from './style';
import { API_URL } from '../../constant';
import { modal, ModalWrapper } from '../../Component/Modal';
import OAuthModal from '../../Component/Event/oauth';

const Home = ({ dark, toggleDark }) => {
  const onLogin = () => {
    if ((new Date() >= new Date(2021, 6, 15)) || (window.localStorage && window.localStorage.hasOwnProperty('new_oauth_notified')))
      window.location.href = (`${API_URL}/login`);
    else
      modal(<OAuthModal size='sm' />);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ModalWrapper />
      <Title>
        <EN>past exam papers</EN>
        <ZH>交大資工考古題系統</ZH>
      </Title>
      <ButtonWrapper>
        <Login onClick={onLogin}>登入</Login>
        <Link to='/main'>
          <Guest>訪客參觀</Guest>
        </Link>
      </ButtonWrapper>
      <ToggleTheme onClick={toggleDark}>
        <ToggleIcon />
        <span>{dark ? '淺色' : '深色'}主題</span>
      </ToggleTheme>
    </div>
  );
};

export default Home;
