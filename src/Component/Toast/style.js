import styled, { keyframes } from 'styled-components';

const fadeInLeft = keyframes`
  from {
    left: -300px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 0.9;
  }
`;

const shrinking = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

export const Wrapper = styled.div`
  top: calc(56px + 1em);
  left: 1em;
  position: fixed;
  z-index: 99999;
`;

export const Item = styled.div`
  top: 0;
  width: 250px;
  cursor: pointer;
  height: 58px;
  padding: 0 8%;
  overflow: hidden;
  position: relative;
  animation: ${fadeInLeft} .2s;
  font-size: 15px;
  box-shadow: 1px 1px 5px rgba(0,0,0,.17);
  transition: .2s;
  line-height: 58px;
  user-select: none;
  white-space: nowrap;
  border-radius: 2px;
  margin-bottom: 5%;
  text-overflow: ellipsis;

  &:hover {
    opacity: 1;
    border-top: 0;
  }

  &::after {
    top: 0;
    left: 0;
    height: 5px;
    content: "";
    position: absolute;
    animation: ${shrinking} 5s;
    background: ${props => props.colors[0]};
  }
  background: ${props => props.theme.dark ? 'rgb(120, 120, 120)' : props.colors[1]};
  color: ${props => props.theme.dark ? 'rgb(225, 225, 225)' : props.colors[0]};
`;

