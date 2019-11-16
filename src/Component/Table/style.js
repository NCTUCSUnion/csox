import styled from 'styled-components';

export const Container = styled.div`
  top: 65px;
  left: 220px;
  width: calc(100vw - 220px);
  height: calc(100vh - 85px);
  padding: 20px;
  position: fixed;
  box-sizing: border-box;
  overflow-y: auto;
  text-align: center;
  transition: .2s;

  @media (max-width: 576px) {
    left: 0;
    width: 100vw;
    transition: .2s;
  }
`;

export const TD = styled.td `
  white-space: nowrap;
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: underline !important;
  color: ${props => props.theme.colorPrimary};
`;
