import styled from 'styled-components';

export const Drawer = styled.div`
  user-select: none;
  overflow: auto;
  position: fixed;
  top: 65px;
  left: 0;
  width: 220px;
  height: calc(100vh - 65px);
  font-size: 14px;
  transition: .2s;

  background-color: #fff;
  box-shadow: ${props => props.theme.shadow};

  @media (max-width: 576px) {
    transition: .2s;
    left: -220px;
  }
`;

export const Label = styled.div`
  cursor: pointer;
  padding: 15px 20px;
  position: relative;
  font-size: 14px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 500;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const List = styled.div`
  cursor: pointer;
  padding: 8px 30px;
  transition: .2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  ${props => props.active && `
    color: ${props.theme.colorPrimary};
    font-size: 15px;
    font-weight: 500;
  `}
`;
