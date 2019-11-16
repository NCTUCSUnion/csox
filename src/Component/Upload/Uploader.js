import React, { useState, useMemo } from 'react';
import { Container } from './style';
import {
  File,
  Del,
  Meta,
  Label,
  Type,
  Description,
  InvisibleInput,
} from './style';
import { toast } from '../Toast';

const activeStyle = {
  borderColor: '#5bc8a5',
  borderStyle: 'solid',
  background: '#eee'
};
const rejectStyle = {
  borderColor: '#d50000'
};

const Uploader = ({ onDrop, onDel }) => {
  const [files, setFiles] = useState([]);
  const [ isActive, setActive ] = useState();
  const [ isFailed, setFailed ] = useState();

  const stop = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDragLeave = () => {
    setActive(undefined);
    setFailed(undefined);
  };

  const checkFile = file => {
    if(file.type && !file.type.startsWith('image') && !file.type.startsWith('application')){
      toast('不支援上傳之檔案格式', {type: 'Danger'});
      return false;
    }
    if(file.size && file.size > 10 * 1000 * 1000){
      toast('上傳檔案請勿超過 10MB!', {type: 'Danger'});
      return false; // failed if size is larger than 10MB.
    }

    return true;
  };
  const handleDrop = e => {
    stop(e);

    const files = e.dataTransfer ? e.dataTransfer.files : e.target.files || [];
    if (files.length <= 0) {
      return;
    }

    const filesArray = Array.from(files);
    setFiles(prev => {
      const cur = filesArray
        .filter(checkFile)
        .map(file => Object.assign(file, { preview: URL.createObjectURL(file) }));
      const updatedFiles = [
        ...prev,
        ...cur,
      ];
      onDrop && onDrop(updatedFiles);
      return updatedFiles;
    });
    handleDragLeave();
  };

  const handleDragOver = e => {
    stop(e);

    setActive(true);
    e.dataTransfer.dropEffect = 'copy';
    const items = Array.from(e.dataTransfer.items) || [];
    setFailed(!items.every(checkFile));
  };

  const style = useMemo(() => ({
    ...isActive && activeStyle,
    ...isFailed && rejectStyle,
  }), [ isActive, isFailed ]);

  const handleRemoveItem = index => e => {
    stop(e);

    onDel(e, index);
  };

  return (
    <Container
      style={style}
      htmlFor='uploader'
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}>
      <InvisibleInput id='uploader' type='file' onChange={handleDrop} multiple />
      {files.length > 0
        ? files.map(({name, size, type, preview}, index) => (
          <File key={index} onClick={stop}>
            <Del onClick={handleRemoveItem(index)}><i className='fas fa-times'/></Del>
            <Meta>
              <Label>{name}</Label>
              <Label>{Number.parseFloat(size / 1000000).toFixed(2)}MB</Label>
            </Meta>
            <Type href={preview} rel='noopener noreferrer' target='_blank' onClick={stop}>
              {type.startsWith('image')
                ? <img src={preview} alt='preview' />
                : type.endsWith('pdf')
                  ? <i className='fas fa-file-pdf' />
                  : <i className='fas fa-file-archive' />}
            </Type>
          </File>
        ))
        : (
          <Description>
            <p>拖曳檔案至方框內或點擊方框選取檔案上傳</p>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Description>
        )
      }
    </Container>
  );
};

export default Uploader;