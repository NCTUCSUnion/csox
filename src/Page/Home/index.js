import React from 'react';
import { Link } from 'react-router-dom';
import { Title, EN, ZH, Login, ButtonWrapper, Guest } from './style';
import { API_URL } from '../../constant';

const Home = () => {
  const goToOauth = () => {
    window.location.href = (`${API_URL}/login`);
  };

  return(
    <>
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
    </>
  );
};

export default Home;
