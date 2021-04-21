import React from 'react';
import { Link } from 'react-router-dom';
import { Title, EN, ZH, Login, ButtonWrapper, Guest, ToggleTheme, ToggleIcon, Content, Header, ModalConfirm } from './style';
import { API_URL } from '../../constant';
import { modal, ModalWrapper } from '../../Component/Modal';

const OAuthModal = () => {
  const gotoOAuth = () => {
    if (window.localStorage)
      window.localStorage.setItem('new_oauth_notified', 'true')
    window.location.href = (`${API_URL}/login`);
  }
  return (
    <>
      <Header>NYCU OAuth 轉移通知</Header>
      <Content>
        <p>考古題系統已更新為使用NYCU OAuth驗證身分</p>
        <p>往後請使用新的NYCU單一入口帳號登入！</p>
        <ModalConfirm onClick={gotoOAuth}>我瞭解了</ModalConfirm>
      </Content>
    </>
  )
}

const Home = ({ dark, toggleDark }) => {
  const onLogin = () => {
    if ((new Date() >= new Date(2021, 6, 15)) || (window.localStorage && window.localStorage.hasOwnProperty('new_oauth_notified')))
      window.location.href = (`${API_URL}/login`);
    else
      modal(<OAuthModal />)
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ModalWrapper size='sm' />
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
