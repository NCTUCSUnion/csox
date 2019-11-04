import React from 'react'
import Input from '../Input'
import classNames from 'classnames'
import Dropzone from 'react-dropzone'
import injectSheet from 'react-jss'
import style from './style'
import axios from 'axios'
import { closeModal } from '../Modal'
import { connect } from 'react-redux'
import { COURSE_TYPES } from '../../Page/Main'

const baseURL = 'https://csunion.nctu.me/_api/oldexam'

class uploadModal extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            seq: 0,
            files: [],
            instructor: '',
            course: '',
            semester: '',
            type: '',
            category: '',
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
                        data.append('semester', this.state.semester)
                        data.append('type', this.state.type)
                        data.append('course', this.state.course)
                        data.append('instructor', this.state.instructor)
                        data.append('category', this.state.category)
                        data.append('uid', this.props.uid)

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
        const {classes, courses, teachers} = this.props
        const {files} = this.state
        return (
            <div>
                <div className={classes.header}>
                    <div className={classNames('fas fa-times', classes.leftAction)} onClick={closeModal} />
                    <span className={classes.title}>
            上傳考古題
                    </span>
                    <span className={classes.action} onClick={this.handleUpload}>
                        <i className='fas fa-cloud-upload-alt' />&nbsp;上傳
                    </span>
                </div>
                <form action=''>
                    <div className={classes.inputContainer}>
                        <Input label='西元年份' autoComplete={false} onChange={(v) => {this.setState({semester: v})}}/>
                        <Input label='類型' autoComplete={['期中考','期末考','小考']} onChange={(v) => {this.setState({type: v})}}/>
                        <Input label='課名' autoComplete={courses.map(c => c.zh)} onChange={(v) => {this.setState({course: v})}}/>
                        <Input label='分類' autoComplete={COURSE_TYPES} onChange={(v) => {this.setState({category: v})}}/>
                        <Input label='老師' autoComplete={teachers} onChange={(v) => {this.setState({instructor: v})}}/>
                    </div>
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

export default connect((state) => {
    return {
        uid: state.auth.id,
        courses: state.main.allCourse,
        teachers: state.main.teachers.map(t => t.name),
    }
})(injectSheet(style)(uploadModal))
