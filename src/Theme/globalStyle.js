const style = theme => ({
  '@global': {
    body: {
      margin: '0',
      padding: '0',
      fontFamily: 'sans-serif',
      backgroundColor: 'white'
    },
    a: {
      textDecoration: 'none !important',
      color: 'inherit'
    },

    table: {
      width: '95%',
      margin: '0 auto',
      textAlign: 'center',
      borderCollapse: 'collapse',
      '& tbody tr': {
        backgroundColor: '#fff',
        userSelect: 'none',
        borderTop: '1px solid rgba(91, 200, 165, .5)',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(91, 200, 165,1)',
          color: '#fff'
        }
      },
      '& td, & th': {
        padding: '20px 10px'
      },
      '& th': {
        fontWeight: 'bold',
        fontSize: '1.1rem',
        borderBottom: `2px solid ${theme.colorPrimary}`
      }
    }
  }
})

export default style
