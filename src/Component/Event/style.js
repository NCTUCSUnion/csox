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
  background: ${props => props.theme.dark ? 'rgb(65, 65, 65)' : 'white'};
  color: ${props => props.theme.dark ? 'rgb(225, 225, 225)' : 'black'};
  bottom: 0px;
`;

export const Content = styled.div`
  padding: 0px 16px;
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.dark ? 'rgb(225, 225, 225)' : 'black'};
  line-height: 20px;
`;

export const A = styled.a`
  color: ${props => props.theme.colorPrimary};
  &:hover {
    color: ${props => props.theme.colorDarkenPrimary};
    text-decoration: underline !important;
  }
`;

export const ImageBorder = styled.div`
  width: fit-content;
  margin: ${props => props.theme.isMobile ? '80px' : '0px'} auto 20px;
  border: 5px white solid;
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.div`
  width: 256px;
  height: 256px;
  background-image: url(/csnight.png);
  margin: 0 auto;
`;


export const ModalHeader = styled.div`
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

export const ModalContent = styled.div`
    width: 100%;
    text-align: center;

    ${props => props.theme.isMobile ? `
      padding: 60px 30px 10px;
    `: `
      padding: 20px 30px;
    `}
    bottom: 0;
`;

export const ModalConfirm = styled.div`
  cursor: pointer;
  margin-bottom: 15px;
  width: ${props => props.theme.isMobile ? '80vw' : '150px'};
  height: 45px;
  line-height: 45px;
  border-radius: 2px;
  box-shadow: ${props => props.theme.shadow};
  transition: 0.2s;
  background: #718096;

  &:hover {
    background: #4A5568;
  }

  width: ${props => props.theme.isMobile ? '80vw' : '150px'};
  margin: 30px auto;
  color: white;
`;