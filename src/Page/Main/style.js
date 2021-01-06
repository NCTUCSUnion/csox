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

  background: ${props => props.theme.dark ? 'rgb(83, 83, 83)' : 'white'};
  color: ${props => props.theme.dark ? 'rgb(225, 225, 225)' : 'black'};
  box-shadow: ${props => props.theme.shadow};

  @media (max-width: 576px) {
    transition: .2s;
    left: -220px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 2px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #777;
  }
`;