const style = theme => ({
  drawer: {
    position: 'fixed',
    left: 0,
    top: 65,
    width: 220,
    height: 'calc(100vh - 85px)',
    backgroundColor: '#fff',
    boxShadow: theme.shadow,
    overflow: 'auto',
    transition: '.2s',
    fontSize: 14,
    userSelect: 'none'
  },
  '@media (max-width: 768px)': {
    drawer: {
      transition: '.2s',
      left: -220
    }
  },
  label: {
    position: 'relative',
    padding: '15px 20px',
    font: {
      size: 14,
      weight: 'bold'
    },
    cursor: 'pointer',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)'
    }
  },
  list: {
    cursor: 'pointer',
    padding: '8px 30px',
    transition: '.2s',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)'
    },
    '& .active': {
      color: theme.colorPrimary,
      fontWeight: 400
    }
  }
})

export default style
