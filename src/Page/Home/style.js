const style = theme => ({
  title: {
    position: 'absolute',
    height: '22vh',
    top: 'calc((100vh - 20px - 25vh) / 2)',
    left: '10vw',
    borderLeft: `13px solid ${theme.colorPrimary}`
  },
  en: {
    marginLeft: '30px',
    color: 'rgb(83, 83, 83)',
    fontSize: '2rem',
    lineHeight: '30px',
    fontWeight: 400
  },
  zh: {
    marginLeft: '30px',
    color: 'rgb(83, 83, 83)',
    fontSize: '3.2rem',
    lineHeight: '30px',
    fontWeight: 500
  },
  login: {
    position: 'absolute',
    right: '20vw',
    bottom: '33vh',
    width: 150,
    height: 45,
    backgroundColor: theme.colorPrimary,
    textAlign: 'center',
    lineHeight: '45px',
    color: '#fff',
    borderRadius: 2,
    fontWeight: 400,
    cursor: 'pointer',
    boxShadow: theme.shadow,
    '&:hover': {
      backgroundColor: theme.colorPrimary,
      color: 'white'
    }
  }
})

export default style
