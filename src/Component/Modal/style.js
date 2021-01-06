/**
 *  copy from bootstrap modal's css code
 */

import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Main = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  outline: 0;
  z-index: 1050;
  overflow: auto;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.open ? 'block' : 'none'};
`;

export const Content = styled.div`
  pointer-events: auto;
  overflow: hidden;
  position: relative;
  z-index: 1080;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 50vh;
  outline: 0;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14); /* youtube box-shadow setting */
  border-radius: ${props => props.theme.isMobile ? 0 : 5}px;
  background-color: ${props => props.theme.dark ? 'rgb(65, 65, 65)' : 'white'};
  background-clip: padding-box;
  animation: ${fadeInUp} .2s ease-in-out;
  height: fit-content;
`;

export const Dialog = styled.div`
  width: 80%;
  margin: 0.5rem auto;
  display: flex;
  position: relative;
  min-height: ${props => props.theme.isMobile ? '100%' : 'calc(100% - (0.5rem * 2))'};
  align-items: center;
  pointer-events: none;
  flex-direction: column;
  ${props => !props.theme.isMobile && `
    justify-content: center;
  `}

  @media (max-width: 576px) {
    width: 100%;
    margin: 0;
    align-items: stretch;
  }
`;

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;