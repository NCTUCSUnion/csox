const navHeight = 65

const style = theme => ({
  navbar: {
    position: 'absolute',
    top: 0,
    zIndex: 9,
    width: '100%',
    height: navHeight,
    background: theme.colorDefault,
    boxShadow: theme.shadow,
    lineHeight: navHeight + 'px', // default value is em if you just use  numeric value
    textAlign: 'center'
  },
  banner: {
    position: 'relative',
    left: 0,
    width: 250,
    height: navHeight,
    fontSize: 22,
    fontWeight: 500,
    userSelect: 'none',
    cursor: 'pointer',
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: '6px',
      height: '25px',
      position: 'relative',
      top: '5px',
      marginRight: '8px',
      backgroundColor: theme.colorPrimary
    },
    '&::after': {
      position: 'absolute',
      content: '"beta"',
      backgroundColor: '#e6326f',
      color: 'white',
      borderRadius: 1,
      fontSize: 7,
      width: 33,
      height: 20,
      lineHeight: '20px',
      top: 3,
      right: 0,
      transform: 'translate(40%, 15%)'
    }
  },
  navItem: {
    position: 'absolute',
    top: '0',
    right: 20,
    height: navHeight,
    lineHeight: navHeight + 'px',
    textAlign: 'center',
    cursor: 'pointer',
    padding: '0 20px',
    '&:hover': {
      transition: '.2s',
      background: '#eee',
    }
  }
})

export default style
