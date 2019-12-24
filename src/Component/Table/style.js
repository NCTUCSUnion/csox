import styled from 'styled-components';
import { FaFileAlt, FaUserEdit } from 'react-icons/fa';
import { MdExpandMore } from 'react-icons/md';
import { IoMdDownload } from 'react-icons/io';
import hashToColor from '../Utils/hashToColor';
import { actionMixin } from '../../Theme/mixins';

export const Container = styled.div`
  margin: 65px 0 0 220px;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  text-align: center;
  transition: .2s;

  @media (max-width: 576px) {
    margin-left: 0;
    width: 100vw;
    transition: .2s;
  }

  ${props => props.theme.isMobile && `
    margin-left: 0;
    width: 100vw;
    transition: .2s;
    padding: 0;
  `}
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
`;
export const Card = styled.div`
  width: 100%;
  padding: 15px 10px 15px 15px;
  border-bottom: 1px solid #eee;
  background: #fff;
  z-index: 10;
  transition: margin-bottom 0.2s cubic-bezier(0.4, 0, 1, 1);

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
`;
export const Actions = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
`;
export const Download = styled(IoMdDownload)`
  ${actionMixin}
`;
export const More = styled(MdExpandMore)`
  ${props => props.show && `
    transform: rotate(-180deg);
    transition: 0.5s;
  `}

  ${actionMixin}
`;
export const Meta = styled.div`
  position: absolute;
  z-index: -1;
  height: 50px;
  width: 100%;
  background: #fafafa;
  padding: 10px 10px 10px 15px;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #333;
  transition: bottom 0.2s cubic-bezier(0.4, 0, 1, 1);

  ${props => props.show ? `
    bottom: -50px;
  ` : `
    bottom: 0;
  `}
`;
export const Row = styled.div`
  margin-bottom: 5px;
`;
export const File = styled(FaFileAlt)`
  margin-right: 3px;
  fill: #444;
`;
export const Provider = styled(FaUserEdit)`
  margin-right: 3px;
  fill: #444;
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
