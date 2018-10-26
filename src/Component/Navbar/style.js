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
    }
  },
  navItem: {
    position: 'absolute',
    top: '0',
    right: '50px',
    height: navHeight,
    lineHeight: navHeight + 'px',
    textAlign: 'center'
  },
  title: {
    textAlign: 'left',
    padding: '0 20px',
    fontWeight: 500,
    background: theme.colorPrimary,
    borderRadius: '5px 5px 0 0',
    color: 'white',
    margin: '0 0 20px 0',
    fontSize: 20
  },
  upload: {
    border: '2px dashed #ccc',
    borderRadius: 5,
    margin: '10px auto 30px auto',
    width: '90%',
    transition: '.2s'
  },
  activeUpload: {
    border: `2px dashed ${theme.colorPrimary}`
  },
  rejectUpload: {
    border: `2px dashed #D50000`
  },
  file: {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '2px solid #eee',
    padding: '10px',
    width: '18rem',
    height: '3rem',
    margin: '30px auto 30px auto'
  },
  del: {
    position: 'absolute',
    top: '1.3rem',
    backgroundColor: '#ccc',
    transition: '.5s',
    color: 'white',
    fontSize: '0.8rem',
    lineHeight: '1.5rem',
    height: '1.5rem',
    width: '1.5rem',
    textAlign: 'center',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: '#5bc8a5',
      transition: '.5s',
      transform: 'scale(1.1)'
    }
  },
  meta: {
    position: 'absolute',
    left: '5rem'
  },
  label: {
    fontSize: '1rem',
    lineHeight: '1.5em',
    textAlign: 'left',
    '&:last-child': {
      opacity: '0.4'
    }
  },
  type: {
    position: 'absolute',
    right: '1rem',
    color: '#aaa',
    fontSize: '2rem',
    lineHeight: '3rem',
    transition: '.2s',
    '& :hover': {
      transition: '.2s',
      transform: 'scale(1.1)',
      color: '#5bc8a5'
    }
  }
})

export default style
