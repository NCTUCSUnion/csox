import styled from 'styled-components';
import { FaFileAlt, FaUserEdit } from 'react-icons/fa';
import { MdExpandMore } from 'react-icons/md';
import { IoMdDownload } from 'react-icons/io';
import hashToColor from '../Utils/hashToColor';
import { actionMixin, textMixin } from '../../Theme/mixins';
import { ReactComponent as LoadingComponent } from '../../Svg/loading.svg';

export const Container = styled.div`
  margin: 65px 0 0 220px;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: hidden;
  text-align: center;
  transition: .2s;

  @media (max-width: 576px) {
    margin-left: 0;
    width: 100%;
    transition: .2s;
  }

  ${props => props.theme.isMobile && `
    margin-left: 0;
    width: 100%;
    transition: .2s;
    padding: 0;
  `}

  z-index: 1;
`;

export const TD = styled.td `
  white-space: nowrap;
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: underline !important;
  color: ${props => props.theme.colorPrimary};
`;

export const Main = styled.div`
  position: relative;
  min-width: 300px;
`;

export const Card = styled.div`
  width: 100%;
  padding: 15px 10px 15px 15px;
  border-bottom: 1px solid #eee;
  background: #fff;
  z-index: 10;
  transition: margin-bottom 0.2s ease-in-out;
  box-shadow: ${props => props.theme.xmas ? '0 0 0 15px rgb(65, 65, 65) inset' : '0 0 0'};

  ${props => props.show && `
    margin-bottom: 50px;
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  height: 50px;
  background: ${props => props.theme.xmas ? 'rgb(65, 65, 65)' : 'white'};
  color: ${props => props.theme.xmas ? 'rgb(225, 225, 225)' : 'black'};
`;

export const Actions = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
  background: ${props => props.theme.xmas ? 'rgb(65, 65, 65)' : 'white'};
`;

export const Download = styled(IoMdDownload)`
  ${actionMixin}
  fill: ${props => props.theme.xmas ? 'rgb(225, 225, 225)' : '#444'};
`;

export const More = styled(MdExpandMore)`
  ${props => props.show && `
    transform: rotate(-180deg);
    transition: 0.5s;
  `}

  ${actionMixin}
  fill: ${props => props.theme.xmas ? 'rgb(225, 225, 225)' : '#444'};
`;

export const Meta = styled.div`
  position: absolute;
  z-index: 0;
  height: 50px;
  width: 100%;
  background: ${props => props.theme.xmas ? 'rgb(120, 120, 120)' : '#fafafa'};
  padding: 10px 10px 10px 15px;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #333;
  transition: bottom 0.2s ease-in-out;
  box-shadow: ${props => props.theme.xmas ? '0 0 0 15px rgb(120, 120, 120) inset' : '0 0 0'};

  bottom: -50px;
`;

export const Row = styled.div`
  margin-bottom: 5px;
  ${textMixin}
  background: ${props => props.theme.xmas ? 'rgb(120, 120, 120)' : 'white'};
  color: ${props => props.theme.xmas ? 'rgb(225, 225, 225)' : 'black'};
`;

export const File = styled(FaFileAlt)`
  margin-right: 3px;
  fill: ${props => props.theme.xmas ? 'rgb(225, 225, 225)' : '#444'};
`;

export const Provider = styled(FaUserEdit)`
  margin-right: 3px;
  fill: ${props => props.theme.xmas ? 'rgb(225, 225, 225)' : '#444'};
`;

export const ChipWrapper = styled.div`
  height: 20px;
`;

export const Chip = styled.span`
  margin-right: 6px;
  padding: 1px 5px;
  font-size: 12px;
  border-radius: 4px;
  background: ${props => hashToColor(props.children)};
  color: #fff;
`;

export const Title = styled.div`
  text-align: left;
  margin: 5px 0;
`;

export const Loading = styled(LoadingComponent)`
  display: block;
  margin: 20px auto;
  width: 50px;
  fill: ${props => props.theme.colorPrimary};
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.xmas ? 'rgb(225, 225, 225)' : 'black'};
`;

export const TH = styled.th`
  color: ${props => props.theme.xmas ? 'rgb(225, 225, 225)' : 'black'};
`;