import React from 'react'
import {withRouter} from 'react-router-dom'
import './style.scss'

const ClientID = 'nJKYpqovYAVBFrAHTeCSOzkIJFhXYqBQifYWEJFg'

const Home = withRouter((props) => (
  <div>
    <div className='title'>
      <h1 className='en'>past exam papers</h1>
      <h1 className='zh'>交大資工系考古題系統</h1>
    </div>
    <div className='login-btn'onClick={() => (window.location.href = `https://id.nctu.edu.tw/o/authorize/?client_id=${ClientID}&response_type=code&scope=profile%20name`)}>
      登入
    </div>
  </div>
))

export default Home
