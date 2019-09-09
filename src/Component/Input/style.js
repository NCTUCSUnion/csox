const style = theme => ({
  container: {
    display: 'inline-block',
    position: 'relative',
    padding: 10,
    marginBottom: 2
  },
  input: {
    position: 'relative',
    display: 'block',
    outline: 'none',
    border: 'none',
    padding: '12px 10px 10px 5px',
    fontSize: 18,
    lineHeight: '18px',
    borderBottom: '1px solid #757575',
    zIndex: 1081,
    background: 'transparent',
    '&:valid': {
      borderBottom: `1px solid ${theme.colorPrimary}`
    },
    '&:focus': {
      borderBottom: `1px solid ${theme.colorPrimary}`,
      transition: '.5s'
    },
    '&:focus ~ $label, &:valid ~ $label': {
      transition: '.2s',
      top: 2,
      fontSize: 14,
      lineHeight: '14px',
      color: theme.colorPrimary
    }
  },
  label: {
    transition: '.2s',
    position: 'absolute',
    top: 24,
    left: 14,
    color: '#888',
    fontSize: 18,
    lineHeight: '18px',
    fontWeight: 500
  },
  autoComplete: {
    position: 'absolute',
    zIndex: 1082,
    width: 'calc(100% - 20px)',
    background: 'white',
    boxShadow: '1px 1px 2px rgba(0,0,0,.3)',
    maxHeight: 180,
    overflowY: 'auto',

  },
  autoCompleteItem:{
    zIndex: 1081,
    height: 60,
    lineHeight: '60px',
    cursor: 'pointer',
    '&:hover':{
      background: '#eee'
    },
    '&.active':{
      background: '#eee'
    }
  }
})

export default style
