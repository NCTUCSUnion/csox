import styled from 'styled-components';

export const DrawerWrapper = styled.div`
  user-select: none;
  overflow: auto;
  position: fixed;
  top: 65px;
  left: 0;
  width: 220px;
  height: calc(100vh - 65px);
  font-size: 14px;
  transition: 0.2s;

  background-color: #fff;
  box-shadow: ${props => props.theme.shadow};

  @media (max-width: 576px) {
    transition: .2s;
    left: -220px;
  }
`;