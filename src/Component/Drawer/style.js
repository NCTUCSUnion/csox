import styled from 'styled-components';
import { FaCaretRight } from 'react-icons/fa';

export const Wrapper = styled.div`
  color: ${props => props.theme.dark ? 'rgb(225, 225, 225)' : 'black'};
  background: ${props => props.theme.dark ? 'rgb(83, 83, 83)' : 'white'};
`;

export const Label = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 20px;
  position: relative;
  font-size: 15px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 500;
  height: 50px;
  line-height: 50px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const List = styled.div`
  text-align: left;
  cursor: pointer;
  padding-left: 30px;
  transition: .2s;
  font-size: 15px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  ${props => props.active && `
    color: ${props.theme.colorPrimary};
    font-weight: 500;
  `}
`;

export const Item = styled.div`
  height: 40px;
  line-height: 40px;
  padding-right: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:active {
    font-weight: 500;
  }
`;

export const Caret = styled(FaCaretRight)`
  margin-right: 4px;
  transition: 0.3s;

  ${props => props.theme.isMobile && `
    position: absolute;
    right: 20px;
  `}

  ${props => props.open && `
    transform: rotate(90deg);
  `}
`;