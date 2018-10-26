import React from 'react'
import Input from '../Input'
import Dropzone from 'react-dropzone'
import injectSheet from 'react-jss'
import style from './style'

class uploadModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      done: false,
      name: '',
      size: null,
      type: ''
    }
    this.handleDrop = this.handleDrop.bind(this)
  }
  handleDrop (file) {
    if (file.length > 0) {
      let {name, size, type} = file[0]
      this.setState({
        done: true,
        name: name,
        size: Number.parseFloat(size / 1000000).toFixed(2),
        type: type.split('/')[1]
      })
    }
    // axios.post()
  }

  render () {
    const {classes} = this.props
    const {done, name, size, type} = this.state
    return (
      <div>
        <div className={classes.title}>上傳考古題</div>
        <form action=''>
          <Input label='年份' />
          <Input label='類型' />
        </form>
        <Dropzone
          accept='application/pdf,application/zip,application/x-rar-compressed,application/x-7z-compressed'
          onDrop={this.handleDrop}
          className={classes.upload}
          activeClassName={classes.activeUpload}
          rejectClassName={classes.rejectUpload}
          // disabledClassName={classes.disabledUpload}
          disabled={done}
          maxSize={10 * 1000 * 1000} // maxsize is 10MB
        >
          {done
            ? <div className={classes.file}>
              <div className={classes.del} onClick={() => this.setState({done: false})}>
                <i className='fas fa-times' />
              </div>
              <div className={classes.meta}>
                <div className={classes.label}>{name}</div>
                <div className={classes.label}>{size}MB</div>
              </div>
              <div className={classes.type}>
                {type === 'pdf' ? <i className='fas fa-file-pdf' /> : <i className='fas fa-file-archive' />}
              </div>
            </div>
            : (
              <div>
                <p>拖曳檔案至方框內或點擊方框選取檔案上傳</p>
                <p>Try dropping some files here, or click to select files to upload.</p>
              </div>
            )
          }

        </Dropzone>

      </div>
    )
  }
}

export default injectSheet(style)(uploadModal)
