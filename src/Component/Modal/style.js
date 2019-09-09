const style = {
  // start of CSS in bootstrap's modal
  'modalOn': {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    zIndex: '1050',
    overflow: 'hidden',
    outline: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  'modalOff': {
    display: 'none'
  },
  'modalContent': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    pointerEvents: 'auto',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    outline: 0,
    zIndex: '1080',
    boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14)', /* youtube box-shadow setting */
    animation: 'fadeInUp .2s ease-in-out',
    // borderRadius: 6,
    minHeight: '50vh'
  },
  'dialog': {
    position: 'relative',
    width: '80%',
    margin: '0.5rem auto',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    minHeight: 'calc(100% - (0.5rem * 2))',
  },
  '@media (max-width: 576px)': {
    'dialog': {
      margin: 0,
      width: '100%',
      alignItems: 'stretch'
    }
  },
  // end of CSS in bootstrap's modal
  '@keyframes fadeInUp': {
    from: {
      opacity: '0',
      transform: 'translateY(-30px)'
    },
    to: {
      opacity: '1',
      transform: 'translateY(0)'
    }
  },
  'modalBackground': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
}

export default style
