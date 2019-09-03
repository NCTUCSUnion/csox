const style = {
  container: {
    boxSizing: 'border-box',
    width: 'calc(100vw - 220px)',
    height: 'calc(100vh - 85px)',
    position: 'fixed',
    top: 65,
    left: 220,
    overflowY: 'auto',
    padding: 20,
    transition: '.2s'
  },
  '@media (max-width: 768px)': {
    container: {
      transition: '.2s',
      left: 0,
      width: '100vw'
    }
  },
  fixedHeader:{
    position: 'fixed',
    top: 0
  }
}

export default style
