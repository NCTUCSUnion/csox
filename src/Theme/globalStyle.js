import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  button {
    outline: none;
  }
  a {
    text-decoration: none !important;
    color: inherit;
  }

  table {
    width: 95%;
    margin: 0 auto;
    text-align: center;
    border-collapse: collapse;

    & tbody tr {
      background: #fff;
      user-select: none;
      border-top: 1px solid rgba(91, 200, 165, .5);
      cursor: pointer;

      &:hover {
        background: rgba(91, 200, 165,1);
        color: #fff;
      }
    }

    & td, & th {
      padding: 20px 10px;
    }
    & th {
      font-weight: 500;
      font-size: 1.1rem;
      border-bottom: 2px solid ${props => props.theme.colorPrimary};
    }
  }

  html,
  body {
    font-family: 'Noto Sans TC', '微軟正黑體', sans-serif;
  }

  div {
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;