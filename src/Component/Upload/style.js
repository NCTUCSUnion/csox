import styled, { keyframes } from 'styled-components';

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Header = styled.div`
  color: white;
  height: initial;
  margin: 0 0 20px 0;
  padding: 0 10px;
  font-size: 18px;
  text-align: left;
  font-weight: 500;
  background: ${props => props.theme.colorPrimary};
  box-shadow: ${props => props.theme.shadow};
`;
export const Title = styled.span`
  color: white;
  height: initial;
  padding: 0 20px;
  font-size: 20px;
  text-align: left;
  font-weight: 500;
`;

export const Leave = styled.div.attrs({
  className: 'fas fa-times',
})`
  display: inline-block;
  height: 24px;
  width: 24px;
  text-align: center;
  line-height: 24px;
  border-radius: 24px;

  &:hover {
    cursor: pointer;
    transition: .2s;
    background: ${props => props.theme.colorDarkenPrimary};
  }
`;

export const Action = styled.span`
  top: 0;
  right: 5%;
  height: 65px;
  padding: 0 2%;
  position: absolute;

  ${props => props.active && `
    &:hover {
      cursor: pointer;
      transition: .2s;
      background: ${props.theme.colorDarkenPrimary};
    }
  `}
`;

export const InputContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const File = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 18rem;
  height: 70px;
  border: 2px solid #eee;
  margin: 10px 0 10px 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  animation: ${fadeInLeft} .5s ease-in-out;
`;

export const Del = styled.div`
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.8rem;
  text-align: center;
  transition: .5s;
  line-height: 1.5rem;
  border-radius: 50%;
  background-color: #ccc;

  &:hover {
    transform: scale(1.1);
    transition: .5s;
    background-color: ${props => props.theme.colorSecondary};
  }
`;

export const Meta = styled.div`
  left: 5rem;
  position: absolute;
`;

export const Label = styled.div`
  width: 8rem;
  overflow: hidden;
  font-size: 1rem;
  text-align: left;
  line-height: 1.5em;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:last-child {
    opacity: 0.4;
  }
`;

export const Type = styled.a`
  color: #aaa;
  right: 1rem;
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 2rem;
  transition: .2s;
  line-height: 65px;
  max-height: 65px;

  &:hover {
    color: #5bc8a5;
    transform: scale(1.1);
    transition: .2s;
  }

  img {
    height: 60px;
    max-width: 60px;
  }
`;

export const Container = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
  outline: none;
  min-height: 180px;
  max-height: 50vh;
  width: 90%;
  margin: 10px auto 30px;
  border: 2px dashed #ccc;
  border-radius: 5px;
  transition: .2s;
`;

export const Description = styled.div`
  width: 100%;
  text-align: center;
`;

export const InvisibleInput = styled.input`
  display: none;
`;
