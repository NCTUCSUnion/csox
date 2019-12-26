import styled from 'styled-components';

export const Title = styled.div`
  position: absolute;
  ${props => !props.theme.isMobile
    ? `
      top: calc((100vh - 20px - 25vh) / 2);
      left: 10vw;
      border-left: 13px solid ${props => props.theme.colorPrimary};`
    : `
      top: 35%;
      transform: translateY(-50%);
      width: 100%;
      display: flex;
      justify-content: center;
    `}
`;

export const EN = styled.div`
  display: ${props => props.theme.isMobile ? 'none': 'block'};
  color: rgb(83, 83, 83);
  font-size: 2rem;
  font-weight: 400;
  line-height: 30px;
  margin-left: 30px;
`;

export const ZH = styled.h1`
  margin-left: ${props => props.theme.isMobile ? 0 : 30}px;
  color: rgb(83, 83, 83);
  font-size: ${props => props.theme.isMobile ? '2rem' : '3.2rem'};
  font-weight: 500;
  line-height: 30px;
`;

export const Login = styled.div`
  position: absolute;
  right: ${props => props.theme.isMobile ? '50%' : '20vw'};
  bottom: ${props => props.theme.isMobile ? '30%' : '33vh'};
  ${props => props.theme.isMobile && `
    transform: translate(50%, -50%);
  `}

  width: ${props => props.theme.isMobile ? '80%' : '150px'};
  height: 45px;
  border-radius: 2px;
  background: ${props => props.theme.colorPrimary};
  box-shadow: ${props => props.theme.shadow};
  color: #fff;
  text-align: center;
  font-weight: 400;
  line-height: 45px;
  user-select: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colorDarkenPrimary};
  }
`;
