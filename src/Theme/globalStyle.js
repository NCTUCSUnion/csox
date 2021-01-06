import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
      color: ${props => props.theme.dark ? 'rgb(225, 225, 225)' : 'black'};
      background: ${props => props.theme.dark ? 'rgb(65, 65, 65)' : 'white'};
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
    background-color: ${props => props.theme.dark ? 'rgb(65, 65, 65)' : 'white'};
  }

  div {
    -webkit-tap-highlight-color: transparent;
  }

  div.___snowStorm___ {
    transform: scale(1.5) !important;
  }
`;

export default GlobalStyle;