import React from 'react';
import { Link } from 'react-router-dom';
import { Title, EN, ZH, Login, ButtonWrapper, Guest, ToggleTheme, ToggleIcon, ToggleText } from './style';
import { API_URL } from '../../constant';

const Home = ({ dark, toggleDark }) => {
  const goToOauth = () => {
    window.location.href = (`${API_URL}/login`);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Title>
        <EN>past exam papers</EN>
        <ZH>交大資工考古題系統</ZH>
      </Title>
      <ButtonWrapper>
        <Login onClick={goToOauth}>登入</Login>
        <Link to='/main'>
          <Guest>訪客參觀</Guest>
        </Link>
      </ButtonWrapper>
      <ToggleTheme onClick={toggleDark}>
        <ToggleIcon />
        <ToggleText>{dark ? '淺色' : '深色'}主題</ToggleText>
      </ToggleTheme>
    </div>
  );
};

export default Home;
