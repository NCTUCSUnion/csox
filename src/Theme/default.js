import isXmas from '../Component/Utils/isXmas2020'

const Theme = {
  // color
  colorPrimary: '#5bc8a5',
  colorDarkenPrimary: '#36a17e',
  colorSecondary: '#d50000',
  colorDefault: '#fff',

  // macro
  navHeight: 65,

  // others
  shadow: '2px 2px 5px rgba(0,0,0,.08)',

  // 2020 xmas
  xmas: isXmas()
};

export default Theme;
