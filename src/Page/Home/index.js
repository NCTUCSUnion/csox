import React from 'react';
import { Link } from 'react-router-dom';
import { Title, EN, ZH, Login, ButtonWrapper, Guest, XmasLogo } from './style';
import { API_URL } from '../../constant';
import SnowStorm from 'react-snowstorm';
import isXmas from '../../Component/Utils/isXmas2020'

const xmas = isXmas();


const Home = () => {
  const goToOauth = () => {
    window.location.href = (`${API_URL}/login`);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {
        xmas && 
        <>
          <div id='snowBG' style={{ position: 'fixed', width: '100%', top: '0px', left: '0px', bottom: '20px', overflow: 'hidden' }}></div>
          <SnowStorm flakesMax={50} flakesMaxActive={30} animationInterval={1}
            followMouse={false} vMaxY={1} vMaxX={1} excludeMobile={false} targetElement='snowBG' />
        </>
      }
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
      {
        xmas &&
        <XmasLogo />
      }
    </div>
  );
};

export default Home;
