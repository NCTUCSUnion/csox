import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import style from './style'

const keyCode = {
  'ESC': 27,
  'UP': 40,
  'DOWN': 38,
  'ENTER': 13
}

class Input extends React.Component{
  ref = -1
  constructor(props){
    super(props)
    this.state = {
      open: false,
      autoComplete: props.autoComplete,
      value: '' // input tag's value doesn't accept `null`
    }
    this.keyDownSelect = this.keyDownSelect.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  keyDownSelect(e){
    const mod = (x, n) => (x % n + n) % n
    if(e.keyCode === keyCode.ESC){
      this.handleClose()
      return
    }
    else if(e.keyCode === keyCode.ENTER){
      this.handleClose()
      e.target.blur()
      return
    }
    else if(e.keyCode === keyCode.UP){
      e.preventDefault()
      if(this.ref === -1)
          this.ref = 0 // first select
      else
        this.ref = mod(this.ref + 1, this.state.autoComplete.length)
      this.setState({value: this.state.autoComplete[this.ref]})
    }
    else if(e.keyCode === keyCode.DOWN){
      e.preventDefault()
      if(this.ref === -1)
        this.ref = this.state.autoComplete.length - 1
      else
        this.ref = mod(this.ref - 1, this.state.autoComplete.length)
      this.setState({value: this.state.autoComplete[this.ref]})
    }
  }
  handleOpen(){
    let updatedList = this.state.autoComplete && this.state.autoComplete.slice(0,3)
    this.setState({
      open: true,
      autoComplete: updatedList
    },()=>{
      document.addEventListener('keydown',this.keyDownSelect)
    })
  }
  handleClose(){
    this.setState({open: false},()=>{
      document.removeEventListener('keydown', this.keyDownSelect)
    })
  }
  handleInput(v){
    if(this.props.autoComplete){
      let updatedList = this.props.autoComplete.filter(e => e.startsWith(v))
      this.ref = -1
      this.setState({value: v, autoComplete: updatedList})
    }
    else{
      this.setState({value: v})
    }
  }
  render(){
    const {classes, label, autoComplete} = this.props
    return(
      <div className={classes.container}>
        <input type='text' required 
          className={classes.input} 
          onFocus={this.handleOpen} 
          onBlur={this.handleClose} 
          value={this.state.value} 
          onChange={(e)=>{this.handleInput(e.target.value)}}
        />
        <label className={classes.label}>{label}</label>
        {autoComplete && this.state.open &&
          (<div className={classes.autoComplete}>
            {this.state.autoComplete.map((value,i) => 
                <div
                  key={i}
                  className={classNames(classes.autoCompleteItem,this.ref === i && 'active')}
                  onMouseDown={()=>{this.handleInput(value)}} // onMouseDown() would execute before onBlur()
                >{value}</div>
            )}
          </div>)
        }
      </div>
    )
  }
}

export default injectSheet(style)(Input)
