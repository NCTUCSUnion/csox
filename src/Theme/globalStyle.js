import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2) format('woff2'),
          url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff) format('woff'),
          url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf) format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2) format('woff2'),
          url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff) format('woff'),
          url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.otf) format('opentype');
  }

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