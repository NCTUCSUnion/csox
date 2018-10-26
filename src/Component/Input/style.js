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
  }
})

export default style
