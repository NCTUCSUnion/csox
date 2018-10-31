const style = theme => ({
  title: {
    height: 'initial',
    textAlign: 'left',
    padding: '0 20px',
    fontWeight: 500,
    background: theme.colorPrimary,
    // borderRadius: '5px 5px 0 0',
    color: 'white',
    margin: '0 0 20px 0',
    fontSize: 20,
    boxShadow: theme.shadow
  },
  action: {
    position: 'absolute',
    height: 'inherit',
    padding: '0 2%',
    top: 0,
    right: '5%',
    font: {
      size: 18,
      weight: 400
    },
    '&:hover': {
      transition: '.2s',
      cursor: 'pointer',
      backgroundColor: theme.colorDarkenPrimary
    }
  },
  upload: {
    border: '2px dashed #ccc',
    borderRadius: 5,
    margin: '10px auto 30px auto',
    width: '90%',
    transition: '.2s',
    overflowY: 'auto',
    maxHeight: '50vh',
    '&.active': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  },
  activeUpload: {
    border: `2px solid ${theme.colorPrimary}`,
    backgroundColor: '#eee'
  },
  rejectUpload: {
    border: `2px solid #D50000`,
    backgroundColor: '#eee'
  },
  '@keyframes fadeInLeft': {
    from: {
      opacity: '0',
      transform: 'translateX(-30px)'
    },
    to: {
      opacity: '1',
      transform: 'translateY(0)'
    }
  },
  file: {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '2px solid #eee',
    padding: '10px',
    width: '18rem',
    height: '3rem',
    margin: '10px auto 10px auto',
    animation: 'fadeInLeft .5s ease-in-out'
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
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '8rem',
    whiteSpace: 'nowrap',
    '&:last-child': {
      opacity: '0.4'
    }
  },
  type: {
    display: 'block',
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
