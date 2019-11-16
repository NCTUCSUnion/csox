import styled from 'styled-components';

export const Title = styled.div`
  top: calc((100vh - 20px - 25vh) / 2);
  left: 10vw;
  position: absolute;
  border-left: 13px solid ${props => props.theme.colorPrimary};
`;

export const EN = styled.div`
  color: rgb(83, 83, 83);
  font-size: 2rem;
  font-weight: 400;
  line-height: 30px;
  margin-left: 30px;
`;

export const ZH = styled.h1`
  color: rgb(83, 83, 83);
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 30px;
  margin-left: 30px;
`;

export const Login = styled.div`
  color: #fff;
  right: 20vw;
  width: 150px;
  bottom: 33vh;
  cursor: pointer;
  height: 45px;
  position: absolute;
  text-align: center;
  font-weight: 400;
  line-height: 45px;
  border-radius: 2px;
  background: ${props => props.theme.colorPrimary};
  box-shadow: ${props => props.theme.shadow};

  &:hover {
    color: white;
  }
`;
