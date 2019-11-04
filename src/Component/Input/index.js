import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import style from './style'

const keyCode = {
  'ESC': 27,
  'UP': 38,
  'DOWN': 40,
  'ENTER': 13
}

class Input extends React.Component{
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
    this.ref = -1
    this.listRef = React.createRef(null)
  }

  scrollYTo(y = 0){
    this.listRef.current.scrollTo(0, y)
  }

  keyDownSelect(e){
    const mod = (x, n) => (x + n) % n
    if(e.keyCode === keyCode.ESC){
      e.stopPropagation()
      this.handleClose()
      return
    }
    else if(e.keyCode === keyCode.ENTER){
      if(this.props.onChange){
        this.props.onChange(e.target.value, this.ref)
      }
      this.handleClose()
      e.target.blur()
      return
    }
    else if(e.keyCode === keyCode.UP){
      if(this.state.autoComplete.length === 0){
        return
      }
      e.preventDefault()
      if(this.ref === -1){
        this.ref = this.state.autoComplete.length - 1 // first select
        this.scrollYTo(this.ref * 60)
      }
      else {
        this.ref = mod(this.ref - 1, this.state.autoComplete.length)
        this.scrollYTo(this.ref * 60)
      }
      this.setState({value: this.state.autoComplete[this.ref]})
    }
    else if(e.keyCode === keyCode.DOWN){
      if(this.state.autoComplete.length === 0){
        return
      }
      e.preventDefault()
      if(this.ref === -1){
        this.ref = 0
        this.scrollYTo(0)
      }
      else{
        this.ref = mod(this.ref + 1, this.state.autoComplete.length)
        this.scrollYTo(Math.floor(this.ref / 3) * 180)
      }
      this.setState({value: this.state.autoComplete[this.ref]})
    }
  }
  handleOpen(){
    let updatedList = this.state.autoComplete
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
  handleInput(v, ref){
    if(this.props.onChange){
      this.props.onChange(v, ref)
    }
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
    const { open } = this.state
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
        {autoComplete &&
          (<div ref={this.listRef} className={classes.autoComplete} style={{display: open ? 'block' : 'none'}}>
            {this.state.autoComplete.map((value,i) =>
              <div
                key={i}
                className={classNames(classes.autoCompleteItem,this.ref === i && 'active')}
                onMouseDown={()=>{this.handleInput(value, i)}} // onMouseDown() would execute before onBlur()
              >{value}</div>
            )}
          </div>)
        }
      </div>
    )
  }
}

export default injectSheet(style)(Input)
