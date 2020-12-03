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
  color: ${props => props.theme.xmas ? 'rgb(225, 225, 225)' : 'rgb(83, 83, 83)'};
  font-size: 2rem;
  font-weight: 400;
  line-height: 30px;
  margin-left: 30px;
`;

export const ZH = styled.h1`
  margin-left: ${props => props.theme.isMobile ? 0 : 30}px;
  color: ${props => props.theme.xmas ? 'rgb(225, 225, 225)' : 'rgb(83, 83, 83)'};
  font-size: ${props => props.theme.isMobile ? '2rem' : '3.2rem'};
  font-weight: 500;
  line-height: 30px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: ${props => props.theme.isMobile ? '50%' : '20vw'};
  bottom: ${props => props.theme.isMobile ? '25%' : '33vh'};
  ${props => props.theme.isMobile && `
    transform: translate(50%, -50%);
  `}
  color: #fff;
  text-align: center;
  font-weight: 400;
  line-height: 45px;
  user-select: none;
`;

const Button = styled.div`
  cursor: pointer;
  margin-bottom: 15px;
  width: ${props => props.theme.isMobile ? '80vw' : '150px'};
  height: 45px;
  border-radius: 2px;
  box-shadow: ${props => props.theme.shadow};
  transition: 0.2s;
`;
export const Login = styled(Button)`
  background: ${props => props.theme.colorPrimary};

  &:hover {
    background: ${props => props.theme.colorDarkenPrimary};
  }
`;

export const Guest = styled(Button)`
  background: #718096;

  &:hover {
    background: #4A5568;
  }
`;

export const XmasLogo = styled.div`
  ${props => props.theme.isMobile ?
  `
    bottom: 10px;
    right: 0px;
    height: 180px;
    width: 180px;
  ` : 
  `
    left: calc(10vw + 265px);
    top: calc((100vh - 20px - 25vh) / 2 - 200px);
    height: 256px;
    width: 256px;
  `}
  background-image: url(/xmas_logo_256.png);
  background-size: 100%;
  opacity: 0.5;
  position: absolute;
`;
