import React from 'react'
import Input from '../Input'
import classNames from 'classnames'
import Dropzone from 'react-dropzone'
import injectSheet from 'react-jss'
import style from './style'
import axios from 'axios'

const baseURL = 'https://csunion.nctu.me/_api/oldexam'

class uploadModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      seq: 0,
      files: []
    }
    this.handleDrop = this.handleDrop.bind(this)
    this.handleDel = this.handleDel.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
  }
  handleDrop (files) {
    if (files.length > 0) {
      let updatedFiles = this.state.files
      let {seq} = this.state
      files.forEach(file => {
        updatedFiles.push({
          id: seq,
          name: file.name,
          preview: file.preview,
          size: Number.parseFloat(file.size / 1000000).toFixed(2),
          type: file.type.split('/')
        })
        seq = seq + 1
      })
      this.setState({seq: seq, files: updatedFiles})
    }
  }
  handleDel (e, id) {
    let updatedFiles = this.state.files
    updatedFiles = updatedFiles.filter(file => file.id !== id)
    this.setState({files: updatedFiles})
    e.stopPropagation()
  }
  handleUpload () {
    this.state.files.forEach(file => {
      let {name, preview} = file
      let config = {
        responseType: 'blob'
      }
      axios.get(preview, config)
        .then(res => res.data)
        .then(
          file => {
            let data = new FormData()
            data.append('file', file)
            data.append('filename', name)
            const options = {
              method: 'POST',
              headers: { 'content-type': 'multipart/form-data' },
              data: data,
              url: `${baseURL}/upload`
            }
            axios(options)
          }
        )
        .catch(err => console.log(err))})
  }
  render () {
    const {classes} = this.props
    const {files} = this.state
    return (
      <div>
        <div className={classes.title}>
          上傳考古題
          <div className={classes.action} onClick={this.handleUpload}>
            <i className='fas fa-cloud-upload-alt' />&nbsp;上傳
          </div>
        </div>
        <form action=''>
          <Input label='西元年份' autoComplete={false}/>
          <Input label='類型' autoComplete={['期中考','期末考','小考']}/>
          <Input label='課名' autoComplete={['線性代數','資料庫概論','計算機網路概論']}/>
          <Input label='老師' autoComplete={['彭文孝','彭文志','曾建超']}/>
        <Dropzone
          accept='image/*,application/*'
          onDrop={this.handleDrop}
          className={classNames(classes.upload, files.length > 1 && 'active')}
          activeClassName={classes.activeUpload}
          rejectClassName={classes.rejectUpload}
          multiple={false}
          // disabledClassName={classes.disabledUpload}
          maxSize={10 * 1000 * 1000} // maxsize is 10MB
        >
          {files.length > 0
            ? files.map(({id, name, size, type, preview}) => (
              <div className={classes.file} key={id}>
                <div className={classes.del} onClick={(e) => this.handleDel(e, id)}>
                  <i className='fas fa-times' />
                </div>
                <div className={classes.meta}>
                  <div className={classes.label}>{name}</div>
                  <div className={classes.label}>{size}MB</div>
                </div>
                <a className={classes.type} href={preview} rel='noopener noreferrer' target='_blank' onClick={(e) => { e.stopPropagation() }}>
                  {
                    type[0] === 'image' ? <img src={preview} style={{width: '3rem'}} alt='preview' />
                      : type[1] === 'pdf' ? <i className='fas fa-file-pdf' /> : <i className='fas fa-file-archive' />}
                </a>
              </div>
            ))
            : (
              <div>
                <p>拖曳檔案至方框內或點擊方框選取檔案上傳</p>
                <p>Try dropping some files here, or click to select files to upload.</p>
              </div>
            )
          }

        </Dropzone>
        </form>
      </div>
    )
  }
}

export default injectSheet(style)(uploadModal)
