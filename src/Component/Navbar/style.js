import styled from 'styled-components';

export const Navbar = styled.div`
  top: 0;
  width: 100%;
  z-index: 9;
  position: absolute;
  text-align: center;
  height: ${props => props.theme.navHeight};
  background: ${props => props.theme.colorDefault};
  box-shadow: ${props => props.theme.shadow};
  line-height: ${props => props.theme.navHeight}px;
`;

export const Banner = styled.div`
  left: 0;
  width: 250px;
  cursor: pointer;
  position: relative;
  font-size: 22px;
  font-weight: 500;
  user-select: none;
  height: ${props => props.theme.navHeight};

  &::before {
    top: 5px;
    width: 6px;
    height: 25px;
    content: "";
    display: inline-block;
    position: relative;
    margin-right: 8px;
    background: ${props => props.theme.colorPrimary};
  }

  /* &::after {
    top: 3px;
    color: white;
    right: 0;
    width: 33px;
    height: 20px;
    content: "beta";
    position: absolute;
    font-size: 10px;
    transform: translate(40%, 15%);
    line-height: 20px;
    border-radius: 1px;
    background-color: #e6326f;
  } */
`;

export const Item = styled.div`
  top: 0;
  right: 20px;
  cursor: pointer;
  padding: 0 20px;
  position: absolute;
  text-align: center;
  height: ${props => props.theme.navHeight};
  line-height: ${props => props.theme.navHeight}px;

  &:hover {
    background: #eee;
    transition: .2s;
  }
`;
