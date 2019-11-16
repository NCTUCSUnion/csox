import React from 'react';
import Input from '../Input';
import {
  Header,
  Title,
  Leave,
  Action,
  InputContainer,
} from './style';
import axios from 'axios';
import { closeModal } from '../Modal';
import { connect } from 'react-redux';
import { COURSE_TYPES } from '../../Page/Main';
import { toast } from '../Toast';
import Loading from '../Loading';
import Uploader from './Uploader';

const baseURL = 'https://csunion.nctu.me/_api/oldexam';

class uploadModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      files: [],
      instructor: '',
      course: '',
      semester: '',
      type: '',
      category: '',
      loading: false,
    };
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleDrop (files) {
    if (files.length > 0) {
      this.setState({files: files});
    }
  }
  handleDel (e, index) {
    e.stopPropagation();

    let updatedFiles = this.state.files;
    updatedFiles.splice(index, 1);
    this.setState({files: updatedFiles});
  }
  handleUpload () {
    this.setState({loading: true });
    this.state.files.forEach(file => {
      let {name, preview} = file;
      let config = {
        responseType: 'blob'
      };
      axios.get(preview, config)
        .then(res => res.data)
        .then(
          file => {
            let data = new FormData();
            data.append('file', file);
            data.append('filename', name);
            data.append('semester', this.state.semester);
            data.append('type', this.state.type);
            data.append('course', this.state.course);
            data.append('instructor', this.state.instructor);
            data.append('type', this.state.category);
            data.append('uid', this.props.uid);

            const options = {
              method: 'POST',
              headers: { 'content-type': 'multipart/form-data' },
              data: data,
              url: `${baseURL}/upload`
            };
            axios(options).then(res => {
              this.setState({loading: false });
              if (res.statusText === 'OK') {
                toast('上傳成功');
                closeModal();
              } else {
                toast('上傳失敗', {type: 'Danger'});
              }
            }).catch(() => {
              this.setState({loading: false });
              toast('上傳失敗', {type: 'Danger'});
            });
          }
        )
        .catch(err => console.log(err));});
  }
  render () {
    const { courses, teachers} = this.props;
    return (
      <div>
        <Header>
          <Leave onClick={closeModal}/>
          <Title>上傳考古題</Title>
          <Action active={!this.state.loading} {...!this.state.loading && { onClick: this.handleUpload }}>
            {this.state.loading ? <Loading/> : <><i className='fas fa-cloud-upload-alt' />&nbsp;上傳</>}
          </Action>
        </Header>
        <form action=''>
          <InputContainer>
            <Input label='西元年份' autoComplete={false} onChange={(v) => {this.setState({semester: v});}}/>
            <Input label='類型' autoComplete={['期中考','期末考','小考']} onChange={(v) => {this.setState({type: v});}}/>
            <Input label='課名' autoComplete={courses.map(c => c.zh)} onChange={(v) => {this.setState({course: v});}}/>
            <Input label='分類' autoComplete={COURSE_TYPES} onChange={(v) => {this.setState({category: v});}}/>
            <Input label='老師' autoComplete={teachers} onChange={(v) => {this.setState({instructor: v});}}/>
          </InputContainer>
          <Uploader onDrop={this.handleDrop} onDel={this.handleDel}/>
        </form>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    uid: state.auth.id,
    courses: state.main.allCourse,
    teachers: state.main.teachers.map(t => t.name),
  };
})(uploadModal);
