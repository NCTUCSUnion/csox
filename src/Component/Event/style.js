import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { actionMixin } from '../../Theme/mixins';

export const Header = styled.div`
  ${props => props.theme.isMobile && `
    position: fixed;
    width: 100%;
  `}
  display: flex;
  align-items: center;
  color: white;
  height: initial;
  margin: 0 0 20px 0;
  padding: 0 10px;
  font-size: 18px;
  text-align: left;
  font-weight: 500;
  background: ${props => props.theme.colorPrimary};
  box-shadow: ${props => props.theme.shadow};
`;
export const Title = styled.span`
  color: white;
  height: initial;
  padding: 0 20px;
  font-size: 20px;
  text-align: left;
  font-weight: 500;
`;

export const Leave = styled(MdClose)`
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

export const ThemeWrapper = styled.div`
  background: ${props => props.theme.xmas ? 'rgb(65, 65, 65)' : 'white'};
  color: ${props => props.theme.xmas ? 'rgb(225, 225, 225)' : 'black'};
  bottom: 0px;
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.xmas ? 'rgb(225, 225, 225)' : 'black'};
  line-height: 20px;
`;

export const A = styled.a`
  color: ${props => props.theme.colorPrimary};

  &:hover {
    color: ${props => props.theme.colorDarkenPrimary};
    text-decoration: underline !important;
  }
`;

export const Image = styled.div`
  width: 256px;
  height: 256px;
  background-image: url(/candy.png);
  margin: ${props => props.theme.isMobile ? '80px' : '0px'} auto 20px;
`;