import React, { useState } from 'react';

import { Main, Card, Header, Title, ChipWrapper, Chip, Download, More, Meta, Row, Provider, File, Actions, } from './style';
import { API_URL } from '../../constant';
import { toast } from '../Toast';
import { useSelector } from 'react-redux';

const PaperBlock = ({ paper }) => {
  const isAvailable = useSelector(state => state.auth.available);
  const [show, setShow] = useState(false);
  const handleToast = () => {
    if (isAvailable) {
      toast(`已下載 ${paper.filename}`);
    } else {
      toast('請點擊右上方登入', {type: 'Info'});
    }
  };
  const toggleMeta = () => setShow(show => !show);

  return (
    <Main>
      <Card show={show}>
        <Header>
          <div>
            <Title>{paper.instructor}</Title>
            <ChipWrapper>
              <Chip>{paper.semester}</Chip>
              <Chip>{paper.type}</Chip>
            </ChipWrapper>
          </div>
          <Actions>
            <a
              {...isAvailable && {
                href: `${API_URL}/download?eid=${paper.id}&fn=${paper.filename}`,
                download: true
              }}
              onClick={handleToast}>
              <Download/>
            </a>
            <More onClick={toggleMeta} show={show}/>
          </Actions>
        </Header>
      </Card>
      <Meta show={show}>
        <Row><File/>{paper.filename}</Row>
        <Row><Provider/>{paper.provider}</Row>
      </Meta>
    </Main>
  );
};

const ExamTable = ({ exam }) => (
  exam.map(paper => <PaperBlock key={paper.id} paper={paper}/>)
);

export default ExamTable;