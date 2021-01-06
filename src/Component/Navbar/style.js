import styled from 'styled-components';
import { MdFileUpload, MdMenu, MdClose } from 'react-icons/md';
import { AiOutlineLogin } from 'react-icons/ai';
import { actionMixin, textMixin } from '../../Theme/mixins';

export const Navbar = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  min-width: 300px;
  z-index: 9;
  position: fixed;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  height: ${props => props.theme.navHeight}px;
  background: ${props => props.theme.dark ? props.theme.colorPrimary : props.theme.colorDefault};
  box-shadow: ${props => props.theme.shadow};
  line-height: ${props => props.theme.navHeight}px;
`;

export const Banner = styled.div`
  left: 15px;
  text-align: left;
  cursor: pointer;
  position: relative;
  font-size: 22px;
  font-weight: 500;
  user-select: none;
  height: ${props => props.theme.navHeight}px;
  color: ${props => props.theme.dark ? 'rgb(255, 255, 255);' : 'black'};

  &::before {
    top: 5px;
    width: 6px;
    height: 25px;
    content: "";
    display: inline-block;
    position: relative;
    margin-right: 8px;
    background: ${props => props.theme.dark ? 'white' : props.theme.colorPrimary};
  }

  ${textMixin}

  /* &::after {
    top: 3px;
    color: white;
    right: 0;
    width: 33px;
    height: 20px;
    content: "beta";
    position: absolute;
    font-size: 10px;
    transform: translate(40%, 15%);
    line-height: 20px;
    border-radius: 1px;
    background-color: #e6326f;
  } */
`;

export const Item = styled.div`
  cursor: pointer;
  padding: 0 20px;
  text-align: center;
  height: ${props => props.theme.navHeight}px;
  line-height: ${props => props.theme.navHeight}px;
  color: ${props => props.theme.dark ? 'white' : 'black'};

  &:hover {
    background: ${props => props.theme.dark ? props.theme.colorDarkenPrimary : '#eee'};
    transition: .2s;
  }
`;

export const Upload = styled(MdFileUpload)`
  ${actionMixin};
  margin-right: 3px;
  fill: ${props => props.theme.dark ? 'white' : '#444'};
`;

export const Login = styled(AiOutlineLogin)`
  ${actionMixin};
  margin-right: 3px;
  fill: ${props => props.theme.dark ? 'white' : '#444'};
`;

export const Menu = styled(MdMenu)`
  ${actionMixin};
  margin-right: 15px;
  fill: ${props => props.theme.dark ? 'white' : '#444'};
`;

export const Wrapper = styled.div`
  margin-top: 65px;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colorPrimary};
  box-shadow: ${props => props.theme.shadow};
  font-size: 18px;
  height: 65px;
  text-align: center;
  color: white;
`;

export const Close = styled(MdClose)`
  ${actionMixin}

  fill: white;
  transition: .2s;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colorDarkenPrimary};
  }

  &:active {
    fill: white;
    background: rgba(256, 256, 256, 0.3);
  }
`;

export const Gap = styled.div`
  display: flex;
  flex: 1;
`;