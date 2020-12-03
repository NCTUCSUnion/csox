import React from 'react';

import { closeModal } from '../Modal';

import {
  Header,
  Title,
  Leave,
  ThemeWrapper,
  Paragraph,
  A,
  Image
} from './style';

const EventModal = () => {
  return (
    <ThemeWrapper>
      <Header>
        <Leave onClick={closeModal} />
        <Title>聖誕老人考古拉的作戰計畫</Title>
      </Header>
      <Image />
      <Paragraph>你成功幫助聖誕老人考古拉完成一部份的計畫了！</Paragraph>
      <Paragraph>
        現在填寫表單領取耶誕歐趴糖吧！
        <A href='https://forms.gle/Ej644KyJvvJG76ZW7' target='_blank'>表單連結點我</A>
      </Paragraph>
    </ThemeWrapper>
  );
};

export default EventModal;
