import React from 'react';

import { closeModal, modal } from '../Modal';

import {
  Header,
  Title,
  Leave,
  ThemeWrapper,
  Paragraph,
  A,
  Image,
  ImageBorder,
  Content
} from './style';

const EventModal = () => {
  return (
    <ThemeWrapper>
      <Header>
        <Leave onClick={closeModal} />
        <Title>2021資工之夜 ─ 資資酷酷</Title>
      </Header>
      <Content>
        <ImageBorder>
          <Image />
        </ImageBorder>
        <Paragraph>哇！你上傳了一份考古題，幫助其他孜孜矻矻的考古學子，夠酷！</Paragraph>
        <Paragraph>
          填寫表單並在進場時告知工作人員即可兌換一張B獎抽獎卷！
          <A href='https://forms.gle/Eq5A6eAV6MAcEJBx5' target='_blank' rel='noopener noreferer'>表單連結點我</A>
        </Paragraph>
      </Content>
    </ThemeWrapper>
  );
};

export default () => {
  if (new Date() <= new Date(2021, 4, 10))
    modal(<EventModal size='sm' />)
}