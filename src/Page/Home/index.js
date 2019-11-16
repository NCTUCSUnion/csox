import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Title, EN, ZH, Login } from './style';
import { toast, ToastWrapper } from '../../Component/Toast';

const Home = ({ isRedirect }) => {
  const location = useLocation();

  useEffect(() => {
    if(location.state){
      toast('請先登入', {type: 'Info'});
    }
    else if(isRedirect === false){
      toast('登入失敗', {type: 'Danger'});
    }
  });

  const goToOauth = () => {
    window.location.href = ('https://csunion.nctu.me/_api/oldexam/login');
  };

  return(
    <>
      <ToastWrapper/>
      <Title>
        <EN>past exam papers</EN>
        <ZH>交大資工系考古題系統</ZH>
      </Title>
      <Login onClick={goToOauth}>登入</Login>
    </>
  );
};

export default Home;
