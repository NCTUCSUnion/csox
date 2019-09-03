import React from 'react'
import injectSheet from 'react-jss'
import style from './style'

import getPosition from '../Utils/getPosition'

class Header extends React.Component{
  initTop = 0
  constructor(props){
    super(props)
    this.state = {
      fixed: false
    }
  }
  componentDidMount(){
    console.log(this.props.table.current.scrollTop)
    this.initTop = getPosition(this.header).y
    this.props.table.current.addEventListener('scroll',(e)=>{
      if(e.target.scrollTop > this.initTop)
        this.setState({fixed: true})
      else
      this.setState({fixed: false})
    })
  }
  render(){
    const { classes } = this.props
    return(
      <thead className={this.state.fixed ? classes.fixedHeader : ''} ref={ref=> this.header = ref}>
        <tr>
          <th>年份</th>
          <th>類型</th>
          <th>檔名</th>
          <th>提供者</th>
        </tr>
      </thead>
    )
  }
}

export default injectSheet(style)(Header)