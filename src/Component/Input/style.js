import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  padding: 10px;
  position: relative;
  margin-bottom: 2px;
`;

export const Label = styled.label`
  top: 24px;
  left: 14px;
  color: ${props => props.theme.dark ? 'rgb(225, 225, 225)' : '#888'};
  position: absolute;
  font-size: 18px;
  transition: .2s;
  font-weight: 500;
  line-height: 18px;
`;

export const Input = styled.input`
  border: none;
  display: block;
  outline: none;
  padding: 12px 10px 10px 5px;
  z-index: 1081;
  position: relative;
  font-size: 16px;
  background: transparent;
  line-height: 18px;
  border-bottom: 1px solid ${props => props.theme.dark ? 'rgb(160, 160, 160)' : '#757575'};
  color: ${props => props.theme.dark ? 'white' : 'black'};

  &:valid {
    border-bottom: 1px solid ${props => props.theme.colorPrimary};
  }

  &:focus {
    transition: .5s;
    border-bottom: 1px solid ${props => props.theme.colorPrimary};
  }

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: 2px;
    color: ${props => props.theme.colorPrimary};
    font-size: 14px;
    transition: .2s;
    line-height: 14px;
  }
`;

export const AutoComplete = styled.div`
  width: calc(100% - 20px);
  z-index: 1082;
  position: absolute;
  background: white;
  box-shadow: 1px 1px 2px rgba(0,0,0,.3);
  max-height: 250px;
  overflow-y: auto;
`;

export const AutoCompleteItem = styled.div`
  cursor: pointer;
  height: 50px;
  padding: 2px 20px;
  z-index: 1081;
  overflow: hidden;
  text-align: left;
  line-height: 50px;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    background: #eee;
  }

  background: ${props => props.active && '#eee'};
  color: black;
`;
