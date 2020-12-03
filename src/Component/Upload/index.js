import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdFileUpload } from 'react-icons/md';
import Input from '../Input';
import { COURSE_TYPES } from '../../constant';
import { closeModal } from '../Modal';
import Uploader from './Uploader';
import { toast } from '../Toast';

import {
  Header,
  Title,
  Leave,
  Wrapper,
  Action,
  InputContainer,
  Loading,
  Form,
  ThemeWrapper
} from './style';
import { uploadFile } from '../../Redux/Action/upload';

const UploadModal = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.main.allCourse);
  const teachers = useSelector(state => state.main.teachers.map(t => t.name));
  const loading = useSelector(state => state.upload.loading);
  const [ form, setForm ] = useState({
    files: [],
    instructor: '',
    course: '',
    semester: '',
    type: '',
    category: '',
  });
  const handleForm = (key) => (value) => {
    setForm(form => ({
      ...form,
      [key]: value,
    }));
  };
  const handleDrop = files => {
    if (files.length > 0) {
      handleForm('files')(files);
    }
  };
  const handleDel = (e, index) => {
    e.stopPropagation();

    let updatedFiles = form.files;
    updatedFiles.splice(index, 1);
    handleForm('files')(updatedFiles);
  };
  const handleUpload = () => {
    /**
     *  Only upload first file.
     *  TODO: compression if multiple files.
     */
    if(form.files.length <= 0){
      toast('至少需上傳一個檔案', {type: 'Danger'});
      return;
    }
    const { semester, type, course, instructor, category } = form;
    dispatch(
      uploadFile({ file: form.files[0], semester, type, course, instructor, category })
    );
  };

  return (
    <ThemeWrapper>
      <Header>
        <Leave onClick={closeModal}/>
        <Title>上傳考古題</Title>
        <Action active={!loading} {...!loading && { onClick: handleUpload }}>
          {loading ? <Loading/> : <Wrapper><MdFileUpload/>&nbsp;上傳</Wrapper>}
        </Action>
      </Header>
      <Form action=''>
        <InputContainer>
          <Input label='西元年份' autoComplete={false} onChange={handleForm('semester')}/>
          <Input label='類型' autoComplete={['期中考','期末考','小考','第一次期中考','第二次期中考']} onChange={handleForm('type')}/>
          <Input label='課名' autoComplete={courses.map(c => c.zh)} onChange={handleForm('course')}/>
          <Input label='分類' autoComplete={COURSE_TYPES} onChange={handleForm('category')}/>
          <Input label='老師' autoComplete={teachers} onChange={handleForm('instructor')}/>
        </InputContainer>
        <Uploader onDrop={handleDrop} onDel={handleDel}/>
      </Form>
    </ThemeWrapper>
  );
};

export default UploadModal;
