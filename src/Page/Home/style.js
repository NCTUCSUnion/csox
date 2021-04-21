import styled from 'styled-components';
import { MdBrightnessMedium } from 'react-icons/md';

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
  display: ${props => props.theme.isMobile ? 'none' : 'block'};
  color: ${props => props.theme.dark ? 'rgb(225, 225, 225)' : 'rgb(83, 83, 83)'};
  font-size: 2rem;
  font-weight: 400;
  line-height: 30px;
  margin-left: 30px;
`;

export const ZH = styled.h1`
  ${props => !props.theme.isMobile && `margin-left: 30px;`}
  color: ${props => props.theme.dark ? 'rgb(225, 225, 225)' : 'rgb(83, 83, 83)'};
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
  line-height: 45px;
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

export const ToggleTheme = styled.div`
  height: 48px;
  width: 140px;
  display: flex;
  position: fixed;
  bottom: 32px;
  border-radius: 1.4rem;
  padding-left: 14px;
  
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 48px;
  user-select: none;

  justify-content: start;
  align-items: center;

  ${props => props.theme.dark ? `
    background: #7C7C7C;
    &:hover {
      background: #606060;
    }
  ` : `
    background: #555555;
    &:hover {
      background: #414141;
    }
  `}

  ${props => props.theme.isMobile ? `
    right: -20px;
  ` : `
    &:hover {
      right: -20px;
      transition: right 0.3s, background 0.2s;
    }
    &:not(:hover) {
      right: -80px;
      transition: right 0.3s ease 0.5s, background 0.2s;
    }
    &:hover > span {
      opacity: 1.0;
      transition: opacity 0.1s;
    }
    &:not(:hover) > span {
      opacity: 0.0;
      transition: opacity 0.1s ease 0.4s;
    }
    &:hover > svg {
      transform: rotate(-180deg);
      transition: transform 0.5s;
    }
    &:not(:hover) > svg {
      transform: rotate(0deg);
      transition: transform 0.5s;
    }
  `}
`;

export const ToggleIcon = styled(MdBrightnessMedium)`
  display: flex;
  height: 24px;
  width: 24px;
  margin-right: 6px;
`;

export const Header = styled.div`
  ${props => props.theme.isMobile && `
    position: fixed;
    width: 100%;
  `}
  display: flex;
  align-items: center;
  color: white;
  height: initial;
  padding: 15px 30px;
  font-size: 20px;
  text-align: left;
  font-weight: 500;
  background: ${props => props.theme.colorPrimary};
  box-shadow: ${props => props.theme.shadow};
`;

export const Content = styled.div`
    width: 100%;
    text-align: center;

    ${props => props.theme.isMobile ? `
      padding: 60px 30px 10px;
    `: `
      padding: 20px 30px;
    `}
    bottom: 0;
`;

export const ModalConfirm = styled(Button)`
  background: #718096;

  &:hover {
    background: #4A5568;
  }

  width: ${props => props.theme.isMobile ? '80vw' : '150px'};
  margin: 30px auto;
  color: white;
`;