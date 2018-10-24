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
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: '6px',
      height: '25px',
      position: 'relative',
      top: '5px',
      marginRight: '8px',
      backgroundColor: theme.colorPrimary
    }
  },
  navItem: {
    position: 'absolute',
    top: '0',
    right: '50px',
    height: navHeight,
    lineHeight: navHeight + 'px',
    textAlign: 'center'
  }
})

export default style
