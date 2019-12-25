import { css } from 'styled-components';

export const actionMixin = css`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  padding: 8px;
  box-sizing: content-box;
  margin: 0 5px;
  fill: #555;
  user-select: none;
  transition: 0.2s;

  &:active {
    fill: ${props => props.theme.colorPrimary};
    background: #eee;
  }
`;

export const textMixin = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
