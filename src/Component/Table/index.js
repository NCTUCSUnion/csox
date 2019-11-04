import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'
import style from './style'

import { download } from '../../Redux/Action/exam'
import Header from './header'
import { modal } from '../Modal'
import UploadModal from '../Upload'

const Loading = () => (
  <svg x='0px' y='0px' width='40px' height='65px' viewBox='0 0 50 50'>
    <path fill='#36a17e' d='M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z'>
      <animateTransform
        attributeType='xml'
        attributeName='transform'
        type='rotate'
        from='0 25 25'
        to='360 25 25'
        dur='0.6s'
        repeatCount='indefinite' />
    </path>
  </svg>
)

class Table extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '點選左方課程尋找考古題',
      width: window.innerWidth
    }
    this.ref = React.createRef()
    this.onResize = this.onResize.bind(this)
  }

  onResize() {
    this.setState({width: window.innerWidth})
  }

  componentDidMount(){
    if(this.ref.current){
      window.addEventListener('resize', this.onResize)
    }
  }

  componentWillUnmount() {
    if(this.ref.current){
      window.removeEventListener('resize', this.onResize)
    }
  }

  componentDidUpdate(){
    if(this.ref.current){
      this.ref.current.scrollTo(0, 0)
    }
  }

  render () {
    const {data, classes, loading} = this.props
    const { width } = this.state
    return (
      <div className={classes.container} ref={this.ref}>
        {loading && <Loading/>}
        {data.length > 0
          ? (
            <table>
              <Header className={classes.fixedHeader} width={width}/>
              <tbody>
                {
                  data.map(e =>
                    <tr key={e.id} onClick={() => download(e)}>
                      <td className={classes.td}>{e.semester}</td>
                      <td className={classes.td}>{e.type}</td>
                      { width >=976  && <td className={classes.td}>{e.instructor}</td>}
                      { width >=576  && <td className={classes.td}>{e.filename}</td>}
                    </tr>
                  )
                }
              </tbody>
            </table>
          )
          : loading === undefined
            ? <p>請點選左方課程列表</p>
            : !loading && <p>目前尚無考古題，<a className={classes.link} onClick={() => modal(<UploadModal />)}>歡迎上傳</a></p>
        }
      </div>
    )
  }
}

export default connect(state => ({
  loading: state.main.loading,
}))(injectSheet(style)(Table))
