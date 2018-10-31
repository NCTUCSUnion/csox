const success = ['#28a745', '#d8f6df']
const info = ['#17a2b8', '#d4f5fa']
const warning = ['#ffc107', '#fff']
const danger = ['#dc3545', '#fff']

const style = {
  toastWrapper: {
    position: 'fixed',
    top: 'calc(56px + 1em)',
    left: '1em'
  },
  '@keyframes fadeInLeft': {
    from: {
      opacity: 0,
      left: -300
    },
    to: {
      opacity: 0.9,
      left: 0
    }
  },
  toast: {
    position: 'relative',
    top: 0,
    zIndex: 11,
    width: 250,
    height: 58,
    borderRadius: 2,
    userSelect: 'none',
    lineHeight: '58px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: 15,
    padding: '0 8%',
    marginBottom: '5%',
    cursor: 'pointer',
    boxShadow: '1px 1px 5px rgba(0,0,0,.17)',
    transition: '.2s',
    animation: 'fadeInLeft .2s',
    '&:hover': {
      borderTop: '0',
      opacity: '1'
    }
  },
  '@keyframes shrinking': {
    from: {
      width: '100%'
    },
    to: {
      width: 0
    }
  },
  toastInfo: {
    '&::after': {
      content: '""',
      backgroundColor: info[0],
      position: 'absolute',
      top: '0',
      left: '0',
      height: '5px',
      animation: 'shrinking 5s'
    },
    backgroundColor: info[1],
    color: info[0]
  },
  toastSuccess: {
    '&::after': {
      content: '""',
      backgroundColor: success[0],
      position: 'absolute',
      top: '0',
      left: '0',
      height: '5px',
      animation: 'shrinking 5s'
    },
    backgroundColor: success[1],
    color: success[0]
  },
  toastWarning: {
    '&::after': {
      content: '""',
      backgroundColor: warning[0],
      position: 'absolute',
      top: '0',
      left: '0',
      height: '5px',
      animation: 'shrinking 5s'
    },
    backgroundColor: warning[1],
    color: warning[0]
  },
  toastDanger: {
    '&::after': {
      content: '""',
      backgroundColor: danger[0],
      position: 'absolute',
      top: '0',
      left: '0',
      height: '5px',
      animation: 'shrinking 5s'
    },
    backgroundColor: danger[1],
    color: danger[0]
  }
}

export default style
