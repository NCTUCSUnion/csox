import React from 'react'
import injectSheet from 'react-jss'
import style from './style'

import { download } from '../../Redux/Action/exam'
import Header from './header'

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
    this.setState({width: window.innerWidth});
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
    const {data, classes} = this.props
    const { width } = this.state
    console.log(width)
    return (
      <div className={classes.container} ref={this.ref}>
        {data.length > 0
          ? (
            <table>
              <Header width={width}/>
              <tbody>
                {
                  data.map(e =>
                    <tr key={e.id} onClick={() => download(e)}>
                      <td className={classes.td}>{e.semester}</td>
                      <td className={classes.td}>{e.type}</td>
                      { width >=576  && <td className={classes.td}>{e.filename}</td>}
                      { width >=976  && <td className={classes.td}>{e.provider}</td>}
                    </tr>
                  )
                }
              </tbody>
            </table>
          )
          : <p />
        }
      </div>
    )
  }
}

export default injectSheet(style)(Table)
