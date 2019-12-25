import React, { useState } from 'react';

import { Main, Card, Header, Title, ChipWrapper, Chip, Download, More, Meta, Row, Provider, File, Actions, } from './style';
import { API_URL } from '../../constant';
import { toast } from '../Toast';

const PaperBlock = ({ paper }) => {
  const [show, setShow] = useState(false);
  const handleToast = () => {
    toast(`已下載 ${paper.filename}`);
  };
  const toggleMeta = () => setShow(show => !show);

  return (
    <Main>
      <Card show={show ? 1 : 0}>
        <Header>
          <div>
            <Title>{paper.instructor}</Title>
            <ChipWrapper>
              <Chip>{paper.semester}</Chip>
              <Chip>{paper.type}</Chip>
            </ChipWrapper>
          </div>
          <Actions>
            <a href={`${API_URL}/download?eid=${paper.id}&fn=${paper.filename}`} download onClick={handleToast}>
              <Download/>
            </a>
            <More onClick={toggleMeta} show={show ? 1 : 0}/>
          </Actions>
        </Header>
      </Card>
      <Meta show={show ? 1 : 0}>
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