const style = theme => ({
  container: {
    boxSizing: 'border-box',
    width: 'calc(100vw - 220px)',
    height: 'calc(100vh - 85px)',
    position: 'fixed',
    top: 65,
    left: 220,
    overflowY: 'auto',
    padding: 20,
    transition: '.2s',
    textAlign: 'center'
  },
  '@media (max-width: 576px)': {
    container: {
      transition: '.2s',
      left: 0,
      width: '100vw'
    }
  },
  fixedHeader:{
    position: 'sticky',
    top: 65
  },
  td: {
    whiteSpace: 'nowrap'
  },
  link: {
    cursor: 'pointer',
    color: theme.colorPrimary,
    textDecoration: 'underline !important'
  }
})

export default style
